'use client';

import { useState } from 'react';
import URLForm from './components/shorturlForm/shorturlForm';
import { shortUrl } from './utils/shorturl';

export default function Home() {
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async (longURL: string) => {
    setError('');
    setShortURL('');

    try {
      const shortened = await shortUrl(longURL);
      setShortURL(shortened);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <URLForm onShorten={handleShorten} error={error} shortURL={shortURL} />
    </div>
  );
}