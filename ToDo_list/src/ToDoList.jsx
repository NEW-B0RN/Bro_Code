import React,{useState} from 'react'

function ToDoList(){

    const [task,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter a Task...' 
                    value={newTask}
                    onChange={handleInputChange} />
            </div>
        </div>
    );
} 

export default ToDoList