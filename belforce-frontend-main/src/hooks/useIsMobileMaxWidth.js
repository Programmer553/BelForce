import { useState, useEffect } from 'react';

/**
 * @param {number} maxWidthPx - default 768 (matches app mobile breakpoint)
 */
export function useIsMobileMaxWidth(maxWidthPx = 768) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(`(max-width: ${maxWidthPx}px)`).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidthPx}px)`);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [maxWidthPx]);

  return matches;
}
