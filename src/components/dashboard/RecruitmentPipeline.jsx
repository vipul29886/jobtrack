import styles from './RecruitmentPipeline.module.css'


const stages = [
	{ id: 1, title: 'Sourced', count: 120 },
	{ id: 2, title: 'Screening', count: 45 },
	{ id: 3, title: 'Submitted', count: 28 },
	{ id: 4, title: 'Interview', count: 18 },
	{ id: 5, title: 'Offered', count: 6 },
	{ id: 6, title: 'Hired', count: 8 }
];

export default function RecruitmentPipeline() {
	return (
		<section>
			<h2>Recruitment Pipeline</h2>

			<div className={styles.pipelineContainer}>
				{stages.map(stage => (
					<article key={stage.id} className={styles.pipelineCard}>
						<h3>{stage.title}</h3>
						<p>{stage.count}</p>
					</article>
				))}
			</div>
		</section>
	);
}
