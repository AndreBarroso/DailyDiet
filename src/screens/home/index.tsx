import { View, Text, SectionList} from "react-native";
import { Avatar, AvatarContainer, Container, Header, Logo  } from "./styles";
import profilePicture from '@assets/avatar.jpeg'
import logoPicutre from '@assets/logo.png'
import { PercentagenDietConcluded } from "@components/PercentagenDietConcluded.tsx";
import { ButtonActions } from "@components/ButtonActions";
import { MealMadeCard } from "@components/MealMadeCard";
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import { useCallback, useEffect, useState , } from "react";
import { MealType } from '../../storage/storageConfig'
import { mealsGetAll } from '../../storage/mealsGetAll'


export default function Home() {
  const [meals, setMeals] = useState<{title: string, data: {time: string, meal: string, onDiet: boolean}[]}[]>([])
  const [mealsOnDietTotalPercentage, setMealsOnDietTotalPercentage] = useState(0)

  const navigation = useNavigation()

  const getMeals = async() => {
    const mealsStoraged = await mealsGetAll() as MealType[]

    const dataMeals: {title: string, data: {time: string, meal: string, onDiet: boolean}[]}[] = []

    let mealsCool = 0
    let mealsDontCool = 0
    let totalMeals = 0

    let mealsCoolPercentage = 0

    mealsStoraged.forEach(({date, hour, name, onDiet}) => {
      const findDate = dataMeals.find(({title}) => title === date) ?? {}

      const haveDate = Object.keys(findDate)

      if(haveDate?.length) {
        
        dataMeals.forEach(({title}, index) => {
          if(title === date) {
            dataMeals[index] = {...dataMeals[index], data: [...dataMeals[index].data, {time: hour, meal: name, onDiet}]}
          } 
        })
      }
      else {
            dataMeals.push({title: date, data: [{time: hour, meal: name, onDiet}]})
      }

      if(onDiet === true) {
        console.log('oi')
        mealsCool ++
      } else {
        mealsDontCool ++
      }
    })

    totalMeals = mealsDontCool + mealsCool
    mealsCoolPercentage = totalMeals === 0 ? 0 : (
      (mealsCool/ totalMeals) * 100
    )

    setMealsOnDietTotalPercentage(mealsCoolPercentage)
    setMeals(dataMeals)
 
  }

  const onGoToNewMealPage = () => {
    navigation.navigate('newMeal')
  }


  useFocusEffect(
    useCallback(()=> {
      getMeals()
    } , [])
  )

    return (
      <Container >
        <Header>
          <Logo source={logoPicutre}/>
          <AvatarContainer >
            <Avatar source={profilePicture} borderRadius={20} />
          </AvatarContainer>
        </Header>
        <PercentagenDietConcluded justifyContent="flex-end" percentage={mealsOnDietTotalPercentage}/>
        <Text style={{marginBottom: 10}}>Refeições</Text>
        <ButtonActions title="Nova refeição" type="plus" onPress={onGoToNewMealPage}/>
        <SectionList
          sections={meals}
          keyExtractor={(item, index) =>  `${item}${index}` }
          renderItem={({item}) => (
            <View >
              <MealMadeCard time={item.time} meal={item.meal} isHealthyMeal={item.onDiet}/>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
          )}
    />
      </Container>
    );
  }
