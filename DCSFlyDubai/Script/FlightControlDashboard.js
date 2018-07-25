var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsFCDashboardScreenDisplayed(){
          var FCDashboardBreadcrumb = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");
          if(FCDashboardBreadcrumb.WPFControlText == "Flight Control Dashboard" && FCDashboardBreadcrumb.Enabled == false){
              Log.Message("Navigated to Flight Control Dashboard screen");
          }
          else{
              Log.Warning("Landed on unexpected page");
          }  
}

module.exports.IsFCDashboardScreenDisplayed = IsFCDashboardScreenDisplayed;