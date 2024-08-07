import React, { Component } from "react";
import listStyles from "./TaskList.module.css";
import addTaskStyles from "./AddTaskBox.module.css";
import deleteSvg from "../../imgs/delete.svg";
import { nanoid } from "nanoid";

class TaskList extends Component {
  state = {
    tasks: this.props.tasks,
  };

  deleteTask(evt, tasks) {
    const idTaskToDelete = evt.target.parentNode.getAttribute("data-id");
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== idTaskToDelete),
    }));
  }

  addTask = (evt) => {
    evt.preventDefault();
    const newTask = {
      text: evt.target.elements.addTaskInput.value,
      id: nanoid(),
    };
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask),
    }));
    evt.target.reset();
  };

  render() {
    // console.log(this.state.tasks);
    return (
      <>
        <div className={addTaskStyles.addTaskBox}>
          <form
            className={addTaskStyles.addTaskForm}
            onSubmit={(evt) => this.addTask(evt)}
          >
            <input
              type="text"
              className={addTaskStyles.addTaskInput}
              placeholder="Text your task"
              name="addTaskInput"
            />
            <button type="submit" className={addTaskStyles.addTaskBtn}>
              Add task
            </button>
          </form>
        </div>
        <ul className={listStyles.tasks__list}>
          {this.state.tasks.map((task) => (
            <li key={task.id} className={listStyles.task__item}>
              <p>{task.text}</p>
              <button
                type="button"
                className={listStyles.task__button}
                data-id={task.id}
                onClick={(evt) => this.deleteTask(evt, this.state.tasks)}
              >
                <img
                  src={deleteSvg}
                  alt="delete-svg"
                  className={listStyles.delete__svg}
                />
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export { TaskList };
