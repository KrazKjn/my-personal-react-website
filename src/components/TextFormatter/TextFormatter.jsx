import React from 'react';

const TextFormatter = ({ textBody, quote }) => {
  // Function to process the text body based on its content
  // and return the appropriate JSX elements
  const processTextBody = (text) => {
    if (text.startsWith('<li>')) {
      // Process list items, optionally quote each one
      const listItems = text
        .split('</li>')
        .filter(item => item.trim() !== '') // Remove empty items
        .map((item, idx) => {
          const content = item.split('>')[1]; // Extract text inside <li>
          return <li key={idx}>{quote ? `"${content}"` : content}</li>; // Quote conditionally
        });

      return <ul className='custom-list'>{listItems}</ul>;
    } else if (text.startsWith('<p>')) {
      let updatedText = text;
      // Process paragraphs, optionally quote the last one
      if (quote) {
        updatedText = '<p>"' + text.substring('<p>'.length);
        const lastIndex = updatedText.lastIndexOf('</p>');

        if (lastIndex !== -1) {
          // Replace the last occurrence of "<p>" with "<p>\""
          updatedText = updatedText.substring(0, lastIndex) + '"</p>';
        }
      }

      const paragraphs = updatedText
        .split('</p>')
        .filter(item => item.trim() !== '') // Remove empty items
        .map((item, idx) => {
          const content = item.split('>')[1]; // Extract text inside <p>
          return <p key={idx}>{content}</p>; // Quote conditionally
        });

      return <div className="paragraph-rows">{paragraphs}</div>;
    } else {
      // Default case, render as a simple paragraph optionally enclosed in double quotes
      return <p>{quote ? `"${text}"` : text}</p>;
    }
  };

  return <div className="paragraph-rows">{processTextBody(textBody)}</div>;
};

export default TextFormatter;