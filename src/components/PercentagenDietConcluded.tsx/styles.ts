import styled from "styled-components/native"


export const Container = styled.View<{borderWidth?: string}>`
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    border-width: ${(props) => props.borderWidth};
    border-radius: 10px;
`

export const ExtatisticsContainerButton = styled.View<{justifyContent?: 'flex-start' |'flex-end'}>`
   width: 100%;
   flex-direction: row;
   justify-content: ${(props) => props.justifyContent };
   margin-bottom: -10px;
`

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

