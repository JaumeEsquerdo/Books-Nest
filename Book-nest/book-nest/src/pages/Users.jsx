const Users = () => {
    return (
        <main className="Main">
            <h2>Registrarse en Book Nest</h2>
            <form action="">
                <label >

                    <input className='BookGrid-input' type="text" name="name" id="name" placeholder="Nombre" required />
                </label>
                <label >

                    <input className='BookGrid-input' type="email" name="email" id="email" placeholder="Correo electrónico" required />
                </label>
                <label >

                    <input className='BookGrid-input' type="password" name="password" id="pasword" placeholder="Contraseña" required />
                </label>

                <button type="submit">Registrarse</button>


            </form>

        </main>
    );
}

export default Users;