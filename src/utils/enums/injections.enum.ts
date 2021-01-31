export type INJ_TYPE = {
  API: symbol;
  VIEW: symbol;
};

const INJECTIONS: INJ_TYPE = {
  API: Symbol("API"),
  VIEW: Symbol("VIEW"),
};

export default INJECTIONS;
