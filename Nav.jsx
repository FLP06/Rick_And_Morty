
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const Nav = ({onSearch}) =>{

    
    return(
        <nav>

               <SearchBar onSearch={onSearch}/>
               <button>
                <Link to="/abaut">ABAUT</Link>
               </button>
               <button>
                <Link to="/home">HOME</Link>
               </button>
        </nav>
           
        
    )
}

export default Nav