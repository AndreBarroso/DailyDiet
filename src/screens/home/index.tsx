import { View, Text, SectionList } from "react-native";
import { Avatar, AvatarContainer, Container, Header, Logo  } from "./styles";
import profilePicture from '@assets/avatar.jpeg'
import logoPicutre from '@assets/logo.png'
import { PercentagenDietConcluded } from "@components/PercentagenDietConcluded.tsx";
import { ButtonActions } from "@components/ButtonActions";
import { MealMadeCard } from "@components/MealMadeCard";
import {useNavigation} from '@react-navigation/native'


export default function Home() {

  const navigation = useNavigation()

  const onGoToNewMealPage = () => {
    navigation.navigate('newMeal')
  }

  const DATA = [
    {
      title: '12.08.22',
      data: [{time: '20:00',meal: 'X-Tudo'}, {time: '16:00',meal: 'Whey Protein'}],
    },
    {
      title: '11.08.22',
      data: [{time: '21:00',meal: 'X-Tudo'}, {time: '16:01',meal: 'Whey Protein'}],
    },
  ];

    return (
      <Container >
        <Header>
          <Logo source={logoPicutre}/>
          <AvatarContainer >
            <Avatar source={profilePicture} borderRadius={20} />
          </AvatarContainer>
        </Header>
        <PercentagenDietConcluded />
        <Text style={{marginBottom: 10}}>Refeições</Text>
        <ButtonActions title="Nova refeição" type="plus" onPress={onGoToNewMealPage}/>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) =>  `${item}${index}` }
          renderItem={({item}) => (
            <View >
              <MealMadeCard time={item.time} meal={item.meal}/>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
          )}
    />
      </Container>
    );
  }