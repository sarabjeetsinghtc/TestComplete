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
var boardedPaxCount_After,yetToBoardPaxCount_After;
var contentGrid=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid;
//All should board successfully "5/6/10" & Some should not board successfully "6/7/8/11"
var ADTINFSqnc = "5/6/10";
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
  //LaunchFlyDubai.TerminateFlyDubaiDCSApp();
  
}

function BoardMultiPaxAdtChd()
{
  try
  {
     boardedPaxCount_Before=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count
     
     yetToBoardPaxCount_Before=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count;
     FlightScreenYetToBoard.BoardPax(ADTINFSqnc);//Board Pax
     aqUtils.Delay(20000);
     boardedPaxCount_After=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.Items.Count;
    
     Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardedRadioButton").Click()
     yetToBoardPaxCount_After=contentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("YetoBoardRadioButton").WPFObject("StackPanel", "", 1).WPFObject("Button", "", 1).WPFControlText;
     aqUtils.Delay(3000);
     Log.Message("boardedPaxCount_Before"+boardedPaxCount_Before +" boardedPaxCount_After"+boardedPaxCount_After);
     Log.Message("yetToBoardPaxCount_Before"+yetToBoardPaxCount_Before +" yetToBoardPaxCount_After"+yetToBoardPaxCount_After);
  }
  catch(e)
  {
    Log.Error(e.message);
  }
}