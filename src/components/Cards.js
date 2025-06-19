import { useState } from "react";
import Card from './Card';
import React from 'react'

const Cards = (props)=>{

    let course = props.course;
    let cat = props.cat;
    const [likedcourse,setlk] = useState([]);

    function getallcourses(){

        if(cat === "All"){
            let allcour = [];

            Object.values(course).forEach((array)=>{
                array.forEach(coursedata =>{
                    allcour.push(coursedata);
                })
            })

            return allcour;
        }else{
            return course[cat];
        }
        
    }

    return (
        <div>

        {
            getallcourses().map( (course)=>(
                <Card key={course.id}
                course = {course}
                likedcourse = {likedcourse}
                setlk = {setlk}></Card>
            ))
        }
         

        </div>
    )
}

export default Cards;