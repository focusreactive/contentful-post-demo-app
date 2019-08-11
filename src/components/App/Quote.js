import React from 'react';
import { ContentContainer } from '../Layout/Layout.styled';

const Quote = ({ title, text, author, avatar, role }) => (
  <ContentContainer>
    <h3>{title}</h3>
    <p>{text}</p>
    <p>Author: {author}</p>
    <p>Role: {role}</p>
    <p>Avatar url: {'avatar'}</p>
  </ContentContainer>
);

export default Quote;
