import { useState } from 'react'
import './App.css'
import ShowTask from './components/ShowTask/ShowTask';
import AddTask from './components/AddTask/addTask';

function App() {
  const [TaskList,setList] = useState([]);
  const [Task, setTask] = useState("");
  let Status = "Pending!!"

  function addTask() {
    if(Task !== ""){
      setList([...TaskList, {title:Task,status:Status}]);
      setTask("");
    }
  }

  function deleteTask(text) {
    const newTodos = TaskList.filter((todo) => {
      return todo.title !== text
    })
    setList(newTodos)
  }
  

  function updateStatus(i) {
    const newList = [...TaskList]
    const toUpdate = TaskList.find((task,indx) => indx === i)
    if (toUpdate.status=="Pending!!") {
      toUpdate.status="Working!!"
    }else if(toUpdate.status=="Working!!"){
      toUpdate.status="Done!!"
    }else if(toUpdate.status=="Done!!"){
      toUpdate.status="Pending!!"
    }
    newList[i] = toUpdate
    setList(newList);
  }

  return (
    <>
      <AddTask Task={Task} setTask={setTask} addTask={addTask}/>
      <div className="container">
        <ShowTask TaskList={TaskList} deleteTask={deleteTask} updateStatus={updateStatus}/>
      </div>
    </>
  )
}

export default App
