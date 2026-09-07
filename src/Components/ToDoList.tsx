import { useState } from "react";
import List from "./List";

export default function ToDoList() {
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [tasks,setTasks] = useState<string[]>([])
    const [taskInput, setTaskInput] = useState<string>('');
    const handleAddButton = () => {
        const newTask = taskInput.trim();
        if(newTask === ''){
            return;
        }
        setTasks([...tasks,newTask])
    }
    const deleteTask = (task:any) => {
        const deleteTask = tasks.filter((t,i) => {
            console.log(t);
            return i !== task.index
        });
        setTasks(deleteTask)
    }

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center gap-3 bg-gray-100">
                <h1 className="text-3xl font-bold bg-red-200 px-20 py-3 rounded-2xl">
                    To-Do List
                </h1>
                <h1>Created By Abdur Ratin🥰</h1>
                <div className="w-96 bg-white rounded-lg shadow-md p-4">
                    {
                        tasks.map((input,indx) => <List index={indx} task={input} deleteTask={deleteTask}></List>)
                    }
                </div>
                {isAddingTask && (
                    <div className="font-bold bg-red-200 px-5 py-3 rounded-2xl flex items-center justify-between gap-2 mb-4">
                        <input
                            type="text"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="Enter task"
                            className="border rounded px-2 py-1 outline-0"
                        />
                        <button
                            onClick={handleAddButton}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Add
                        </button>
                    </div>
                )}
                <div
                    className="font-bold bg-red-200 px-23 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-300 cursor-pointer"
                    onClick={() => setIsAddingTask((prev) => !prev)}
                >
                    {isAddingTask ? <span>Close</span> : <span>Add Task</span>}
                </div>
            </div>
        </>
    );
}
