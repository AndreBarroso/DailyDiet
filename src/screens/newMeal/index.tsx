import { InputActions } from '@components/InputActions'
import { Container, Header, NewMealForm, ReturnButton, FormWithColumns, Title} from './styles'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import { ButtonActions } from '@components/ButtonActions'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { mealCreate } from '../../storage/mealCreate'
import { mealsGetAll } from '../../storage/mealsGetAll'
import { MealType } from '../../storage/storageConfig'

export const NewMeal = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [onDiet, setOnDiet] = useState<boolean>()
    const navigation = useNavigation()

    const reset = () => {
        setName('')
        setDescription('')
        setDate('')
        setHour('')
        setOnDiet(false)
    }

    return (
        <Container>
            <Header>
                <ReturnButton onPress={() => navigation.goBack()}>
                    <Text>
                        {'<<--'}
                    </Text>
                </ReturnButton>
                <Title>Título</Title>
            </Header>
            <NewMealForm>
                <View style={{flex: 1}}>
                    <InputActions title='Nome' height={46} onChangeText={(text) => setName(text)} value={name}/>
                    <InputActions title='Descrição' height={100} onChangeText={(text) => setDescription(text)} value={description}/>
                    <FormWithColumns >
                        <InputActions title='Data' height={46} flexOne onChangeText={(text) => setDate(text)} value={date}/>
                        <InputActions title='Hora' height={46} flexOne onChangeText={(text) => setHour(text)} value={hour}/>
                    </FormWithColumns>
                    <View style={{marginTop: 10}}>
                        <Text style={{marginLeft: 10}}> Está dentro da dieta?</Text>
                        <FormWithColumns >
                            <ButtonActions 
                                title="Sim"
                                circleIconColor='green'
                                margin='10px'
                                flexOne
                                onPress={() => {
                                    setOnDiet(true)}
                                }
                            />
                            <ButtonActions 
                                title="Não" 
                                circleIconColor='red'  
                                margin='10px' 
                                flexOne 
                                onPress={() => {
                                    setOnDiet(false)
                                }}
                            />
                        </FormWithColumns>
                    </View>
                </View>
                <FormWithColumns >
                    <ButtonActions title="Cadastrar refeição"  flexOne margin='10px' onPress={async() => {
                        if(!name || !description || !date || !hour) {
                            return Alert.alert('Preencha todos os campos')
                        }
                        if(onDiet === undefined) {
                            return Alert.alert('Escolha se a refeição está dentro ou fora da dieta')
                        }
                        await mealCreate({name, description, date, hour, onDiet})
                        reset()
                        navigation.goBack()

                    }}/>                   
                </FormWithColumns>
            </NewMealForm>
        </Container>
    )
}