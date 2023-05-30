//Troxos de código para analizar, cambiar y reutilizar

/* 
if (typeof window !== "undefined") {
    ...procesa este código...
} 
*/

/* 
<CreaTabla props={[monto, interes, plazo, cuotaMensual, cuotaMensualIntInc, interesTotalAPagar, cantidadTotalAPagar]} />  
*/

//forma simple
{
	meses.length > 0 &&
		meses.map((mes, i) => (
			<tr key={i}>
				<th>{mes}</th>
				<td>{formateador(cuotaMensualIntInc)}</td>
				<td>{formateador(interesMensual)}</td>
				<td>{formateador(cuotaMensual)}</td>
				<td>{formateador(deudaRestante)}</td>
			</tr>
		));
}
//forma compleja
{
	meses.length > 0 &&
		meses.map(
			(mes, i) => (
				<tr key={i}>
					<th>{mes}</th>
					<td>{formateador(cuotaMensualIntInc)}</td>
					<td>
						{
							(count = 1
								? formateador(interesMensual)
								: formateador(
										(iMensual = (deudaRestante * interes) / 100 / 12)
								  ))
						}
					</td>
					<td>
						{
							(count = 1
								? formateador(cuotaMensual)
								: formateador((cMensual = cMIntInc - iMensual)))
						}
					</td>
					<td>
						{
							(count = 1
								? `${console.log(count)} ${formateador(deudaRestante)}`
								: formateador((deudaRestante = deudaRestante - cMensual)))
						}
					</td>
				</tr>
			),
			[console.log(count)]
		);
}

/// codigo js crea tabla

import { formateador } from '../Utils/formateador';
import { construyeFechas } from '../Utils/construyeFechas';

export function CreaTabla({ props }) {
	if (document.querySelector('tbody') && document.querySelector('tfoot')) {
		document.querySelector('tbody').remove();
		document.querySelector('tfoot').remove();
	}

	//Tabla con detalle de pagos mes a mes
	let table = document.getElementById('insTable');
	let bodyT = document.createElement('tbody');
	let tfoot = document.createElement('tfoot');

	let deudaRestante = monto;
	let agno = 0;
	let lgth = construyeFechas(plazo).length;
	construyeFechas(plazo).forEach((e, i) => {
		deudaRestante = deudaRestante - (monto + interes) / plazo;

		let tr = document.createElement('tr');

		let th = document.createElement('th');
		th.innerText = e;
		tr.appendChild(th);

		if (e.substring(0, 2) === '1/') {
			agno++;
			let tr = document.createElement('tr');
			let th = document.createElement('th');
			th.colSpan = '5';
			th.classList.add('td-anual');
			th.textContent = `Finalizado año ${agno}`;
			tr.appendChild(th);
			bodyT.appendChild(tr);
		}

		let td1 = document.createElement('td');
		td1.innerText = formatearCifra(cuotaMensualIntInc);
		tr.appendChild(td1);

		let td2 = document.createElement('td');
		td2.innerText = formatearCifra(interesMensual);
		tr.appendChild(td2);

		let td3 = document.createElement('td');
		td3.innerText = formatearCifra(cuotaMensual);
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.innerText = formatearCifra(deudaRestante);
		tr.appendChild(td4);

		interesMensual = (deudaRestante * interes) / 100 / 12;
		cuotaMensual = cuotaMensualIntInc - interesMensual;

		bodyT.appendChild(tr);
		console.log(bodyT);
	});

	table.appendChild(bodyT);

	let trf = document.createElement('tr');
	let thf = document.createElement('th');
	thf.innerText = 'Final de la deuda';
	thf.colSpan = '5';
	thf.classList.add('thfoot');
	trf.appendChild(thf);
	tfoot.appendChild(trf);
	table.appendChild(tfoot);
}

//trozo de código para procesar datos y llenar tabla con detalle de cuota mensual en pág SDH'map()'
meses.length > 0 &&
	meses.map((mes, i) => {
		deudaRest =
			deudaRest - (parseInt(monto) + parseFloat(interes)) / parseInt(plazo);
		iMensual = (deudaRest * interes) / 100 / 12;
		cMensual = cuotaMensualIntInc - iMensual;
		return (
			<tr key={i}>
				<th>{mes}</th>
				<td>{formateador(cuotaMensualIntInc)}</td>
				<td>{formateador(iMensual)}</td>
				<td>{formateador(cMensual)}</td>
				<td>{formateador(deudaRest)}</td>
			</tr>
		);
	});
//---------------------------------------------------------------------------------

/// componente creaTABLA

/* 
import { formateador } from '../Utils/formateador';
import { useState, useEffect } from 'react';

export const CreaTabla = ({ meses, data }) => {
	const [months, setMonths] = useState([]);

	useEffect(() => {
		(() => {
			const {
				monto,
				interes,
				plazo,
				cuotaMensualIntInc,
				interesMensual,
				cuotaMensual,
			} = data;

			let deudaRest = monto;

			const newMonths = meses.map((mes) => {
				deudaRest =
					deudaRest - (parseInt(monto) + parseFloat(interes)) / parseInt(plazo);
				const iMensual = (deudaRest * interes) / 100 / 12;
				const cMensual = cuotaMensualIntInc - iMensual;
				const cMintInc = cuotaMensualIntInc;

				const remapedMonth = {
					fecha: mes,
					deudaRestante: deudaRest,
					interesMensual: iMensual,
					cuotaMensual: cMensual,
					cuotaMensualIntInc: cMintInc,
				};

				return { ...remapedMonth };
			});

			setMonths(newMonths);
		})();
	}, [data, meses]);

	return (
		<>
			{months.map((mes, i) => {
				return (
					<tr key={i}>
						<th>{mes.fecha}</th>
						<td>{formateador(mes.cuotaMensualIntInc)}</td>
						<td>{formateador(mes.interesMensual)}</td>
						<td>{formateador(mes.cuotaMensual)}</td>
						<td>{formateador(mes.deudaRestante)}</td>
					</tr>
				);
			})}
		</>
	);
}; 
*/
//--------------------------------------------------------------------------
