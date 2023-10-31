import { Container, ExtatisticsContainerButton, Content } from "./styles"
import {Text} from 'react-native'

export const PercentagenDietConcluded = () => {
    return (
        <Container>
            <ExtatisticsContainerButton>
                <Text >
                    --{">>"}
                </Text>
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