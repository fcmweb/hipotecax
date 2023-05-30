import { formateador } from '../src/Utils/formateador';
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
			let agno = 0;
			let finAgno = '';

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
					finAgno:
						mes.substring(0, 2) === '1/'
							? (agno++, (finAgno = `Finalizado año ${agno}`))
							: (finAgno = ''),
				};
				if (remapedMonth.finAgno === '') delete remapedMonth.finAgno;

				return { ...remapedMonth };
			});

			setMonths(newMonths);
			console.log(newMonths);
		})();
	}, [data, meses]);

	return (
		<>
			{months.map((mes, i) => {
				return (
					<tbody key={i}>
						<tr>
							<th colSpan={5}>{mes.finAgno}</th>
						</tr>
						<tr>
							<th>{mes.fecha}</th>
							<td>{formateador(mes.cuotaMensualIntInc)}</td>
							<td>{formateador(mes.interesMensual)}</td>
							<td>{formateador(mes.cuotaMensual)}</td>
							<td>{formateador(mes.deudaRestante)}</td>
						</tr>
					</tbody>
				);
			})}
		</>
	);
};
