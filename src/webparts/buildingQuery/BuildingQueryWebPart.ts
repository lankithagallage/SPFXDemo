import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'BuildingQueryWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';

require('bootstrap');
let bootcss = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
let iconcss = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
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

  public render(): void {
    this.domElement.innerHTML = `
        <form method="get">
            <div class="row">
                <div class="col col-12">
                    <h5>Easy Search</h5>
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
                                                    name="bi-number"
                                                    
                                                    aria-label="Example select with button addon">
                                                <option value="0" selected>(All)</option>
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
                                    <input type="submit" class="btn btn-link border" value="Search now" />
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
