// Form Output for short URL

import styles from './shortOutput.module.css';

export function ShortenedURL({ shortURL }: { shortURL: string }) {
    return (
      <p className={styles.shorturl}>
        Shortened URL: <a href={shortURL}>{shortURL}</a>
      </p>
    );
  }