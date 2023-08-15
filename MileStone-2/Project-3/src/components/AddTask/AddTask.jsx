import './AddTask.css'

function AddTask({ Task, setTask, addTask }) {
    return (
        <>
            <div className="addTask">
                <h1>ToDo App</h1>
                <div>
                    <input type="text" value={Task} onChange={(e) => {setTask(e.target.value)}}/>
                    <button onClick={() => {addTask(Task)}}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddTask;