/* Create an InMemoryCache */
let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();
/* WebSocket client */
let wsUri = "ws://localhost:8080/v1/graphql";
let webSocketLink =
  ApolloLinks.webSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
      connectionParams: None,
    },
  });
/* Create an HTTP Link */
let httpLink =
  ApolloLinks.createHttpLink(~uri="http://localhost:8080/v1/graphql", ());
let webSocketHttpLink =
  ApolloLinks.split(
    operation => {
      let operationDefition =
        ApolloUtilities.getMainDefinition(operation.query);
      operationDefition.kind == "OperationDefinition"
      && operationDefition.operation == "subscription";
    },
    webSocketLink,
    httpLink,
  );
let instance =
  ReasonApollo.createApolloClient(
    ~link=webSocketHttpLink,
    ~cache=inMemoryCache,
    (),
  );
