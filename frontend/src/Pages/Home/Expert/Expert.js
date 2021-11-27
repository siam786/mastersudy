import React from 'react';


const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="single-doctor col-md-4">
                   <img className="img-fluid" src={img} alt={name} />
            <div className="py-3">
            <h3>{name}</h3>
            <h5 className="text-dark fs-6">{expertize}</h5>
            </div>
                   
        </div>
    );
};

export default Expert;