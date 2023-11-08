import { TouchableOpacityProps, Text, View } from "react-native";
import {CircleIcon, Container, Icon, Title} from "./styles"

type ButtonActionsProp = TouchableOpacityProps & {
    title: string
    width?: string
    type?: 'plus' 
    margin?: string
    height?: string
    flexOne?: boolean
    circleIconColor?: string
}

export const ButtonActions = ({title, type, width, margin, height, circleIconColor='', flexOne = false, ...rest}: ButtonActionsProp) => {
    return (
        <Container 
            flexOne={flexOne}
            width={width}
            margin={margin}
            height={height}
            {...rest}
        >     
                 <Title>
                    {type === 'plus' ? ( <Icon name={type} size={25}/> ) : (
                        <CircleIcon circleIconColor={circleIconColor}/>
                    )}
                    
                    <Text>
                        {title}
                    </Text>
                </Title>
        </Container>
    )
}