import { AuthService } from '../services/auth/authService';
import { useRouter } from 'next/navigation';

const { createContext, useContext, useState } = require('react');
const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const signInGoogle = () => {
		const { user, err } = AuthService.signInWithGoogle();
		if (err) {
			setError(err);
		}

		setUser(user);
		router.push('../../../usersApp/userarea');
	};

	return (
		<authContext.Provider
			value={{
				user,
				error,
				signInGoogle,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
}
