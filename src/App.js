import React, { useEffect, useState } from "react";
import {apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import {toast} from "react-toastify";

const App = () => {

  const [cat,setcat] = useState(filterData[0].title);
  const [course,setCourses] = useState([]);

  async function fetchData(){
    try{
      let response = await fetch(apiUrl);
      let op = await response.json();
      setCourses(op.data);
    }
     catch(error) {
            toast.error("Network me koi dikkat hai");
        }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (

    <div>

   <div>
   <Navbar filterdata = {filterData} 
              cat = {cat}
              setcat = {setcat}></Navbar>
   </div>
    


  <div>
    <Cards course={course} cat = {cat}></Cards>
  </div>
        


    </div>

  );
};

export default App;
