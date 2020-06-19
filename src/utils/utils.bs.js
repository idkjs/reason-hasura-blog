

import * as Curry from "bs-platform/lib/es6/curry.js";

function ste(prim) {
  return prim;
}

function map(result, f) {
  if (typeof result === "number") {
    if (result === /* Loading */0) {
      return /* Loading */0;
    } else {
      return /* NoData */1;
    }
  } else if (result.TAG) {
    return {
            TAG: /* Error */1,
            _0: result._0
          };
  } else {
    return {
            TAG: /* Data */0,
            _0: Curry._1(f, result._0)
          };
  }
}

export {
  ste ,
  map ,
  
}
/* No side effect */
