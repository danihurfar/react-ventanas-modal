import React, {useState} from 'react';
import Modal from './componentes/Modal'
import './index.css';


const App = () => {
	const [estadoModalGoGreen, cambiarEstadoGoGreen] = useState(true);
	return (
		<div>
			<Modal 
			estadoGoGreen={estadoModalGoGreen}
			cambiarGoGreen={cambiarEstadoGoGreen}
			>	
			</Modal>

			<h1>Aquí va el formulario</h1>
		</div>
	);
}
 
export default App;