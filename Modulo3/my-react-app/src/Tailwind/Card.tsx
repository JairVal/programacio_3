// Card.tsx
import React from 'react';

export const Card: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
            <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgK5fiI5WR2EvMqtjHo5QprBGVO1aJ817jQ&s" alt="Imagen" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Título de la tarjeta</div>
                <p className="text-gray-700 text-base">
                    Esta es una descripción breve dentro de una tarjeta estilizada con Tailwind.
                </p>
            </div>
        </div>
    );
};