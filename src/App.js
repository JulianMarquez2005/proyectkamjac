import React, { useState } from 'react';
import Consultar from './componentes/Consultar';
import Ingresar from './componentes/Ingresar';
import Actualizar from './componentes/Actualizar';
import Delete from './componentes/Delete';
function App() {
    const [dataUpdated, setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                
                <p>
                    Editar el archivo <code>src/App.js</code> y guardar para recargar.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <h1>Ejemplo con React</h1>
            <div>
                <Ingresar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Consultar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Actualizar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Delete onDataUpdate={handleDataUpdate} />
            </div>
        </div>
    );
}

export default App;