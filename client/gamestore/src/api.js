const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Error fetching data");
  }
  return response.json();
};

const userAPI = {
  fetchAll: () => fetch(`${BASE_URL}/api/users`).then(handleResponse),
  fetchById: (id) => fetch(`${BASE_URL}/api/users/${id}`).then(handleResponse),
  create: (userData) =>
    fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    }).then(handleResponse),
  update: (id, updatedData) =>
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    }).then(handleResponse),
  delete: (id) =>
    fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE'
    }).then(handleResponse)
};

const itemAPI = {
  fetchAll: () => fetch(`${BASE_URL}/items`).then(handleResponse),
  fetchById: (id) => fetch(`${BASE_URL}/items/${id}`).then(handleResponse),
  create: (itemData) =>
    fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData)
    }).then(handleResponse),
  update: (id, updatedData) =>
    fetch(`${BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    }).then(handleResponse),
  delete: (id) =>
    fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    }).then(handleResponse)
};

export { userAPI, itemAPI };
