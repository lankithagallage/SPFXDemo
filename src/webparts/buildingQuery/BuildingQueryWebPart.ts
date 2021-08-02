import { UrlQueryParameterCollection, Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './BuildingQueryWebPart.module.scss';
import * as strings from 'BuildingQueryWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';
import pnp, { sp, Item, ItemAddResult, ItemUpdateResult, Web } from 'sp-pnp-js';
import * as $ from 'jquery';
require('bootstrap');
let bootcss = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
let iconcss = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
SPComponentLoader.loadCss(bootcss);
SPComponentLoader.loadCss(iconcss);
SPComponentLoader.loadScript("https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js");

export interface IBuildingQueryWebPartProps {
  description: string;
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}

export default class BuildingQueryWebPart extends BaseClientSideWebPart<IBuildingQueryWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
        <form>
            <div class="row">
                <div class="col col-12">
                    <h4>Easy Search</h4>
                </div>
                <div class="col col-12 border">
                    <div class="py-2">
                        <div class="input-group">
                            <input type="text"
                                   class="form-control border-0 px-0"
                                   placeholder="Enter Keyword"
                                   aria-label="Enter Keyword"
                                   aria-describedby="txt-building-no" />
                            <span class="input-group-text bg-white border-0">
                                <i class="bi bi-search"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col col-12 border">
                    <div class="py-2">
                        <div class="row">
                            <div class="col col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Building Number</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-building"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">CMR Category</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-bookmark"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Registration Category</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-pencil"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Modified By</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-person"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Type</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-justify"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Insuarance Category</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-bookmark"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Access Rights</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-shield-lock"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-group">
                                    <label class="form-label"
                                           for="txt-building-no">Modified</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-white">
                                            <i class="bi bi-calendar"></i>
                                        </span>
                                        <input type="text"
                                               class="form-control"
                                               aria-label="Building No"
                                               aria-describedby="txt-building-no"
                                               placeholder="Pick or enter a date" />
                                    </div>
                                </div>
                            </div>

                            <div class="col col-md-4 col-sm-12">
                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Agreements Category</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-file-medical"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Registered Category</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-file-text"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Creator</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-person-check"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"
                                           for="txt-building-no">Architectural Plans</label>

                                    <div class="input-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-white">
                                                <i class="bi bi-easel"></i>
                                            </span>
                                            <select class="form-select form-control"
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon">
                                                <option selected>(All)</option>
                                                <option value="1">12345</option>
                                                <option value="2">12346</option>
                                                <option value="3">12347</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-12">
                                <div class="d-flex justify-content-end">
                                    <button type="button"
                                            class="btn btn-link border">Search now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`;
  }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /*#region custom functions*/

  public PopulateSubCategory() {
    this.getSubCategoryData($("#ddlCategory").val().toString());
  }

  private _getSubCategoryData(category): any {    
    return pnp.sp.web.lists.getByTitle("SubCategory").items.select("SubCategory").filter("Category eq '" + category + "'").getAll().then((response) => {
      return response;
    });
  }

  private getSubCategoryData(category): any {
    this._getSubCategoryData(category)
      .then((response) => {
        this._renderSubCategoryList(response);
      });
  }

  private CancelForm() {
    window.location.href = this.GetQueryStringByParameter("Source");
  }

  private GetQueryStringByParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  private SubmitData() {
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
}
  
private GetUserId(userName) {
  var siteUrl = this.context.pageContext.web.absoluteUrl;

  var call = $.ajax({
    url: siteUrl + "/_api/web/siteusers/getbyloginname(@v)?@v=%27i:0%23.f|membership|" + userName + "%27",
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },
    async: false,
    dataType: 'json'
  }).responseJSON;
  return call;
}
  /*#endregion custom functions*/
  
  private _renderSubCategoryList(items: any): void {

    let html: string = '';
    html += `<option value="Select Sub Category" selected>Select Sub Category</option>`;
    items.forEach((item: any) => {
      html += `
       <option value="${item.SubCategory}">${item.SubCategory}</option>`;
    });
    const listContainer1: Element = this.domElement.querySelector('#ddlSubCategory');
    listContainer1.innerHTML = html;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
