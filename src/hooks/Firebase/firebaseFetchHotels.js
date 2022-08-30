import instance from "../../axios";
import {objectToArrayWithId} from "../../helpers/objectToArrayWithId";

export const firebaseFetchHotels = async () => {
    try {
        const res = await instance.get('/hotels.json');
        return objectToArrayWithId(res.data);
    } catch (e) {
        throw Error(e);
    }
};