import {
	auth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'configuracion/firebase';
export const AuthService = {
	signInWithGoogle: async () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				return {
					user: res.user,
				};
			})
			.catch((err) => {
				return { err: err };
			});
	},
};
