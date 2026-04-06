/**
 * Example API module - API calls for example feature
 */

import apiClient from './client';

export const getExample = () => apiClient.get('/example');
export const createExample = (data) => apiClient.post('/example', data);
