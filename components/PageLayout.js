import Head from 'next/head';
import Link from 'next/link';
import { auth } from 'configuracion/firebase';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function PageLayout({
	children,
	title = 'Hipotecax',
	description = 'Conseguimos tu hipoteca',
}) {
	const [btnlogout, setbtnlogout] = useState('none');

	const router = useRouter();
	const handleClick = () => {
		auth.signOut();
		console.log('user signout');
		router.push('/');
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user === null) {
				setbtnlogout('none');
			} else {
				setbtnlogout('block');
			}
		});
	}, []);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>
				<div className='logo'>
					<Link href='/'>
						<div className='logotipo'></div>
					</Link>
				</div>
				<div>
					<ul className='menu'>
						<li>
							<Link href='/simuladordehipoteca'>Simulador de Hipoteca</Link>
						</li>
						<li>
							<Link href='/about'>Sobre Nosotros</Link>
						</li>
						<li>
							<Link href='#'>Contacto</Link>
						</li>
						<li>
							<button
								onClick={handleClick}
								className='logout'
								style={{ display: btnlogout }}
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</header>
			<main>{children}</main>
		</>
	);
}
