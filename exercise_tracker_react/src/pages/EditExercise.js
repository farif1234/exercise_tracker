import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function EditExercise({ exerciseToEdit }) {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExer = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            alert('Edited exercise!')
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`)
        }
        history.push('/');
    }

    return (
        <div>
            <h1>Edit Movie</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            {/* <input
                type="text"
                placeholder="Enter unit here"
                value={unit}
                onChange={e => setUnit(e.target.value)} /> */}
            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
            </select>
            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editExercise}
            >Save</button>
        </div>
    )
}