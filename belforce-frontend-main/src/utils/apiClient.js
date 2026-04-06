import { env } from './env';

async function parseJsonResponse(res) {
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const message = data?.error || data?.message || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  
  if (data === null && res.status !== 204) {
    throw new Error(
      `Received an empty response from the server (${res.url}). ` +
      `This happens if VITE_API_BASE_URL is not set or points incorrectly to the frontend proxy instead of the backend service.`
    );
  }
  
  return data;
}

export async function apiFetch(path, options = {}) {
  const url = `${env.apiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  return parseJsonResponse(res);
}

