// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";
import * as ReactApollo from "react-apollo";
import * as ServiceWorker from "./serviceWorker";
import * as ReactHooks from "@apollo/react-hooks";
import * as App$ReasonHasuraDemo from "./App.bs.js";
import * as ApolloClient$ReasonHasuraDemo from "./ApolloClient.bs.js";

import './index.css'
;

import 'animate.css'
;

function register_service_worker(prim) {
  ServiceWorker.register();
  
}

function unregister_service_worker(prim) {
  ServiceWorker.unregister();
  
}

var client = ApolloClient$ReasonHasuraDemo.makeApolloClient(undefined);

ReactDOMRe.renderToElementWithId(React.createElement(ReactApollo.ApolloProvider, {
          client: client,
          children: React.createElement(ReactHooks.ApolloProvider, {
                client: client,
                children: React.createElement(App$ReasonHasuraDemo.make, {})
              })
        }), "root");

ServiceWorker.unregister();

export {
  register_service_worker ,
  unregister_service_worker ,
  client ,
  
}
/*  Not a pure module */
