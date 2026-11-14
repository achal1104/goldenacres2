import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../data';

// Opens the page that owns a section id (falls back to a home-page anchor).
export default function useGoTo() {
  const navigate = useNavigate();
  return useCallback((id) => (e) => {
    e?.preventDefault();
    navigate(PATHS[id] ? { pathname: PATHS[id], hash: '' } : { pathname: '/', hash: `#${id}` });
  }, [navigate]);
}
