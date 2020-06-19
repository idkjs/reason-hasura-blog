

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";
import * as ReactApollo from "react-apollo";
import * as ReactHooks from "@apollo/react-hooks";
import * as App$ReasonHasuraBlog from "./App.bs.js";
import * as Client$ReasonHasuraBlog from "./client/Client.bs.js";

import './tailwind.css'
;

import 'animate.css'
;

ReactDOMRe.renderToElementWithId(React.createElement(ReactApollo.ApolloProvider, {
          client: Client$ReasonHasuraBlog.instance,
          children: React.createElement(ReactHooks.ApolloProvider, {
                client: Client$ReasonHasuraBlog.instance,
                children: React.createElement(App$ReasonHasuraBlog.make, {})
              })
        }), "root");

export {
  
}
/*  Not a pure module */
