import { renderComponents } from './renderNestedComponents';

const templateTypes = {
  standard: 'templateStandard',
};

const renderTemplate = ({ templateType, data }, options) => {
  if (templateType === templateTypes.standard) {
    return renderComponents(data.content, options);
  }
  return null;
};

export default renderTemplate;
