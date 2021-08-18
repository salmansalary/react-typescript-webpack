/**
 * Check if a string is empty
 * @param {string} value string variable to be checked
 * @returns {boolean} true if empty
 */
export function isEmpty(value: any): boolean {
    if (value === undefined || value === null) {
        // undefined or null
        return true;
    } else if (value instanceof Date) {
        // Date object behave different from normal objects
        return false;
    } else if (value instanceof Function) {
        return false;
    } else if (value instanceof Object && !(value instanceof Array)) {
        // Object, not an array
        return Object.keys(value).length < 1;
    } else if (value === false) {
        return true;
    } else if (value.length < 1) {
        // Array or string
        return true;
    } else {
        return false;
    }
}

/**
 * Check if a number not negative
 * @param {number} value then number to be checked
 * @returns {boolean} true if negative
 */
export function isNegative(value: number): boolean {
    return value && value < 0;
}

/**
 * Check if a string matches a specific length
 * @param {string} value the string to be checked
 * @param {number} length the desired length
 * @returns {boolean} true if equal
 */
export function equalLength(value: string, length: number): boolean {
    return value && value.length === length;
}

/**
 * Check if a string matches a specific length
 * @param {string} value the string to be checked
 * @param {number} min the desired min
 * @param {number} max the desired max
 * @returns {boolean} true if equal
 */
export function withinRange(value: string, min: number, max: number): boolean {
    return value && value.length >= min && value.length <= max;
}

/**
 * Check if a number matches a specific min length
 * @param {number} value the string to be checked
 * @param {number} min the desired min
 * @param {number} max the desired max
 * @returns {boolean} true if equal
 */
export function withinRangeNumber(value: number, min: number, max: number): boolean {
    return (value === 0 ? true : value) && value >= min && value <= max;
}

/**
 * Check if a number matches a specific min length
 * @param {number} value the string to be checked
 * @param {number} min the desired min
 * @param {number} max the desired max
 * @returns {boolean} true if equal
 */
export function withinMinNumber(value: number, min?: number): boolean {
    return value && value >= min;
}

/**
 * Check if a number matches a specific min length
 * @param {number} value the string to be checked
 * @param {number} min the desired min
 * @param {number} max the desired max
 * @returns {boolean} true if equal
 */
export function withinMaxNumber(value: number, max?: number): boolean {
    return value && value <= max;
}

/**
 * Check two strings are equal in value and type
 * @param {any} value first string
 * @param {any} value2 second string
 * @returns {boolean} true if equal
 */
export function equal(value: any, value2: any): boolean {
    return value && value2 && value === value2;
}

/**
 * Check if an email is valid
 * @param {string} value email
 * @returns {boolean} true if email is valid, false if email is not valid
 */
export function emailIsValid(value: string): boolean {
    const emailRegex = /^[_a-zæøåA-ZÆØÅ0-9-]+(\.[_a-zæøåA-ZÆØÅ0-9-]+)*@[a-zæøåA-ZÆØÅ0-9-]+(\.[a-zæøåA-ZÆØÅ0-9-]+)*(\.[a-zA-Z]{2,15})$/;
    return emailRegex.test(value);
}

/**
 * Check if an email is valid
 * @param {string} value email
 * @returns {boolean} true if email is valid, false if email is not valid
 */
export function fullnameValid(value: string): boolean {
    const fullnameRegex = /^[a-zA-Z/' ]{2,}(?: [a-zA-Z/' ]{2,})+$/;
    return fullnameRegex.test(value);
}

/**
 * Check if a variable is not a number
 * @param {any} value variable to be checked
 * @returns {boolean} true if not a number
 */
export function notANumber(value: any): boolean {
    return isNaN(value);
}

/**
 * Check if an object is empty, has no keys
 * @param {any} value should be an object, returns true if not
 * @returns {boolean} true if empty
 */
export function emptyObject(value: any): boolean {
    if (value) {
        if (typeof value === 'object' && !(value instanceof Array)) {
            return !(Object.keys(value).length > 0);
        }
    }
    return false;
}

/**
 * Verifies a password strength
 * @param {string} newPassword The new password needed to be verified
 * @returns {boolean} true if the password is strong
 * @rules :
 * - Must be at least 8 characters long.
 * - Must include at least one uppercase character.
 * - Must include at least one lowercase character.
 * - Must include at least one number.
 */
export function isStrongPassword(newPassword: string): boolean {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(newPassword);
}
