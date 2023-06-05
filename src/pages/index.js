import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import PageLayout from '../../components/PageLayout';
import Link from 'next/link';
import Faq from '../../components/Faq';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<PageLayout title='CTH - Home'>
				<section className={styles.section1}>
					<h1 className={styles.title_home}>Conseguimos tu hipoteca</h1>
					<p className={styles.pwriting}>
						<span className={styles.writing}>
							Automatizamos la búsqueda de tu hipoteca con las mejores opciones.
						</span>
					</p>
					<div className={styles.bienvenida}>
						<Image
							src='/bg-portada.svg'
							alt='conseguimos la hipoteca de tus sueños'
							width={600}
							height={500}
						/>
					</div>
				</section>
				<section className={styles.vhSectionG}>
					<div className={styles.grid}>
						<div>
							<sup>01</sup>
							<h2>Recibimos tu información.</h2>
						</div>
						<div>
							<sup>02</sup>
							<h2>Aplicamos a opciones más adaptadas</h2>
						</div>
						<div>
							<sup>03</sup>
							<h2>Te respondemos en 15 días</h2>
						</div>
					</div>
				</section>
				<section className={styles.sectionCta}>
					<div className={styles.cta}>
						<Link href='./login'>Empieza ahora</Link>
					</div>
				</section>
				<section className={styles.vhSection}>
					<div className={styles.tmText}>
						<div className={styles.tmInText}>
							<h2>Simulador de hipoteca</h2>
							<ul>
								<li>■ Simulación tu préstamo hipotecario en línea</li>
								<li>■ Resumen del préstamo para tu hipoteca</li>
								<li>■ Cuadro de amortización, cuota e intereses mensuales</li>
							</ul>
							<br />
							<div className={styles.cta}>
								<Link href='/simuladordehipoteca'>Calcular Hipoteca</Link>
							</div>
						</div>
					</div>
					<div className={styles.tmMedia}>
						<div className={styles.tmMediaImg}></div>
					</div>
				</section>
				<section className={styles.vhSection}>
					<div className={styles.tmMedia}>
						<div className={styles.tmMediaImg2}></div>
					</div>
					<div className={styles.tmText}>
						<div className={styles.tmInText}>
							<h2>Te acompañamos en el proceso</h2>
							<ul>
								<li>
									■ Asesoramiento personalizado en el proceso de solicitud de
									hipoteca
								</li>
								<li>■ Asesoramiento y preparación de la documentación</li>
								<li>■ Adaptarte a los cambios en el mercado inmobiliario</li>
							</ul>
						</div>
					</div>
				</section>
				{/* --------------------- FAQ ------------------ */}
				<Faq />
				{/* --------------------- FAQ ------------------ */}
			</PageLayout>
		</>
	);
}
