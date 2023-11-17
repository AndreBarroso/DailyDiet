import { InputActions } from '@components/InputActions'
import { Container, Header, NewMealForm, ReturnButton, FormWithColumns, Title} from './styles'
import {Text, TouchableOpacity, View} from 'react-native'
import { ButtonActions } from '@components/ButtonActions'
import { useNavigation } from '@react-navigation/native'

export const NewMeal = () => {
    const navigation = useNavigation()
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
                    <InputActions title='Nome' height={46}/>
                    <InputActions title='Descrição' height={100}/>
                    <FormWithColumns >
                        <InputActions title='Data' height={46} flexOne/>
                        <InputActions title='Hora' height={46} flexOne/>
                    </FormWithColumns>
                    <View style={{marginTop: 10}}>
                        <Text style={{marginLeft: 10}}> Está dentro da dieta?</Text>
                        <FormWithColumns >
                            <ButtonActions title="Sim" circleIconColor='green' margin='10px' flexOne/>
                            <ButtonActions title="Não" circleIconColor='red'  margin='10px' flexOne/>
                        </FormWithColumns>
                    </View>
                </View>
                <FormWithColumns >
                    <ButtonActions title="Cadastrar refeição"  flexOne margin='10px'/>                    
                </FormWithColumns>
            </NewMealForm>
        </Container>
    )
}