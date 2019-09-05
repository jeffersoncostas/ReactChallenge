import React, {Component, Fragment} from 'react';
import {StatusBar, Button} from 'react-native';
import Routes from './routes';

export default class App extends Component {
    public state = {
        isVisible: false,
    };

    render() {
        return <Routes />;
    }
}
