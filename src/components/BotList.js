import React from 'react'
import './Botlist.css'

function BotList(props) {
  const itemList=props.items
   const listitem=itemList.map(item =><div className='content'key={item.id}>
    <ul>
      <img src={item.avatar_url} alt='avatar' />
      <h3>Name :{item.name}</h3>
      <h4>Health :{item.health}</h4>
      <p>damage:{item.damage} </p>
      <p>armor :{item.armor}</p>
      <p> bot_class:{item.bot_class}</p>
      <p> catchphrase:{item.catchphrase}</p>
      <p> created_at:{item.created_at}</p>
      <p> updated_at:{item.updated_at}</p>
    </ul><hr />
  </div>
   );
  
  return(
    <>{listitem}
    </>
      
    
  )

}

export default BotList