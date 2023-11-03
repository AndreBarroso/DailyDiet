import { View, Text } from "react-native";
import { Avatar, AvatarContainer, Container, Header, Logo  } from "./styles";
import profilePicture from '@assets/avatar.jpeg'
import logoPicutre from '@assets/logo.png'
import { PercentagenDietConcluded } from "@components/PercentagenDietConcluded.tsx";
import { ButtonActions } from "@components/ButtonActions";


export default function Home() {
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
        <ButtonActions title="Nova refeição" type="plus"/>
      </Container>
    );
  }