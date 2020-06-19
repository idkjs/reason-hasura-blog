let ste = ReasonReact.string;

// helper to simply working with ApolloHooks result type
let map = (result, f) =>
  switch (result) {
  | ApolloHooks.Subscription.Data(data) =>
    ApolloHooks.Subscription.Data(data |> f)
  | Loading => Loading
  | Error(e) => Error(e)
  | NoData => NoData
  };
