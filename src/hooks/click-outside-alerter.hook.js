/* eslint-disable implicit-arrow-linebreak */
import { useEffect } from 'react';

export function useClickOutsideAlerter(refs, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutsideRefs = refs.every((ref) =>
        ref.current && !ref.current.contains(event.target));

      if (isClickOutsideRefs) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs]);
}
