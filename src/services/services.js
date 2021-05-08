import API from './api';
import qs from 'qs';
import { endpoints } from './endpoints';

export const services = {
  getProducts: (params) => {
    const queryString = qs.stringify(
      {
        ...params
      },
      {
        arrayFormat: 'comma'
      }
    );
    return API.get(`${endpoints.url('products')}?${queryString}`);
  },
  getCompanies: () => API.get(endpoints.url('companies'))
};
