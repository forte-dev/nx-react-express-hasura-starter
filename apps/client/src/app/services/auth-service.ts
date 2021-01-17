function handleResponse(response) {
  return response.text().then((text) => text && JSON.parse(text));
}

function signUp({ email, password, passwordConfirmation }) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, passwordConfirmation }),
  };

  return fetch(`${process.env.NX_CLIENT_API_URL}/signup`, requestOptions).then(
    handleResponse
  );
}

function login({ email, password }) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${process.env.NX_CLIENT_API_URL}/login`, requestOptions).then(
    handleResponse
  );
}

export default {
  login,
  signUp,
};
