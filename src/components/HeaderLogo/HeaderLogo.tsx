import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const HeaderLogoContainer = styled.View`
    width: 100%;
    height: 70;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    padding-top: 40;
    margin-bottom: 20;
`;

const HeaderLogoImg = styled(Image)``;

const HeaderLogo = () => {
    return (
        <HeaderLogoContainer>
            <Image source={require('./assets/gitInfo-logo.png')} />
        </HeaderLogoContainer>
    );
};

export default HeaderLogo;
