import { useState,useEffect } from "react"
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"
const Home =()=>{
    const [note,setNote]=useState([])
    const getdata =  ()=>{
        axios.get('http://localhost:5000/get').then((response)=>{
            setNote(response.data)

        }).catch((error)=>{
            console.log(error)
        })
        
    }
    useEffect(()=>{
        getdata()
    },[])
    // function that delets data
    const deleteData = (id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`).then(()=>{
            toast.success("this task is deleted")
            getdata()
        }).catch((error)=>[
            console.log(error)
        ])
    }
    return <div>
        <div className="grid grid-cols-[300px_300px_300px] gap-10 justify-center">


     
     {
         note.map((note)=>{
             return <div>

                <div className="w-[300px] h-[200px] shadow-2xl bg-blue-50 shadow-blue-300 p-4 my-10">
                    <h1 className="font-bold text-[18px] pt-5 text-blue-500">{note.title}</h1>
                    <p className="text-blue text-blue-500 pt-2">{note.description}</p>
                    <div className="flex justify-between px-6 mt-10">
                    <p className="text-red-400 ">Delete</p>
                    <button onClick={()=>deleteData(note._id)}><i class="fa-solid fa-trash-can text-red-600 text-[20px]"></i></button>
                    </div>

                </div>
                </div>
                
            })
        }

        <Toaster></Toaster>
        </div>
    
            </div>
    
}

export default Home