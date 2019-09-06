import React, { Component, Fragment } from 'react';
import { View, Text, AppStateIOS } from 'react-native';
import { StatusBar, Button } from 'react-native';

import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import { Container, TextErrors } from '../../styles/Styles';
import Search from '../../components/Search/Search';
import UsersList from '../../components/UsersList/UsersList';
import { User } from '../../models/models';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { api } from '../../services/api';
import Reactotron from 'reactotron-react-native'


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
    usersList: User[],
    loading: boolean,
    initialId: number,
    refreshing: boolean,
    error: boolean,
    errorCode: number;
    searchText: string;
}

export default class Home extends Component<Props, State> {

    state = {
        initialId: Math.floor((Math.random() * 99999) + 1),
        loading: false,
        refreshing: false,
        error: false,
        errorCode: 0,
        searchText: "",
        usersList: [
            // {
            //     login: "markito",
            //     id: "123",
            //     name: "Ken Soulist",
            //     avatar_url: "https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=768%2C786&ssl=1",
            //     bio: "Freelancer Web Developer",
            //     followers: 21,
            //     following: 150,
            //     location: "Brazil",
            //     public_repos: 13
            // },
            // {
            //     login: "vanusos",
            //     id: "12473",
            //     name: "Vanuso",
            //     avatar_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg",
            //     bio: "UX Designer",
            //     email: "vanuso@mail.com",
            //     followers: 1.351,
            //     following: 52,
            //     location: "Brazil",
            //     company: "Google",
            //     public_repos: 47
            // }
        ]
    }
    componentDidMount() {
        console.log('aa')
        this.getUserList();
    }

    getUserList = async () => {
        if (this.state.loading) return;

        const { initialId } = this.state;
        let fetchedUsers: User[] = [];

        let withError: boolean = false;
        this.setState({ loading: true })

        try {

            const users: { data: any[] } = await api.get(`/users?since=${this.state.initialId}`)

            for (let index = 0; index < 6; index++) {
                const element: any = users.data[index];
                console.log(element)
                const user: any = await api.get(`/users/${element.login}`);
                console.log(user);
                fetchedUsers.push(user.data);

            }

        } catch (error) {
            console.log(error)
            withError = true
            this.setState({ errorCode: error.response.status })

        }

        this.setState({
            usersList: [...this.state.usersList, ...fetchedUsers],
            initialId: initialId + 6,
            loading: false,
            error: withError
        });

    }

    onRefresh = async () => {
        if (this.state.refreshing) return;
        this.setState({ refreshing: true });

        let fetchedUsers: User[] = [];
        const { initialId } = this.state;
        let withError: boolean = false;

        try {

            const users: { data: any[] } = await api.get(`/users?since=${this.state.initialId}`)

            for (let index = 0; index < 6; index++) {
                const element: any = users.data[index];
                console.log(element)
                const user: any = await api.get(`/users/${element.login}`);

                fetchedUsers.push(user.data);

            }


        } catch (error) {
            console.log(error)
            withError = true;
            this.setState({ errorCode: error.response.status })

        }

        this.setState({
            usersList: fetchedUsers,
            initialId: initialId + 4,
            loading: false,
            refreshing: false,
            error: withError
        });


    }


    handleClickCard = (userClicked: User) => {
        this.props.navigation.navigate("UserProfile", { user: userClicked })
        Reactotron.log("oii");

        console.log("user clicked name", userClicked.name)
        console.log("user clicked login", userClicked.login)

    }

    handleError = () => {

        if (this.state.error && this.state.errorCode == 403) {

            return <TextErrors> API rate limits exceeds!</TextErrors>
        }



    }

    handleSearch = () => {

    }

    render() {

        const errors = this.handleError();

        return (
            <Container colors={['#092F44', '#010509']}>
                <StatusBar backgroundColor="#092F44" barStyle="light-content" />
                <HeaderLogo />
                <Search onChange={(text: any) => this.setState({ searchText: text })} onPressSearch={this.handleSearch} />

                {this.state.error ? errors : null}

                <UsersList
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}
                    loading={this.state.loading}
                    onEndReached={this.getUserList}
                    onClickCard={this.handleClickCard}
                    userListData={this.state.usersList} />

            </Container>
        );
    }
}
