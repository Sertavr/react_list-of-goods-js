import { Button } from '../button/Button';

export const Buttons = ({
  buttonClassesFields,
  sortField,
  clickHandler,
  isReversed,
}) => (
  <div className="buttons">
    {buttonClassesFields.map(([className, nameField]) => {
      if (!sortField && !isReversed && nameField === 'Reset') {
        return null;
      }

      return (
        <Button
          sortField={sortField}
          isReversed={isReversed}
          className={className}
          nameField={nameField}
          clickHandler={clickHandler}
          key={nameField}
        />
      );
    })}
  </div>
);
