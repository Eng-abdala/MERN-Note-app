import { useState } from "react"
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"

import { useNavigate } from "react-router-dom"

const Note = ()=>{
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")



    const navigate = useNavigate()

    // function that post data to the api
    const PostData=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:5000/create",{
            "title":title,
            "description":description
    
        }).then(()=>{
            toast.success("Data id Inserted") 
            navigate("/")
            setTitle("");
            setDescription("");
        }).catch((error)=>{
            console.log(error)})
    }

   
    return <>
    <div className="flex justify-center mt-[15%]">

    <form className="w-[400px] p-10 shadow-2xl shadow-blue-300" action="">
        <h1 className="font-bold text-[22px] text-blue-500">Note App</h1>
        <label htmlFor="">Task:</label> <br />
        <input value={title}  onChange={(event)=> setTitle(event.target.value)} className="w-[300px] pl-2 h-[30px] mb-4 border-2 border-blue-400 " type="text" placeholder="Enter a task" /> <br />
        <label htmlFor="">Description:</label> <br />
        <input value={description}  onChange={(event)=> setDescription(event.target.value)} className="w-[300px] pl-2 h-[30px] mb-4 border-2 border-blue-400" type="text" placeholder="Enter a description" /> <br />
        <button onClick={PostData} className="px-[20px] py-0.5 bg-blue-400 font-bold text-white ml-20 mt-4 rounded-md ">Add</button>
    </form>
    </div>

    <Toaster></Toaster>
    
    </>
}

export default Note