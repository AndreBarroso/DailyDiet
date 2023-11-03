import { TouchableOpacityProps, Text, View } from "react-native";
import {Container, Icon, Title} from "./styles"

type ButtonActionsProp = TouchableOpacityProps & {
    title: string
    type?: 'plus' 
}

export const ButtonActions = ({title, type, ...rest}: ButtonActionsProp) => {
    return (
        <Container 
            {...rest}
        >     
                 <Title>
                    {type && <Icon name={type} size={25}/>}
                    
                    <Text>
                        {title}
                    </Text>
                </Title>
        </Container>
    )
}