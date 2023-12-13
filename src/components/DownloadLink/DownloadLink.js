'use client'
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DownloadLink = () => {
  const handleDownload = () => {
    const pdfUrl = '/AsifAhammed.pdf'; // Adjust the path to your PDF file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AsifAhammed.pdf'; // Specify the desired file name
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownload}><ArrowDownwardIcon></ArrowDownwardIcon>  Resume</button>
    </div>
  );
};

export default DownloadLink;
