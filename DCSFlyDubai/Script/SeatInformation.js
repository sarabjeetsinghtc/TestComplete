var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsSeatInformationDisplayed(){
        Common.WaitForObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("SeatInformationTabView", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("seatMap"),20);
        Log.Message("Object Displayed");     
}

function SelectSeatFromSeatMap(){
          var IsSeatSelected = false;
          for(var j=7;j<31;j++){
              for(var i=1;i<9;i++){
                          if(i != 4 && i !=5){                          
                                 var Seat = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("SeatInformationTabView", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("seatMap").WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("SeatRowList").WPFObject("ListBoxItem", "", j).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 3).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("seatZone").WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", i).WPFObject("ContentControl", "", 1).WPFObject("SeatButton", "*", 1);
                                  if(Seat.CurrentStatus == "AVAILABLE" && Seat.hasPrice != true){   
                                  Seat.Click();
                                  aqUtils.Delay(5000);
                                  IsSeatSelected = true;
                                  break;                               
                                  }
                          }                         
              }                                             
              if(IsSeatSelected)
                break;               
          }

}

module.exports.IsSeatInformationDisplayed = IsSeatInformationDisplayed;
module.exports.SelectSeatFromSeatMap = SelectSeatFromSeatMap;