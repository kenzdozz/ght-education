import { ISendInput } from '@/types';
import api from './api';

export const contactUs = async (value: ISendInput) => {
  try {
    const resp = await api.post('/ght-contact', value);
    return resp.data;
  } catch (error) {
    throw new Error();
  }
};
