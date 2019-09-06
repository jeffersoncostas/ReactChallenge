import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { User } from '../../models/models';
import styled from 'styled-components/native';
import { utilProps } from '../../utils/StyledMixins';
import { Row, Col, GenericView } from '../../styles/Styles';

export const UserCardContainer = styled.View<any>`
    width: 100%;
    background-color: rgba(246,251, 255,0.06);
    height: 170;
    padding-top: 15;
    padding-bottom: 15;
    padding-horizontal: 35;
    border-bottom-color: #3FF18C;
    border-bottom-width: 1;
    flex-direction: row;
    ${utilProps}
`
export const UserCardImageContainer = styled.View<any>`
    flex: 1;
    justify-content: center;
    ${utilProps}

`
export const UserCardImage = styled.Image`
    width: 110;
    height: 110;
    border-radius: 200;

`
export const UserCardInfoContainer = styled.View<any>`
    flex: 2;
    ${utilProps}
`
export const UserCardInfoText = styled.Text<any>`
    color:white;
    ${utilProps}
`

export const UserCardVerticalText = styled.View<any>`

    ${utilProps}

`


const UserCard = (props: { user: User, onClick(user: User, e?: Event): any }) => {
    const sendUser = () => {
        props.onClick(props.user)
    }
    console.log(props.user.avatar_url)

    const { name, bio, email, location, company, public_repos, followers, following } = props.user;

    return (
        <TouchableHighlight onPress={sendUser} underlayColor="rgba(246,251, 255,0.06)"  >

            <UserCardContainer>
                <UserCardImageContainer>
                    <UserCardImage source={{ uri: props.user.avatar_url }} />
                </UserCardImageContainer>

                <UserCardInfoContainer justifyContent="space-between" >
                    <View>
                        {name ? <UserCardInfoText fontSize="22" fontWeight="700" > {name} </UserCardInfoText> : null}

                        {bio ? <UserCardInfoText fontSize="15" fontWeight="700" > {bio} </UserCardInfoText> : null}

                        {email ?
                            <Row alignItems="center" marginBottom="5">
                                <Image source={require('../../assets/icon-simple-email/icon-simple-email.png')} />
                                <UserCardInfoText fontSize="15" fontWeight="700" > {email} </UserCardInfoText>
                            </Row> : null
                        }
                        <Row marginBottom="20">

                            {location ?
                                <GenericView marginRight="20" alignItems="center" >

                                    <Image source={require('../../assets/icon-material-location-on/icon-material-location-on.png')} />
                                    <UserCardInfoText fontSize="15" fontWeight="700" > {location} </UserCardInfoText>
                                </GenericView> : null
                            }

                            {company ?
                                <GenericView alignItems="center">

                                    <Image source={require('../../assets/icon-awesome-suitcase/icon-awesome-suitcase.png')} />
                                    <UserCardInfoText fontSize="15" fontWeight="700" > {company} </UserCardInfoText>
                                </GenericView> : null
                            }

                        </Row>
                    </View>
                    <Row justifyContent="space-between">

                        <UserCardVerticalText justifyContent="center" alignItems="center"  >
                            <UserCardInfoText fontSize="15" fontWeight="700" > {public_repos} </UserCardInfoText>
                            <UserCardInfoText fontSize="15" fontWeight="700" >Repos </UserCardInfoText>
                        </UserCardVerticalText>

                        <UserCardVerticalText justifyContent="center" alignItems="center"  >
                            <UserCardInfoText fontSize="15" fontWeight="700" > {followers} </UserCardInfoText>
                            <UserCardInfoText fontSize="15" fontWeight="700" >Followers </UserCardInfoText>
                        </UserCardVerticalText>
                        <UserCardVerticalText justifyContent="center" alignItems="center" >
                            <UserCardInfoText fontSize="15" fontWeight="700" > {following} </UserCardInfoText>
                            <UserCardInfoText fontSize="15" fontWeight="700" >Following </UserCardInfoText>
                        </UserCardVerticalText>


                    </Row>
                </UserCardInfoContainer>

            </UserCardContainer>
        </TouchableHighlight>

    )
}

export default UserCard
