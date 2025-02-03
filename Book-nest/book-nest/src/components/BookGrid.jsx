import BookCard from "./BookCard";


let myBooks = [];

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
        { id: 10, title: "La casa de los espíritus", image: "https://m.media-amazon.com/images/I/81y20kvHiWS._AC_UF894,1000_QL80_.jpg"},
    ];

    let searchQuery = "";

    const handleSearch = (event) => { 
        searchQuery = event.target.value.toLowerCase().trim();
    };

    const filteredBooks = booksData.filter((book) => {
        return book.title.toLowerCase().includes(searchQuery);
    });


    // funcion para agregar un libro a la lista mis libros
    const handleAddBook = (book) => {
        myBooks.push(book);
        console.log(myBooks);
    };

    return (

        <div className="BookGrid">
            <h2 className="BookGrid-title">Libros por explorar</h2>
            

            {/* input de search */}
            <input type="text" placeholder="Busca un libro..." onInput={handleSearch}/>
            {/* onInput actualiza el valor de la búsqueda con cada entrada */}




            <div className="BookGrid-grid" >
                {filteredBooks.map((book) => (
                    //book es cada objeto de la lista de libros de booksData
                    <BookCard key={book.id} book={book} handleAddBook={handleAddBook} />
                ))}
            </div>
        </div>
    );
}

export default BookGrid;