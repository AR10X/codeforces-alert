import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import REGISTER_USER from '../gql/mutations/registerUser';
import { Form, FormGroup, TextInput, Button } from 'halfmoon';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.register.token);
      history.push('/');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ variables: { email, password } });
  };

  return (<div className="center">
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <TextInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </FormGroup>
    <FormGroup>
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </FormGroup>
    <FormGroup>
      <Button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Register'}
      </Button>
    </FormGroup>
    {error && <p className="error">{error.message}</p>}
  </Form>
</div>
);
}

export default Register;

