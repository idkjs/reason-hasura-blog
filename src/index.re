%raw
"import './tailwind.css'";
%raw
"import 'animate.css'";

ReactDOMRe.renderToElementWithId(
  <ReasonApollo.Provider client=Client.instance>
    <ApolloHooks.Provider client=Client.instance>
      <App />
    </ApolloHooks.Provider>
  </ReasonApollo.Provider>,
  "root",
);
