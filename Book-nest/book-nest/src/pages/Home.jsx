
const Home = () => {
    return (
        <>
        <main className="Home">
            <h1 className="Home-title">Encuentra tu próximo libro favorito</h1>

            <div>
                <input type="search" placeholder="Buscar libros" className='BookGrid-input' />

                <button className="Home-button">Explorar libros</button>

            </div>
        </main>
        </>
    );
}

export default Home;