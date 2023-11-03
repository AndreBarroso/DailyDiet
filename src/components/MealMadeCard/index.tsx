import {Container, Divider, Meal, MealAndTime, Time} from './styled'

import {Text} from 'react-native'

type MealMadeCardProps = {
    time: string
    meal: string
    isHealthyMeal?: boolean
}

export const MealMadeCard  = ({time, meal, isHealthyMeal}: MealMadeCardProps) => {
    return (
        <Container>
            <MealAndTime >
                <Time>{time}</Time>
                <Divider>|</Divider>
                <Meal>{meal}</Meal>
            </MealAndTime>
            <Text>{meal}</Text>
        </Container>
    )
} 