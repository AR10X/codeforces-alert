import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, FormGroup, TextInput, Button } from 'halfmoon';
import ADD_PHONE_NUMBER from '../gql/mutations/addPhoneNumber';

function Form() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addPhoneNumber, { loading }] = useMutation(ADD_PHONE_NUMBER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPhoneNumber({ variables: { phoneNumber } });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <TextInput
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </FormGroup>
    </Form>
  );
}

export default Form;
