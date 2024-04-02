import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function EventForm() {
    // const [checkUrl, setCheckUrl] = useState(null)
    // const [selectedFile, setSelectedFile] = useState(null)
    const [checkboxChange, setCheckboxChange] = useState(false)
    const [event, setEvent] = useState({
        name: "",
        description: "",
        time: "",
        location: "",
        type:"",
        is_free: false,
        photo: "",
        url: "",

    })

    const navigate = useNavigate()
    const API = 'Production' ? "https://nycevents-backend.onrender.com" : import.meta.env.VITE_API

    // function handlesSelectedFile (event){
    //     console.log(event)
    //     const file = event.target.files[0]
    //     setSelectedFile(file);
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         setCheckUrl(reader.result)
    //     }
    //      reader.readAsDataURL(file)
    // }

    // function cancelPhoto (){
    //     setSelectedFile(null)
    //     setCheckUrl(null)
    // }

    function handleCheckbox(){
        setCheckboxChange(!checkboxChange)
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post(`${API}/events`, event).then(({data})=> {
            console.log(data)
            navigate(`/events/${data.payload.id}`)
        }).catch(e => console.warn(e))
        alert("new event has been added")
        //   setEvent({
        //         name:"",
        //         description:"",
        //         time: "",
        //         location: "",
        //         type: "",
        //         is_free: "",
        //         photo: "",
        //         url:""

        //     })
        //     setSelectedFile(null);
        //     setCheckUrl(null)
    }

    
  return (
    <form className='events-form-container' onSubmit={handleSubmit}>
        <h3>Events Form</h3>
        <div className='event-form-input'>
            <label>Photo for Event <small>(copy and paste your photo link)</small>:</label>
            <input 
            type='text'
            value={event.photo} 
            onChange={(e) => setEvent({...event, photo: e.target.value})} />
            
        </div>
        <div className='events-form-input'>
            <label>Name of Event:</label>
            <input 
            type='text' 
            value={event.name}
            onChange={(e)=> setEvent({...event, name: e.target.value})}
            />
        </div>
        <div className='events-form-input'>
            <label>Type of Event:</label>
            <input 
            type='text' 
            value={event.type}
            onChange={(e)=> setEvent({...event, type: e.target.value})}
            />
        </div>
        <div className='select-event-form'> 
                    <label>Select a Borough:</label>
                    <select id='borough' onChange={(e)=>setEvent({...event, location: e.target.value})}>
                         <option>{event.location}</option>
                         <option value="Citywide">Citywide</option>
                         <option value="Brooklyn">Brooklyn</option>
                         <option value="Bronx">Bronx</option>
                         <option value="Manhattan">Manhattan</option>
                         <option value="Queens">Queens</option>
                     </select>
                </div>
       <div className='events-form-input'>
            <label>Day of the event:</label>
            <input 
            type='text' 
            value={event.time}
            onChange={(e)=> setEvent({...event, time: e.target.value})}
            />
        </div>
        <div className='events-form-input'>
            <label>Event's Website:</label>
            <input 
            type='text' 
            value={event.url}
            onChange={(e)=> setEvent({...event, url: e.target.value})}
            />
        </div>
        <div className='events-form-input'>
            <label>Free Event?</label>
            <input 
            type='checkbox' 
            checked={checkboxChange}
            onChange={handleCheckbox}
            />
        </div>
        <div className='events-form-input'>
            <label>Brief Description about the event:</label>
            <textarea 
            type='text' 
            value={event.description}
            onChange={(e)=> setEvent({...event, description: e.target.value})}
            />
            <div>
            <button>Create New Event</button>
           </div>
        </div>


    </form>
  )
}

export default EventForm