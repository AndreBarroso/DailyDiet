import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Extatistics } from '@screens/extatistics'
import Home from '@screens/home'
import { NewMeal } from '@screens/newMeal'
import {Text, View} from 'react-native'


export const AppRoutes = () => {
    const {Screen, Navigator} = createNativeStackNavigator()
    
    return (
        <Navigator >
            <Screen
                name ="home"
                component={Home} 
            />
            <Screen
                name ="extatistics"
                component={Extatistics} 
            />
            <Screen
                name ="newMeal"
                component={NewMeal} 
            />
        </Navigator>
    )
}