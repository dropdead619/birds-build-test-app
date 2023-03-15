import { useGlobalLoading } from '@/composables/useLoading';

const baseURL = import.meta.env.VITE_SERVER_API_URL;

const loading = useGlobalLoading();

export const GET = async (url: string, options?: any) => {
  loading.startLoading();

  const response = await fetch(`${baseURL}/${url}`, { ...options });
  const data = await response.json();
  loading.stopLoading();
  if (response.ok)
    return data;

  else throw new Error(data.message || 'Failed to fetch data');
};

export const POST = async (url: string, body: any, options?: any) => {
  loading.startLoading();
  const response = await fetch(`${baseURL}/${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();

  loading.stopLoading();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to create data');
};

export const PUT = async (url: string, body: any, options: any) => {
  loading.startLoading();
  const response = await fetch(`${baseURL}/${url}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();

  loading.stopLoading();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to update data');
};

export const PATCH = async (url: string, body: any, options: any) => {
  loading.startLoading();
  const response = await fetch(`${baseURL}/${url}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();

  loading.stopLoading();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to update data');
};

export const DELETE = async (url: string, options: any) => {
  const response = await fetch(`${baseURL}/${url}`, {
    method: 'DELETE',
    ...options,
  });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to delete data');
};
