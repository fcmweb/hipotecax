import styles from '../styles/Simuladordehipoteca.module.css';
import PageLayout from '../../components/PageLayout';
import { useState } from 'react';
import { formateador } from '../Utils/formateador';
import { construyeFechas } from '../Utils/construyeFechas';
import FormSimulador from '../../components/FormSimulador';
import { CreaTabla } from '../../components/CreaTabla';

export default function Simuladordehipoteca() {
	const [monto, setMonto] = useState(0);
	const [interes, setInteres] = useState(0);
	const [plazo, setPlazo] = useState(0);
	const [cuotaMensual, setCuotaMensual] = useState(0);
	const [interesMensual, setInteresMensual] = useState(0);
	const [cuotaMensualIntInc, setCuotaMensualIntInc] = useState(0);
	const [cantidadTotalAPagar, setCantidadTotalAPagar] = useState(0);
	const [interesTotalAPagar, setInteresTotalAPagar] = useState(0);

	let deudaRest = parseInt(monto);

	const meses = construyeFechas(plazo);

	let cMensual, iMensual, cMIntInc, cTotalAPagar, interesTotal;

	const handleSubmit = (e) => {
		e.preventDefault();

		setMonto(monto);
		setInteres(interes);
		setPlazo(plazo);

		cMensual = (parseInt(monto) + parseFloat(interes)) / parseInt(plazo);
		setCuotaMensual(cMensual);

		iMensual = (monto * interes) / 100 / 12;
		setInteresMensual(iMensual);

		cMIntInc = cMensual + iMensual;
		setCuotaMensualIntInc(cMIntInc);

		cTotalAPagar = cMIntInc * plazo;
		setCantidadTotalAPagar(cTotalAPagar);

		interesTotal = cTotalAPagar - monto;
		setInteresTotalAPagar(interesTotal);
	};

	return (
		<>
			<PageLayout
				title='Simulador de hipoteca'
				description='Calcula tu hipoteca en un minuto, conoce el detalle de cuotas mes a mes'
			>
				<section className={styles.sectionsdh}>
					<h1>Calcula tu hipoteca</h1>
					<div className={styles.wrapperForm}>
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
								<div
									className={`${styles.rango} ${styles.rango1}`}
									id='cantidad'
								>
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
					</div>
				</section>
				<section className={styles.resumen}>
					<h2>Resumen de financiación</h2>
					<div className={styles.wrapper}>
						<div className={styles.resumenPrestamo}>
							<div id='prestamo'>
								{monto
									? `Préstamo  \n ${formateador(monto)} / ${plazo} Meses`
									: 'Préstamo'}
							</div>
							<div id='primeraCuota'>
								{cuotaMensual
									? `Primera Cuota sin TAE: \n ${formateador(cuotaMensual)}`
									: 'Primera Cuota sin TAE'}
							</div>
							<div id='interestae'>
								{interes ? `TAE: \n ${interes}%` : 'TAE'}
							</div>
							<div id='cuotaInteresInc'>
								{cuotaMensualIntInc
									? `Cuota mensual con intereses: \n ${formateador(
											cuotaMensualIntInc
									  )}`
									: 'Cuota mensual con intereses'}
							</div>
							<div id='interesTotal'>
								{interesTotalAPagar
									? `Total de intereses: \n ${formateador(interesTotalAPagar)}`
									: 'Total de intereses'}
							</div>
							<div id='deudaTotal'>
								{cantidadTotalAPagar
									? `Cantidad total a pagar: \n ${formateador(
											cantidadTotalAPagar
									  )}`
									: 'Cantidad total a pagar'}
							</div>
						</div>
					</div>
				</section>
				<div className={styles.wrapper}>
					<h2>Visualización de pagos mensuales</h2>
					<div className={styles.wrappertable}>
						<table className={styles.insTable} id='insTable'>
							<thead>
								<tr>
									<th>Mes</th>
									<th>Cuota Interés Inc</th>
									<th>Interés</th>
									<th>Cuota sin int</th>
									<th>Deuda Restante</th>
								</tr>
							</thead>
							{/* <tbody> */}
							{
								<CreaTabla
									meses={meses}
									data={{
										monto,
										interes,
										plazo,
										cuotaMensualIntInc,
										interesMensual,
										cuotaMensual,
									}}
								/>
							}
							{/* </tbody> */}
							<tfoot>
								<tr>
									<th colSpan={5}>Final de la deuda</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
