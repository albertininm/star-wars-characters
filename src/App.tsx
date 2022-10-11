import People from 'components/People/People';
import React from 'react';
import { useState } from 'react';
import './App.scss';
import './globals.scss';
import { useFetchPeople } from './hooks';

function App() {
  const [inputText, setInputText] = useState('');

  const { results: people } = useFetchPeople(inputText);

  console.log(people);

  return (
    <div className="App">
      <div>App Body</div>
      <input onChange={(e) => setInputText(e.target.value)} type="text"></input>
      <div className="characters-wrapper">
        {people.map((item) => (
          <People {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
