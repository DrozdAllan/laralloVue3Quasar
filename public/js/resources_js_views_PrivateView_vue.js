"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_PrivateView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/user */ "./resources/js/store/user.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var userStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore)();
    var channelForm = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var messages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var channelValid = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
    var channelName = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('');
    var messageField = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var messageToSend = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    var channelNameRules = [function (value) {
      return !!value || "Required.";
    }, function (value) {
      return /^[A-z\d]*$/.test(value) || 'Channel name is invalid';
    }];

    function validateChannel() {
      return _validateChannel.apply(this, arguments);
    }

    function _validateChannel() {
      _validateChannel = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var success;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return channelForm.value.validate();

              case 2:
                success = _context.sent;

                if (success) {
                  messageField.value = true;
                  connectToChannel();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _validateChannel.apply(this, arguments);
    }

    function sendMessage() {
      if (messageToSend.value !== '') {
        axios.post("/privateChannel", {
          channelName: channelName.value,
          message: messageToSend.value
        });
        messageToSend.value = '';
      }
    }

    function connectToChannel() {
      Echo["private"](channelName.value).listen("PrivateMessageEvent", function (data) {
        messages.value.push(data);
      });
    }

    function stopChannel() {
      Echo.leaveChannel(channelName.value);
      channelName.value = '';
      messageField.value = false;
      messages.value = null;
    }

    var __returned__ = {
      userStore: userStore,
      channelForm: channelForm,
      messages: messages,
      channelValid: channelValid,
      channelName: channelName,
      messageField: messageField,
      messageToSend: messageToSend,
      channelNameRules: channelNameRules,
      validateChannel: validateChannel,
      sendMessage: sendMessage,
      connectToChannel: connectToChannel,
      stopChannel: stopChannel,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      useUserStore: _store_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-center q-py-3 text-primary text-weight-bold"
}, "Private Channels", -1
/* HOISTED */
);

var _hoisted_2 = {
  key: 0,
  "class": "q-pa-md row justify-center"
};
var _hoisted_3 = {
  style: {
    "width": "100%"
  }
};
var _hoisted_4 = {
  key: 1,
  "class": "row justify-center q-pa-md"
};
var _hoisted_5 = {
  "class": "col-6 text-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Connect ");

var _hoisted_7 = {
  key: 2,
  "class": "text-center"
};
var _hoisted_8 = {
  "class": "col-12 q-pa-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");

  var _component_q_chat_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-chat-message");

  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");

  var _component_q_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-form");

  var _component_q_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-icon");

  var _component_q_page_sticky = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-page-sticky");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, $setup.messageField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
    onClick: $setup.stopChannel,
    color: "negative",
    "no-caps": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Stop listening to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.channelName), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.messages, function (message) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_chat_message, {
      name: message.username,
      text: [message.message],
      sent: message.username === $setup.userStore.user.name,
      stamp: message.date
    }, null, 8
    /* PROPS */
    , ["name", "text", "sent", "stamp"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.userStore.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [!$setup.messageField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_form, {
    key: 0,
    ref: "channelForm"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        outlined: "",
        modelValue: $setup.channelName,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.channelName = $event;
        }),
        rules: $setup.channelNameRules,
        label: "Select the channel name you want to connect to",
        onKeydown: [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["space"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.validateChannel, ["enter"])]
      }, null, 8
      /* PROPS */
      , ["modelValue", "onKeydown"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        disable: !$setup.channelValid,
        color: "primary",
        onClick: $setup.validateChannel
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disable"])];
    }),
    _: 1
    /* STABLE */

  }, 512
  /* NEED_PATCH */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, " You must be connected to use private channels ")), $setup.messageField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_page_sticky, {
    key: 3,
    expand: "",
    position: "bottom"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        standout: "bg-primary text-white",
        modelValue: $setup.messageToSend,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.messageToSend = $event;
        }),
        label: "Enter your message (do not send private data)",
        onKeydown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.sendMessage, ["enter"])
      }, {
        after: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
            name: "send",
            color: $setup.messageToSend === '' ? undefined : 'primary',
            onClick: $setup.sendMessage
          }, null, 8
          /* PROPS */
          , ["color"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "onKeydown"])])];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/views/PrivateView.vue":
/*!********************************************!*\
  !*** ./resources/js/views/PrivateView.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrivateView_vue_vue_type_template_id_70b0530e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivateView.vue?vue&type=template&id=70b0530e */ "./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e");
/* harmony import */ var _PrivateView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateView.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_ProjetsDev_ProjetsEnCours_laralloVue3QuasarCDN_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_ProjetsDev_ProjetsEnCours_laralloVue3QuasarCDN_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PrivateView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrivateView_vue_vue_type_template_id_70b0530e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/PrivateView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrivateView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrivateView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrivateView.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e":
/*!**************************************************************************!*\
  !*** ./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrivateView_vue_vue_type_template_id_70b0530e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrivateView_vue_vue_type_template_id_70b0530e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrivateView.vue?vue&type=template&id=70b0530e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/PrivateView.vue?vue&type=template&id=70b0530e");


/***/ })

}]);