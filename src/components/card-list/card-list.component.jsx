// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './cardList.style.css'
import { Form, Button } from "react-bootstrap";
import ItemModal from './ItemModal.jsx'
import { Modal } from 'react-bootstrap'


const CardList = ({movieList, dateFilter, isLoading, searchField, dateField}) => {
    // const { movieList, isLoading } = this.props
    const [res, setRest] = useState(movieList)
    const [reset, setReSet] = useState('')

    const testA = (dateField) => {
      return movieList.filter((movie) => { movie.release_date.slice(0, 4).includes(dateField); })
    };

    useEffect(() => {
      let result = movieList;
      // result = dateFilter;
      // result = movieList;
      console.log("dateField:::result",result);
      // result = movieList(result);
      // result = dateFilter(result);
      setRest(result);
    }, [movieList])

    useEffect(() => {
      if (dateField) {
        setRest(dateFilter);
      }
    }, [dateField])

    useEffect(() => {
      if (reset == true) {
        setRest(movieList)
      }
    }, [reset])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [modalInfo, setModal] = useState([])
    const getModal = (movie) => {
      console.log("Rrr",movie);
      setModal(movie)
      setShow(true);
    }

    return (
      <>
      <Button className="ms-4 mb-3" variant="dark" onClick={() =>
        setReSet(reset ? false : true)
      }>Clear Date Filter</Button>
      <div className="card-list">
          {!isLoading ? (
          res.map(movie => {
            const { id,title,
              video,
              backdrop_path,
              adult,original_language } = movie;
            return (
              <div key={id} className='card-container'>
                  <p>{title}</p>
                  <img alt={backdrop_path} className="imgDiv" onClick={() =>getModal(movie)}
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
                  <div className="desc">
                    <div><b>Vote Average : </b> {movie.vote_average}</div>
                    <div><b>Release date : </b>{movie.release_date}</div>
                    <div><b>Original Language : </b>{movie.original_language}</div>
                  </div>
                  <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>More Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="row">
                        <div className="col-6">
                          <p>{modalInfo.title}</p>
                          <img alt={modalInfo.backdrop_path} className="imgModal"
                            src={`https://image.tmdb.org/t/p/original/${modalInfo.backdrop_path}`} alt={modalInfo.title} />
                          </div>
                        <div className="col-6">
                          <div className="desc">
                            <div><b>Vote Average : </b> {modalInfo.vote_average}</div>
                            <div><b>Release date : </b>{modalInfo.release_date}</div>
                            <div><b>Popularity : </b>{modalInfo.popularity}</div>
                            <div><b>Vote average : </b>{modalInfo.vote_average}</div>
                            <div><b>Vote count : </b>{modalInfo.vote_count}</div>
                            <div><b>Overview : </b>{modalInfo.overview}</div>

                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    )
}

export default CardList;
