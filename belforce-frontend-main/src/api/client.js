/**
 * API client for backend requests
 */

import { config } from '../config';

const apiClient = {
  async get(path) {
    const res = await fetch(`${config.apiBaseUrl}${path}`);
    if (!res.ok) throw new Error('API request failed');
    return res.json();
  },

  async post(path, data) {
    const res = await fetch(`${config.apiBaseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('API request failed');
    return res.json();
  },
};

export default apiClient;
