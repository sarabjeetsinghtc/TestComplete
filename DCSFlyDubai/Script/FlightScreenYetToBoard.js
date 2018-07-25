﻿var Common = require("Common");
var PassengerList = require("PassengerList");
var YetToBoard = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid;

function IsYetToBoardScreenDisplayed(FlightNum){
        PassengerList.IsPassengerListScreenDisplayed(FlightNum);
}

function BoardPax(PaxDetails){  
        Common.EnterTextInTextBox(YetToBoard.SeatSeqNumbers,15,PaxDetails);
        YetToBoard.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("GroupBox", "", 2).WPFObject("BoardButton").Click();           
        aqUtils.Delay(1000);
        if(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.Exists==true){
            Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("BoardingCheckpointControl").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("StackPanel", "", 1).WPFObject("btnProcced").Click();
        }
}

function VerifySeccessfulBoarding(PaxData){        
        if(Common.IsObjectVisibleOnScreen(Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications.Grid,10)){
          var SuccessMessage = aqObject.GetPropertyValue(Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications.Grid.WPFObject("TextBlock", "*", 1),"WPFControlText");
          if(aqString.Find(SuccessMessage,"successfully boarded"))
          {
             Log.Message("The Passenger(s) is boarded successfully");
          }
        }  
        else
        {
           Log.Message("Boarding unsuccessfull");
        }       
}

function NavigateToBoardedTab(){
        Common.SafeClickObject(YetToBoard.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("DockPanel", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardedRadioButton"),10);
}

function CheckBoardingRestrictionPopUp(){
      if(Common.IsObjectVisibleOnScreen(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow,10)){
          Log.Message("Boarding Restriction pop up appear; pax with incorrect Seat/Seq can not be Boarded");
      }
}

function PerformOffloadOrOffloadToStandby(Seats,Action){
       var NumOfBoardedPax = YetToBoard.Border.Grid.BoardingPaxListGrid.Items.Count;
       Log.Message(NumOfBoardedPax);
       var SeatFound = false;       
       for(var i=1;i<NumOfBoardedPax+1;i++){
            for(var j=0;j<Seats.length;j++){
                  var PaxSeatCell = YetToBoard.Border.Grid.BoardingPaxListGrid.WPFObject("DataGridRow", "", i).WPFObject("DataGridCell", "", 3).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBlock", "*", 1);
                  if(PaxSeatCell.WPFControlText == Seats[j] && PaxSeatCell.WPFControlText != "INF"){
                        PaxSeatCell.ClickR();
                        SeatFound = true;
                        break;
                  }
            }
            if(SeatFound)
              break;
       }
       aqUtils.Delay(1000);
       
       switch(Action){
            case "Offload":
                  Common.SafeClickObject(Aliases.flydubai_DCS_UI.WPFObject("HwndSource: PopupRoot", "").WPFObject("PopupRoot", "", 1).WPFObject("Decorator", "", 1).WPFObject("NonLogicalAdornerDecorator", "", 1).WPFObject("ContextMenu", "", 1).WPFObject("MenuItem", "Offload", 1),4);
                  break;
            case "Offload to Standby":
                  Common.SafeClickObject(Aliases.flydubai_DCS_UI.WPFObject("HwndSource: PopupRoot", "").WPFObject("PopupRoot", "", 1).WPFObject("Decorator", "", 1).WPFObject("NonLogicalAdornerDecorator", "", 1).WPFObject("ContextMenu", "", 1).WPFObject("MenuItem", "Offload to Standby", 2),4);
                  break;
            case "Offload Onwards":
                  Common.SafeClickObject(Aliases.flydubai_DCS_UI.WPFObject("HwndSource: PopupRoot", "").WPFObject("PopupRoot", "", 1).WPFObject("Decorator", "", 1).WPFObject("NonLogicalAdornerDecorator", "", 1).WPFObject("ContextMenu", "", 1).WPFObject("MenuItem", "Offload Onwards", 3),4);
                  break;
            default :
                  Log.Message("Provide appropriate action");
                  break;
       }
       aqUtils.Delay(3000);
       
       var Popup = Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow;
       
       if(Popup.WPFControlText == "Offload Passenger Confirmation ?"){                 
                Common.SafeClickObject(Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Button", "Proceed", 2),5);
       }
       else if(Popup.WPFControlText == "Offload Passengers"){
                 SelectAllPaxForOffloadOrOffloadToStandby();
                Common.SafeClickObject(Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("OffloadPassengerUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 3).WPFObject("Grid", "",1).WPFObject("StackPanel", "", 2).WPFObject("Button", "Offload", 2),4);
       }
       else if(Popup.WPFControlText == "Offload passengers to stand by"){
                SelectAllPaxForOffloadOrOffloadToStandby();
                Common.SafeClickObject(Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("OffloadPassengerUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 3).WPFObject("Grid", "",1).WPFObject("StackPanel", "", 2).WPFObject("Button", "Offload to standby", 2),4);
       }      
}

function SelectAllPaxForOffloadOrOffloadToStandby(){ 
      var Popup = Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow;
      var Paxgrid = Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("OffloadPassengerUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("offloadDataGrid");       
      for(var i=1;i<Paxgrid.Items.Count+1;i++){
           var PaxSelection = Paxgrid.WPFObject("DataGridRow", "", i).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("CheckBox", "", 1);
           if(PaxSelection.wState == 0 && PaxSelection.Enabled == true){
                PaxSelection.Click();
           }
      }      
}

module.exports.BoardPax = BoardPax;
module.exports.VerifySeccessfulBoarding = VerifySeccessfulBoarding;
module.exports.CheckBoardingRestrictionPopUp = CheckBoardingRestrictionPopUp;
module.exports.IsYetToBoardScreenDisplayed = IsYetToBoardScreenDisplayed;
module.exports.YetToBoard =YetToBoard;
module.exports.NavigateToBoardedTab = NavigateToBoardedTab;
module.exports.PerformOffloadOrOffloadToStandby = PerformOffloadOrOffloadToStandby;