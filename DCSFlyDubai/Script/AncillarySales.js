var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function AddAncillaryServices(){
          Common.WaitForObject(HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",20).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).Find("WPFControlName","GridToggleButton",100),20);
          var Expand =HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",20).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).Find("WPFControlName","GridToggleButton",100);
          if(Expand.wState == 0)
               Common.SafeClickObject(Expand.WPFObject("Image", "", 1),15);
          aqUtils.Delay(2000);
          var AncillaryServiceList = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",20).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).Find("WPFControlName","parentList",50).FindAll("ClrClassName","ListViewItem",10);     
          var Services = [];
          Log.Message(AncillaryServiceList.length);
          for(var i=0;i<AncillaryServiceList.length;i++){
                Services[i]=AncillaryServiceList[i].WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("CheckBox", "*", 1).WPFControlText;
                Common.SafeClickObject(AncillaryServiceList[i].WPFObject("Grid", "", 1).WPFObject("CompletedComboBoxToggleAST").WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("chkSelectAllPassenger"),10);
          }
          var GrandTotal = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CheckinMainViewContent", 20).WPFObject("TopWindow").Find("WPFControlName", "basicTabsContent", 10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).Find("ClrClassName", "TextBlock", 50).WPFControlText;
          Services[Services.length] = GrandTotal;
          var AddServiceButton = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CheckinMainViewContent", 20).WPFObject("TopWindow").Find("WPFControlName", "basicTabsContent", 10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).Find(new Array("ClrClassName","WPFControlText"), new Array("Button","Add Service"),30);
          Common.SafeClickObject(AddServiceButton,5);
          AddServiceButton.WaitProperty("Enabled",false);
          aqUtils.Delay(3000);
          var ServiceUpdateMessage = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("AncillarySalesTabView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("StackPanel", "", 1).WPFObject("StackPanel", "", 1).WPFObject("CustomerMessagesView", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("ContentControl", "Services  Updated Successfully", 3).WPFObject("TextBlock", "Services  Updated Successfully", 1);
          if(ServiceUpdateMessage.Exists)
          Log.Message("Ancillary services are added successfully");   
          return Services; // The array contains the list of services added first followed by the Grand Total value          
}

module.exports.AddAncillaryServices = AddAncillaryServices;