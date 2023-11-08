import styled from 'styled-components/native'
import {SafeAreaView} from 'react-native-safe-area-context'

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: aqua;
    align-items: center;
`;

export const GeneralExtatistics = styled.View`
    background-color: white;
    align-items: center;
    justify-content: start;
    border-radius: 15px 15px 0 0;
    flex: 1;
    width: 100%;
    padding: 15px;
`;

export const BestFrequency = styled.View`
    width: 100%;
    height: 90px;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
    border-radius: 8px;
    padding: 10px;
`;

export const MealsRegistered = styled.View`
    width: 100%;
    height: 90px;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
    border-radius: 8px;
    padding: 10px;
`;

export const MealsOnOutDietContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
    border-radius: 8px;
`;

export const MealsOnDiet = styled.View`
    flex: 1;
    height: 100%;
    margin-right: 6px;
    background-color: aquamarine;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
`;

export const MealsOutDiet = styled.View`
    flex: 1;
    height: 100%;
    margin-left: 6px;
    background-color: aquamarine;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
`;

