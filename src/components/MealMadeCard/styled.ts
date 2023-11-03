import styled from 'styled-components/native'

const MARGIN_LEFT_ITEM_MEAL_AREA = '8px'

export const Container = styled.View`
    width: 100%;
    height: 46px;
    flex-direction: row;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #B9BBBC;
    margin-bottom: 8px;
    border-radius: 6px;
    padding: 10px;
`;

export const MealAndTime = styled.View`
    flex: 80%;
    flex-direction: row;
    justify-content: start;
`;

export const Time = styled.Text`
    margin-right: ${() => MARGIN_LEFT_ITEM_MEAL_AREA};
`;

export const Divider = styled.Text`
    margin-right: ${() => MARGIN_LEFT_ITEM_MEAL_AREA};
`;

export const Meal = styled.Text`
    margin-right: ${() => MARGIN_LEFT_ITEM_MEAL_AREA};
`;


