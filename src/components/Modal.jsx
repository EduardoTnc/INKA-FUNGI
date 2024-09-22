import React, { useEffect } from 'react';

export default function Modal({ open, onClose, children }) {
  // Manejador para cerrar la modal con la tecla Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null; // No renderizar nada si la modal no está abierta

  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 z-10 flex justify-center items-center transition-all ${
        open ? "visible bg-black/50" : "invisible"
      }`}
    >
      {/* Contenido de la Modal */}
      <div
        onClick={(e) => e.stopPropagation()} // Evitar que el clic en el contenido cierre la modal
        className={`bg-white rounded-xl m-4 sm:m-8 shadow-lg p-6 transform transition-transform duration-300 ${
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Botón de Cierre */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 size-9 rounded-full text-gray-200 p-1 bg-black hover:text-white text-lg transition-colors duration-300"
          aria-label="Cerrar Modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

