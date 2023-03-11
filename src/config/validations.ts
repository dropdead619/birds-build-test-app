export const required = (value: string) => {
  const requiredMessage = 'This field is required';
  if (value === undefined || value === null)
    return requiredMessage;

  if (!String(value).length)
    return requiredMessage;

  return true;
};

export const anything = () => {
  return true;
};
