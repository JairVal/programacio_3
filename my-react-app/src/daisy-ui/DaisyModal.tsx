// components/DaisyModal.tsx
import React from 'react';

export const DaisyModal: React.FC = () => {
    return (
        <>
            <button className="btn btn-accent" onClick={() => document.getElementById('my_modal')?.showModal()}>
                Abrir Modal
            </button>

            <dialog id="my_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hola!</h3>
                    <p className="py-4">Este es un modal DaisyUI funcional.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};