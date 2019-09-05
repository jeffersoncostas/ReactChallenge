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

export const TextInputStyled = styled.TextInput<any>`
    width: 100%;
    background: white;
    
    ${utilProps}
`
