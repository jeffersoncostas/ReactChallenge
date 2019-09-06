import React from 'react'
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import styled from 'styled-components/native';
import UserCard from '../UserCard/UserCard';
import { User } from '../../models/models';




const UsersList = (props: { userListData: User[], onClickCard(user?: User, e?: Event): any, onEndReached(): any, onRefresh(): any, refreshing: boolean, loading: boolean }) => {
    const renderFooter = () => {
        if (!props.loading) return null;
        return (
            <View style={{ alignSelf: "center", marginVertical: 20, }}>
                <ActivityIndicator />
            </View>
        );
    };

    return (
        <View>

            <FlatList

                refreshControl={<RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />}
                onRefresh={props.onRefresh}

                refreshing={props.refreshing}
                onEndReached={props.onEndReached}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.2}
                style={{ marginBottom: 260 }}
                data={props.userListData}
                renderItem={({ item }) => <UserCard key={item.id} user={item} onClick={props.onClickCard} />} />



        </View>
    )
}

export default UsersList
