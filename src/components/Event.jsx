import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Event({event}) {
  return (
    <div>
      <Card style={{width: '18rem', alignItems:"center"}} className="event-card">
       <Link to = {`/events/${event.id}`} className="m=1">
       <div className='singleEventPhoto'>
        <Card.Img
          src={event.photo}
          alt='event-photo'
          variant='top'
          className='object-fit-cover'
          id="eventPhotoImg"
          style={{
            width: '95%',
            height: '250px',
            
          }}
          />

       </div>
       </Link>
       <Card.Body className='card-body' >
        <Card.Title as="h2">{event.name}</Card.Title>
        <Card.Text as="p">When: {event.time}</Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>{event.location}</Card.Subtitle>
        <Link to={`/events/${event.id}`}>Learn more about this event here</Link>
       </Card.Body>
    
      </Card>
    </div>
  )
}

export default Event