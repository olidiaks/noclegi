import instance from "../../axios";
import {objectToArrayWithId} from "../../helpers/objectToArrayWithId";

export const firebaseFetchHotels = async (id = null) => {
    try {
        const res = await instance.get(`/hotels${id ? `/${id}` : ''}.json`);
        return id ? res.data : objectToArrayWithId(res.data);
    } catch (e) {
        console.log(e.response);
        throw Error(e.response);
    }
};