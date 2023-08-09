import React, { useState } from 'react';

function Actualizar({ onDataUpdate }) {
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
            tipo_de_accesorio,
        };

        fetch('http://localhost/prueba/api.php?apicall=updateusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accesorio),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al actualizar el accesorio');
                } else {
                    setMessage('Accesorio actualizado correctamente');
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
        <div className="Actualizar-container">
            <h2>Modificar accesorio</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="Id_accesorio">Id_accesorio:</label>
                    <input
                        type="text"
                        id="Id_accesorio"
                        value={Id_accesorio}
                        onChange={e => setIdaccesorio(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={e => setnombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="text"
                        id="precio"
                        value={precio}
                        onChange={e => setprecio(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tipo_de_accesorio">Tipo de accesorio:</label>
                    <input
                        type="text"
                        id="tipo_de_accesorio"
                        value={tipo_de_accesorio}
                        onChange={e => settipodeaccesrio(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Actualizar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Actualizar;