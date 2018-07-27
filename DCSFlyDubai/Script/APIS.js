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

function Check(){
      var config = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\config.txt");
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
       HomePage.NavigateToHomePage();
        aqUtils.Delay(2000);
       HomePage.NavigateToCheckInScreen();
       aqUtils.Delay(2000);
       CheckInScreen.SearchFlightOrPassenger(false,FlightNum,1);
       PassengerList.SelectPassengerFromTheList(BookingData.PNR);
       Basic.IsBasicScreenDisplayed();
       Basic.NavigateToSeatInformation();
       SeatInformation.SelectSeatFromSeatMap();
       Basic.NavigateToBaggageInformation();
       BaggageInformation.AddBaggage(1,10);
       //Basic.WalkThroughTabsUnderBasic();
       //Basic.NavigateToAdvancedScreen();
       //Advanced.WalkThroughTabsUnderAdvanced();
       //Advanced.NavigateToBasicScreen();
       //Basic.NavigateToBaggageInformation();
       //BaggageInformation.AddBaggage(1,10);
       //Basic.NavigateToSeatInformation();
       //SeatInformation.SelectSeatFromSeatMap();
       Basic.CheckPassengersIn();
       //Basic.OffloadPopUp();
       //FlightScreenYetToBoard.PassengerOffload("Offload");
        aqUtils.Delay(5000);
      // var Seats = Basic.GetSeatNumOfCheckedInPassengers();
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
       //FlightScreenYetToBoard.PerformOffloadOrOffloadToStandby(Seats,"Offload");
}
