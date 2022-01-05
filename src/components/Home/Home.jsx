import React, { useState, useEffect } from 'react';
// Styled Components
import styled from 'styled-components';
// Import component
import Card from './Card/Card';
import Footer from './Footer/Footer';
import Header from './Header/Header';

// Styles
const Button = styled.button`
  margin: 20px;
  padding: 10px;
  background-color: #666;
  color: #fefefe;
  border-radius: 4px;
  border: 0px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  height: 50px;
  width: 100px;
  :hover {
    background-color: #333;
  }
`;

const Characters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Content = styled.div`
  font-size: 16px;
  color: #666;
  padding-top: 10px;
`;

const Description = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #666;
  margin-top: 40px;
`;

const Loading = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: var(--dark-color);
  animation: spin 1s ease infinite;
  margin: auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadText = styled.span`
  font-size: 3.6rem;
  font-weight: bold;
  margin: auto;
  padding: 30px 0;
`;

const LoadWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h1`
  color: #333;
`;

function Home() {
  //   States
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //   Request for data
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    // console.log('Se actualiza el personaje');
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        // eslint-disable-next-line
        const { results } = response;
        setResults(results);
        setLoading(true);
      });
  }, [page]);

  const onClickF = () => {
    const newpage = page + 1;
    setPage(newpage);
  };

  const onClickB = () => {
    const newpage = page - 1;
    setPage(newpage);
  };

  return (
    <div>
      <Header />
      <Description>
        <Title>Rick And Morty Characters</Title>
        <Content>
          Here you will find every character and its description
        </Content>
      </Description>
      <Characters>
        {!loading ? (
          <LoadWrap>
            <Loading>
              <div />
            </Loading>
            <LoadText>Loading</LoadText>
          </LoadWrap>
        ) : (
          results.map((char) => (
            <Card
              key={char.image}
              name={char.name}
              image={char.image}
              status={char.status}
              species={char.species}
              type={char.type}
              gender={char.gender}
              origin={char.origin.name}
              location={char.location.name}
            />
          ))
        )}
      </Characters>
      <Button onClick={page > 1 ? onClickB : null}>Previous</Button>
      <Button onClick={page < 42 ? onClickF : null}>Next</Button>
      <Footer />
    </div>
  );
}

export default Home;
