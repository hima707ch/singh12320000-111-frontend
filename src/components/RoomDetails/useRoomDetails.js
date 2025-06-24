import { useState, useEffect } from 'react';

const useRoomDetails = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const roomId = new URLSearchParams(window.location.search).get('id') || '1';
        const response = await fetch(`/api/properties/${roomId}`);
        if (!response.ok) throw new Error('Failed to fetch room details');
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, []);

  return { room, loading, error };
};

export default useRoomDetails;