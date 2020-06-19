// https://github.com/bandprotocol/bandchain/blob/master/scan/src/subscriptions/AccountSub.re

open PostTypes;
open Utils;
module PostsSubscription = [%graphql
  {|
     subscription getPosts {
      posts(order_by: {created_at: desc }) @bsRecord{
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

let getPosts = _ => {
  let (result, _) =
    ApolloHooks.useSubscription(
      PostsSubscription.definition,
      ~variables=PostsSubscription.makeVariables(),
    );
  result |> Subs.map(_, x => x##posts);
};

[@react.component]
let make = () => {
  let postsSubscription = getPosts();
  <div className="flex flex-wrap">
    {switch (postsSubscription) {
     | Loading => "Loading" |> ste
     | Error(error) =>
       Js.log(error);
       "Error" |> ste;
     | NoData =>
       <div
         className="bg-white rounded-t-lg overflow-hidden p-4 p-10 flex justify-center">
         "There are no posts"->Utils.ste
       </div>
     | Data(response) =>
       switch (response) {
       | posts =>
         posts
         |> Array.mapi((idx,post )=>
              <div
              key=string_of_int(idx)
                className="bg-white rounded-t-lg overflow-hidden p-4 p-10 flex justify-center">
                <Post post />
              </div>
            )
         |> ReasonReact.array
       }
     }}
  </div>;
};
