import configs, { TokenType } from '../configs';
// import { v4 as uuidv4 } from "uuid";
// Get, Set and Remove a global AccessToken
// At the moment token has been kept presistantly
let accessToken: string = null;

/**
 * Set the token and store it in localStorage
 * @param {string} value Token value
 */
export function setAccessToken(value: string): void {
    accessToken = 'Bearer ' + value;
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case TokenType.TOKEN_SESSION:
                sessionStorage.setItem('TOKEN', accessToken);
                break;
            case TokenType.TOKEN_PERSIST:
                localStorage.setItem('TOKEN', accessToken);
                break;
            default:
                accessToken = value;
        }
    }
}

/**
 * Retrieves the token from localStorage
 * @returns {string} The token
 */
export function getAccessToken(): string {
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case TokenType.TOKEN_SESSION:
                if (sessionStorage.getItem('TOKEN')) {
                    accessToken = sessionStorage.getItem('TOKEN');
                }
                break;
            case TokenType.TOKEN_PERSIST:
                if (localStorage.getItem('TOKEN')) {
                    accessToken = localStorage.getItem('TOKEN');
                }
                break;
            default:
                return accessToken;
        }
    }
    return accessToken;
}

/**
 * Removes the access token from localStorage
 */
export function removeAccessToken(): void {
    accessToken = null;
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case TokenType.TOKEN_SESSION:
                if (sessionStorage.getItem('TOKEN')) {
                    sessionStorage.removeItem('TOKEN');
                }
                break;
            case TokenType.TOKEN_PERSIST:
                if (localStorage.getItem('TOKEN')) {
                    localStorage.removeItem('TOKEN');
                }
                break;
            default:
                accessToken = null;
        }
    }
}

// Send a request with callback for authorization
// export function getAuthCode(): void {
//   const options: ClientOAuth2.Options = {
//     redirectUri: configs.oAuthInfo.redirectUrl,
//     authorizationUri: configs.oAuthInfo.authorizationUrl,
//     accessTokenUri: configs.oAuthInfo.accessTokenUrl,
//     clientId: configs.oAuthInfo.clientId,
//     scopes: configs.oAuthInfo.scopes,
//     query: {
//       resource: configs.oAuthInfo.resournce,
//       nonce: uuidv4(),
//       response_type: "token id_token",
//     },
//   };
//   const oAuth2 = new ClientOAuth2(options);
//   window.location.replace(oAuth2.code.getUri());
// }

// Get the access Token from the authroization callback
// export function getAuthToken(success, fail): void {
//   const queries = window.location.href.includes("?")
//     ? window.location.search + window.location.hash.replace("#", "&")
//     : window.location.hash.replace("#", "?");
//   const params = new URLSearchParams(queries);
//   const givenAccessToken = params.get("access_token");
//   if (givenAccessToken) {
//     setAccessToken(givenAccessToken);
//     success();
//   } else {
//     const errorParam = params.get("error");
//     const errorServerParam = params.get("server_error");
//     const errorDescParam = params.get("error_description");
//     if (!errorParam && !errorServerParam && !errorDescParam) {
//       getAuthCode();
//     } else {
//       fail();
//     }
//   }
// }
