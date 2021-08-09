import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";

import { sp, Lists, ILists } from "@pnp/sp/presets/all";
import { sp as spMain } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/clientside-pages/web";
import { ClientsideWebpart } from "@pnp/sp/clientside-pages";
import { setup as pnpSetup } from "@pnp/common";

import * as strings from "BuildingQueryWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";

import * as $ from "jquery";
require("bootstrap");
let bootcss =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
let iconcss =
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
SPComponentLoader.loadCss(bootcss);
SPComponentLoader.loadCss(iconcss);

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
  private pageSP = null;
  private url =
    "https://flyntlabs.sharepoint.com/sites/template-one/Shared%20Documents/Forms/documentswithsearch.aspx";
  private filter = "";
  constructor(props: any) {
    super();

    //this.select();
  }

  public onInit(): Promise<void> {
    return super.onInit().then(async () => {   

      sp.setup({
        spfxContext: this.context,
      });

      /*
      this.pageSP = await sp.web.loadClientsidePage(
        "/sites/template-one/SitePages/Building-Info.aspx"
      );
      let control = this.pageSP.findControlById(
        "83643d74-718e-45c1-91da-58ad81d8a97b"
      );
      console.log(control);
      control.setProperties({
        embedCode: "https://www.youtube.com/watch?v=X4YK-DEkvcw",
      });
      */
      //console.log(control.getProperties());
      const item = await sp.web.lists
        .getById("99025f93-2ee7-4731-847c-f3b34ab3956d")
        .items.getById(2)
        .get();
      //var result = await this.pageSP.save();

      //control(item).refresh();
      //control.data = item;

      /*
      const parts = await sp.web.getClientsideWebParts();
      const partDef = parts.filter(
        (c) => c.Id === "f92bf067-bc19-489e-a556-7fe95f508720"
      );
      const part = ClientsideWebpart.fromComponentDef(partDef[0]);
      part.setProperties({
        isDocumentLibrary: true,
        selectedListId: "99025f93-2ee7-4731-847c-f3b34ab3956d",
        listTitle: "Building Information",
        selectedListUrl:
          "sites/template-one/Shared%20Documents/Forms/documentswithsearch.aspx?sortField=BuildingNumber&isAscending=true&viewid=941ce346-a9f0-4e5c-821d-a2aa8ef781b5",
        webRelativeListUrl: "/Shared Documents",
        webpartHeightKey: 4,
        selectedViewId: "da47ddd6-db6a-4d60-8e8d-710e68b8319c",
        selectedFolderPath: "",
        hideCommandBar: false,
      });

      var tblv = document.getElementById(
        "8736b1df-3dd1-4189-ba86-62e59b8dec21"
      );
      console.log(tblv);

      this.pageSP.addSection().addControl(part);
      var result = await this.pageSP.save();
      //console.log(part);
      //var items = await list.items.get();

      //console.table(item);
      //console.log(control);
      */
    });
  }

  public render(): void {
    this.domElement.innerHTML =
      `
      <div style="height:900px">
        <form>
          <div class="row">
            <div class="col col-12">
              <h5>Easy Search</h5>
            </div>
            <div class="col col-12 border">
              <div class="py-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-0 px-0"
                    placeholder="Enter Keyword"
                    aria-label="Enter Keyword"
                    aria-describedby="txt-building-no"
                  />
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
                      <label class="form-label" for="txt-building-no">
                        Building Number
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-building"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            name="bi-number"
                            aria-label="Example select with button addon"
                          >
                            <option value="0" selected>
                              (All)
                            </option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        CMR Category
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-bookmark"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Registration Category
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-pencil"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Modified By
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-person"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
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
                      <label class="form-label" for="txt-building-no">
                        Type
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-justify"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Insuarance Category
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-bookmark"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Access Rights
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-shield-lock"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="input-group">
                      <label class="form-label" for="txt-building-no">
                        Modified
                      </label>
                      <div class="input-group mb-3">
                        <span class="input-group-text bg-white">
                          <i class="bi bi-calendar"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Building No"
                          aria-describedby="txt-building-no"
                          placeholder="Pick or enter a date"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col col-md-4 col-sm-12">
                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Agreements Category
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-file-medical"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Registered Category
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-file-text"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Creator
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-person-check"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
                            <option selected>(All)</option>
                            <option value="1">12345</option>
                            <option value="2">12346</option>
                            <option value="3">12347</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="txt-building-no">
                        Architectural Plans
                      </label>

                      <div class="input-group">
                        <div class="input-group mb-3">
                          <span class="input-group-text bg-white">
                            <i class="bi bi-easel"></i>
                          </span>
                          <select
                            class="form-select form-control"
                            aria-label="Example select with button addon"
                          >
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
                      <input
                       type="button" 
                       id="btnSubmit"
                        class="btn btn-link border"
                        value="Search now"
                      />
                      <input
                       type="button" 
                       id="btnCancel"
                        class="btn btn-link border"
                        value="Clear"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div style="height:400px">
        <iframe width="100%" height="400" id="divFrame" src="` +
        this.url +
        this.filter +
        `" frameborder="0" allowfullscreen="" tabindex="0" role="none" style="z-index: 4;"></iframe>
        </div>
      </div>`;

    this.AddEventListeners();
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  //#region custom functions

  private AddEventListeners(): any {
    document
      .getElementById("btnSubmit")
      .addEventListener("click", () => this.SubmitData());
  }

  private SubmitData() {
    this.filter =
      "?useFiltersInViewXml=1&FilterField1=BuildingNumber&FilterValue1=3839%2E00000000000&FilterType1=Number&FilterOp1=In";
    var div = document.getElementById("divFrame");
    div.setAttribute("src", this.url + this.filter);
  }

  //#endregion

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
