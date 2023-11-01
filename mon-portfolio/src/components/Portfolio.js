import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/portfolio')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <div>
      <h1>Mon Portfolio</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.nom_du_projet}</li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;