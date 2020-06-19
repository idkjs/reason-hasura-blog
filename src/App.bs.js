

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Modal$ReasonHasuraBlog from "./components/Modal.bs.js";
import * as Header$ReasonHasuraBlog from "./components/Header.bs.js";
import * as PostsList$ReasonHasuraBlog from "./components/PostsList.bs.js";

function App(Props) {
  var match = React.useReducer((function (param, action) {
          if (action) {
            return {
                    isModalOpened: false
                  };
          } else {
            return {
                    isModalOpened: true
                  };
          }
        }), {
        isModalOpened: false
      });
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", {
              onClick: (function (param) {
                  return Curry._1(dispatch, /* Close */1);
                })
            }, React.createElement(Header$ReasonHasuraBlog.make, {
                  openModal: (function (param) {
                      return Curry._1(dispatch, /* Open */0);
                    }),
                  isModalOpened: state.isModalOpened
                }), state.isModalOpened ? React.createElement(Modal$ReasonHasuraBlog.make, {
                    closeModal: (function (param) {
                        return Curry._1(dispatch, /* Close */1);
                      })
                  }) : null, React.createElement(PostsList$ReasonHasuraBlog.make, {}));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
