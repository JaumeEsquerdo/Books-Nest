const BookCard = ({ book, handleAddBook }) => {

    const handleClick = () => {
        handleAddBook(book)
        console.log(`${book.title} a la lista de libros.`)
    };

    const openLightbox = (event) => {
            const lightbox = event.currentTarget.closest(".BookCard").nextElementSibling;
            //nextElementSibling selecciona el Lightbox que está justo después de .BookCard (el div de Lightbox)
            if(lightbox){
                lightbox.classList.add("open");
                document.body.classList.add("no-scroll");
            }
        
    };

    const closeLightbox = (event) => {
        const lightbox = event.currentTarget.closest(".Lightbox"); 
        if (lightbox) {
            lightbox.classList.remove("open");
            document.body.classList.remove("no-scroll");
        }
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
            <div className="Lightbox">
                <span onClick={closeLightbox}>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                <img src={book.image} alt={book.title} className="Lightbox-img" />
                <p>{book.title}</p>
            </div>
        </>
    );
};

export default BookCard;