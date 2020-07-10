import React, { useState, useEffect } from 'react';

import Pagination from '../../components/Pagination';

import { ChargeList, Status } from './styles';
 
export default function Dashboard() {
  const [character, setCharacter] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`);
      const data = await response.json();

      console.log(data.results);

      setCharacter(data.results);
    }
    fetchData();
  }, [pages]);

  const paginate = pageNumber => setPages(pageNumber);

  const charStatus = {
    Alive: 'Alive',
    unknown: 'unknown',
    Dead: 'Dead',
  }

  return (
    <>
    <Pagination paginate={paginate} />
      <ChargeList charStatus={charStatus}>
        {character.map(cha => (
          <li key={cha.id}>
            <img src={cha.image} alt={cha.name} />
            <h1>{cha.name} <Status status={cha.status} ></Status> </h1>
            <div>
              <p>Status</p>
              <span>{cha.status}</span>
            </div>

            <div>
              <p>Species</p>
              <span>{cha.species}</span>
            </div>

            <div>
              <p>Gender</p>
              <span>{cha.gender}</span>
            </div>

            <div>
              <p>Origin</p>
              <span>{cha.origin.name}</span>
            </div>

          </li>
        ))}
      </ChargeList>
    </>
  );
}

