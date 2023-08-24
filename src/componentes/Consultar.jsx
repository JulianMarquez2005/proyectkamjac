import React, { useEffect, useState } from 'react';

function Consultar({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('https://alejo1016.000webhostapp.com/api.php?apicall=RMueble')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Elementos de la tabla Mueble:</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <li key={item.Id_mueble}>
                            <p>Id_mueble: {item.Id_mueble}</p>
                            <p>nombre: {item.nombre}</p>
                            <p>idcategoria: {item.idcategoria}</p>
                            <p>medidas: {item.medidas}</p>
                            <p>color: {item.color}</p>
                            <p>precio: {item.precio}</p>




                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );



}

export default Consultar;