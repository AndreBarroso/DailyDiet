import {Container, Input} from './styles'
import { Text, TouchableOpacity } from 'react-native'

type InputActionsProps = {
    title: string
    height: number
    flexOne?: boolean
}
export const InputActions = ({title, height, flexOne}: InputActionsProps) => {
    return (
        <Container style={{flex: flexOne ? 1 : undefined}}>
            <Text style={{marginBottom: 4}}>
                {title}
            </Text>
            <Input style={{height}}/>
        </Container>
    )
}