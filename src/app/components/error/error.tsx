
// Error for shortURL Form

import styles from './error.module.css';

export function ErrorMessage({ error }: { error: string }) {
    return <p className={styles.error}>{error}</p>;
  }


