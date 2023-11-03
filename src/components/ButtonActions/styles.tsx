import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px;
    width: 100%;
    height: 50px;
    border: 2px solid;
    border-radius: 5px;
`;

export const Title = styled.View`
    flex-direction: row;
    width: 34%;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const Icon = styled(Feather)`
`;