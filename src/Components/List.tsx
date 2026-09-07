import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function List({task,index,deleteTask}:any) {
    const [chackBox,setChackBox] = useState(false)
    const setIndexofTasks = {
        task,
        index
    }
    
    return (
        <>
            <ul>
                <li className="py-2 border-b border-gray-200 flex justify-between">
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" onChange={(e) => {
                            setChackBox(e.target.checked)
                        }}/><p className={`text-green-500 ${chackBox && "text-red-500 line-through"}`}>{setIndexofTasks.task}</p>
                    </div>
                    {chackBox && <button onClick={() => deleteTask(setIndexofTasks)} className="text-red-500"><FaRegTrashAlt/></button>}
                </li>
            </ul>
        </>
    )
}