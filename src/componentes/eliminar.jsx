import React, { useState } from 'react';

function Delete({ onDataUpdate }) {
    const [Id_mueble, setId_mueble] = useState('');
    const [nombre, setnombre] = useState('');
    const [idcategoria, setidcategoria] = useState('');
    const [medidas, setmedidas] = useState('');
    const [color, setcolor] = useState('');
    const [precio, setprecio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const mueble = {
            Id_mueble,
            nombre,
            idcategoria,
            medidas,
            color,
            precio,
        };

        fetch('https://heraclean-stresses.000webhostapp.com/kamjac/api.php?apicall=deleteusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mueble),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al eliminar el mueble');
                } else {
                    setMessage('Mueble eliminado correctamente');
                    setId_mueble('');
                    setnombre('');
                    setidcategoria('');
                    setmedidas('');
                    setcolor('');
                    setprecio('');
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
            <h2>Eliminar mueble</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Id_mueble">Id_mueble:</label>
                    <input
                        type="text"
                        id="Id_mueble"
                        value={Id_mueble}
                        onChange={e => setId_mueble(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Eliminar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Delete;