import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import './Portfolio.css';
import Resume from '../../files/Aziz2021_Resume.pdf';

function Portfolio() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return(
  <div className='portfolio'>
    <div>
      <Document
        file={Resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  </div>);
}

export default Portfolio;