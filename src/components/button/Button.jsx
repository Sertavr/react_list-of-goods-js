import 'bulma/css/bulma.css';

export const Button = ({
  className,
  isReversed,
  nameField,
  sortField,
  clickHandler,
}) => {
  let classNameButton;

  if (isReversed && nameField === 'Reverse') {
    classNameButton = className;
  } else {
    classNameButton =
      sortField === nameField ? className : `${className} is-light`;
  }

  const styleForReset = {};

  if (!sortField && !isReversed && nameField === 'Reset') {
    styleForReset.display = 'none';
  }

  return (
    <button
      type="button"
      className={classNameButton}
      onClick={() => clickHandler(nameField)}
      style={styleForReset}
    >
      {nameField}
    </button>
  );
};
