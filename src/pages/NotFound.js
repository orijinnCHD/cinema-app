import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>error 404</h2>
                <NavLink path="/">
                    <h3>Retour à l'acceuil</h3>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;