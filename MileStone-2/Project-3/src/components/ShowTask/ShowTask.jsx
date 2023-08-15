import './ShowTask.css'

function ShowTask({TaskList, deleteTask, updateStatus}) {

    const checkList = () => {
        if (TaskList.length > 0) {
            return true
        }else{
            return false
        }
    }
    


    return(
        <>
        {
            checkList? TaskList.map((Element,i) => {
                return (
                    <div className="card" key={i}>
                        <h2>{i+1}: {Element.title}</h2>
                        <span>Status:{Element.status}</span>
                        <button onClick={() => {updateStatus(i)}}>Update Status</button>
                        <button onClick={() => {deleteTask(Element.title)}}>Remove</button>
                    </div>
                )
            }):<div></div>
        }
        </>
    )
}
export default ShowTask;