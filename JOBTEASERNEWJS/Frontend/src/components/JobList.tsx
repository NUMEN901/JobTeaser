import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from './SL-113022-54210-35.jpg';

interface Job {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  wages: string;
  place: string;
  workingTime: string;
  company: string;
}

// simuler
const jobData: Job[] = [
  {
    id: 1,
    title: "Développeur Front-end",
    shortDescription: "Développement d'applications web réactives.",
    detailedDescription:
      "Nous recherchons un développeur front-end pour rejoindre notre équipe. Vous travaillerez sur des projets innovants en utilisant React, JavaScript, et CSS.",
    wages: "40,000€/an",
    place: "Paris, France",
    workingTime: "Temps plein",
    company: "Tech Corp",
  },
  {
    id: 2,
    title: "Administrateur Réseau",
    shortDescription: "Gestion des infrastructures réseau.",
    detailedDescription:
      "Vous serez en charge de la gestion des serveurs, de la configuration réseau et de la sécurité informatique au sein de l'entreprise.",
    wages: "35,000€/an",
    place: "Lyon, France",
    workingTime: "Temps plein",
    company: "Net Solutions",
  },
];

const JobList: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleApply = (jobTitle: string) => {
    alert(`Vous avez postulé pour le poste : ${jobTitle}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Offres d'emploi</h1>
      <div style={styles.jobList}>
        {jobData.map((job) => (
          <div
            key={job.id}
            style={{
              ...styles.jobCard,
              transform: expandedJobId === job.id ? "scale(1.05)" : "scale(1)",
            }}
          >
            <h2 style={styles.jobTitle}>{job.title}</h2>
            <p style={styles.shortDescription}>{job.shortDescription}</p>
            <button onClick={() => toggleDetails(job.id)} style={styles.showMoreButton}>
              {expandedJobId === job.id ? "Show less" : "Show more"}<FontAwesomeIcon icon={faChevronDown} style={styles.icon} />
            </button>
            {expandedJobId === job.id && (
              <div style={styles.details}>
                <p><strong>Description:</strong> {job.detailedDescription}</p>
                <p><strong>Salaire:</strong> {job.wages}</p>
                <p><strong>Lieu:</strong> {job.place}</p>
                <p><strong>Temps de travail:</strong> {job.workingTime}</p>
                <p><strong>Entreprise:</strong> {job.company}</p>

                {/* fonct button apply */}
                <button onClick={() => handleApply(job.title)} style={styles.applyButton}>
                  Apply 
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "40px 20px",
    paddingTop: "100px", 
    textAlign: "center" as "center",
  },
  icon: {
    marginLeft: '8px',
    fontSize: '1.2rem',
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color : "#f9f9f9",
  },
  jobList: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    width: "80%", // Augmenter la largeur des offres
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    border: "1px solid #ddd",
    textAlign: "left" as "left",
  },
  jobTitle: {
    fontSize: "1.75rem",
    color: "#007bff",
    marginBottom: "10px",
  },
  shortDescription: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
  showMoreButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  details: {
    marginTop: "10px",
    textAlign: "left" as "left",
    color: "#333",
  },
  applyButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

"@media (max-width: 768px)": {
  jobCard: {
  width: "90%", 
  padding: "15px", 
  },
  heading: {
  fontSize: "2rem",
  },
  showMoreButton: {
  fontSize: "0.9rem",
  padding: "8px 15px", 
  },
  jobTitle: {
  fontSize: "1.5rem",
  },
},
};

export default JobList;
