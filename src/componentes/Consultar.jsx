import React, { useState } from 'react';

function Consultar({ onDataUpdate }) {
    const [Id_accesorio, setIdaccesorio] = useState('');
    const [nombre, setnombre] = useState('');
    const [precio, setprecio] = useState('');
    const [tipo_de_accesorio, settipodeaccesrio] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const accesorio = {
            Id_accesorio,
            nombre,
            precio,
            tipo_de_accesorio
        };

        fetch('http://localhost/prueba/api.php?apicall=readusuario', {
            method: 'GET',
            body: JSON.stringify(accesorio),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al mostrar el accesorio');
                } else {
                    setMessage('Acción ejecutada correctamente');
                    setIdaccesorio('');
                    setnombre('');
                    setprecio('');
                    settipodeaccesrio('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Read-container">
            <h2>Consultar material</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Id_accesorio">Id_accesorio:</label>
                    <label htmlFor="nombre">Nombre:</label>
                    <label htmlFor="precio">Precio:</label>
                    <label htmlFor="tipo_de_accesorio">tipo_de_accesorio:</label>
                </div>
                <button type="submit">Consultar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Consultar;
