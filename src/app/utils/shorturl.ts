
// This function sends the POST request to the server to shorten the URL.

export const shortUrl = async (longURL: string): Promise<string> => {
  try {
    const response = await fetch('/api/shorturl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: longURL }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to shorten the URL');
    }

    const data: { urlEncurtada: string } = await response.json();
    return data.urlEncurtada;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
};
