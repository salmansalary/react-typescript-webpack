// API CALL TYPE
export enum ApiType {
  LOCAL,
  REST,
}

// LANGUAGES
export enum LanguageType {
  en,
  da,
}

// TOKEN storage
export enum TokenType {
  TOKEN_MEMORY,
  TOKEN_SESSION,
  TOKEN_PERSIST,
}

// API Domain using .env variable
const DOMAIN = process.env.API_ENDPOINT || "https://localhost:5001";

// API contexts
// We will pass this to swagger class constractor if we need different base urls
const DEFAULT = "";

// CONFIG DATA (Please change here only)
const configs = {
  delay: 500,
  domain: DOMAIN,
  context: DEFAULT,
  tokenStorage: TokenType.TOKEN_MEMORY,
  type: ApiType.REST,
  lang: LanguageType.en,
};

export default configs;
