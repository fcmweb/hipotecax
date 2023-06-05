import PageLayout from '../../../components/PageLayout';
import styles from '../../styles/Usersarea.module.css';

export default function UserArea() {
	return (
		<>
			<PageLayout>
				<div className={styles.container}>
					<h2>Área de usuario</h2>
					<div className={styles.wpr}>
						<ul>
							<li>Cargar datos</li>
							<li>Editar datos</li>
						</ul>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
