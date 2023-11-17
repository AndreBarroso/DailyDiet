import { useNavigation } from "@react-navigation/native"
import { Container, ExtatisticsContainerButton, Content } from "./styles"
import {Text, TouchableOpacity} from 'react-native'

type PercentagenDietConcluded = {
    borderWidth?: string
    justifyContent?: 'flex-start' | 'flex-end'
}

export const PercentagenDietConcluded = ({borderWidth = '2px', justifyContent}: PercentagenDietConcluded) => {
    const navigation = useNavigation()
    return (
        <Container borderWidth={borderWidth}>
            <ExtatisticsContainerButton justifyContent={justifyContent}>
                <TouchableOpacity onPress={() => justifyContent === 'flex-end' ? navigation.navigate('extatistics') : navigation.goBack()}>
                <Text >
                    {justifyContent === "flex-end" ? '-->>' : '<<--'}
                </Text>
                </TouchableOpacity>
            </ExtatisticsContainerButton>
            <Content>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                    90,86%
                </Text>
                <Text >
                    das refeições da dieta
                </Text>
            </Content>
        </Container>
    )
}