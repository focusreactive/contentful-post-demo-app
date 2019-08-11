import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContentContainer } from '../Layout/Layout.styled';

const Description = ({ title, description, content, options }) => (
  <ContentContainer>
    <h3>{title}</h3>
    <div>{documentToReactComponents(description)}</div>
    <div>{options.renderComponents(content, options)}</div>
  </ContentContainer>
);

export default Description;
