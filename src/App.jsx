import React from "react";
import Task from "Task";
import "./App.css";

class App extends Task {
  state = { tasks: [], currentTask: "" };
  render() {
    const { tasks } = this.state;
    return (
        <div className="App flex min-h-screen w-full justify-center items-center bg-gray-100">
            <div className="absolute top-0 w-full h-full bg-center bg-cover h-96" style={{
              backgroundImage: `url("https://source.unsplash.com/random")`
            }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
            </div>
          <div className="card md:w-96 min-h-12 p-4 bg-base-100 shadow-xl">
              <div className="text-center">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Mi lista de tareas
                  </h3>
              </div>
            <form
                onSubmit={this.handleSubmit}
                className="flex gap-2"
                style={{ margin: "15px 0" }}
            >
                <input type="text"
                        name="input-task"
                       value={this.state.currentTask}
                       required={true}
                       onInput={this.handleChange}
                       placeholder="Añadir una tarea"
                       className="input input-bordered w-full max-w-xs h-6/4"/>

                <button id="form-submit" type="submit" className="btn btn-circle btn-ghost text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </form>
            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                  <li
                      key={task.id}
                      className="label-task flex gap-2 p-2 bg-gray-100 rounded-xl w-full justify-between items-center"
                  >
                      <div className="flex gap-2">
                          <input
                              type='checkbox'
                              className="checkbox checkbox-md transition hover:scale-105 duration-300"
                              checked={task.completed}
                              onClick={() => this.handleUpdate(task.id)}
                          />
                          <div
                              className={
                                  task.completed
                                      ? "line-through"
                                      : ""
                              }
                          >
                              {task.name}
                          </div>
                      </div>
                    <button
                        onClick={() => alert('Este reto es para ti!')}
                        className='w-3 h-3'
                    >
                        <svg className='text-red-600' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>
                  </li>
              ))}
            </ul>
          </div>
        </div>
    );
  }
}

export default App;