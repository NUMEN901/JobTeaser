import React, { useState, useEffect } from "react";
import backgroundImage from './SL-113022-54210-35.jpg';

// Interface pour le type de compagnie
interface Company {
  id: number;
  name: string;
  address: string;
  website: string;
}

const AdminPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [website, setWebsite] = useState<string>(''); 
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null);

  // Charger des compagnies fictives au chargement de la page
  useEffect(() => {
    fetchCompanies();
  }, []);

  // Fonction pour récupérer des compagnies fictives
  const fetchCompanies = async () => {
    setLoading(true);
    try {
      // Simuler un délai pour illustrer un chargement
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simuler des données de compagnies
      const sampleCompanies = [
        { id: 1, name: 'Tech Innovators', address: '123 Rue du Tech, Paris', website: 'http://techinnovators.com' },
        { id: 2, name: 'Creative Minds', address: '456 Boulevard Créatif, Lyon', website: 'http://creativeminds.fr' },
        { id: 3, name: 'Green Energy Solutions', address: '789 Avenue Écologie, Marseille', website: 'http://greenenergy.com' },
        { id: 4, name: 'Future Designs', address: '1010 Route du Futur, Lille', website: 'http://futurdesigns.com' },
      ];

      setCompanies(sampleCompanies);
    } catch (error) {
      console.error('Erreur lors de la récupération des compagnies:', error);
      setError("Erreur lors de la récupération des données");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour ajouter une nouvelle compagnie
  const handleAddCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !website) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    try {
      const newCompany: Company = {
        id: companies.length + 1, // Créer un nouvel ID fictif
        name,
        address,
        website
      };

      setCompanies([...companies, newCompany]);
      alert('Compagnie ajoutée avec succès');
      setName('');
      setAddress('');
      setWebsite('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la compagnie:', error);
      alert('Erreur lors de l\'ajout de la compagnie');
    }
  };

  // Fonction pour supprimer une compagnie
  const handleDeleteCompany = (id: number) => {
    const updatedCompanies = companies.filter(company => company.id !== id);
    setCompanies(updatedCompanies);
    alert('Compagnie supprimée avec succès');
  };

  return (
   <div style={styles.container}>
    <div style={styles.companiecontainer}>
      <h2 style={styles.heading}>Gestion des Compagnies</h2>

      {/* Formulaire pour ajouter une compagnie */}
      <form onSubmit={handleAddCompany} style={styles.form}>
        <input
          type="text"
          placeholder="Nom de la compagnie"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Adresse de la compagnie"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Site Web de la compagnie"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Ajouter</button>
      </form>

      {/* Liste des compagnies */}
      <h3 style={styles.heading}>Liste des Compagnies</h3>

      {loading ? (
        <p>Chargement des données...</p>
      ) : error ? (
        <p>{error}</p>
      ) : companies.length === 0 ? (
        <p>Aucune compagnie disponible</p>
      ) : (
        <ul style={styles.companyList}>
          {companies.map((company) => (
            <li key={company.id} style={styles.companyItem}>
              <span>{company.name} - {company.address} - <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></span>
              <button
                onClick={() => handleDeleteCompany(company.id)}
                style={styles.deleteButton}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
   </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "150vh",
  },
  companiecontainer:{
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#001848',
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
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  addButton: {
    margin: '10px 0px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  companyList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  companyItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminPage;
