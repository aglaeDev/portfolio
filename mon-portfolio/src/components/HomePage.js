import React from 'react';

const HomePage = () => {
  const rawHtml = require('!raw-loader!../public/index.html'); // Charge le contenu HTML du fichier public/index.html

  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
};

export default HomePage;