import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, title, children }) {

	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<header className={styles.modalHeader}>
					<h2>{title}</h2>
					<button type="button" onClick={onClose}>
						&times;
					</button>
				</header>

				<div className={styles.modalBody}>
					{children}
				</div>
			</div>
		</div>
	);
}