

import * as ApolloLinks from "reason-apollo/src/ApolloLinks.bs.js";
import * as ApolloLink from "apollo-link";
import * as ReasonApollo from "reason-apollo/src/ReasonApollo.bs.js";
import * as ApolloLinkWs from "apollo-link-ws";
import * as ApolloUtilities from "apollo-utilities";
import * as ApolloInMemoryCache from "reason-apollo/src/ApolloInMemoryCache.bs.js";

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, undefined);

var httpLink = ApolloLinks.createHttpLink("http://localhost:8080/v1/graphql", undefined, undefined, undefined, undefined, undefined, undefined);

var webSocketLink = new ApolloLinkWs.WebSocketLink({
      uri: "ws://localhost:8080/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: undefined
      }
    });

var webSocketHttpLink = ApolloLink.split((function (operation) {
        var operationDefition = ApolloUtilities.getMainDefinition(operation.query);
        if (operationDefition.kind === "OperationDefinition") {
          return operationDefition.operation === "subscription";
        } else {
          return false;
        }
      }), webSocketLink, httpLink);

var instance = ReasonApollo.createApolloClient(webSocketHttpLink, inMemoryCache, undefined, undefined, true, undefined, undefined);

export {
  inMemoryCache ,
  httpLink ,
  webSocketLink ,
  webSocketHttpLink ,
  instance ,
  
}
/* inMemoryCache Not a pure module */
