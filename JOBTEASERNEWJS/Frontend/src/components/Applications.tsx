import React, { useState } from "react";
import backgroundImage from './SL-113022-54210-35.jpg';

interface Application {
  id: number;
  title: string;
  status: "en attente" | "acceptée" | "refusée";
}

// simuler
const initialApplications: Application[] = [
  { id: 1, title: "Développeur Front-end", status: "en attente" },
  { id: 2, title: "Administrateur Réseau", status: "acceptée" },
];

const Applications: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>(initialApplications);

  const removeApplication = (id: number) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mes Candidatures</h1>
      {applications.length === 0 ? (
        <p style={styles.noApplications}>Vous n'avez aucune candidature.</p>
      ) : (
        <ul style={styles.applicationList}>
          {applications.map((app) => (
            <li key={app.id} style={styles.applicationItem}>
              <div>
                <h3>{app.title}</h3>
                <p>
                  <strong>État :</strong> {app.status}
                </p>
              </div>
              <button
                style={styles.deleteButton}
                onClick={() => removeApplication(app.id)} //back
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    paddingTop: "100px",
    textAlign: "center" as "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#f9f9f9",
  },
  applicationList: {
    listStyleType: "none",
    padding: "0",
    margin: "0 auto",
    maxWidth: "1000px",
  },
  applicationItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between" as "space-between",
    alignItems: "center" as "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noApplications: {
    fontSize: "1.5rem",
    color: "#666",
  },
};

export default Applications;
