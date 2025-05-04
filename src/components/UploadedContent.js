import React from 'react';

function UploadedContent({ imageUrl }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Uploaded Content</h2>
      <img src={imageUrl} alt="Uploaded Content" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
    </div>
  );
}

export default UploadedContent;
