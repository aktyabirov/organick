import React from 'react';
import { Button } from './buttons/Button'; 
import { SubmitIcon } from './SubmitIcon';

const MyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  const handleSecondaryAction = () => {
    console.log('Secondary action triggered!');
  };

  return (
    <form onSubmit={handleSubmit}>

      <Button type="submit" variant="primary">
        Submit
      </Button>
      
      <Button onClick={handleSecondaryAction} variant="secondary" icon={SubmitIcon}>
        Secondary Action
      </Button>

      <Button type="submit" variant="third">
        Submit
      </Button>
      

    </form>
  );
};

export default MyForm;
