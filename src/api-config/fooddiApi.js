import axiosClient from "./axiosClient";

export const TYPE = {
  'bbqs': '/bbqs',
  'best-foods': '/best-foods',
  'breads' : '/breads',
  'burgers' : '/burgers',
  'chocolates' : '/chocolates',
  'desserts' : '/desserts',
  'drinks' : '/drinks',
  'fried-chiken' : '/fried-chiken',
  'ice-cream' : '/ice-cream',
  'pizzas' : '/pizzas',
  'porks' : '/porks',
  'sandwiches' : '/sandwiches',
  'sausages' : '/sausages',
  'steaks' : '/steaks',
}

const fooddiApi = {
  getAllProducts: (params) => {
    const url = `/products`;
    return axiosClient.get(url, {params});
  },
  getProduct: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getByType: (type, params) => {
    return axiosClient.get(type, {params});
  }
};

export default fooddiApi;