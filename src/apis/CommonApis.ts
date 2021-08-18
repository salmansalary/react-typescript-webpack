import axios from "axios";
import configs, { ApiType } from "../configs";
import { getJson, jsonTypes } from "./mocks/mockService";

const getDataCall = async () => {
    const requestURL = configs.domain + "data";
    if (ApiType[configs.type] === "LOCAL") {
        return getJson(jsonTypes.SAMPLE);
    } else {
        // This can be replaced with auto generated API via swagger
        return axios.get(requestURL);
    }
};

class CommonApis {
    static getData(): Promise<any> {
        return getDataCall();
    }
}

export default CommonApis;
