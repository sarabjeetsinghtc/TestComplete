var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsPassengerListScreenDisplayed(FlightNum){
          var FlightNumBreadcrumb = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 2).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");           
          if(FlightNumBreadcrumb.WPFControlText ==  aqString.SubString(FlightNum,0,6) && FlightNumBreadcrumb.Enabled == false ){
              Log.Message("Passenger List screen is displayed");
          }
          else{
              Log.Warning("Landed on unexpected page");
          }
}

function SelectPassengerFromTheList(PNR){
        var PassengerGrid = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("FlightSelectPassengerResults").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("parentBdr").WPFObject("Grid", "", 1).WPFObject("headerGrid").WPFObject("ScrollViewer", "", 1).WPFObject("ParentDataGrid");
        Log.Message(PassengerGrid.Items.Count );
        if(PassengerGrid.Items.Count > 0){
              Log.Message("Passengers are available");
              for(var i=1;i<PassengerGrid.Items.Count+1;i++){
                  var CheckPNR= PassengerGrid.WPFObject("DataGridRow", "", i).WPFObject("DataGridCell", "", 4).WPFObject("ContentPresenter", "", 1).WPFObject("TextBlock", "*", 1);
                  if(CheckPNR.WPFControlText == PNR){
                      CheckPNR.DblClick();
                      break;
                  }
              }              
        }
        else{
              Log.Message("There are no passengers available");
        }
        
}

module.exports.IsPassengerListScreenDisplayed = IsPassengerListScreenDisplayed;
module.exports.SelectPassengerFromTheList = SelectPassengerFromTheList;
