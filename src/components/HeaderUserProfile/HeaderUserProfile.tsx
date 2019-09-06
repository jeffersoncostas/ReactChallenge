import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';
import { User } from '../../models/models';
import { UserCardContainer, UserCardImageContainer, UserCardImage, UserCardInfoContainer, UserCardInfoText, UserCardVerticalText } from '../UserCard/UserCard';
import { Row, GenericView } from '../../styles/Styles';



const HeaderUserProfile = (props: { user: User }) => {

    const { name, bio, email, location, company, public_repos, followers, following } = props.user;
    return (
        <UserCardContainer height="240" paddingTop="40" wrap justifyContent="space-between" flexDirection="column">
            <Row justifyContent="center">

                <UserCardImageContainer >
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

                </UserCardInfoContainer>
            </Row>
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
        </UserCardContainer>
    )
}

export default HeaderUserProfile
