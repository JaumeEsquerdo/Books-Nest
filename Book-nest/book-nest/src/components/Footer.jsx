const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <p>© 2025 BookNest. Todos los derechos reservados.</p>
                <nav className="Nav">
                    <ul>
                    <li><a href="/books">Explora</a></li>
                    <li><a href="/MyBooks">Mis libros</a></li>
                    <li><a href="/users">Registro</a></li>
                    </ul>
                </nav>
                <div>
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Política de privacidad</a>
                </div>
            </footer>       
            </>
    );
}

export default Footer;