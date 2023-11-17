import {Text} from 'react-native'
import { BestFrequency, Container, GeneralExtatistics, MealsOnDiet, MealsOnOutDietContainer, MealsOutDiet, MealsRegistered } from './styles'
import { PercentagenDietConcluded } from '@components/PercentagenDietConcluded.tsx'

export const Extatistics = () => {
    return (
        <Container>
            <PercentagenDietConcluded borderWidth='0' justifyContent='flex-start'/>
            <GeneralExtatistics>
                <Text>Estatísticas gerais</Text>
                <BestFrequency>
                    <Text>22</Text>
                    <Text>melhor sequência de pratos dentro da dieta.</Text>
                </BestFrequency>
                <MealsRegistered>
                    <Text>22</Text>
                    <Text>melhor sequência de pratos dentro da dieta.</Text>
                </MealsRegistered>
                <MealsOnOutDietContainer>
                    <MealsOnDiet>
                        <Text>22</Text>
                        <Text>melhor sequência de pratos dentro da dieta.</Text>
                    </MealsOnDiet>
                    <MealsOutDiet>
                        <Text>22</Text>
                        <Text>melhor sequência de pratos dentro da dieta.</Text>
                    </MealsOutDiet>
                </MealsOnOutDietContainer>
            </GeneralExtatistics>
        </Container>
    )
}