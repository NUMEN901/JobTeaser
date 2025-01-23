import React from "react";
import { useNavigate } from 'react-router-dom';

const NavbarDef: React.FC = () => {
    const navigate = useNavigate(); // Initialiser le hook

  // Fonction pour gérer la redirection vers la page de connexion
    const handleLogin = () => {
    navigate('/login'); // Redirige vers la page de connexion
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
          <img src="src\assets\image\logo jt.png" alt="Logo du site" style={styles.logo} />
      </div>
      <div style={styles.navRight}>
        <button onClick={handleLogin} style={styles.logoutButton}>
          Connexion
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#b22180',
    padding: "20px 40px",
    width: "100%",
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "auto",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center" as "center",
    margin: 0,
    padding: 0,
    gap: "40px",
  },
  navItem: {
    fontSize: "1.2rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  icon: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  navRight: {
    display: "flex",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#fff",
    color: "green",
    opacity: 0.9,
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default NavbarDef;
