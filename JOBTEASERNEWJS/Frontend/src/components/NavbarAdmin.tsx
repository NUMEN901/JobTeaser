import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal, faClipboard, faCity } from '@fortawesome/free-solid-svg-icons';

const NavbarAdmin: React.FC = () => {
  const handleLogout = () => {
    alert("Vous êtes déconnecté !");
    // Logique pour déconnexion, ex : suppression du token ou redirection vers la page de connexion
    // localStorage.removeItem("authToken");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
          <img src="src\assets\image\logo jt.png" alt="Logo du site" style={styles.logo} />
      </div>

      
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}><FontAwesomeIcon icon={faClipboard} style={styles.icon}/></Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/AdminCompanie" style={styles.navLink}><FontAwesomeIcon icon={faCity} style={styles.icon} /></Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/profile" style={styles.navLink}><FontAwesomeIcon icon={faSquarePollHorizontal} style={styles.icon} /></Link>
        </li>
      </ul>

      <div style={styles.navRight}>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Déconnexion
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
    width: "56px",
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
    color: "#ff4d4d",
    opacity: 0.9,
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default NavbarAdmin;
