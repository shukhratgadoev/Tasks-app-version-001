import * as React from "react";

import NewTaskForm from "../TaskForm";
import TasksList from "../TaskList";
import { TaskType } from "../../interfaces/types";

interface State {
  newTask: TaskType;
  tasks: TaskType[];
}

export class TaskComponent extends React.Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: TaskType) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm onAdd={this.addTask} onChange={this.handleTaskChange} />
        <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
      </div>
    );
  }
}
