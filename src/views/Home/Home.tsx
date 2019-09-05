import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {StatusBar, Button} from 'react-native';

import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {Container} from '../../styles/Styles';
import Search from '../../components/Search/Search';

export default class Home extends Component {
    render() {
        return (
            <Container colors={['#092F44', '#010509']}>
                <StatusBar backgroundColor="#092F44" barStyle="light-content" />
                <HeaderLogo />
                <Search />
            </Container>
        );
    }
}
