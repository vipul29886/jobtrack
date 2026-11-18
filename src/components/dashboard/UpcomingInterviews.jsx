import styles from './UpcomingInterviews.module.css'


const upcomingInterviews = [
	{
		id: '1',
		name: 'Rahul Sharma',
		jobTitle: 'React Developer',
		date: '19 Nov'
	},
	{
		id: '2',
		name: 'Priya Patel',
		jobTitle: 'Angular Lead',
		date: '20 Nov'
	},
	{
		id: '3',
		name: 'Amit Verma',
		jobTitle: 'UI Architect',
		date: '21 Nov'
	}
]

export default function UpcomingInterviews() {
	return <>
	<section>
		<h2>Upcoming Interviews</h2>
		<div className={styles.interviewContainer}>
			<table className={styles.interviewTable}>
				<thead>
					<tr>
						<th>Candidate</th>
						<th>Position</th>
						<th>Interview</th>
					</tr>
				</thead>
				<tbody>
					{upcomingInterviews.map((intrvw) => (
						<tr key={intrvw.id}>
							<td>{intrvw.name}</td>
							<td>{intrvw.jobTitle}</td>
							<td>{intrvw.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</section>
	</>;
}