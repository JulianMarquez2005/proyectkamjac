import React, { useState } from 'react';

function Delete({ onDataUpdate }) {
    const [Id_accesorio, setIdaccesorio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const accesorio = {
            Id_accesorio,
        };

        fetch('http://localhost/prueba/api.php?apicall=deleteusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accesorio),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al eliminar el accesorio');
                } else {
                    setMessage('Accesorio eliminado correctamente');
                    setIdaccesorio('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Delete-container">
            <h2>Eliminar material</h2>
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
                <button type="submit">Eliminar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Delete;