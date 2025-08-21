import React from 'react';

function PdfLink({ filePath = '', title = 'PDF Document', linkText = 'View PDF', renderAs = 'button', pdfModalRef }) {
  const openModal = () => {
    console.info(`PdfLink clicked. FilePath: ${filePath}, Title: ${title}`);

    if (!pdfModalRef?.current) {
      window.alert('Modal not initialized.');
      console.warn('PdfModal reference is null. Modal cannot be opened.');
      return;
    }

    pdfModalRef.current.open(filePath, title);
    console.info('PdfModal.open() called successfully.');
  };

  return renderAs === 'link' ? (
    <a href="/" className="link-button" onClick={(e) => { e.preventDefault(); openModal(); }}>
      {linkText}
    </a>
  ) : (
    <button className="btn btn-primary btn-lg mt-3" onClick={openModal}>
      {linkText}
    </button>
  );
}

export default PdfLink;
