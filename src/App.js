import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz.js'

let quizData = require('./quiz_data.json');
console.log(quizData["quiz_questions"][0]["instruction_text"]);

class App extends Component {
  render() {
    return (
      <Quiz />
    )
  }
}

export default App