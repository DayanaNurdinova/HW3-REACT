import {useState} from 'react'

function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleClick = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task])
            setTask('');
        }
    }


    return (
        <div className="App">
            <h1>Таски</h1>
            <div className="container">
                <input
                    type="text"
                    placeholder="Введи таск"
                    value={task}
                    onClick={handleChange}

                />
                <button onClick={handleClick}>Добавить таск</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )


}

export default App