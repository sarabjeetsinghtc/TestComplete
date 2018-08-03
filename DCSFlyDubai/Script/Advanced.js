var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsAdvancedScreenDisplayed(){
            var BreadcrumbBasic = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 3).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");
            if(BreadcrumbBasic.WPFControlText == "Advanced" && BreadcrumbBasic.Enabled == false){
                    Log.Message("Navigated to Advanced screen");
            }
            else{
                   Log.Warning("Landed on unexpected page");
            }
}   

function WalkThroughTabsUnderAdvanced(){
            for(var i=1;i<7;i++){
                    var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("TabItem", "", i);
                    Tab.Click();
                    aqUtils.Delay(4000);
            }
}

function NavigateToBasicScreen(){
            Common.SafeClickObject(HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("basicMode"),5);
}

function NavigateToSpecificTab(TabIndex){
          var Tabs = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",20).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",10).WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid");
          Tabs.WPFObject("Tab").WPFObject("TabItem", "", TabIndex).Click();
}

function NavigateSSRAndComments(){
                   var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("TabItem", "", 2);
                   Tab.Click();
}

module.exports.IsAdvancedScreenDisplayed = IsAdvancedScreenDisplayed;
module.exports.WalkThroughTabsUnderAdvanced = WalkThroughTabsUnderAdvanced;
module.exports.NavigateToBasicScreen = NavigateToBasicScreen;
module.exports.NavigateToSpecificTab=NavigateToSpecificTab;
module.exports.NavigateSSRAndComments = NavigateSSRAndComments;