import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Token = (props) => {
    let course =props.course;
    let likedCourses =props.likedCourses;
    let setLikedCourses =props.setLikedCourses;

    function clickHandler(){
    
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id))); 
            toast.warning("liked reomved");

        }
        else{
            if(likedCourses.length ===0){
                setLikedCourses((course.id));
            }
            else{
                setLikedCourses((prev) =>[...prev,course.id]);
            }
            toast.success("Liked succesfully");
        }

    }
  return (
    <div className='w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative '>
          <img src={course.image.url}/>
          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] flex items-center justify-center
           '>
            <button  onClick={clickHandler}>
            {
                likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem"/>)
            }
                   
            </button>
        </div>
        </div>
        
        <div className='p-3.5'> 
            <p className='text-white font-semibold text-lg leading-6'> {course.title}</p>
            <p className='mt-2 text-white'>
                {
                course.description.length >100?
                (course.description.substr(0,100)+ "..."):
                (course.description)
                
                }</p>
            
        </div>
    </div>
  )
}

export default Token;