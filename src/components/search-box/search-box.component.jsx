// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './seachBox.style.css'
import { Form } from "react-bootstrap";


const SearchBox = ({movieList, isLoading, onChangeHandler, handleChange}) => {
// const { movieList, isLoading } = this.props

  const [type, setType] = useState([]);
  let years = ['2020','2021','2022','2023','2024','2025','2026']

  return (
    <div className="App p-3">
      <input className="search-box col-6 App" type="search" placeholder="Search Movie"
        onChange={onChangeHandler}
      />
      {/*<Form.Group controlId="formBasicSelect">
        <Form.Control
          as="select"
          value={type}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setType(e.target.value);
          }}
        >
          <option disbled></option>
          {years.map(y => <option value={y} onChange={handleChange} >{y}</option>)}
        </Form.Control>
      </Form.Group>*/}
    </div>
  )
}

export default SearchBox;
