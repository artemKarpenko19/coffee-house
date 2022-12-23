
import Search from "../search/search";

import "./filter.css";




const Filter = (props) => {

    const btnsData = [
        {name:"Brasil", label: "Brasil"},
        {name:"Keniya", label: "Keniya"},
        {name:"Colombia", label: "Columbia"},   
    ];
    
    const btns = btnsData.map(({name, label}) => {
       const active = props.filter === name;
       const clazz = active ? 'btn-active' : 'btn';
        return (
           <button
           key={name}
           type="button"
           className={`btn ${clazz}`}>
            {label}
           </button>
        )
    
    });
   
  
        return (
            <div className="filter">
               <Search/>
                <label>Or filter</label>
                {btns}
            </div>
        )
        
}

export default Filter;