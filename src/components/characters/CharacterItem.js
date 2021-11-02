import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 150px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: solid;
  background-color: ${val => val.hexString ? val.hexString : null};
`;

const NameColor = styled.h1`
  font-size: 25px;
  border-bottom: 1px #fff solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin: 10px;
`;

const ListNameLiStyle = styled.li`
  list-style: none;
  padding-bottom: 10px;
  margin: 10px;
`;

const CharacterItem = ({ val }) => {
  console.log(val)
  return (
    <Card>
      <CardInner>
        <CardFront hexString={val.hexString}>
          <NameColor>{val.name}</NameColor>
          <ul>
            <ListNameLiStyle>
              <strong>Color name:</strong> {val.name}
            </ListNameLiStyle>
            <ListNameLiStyle>
              <strong>Hex Value:</strong> {val.hexString}
            </ListNameLiStyle>
          </ul>
        </CardFront>
      </CardInner>
    </Card>
  )
}

export default CharacterItem
