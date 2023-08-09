import axios from 'axios';
import { FilterData } from '../types/filter';

const baseURL = 'http://localhost:8080';

export const requestBackend = axios.create({
  baseURL,
});

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    storeId: filterData?.storeId,
  };
};
