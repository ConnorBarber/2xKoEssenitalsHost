// Utility to render combo notation with custom styling for '>'
import React from 'react';

export default function ComboNotationText({ notation }) {
  if (!notation) return null;
  // Split by '>' and re-join with styled span
  const parts = notation.split('>');
  return (
    <span>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span style={{ color: '#585656', fontWeight: 'bold', margin: '0 2px' }}>&gt;</span>
          )}
          {part}
        </React.Fragment>
      ))}
    </span>
  );
}
