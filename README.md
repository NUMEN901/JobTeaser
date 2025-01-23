# JobTeaser

**JobTeaser** is a job management platform that enables users to find job opportunities, track applications, and manage profiles, while admins can oversee jobs, companies, and user applications. The project is developed with **React** for the frontend, **Node.js/Express** for the backend, and **MySQL** for the database.

---

## Features

### User Features

#### Authentication
- Secure user registration and login using session-based authentication.
- Restricted access to certain features for unauthenticated users.

#### Job List
- View all available job postings.
- Access detailed descriptions for each job and apply directly.

#### Application Tracking
- Monitor the status of submitted applications (Pending, Accepted, Rejected).

#### Profile Management
- Update personal details, work experience, education, and upload a CV.

### Admin Features

#### Job Management
- Admins can create, edit, delete, and view job postings.

#### Company Management
- Admins can add and delete companies and view the full list.

#### Application Management
- View all user applications and update their statuses (Pending, Accepted, Rejected).

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (or **yarn**) for dependency management
- **MySQL** for the database
- **MySQL Workbench** (optional for database management)

---

## Installation

### Backend
1. Navigate to the `Backend` directory.
2. Install dependencies using:
   ```bash
   npm install
3. Start the backend server:
   ```bash
   node server.js

### Frontend
1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the React development server:
   ```bash
   npm start

### Database
1. Create a new database in MySQL Workbench or via the command line.
2. Import the provided SQL schema (jobteaser_db.sql) to set up the necessary tables.


---

### Usage

### Admin Account
Create an admin account with specific credentials to manage the application. By default:
- Email: admin@example.com
- Password: admin




