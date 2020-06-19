

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as ApolloHooks from "reason-apollo-hooks/src/ApolloHooks.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonApollo from "reason-apollo/src/ReasonApollo.bs.js";

var ppx_printed_query = "mutation addPost($title: String!, $content: String!, $sanitize: Boolean, $coverImg: String)  {\ninsert_posts(objects: [{user_id: \"first-user-with-dummy-id\", title: $title, content: $content, sanitize: $sanitize, cover_img: $coverImg}])  {\naffected_rows  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var value$2 = Js_dict.get(value$1, "insert_posts");
  var tmp;
  if (value$2 !== undefined) {
    var value$3 = Caml_option.valFromOption(value$2);
    var match = Js_json.decodeNull(value$3);
    if (match !== undefined) {
      tmp = undefined;
    } else {
      var value$4 = Js_option.getExn(Js_json.decodeObject(value$3));
      var value$5 = Js_dict.get(value$4, "affected_rows");
      var tmp$1;
      if (value$5 !== undefined) {
        var value$6 = Caml_option.valFromOption(value$5);
        var value$7 = Js_json.decodeNumber(value$6);
        tmp$1 = value$7 !== undefined ? value$7 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$6));
      } else {
        tmp$1 = Js_exn.raiseError("graphql_ppx: Field affected_rows on type posts_mutation_response is missing");
      }
      tmp = {
        affected_rows: tmp$1
      };
    }
  } else {
    tmp = undefined;
  }
  return {
          insert_posts: tmp
        };
}

function make(title, content, sanitize, coverImg, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  [
                    "title",
                    title
                  ],
                  [
                    "content",
                    content
                  ],
                  [
                    "sanitize",
                    sanitize !== undefined ? sanitize : null
                  ],
                  [
                    "coverImg",
                    coverImg !== undefined ? coverImg : null
                  ]
                ].filter(function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var title = variables.title;
  var content = variables.content;
  var sanitize = variables.sanitize;
  var coverImg = variables.coverImg;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  [
                    "title",
                    title
                  ],
                  [
                    "content",
                    content
                  ],
                  [
                    "sanitize",
                    sanitize !== undefined ? sanitize : null
                  ],
                  [
                    "coverImg",
                    coverImg !== undefined ? coverImg : null
                  ]
                ].filter(function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })),
          parse: parse
        };
}

function makeVariables(title, content, sanitize, coverImg, param) {
  return Js_dict.fromArray([
                [
                  "title",
                  title
                ],
                [
                  "content",
                  content
                ],
                [
                  "sanitize",
                  sanitize !== undefined ? sanitize : null
                ],
                [
                  "coverImg",
                  coverImg !== undefined ? coverImg : null
                ]
              ].filter(function (param) {
                  return !Js_json.test(param[1], /* Null */5);
                }));
}

function definition_2(graphql_ppx_use_json_variables_fn, title, content, sanitize, coverImg, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    [
                      "title",
                      title
                    ],
                    [
                      "content",
                      content
                    ],
                    [
                      "sanitize",
                      sanitize !== undefined ? sanitize : null
                    ],
                    [
                      "coverImg",
                      coverImg !== undefined ? coverImg : null
                    ]
                  ].filter(function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    })));
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

var PostMutation = {
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

var AddPostMutation = ReasonApollo.CreateMutation({
      query: ppx_printed_query,
      parse: parse
    });

function AddPostForm(Props) {
  var closeModal = Props.closeModal;
  var match = React.useState(function () {
        return "";
      });
  var setTitle = match[1];
  var title = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setContent = match$1[1];
  var content = match$1[0];
  var match$2 = React.useState(function () {
        return false;
      });
  var setSanitize = match$2[1];
  var sanitize = match$2[0];
  var match$3 = React.useState(function () {
        return "https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
      });
  var setCoverImage = match$3[1];
  var coverImg = match$3[0];
  var match$4 = ApolloHooks.useMutation(undefined, undefined, undefined, undefined, undefined, undefined, definition);
  var addPostMutation = match$4[0];
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    Curry._1(closeModal, undefined);
    Curry._6(addPostMutation, Caml_option.some(makeVariables(title, content, sanitize, coverImg, undefined)), undefined, undefined, undefined, undefined, undefined);
    
  };
  return React.createElement("form", {
              className: "w-full",
              onSubmit: handleSubmit
            }, React.createElement("div", {
                  className: "md:flex md:items-center mb-6"
                }, React.createElement("div", {
                      className: "md:w-1/12"
                    }, React.createElement("label", {
                          className: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
                          htmlFor: "inline-full-name"
                        }, "Title")), React.createElement("div", {
                      className: "md:w-11/12"
                    }, React.createElement("input", {
                          className: "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                          id: "inline-full-name",
                          placeholder: "Enter your title",
                          type: "text",
                          value: title,
                          onChange: (function (e) {
                              return Curry._1(setTitle, e.target.value);
                            })
                        }))), React.createElement("div", {
                  className: "md:flex md:items-center mb-6"
                }, React.createElement("div", {
                      className: "md:w-1/12"
                    }, React.createElement("label", {
                          className: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
                          htmlFor: "inline-image"
                        }, "Cover image url")), React.createElement("div", {
                      className: "md:w-11/12"
                    }, React.createElement("input", {
                          className: "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                          id: "inline-image",
                          type: "text",
                          value: coverImg,
                          onChange: (function (e) {
                              return Curry._1(setCoverImage, e.target.value);
                            })
                        }))), React.createElement("div", {
                  className: "md:flex md:items-center mb-6"
                }, React.createElement("div", {
                      className: "md:w-1/12"
                    }, React.createElement("label", {
                          className: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
                          htmlFor: "inline-username"
                        }, "Content")), React.createElement("div", {
                      className: "md:w-11/12"
                    }, React.createElement("textarea", {
                          className: "h-20 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                          id: "inline-username",
                          placeholder: "Write your post content",
                          type: "text",
                          value: content,
                          onChange: (function (e) {
                              return Curry._1(setContent, e.target.value);
                            })
                        }))), React.createElement("div", {
                  className: "md:flex md:items-center mb-6"
                }, React.createElement("div", {
                      className: "md:w-1/12"
                    }), React.createElement("label", {
                      className: "md:w-11/12 block text-gray-500 font-bold"
                    }, React.createElement("input", {
                          className: "mr-2 leading-tight",
                          checked: sanitize,
                          type: "checkbox",
                          onChange: (function (e) {
                              return Curry._1(setSanitize, e.target.checked);
                            })
                        }), React.createElement("span", {
                          className: "text-sm"
                        }, "Check bad words"))), React.createElement("div", {
                  className: "md:flex md:items-center"
                }, React.createElement("div", {
                      className: "md:w-1/12"
                    }), React.createElement("div", {
                      className: "md:w-11/12"
                    }, React.createElement("button", {
                          className: "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                          type: "submit"
                        }, "Submit"))));
}

var make$1 = AddPostForm;

export {
  PostMutation ,
  AddPostMutation ,
  make$1 as make,
  
}
/* AddPostMutation Not a pure module */
