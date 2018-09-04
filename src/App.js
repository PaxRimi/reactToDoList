import React, { Component } from 'react';
import Todos from "./todolist";

class App extends Component {

    state = {
        todoes: [
            { id: 1, content:"write some code"},
            { id: 2, content:"Work hard to be the best"}
        ]
    };

    deleteToDo = (id) => {
      const toDoList = this.state.todoes.filter(element => {return element.id !== id});

      this.setState({
         todoes: toDoList,
      });
    };

    render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
          <Todos todo={this.state.todoes} deleteElement={this.deleteToDo}/>
      </div>
    );
  }
}

export default App;
