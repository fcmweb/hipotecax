import styles from '../src/styles/Faq.module.css';

export default function Faq() {
	return (
		<>
			<section className={styles.faq}>
				<div className={styles.wrapperFaq}>
					<div className={styles.parentTab}>
						<input type='radio' name='tab' id='tab-1' />
						<label htmlFor='tab-1'>
							<span>Pregunta 1</span>
							<div className={styles.iconFaq}>
								<span>+</span>
							</div>
						</label>
						<div className={styles.contentResp}>
							<p>
								loren inloren inloren inloren inloren inloren inloren in loren
								inloren inloren inloren inloren inloren inloren inloren
							</p>
						</div>
					</div>
					<div className={styles.parentTab}>
						<input type='radio' name='tab' id='tab-2' />
						<label htmlFor='tab-2'>
							<span>Pregunta 2</span>
							<div className={styles.iconFaq}>
								<span>+</span>
							</div>
						</label>
						<div className={styles.contentResp}>
							<p>
								loren inloren inloren inloren inloren inloren inloren in loren
								inloren inloren inloren inloren inloren inloren inloren
							</p>
						</div>
					</div>
					<div className={styles.parentTab}>
						<input type='radio' name='tab' id='tab-3' />
						<label htmlFor='tab-3'>
							<span>Pregunta 3</span>
							<div className={styles.iconFaq}>
								<span>+</span>
							</div>
						</label>
						<div className={styles.contentResp}>
							<p>
								loren inloren inloren inloren inloren inloren inloren in loren
								inloren inloren inloren inloren inloren inloren inloren
							</p>
						</div>
					</div>
					<div className={styles.parentTab}>
						<input type='radio' name='tab' id='tab-4' />
						<label htmlFor='tab-4'>
							<span>Pregunta 4</span>
							<div className={styles.iconFaq}>
								<span>+</span>
							</div>
						</label>
						<div className={styles.contentResp}>
							<p>
								loren inloren inloren inloren inloren inloren inloren in loren
								inloren inloren inloren inloren inloren inloren inloren
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
