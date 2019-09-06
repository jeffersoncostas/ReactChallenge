import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp, NavigationParams } from 'react-navigation';
import { NavigationState } from 'react-navigation-stack/lib/typescript/types';
import { Container } from '../../styles/Styles';
import HeaderUserProfile from '../../components/HeaderUserProfile/HeaderUserProfile';
import { api } from '../../services/api';
import { User, UserRepository } from '../../models/models';
import UserRepositoryList from '../../components/UserRepositoryList/UserRepositoryList';
import Reactotron from 'reactotron-react-native'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    loading: boolean;
    user: User;
    userRepos: UserRepository[]
}
export default class UserProfile extends Component<Props, State> {
    state = {
        loading: false,
        user: {
            login: "markito",
            id: "123",
            name: "Ken Soulist",
            avatar_url: "https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=768%2C786&ssl=1",
            bio: "Freelancer Web Developer",
            followers: 21,
            following: 150,
            location: "Brazil",
            public_repos: 134
        },
        userRepos: [
        ]
    }

    componentDidMount() {
        console.log(this.props.navigation.getParam("user"))
        this.setState({ user: this.props.navigation.getParam("user") })
        Reactotron.log("user clicado", this.props.navigation.getParam("user"));
        this.getUserRepository();
    }

    getUserRepository = async () => {
        this.setState({ loading: true })
        let repos: any;
        try {

            repos = await api.get(`/users/${this.props.navigation.getParam("user").login}/repos`);
            Reactotron.log(repos);
        }
        catch (error) {

        }

        this.setState({ userRepos: repos.data, loading: false })
    }
    render() {
        return (
            <Container colors={['#092F44', '#010509']}>

                <HeaderUserProfile user={this.state.user} />

                <UserRepositoryList loading={this.state.loading} userRepos={this.state.userRepos} />
            </Container>
        );
    }
}
