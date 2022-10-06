import React, { useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import styled from "styled-components/native";
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import AppContext from './context/AppContext';

const Container = styled.View`
 flex: 1;
 background: #eeeeee;
`;

const NoTodoImage = styled.Image`
  margin: 8px auto;
  width: 220px;
  height: 220px;
`;

const Text = styled.Text`
  font-size: 20px;
  text-align: center;
`

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: "Купит молоко", id: Math.random() },
    { text: "Помит машину", id: Math.random() },
    { text: "Купит картошку", id: Math.random() },
    { text: "Стать миллионера", id: Math.random() }
  ]);

  const value = {
    listOfItems,
    setListOfItems,
  };

  return (
    <AppContext.Provider value={value}>

      <Container>
        <Header />
        <Form />

        <View>
          {
            listOfItems.length ? (
              <FlatList data={listOfItems} renderItem={({ item }) => (
                <List item={item} />
              )} />
            ) : (
              <>
              <NoTodoImage source={{ uri: 'https://img.icons8.com/ios-filled/344/empty-box.png' }} />
              <Text>Здесь пока ничего нет</Text>
              </>
            )
          }
        </View>

        <StatusBar style="auto" />
      </Container>

    </AppContext.Provider>
  )
}
