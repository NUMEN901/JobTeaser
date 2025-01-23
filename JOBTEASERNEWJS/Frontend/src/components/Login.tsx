import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './SL-113022-54210-35.jpg';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSignupRedirect = () => {
    navigate('/SignUp');
  };

  const handleLoginRedirect = () => {
    navigate('/UserDashboard');
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <h2 style={styles.heading}>Connexion</h2>
        <form onSubmit={handleLoginSubmit} style={styles.form}>
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
            <label htmlFor="password" style={styles.label}>Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" onClick={handleLoginRedirect} style={styles.loginButton}>Se connecter</button>
          <div style={styles.forgotPassword}>
            <a href="#" style={styles.link}>Mot de passe oublié ?</a>
          </div>
            <button onClick={handleSignupRedirect} style={styles.signupButton}>
            Créer un compte
            </button>
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
    gap: '50px',
    padding: '20px',
    marginTop: '-50px'
  },
  loginContainer: {
    backgroundColor: '#001848',
    padding: '40px',
    opacity: 0.9,
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
    gap: '20px',
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
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  loginButton: {
    padding: '12px',
    backgroundColor: '#b32080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  forgotPassword: {
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  signupButton: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;
