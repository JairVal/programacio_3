// BootstrapButton.tsx
import React from 'react';

export const BootstrapButton: React.FC = () => {
    return (
        <>
            <button className="btn btn-primary">Click Bootstrap</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-light">Light</button>
            <button className="btn btn-dark">Dark</button>
            <button className="btn btn-muted">Muted</button>
            <button className="btn btn-white">White</button>
        </>
    );
};