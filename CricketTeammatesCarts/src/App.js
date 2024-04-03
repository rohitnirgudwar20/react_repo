import logo from './logo.svg';
import './App.css';
import data from './data';
import {useState} from 'react';
import Team from './components/team';


function App() {
  
  const[teams,setTeam] = useState(data);
   function removeteam(id){
     const newteam = teams.filter(temobj =>temobj.id !=id); 
     setTeam(newteam)
   }

   if(teams.length===0){

    return(
     <div className='refresh'>
      <h2> No Teams Left</h2>

      <button  className ="btn-white" onClick={()=>setTeam(data)}>  
        Refresh
      </button>
     </div>           

    );
    
   }


  return (
    <div >

    <Team team={teams} removeteam={removeteam}></Team>

    </div>
  );
}

export default App;
