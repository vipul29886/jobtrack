import { useState } from 'react';
import styles from './CandidateForm.module.css';

export default function CandidateForm({onSubmit}) {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		skills: '',
		experience: '',
		currentEmployer: '',
		source: '',
		resume: null
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}))
		setErrors((prev) => ({
			...prev,
			[name]: ''
		}));
	}

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Full name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Phone number is required';
		}

		if (!formData.skills.trim()) {
			newErrors.skills = 'Skills are required';
		}

		if (formData.experience === '' || Number(formData.experience) < 0) {
			newErrors.experience = 'Enter valid experience';
		}

		if (!formData.source) {
			newErrors.source = 'Please select a source';
		}

		if (!formData.resume) {
			newErrors.resume = 'Please upload a resume';
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isValid = validateForm();
		if (!isValid) {
			return;
		}
		onSubmit(formData);
		console.log('Form submitted successfully', formData);
	};

	return (
		<form className={styles.candidateForm} onSubmit={handleSubmit}>
			<div className={styles.formGrid}>
				<div className={styles.formGroup}>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter full name"
						className={errors.name ? styles.inputError : ''}
					/>
					{errors.name && (
						<span className={styles.error}>
							{errors.name}
						</span>
					)}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter email"
						className={errors.email ? styles.inputError : ''}
					/>
					{errors.email && (
						<span className={styles.error}>
							{errors.email}
						</span>
					)}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="phone">Phone</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Enter phone number"
						className={errors.phone ? styles.inputError : ''}
					/>
					{errors.phone && (
						<span className={styles.error}>
							{errors.phone}
						</span>
					)}
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="skills">Skills</label>
					<input
						type="text"
						id="skills"
						name="skills"
						value={formData.skills}
						onChange={handleChange}
						placeholder="e.g. React, JavaScript, CSS"
						className={errors.skills ? styles.inputError : ''}
					/>
					{errors.skills && (
						<span className={styles.error}>
							{errors.skills}
						</span>
					)}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="experience">Experience (Years)</label>
					<input
						type="number"
						id="experience"
						name="experience"
						value={formData.experience}
						onChange={handleChange}
						placeholder="e.g. 5"
						min="0"
						className={errors.experience ? styles.inputError : ''}
					/>
					{errors.experience && (
						<span className={styles.error}>
							{errors.experience}
						</span>
					)}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="currentEmployer">Current Employer</label>
					<input
						type="text"
						id="currentEmployer"
						name="currentEmployer"
						value={formData.currentEmployer}
						onChange={handleChange}
						placeholder="Enter current employer"
						className={errors.currentEmployer ? styles.inputError : ''}
					/>
					{errors.currentEmployer && (
						<span className={styles.error}>
							{errors.currentEmployer}
						</span>
					)}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="source">Candidate Source</label>
					<select
						id="source"
						name="source"
						value={formData.source}
						onChange={handleChange}
						className={errors.source ? styles.inputError : ''}
					>
						<option value="">Select source</option>
						<option value="LinkedIn">LinkedIn</option>
						<option value="Naukri">Naukri</option>
						<option value="Referral">Referral</option>
						<option value="Indeed">Indeed</option>
						<option value="Other">Other</option>
					</select>
					{errors.source && (
						<span className={styles.error}>
							{errors.source}
						</span>
					)}
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="resume">Upload Resume</label>
					<input
						type="file"
						id="resume"
						name="resume"
						accept=".pdf,.doc,.docx"
						onChange={(e) => {
							setFormData((prev) => ({
								...prev,
								resume: e.target.files[0]
							}));
						}}
						className={errors.resume ? styles.inputError : ''}
					/>
					{errors.resume && (
						<span className={styles.error}>
							{errors.resume}
						</span>
					)}
				</div>
			</div>
			<button type="submit">
				Add Candidate
			</button>
		</form>
	);
}