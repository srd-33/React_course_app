import React from 'react'

const Navbar = (props)=>{

    let fd = props.filterdata;
    let cat = props.cat;
    let setcat = props.setcat;

    function filterhandler(title){
        setcat(title);
    }

    return (
        <div>

           {
            fd.map((data)=>(
                <button 
                className= {`${cat === data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}  ` }
                 key = {data.id}
                 onClick={()=> filterhandler(data.title)}>
                  {data.title}
                </button>
            ))
           }

        </div>
    )
}

export default Navbar;