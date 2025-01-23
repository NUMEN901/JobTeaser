import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './SL-113022-54210-35.jpg';

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const navigate = useNavigate(); // Pour rediriger après la création de compte

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    localStorage.setItem('isAuthenticated', 'true'); // Enregistre l'état d'authentification

    navigate('/je sais pas');
  };
  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupContainer}>
        <h2 style={styles.heading}>Créer un compte</h2>
        <form onSubmit={handleSignupSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>Prénom</label>
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
            <label htmlFor="lastName" style={styles.label}>Nom</label>
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
            <label htmlFor="email" style={styles.label}>Adresse email</label>
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
            <label htmlFor="phone" style={styles.label}>Numéro de téléphone</label>
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
            <label htmlFor="password" style={styles.label}>Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" onClick={handleLoginRedirect} style={styles.signupButton}>Créer un compte</button>
        </form>
      </div>
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "120vh",
    marginTop: '-50px',
  },
  signupContainer: {
    backgroundColor: '#001848',
    opacity: 0.9,
    padding: '35px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '460px',
    textAlign: 'center' as 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#ffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#ffff',
  },
  input: {
    padding: '11px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  signupButton: {
    padding: '12px',
    backgroundColor: '#b32080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default Signup;
