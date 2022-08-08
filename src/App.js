import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components'
import ToDoList from './components/ToDo'

  ///Export Header
  export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  background: #1a0025;
  position: fixed;
  top: -1px;
  `
  export const Title = styled.h1`
  font-size: 1.5rem;
  letter-spacing: .1rem;
  color: #68108d;
  font-weight: 500;
  span:hover{
  color: #fff;
  }
  `
  export const SubTitle = styled.span`
  font-size: 2.5rem;
  font-weight: normal;
  color: #dca2f4;
  font-family: 'Tangerine', cursive;
  `
    // Export Main
    export const Main = styled.div`
    width: 100%;
    height: 100vh;
    padding: 3rem 0;
    background: #68108d;
    display: flex;
    justify-content: center;
    align-items: start;
`
// Export Footer
export const Footer = styled.div`
    width: 100%;
    padding: 1rem;
    background: #1a0025;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
`
export const Copyright = styled.p`
    font-size: 1rem;
    color: #dca2f4;
    font-weight: 300;

    a:hover{
      color: #fff;
    }
`
export const Link = styled.a`
    font-size: 1rem;
    font-weight: 500;
    color: #dca2f4;
    font-weight: bold;
    cursor: pointer;
`

export default class App extends Component{
  render(){
    return(
      <>
        <GlobalStyle />
        <Header>
          <Title>Desafio 08: <SubTitle>Lista de Tarefas</SubTitle></Title>
        </Header>
        <Main>
          <ToDoList/>
        </Main>
        <Footer>
          <Copyright>&copy;Produzido por Wanderson Herique Oliveira - <Link href='https://www.vainaweb.com.br' target="_blank">Vai na Web</Link> - 2022.</Copyright>
        </Footer>
      </>
    )
  }
}