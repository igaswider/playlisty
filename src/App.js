import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MusicContainer from './components/MusicContainer'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songList: []
    }
  }
  componentWillMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/4341978/tracks?limit=6')
      .then(response => {
        this.setState({
          songList: response.data.data
        })
      })
      .catch(error => {
        console.log('error')
      })
  }

  handleSubmit(event, value) {
    this.setState({
      songList: [{
        artist: {name: 'Michał Zalewski'},
        title: value
      }]
    })
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="app">
          <Header />
          <SearchBar handleSubmit={(event, value) => this.handleSubmit(event, value)}/>
          <MusicContainer songList={this.state.songList}/>
        </div>
      </Provider>
    );
  }
}

export default App;
