import {Container, Input} from './styles'
import { Text, TextInputProps } from 'react-native'

type InputActionsProps = TextInputProps & {
    title: string
    height: number
    flexOne?: boolean
}
export const InputActions = ({title, height, flexOne, ...rest}: InputActionsProps) => {
    return (
        <Container style={{flex: flexOne ? 1 : undefined}}>
            <Text style={{marginBottom: 4}}>
                {title}
            </Text>
            <Input style={{height}} {...rest}/>
        </Container>
    )
}