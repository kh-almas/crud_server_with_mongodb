import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, age, email });
        // You can perform additional actions here, like submitting the form data to a server
    };

      useEffect( () => {
          fetch('http://localhost:4000/')
              .then(res => res.json())
              .then(data => setUser(data))
      }, [])

  return (
    <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                    Age
                </label>
                <input
                    type="number"
                    id="age"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
        <h1>Total person: {user.length}</h1>
        {
            user.map(data => <p key={data.id}>{data.name}</p>)
        }
    </>
  )
}

export default App
