import PageLayout from '../../../components/PageLayout';
import styles from '../../styles/Usersarea.module.css';

export default function UserArea() {
	return (
		<>
			<PageLayout>
				<div className={styles.container}>
					<h2>Area de usuario</h2>
					<div className={styles.wpr}>
						<ul>
							<li>Cargar datos</li>
							<li>Editar datos</li>
							<li>Eliminar datos</li>
						</ul>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
