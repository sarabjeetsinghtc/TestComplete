var ReadCredentials = require("ReadCreds");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");
var ReadDataFromTextFile = require("ReadDataFromTextFile");
var CheckInScreen = require("CheckInScreen");
var FlightControlDashboard = require("FlightControlDashboard");
var FlightControlScreen = require("FlightControlScreen");
var PassengerList = require("PassengerList");
var Basic = require("Basic");
var Advanced = require("Advanced");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var DynamicPaxGenericFaker = require("DynamicPaxGenericFaker");
var BaggageInformation = require("BaggageInformation");
var SeatInformation = require("SeatInformation");
var BoardedPassengersList = require("BoardedPassengersList");
var SSRAndComments = require("SSRAndComments");

function CheckClearingManualGateComments(){
       //var config = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\config.txt");
       //DynamicPaxGenericFaker.generateTestData(config, true);
       LaunchFlyDubai.LaunchFlyDubaiDCSApp();
       var LoginDetails = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\DCSCredentials.txt");
       var BookingData = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\TestData_A-001.txt");
       
       var FlightNum = BookingData.flightSegments[BookingData.flightSegments.length - 1].flightNum+ "/" + BookingData.flightDate;
       Login.AdvancedLogin(LoginDetails.Username,LoginDetails.Password,LoginDetails.Role,LoginDetails.Environment,LoginDetails.Station);
       
       HomePage.NavigateToCheckInScreen();
       aqUtils.Delay(2000);
       CheckInScreen.SearchFlightOrPassenger(false,FlightNum,1);
       PassengerList.SelectPassengerFromTheList(BookingData.PNR);
       Basic.IsBasicScreenDisplayed();
       Basic.NavigateToAdvancedScreen();
       Advanced.IsAdvancedScreenDisplayed();
       Advanced.NavigateSSRAndComments();
       SSRAndComments.ToggleCheckInCommentsSection();
       SSRAndComments.ToggleCheckInCommentsSection();
       SSRAndComments.ToggleBaggageCommentsSection();
       SSRAndComments.ToggleBaggageCommentsSection();
       SSRAndComments.ToggleGateCommentsSection();
       SSRAndComments.ToggleGateCommentsSection();
       SSRAndComments.ToggleReservationCommentsSection();  
       SSRAndComments.ToggleReservationCommentsSection();
       SSRAndComments.AddCommentToSection();
       SSRAndComments.ToggleGateCommentsSection();
       aqUtils.Delay(1000);
       SSRAndComments.ToggleGateCommentsSection();
       aqUtils.Delay(1000);
       HomePage.NavigateToHomePage();
       HomePage.NavigateToBoardingScreen();
       CheckInScreen.SearchFlightOrPassenger(true,FlightNum);
       FlightScreenYetToBoard.IsYetToBoardScreenDisplayed(FlightNum);
       SSRAndComments.ClearManualGateComments(BookingData.paxList[0].LastName);
}