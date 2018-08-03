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

function CheckAPIS(){
     var config = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\configapis.txt");
     DynamicPaxGenericFaker.generateTestData(config, false);
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
       Basic.UpdateAPISDetail(BookingData.paxList);
       Basic.ReassociateInfantPassenger();
       aqUtils.Delay(4000);
       HomePage.NavigateToHomePage();
        aqUtils.Delay(2000);
       HomePage.NavigateToCheckInScreen();
       aqUtils.Delay(2000);
       CheckInScreen.SearchFlightOrPassenger(false,FlightNum,1);
       PassengerList.SelectPassengerFromTheList(BookingData.PNR);
       Basic.IsBasicScreenDisplayed();
       Basic.CheckPassengersIn();
       var Seats = Basic.GetSeatNumOfCheckedInPassengers();
        aqUtils.Delay(5000);
        HomePage.NavigateToBoardingScreen();
        CheckInScreen.SearchFlightOrPassenger(true,FlightNum);
        var SeatString = Common.GetSeatOrSeqNumbersFromArray(Seats);
        FlightScreenYetToBoard.BoardPax(SeatString);
        FlightScreenYetToBoard.NavigateToBoardedTab();
        BoardedPassengersList.DeboardPax(SeatString);
        BoardedPassengersList.NavigateToYetToBoardTab();
        FlightScreenYetToBoard.SearchPassenger(Seats[0]);
        FlightScreenYetToBoard.OffloadPopUp();
        FlightScreenYetToBoard.PassengerOffload("Offload");
}
