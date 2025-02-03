const BookCard = ({ book, handleAddBook }) => {

    const handleClick = () => {
        handleAddBook(book)
        alert(`${book.title} a la lista de libros.`)
    };




    return (
        <div className="BookCard">
            <div className="BookCard-imgContainer">
                <img src={book.image} alt={book.title} className="BookCard-img" />
            </div>

            <button onClick={handleClick}>
                Añadir a la lista de libros.
            </button>

            <p>{book.title}</p>
        </div>
    );
};

export default BookCard;