import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const AllUser = () => {
    const [user, setUser] = useState([]);
    const [isDeleted, setIsDeleted] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/all-users')
            .then(res =>  res.json())
            .then(data => setUser(data))
    }, [])

    const deleteUser = (id) => {
        console.log(id);
        fetch(`http://localhost:4000/user/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0){
                    const finalResult = user.filter(item => item._id !== id)
                    setUser(finalResult);
                    setIsDeleted(data.deletedCount);
                }
            })
    }

    return (
        <div className="flex flex-col">
            {
                isDeleted ? <><div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded" role="alert">
                    <p>{isDeleted} items deleted</p>
                </div></> : ''
            }
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mx-12">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Age
                                </th>
                                <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Gmail
                                </th>
                                <th className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-center">
                            {user?.map((info) => (
                                <tr key={info._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{info._id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{info.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{info.age}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{info.gmail}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`/update-user/${info._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                            Edit
                                        </Link>
                                        <button onClick={() => deleteUser(info._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;