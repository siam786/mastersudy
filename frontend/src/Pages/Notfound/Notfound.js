import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2 className="text-center text-primary py-5">404 Not found</h2>
            <Link to="/">
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;