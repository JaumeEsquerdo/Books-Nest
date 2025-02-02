import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        
        <Header/>
        <main className="Home">
            <h1 className="Home-title">Encuentra tu próximo libro favorito</h1>

            <div>
                <input type="search" placeholder="Buscar libros" className="Home-search" />

                <button className="Home-button">Explorar libros</button>

            </div>
        </main>
        <Footer/>
        </>
    );
}

export default Home;