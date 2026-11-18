
import DashboardStats from '../components/dashboard/DashboardStats';
import RecruitmentPipeline from '../components/dashboard/RecruitmentPipeline';
import RecentActivities from '../components/dashboard/RecentActivities';
import UpcomingInterviews from '../components/dashboard/UpcomingInterviews';

import styles from './Dashboard.module.css';

export default function Dashboard() {
	return (
		<main className={styles.dashboard}>

			<header className={styles.dashboardHeader}>
				<h1>Recruiter Dashboard</h1>
				<p>Welcome back! Here's your recruitment overview.</p>
			</header>

			<DashboardStats />

			<RecruitmentPipeline />

			<div className={styles.dashboardBottom}>
				<RecentActivities />
				<UpcomingInterviews />
			</div>

		</main>
	);
}
