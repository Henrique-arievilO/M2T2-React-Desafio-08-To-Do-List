import React, { Component } from "react";
import styled from "styled-components";

//Estilos
export const Container = styled.section`
    width: 20rem;
    height: 20rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    boder: 1px solid black;
`
export const ToDoBody = styled.div`
    width: 20rem;
    height: 10rem;
    margin-bottom: 1rem;
`
export const ToDoHeader = styled.div`
    width: 20rem;
    height: 2rem;
    background: #805887;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-size: 1.5rem;
    padding: 1rem;
    color: #39273d;
`
export const ToDoMain = styled.div`
    width: 20rem;
    height: 8rem;
    background: #AB88B1;
`
export const BoxText = styled.div`
    width: 20rem;
    height: 1.5rem;
    background: #AB88B1;
    padding: 1rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
`
export const TypeTask = styled.input`
    width: 90%;
    height: 1.5rem;
    border: none;
    border-bottom: 2px solid #805887;
    background: transparent;
    padding-left: 1rem;
`
export const AddButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    background: #805887;
    color: #AB88B1;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LineTask = styled.div`
    width: 90%;
    height: 2rem;
    border: none;
    border-bottom: 2px solid #805887;
    background: transparent;
    margin: 0 auto;
`
export const TaskList = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    flex-direction: collumn;
    padding: .25rem;
`
export const Task = styled.p`
    width: 100%;
    height: 2rem;
    border: none;
    border-bottom: 2px solid #805887;
    background: #AB88B1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
`
export const DelButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    background: #805887;
    color: #AB88B1;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
`

//Funções
export default class ToDo extends Component{
    state = {
        task: "",
        taskList: []
      };

      handleChange = (e) => {
        this.setState({
          task: e.target.value
        });
      };

      add = () => {
        if (this.state.task !== "" && !this.state.task.match(/^[ \t]+$/)) {
          this.setState({
            taskList: this.state.taskList.concat({
                task: this.state.task,
              id: Date.now()
            }),
            task: ""
          });
        }
      };

      enter = (e) => {
        if (this.state.task.length > 0 && e.key === "Enter") {
          this.setState({
            taskList: this.state.taskList.concat(
                {
                    task: this.state.task,
                    id: Date.now()
                }
            ),
            task: ""
          });
        }
      };

      del = (id) => {
        this.setState({
          taskList: this.state.taskList.filter((item) => item.id !== id)
        });
      };
      

    render(){
        return(

            <Container>
                <ToDoBody>
                    <ToDoHeader>
                        <Title>To Do List</Title>
                    </ToDoHeader>
                    <ToDoMain>
                        <BoxText>
                          <TypeTask onChange={this.handleChange} onKeyPress={this.enter} value={this.state.task}/>
                          <AddButton onClick={this.add}>&#43;</AddButton>
                        </BoxText>
                        <LineTask/>
                        <LineTask/>
                    </ToDoMain>
                </ToDoBody>
                    {this.state.taskList.map((item) => (
                            <TaskList key={item.id}>
                                <Task>{item.task}
                                  <DelButton onClick={() => this.del(item.id)}>&#215;</DelButton>
                                </Task>
                                
                            </TaskList>
                        ))}
            </Container>
        )
    }
}