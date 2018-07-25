﻿var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");
var ReadDataFromTextFile = require("ReadDataFromTextFile");
var CheckInScreen = require("CheckInScreen");
var Basic = require("Basic");

function PNRSearch(){
            LaunchFlyDubai.LaunchFlyDubaiDCSApp();
            var LoginDetails = ReadDataFromTextFile.ReadData("C:\\Users\\pramati\\Desktop\\Automation\\Automation\\Data\\DCSCredentials.txt");
            var TestData = ReadDataFromTextFile.ReadData("C:\\Users\\pramati\\Desktop\\Automation\\Automation\\Data\\PNRSearch.txt");
            Login.AdvancedLogin(LoginDetails.Username,LoginDetails.Password,LoginDetails.Role,LoginDetails.Environment,LoginDetails.Station);
            HomePage.NavigateToCheckInScreen();
            CheckInScreen.SelectSearchDropdown(0);
            CheckInScreen.SearchFlightOrPassenger(TestData.PNR);
            Basic.IsBasicScreenDisplayed();
}