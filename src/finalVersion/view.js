export default {
  render(templateName, data) {
    templateName = templateName + 'Template';

    const templateElement = document.getElementById(templateName);
    const templateSource = templateElement.innerHTML;
    const renderFn = Handlebars.compile(templateSource);

    return renderFn(data);
  }
};
