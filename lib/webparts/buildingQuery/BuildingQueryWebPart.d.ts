import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
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
    render(): void;
    protected get dataVersion(): Version;
    PopulateSubCategory(): void;
    private _getSubCategoryData;
    private getSubCategoryData;
    private CancelForm;
    private GetQueryStringByParameter;
    private SubmitData;
    private GetUserId;
    private _renderSubCategoryList;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=BuildingQueryWebPart.d.ts.map