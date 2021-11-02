import React, { useState } from 'react'
import CharacterItem from '../characters/CharacterItem'
import styled from 'styled-components'

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const Search = ({ items,props }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <input style={{ marginBottom: "5%" }} type="text" placeholder="seach..." onChange={e => setSearchTerm(e.target.value)} />
      <Cards>
        {items.filter((val) => {
          if (searchTerm == "") {
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return <CharacterItem key={key} val={val}></CharacterItem>
        })}
      </Cards>
    </>
  )
}

export default Search
