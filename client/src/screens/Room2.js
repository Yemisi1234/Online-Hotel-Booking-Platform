import React from 'react'

export default function Room2({room}) {
      console.log(room);
    return (
        <div className='row bs'>
            <div className ='col-md-5'>
                <img src= {room.imageurls[1]} className= 'smalling' alt ="it is not working"/> 
            </div>
            <div className = 'col-md-6'>
                <h1>{room.name}</h1>
                <p>maxcount:{room.maxcount}</p>
                <p>Phone Number: {room.phonenumber}</p>
                <p>Type:{room.type}</p>
                <p>description: {room.description}</p>


                <div style = {{float:'right'}}>
                <button className='btn btn-primary'>view details  </button>
                <button className='btn btn-primary'>Book Now  </button>

                </div>

               
                 
            </div>
            
        </div>
    )
}
