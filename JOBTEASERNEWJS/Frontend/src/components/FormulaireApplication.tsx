import React, { useState } from "react";
import backgroundImage from './SL-113022-54210-35.jpg';

const FormulaireApplication: React.FC = () => {
  const [firstName, setFirstName] = useState<string>(""/* recuperer les valeurs de la base de donnée user*/);
  const [lastName, setLastName] = useState<string>(""/* recuperer les valeurs de la base de donnée user*/);
  const [phone, setPhone] = useState<string>(""/* recuperer les valeurs de la base de donnée user*/);
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>(""/* recuperer les valeurs de la base de donnée user*/);
  const [experience, setExperience] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [cv, setCv] = useState<File | null>(null);

  // Fonction import CV
  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  // Fonction soumission formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Votre profil a été mis à jour avec succès !`);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.profileCard}>
        <h1 style={styles.heading}>Postuler à l’offre</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>Prénom :</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="lastName" style={styles.label}>Nom :</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Numéro de téléphone :</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="gender" style={styles.label}>Genre :</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.select}
              required
            >
              <option value="">Sélectionnez votre genre</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="experience" style={styles.label}>Expérience professionnelle :</label>
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={styles.textarea}
              required
            ></textarea>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="education" style={styles.label}>Formation :</label>
            <textarea
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              style={styles.textarea}
              required
            ></textarea>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="cv" style={styles.label}>Télécharger votre CV :</label>
            <input
              type="file"
              id="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleCvUpload}
              style={styles.input}
            />
            {cv && <p style={styles.cvFile}>Fichier importé : {cv.name}</p>}
          </div>

          <button type="submit" style={styles.submitButton}>
            Postuler
          </button>
        </form>
      </div>
    </div>
  );
};


const styles = {
  pageContainer: {
    fontFamily: "'Roboto', sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "40px 20px",
    paddingTop: "100px", 
    display: "flex",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    marginTop: '-50px',
  },
  profileCard: {
    backgroundColor: '#001848',
    opacity: 0.9,
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "20px",
    textAlign: "center" as "center",
    color: "#ffff",
    fontWeight: 600,
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: 500,
    color: "#ffff",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    transition: "border-color 0.3s ease",
    outline: "none",
    ':focus': {
      borderColor: "#007bff",
    },
  },
  select: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    transition: "border-color 0.3s ease",
    outline: "none",
    ':focus': {
      borderColor: "#007bff",
    },
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    minHeight: "100px",
    transition: "border-color 0.3s ease",
    outline: "none",
    ':focus': {
      borderColor: "#007bff",
    },
  },
  cvFile: {
    marginTop: "10px",
    fontSize: "4rem",
    color: "#ffff",
    backgroundColor: '#ffff',
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "14px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    ':hover': {
      backgroundColor: "#0056b3",
    },
  },
};

export default FormulaireApplication;
