import { useState } from 'react';


import BookCard from "./BookCard";

const BookGrid = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [myBooks, setMyBooks] = useState([]);



    const booksData = [
        { id: 1, title: "El principito", image: "https://m.media-amazon.com/images/I/51o0Vtg6oHL._AC_UF1000,1000_QL80_.jpg" },
        { id: 2, title: "Cien años de soledad", image: "https://m.media-amazon.com/images/I/81rEWmLXliL.jpg" },
        { id: 3, title: "1984", image: "https://m.media-amazon.com/images/I/71sOSrd+JxL.jpg" },
        { id: 4, title: "Matar a un ruiseñor", image: "https://m.media-amazon.com/images/I/71ScCUdhhQL._AC_UF894,1000_QL80_.jpg" },
        { id: 5, title: "Don Quijote de la Mancha", image: "https://m.media-amazon.com/images/I/71kdJikvR4L._AC_UF1000,1000_QL80_.jpg" },
        { id: 6, title: "La sombra del viento", image: "https://m.media-amazon.com/images/I/71BS32NFrsL.jpg" },
        { id: 7, title: "Orgullo y prejuicio", image: "https://m.media-amazon.com/images/I/61wAZk6G8mL._AC_UF894,1000_QL80_.jpg" },
        { id: 8, title: "Harry Potter y la piedra filosofal", image: "https://www.lamarmota.es/wp-content/uploads/IMG_6005-2-scaled.jpg" },
        { id: 9, title: "El gran Gatsby", image: "https://m.media-amazon.com/images/I/61hAvhdPV2S._AC_UF894,1000_QL80_.jpg" },
        { id: 10, title: "La casa de los espíritus", image: "https://m.media-amazon.com/images/I/81y20kvHiWS._AC_UF894,1000_QL80_.jpg" },
    ];

    //filtrar libros para mostrar los libros cuyo titulo coincida con la busqueda del usuario del searchQuery
    const filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));

    //actualizar la búsqueda
    const handleSearch = (event) => {
        setSearchQuery(event.target.value); // Guarda el valor del input en searchQuery (el useState)
    };

    const handleAddBook = (book) => {
        // si some devuelve true(el libro esta en la lista, el if pasa a ser false por el !; y al reves, si el libro no esta en la lista(pasa de false a true para que se ejecute))
        if (!myBooks.some(b => b.id === book.id)) {
            setMyBooks([...myBooks, book]);
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); //ppara que la pagina no se recargue
    }

    //onChange es mejor que onInput porque onInput puede actualizar demasiado rapido en el input (puede hacer re-renderizaciones innecesarias)
    return (
        <>
            <div className="BookGrid">
                <h2 className="BookGrid-title">Libros por explorar</h2>

                <form onSubmit={handleSearchSubmit}>
                    {/* input de búsqueda */}
                    <input type="text" placeholder="Busca un libro..." onChange={handleSearch} />
                    {/* onInput actualiza el valor de la búsqueda con cada entrada */}
                    <button type="submit">Buscar</button>
                </form>

                <div className="BookGrid-grid">
                    {filteredBooks.length === 0 ?
                        (<p>No se han encontrado libros</p>)
                        :
                        (filteredBooks.map((book) => (
                            <BookCard key={book.id} book={book} handleAddBook={handleAddBook} />
                        ))
                        )}
                </div>
            </div>

            <div className="Mybooks">
                <h3>Mis libros</h3>
                <ul>
                    {myBooks.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BookGrid;
