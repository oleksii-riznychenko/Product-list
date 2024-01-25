import axios, { AxiosResponse } from 'axios';
import { API_LIST } from '@/api/constants';
import { IProductData } from '@/models/productData';

class ProductsService {
  public async getListProductApi(): Promise<IProductData[]> {
    const response: AxiosResponse<IProductData[]> = await axios.get(API_LIST.PRODUCT);
    return response.data;
  }

  public async getListProductByIdApi(id: number): Promise<IProductData | null> {
    const response: AxiosResponse<IProductData | null> = await axios.get(`${API_LIST.PRODUCT}/${id}`);
    return response.data;
  }
}

export const productService = new ProductsService();
