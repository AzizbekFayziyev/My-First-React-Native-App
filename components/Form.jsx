import React, { useContext, useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import AppContext from '../context/AppContext';

const Container = styled.View`
    margin: 15px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TextInput = styled.TextInput`
    width: 70%;
    padding: 3px 10px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #222222;
    margin-right: 2px;
`;

export default function Form() {
    const value = useContext(AppContext);
    const [text, setInputVal] = useState('');

    const onChange = (text) => {
        setInputVal(text);
    };

    const addingToDo = () => {
        const newTodo = {
            text: text,
            id: Math.random()
        }

        value.setListOfItems(todos => [newTodo, ...todos]);
        setInputVal('');
    }

    return (
        <>
            <Container>
                <TextInput value={text} onChangeText={onChange} placeholder='Називание...' />
                <Button onPress={addingToDo} title="Добавит" color="#106ff5" />
            </Container>
        </>
    )
}
