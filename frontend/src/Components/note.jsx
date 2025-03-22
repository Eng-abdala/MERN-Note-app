import { useState } from "react"
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"
import { motion } from "framer-motion"

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

    <motion.form className="w-[400px] p-10 shadow-2xl shadow-blue-300" action=""
    initial={{opacity:0, x:"-100vh"}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    
    
    >
        <h1 className="font-bold text-[22px] text-blue-500">Note App</h1>
        <label htmlFor="">Task:</label> <br />
        < motion.input  value={title}  onChange={(event)=> setTitle(event.target.value)} className="w-[300px] pl-2 h-[30px] mb-4 border-2 border-blue-400 " type="text" placeholder="Enter a task"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        
        
        /> <br />
        <label htmlFor="">Description:</label> <br />
        <motion.input value={description}  onChange={(event)=> setDescription(event.target.value)} className="w-[300px] pl-2 h-[30px] mb-4 border-2 border-blue-400" type="text" placeholder="Enter a description"
        
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        
        /> <br />
        <motion.button onClick={PostData} className="px-[20px] py-0.5 bg-blue-400 font-bold text-white ml-20 mt-4 rounded-md "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        
        
        >Add</motion.button>
    </motion.form>
    </div>

    <Toaster></Toaster>
    
    </>
}

export default Note