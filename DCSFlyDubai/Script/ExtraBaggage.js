﻿var ReadCredentials = require("ReadCreds");
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
var BoardingScreen = require("BoardingScreen");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");

function CheckExtraBaggageRestriction(){
       //var config = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\config.txt");
       //DynamicPaxGenericFaker.generateTestData(config, true);
       LaunchFlyDubai.LaunchFlyDubaiDCSApp();
       var LoginDetails = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\DCSCredentials.txt");
       var BookingData = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\TestData_A-001.txt");
       
       var FlightNum = BookingData.flightNum + "/" + BookingData.flightDate;
       Login.AdvancedLogin(LoginDetails.Username,LoginDetails.Password,LoginDetails.Role,LoginDetails.Environment,LoginDetails.Station);
       HomePage.NavigateToFCM();
       CheckInScreen.SearchFlightOrPassenger(true,FlightNum);
       FlightControlScreen.ChangeFlightStatus("FO");
       aqUtils.Delay(2000);
       HomePage.NavigateToHomePage();       
       aqUtils.Delay(2000);
       HomePage.NavigateToCheckInScreen();
       aqUtils.Delay(2000);
       CheckInScreen.SearchFlightOrPassenger(false,FlightNum,1);
       PassengerList.SelectPassengerFromTheList(BookingData.PNR);
       Basic.IsBasicScreenDisplayed();
       Basic.NavigateToSpecificTab(3);
       BaggageInformation.AddBaggage(2,100);
       Basic.CheckPassengersIn();
       var Seats = Basic.GetSeatNumOfCheckedInPassengers();
       HomePage.NavigateToBoardingScreen();
       CheckInScreen.SearchFlightOrPassenger(true,FlightNum);
       Log.Message(Common.GetSeatOrSeqNumbersFromArray(Seats));
       FlightScreenYetToBoard.BoardPax(Common.GetSeatOrSeqNumbersFromArray(Seats));
       FlightScreenYetToBoard.ReadBoardingRestrictions();
       HomePage.NavigateToHomePage();
       HomePage.NavigateToCheckInScreen();
       CheckInScreen.SearchFlightOrPassenger(false,FlightNum,1);
       PassengerList.SelectPassengerFromTheList(BookingData.PNR);
       Basic.IsBasicScreenDisplayed();
       //var Seats = Basic.GetSeatNumOfCheckedInPassengers();
       //HomePage.NavigateToHomePage();
       //HomePage.NavigateToBoardingScreen();
       //CheckInScreen.SearchFlightOrPassenger(true,FlightNum);
       //FlightScreenYetToBoard.IsYetToBoardScreenDisplayed(FlightNum);
       //FlightScreenYetToBoard.BoardPax(Common.GetSeatOrSeqNumbersFromArray(Seats));
      // FlightScreenYetToBoard.VerifySeccessfulBoarding();
       //FlightScreenYetToBoard.NavigateToBoardedTab();
      // BoardedPassengersList.DeboardPax(Common.GetSeatOrSeqNumbersFromArray(Seats));       
       //BoardedPassengersList.VerifyDeboardSuccessMessage();
      // BoardedPassengersList.NavigateToYetToBoardTab();
       //FlightScreenYetToBoard.SearchPassenger(Seats[0]);
}
