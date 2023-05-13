import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-white font-bold text-xl">User Info</h1>
                        </div>
                        <div className="flex items-center">
                            <Link to={'/'} className="bg-gray-900 text-white px-4 py-2 mr-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                All User
                            </Link>
                            <Link to={'/create-user'} className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                Create User
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;