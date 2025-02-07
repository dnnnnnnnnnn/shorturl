
// Form Input for URL

'use client';

import { useState } from 'react';
import styles from './shorturlForm.module.css';

interface URLFormProps {
  onShorten: (longURL: string) => Promise<void>;
  error: string;
  shortURL: string;
}

export default function URLForm({ onShorten, error, shortURL }: URLFormProps) {
  const [longURL, setLongURL] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onShorten(longURL);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>URL Shortener</h1>
        <input
        className={styles.urlInput}
          type="url"
          placeholder="Enter URL to shorten"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
          required
        />
        <button className={styles.subbtn} type="submit">Shorten</button><br /><br />

        {shortURL && (
        <p>
          Shortened URL: <a href={shortURL}>{shortURL}</a>
        </p>
      )}
      {error && <p style={{ color: '#cccccc' }}>{error}</p>}
      </form>
    </div>
  );
}
