import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Event from './Event'
import axios from 'axios'

const API = 'Production' ? "https://nycevents-backend.onrender.com" : import.meta.env.VITE_API

function Events() {

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);
  const [pageNumberLimit] = useState(20);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(20);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


  useEffect(() => {
 axios.get(`${API}/events`).then(({data}) => {
    console.log(data)
    setEvents(data.payload)
    
 }).catch(e => console.warn({catch: e}))
  }, [])

    const indexOfLastPost = currentPage * eventsPerPage;
    const indexOfFirstPost = indexOfLastPost - eventsPerPage;
    const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

    const pages = []

    for(let i = 1; i <Math.ceil(events.length/eventsPerPage); i++){
       pages.push(i)
       console.log(pages)
    }

    const handleClick = (event) => {
      setCurrentPage(Number(event.target.id))
    }

    const renderPageNumber = pages.map((number) => {
      return(
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
      )
      
    })
  
    const handleNextButton = () => {
      setCurrentPage(currentPage + 1)

      if(currentPage + 1 > maxPageNumberLimit){
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
      }
    }

    const handlePrevButton = () => {
      setCurrentPage(currentPage - 1)

      if((currentPage - 1) % pageNumberLimit === 0){
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
      }
    }

    let pageIncrementBtn = null;
    if(events.length > maxPageNumberLimit){
      pageIncrementBtn = <li onClick={handleNextButton}> &hellip; </li>
    }
    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
      pageIncrementBtn = <li onClick={handlePrevButton}> &hellip; </li>
    }
  

    return (
    <div className='events'>
       <h1>Whats Happening in the city</h1>
    <Row style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: "20px"}}>
     {currentPosts.map((event) => (
      <Col sm={12} md={6} lg={4} xl={3} key={event.id}>
         <Event event={event}/>
        </Col>
      ))}
      </Row>
        {/* <Event event={currentPosts}/> */}
       <div className="pageNumbers-container">
                <ul className="pageNumbers">
                    <li>
                        <button
                            onClick={handlePrevButton}
                            disabled={currentPage === pages[0] ? true : false}
                            className="help-button"
                        >
                            Prev
                        </button>
                    </li>
                    {pageDecrementBtn}
                    {renderPageNumber}
                    {pageIncrementBtn}
                    <li>
                        <button
                            onClick={handleNextButton}
                            disabled={
                                currentPage === pages[pages.length - 1]
                                    ? true
                                    : false
                            }
                            className="help-button"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div> 
    </div>
  )
}

export default Events