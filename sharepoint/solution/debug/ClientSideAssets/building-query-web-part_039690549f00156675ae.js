define("cc8a9c9d-afef-40f2-b460-3e595d42c5e5_0.0.1",["@microsoft/sp-property-pane","BuildingQueryWebPartStrings","@microsoft/sp-loader","bootstrap","@microsoft/sp-core-library","@microsoft/sp-webpart-base"],function(n,o,t,e,i,l){return function(n){var o={};function t(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=o,t.d=function(n,o,e){t.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,o){if(1&o&&(n=t(n)),8&o)return n;if(4&o&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var i in n)t.d(e,i,function(o){return n[o]}.bind(null,i));return e},t.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},t.p="",t(t.s="A8Oq")}({"26ea":function(o,t){o.exports=n},A8Oq:function(n,o,t){"use strict";t.r(o);var e,i=t("UWqr"),l=t("26ea"),s=t("br4S"),a=t("FESj"),r=t("I6O9"),p=(e=function(n,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var t in o)o.hasOwnProperty(t)&&(n[t]=o[t])})(n,o)},function(n,o){function t(){this.constructor=n}e(n,o),n.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)});t("StVt"),r.SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"),r.SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");var c=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return p(o,n),o.prototype.render=function(){this.domElement.innerHTML='\n        <form method="get">\n            <div class="row">\n                <div class="col col-12">\n                    <h5>Easy Search</h5>\n                </div>\n                <div class="col col-12 border">\n                    <div class="py-2">\n                        <div class="input-group">\n                            <input type="text"\n                                   class="form-control border-0 px-0"\n                                   placeholder="Enter Keyword"\n                                   aria-label="Enter Keyword"\n                                   aria-describedby="txt-building-no" />\n                            <span class="input-group-text bg-white border-0">\n                                <i class="bi bi-search"></i>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="col col-12 border">\n                    <div class="py-2">\n                        <div class="row">\n                            <div class="col col-md-4 col-sm-12">\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Building Number</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-building"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    name="bi-number"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option value="0" selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">CMR Category</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-bookmark"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Registration Category</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-pencil"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Modified By</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-person"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col col-md-4 col-sm-12">\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Type</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-justify"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Insuarance Category</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-bookmark"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Access Rights</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-shield-lock"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="input-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Modified</label>\n                                    <div class="input-group mb-3">\n                                        <span class="input-group-text bg-white">\n                                            <i class="bi bi-calendar"></i>\n                                        </span>\n                                        <input type="text"\n                                               class="form-control"\n                                               aria-label="Building No"\n                                               aria-describedby="txt-building-no"\n                                               placeholder="Pick or enter a date" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col col-md-4 col-sm-12">\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Agreements Category</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-file-medical"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Registered Category</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-file-text"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Creator</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-person-check"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class="form-group">\n                                    <label class="form-label"\n                                           for="txt-building-no">Architectural Plans</label>\n\n                                    <div class="input-group">\n                                        <div class="input-group mb-3">\n                                            <span class="input-group-text bg-white">\n                                                <i class="bi bi-easel"></i>\n                                            </span>\n                                            <select class="form-select form-control"\n                                                    \n                                                    aria-label="Example select with button addon">\n                                                <option selected>(All)</option>\n                                                <option value="1">12345</option>\n                                                <option value="2">12346</option>\n                                                <option value="3">12347</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="col col-12">\n                                <div class="d-flex justify-content-end">\n                                    <input type="submit" class="btn btn-link border" value="Search now" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>'},Object.defineProperty(o.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),o.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:a.PropertyPaneDescription},groups:[{groupName:a.BasicGroupName,groupFields:[Object(l.PropertyPaneTextField)("description",{label:a.DescriptionFieldLabel})]}]}]}},o}(s.BaseClientSideWebPart);o.default=c},FESj:function(n,t){n.exports=o},I6O9:function(n,o){n.exports=t},StVt:function(n,o){n.exports=e},UWqr:function(n,o){n.exports=i},br4S:function(n,o){n.exports=l}})});