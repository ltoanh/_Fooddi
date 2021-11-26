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
  getAllFoods: (params) => {
    const url = `/all-foods`;
    return axiosClient.get(url, {params});
  },
  getFoodByID: (id) => {
    const url = `/all-foods/${id}`;
    return axiosClient.get(url);
  },
  getByType: (type, params) => {
    return axiosClient.get(type, {params});
  },
  getCategoriesList: () => {
    const url = '/categories';
    return axiosClient.get(url);
  }
};

export default fooddiApi;