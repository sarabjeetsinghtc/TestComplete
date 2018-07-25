var Common = require("Common");
var PassengerList = require("PassengerList");
var BoardedTab = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid;

function DeboardPax(PaxDetails){
        Common.EnterTextInTextBox(BoardedTab.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "", 1).WPFObject("TextBox", "", 1),10,PaxDetails);
        BoardedTab.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "", 2).WPFObject("DeBoardButton").Click();
}

function VerifyDeboardSuccessMessage(){
          if(Common.IsObjectVisibleOnScreen(Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications.Grid,10)){
          var SuccessMessage = aqObject.GetPropertyValue(Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications.Grid.WPFObject("TextBlock", "*", 1),"WPFControlText");
          if(aqString.Find(SuccessMessage,"successfully deboarded"))
          {
               Log.Message("The Passenger(s) is deboarded successfully");
          }
          }  
          else
          {
               Log.Message("Deboarding unsuccessfull");
          } 
}

function NavigateToYetToBoardTab(){
        Common.SafeClickObject(BoardedTab.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("DockPanel", "", 1).WPFObject("StackPanel", "", 1).WPFObject("YetoBoardRadioButton"),10);
}

module.exports.DeboardPax = DeboardPax;
module.exports.VerifyDeboardSuccessMessage = VerifyDeboardSuccessMessage;
module.exports.NavigateToYetToBoardTab = NavigateToYetToBoardTab;