const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const multer = require('multer'); 
const session = require('express-session'); 
require('dotenv').config();

const app = express();
const PORT = 5000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });


app.use(cors({
  origin: ['http://localhost:3000'], 
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));


app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sc19A0282001@&',
  database: 'jobteaser_db',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Job Teaser API!');
});

app.post('/register', async (req, res) => {
  const { first_name, last_name, phone, email, password } = req.body;

  if (!first_name || !last_name || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    db.query('SELECT email FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('Error checking email:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query('INSERT INTO users (first_name, last_name, phone, email, password) VALUES (?, ?, ?, ?, ?)', 
        [first_name, last_name, phone, email, hashedPassword], (err, results) => {
          if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Database error during registration' });
          }

          res.status(201).json({ message: 'User registered successfully' });
        });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.session.userId = user.id; 

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
      },
    });
  });
});

app.post('/applyJob', upload.single('cv'), (req, res) => {
  const { firstName, lastName, phone, gender, email, experience, education, job_id } = req.body;
  const cvFile = req.file ? req.file.filename : null; 
  const sql = 'INSERT INTO applications (first_name, last_name, phone, gender, email, experience, education, cv, job_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [firstName, lastName, phone, gender, email, experience, education, cvFile, job_id];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting application:', err);
      return res.status(500).json({ message: 'Failed to submit application' });
    }
    res.status(200).json({ message: 'Application submitted successfully!' });
  });
});

app.get('/allJobs', (req, res) => {
    const sql = `
      SELECT 
        jobs.id AS job_id, 
        jobs.title, 
        jobs.short_description, 
        jobs.detailed_description, 
        jobs.wages, 
        jobs.place, 
        jobs.working_time,
        companies.id AS company_id, 
        companies.name AS company_name, 
        companies.address AS company_address, 
        companies.website AS company_website, 
        companies.created_at AS company_created_at, 
        companies.updated_at AS company_updated_at
      FROM jobs
      INNER JOIN companies ON jobs.company_id = companies.id
    `;
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching jobs with company details:', err);
        return res.status(500).json({ message: 'Failed to retrieve jobs' });
      }
      res.status(200).json(results);
    });
  });

app.get('/allApplications', (req, res) => {
    const sql = `
      SELECT 
        applications.id AS application_id,
        applications.first_name,
        applications.last_name,
        applications.phone,
        applications.gender,
        applications.email,
        applications.experience,
        applications.education,
        applications.cv,
        applications.status,
        applications.applied_at,
        jobs.id AS job_id,
        jobs.title,
        jobs.short_description,
        jobs.detailed_description,
        jobs.wages,
        jobs.place,
        jobs.working_time,
        jobs.company_id
      FROM applications
      INNER JOIN jobs ON applications.job_id = jobs.id
    `;
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching applications:', err);
        return res.status(500).json({ message: 'Failed to retrieve applications' });
      }
      res.status(200).json(results);
    });
  });
  
  app.get('/jobs', (req, res) => {
    const sql = `
      SELECT 
        jobs.id AS job_id, 
        jobs.title, 
        jobs.short_description, 
        jobs.detailed_description, 
        jobs.wages, 
        jobs.place, 
        jobs.working_time, 
        jobs.created_at, 
        jobs.updated_at, 
        companies.name AS company_name 
      FROM jobs 
      INNER JOIN companies ON jobs.company_id = companies.id
    `;
    
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
    });
  });
app.delete('/deleteCompany/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM companies WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting company:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json({ message: 'Company deleted successfully' });
  });
});

app.delete('/jobs/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM jobs WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting job:', err);
      return res.status(500).json({ message: 'Failed to delete job' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  });
});

  app.put('/updateApplicationStatus/:id', (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
  
    const sql = 'UPDATE applications SET status = ? WHERE id = ?';
    db.query(sql, [status, id], (err, result) => {
      if (err) {
        console.error('Error updating application status:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(200).json({ message: 'Status updated successfully' });
    });
  });
  
  app.post('/jobs', (req, res) => {
    const { title, short_description, detailed_description, wages, place, working_time, company_id } = req.body;
    const sql = 'INSERT INTO jobs (title, short_description, detailed_description, wages, place, working_time, company_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, short_description, detailed_description, wages, place, working_time, company_id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, ...req.body });
    });
  });
  
  app.get('/companies', (req, res) => {
    const sql = 'SELECT id, name FROM companies';
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
    });
  });

  app.post('/createCompany', (req, res) => {
    const { name, address, website } = req.body;
  
    if (!name || !address || !website) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const sql = 'INSERT INTO companies (name, address, website) VALUES (?, ?, ?)';
    db.query(sql, [name, address, website], (err, result) => {
      if (err) {
        console.error('Error inserting company:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({
        message: 'Company created successfully',
        companyId: result.insertId,
        data: { name, address, website },
      });
    });
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
