import React from 'react';

export const BootstraComponent: React.FC = () => {
    return <>
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
        <h6  className= "card-subtitle mb-2 text-muted">Subtítulo de la tarjeta</h6>
        <p className="card-text">Descripción corta dentro de la tarjeta.</p>
        <a href="#" className="card-link">card-link</a>    
        <a href="#" className="card-link">Otra card-link</a>
    </div>
    </div>
    </>
};