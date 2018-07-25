var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow
var CheckInScreen = require("CheckInScreen");
var FlightControlDashboard = require("FlightControlDashboard");

function NavigateToBoardingScreen(){    
    Common.SafeClickObject(HomePage.HamburgerMenu.BoardingmenuviewFlydubaiDcsUiControlsHambu2.HamburgermenuitemSystemCollectionsObjectmo,20);
    aqUtils.Delay(2000);
}

function NavigateToCheckInScreen(){
    Common.SafeClickObject(HomePage.HamburgerMenu.CheckinmenuviewFlydubaiDcsUiControlsHambur.HamburgermenuitemSystemCollectionsObjectmo,20);  
    aqUtils.Delay(2000);
    CheckInScreen.IsCheckInScreenDisplayed();
}

function NavigateToFCM(){
    Common.SafeClickObject(HomePage.HamburgerMenu.WPFObject("FlightControlMenuView", "", 1).WPFObject("Border", "", 1).WPFObject("HamburgerMenuItem", "", 1),20);
    FlightControlDashboard.IsFCDashboardScreenDisplayed();
}

function NavigateToHomePage(){
    Common.SafeClickObject(HomePage.HamburgerMenu.WPFObject("HomeMenuView", "", 1).WPFObject("Border", "", 1).WPFObject("HamburgerMenuItem", "", 1),20);
    VerifyLogin();
}

function VerifyLogin(){
    var BreadcrumbHome = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");
    if(BreadcrumbHome.WPFControlText == "Home"){
      Log.Message("Successfully logged-in to DCS");
    }
    else{
      Log.Message("Login failed");
    }
}


module.exports.NavigateToBoardingScreen = NavigateToBoardingScreen;
module.exports.NavigateToCheckInScreen = NavigateToCheckInScreen;
module.exports.VerifyLogin = VerifyLogin;
module.exports.NavigateToFCM = NavigateToFCM;
module.exports.NavigateToHomePage = NavigateToHomePage;