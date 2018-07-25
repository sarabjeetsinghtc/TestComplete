var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");
var Popup=Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow;
var messageBox=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications;
var PopupBlock;
var successString;
var faliurString;
var boardedPaxCount_Before,yetToBoardPaxCount_Before;
//All should board successfully "5/6/10" & Some should not board successfully "6/7/8/11"
var ADTINFSqnc = "5/10";
var FlightNum = "337/10Jan";
function BoardingMultiPax()
{
  LaunchFlyDubai.LaunchFlyDubaiDCSApp();
  var LoginDetails = ReadCredentials.ReadCredentails();
  Login.Login(LoginDetails.Username,LoginDetails.Password);
  HomePage.NavigateToBoardingScreen();
  BoardingScreen.SearchFlight(FlightNum);
  aqUtils.Delay(3000);
  BoardMultiPaxAdtChd();
  LaunchFlyDubai.TerminateFlyDubaiDCSApp();
}

function BoardMultiPaxAdtChd()
{
  try
  {
     boardedPaxCount_Before=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count
     FlightScreenYetToBoard.BoardPax(ADTINFSqnc);
     aqUtils.Delay(3000);
     if(Popup.Exists) 
     {
       if(Popup.Title=="Boarding Restriction")
       {
          PopupBlock=Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("BoardingCheckpointControl").WPFObject("StackPanel", "", 1).WPFObject("StackPanel", "", 1);
          successObj=PopupBlock.WPFObject("ContentControl", "", 1).WPFObject("TextBlock", "", 1);
          faliurObj=PopupBlock.WPFObject("ContentControl", "*", 2).WPFObject("TextBlock", "*", 1);
         // if(successString.WPFControlText.search("successfully boarded")!== (-1) & faliurString.WPFControlText.search("not boarded")!== (-1))
           if( successObj.VisibleOnScreen && faliurObj.VisibleOnScreen)
           {
             boardedPaxCount_After=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count;
             Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("BoardingCheckpointControl").WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Button", "Cancel", 1).Click();
             Log.Message("All Pax boarded except Adult or Child with red flag");
             Log.Message("Success Message"+ successObj.WPFControlText);
             Log.Message("Faliur Message"+ faliurObj.WPFControlText);
              aqUtils.Delay(6000);
             Log.Message("boardedPaxCount_Before"+boardedPaxCount_Before+"  boardedPaxCount_After"+boardedPaxCount_After);
           }
           else if(faliurObj.VisibleOnScreen)//No pax can boarded as all are having red flags or not exists on grid
           {
             Log.Message("No Pax boarded");
             Log.Message(faliurObj.WPFControlText);
           }
           else
           {
              Log.Error("Boarding Unsuccessfull: Unexpected Behaviour");
           }
       }
       else if(Popup.Title="Alert" && Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 3).WPFObject("StackPanel", "", 1).WPFObject("ErrorMessageBlock").WPFControlText=="No Passenger found")
       {
         Log.Message(Popup.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 3).WPFObject("StackPanel", "", 1).WPFObject("ErrorMessageBlock").WPFControlText);
       }
       else
       {
         Log.Error("Boarding Unsuccessfull: Unexpected Behaviour")
       }
     }
     else if(messageBox.Grid.VisibleOnScreen)
     {
        if(messageBox.AggregateMessageSuffix="were successfully boarded")
        {
           boardedPaxCount_After=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count;
           Log.Message("boardedPaxCount_Before"+boardedPaxCount_Before+"  boardedPaxCount_After"+boardedPaxCount_After);
           Log.Message("All Passengers Boarded Successfully ");   
        }
        else
         Log.Error("Boarding Unsuccessfull: Unexpected Behaviour");
     } 
     else
     {
       Log.Error("Boarding Unsuccessfull: Unexpected Behaviour");
     }
     aqUtils.Delay(2000);
  }
  catch(e)
  {
    Log.Error(e.message);
  }
}