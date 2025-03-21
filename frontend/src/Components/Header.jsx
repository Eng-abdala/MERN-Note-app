import App from "../App"
import { Link } from "react-router-dom"
const Header = ()=>{
    return <>
    <div className="bg-red-500 flex justify-between px-[10%] py-3">
        <h1 className="font-bold text-white text-[20px]">Nooty</h1>
        <Link to="note">  <button className="font-bold text-white text-[30px]">+</button></Link>


    </div>
 <App/>
    
    </>
}
export default Header