import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
    width?: string
    flexOne?: boolean
    margin?: string
    height?: string
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: ${props => props.flexOne ? 1 : 'none'};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px;
    width: ${props => props.width ?? '100%'};
    height: ${props => props.height ? props.height : '50px'};
    border: 2px solid;
    border-radius: 5px;
    margin-top:  ${props => props.margin ? props.margin : undefined};
    margin-right:  ${props => props.margin ? props.margin : undefined};
    margin-left: ${props => props.margin ? props.margin : undefined};
`;

export const Label = styled.View`
    flex-direction: row;
    width: 34%;
    justify-content: space-between;
    align-items: center;
    height: 100%;
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

export const CircleIcon = styled.View<{circleIconColor: string}>`
    height: 8px;
    width: 8px;
    border-radius: 8px;
    background-color: ${(prop) => prop.circleIconColor};
`;