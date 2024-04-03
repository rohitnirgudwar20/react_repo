import {useState} from 'react';


function Cards({id,images,name,info,wealth,remove}){
   const [readmore,setReadmore] =useState(true);
   // const infos =`${info.substring(0,200)}......`
   const infos = readmore?`${info.substring(0,200)}......` :info;
    function readmoreHandler(){
      setReadmore(!readmore);

    }
return(
  
    <div className="card">
      
       <img className='image' src={images}></img>

       <div className="team-info">

          <div  className='team-details'>
             <h4 className='team-price' >  {wealth}</h4>
             <h4 className='teamate-name'>  {name} </h4>
          </div>
      
          <div className="description">
               {infos}
             <span  className='readmore' onClick={readmoreHandler}>
               {readmore?'Read More':'Show Less'}
             </span>
          </div>
       </div>
       <button  className=" btn-red" onClick={()=>remove(id)}>Deletedetails
     </button>
      
   </div>

     
 
);

} 


 
 
export default Cards;
