(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You are using an old version of Laratrust. Consider updating to the "),a("docs-link",{attrs:{to:"/installation.html","current-version":""}},[t._v("latest")]),t._v(" version")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("The "),a("docs-link",{attrs:{to:"/usage/middleware.html"}},[t._v("middleware")]),t._v(" are registered automatically as "),a("code",[t._v("role")]),t._v(", "),a("code",[t._v("permission")]),t._v(" and "),a("code",[t._v("ability")]),t._v(" . If you want to customize or change them, please refer to the "),a("docs-link",{attrs:{to:"/usage/middleware.html#configuration"}},[t._v("middleware configuration")])],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("In order to install Laratrust in your Laravel project, just run the "),s("code",[this._v("composer require")]),this._v(" command from your terminal:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("composer")]),this._v(" require "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"santigarcor/laratrust:5.0.*"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("If you are using Laravel 5.5 you don't need to do steps 2 and 3.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("Then in your "),s("code",[this._v("config/app.php")]),this._v(" add the following to the providers array:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[this._v("Laratrust\\"),s("span",{pre:!0,attrs:{class:"token package"}},[this._v("LaratrustServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(",")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("In the same "),s("code",[this._v("config/app.php")]),this._v(" add the following to the "),s("code",[this._v("aliases")]),this._v(" array:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Laratrust'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Laratrust\\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("LaratrustFacade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("Publish all the configuration files:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php artisan vendor:publish --tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"laratrust"')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("If this command did not publish any files, chances are, the Laratrust service provider hasn't been registered. Try clearing your configuration cache")]),this._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php artisan config:clear\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);