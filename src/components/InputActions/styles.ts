import styled from "styled-components/native";
import { TextInput } from 'react-native'

export const Container = styled.View`
    margin: 10px 10px 0 10px;
    align-items: start;
    margin-bottom: 10px;
`

export const Input = styled(TextInput)`
    border: 1px solid black;
    border-radius: 5px;
`