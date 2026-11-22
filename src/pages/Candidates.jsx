import { useState } from 'react'
import { candidates } from "../data/candidates";
import Modal from '../components/common/Modal';
import CandidateForm from '../components/candidates/CandidateForm';
import styles from './Candidates.module.css'

const statusClasses = {
	Sourced: styles.sourced,
	Screening: styles.screening,
	Shortlisted: styles.shortlisted,
	Interview: styles.interview,
	Hired: styles.hired,
	Rejected: styles.rejected
};

export default function Candidates() {

	const [searchTerm, setSearchTerm] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('all');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [allCandidates, setAllCandidates] = useState(candidates);

	const filteredCandidates = allCandidates.filter((candidate) => {
		const search = searchTerm.trim().toLowerCase();

		const searchCandidates =
			candidate.name.toLowerCase().includes(search) ||
			candidate.email.toLowerCase().includes(search) ||
			candidate.position.toLowerCase().includes(search);

		const statusCandidates =
			selectedStatus === 'all' ||
			candidate.status.toLowerCase() === selectedStatus;

		return searchCandidates && statusCandidates;
	});

	const handleAddCandidate = (candidateData) => {
		const newCandidate = {
			id: crypto.randomUUID(),
			...candidateData
    };
		setAllCandidates((prev) => [...prev, newCandidate]);
		console.log('New candidate received:', newCandidate);
		setIsModalOpen(false);
	};

	return (
		<main className={styles.candidatesPage}>
			<header className={styles.pageHeader}>
				<div>
					<h1>Candidates</h1>
					<p>Manage and track your candidate pipeline.</p>
				</div>

				<button type="button" className={styles.addCandidateBtn} onClick={() => setIsModalOpen(true)}>
					+ Add Candidate
				</button>
			</header>
			<div className={styles.tableContainer}>
				<input
					type="text"
					placeholder="Search candidates..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<select onChange={(e) => setSelectedStatus(e.target.value)} value={selectedStatus}>
					<option value="all">All</option>
					<option value="sourced">Sourced</option>
					<option value="screening">Screening</option>
					<option value="shortlisted">Shortlisted</option>
					<option value="interview">Interview</option>
					<option value="hired">Hired</option>
				</select>

				<table className={styles.candidateTable}>
					<thead>
						<tr>
							<th>Candidate</th>
							<th>Email</th>
							<th>Position</th>
							<th>Experience</th>
							<th>Status</th>
							<th>Source</th>
						</tr>
					</thead>
					<tbody>
						{filteredCandidates.length === 0 ? (
							<tr>
								<td colSpan="6">No records to display</td>
							</tr>
						) : (
							filteredCandidates.map((candidate) => (
								<tr key={candidate.id}>
									<td>{candidate.name}</td>
									<td>{candidate.email}</td>
									<td>{candidate.position}</td>
									<td>{candidate.experience} years</td>
									<td>
										<span className={`${styles.statusBadge} ${statusClasses[candidate.status]}`}>
											{candidate.status}
										</span>
									</td>
									<td>{candidate.source}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="Add New Candidate"
			>
				<CandidateForm onSubmit={handleAddCandidate}/>
			</Modal>
		</main>
	);
}