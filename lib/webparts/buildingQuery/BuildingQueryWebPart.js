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
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'BuildingQueryWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
import pnp from 'sp-pnp-js';
import * as $ from 'jquery';
require('bootstrap');
var bootcss = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
var iconcss = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
SPComponentLoader.loadCss(bootcss);
SPComponentLoader.loadCss(iconcss);
SPComponentLoader.loadScript("https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js");
var BuildingQueryWebPart = /** @class */ (function (_super) {
    __extends(BuildingQueryWebPart, _super);
    function BuildingQueryWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuildingQueryWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n        <form>\n            <div class=\"row\">\n                <div class=\"col col-12\">\n                    <h4>Easy Search</h4>\n                </div>\n                <div class=\"col col-12 border\">\n                    <div class=\"py-2\">\n                        <div class=\"input-group\">\n                            <input type=\"text\"\n                                   class=\"form-control border-0 px-0\"\n                                   placeholder=\"Enter Keyword\"\n                                   aria-label=\"Enter Keyword\"\n                                   aria-describedby=\"txt-building-no\" />\n                            <span class=\"input-group-text bg-white border-0\">\n                                <i class=\"bi bi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col col-12 border\">\n                    <div class=\"py-2\">\n                        <div class=\"row\">\n                            <div class=\"col col-md-4 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Building Number</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-building\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">CMR Category</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-bookmark\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Registration Category</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-pencil\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Modified By</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-person\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col col-md-4 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Type</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-justify\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Insuarance Category</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-bookmark\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Access Rights</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-shield-lock\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"input-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Modified</label>\n                                    <div class=\"input-group mb-3\">\n                                        <span class=\"input-group-text bg-white\">\n                                            <i class=\"bi bi-calendar\"></i>\n                                        </span>\n                                        <input type=\"text\"\n                                               class=\"form-control\"\n                                               aria-label=\"Building No\"\n                                               aria-describedby=\"txt-building-no\"\n                                               placeholder=\"Pick or enter a date\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col col-md-4 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Agreements Category</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-file-medical\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Registered Category</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-file-text\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Creator</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-person-check\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label class=\"form-label\"\n                                           for=\"txt-building-no\">Architectural Plans</label>\n\n                                    <div class=\"input-group\">\n                                        <div class=\"input-group mb-3\">\n                                            <span class=\"input-group-text bg-white\">\n                                                <i class=\"bi bi-easel\"></i>\n                                            </span>\n                                            <select class=\"form-select form-control\"\n                                                    id=\"inputGroupSelect04\"\n                                                    aria-label=\"Example select with button addon\">\n                                                <option selected>(All)</option>\n                                                <option value=\"1\">12345</option>\n                                                <option value=\"2\">12346</option>\n                                                <option value=\"3\">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col col-12\">\n                                <div class=\"d-flex justify-content-end\">\n                                    <button type=\"button\"\n                                            class=\"btn btn-link border\">Search now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>";
    };
    Object.defineProperty(BuildingQueryWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    /*#region custom functions*/
    BuildingQueryWebPart.prototype.PopulateSubCategory = function () {
        this.getSubCategoryData($("#ddlCategory").val().toString());
    };
    BuildingQueryWebPart.prototype._getSubCategoryData = function (category) {
        return pnp.sp.web.lists.getByTitle("SubCategory").items.select("SubCategory").filter("Category eq '" + category + "'").getAll().then(function (response) {
            return response;
        });
    };
    BuildingQueryWebPart.prototype.getSubCategoryData = function (category) {
        var _this = this;
        this._getSubCategoryData(category)
            .then(function (response) {
            _this._renderSubCategoryList(response);
        });
    };
    BuildingQueryWebPart.prototype.CancelForm = function () {
        window.location.href = this.GetQueryStringByParameter("Source");
    };
    BuildingQueryWebPart.prototype.GetQueryStringByParameter = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    BuildingQueryWebPart.prototype.SubmitData = function () {
        /*
      var userinfo = (<any>$('#ppDefault')).spPeoplePicker('get');
      var userId;
      var userDetails = this.GetUserId(userinfo[0].email.toString());
      console.log(JSON.stringify(userDetails));
      userId = userDetails.d.Id;
    
      pnp.sp.web.lists.getByTitle('RigActiveList_Job_Cards_Area').items.add({
        Title: "Test",
        Activity: $("#txtActivity").val().toString(),
        Activity_Date: $("#txtDate").val().toString(),
        Activity_ById : userId,
        Category: $("#ddlCategory").val().toString(),
        SubCategory: $("#ddlSubCategory").val().toString(),
      });*/
    };
    BuildingQueryWebPart.prototype.GetUserId = function (userName) {
        var siteUrl = this.context.pageContext.web.absoluteUrl;
        var call = $.ajax({
            url: siteUrl + "/_api/web/siteusers/getbyloginname(@v)?@v=%27i:0%23.f|membership|" + userName + "%27",
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            async: false,
            dataType: 'json'
        }).responseJSON;
        return call;
    };
    /*#endregion custom functions*/
    BuildingQueryWebPart.prototype._renderSubCategoryList = function (items) {
        var html = '';
        html += "<option value=\"Select Sub Category\" selected>Select Sub Category</option>";
        items.forEach(function (item) {
            html += "\n       <option value=\"" + item.SubCategory + "\">" + item.SubCategory + "</option>";
        });
        var listContainer1 = this.domElement.querySelector('#ddlSubCategory');
        listContainer1.innerHTML = html;
    };
    BuildingQueryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return BuildingQueryWebPart;
}(BaseClientSideWebPart));
export default BuildingQueryWebPart;
//# sourceMappingURL=BuildingQueryWebPart.js.map