import { useState } from 'react';

const BookCard = ({ book, handleAddBook }) => {
    const [isOpen, setIsOpen] = useState(false); // estado de lightbox

    const handleClick = () => {
        handleAddBook(book)
        console.log(`${book.title} a la lista de libros.`)
    };

    const openLightbox = () => {
        setIsOpen(true);
        document.body.classList.add("no-scroll"); //evitar scroll con el lightbox
    };

    const closeLightbox = () => {
        setIsOpen(false);
        document.body.classList.remove("no-scroll");
    };

    return (
        <>
            <div className="BookCard">
                <div className="BookCard-imgContainer" onClick={openLightbox}>
                    <img src={book.image} alt={book.title} className="BookCard-img" />

                    <p>{book.title}</p>
                </div>

                <button onClick={handleClick}>
                    Añadir a la lista de libros.
                </button>


            </div>
            {/* Lightbox controlado con el estado */}
            {/* mejor rodearlo todo con el condicional para que apareza o desaparezca todo */}
            {isOpen && (
                <div className="Lightbox open">
                    <span onClick={closeLightbox}>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                    <img src={book.image} alt={book.title} className="Lightbox-img" />
                    <p>{book.title}</p>
                </div>
            )}
            {/* utilizar () para agrupar bloque múltiples de líneas */}
            {/* el operador de propagación {...} espera un objeto y no un bloque JSX */}

        </>
    );
};

export default BookCard;