import React, { useState } from 'react';
import Ingresar from './componentes/Consultar';
import Actualizar from './componentes/actualiza';
import Eliminar from './componentes/eliminar';
import Consultar from './componentes/Ingresa';


function App() {
	const [dataUpdate, setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };
    return (
        <div className="App">
            <header className="App-header">
            </header>

            <div>
                <Consultar DataUpdate={dataUpdate}/>
            </div>
            <div>
                <Ingresar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Actualizar onDataUpdate={handleDataUpdate}/>
            </div>
            <div>
                <Eliminar onDataUpdate={handleDataUpdate}/>
            </div>
        </div>	
    );
}
export default App;