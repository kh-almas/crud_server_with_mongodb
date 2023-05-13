import React, {useEffect, useState} from 'react';

const ShowUser = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 25, gmail: 'johndoe@gmail.com' },
        { id: 2, name: 'Jane Smith', age: 30, gmail: 'janesmith@gmail.com' },
        { id: 3, name: 'Bob Johnson', age: 40, gmail: 'bobjohnson@gmail.com' },
    ];

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/all-users')
            .then(res =>  res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div className="flex flex-col">
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
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded">
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

export default ShowUser;