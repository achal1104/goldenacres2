// Enquiry endpoint. Set VITE_API_URL in .env to your existing backend (POST, JSON).
// If it is not set we never pretend a submission happened: the caller gets NOT_CONFIGURED.
export const isLeadApiConfigured = Boolean(import.meta.env.VITE_API_URL);

export async function submitLead(data) {
  const url = import.meta.env.VITE_API_URL;
  if (!url) {
    const err = new Error('Lead API is not configured');
    err.code = 'NOT_CONFIGURED';
    throw err;
  }
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error('Request failed');
  return res.json().catch(() => ({ ok: true }));
}
