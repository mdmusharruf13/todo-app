import React, { useState } from 'react';
import './Home.css';


function Home() {

    const [data, setData] = useState([]);
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            text: task,
            id: task + (data.length + 1),
            done: false,
        };
        setData([...data, newTask]);
        setTask("");
    }

    const handleDone = (id) => {
        const newData = data.map(item => {
            return item.id === id ? { ...item, done: true } : item;
        })
        setData(newData);
    }
    const handleRemove = (id) => {
        const newData = data.filter((item) => item.id !== id)
        setData(newData);
    }
    return (
        <div className='home-container'>
            <div className='todo-form'>
                <h1>MY TASK</h1>
                <form className='form-input' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        required
                        className='todo-input-name'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <input
                        type="submit"
                        value={"submit"}
                        className='todo-input-button'
                    />
                </form>
            </div>
            <div className='todo-items'>
                <div className='list'>
                    <div className='item-heading'>
                        <p>{data.length} task left</p>
                        <button onClick={() => setData([])}>Clear all task</button>
                    </div>
                    <ul className='item-list'>
                        {data.map(item => (
                            <li key={item.id} className='list-single-item'>
                                <span className={item.done ? 'item-text-hide' : 'item-text-show'}>
                                    {item.text}
                                </span>
                                <span>
                                    <button onClick={() => handleDone(item.id)}>done</button>
                                    <button onClick={() => handleRemove(item.id)}>remove</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home