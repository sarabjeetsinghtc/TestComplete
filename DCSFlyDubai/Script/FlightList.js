var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsFlightListScreenDisplayed(){
      var FlightListBreadcrumb = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 2).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");           
      if(FlightListBreadcrumb.WPFControlText == "Flight List" && FlightListBreadcrumb.Enabled == false ){
          Log.Message("Flight List screen is displayed");
      }
      else{
          Log.Warning("Landed on unexpected page");
      }
}

module.exports.IsFlightListScreenDisplayed=IsFlightListScreenDisplayed;
