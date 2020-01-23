import React from 'react';
import { DeleteOutline } from '@material-ui/icons';

import './styles.css';

function DevItem(props) {
  const { dev, onDelete } = props;
  
  function removeDev() {
    onDelete({
      github_username: dev.github_username
    });
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
        <div className="user-action">
          <div title="Deletar" onClick={() => {removeDev()}}>
            <DeleteOutline style={{ fontSize: 18 }}/>
          </div>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`http://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li>
  )
}

export default DevItem;