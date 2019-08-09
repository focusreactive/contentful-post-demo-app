import React from 'react';

export const renderComponents = (content, options) => {
  return content.map(component => (
    <div>
      <p>Component</p>
      <p>
        <span>{JSON.stringify(component)}</span>
      </p>
    </div>
  ));
};
