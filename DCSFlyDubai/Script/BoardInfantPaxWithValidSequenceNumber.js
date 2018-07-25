var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");

var InfantSeqNum = 8;
function BoardAnInfantPax(){
        LaunchFlyDubai.LaunchFlyDubaiDCSApp();
        var LoginDet = ReadCredentials.ReadCredentails();
        Login.Login(LoginDet.Username,LoginDet.Password);
        HomePage.NavigateToBoardingScreen();
        BoardingScreen.SearchFlight("557/10Jan");
        aqUtils.Delay(4000);
        var TotalBoardingPax = parseInt(FlightScreenYetToBoard.GetTotalNumOfBoadingPax());
                
        var Count =0;
        for(var i=1;i<=TotalBoardingPax;i++){
                Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.WPFObject("DataGridRow", "", i).Click();
                var SequenceNum = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.BoardingPaxListGrid.WPFObject("DataGridRow", "", i).WPFObject("DataGridCell", "", 4).WPFObject("ContentPresenter", "", 1).WPFObject("SequenceNumber").WPFControlText;
                if(SequenceNum == InfantSeqNum){
                  Count++;
                }
                if(Count == 2){
                  break;
                }
        }
        if(Count == 2){
          aqUtils.Delay(2000);
          FlightScreenYetToBoard.BoardPax(InfantSeqNum);
          aqUtils.Delay(2000);
          if(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.Exists && aqObject.GetPropertyValue(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 3).WPFObject("StackPanel", "", 1).WPFObject("ErrorMessageBlock"),"WPFControlText") == "Passenger travelling with Infant"){
            Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Button", "Proceed", 2).Click();
          }
          aqUtils.Delay(3000);
          var SuccessMessage = aqObject.GetPropertyValue(Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.WPFObject("MessageNotifications").WPFObject("ContentPresenter", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBlock", "*", 1),"WPFControlText");
          if(aqString.Find(SuccessMessage,"successfully boarded")){
              Log.Message("Pax are boarded successfully");
          }
          else{
              Log.Message("Boarding unsuccessfull");
          }
        }
        else{
          Log.Message("Required Pax does not exists");
        }
}