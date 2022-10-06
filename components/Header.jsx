import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    align-content: center;
    justify-content: center;
    height: 60px;
    background: #106ff5;
`;

const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #f1f1f1;
    font-weight: bold;
`;

export default function Header() {
  return (
   <Container>
     <Title>Список дел</Title>
   </Container>
  )
}
