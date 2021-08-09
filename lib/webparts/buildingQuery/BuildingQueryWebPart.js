var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/clientside-pages/web";
import * as strings from "BuildingQueryWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
require("bootstrap");
var bootcss = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
var iconcss = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
SPComponentLoader.loadCss(bootcss);
SPComponentLoader.loadCss(iconcss);
var BuildingQueryWebPart = /** @class */ (function (_super) {
    __extends(BuildingQueryWebPart, _super);
    function BuildingQueryWebPart(props) {
        var _this = _super.call(this) || this;
        _this.pageSP = null;
        _this.url = "https://flyntlabs.sharepoint.com/sites/template-one/Shared%20Documents/Forms/documentswithsearch.aspx";
        _this.filter = "";
        return _this;
        //this.select();
    }
    BuildingQueryWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function () { return __awaiter(_this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp.setup({
                            spfxContext: this.context,
                        });
                        return [4 /*yield*/, sp.web.lists
                                .getById("99025f93-2ee7-4731-847c-f3b34ab3956d")
                                .items.getById(2)
                                .get()];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BuildingQueryWebPart.prototype.render = function () {
        this.domElement.innerHTML =
            "\n      <div style=\"height:900px\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col col-12\">\n              <h5>Easy Search</h5>\n            </div>\n            <div class=\"col col-12 border\">\n              <div class=\"py-2\">\n                <div class=\"input-group\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control border-0 px-0\"\n                    placeholder=\"Enter Keyword\"\n                    aria-label=\"Enter Keyword\"\n                    aria-describedby=\"txt-building-no\"\n                  />\n                  <span class=\"input-group-text bg-white border-0\">\n                    <i class=\"bi bi-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col col-12 border\">\n              <div class=\"py-2\">\n                <div class=\"row\">\n                  <div class=\"col col-md-4 col-sm-12\">\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Building Number\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-building\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            name=\"bi-number\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option value=\"0\" selected>\n                              (All)\n                            </option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        CMR Category\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-bookmark\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Registration Category\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-pencil\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Modified By\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-person\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col col-md-4 col-sm-12\">\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Type\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-justify\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Insuarance Category\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-bookmark\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Access Rights\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-shield-lock\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"input-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Modified\n                      </label>\n                      <div class=\"input-group mb-3\">\n                        <span class=\"input-group-text bg-white\">\n                          <i class=\"bi bi-calendar\"></i>\n                        </span>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          aria-label=\"Building No\"\n                          aria-describedby=\"txt-building-no\"\n                          placeholder=\"Pick or enter a date\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col col-md-4 col-sm-12\">\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Agreements Category\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-file-medical\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Registered Category\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-file-text\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Creator\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-person-check\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"form-label\" for=\"txt-building-no\">\n                        Architectural Plans\n                      </label>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group mb-3\">\n                          <span class=\"input-group-text bg-white\">\n                            <i class=\"bi bi-easel\"></i>\n                          </span>\n                          <select\n                            class=\"form-select form-control\"\n                            aria-label=\"Example select with button addon\"\n                          >\n                            <option selected>(All)</option>\n                            <option value=\"1\">12345</option>\n                            <option value=\"2\">12346</option>\n                            <option value=\"3\">12347</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col col-12\">\n                    <div class=\"d-flex justify-content-end\">\n                      <input\n                       type=\"button\" \n                       id=\"btnSubmit\"\n                        class=\"btn btn-link border\"\n                        value=\"Search now\"\n                      />\n                      <input\n                       type=\"button\" \n                       id=\"btnCancel\"\n                        class=\"btn btn-link border\"\n                        value=\"Clear\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <iframe width=\"100%\" height=\"400\" id=\"divFrame\" src=\"" +
                this.url +
                this.filter +
                "\" frameborder=\"0\" allowfullscreen=\"\" tabindex=\"0\" role=\"none\" style=\"z-index: 4;\"></iframe>\n      </div>";
        this.AddEventListeners();
    };
    Object.defineProperty(BuildingQueryWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    //#region custom functions
    BuildingQueryWebPart.prototype.AddEventListeners = function () {
        var _this = this;
        document
            .getElementById("btnSubmit")
            .addEventListener("click", function () { return _this.SubmitData(); });
    };
    BuildingQueryWebPart.prototype.SubmitData = function () {
        this.filter =
            "?useFiltersInViewXml=1&FilterField1=BuildingNumber&FilterValue1=3839%2E00000000000&FilterType1=Number&FilterOp1=In";
        var div = document.getElementById("divFrame");
        div.setAttribute("src", this.url + this.filter);
    };
    //#endregion
    BuildingQueryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return BuildingQueryWebPart;
}(BaseClientSideWebPart));
export default BuildingQueryWebPart;
//# sourceMappingURL=BuildingQueryWebPart.js.map