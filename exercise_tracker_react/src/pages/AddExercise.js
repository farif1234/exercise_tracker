import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


export default function AddExercise() {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExer = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            alert('Added exercise!')
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`)
        }
        history.push('/');
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                placeholder="Enter weight here"
                onChange={e => setWeight(e.target.value)} />
            {/* <input
                type="text"
                placeholder="Enter unit here"
                value={unit}
                onChange={e => setUnit(e.target.value)} /> */}
            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="">Select unit</option>
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
            </select>
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    )
}