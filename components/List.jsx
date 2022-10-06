import React, { useContext } from 'react';
import { Alert } from 'react-native';
import styled from "styled-components/native";
import AppContext from '../context/AppContext';

const Text = styled.Text`
  background: #ffffff;
  margin: 8px auto;
  width: 95%;
  color: #222222;
  padding: 20px 10px;
  border-radius: 10px;
`;

export default function List({ item }) {
    const value = useContext(AppContext);

    const deleteTodo = (id) => {

        const coniformToDelete = () => {
            const deletedTodo = value.listOfItems.filter(todo => {
                return todo.id !== id
              });
        
              value.setListOfItems(deletedTodo);
        }

        Alert.alert("Предупреждение", "Вы уверены, что хотите удалить?", [
            {text: "НЕТ"},
            {text: "ДА", onPress: coniformToDelete}
        ])
    }

    return (
        <Text onPress={() => deleteTodo(item.id)}>{item.text}</Text>
    )
}
