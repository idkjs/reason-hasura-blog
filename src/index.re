%raw
"import './index.css'";
%raw
"import 'animate.css'";
%raw
"import './styles.css'";

// [%bs.raw {|require('./styles.css')|}];

ReactDOMRe.renderToElementWithId(
  <ReasonApollo.Provider client=Client.instance>
    <ApolloHooks.Provider client=Client.instance>
      <App />
    </ApolloHooks.Provider>
  </ReasonApollo.Provider>,
  "root",
);
