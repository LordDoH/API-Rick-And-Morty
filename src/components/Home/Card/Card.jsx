import React from 'react';
// Import Styled Components
import styled from 'styled-components';

// Styles
const Alive = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #55cc44;
`;

const AliveWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
  padding-top: 20px;
  @media (min-width: 768px) {
    padding: 0;
    width: 250px;
  }
`;

const Dead = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #d63d2e;
`;

const Gender = styled.div`
  color: #fefefe;
`;

const Line = styled.hr`
  background-color: #9e9e9e;
  margin: 10px 0;
`;

const Location = styled.div`
  color: #fefefe;
`;

const MainCard = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #333333;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  color: #fefefe;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 600px;
  }
`;

const Name = styled.h2`
  padding: 0;
  color: #fefefe;
`;

const Origin = styled.div`
  color: #fefefe;
  padding: 5px 0;
`;

const Pic = styled.img`
  width: 200px;
  margin: auto;
`;

const Status = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fefefe;
`;

const Species = styled.div`
  color: #9e9e9e;
  font-size: 12px;
`;

// Card Initialization
function Card({
  name = 'Daniel',
  status = 'Alive',
  species = 'Human',
  type = 'Normal',
  gender = 'Male',
  origin = 'Earth',
  location = 'Earth',
  image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}) {
  return (
    <MainCard>
      {/* Image */}
      <Pic src={image} alt="Profile" />
      {/* Description */}
      <Data>
        <Name>{name}</Name>
        <Species>
          {species} {type === '' ? '' : ` - ${type}`}
        </Species>
        {/* Dead or Alive Object */}
        <Status>
          {status === 'Alive' ? (
            <AliveWrap>
              <Alive>
                <div />
              </Alive>
              <span>Alive</span>
            </AliveWrap>
          ) : (
            <AliveWrap>
              <Dead>
                <div />
              </Dead>
              <span>Dead</span>
            </AliveWrap>
          )}
        </Status>
        <Line />
        <Gender>Gender: {gender}</Gender>
        <Origin>Origin: {origin}</Origin>
        <Location>Location: {location}</Location>
      </Data>
    </MainCard>
  );
}

export default Card;
