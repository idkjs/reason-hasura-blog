

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as ApolloHooks from "reason-apollo-hooks/src/ApolloHooks.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Post$ReasonHasuraBlog from "./Post.bs.js";
import * as Utils$ReasonHasuraBlog from "../utils/Utils.bs.js";

var ppx_printed_query = "subscription getPosts  {\nposts(order_by: {created_at: desc})  {\ntitle  \ncover_img  \ncontent  \ncreated_at  \nuser  {\nname  \navatar_url  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var value$2 = Js_dict.get(value$1, "posts");
  return {
          posts: value$2 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(value$2))).map(function (value) {
                  var value$1 = Js_json.decodeObject(value);
                  if (value$1 === undefined) {
                    return Js_exn.raiseError("graphql_ppx: Expected object of type posts, got " + JSON.stringify(value));
                  }
                  var value$2 = Caml_option.valFromOption(value$1);
                  var value$3 = Js_dict.get(value$2, "title");
                  var field_title;
                  if (value$3 !== undefined) {
                    var value$4 = Caml_option.valFromOption(value$3);
                    var value$5 = Js_json.decodeString(value$4);
                    field_title = value$5 !== undefined ? value$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                  } else {
                    field_title = Js_exn.raiseError("graphql_ppx: Field title on type posts is missing");
                  }
                  var value$6 = Js_dict.get(value$2, "cover_img");
                  var field_cover_img;
                  if (value$6 !== undefined) {
                    var value$7 = Caml_option.valFromOption(value$6);
                    var match = Js_json.decodeNull(value$7);
                    if (match !== undefined) {
                      field_cover_img = undefined;
                    } else {
                      var value$8 = Js_json.decodeString(value$7);
                      field_cover_img = value$8 !== undefined ? value$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$7));
                    }
                  } else {
                    field_cover_img = undefined;
                  }
                  var value$9 = Js_dict.get(value$2, "content");
                  var field_content;
                  if (value$9 !== undefined) {
                    var value$10 = Caml_option.valFromOption(value$9);
                    var value$11 = Js_json.decodeString(value$10);
                    field_content = value$11 !== undefined ? value$11 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$10));
                  } else {
                    field_content = Js_exn.raiseError("graphql_ppx: Field content on type posts is missing");
                  }
                  var value$12 = Js_dict.get(value$2, "created_at");
                  var field_created_at = value$12 !== undefined ? Caml_option.valFromOption(value$12) : Js_exn.raiseError("graphql_ppx: Field created_at on type posts is missing");
                  var value$13 = Js_dict.get(value$2, "user");
                  var field_user;
                  if (value$13 !== undefined) {
                    var value$14 = Caml_option.valFromOption(value$13);
                    var value$15 = Js_json.decodeObject(value$14);
                    if (value$15 !== undefined) {
                      var value$16 = Caml_option.valFromOption(value$15);
                      var value$17 = Js_dict.get(value$16, "name");
                      var field_name;
                      if (value$17 !== undefined) {
                        var value$18 = Caml_option.valFromOption(value$17);
                        var value$19 = Js_json.decodeString(value$18);
                        field_name = value$19 !== undefined ? value$19 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$18));
                      } else {
                        field_name = Js_exn.raiseError("graphql_ppx: Field name on type users is missing");
                      }
                      var value$20 = Js_dict.get(value$16, "avatar_url");
                      var field_avatar_url;
                      if (value$20 !== undefined) {
                        var value$21 = Caml_option.valFromOption(value$20);
                        var value$22 = Js_json.decodeString(value$21);
                        field_avatar_url = value$22 !== undefined ? value$22 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$21));
                      } else {
                        field_avatar_url = Js_exn.raiseError("graphql_ppx: Field avatar_url on type users is missing");
                      }
                      field_user = {
                        name: field_name,
                        avatar_url: field_avatar_url
                      };
                    } else {
                      field_user = Js_exn.raiseError("graphql_ppx: Expected object of type users, got " + JSON.stringify(value$14));
                    }
                  } else {
                    field_user = Js_exn.raiseError("graphql_ppx: Field user on type posts is missing");
                  }
                  return {
                          title: field_title,
                          cover_img: field_cover_img,
                          content: field_content,
                          created_at: field_created_at,
                          user: field_user
                        };
                }) : Js_exn.raiseError("graphql_ppx: Field posts on type subscription_root is missing")
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function definition_2(graphql_ppx_use_json_variables_fn) {
  return 0;
}

var definition = [
  parse,
  ppx_printed_query,
  definition_2
];

function ret_type(f) {
  return {};
}

var MT_Ret = {};

var PostsSubscription = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function postsSubscription(param) {
  var match = ApolloHooks.useSubscription(Caml_option.some(null), undefined, undefined, definition);
  var __x = match[0];
  return Utils$ReasonHasuraBlog.map(__x, (function (x) {
                return x.posts;
              }));
}

function PostsList(Props) {
  var posts = postsSubscription(undefined);
  var tmp;
  if (typeof posts === "number") {
    tmp = posts === /* Loading */0 ? Utils$ReasonHasuraBlog.ste("Loading") : React.createElement("div", {
            className: "bg-white rounded-t-lg overflow-hidden p-4 p-10 flex justify-center"
          }, Utils$ReasonHasuraBlog.ste("There are no posts"));
  } else if (posts.TAG) {
    console.log(posts._0);
    tmp = Utils$ReasonHasuraBlog.ste("Error");
  } else {
    tmp = $$Array.mapi((function (idx, post) {
            return React.createElement("div", {
                        key: String(idx),
                        className: "bg-white rounded-t-lg overflow-hidden p-4 p-10 flex justify-center"
                      }, React.createElement(Post$ReasonHasuraBlog.make, {
                            post: post
                          }));
          }), posts._0);
  }
  return React.createElement("div", undefined, tmp);
}

var make$1 = PostsList;

export {
  PostsSubscription ,
  postsSubscription ,
  make$1 as make,
  
}
/* react Not a pure module */
