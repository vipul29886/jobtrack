import styles from './DashboardStats.module.css'


const stats = [
	{ id: 1, title: 'Active Jobs', value: 24 },
	{ id: 2, title: 'Total Candidates', value: 156 },
	{ id: 3, title: 'Interviews Scheduled', value: 12 },
	{ id: 4, title: 'Placements This Month', value: 8 }
];

export default function DashboardStats() {
	return (
		<section className={styles.statsContainer}>
			{stats.map((stat) => (
				<article className={styles.statCard} key={stat.id}>
					<h3 className={styles.statTitle}>{stat.title}</h3>
    			<p className={styles.statValue}>{stat.value}</p>
				</article>
			))}
		</section>
	);
}
