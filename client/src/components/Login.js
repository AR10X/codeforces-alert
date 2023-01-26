import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import LOGIN_USER from '../gql/mutations/loginUser';
import { Form, FormGroup, TextInput, Button } from 'halfmoon';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      history.push('/');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <div className="center">
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
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </FormGroup>
        {error && <p className="error">{error.message}</p>}
      </Form>
    </div>
  );
}

export default Login;

