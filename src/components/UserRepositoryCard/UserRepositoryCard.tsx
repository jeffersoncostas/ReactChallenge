import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import { Row } from '../../styles/Styles';
import { utilProps } from '../../utils/StyledMixins';
import { UserRepository } from '../../models/models';


const UserRepositoryCardContainer = styled.View`
    width: 100%;
    border-width: 1;
    border-color: #3FF18C;
    min-height: 104;
    border-radius: 10;
    background-color: rgba(255,255,255,0.06);
    margin-bottom: 20;
    padding-horizontal: 20;
    padding-vertical: 10;
    justify-content: space-between;
;`

const UserRepositoryText = styled.Text<any>`
    ${utilProps}
`


const UserRepositoryCard = (props: { userRepository: UserRepository }) => {

    const { name, description, language } = props.userRepository;
    return (
        <UserRepositoryCardContainer>
            <Row flexDirection="column" marginBottom="10">
                <UserRepositoryText fontSize="22" color="white" > {name} </UserRepositoryText>
                <UserRepositoryText fontSize="18" color="#C9EDFF" > {description} </UserRepositoryText>
            </Row>
            <Row justifyContent="flex-end">

                <UserRepositoryText fontSize="15" color="#C9EDFF"> {language} </UserRepositoryText>


            </Row>

        </UserRepositoryCardContainer>
    )
}

export default UserRepositoryCard
