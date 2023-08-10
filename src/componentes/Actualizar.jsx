import React, { useState } from 'react';

function Actualizar({ onDataUpdate }) {
    const [Id_mueble, setId_mueble] = useState('');
    const [nombre, setnombre] = useState('');
    const [idcategoria, setidcategoria] = useState('');
    const [medidas, setmedidas] = useState('');
    const [color, setcolor] = useState('');
    const [precio, setprecio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            Id_mueble,
            nombre,
            idcategoria,
            medidas,
            color,
            precio,
        };

        fetch('https://heraclean-stresses.000webhostapp.com/kamjac/api.php?apicall=updateusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al actualizar el mueble');
                } else {
                    setMessage('Mueble actualizado correctamente');
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
        <div className="ingresar-container">
            <h2>Actualizar Mueble</h2>
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
                <div>
                    <label htmlFor="nombre">nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={e => setnombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="idcategoria">idcategoria:</label>
                    <input
                        type="text"
                        id="idcategoria"
                        value={idcategoria}
                        onChange={e => setidcategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="medidas">medidas:</label>
                    <input
                        type="text"
                        id="medidas"
                        value={medidas}
                        onChange={e => setmedidas(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="color">color:</label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={e => setcolor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precio">precio:</label>
                    <input
                        type="text"
                        id="precio"
                        value={precio}
                        onChange={e => setprecio(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Actualizar Mueble</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Actualizar;