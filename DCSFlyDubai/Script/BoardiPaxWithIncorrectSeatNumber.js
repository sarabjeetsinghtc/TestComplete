﻿var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");
var ReadDataFromTextFile = require("ReadDataFromTextFile");

function BoardingPaxIncorrectSeatNumber(){

          LaunchFlyDubai.LaunchFlyDubaiDCSApp();             
          var LoginDetails = ReadDataFromTextFile.ReadData("C:\\Users\\pramati\\Desktop\\Automation\\Automation\\Data\\DCSCredentials.txt");
          var TestData = ReadDataFromTextFile.ReadData("C:\\Users\\pramati\\Desktop\\Automation\\Automation\\Data\\PaxWithIncorrectSeatNum.txt");
          Login.AdvancedLogin(LoginDetails.Username,LoginDetails.Password,LoginDetails.Role,LoginDetails.Environment,LoginDetails.Station);
          HomePage.VerifyLogin();
          HomePage.NavigateToBoardingScreen();
          BoardingScreen.SearchFlight(TestData.FlightNum);
          FlightScreenYetToBoard.BoardPax(TestData.SeatNum);
          FlightScreenYetToBoard.CheckBoardingRestrictionPopUp();                 
          LaunchFlyDubai.TerminateFlyDubaiDCSApp();
}