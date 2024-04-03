import Cards from "./Cards";
function Team({team ,removeteam}){

    return(
    <div className='container'>
        <div className='title'> 
            <h2>Team details</h2>
        </div>
    <div className='cards'>
     {
        team.map(  (tem) => {
            return <Cards {...tem} remove={removeteam}></Cards>
        })
     }
     </div>
    </div>
    );


}

export default Team;