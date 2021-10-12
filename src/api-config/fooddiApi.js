import axios from "axios";
import axiosClient from "./axiosclient";

export const type = {
  bbqs: 'bbqs',
  'best-foods': 'best-foods',
  'breads' : 'breads',
  'burgers' : 'burgers',
  'chocolates' : 'chocolates',
  'desserts' : 'desserts',
  'drinks' : 'drinks',
  'fried-chiken' : 'fried-chiken',
  'ice-cream' : 'ice-cream',
  'pizzas' : 'pizzas',
  'porks' : 'porks',
  'sandwiches' : 'sandwiches',
  'sausages' : 'sausages',
  'steaks' : 'steaks',
}

const fooddiApi = {
  getProduct: (id) => {
    const url = `products/${id}`;
    return axios.get(url);
  },
};

export default fooddiApi;