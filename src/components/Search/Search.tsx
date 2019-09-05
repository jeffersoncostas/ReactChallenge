import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Row, TextInputStyled } from '../../styles/Styles';
import styled from 'styled-components/native';

const SearchTitle = styled.Text`
    font-size: 18;
    text-transform: uppercase;
    letter-spacing: 2;
    color: #C9EDFF;
    text-align: left;
    width: 100%;
    margin-bottom: 20;
    padding-left: 20px;
`
const InputContainer = styled.View`
    position: relative;
    width: 100%;
    align-items: center;
    flex-direction: row;
`
const IconSearchInput = styled.Image`
    position: absolute;
    left: 20 ;

`

const Search = () => {
    return (
        <Row
            paddingVertical="40"
            paddingHorizontal="40"
            wrap
            justifyContent="center">

            <SearchTitle> search user</SearchTitle>
            <InputContainer>

                <TextInputStyled borderRadius="35" minHeight="70" placeholder="Fernando..." paddingVertical="18" paddingHorizontal="40" paddingLeft="70" fontSize="18" />
                <IconSearchInput source={require('./assets/icon-feather-search.png')} />

            </InputContainer>
        </Row>
    );
};

export default Search;
