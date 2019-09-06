import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { utilProps } from '../utils/StyledMixins';
import { TextInput } from 'react-native';

export const Container = styled(LinearGradient)`
    flex: 1;
`;

export const Row = styled.View<any>`
    width: 100%;
    flex-direction: row;
    ${utilProps}
`;

export const GenericView = styled.View<any>`
    flex-direction: row;
    ${utilProps}
`

export const Col = styled.View<any>`
    flex:1;
    flex-direction: row;
    ${utilProps}
`


export const TextErrors = styled.Text<any>`

    font-size: 20;
    color: white;
    align-self: center;
    ${utilProps}

`
