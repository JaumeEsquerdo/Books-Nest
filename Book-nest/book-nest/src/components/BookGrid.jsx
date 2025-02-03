import BookCard from "./BookCard";

let myBooks = []; // Array para guardar los libros que el usuario añade a su lista

const BookGrid = () => {
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

    let searchQuery = ""; // Variable para guardar la búsqueda del usuario
    let filteredBooks = booksData; // Inicialmente muestra todos los libros

    const handleSearch = (event) => {
        searchQuery = event.target.value.toLowerCase().trim(); // Guarda el valor del input en searchQuery
    };
    
    const handleSearchSubmit = (event) => { // Función para buscar libros
        event.preventDefault(); // Evita que la página se recargue al hacer submit
        filteredBooks = booksData.filter((book) => { // Filtra los libros que contienen la búsqueda del usuario
            return book.title.toLowerCase().includes(searchQuery);
        });
        renderFilteredBooks(); // Llama a la función para mostrar los libros filtrados
    };

    const renderFilteredBooks = () => {
        const bookGrid = document.querySelector(".BookGrid-grid");
        bookGrid.innerHTML = ""; // Limpiar los libros anteriores
    
        filteredBooks.forEach((book) => {
            // Crear el div de la tarjeta de libro
            const bookCard = document.createElement("div");
            bookCard.className = "BookCard";
    
            // Crear imagen y título
            const bookImg = document.createElement("img");
            bookImg.className = "BookCard-img";
            bookImg.src = book.image;
            bookImg.alt = book.title;
    
            const bookTitle = document.createElement("p");
            bookTitle.textContent = book.title;
    
            // Crear el botón "Añadir a la lista de libros"
            const addButton = document.createElement("button");
            addButton.textContent = "Añadir a la lista de libros";
    
            // Añadir el evento al botón
            addButton.addEventListener("click", () => {
                handleAddBook(book); // Llamar a handleAddBook cuando se haga clic
                console.log(`${book.title} añadido a la lista de libros.`);
            });
    
            // Añadir los elementos creados a la tarjeta
            bookCard.appendChild(bookImg);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(addButton);
    
            // Añadir la tarjeta al grid de libros
            bookGrid.appendChild(bookCard);
        });
    };

    // Función para agregar un libro a la lista de mis libros
    const handleAddBook = (book) => {
        myBooks.push(book);
        console.log(myBooks);
    };

    return (
        <>
            <div className="BookGrid">
                <h2 className="BookGrid-title">Libros por explorar</h2>

                <form action="" onSubmit={handleSearchSubmit}>
                    {/* input de búsqueda */}
                    <input type="text" placeholder="Busca un libro..." onInput={handleSearch} />
                    {/* onInput actualiza el valor de la búsqueda con cada entrada */}
                    <button type="submit">Buscar</button>
                </form>

                <div className="BookGrid-grid">
                    {searchQuery && filteredBooks.length === 0 ? (
                        <p>No se han encontrado libros</p>
                    ) : (
                        filteredBooks.map((book) => (
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
