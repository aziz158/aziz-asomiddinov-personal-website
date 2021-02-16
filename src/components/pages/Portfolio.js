import React, {useState} from 'react';
import {Page} from 'react-pdf';
import { Document } from 'react-pdf/dist/umd/entry.parcel';
import './Portfolio.css';
import Resume from '../../files/Aziz2021_Resume.pdf';

const external_pdf = 'http://www.africau.edu/images/default/sample.pdf';

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