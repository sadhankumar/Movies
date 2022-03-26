import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import axios from "axios";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import YearPicker from "react-year-picker";
import ItemModal from './components/card-list/ItemModal.jsx'


class App extends React.Component {
  state = {
    users: [],
    movies:[],
    isLoading: true,
    searchField:'',
    dateField: '',
    errors: null
  };

  // getUsers() {
  //     axios
  //     .get("https://movie-task.vercel.app/api/popular?page=1")
  //     .then(response =>
  //           this.setState({users: response.data})
  //     )
  //     .then(users => {
  //       this.setState({
  //         users,
  //         isLoading: false
  //       });
  //     })
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }

  componentDidMount() {
    fetch("https://movie-task.vercel.app/api/popular")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              users: json.data.results,
              isLoading: false
          });
      })
    }

  // const [res, setRest] = useState([])
  // handleChange(date) {
  //   console.log("date",date)
  //   // this.setState({dateFilter:date})
  // }

  render() {
    const { isLoading, users } = this.state;

    // const resu = this.state.users.data.results ? this.state.users.data.results : null ;
    // let res = []
    // if (Object.keys(this.state.users).length === 1 && this.state.users.constructor === Object) {
    //   res = this.state.users.data.results
    //   // this.setState({movies: this.state.users.data.results})
    //   // res = setRest(this.state.users.data.results)
    //   console.log("res",res);
    //   // console.log("res",movie);
    // }

    let dataSource = this.state.users.map(item => ({...item, showModal:false}));
    // dataSource.secondName= 'Fogerty'
    // console.log(this.state.users.map(item => ({...item, secondName:'item[1]'})));
    // console.log(dataSource.map(item => ({...item, secondName:'item[1]'})));

    const filterMovieName = dataSource.filter((movie) => {
        return movie.title.toLocaleLowerCase().includes(this.state.searchField);
    });

    const dateFilter = filterMovieName.filter((movie) => {
      return movie.release_date.slice(0, 4).includes(this.state.dateField);
    });

    const onSearchChange = (e) => {
      const searchField = e.target.value.toLocaleLowerCase();
      this.setState(() => {return {searchField}})
    }

    let handleChange = (date) => {
      console.log("date",date)
      // filterMovieName = filterMovieName.filter((movie) => {
      //   return movie.release_date.slice(0, 4).includes(date);
      // });
      this.setState({dateField:date})
      // console.log("aa",aa)
      // filterMovieName = aa
    }

    return (
      <React.Fragment>
        <h2 className="App p-3">Movies /-bip.so-/</h2>
        <div>
          <div>
            <SearchBox
              className='m-searchBox'
              onChangeHandler={onSearchChange}
              handleChange={handleChange}
              />
            <YearPicker className="date-own form-control" onChange={handleChange} />
          </div>
          <CardList
            movieList={filterMovieName}
            dateFilter={dateFilter}
            isLoading={isLoading}
            searchField={this.state.searchField}
            dateField={this.state.dateField}
            />
          <ItemModal/>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
