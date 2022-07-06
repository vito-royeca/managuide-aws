import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createSetMutation, deleteSet as deleteSetMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [sets, setSets] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchSets();
  }, []);

  async function fetchSets() {
    const apiData = await API.graphql({ query: listSets });
    setSets(apiData.data.listSets.items);
  }

  async function createSet() {
    if (!formData.code || !formData.name) return;
    await API.graphql({ query: createSetMutation, variables: { input: formData } });
    setSets([ ...sets, formData ]);
    setFormData(initialFormState);
  }

  async function deleteSet({ id }) {
    const newSetsArray = sets.filter(set => set.id !== id);
    setSets(newSetsArray);
    await API.graphql({ query: deleteSetMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Sets</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Set name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'code': e.target.value})}
        placeholder="Set Code"
        value={formData.code}
      />
      <button onClick={createSet}>Create Set</button>
      <div style={{marginBottom: 30}}>
        {
          sets.map(set => (
            <div key={set.id || set.code}>
              <h2>{set.name}</h2>
              <p>{set.code}</p>
              <button onClick={() => deleteSet(set)}>Delete Set</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
