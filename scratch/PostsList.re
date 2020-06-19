open PostTypes;
open ApolloHooks;
// [%graphql {|
//   query ExampleQuery {
//     myQuery {
//       myField
//     }
//   }
// |}]
module PostsQuery = [%graphql
  {|
     query getPosts {
      posts(order_by: [{created_at: desc }]) @bsRecord{
        title
        cover_img
        content
        created_at
        user @bsRecord {
          name
          avatar_url
        }
      }
}
  |}
];

module type GraphQLQuery = {
  module Raw: {
    type t;
  };
  type t;
  let query: string;
  /* this just makes sure it's just a type conversion, and no function have
     to be called */
  external cast: Js.Json.t => Raw.t = "%identity";
  let parse: Raw.t => t;
};
module ExtendQuery = (M: GraphQLQuery) => {
  let use = () => {
    switch (ApolloHooks.useQuery(M.query)) {
      | None => None
      | Some(Ok(data)) => Some((Ok(data->M.cast->M.parse))
      | Some(Error(errors)) => Some(Error(errors))
    }
  }
};
[%graphql
  {|
     query GetPosts {
      posts(order_by: [{created_at: desc }]) @bsRecord{
        title
        cover_img
        content
        created_at
        user @bsRecord {
          name
          avatar_url
        }
      }
}
  |}
];


module ExtendedGetPosts = {
  include GetPosts;
  include ExtendQuery(GetPosts);
};
// let _ = PostsQuery.makeDefaultVariables;
// let _ = PostsQuery.Z__INTERNAL.graphql_module;
// let _ = PostsQuery.serializeVariables;
//  let query =
//       PostsQuery.query->PostsQuery.parse;
//       ->PostsQuery.Raw.t
//       ->PostsQuery.parse;
module GetPostsSubscription = ReasonApollo.CreateSubscription(PostsQuery);

[@react.component]
let make = () => {
  <div className="flex flex-wrap">
    <GetPostsSubscription>
      ...{({result}) =>
        switch (result) {
        | Loading => "Loading" |> ReasonReact.string
        | Error(error) =>
          Js.log(error);
          "Error" |> ReasonReact.string;
        | Data(response) =>
          switch (response##posts) {
          | posts =>
            posts
            |> Array.map(post =>
                 <div
                   className="bg-white rounded-t-lg overflow-hidden p-4 p-10 flex justify-center">
                   <Post post />
                 </div>
               )
            |> ReasonReact.array
          }
        }
      }
    </GetPostsSubscription>
  </div>;
};
