import { toast } from "react-toastify";
import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"


const Card = (props)=>{


    let course = props.course;
    let likedcourse = props.likedcourse;
    let setlk = props.setlk;

    function clickhandler(){
        if(likedcourse.includes(course.id)){
            setlk((prev) => prev.filter((cid)=>(cid!==course.id)));
            toast.warning("like removed")
        }else {
            if(likedcourse.length===0){
                setlk([course.id])
            }else{
                setlk((prev)=> [...prev,course.id])
            }
            toast.success("Liked Successfully");
        }
    }


    return (
        <div>

            <div>
            <img src={course.image.url} className="w-[25%]"/>

                <div>
                    <button onClick={clickhandler}>
                    {
                        likedcourse.includes(course.id)?  (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }

                    </button>
                </div>
            </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description.length>100?(course.description.substr(0,100)+ ".."):
                (course.description)}</p>
            </div>

        </div>
    )
}

export default Card;