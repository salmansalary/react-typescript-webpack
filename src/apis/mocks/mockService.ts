import configs from "../../configs";

// Here are enums of availble jsons
export const enum jsonTypes {
    SAMPLE
}

/**
 * This method will return the json data based on their types above
 * @param {jsonTypes} type The type of the JSON file to retrieve
 * @returns {Promise<any>} Promise
 */
export function getJson(type: jsonTypes): Promise<any> {
    let data: any;
    switch (type) {
        case jsonTypes.SAMPLE:
            if (process.env.NODE_ENV !== "production") { data = require("./jsons/sample.json"); }
            return new Promise((resolve) => { simulateData(resolve, data, 200, configs.delay); });


        default: return new Promise((_resolve, reject) => reject("JSON data should not be retireved in production mode"));
    }
}

function simulateData(resolve: any, data: any, status: number, timeout: number): any {
    return setTimeout(() => { resolve({ status: status, data: data }); }, timeout);
}
