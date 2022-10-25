import React, {useReducer} from "react"
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import  "./App.css";

import {TodoContext} from "./Context/TodoContext"
import todoReducer from "./Context/reducer"
import TodoForm from "./Componets/TodoForm";
import Todos from "./Componets/Todos";

const App = () => {

  const [todos, dispatch ] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value ={{todos, dispatch}}>

      <Container>
        <h1> Todo App With Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )
};


export default App;
