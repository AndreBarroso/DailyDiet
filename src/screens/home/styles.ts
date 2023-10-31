import styled from "styled-components/native"
import {useTheme} from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 20px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.View`
    border-color: black;
`;

export const Logo = styled.Image`
`;

export const AvatarContainer = styled.View`
    width: 40px;
    height: 40px;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 100%;
`;




