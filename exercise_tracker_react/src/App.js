import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercise from './pages/AddExercise';
import EditExercise from './pages/EditExercise';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFitnessCenter } from "react-icons/md";


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Exercise Tracker <MdFitnessCenter /></h1>
          <p>Add your workouts to the tracker! Or edit/delete any existing exercises.</p>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/add-exercise">Add an exercise</Link>
        </header>
        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercise />
          </Route>
          <Route path="/edit-exercise">
            <EditExercise exerciseToEdit={exerciseToEdit} />
          </Route>
        </main>
        <footer>
          <p>© 2022 Faihaan Arif</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
