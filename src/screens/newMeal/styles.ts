import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: blue;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
`;

export const ReturnButton = styled(TouchableOpacity)`

`
export const Title = styled.Text`
    margin: 0 auto;
`;

export const NewMealForm = styled.View`
    background-color: white;
    justify-content: start;
    border-radius: 15px 15px 0 0;
    flex: 1;
    width: 100%;
    padding: 15px;
`
export const FormWithColumns = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
