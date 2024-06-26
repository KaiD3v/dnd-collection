import axios from 'axios';
import { dndApi } from '../utils/api.config';

const getAllMonsters = async () => {
  const res = await axios.get(`${dndApi}/monsters`);
  return res.data;
};

const monsterService = {
  getAllMonsters,
};

export default monsterService;
