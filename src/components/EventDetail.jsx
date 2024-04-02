import React, {useState, useEffect}from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {FaX, FaCheck} from 'react-icons/fa6'
import axios from 'axios'



function EventDetail() {
    const [eventPage, setEventPage] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const API = 'Production' ? "https://nycevents-backend.onrender.com" : import.meta.env.VITE_API

    useEffect(() => {
    axios.get(`${API}/events/${id}`).then(({data}) => {
         setEventPage(data.payload)
    }).catch(e => {
        console.warn(e)
    })
    })

    function handlesDelete (){
        axios.delete(`${API}/events/${id}`).then(() => {
            alert(`Event: ${eventPage.name} has been deleted`)
            navigate('/events')
        })
    }

    function handlesEdit(id){

        navigate(`/events/${id}/edit`)
    }
    
  return (
    <Card border='dark' bg='light' style={{width: '100%'}}>
           <Card.Img
          src={eventPage.photo}
          alt='event-photo'
          variant='top'
          className='object-fit-cover'
          id="eventPhotoImg"
          style={{
            // width: '95%',
            height: '750px',
            marginLeft: '100px',
           
          }}
          />
        <Card.Body style={{textAlign:'center'}}>
        <Card.Header><h3><strong>{eventPage.name}</strong></h3></Card.Header>
        <ListGroup className='list-group-items'>
            <ListGroup.Item> Time: {eventPage.time}</ListGroup.Item>
            <ListGroup.Item> Type of Event: {eventPage.type}</ListGroup.Item>
            <ListGroup.Item> Free?: {eventPage.is_free?(<FaCheck style={{height:'15px', color: 'green'}}/>):(<FaX style={{height: '15px', color:'red'}}/>)}</ListGroup.Item>
      </ListGroup>
      
        <Card.Text style={{width: "100vh", marginLeft: 'auto', marginRight:'auto'}}>{eventPage.description}</Card.Text>
        <Button onClick={() => handlesDelete(id)} className='eventBtn'>Delete: {eventPage.name}</Button>
        <Button onClick={() => handlesEdit(id)} className='eventBtn'>Edit Event</Button>
        <Button onClick={() => {navigate(-1)}} className='eventBtn'>Back to Events</Button>
      </Card.Body>
      <Card.Footer style={{textAlign: "center"}}><Link to={eventPage.url}>For more information check out the event website: {eventPage.url}</Link></Card.Footer>

    </Card>
  )
}

export default EventDetail