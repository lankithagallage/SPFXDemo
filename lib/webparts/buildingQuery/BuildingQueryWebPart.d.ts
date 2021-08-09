import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import "@pnp/sp/webs";
import "@pnp/sp/clientside-pages/web";
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
    private pageSP;
    private url;
    private filter;
    constructor(props: any);
    onInit(): Promise<void>;
    render(): void;
    protected get dataVersion(): Version;
    private AddEventListeners;
    private SubmitData;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=BuildingQueryWebPart.d.ts.map