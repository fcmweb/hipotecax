import PageLayout from '../../components/PageLayout';
import useAuth from 'configuracion/providers/auth';
import styles from '../styles/Login.module.css';
export default function Login() {
	const { signInGoogle } = useAuth();
	return (
		<>
			<PageLayout>
				<div className={styles.wprLogin}>
					<h2>Inicia sesión con Google</h2>
					<div className={styles.wprButton}>
						<button onClick={signInGoogle}>↗ Google</button>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
