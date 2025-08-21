import React, { useState, useImperativeHandle, forwardRef } from 'react';

const PdfModal = forwardRef(({ modalSize = '', children }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('PDF Viewer');
  const [pdfUrl, setPdfUrl] = useState('');

  // Expose open/close methods to parent via ref
  useImperativeHandle(ref, () => ({
    open: (url, customTitle) => {
      setPdfUrl(url);
      setTitle(customTitle || 'PDF Viewer');
      setIsVisible(true);
    },
    close: () => {
      setIsVisible(false);
      setPdfUrl('');
    }
  }));

  const closeModal = () => {
    setIsVisible(false);
    setPdfUrl('');
  };

  if (!isVisible) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" style={{ ...parseInlineStyle(modalSize) }} onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>×</span>
        <h3>{title}</h3>
        {pdfUrl && (
          <iframe className="modal-iframe" src={pdfUrl} frameBorder="0" title="PDF Viewer" />
        )}
        {children}
      </div>
    </div>
  );
});

// Helper to convert inline style string to object
function parseInlineStyle(styleString) {
  if (!styleString) return {};
  return styleString.split(';').reduce((acc, rule) => {
    const [key, value] = rule.split(':').map(s => s.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      acc[camelKey] = value;
    }
    return acc;
  }, {});
}

export default PdfModal;
