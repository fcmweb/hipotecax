import { AuthProvider } from '../../src/configuracion/providers/auth';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}
