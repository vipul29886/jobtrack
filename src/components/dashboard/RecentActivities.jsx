import styles from './RecentActivities.module.css'


const activities = [
	{
		id: 1,
		message: 'Rahul Sharma added a new candidate',
		time: '10 minutes ago'
	},
	{
		id: 2,
		message: 'Priya submitted a candidate to Google',
		time: '30 minutes ago'
	},
	{
		id: 3,
		message: 'Interview scheduled for React Developer',
		time: '1 hour ago'
	},
	{
		id: 4,
		message: 'Offer released to a candidate',
		time: '2 hours ago'
	}
];

export default function RecentActivities() {
	return (
		<section>
			<h2>Recent Activities</h2>

			<div className={styles.activityList}>
				{activities.map(activity => (
					<article className={styles.activityCard} key={activity.id}>
						<p>{activity.message}</p>
						<span>{activity.time}</span>
					</article>
				))}
			</div>
		</section>
	);
}
