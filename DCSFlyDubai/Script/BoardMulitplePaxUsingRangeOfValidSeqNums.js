var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");

var PaxSeatNums = "5-7";
var FlightNum = "337/10Jan";
function BoardMultiplePaxWithRangeOfSeqNums(){
          LaunchFlyDubai.LaunchFlyDubaiDCSApp();
          var LoginDetails = ReadCredentials.ReadCredentails();
          Login.Login(LoginDetails.Username,LoginDetails.Password);
          HomePage.NavigateToBoardingScreen();
          BoardingScreen.SearchFlight(FlightNum);
          aqUtils.Delay(3000);
          FlightScreenYetToBoard.BoardPax(PaxSeatNums);
          aqUtils.Delay(3000);
          var MessageObject = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.MessageNotifications.Grid;
          var SuccessMessage = aqObject.GetPropertyValue(MessageObject.WPFObject("TextBlock", "*", 1),"WPFControlText");
          if(aqString.Find(SuccessMessage,"successfully boarded")){
                Log.Message("The Pax are boarded successfully");
          }
          else{
                Log.Message("Boarding unsuccessfull");
          }
}