import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';
import UserCard from '../UserCard/UserCard';
import { UserRepository } from '../../models/models';
import UserRepositoryCard from '../UserRepositoryCard/UserRepositoryCard';

const UserRepositoryListContainer = styled.View`
    padding-horizontal: 35;
    padding-top: 35;

`

const UserRepositoryTitle = styled.Text`
    text-transform: uppercase;
    font-size: 24;
    color: #C9EDFF;
    letter-spacing: 2;
    margin-bottom: 30;
`
const UserRepositoryList = (props: { userRepos: UserRepository[], loading: boolean }) => {

    return (
        <UserRepositoryListContainer>

            <UserRepositoryTitle> repositories</UserRepositoryTitle>
            {props.loading ? <ActivityIndicator size="large" /> : null}

            <FlatList
                style={{ marginBottom: 150, paddingBottom: 200 }}

                data={props.userRepos}
                renderItem={({ item }) => <UserRepositoryCard key={item.name} userRepository={item} />} />


        </UserRepositoryListContainer>

    )
}

export default UserRepositoryList
