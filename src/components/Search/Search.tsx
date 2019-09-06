import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Row } from '../../styles/Styles';
import styled from 'styled-components/native';
import { utilProps } from '../../utils/StyledMixins';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const SearchButton = styled.TouchableOpacity`
    position: absolute;
    right: 10;



`
const SearchButtonText = styled.Text`
    font-size: 18;
    text-transform: uppercase;
    color: #7C9DAF;

`

const TextInputStyled = styled.TextInput<any>`
    width: 100%;
    background: white;

    ${utilProps}
`


interface Props{

    onChange(text: any): any;
    onPressSearch(): any;
}

export default class Search extends Component<Props> {


    render() {

        return (
            <Row
                paddingVertical="40"
                paddingHorizontal="40"
                wrap
                justifyContent="center">
    
                <SearchTitle> search user</SearchTitle>
                <InputContainer>
    
                    <TextInputStyled onChangeText={this.props.onChange} borderRadius="35" minHeight="70" placeholder="Fernando..." paddingVertical="18" paddingHorizontal="40" paddingLeft="70" fontSize="18" />
                    <IconSearchInput source={require('./assets/icon-feather-search.png')} />
    
                    <SearchButton onPress={ this.props.onPressSearch}>
                        <SearchButtonText> search </SearchButtonText>
                    </SearchButton>
    
                </InputContainer>
            </Row>
        );

    }
};


