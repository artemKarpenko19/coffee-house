

import "./filter.css";




const Filter = (props) => {

    const btnsData = [
        {name:"Brasil", label: "Brasil"},
        {name:"Keniya", label: "Keniya"},
        {name:"Columbia", label: "Columbia"},
        {name:"All", label: "All"},
    ];
    
    const btns = btnsData.map(({name, label}) => {
       const active = props.filter === name;
       const clazz = active ? 'btn-active' : 'btn';
        return (
           <button
           key={name}
           type="button"
           className={`btn ${clazz}`}
           onClick={() => props.onFilter(name)}>
            {label}
           </button>
        )
    
    });
   
  
        return (
            <div className="filter">
                <label>Or filter</label>
                {btns}
            </div>
        )

}

export default Filter;