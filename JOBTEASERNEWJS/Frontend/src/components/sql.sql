CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    short_description VARCHAR(500) NOT NULL,
    detailed_description TEXT NOT NULL,
    wages DECIMAL(10, 2) NOT NULL,
    place VARCHAR(255) NOT NULL,
    working_time VARCHAR(255) NOT NULL,
    company_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    advertisement_id INT NOT NULL,
    person_id INT NOT NULL,
    email_sent BOOLEAN DEFAULT FALSE,
    application_status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    phone_number VARCHAR(20),
    message TEXT,
    FOREIGN KEY (advertisement_id) REFERENCES advertisements(id),
    FOREIGN KEY (person_id) REFERENCES people(id)
);

CREATE TABLE profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    person_id INT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    email VARCHAR(255) NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    professional_experience TEXT,
    education TEXT,
    cv_url VARCHAR(255), -- Stocke l'URL du CV ou un chemin vers un fichier
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (person_id) REFERENCES people(id)
);


 
