'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _easy_code_prettify = require('./easy_code_prettify');

var _easy_code_prettify2 = _interopRequireDefault(_easy_code_prettify);

var _fit_sidebar = require('./fit_sidebar');

var _fit_sidebar2 = _interopRequireDefault(_fit_sidebar);

var _fade_page = require('./fade_page');

var _fade_page2 = _interopRequireDefault(_fade_page);

var _picasa_zoom = require('./picasa_zoom');

var _picasa_zoom2 = _interopRequireDefault(_picasa_zoom);

var _toc = require('./toc');

var _toc2 = _interopRequireDefault(_toc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_fit_sidebar2.default.define();
_picasa_zoom2.default.define();
_easy_code_prettify2.default.define();

var App = function App() {
  _classCallCheck(this, App);

  setTimeout(function () {
    (0, _jquery2.default)('div.article__body').easyCodePrettify();
    (0, _fade_page2.default)();
    (0, _toc2.default)();
    (0, _jquery2.default)('.article__body img').each(function () {
      (0, _jquery2.default)(this).prop('alt').search('picasa-zoom') == -1 || (0, _jquery2.default)(this).picasaZoom();
    });
  }, 0);
};

exports.default = App;