import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";

const EditUser = () => {
    const userInfo = useLoaderData();
    console.log(userInfo);

    const [isUpdate, setIsUpdate] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const nameInput = (e) => {
            setName(e.target.value);
    }
    const ageInput = (e) => {
        setAge(e.target.value);
    }
    const emailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsUpdate('');
        const makeData = {name, age, email};
        console.log('send data');
        // console.log(userInfo._id);
        fetch(`http://localhost:4000/user/${userInfo._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeData)
        })
            .then(res => res.json())
            .then(data => setIsUpdate(data.modifiedCount))
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12">
                {
                    isUpdate ? <><div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded" role="alert">
                        <p>{isUpdate} user updated</p>
                    </div></> : ''
                }

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={name}
                        onChange={nameInput}
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
                        onChange={ageInput}
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
                        onChange={emailInput}
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
        </div>
    );
};

export default EditUser;