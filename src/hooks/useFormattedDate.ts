import { useState, useEffect } from 'react';

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');

  const period = hours < 12 ? '오전' : '오후';
  const displayHours = hours % 12 || 12;

  return `${year}-${month}-${day} ${period} ${displayHours}:${minute}`;
};

export const useFormattedDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    const msToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const initialTimer = setTimeout(() => {
      setDate(new Date());

      const interval = setInterval(() => {
        setDate(new Date());
      }, 60000);

      return () => clearInterval(interval);
    }, msToNextMinute);

    return () => clearTimeout(initialTimer);
  }, []);

  return formatDate(date);
};
