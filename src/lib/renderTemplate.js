import { renderComponents } from './renderNestedComponents';

const templateTypes = {
  standard: 'templateStandard',
};

const renderTemplate = ({ templateType, data }) => {
  if (templateType === templateTypes.standard) {
    return renderComponents(data.content);
  }
  return null;
};

export default renderTemplate;
