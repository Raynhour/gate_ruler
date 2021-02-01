export type INJ_TYPE = {
  API: symbol;
  VIEW: symbol;
  CURRENT_PLAYER: symbol;
};

const INJECTIONS: INJ_TYPE = {
  API: Symbol("API"),
  VIEW: Symbol("VIEW"),
  CURRENT_PLAYER: Symbol("CURRENT_PLAYER"),
};

export default INJECTIONS;
