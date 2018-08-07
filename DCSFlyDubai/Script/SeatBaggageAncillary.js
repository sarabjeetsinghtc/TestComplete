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
var BoardingScreen = require("BoardingScreen");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var AncillarySales = require("AncillarySales");
var PaymentDetails = require("PaymentDetails");


function SeatBaggageAncillary() {

    var path = Common.GetGenericFilePath();
    var config = ReadDataFromTextFile.ReadData(path + "configseatbaggageancilliary.txt");
    DynamicPaxGenericFaker.generateTestData(config, true);
    LaunchFlyDubai.LaunchFlyDubaiDCSApp();
    var LoginDetails = ReadDataFromTextFile.ReadData(path + "DCSCredentials.txt");
    var BookingData = ReadDataFromTextFile.ReadData(path + "TestData_A-001.txt");

    var FlightNum = BookingData.flightNum + "/" + BookingData.flightDate;
    Login.AdvancedLogin(LoginDetails.Username, LoginDetails.Password, LoginDetails.Role, LoginDetails.Environment, LoginDetails.Station);
    HomePage.NavigateToFCM();
    CheckInScreen.SearchFlightOrPassenger(true, FlightNum);
    FlightControlScreen.ChangeFlightStatus("FO");
    aqUtils.Delay(2000);
    HomePage.NavigateToHomePage();
    aqUtils.Delay(2000);
    HomePage.NavigateToCheckInScreen();
    aqUtils.Delay(2000);
    CheckInScreen.SearchFlightOrPassenger(false, FlightNum, 1);
    PassengerList.SelectPassengerFromTheList(BookingData.PNR);
    Basic.IsBasicScreenDisplayed();
    Basic.NavigateToSpecificTab(3);
    BaggageInformation.AddBaggage(2, 100);
    Basic.NavigateToSpecificTab(4);
    SeatInformation.IsSeatInformationDisplayed();
    SeatInformation.SelectSeatFromSeatMap();
    Basic.NavigateToAdvancedScreen();
    Advanced.NavigateToSpecificTab(3);
    var ServicesAdded = AncillarySales.AddAncillaryServices();
    Advanced.NavigateToSpecificTab(6);
    PaymentDetails.VerifyAncillaryServicesAdded(ServicesAdded);
    Basic.CheckPassengersIn();
    var Seats = Basic.GetSeatNumOfCheckedInPassengers();
    HomePage.NavigateToBoardingScreen();
    CheckInScreen.SearchFlightOrPassenger(true, FlightNum);
    Log.Message(Common.GetSeatOrSeqNumbersFromArray(Seats));
    FlightScreenYetToBoard.BoardPax(Common.GetSeatOrSeqNumbersFromArray(Seats));
    FlightScreenYetToBoard.ReadBoardingRestrictions();
    HomePage.NavigateToHomePage();
    aqUtils.Delay(2000);
    HomePage.NavigateToCheckInScreen();
    aqUtils.Delay(2000);
    CheckInScreen.SearchFlightOrPassenger(false, FlightNum, 1);
    PassengerList.SelectPassengerFromTheList(BookingData.PNR);
    Basic.IsBasicScreenDisplayed();

}