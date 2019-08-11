/* eslint-disable react/no-array-index-key */
import React from 'react';

import { componentsMap } from './componentsMap';
import {
  selectComponentReference,
  selectComponentProps,
  selectEntryId,
} from './cms-selectors';

export const renderComponents = (content, options) => {
  if (!content) return null;

  return content.map((component, ind) => {
    const reference = selectComponentReference(component);
    const Component = componentsMap[reference];
    const id = selectEntryId(component);
    const props = selectComponentProps(component);
    const updatedOptions = { ...options, renderComponents };
    return (
      <Component key={`${id}-${ind}`} {...props} options={updatedOptions} />
    );
  });
};
