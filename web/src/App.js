import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  };

  async function handleDeleteDev(data) {

    const github_username = data.github_username;

    const response = await api.delete(`/devs/${github_username}`);

    setDevs(devs.filter(dev => dev.github_username != github_username));
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onDelete={handleDeleteDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
