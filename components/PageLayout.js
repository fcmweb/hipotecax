import Head from 'next/head';
import Link from 'next/link';
export default function PageLayout({
	children,
	title = 'Hipotecax',
	description = 'Conseguimos tu hipoteca',
}) {
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
					</ul>
				</div>
			</header>
			<main>{children}</main>
		</>
	);
}
