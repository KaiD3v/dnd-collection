import { dndApi } from "../utils/api.config";
import axios from "axios";

const getAllMonsters = async () => {
    const res = await axios.get(dndApi + '/monsters')
    return res.data
}

const monsterService = {
    getAllMonsters
}

export default monsterService