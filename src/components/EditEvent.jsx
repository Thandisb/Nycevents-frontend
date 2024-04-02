import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function EditEvent() {
    const [checkboxChange, setCheckboxChange] = useState(false)
    const [editEvent, setEditEvent] = useState({
     name: "",
     description: "",
     time: "",
     location: "",
     type: "",
     is_free: false,
     photo: "",
     url: "",
   })

   const{id} = useParams()
   const navigate = useNavigate()
   const API = 'Production' ? "https://nycevents-backend.onrender.com" : import.meta.env.VITE_API

   useEffect(() => {
     axios.get(`${API}/events/${id}`).then(({data})=> {
        setEditEvent(data.payload)
     }).catch(e => {
        console.warn(e)
     })
   }, [id])

   function handleChange(e){
    setEditEvent({...editEvent, [e.target.name]: e.target.value})
   }

   function handleCheckbox(){
    setCheckboxChange(!checkboxChange)
}

   function handleSubmit(e){
    e.preventDefault()
    axios.put(`${API}/events/${id}`, editEvent).then(() => {
        navigate(`/events/${id}`)
    }).catch(e => {
        console.warn(e)
    })
   }

   
    return (
        <form className='events-form-container' onSubmit={handleSubmit}>
        <h3>Events Edit Form</h3>
        
        <div className='events-form-input'>
            <label>Photo Link</label>
            <input
            type='text'
            name='photo'
            id='photo'
            value={editEvent.photo}
            onChange={(e)=>handleChange(e)}
            />
        </div>
     <div className='events-form-input'>
            <label>Name of Event:</label>
            <input 
            type='text'
            name = 'name'
            id='name' 
            value={editEvent.name}
            onChange={(e)=>handleChange(e)}
            />
        </div>
        <div className='events-form-input'>
            <label>Type of Event:</label>
            <input 
            type='text'
            name='type'
            id='type' 
            value={editEvent.type}
            onChange={(e)=>handleChange(e)}
            />
        </div>
        <div className='select-editEvent-form'> 
                    <label>Select a Borough:</label>
                    <select id='borough' onChange={(e)=>handleChange(e)}>
                         <option>{editEvent.location}</option>
                         <option value="Citywide">Citywide</option>
                         <option value="Brooklyn">Brooklyn</option>
                         <option value="Bronx">Bronx</option>
                         <option value="Manhattan">Manhattan</option>
                         <option value="Queens">Queens</option>
                     </select>
                </div>
       <div className='events-form-input'>
            <label>Day of the Event:</label>
            <input 
            type='text' 
            name='when'
            id='when'
            value={editEvent.time}
            onChange={(e)=>handleChange(e)}
            />
        </div>
        <div className='events-form-input'>
            <label>Event's Website:</label>
            <input 
            type='text' 
            value={editEvent.url}
            onChange={(e)=>handleChange(e)}
            />
        </div>
        <div className='events-form-input'>
            <label>Free Event?</label>
            <input 
            type='checkbox' 
            checked={checkboxChange}
            onChange={(e)=>handleCheckbox(e)}
            />
        </div>
        <div className='events-form-input'>
            <label>Brief Description about the Event:</label>
            <textarea 
            type='text' 
            value={editEvent.description}
            onChange={(e)=>handleChange(e)}
            />
            <div>
            <button>Update Event</button>
           </div>
        </div>


    </form>
  )
}

export default EditEvent