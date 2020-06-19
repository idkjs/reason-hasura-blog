%raw
"import './index.css'";
%raw
"import 'animate.css'";

[@bs.module "./serviceWorker"]
external register_service_worker: unit => unit = "register";
[@bs.module "./serviceWorker"]
external unregister_service_worker: unit => unit = "unregister";
let client=ApolloClient.makeApolloClient();
ReactDOMRe.renderToElementWithId(
  <ReasonApollo.Provider client>
   <ApolloHooks.Provider client>
    <App />
 </ApolloHooks.Provider>
    
  </ReasonApollo.Provider>,
  "root",
);

unregister_service_worker();
