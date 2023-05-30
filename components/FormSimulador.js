import { useState } from 'react';
import styles from '../src/styles/Simuladordehipoteca.module.css';

export default function FormSimulador({ handleSubmit }) {
	console.log(handleSubmit);
	const [monto, setMonto] = useState(0);
	const [interes, setInteres] = useState(0);
	const [plazo, setPlazo] = useState(0);
	return (
		<>
			<form className={styles.frm} onSubmit={handleSubmit}>
				<div>
					<label htmlFor='monto'>Cantidad</label>
					<br />
					<input
						className={styles.inpt}
						name='monto'
						min='0'
						max='106000'
						step='1000'
						type='range'
						id='monto'
						placeholder='Importe del préstamo'
						value={monto}
						onChange={(e) => setMonto(e.target.value)}
					/>
					<div className={`${styles.rango} ${styles.rango1}`} id='cantidad'>
						{monto}
					</div>
				</div>
				<div>
					<label htmlFor='interes'>TAE</label>
					<br />
					<input
						className={styles.inpt}
						name='interes'
						min='0.0'
						max='18.0'
						step='0.1'
						type='range'
						id='interes'
						placeholder='Interés del préstamo (% anual TAE)'
						value={interes}
						onChange={(e) => setInteres(e.target.value)}
					/>
					<div className={`${styles.rango} ${styles.rango2}`} id='tae'>
						{interes}
					</div>
				</div>
				<div>
					<label htmlFor='plazo'>Plazo/meses</label>
					<br />
					<input
						className={styles.inpt}
						name='plazo'
						min='12'
						max='480'
						step='12'
						type='range'
						id='plazo'
						placeholder='Tiempo de amortización (en meses)'
						value={plazo}
						onChange={(e) => setPlazo(e.target.value)}
					/>
					<div className={`${styles.rango} ${styles.rango3}`} id='meses'>
						{plazo}
					</div>
				</div>

				<button className={styles.btn} id='calcular' type='submit'>
					Calcular
				</button>
			</form>
		</>
	);
}
