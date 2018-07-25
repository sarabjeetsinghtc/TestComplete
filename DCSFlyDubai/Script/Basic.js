var Common = require("Common");
var Advanced = require("Advanced");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function IsBasicScreenDisplayed(){
            var BreadcrumbBasic = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 3).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");
            if(BreadcrumbBasic.WPFControlText == "Basic" && BreadcrumbBasic.Enabled == false){
                    Log.Message("Navigated to Basic screen");
            }
            else{
                   Log.Warning("Landed on unexpected page");
            }
}            

function NavigateToAdvancedScreen(){
            Common.SafeClickObject(HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("advnaceMode"),5);
            Advanced.IsAdvancedScreenDisplayed();
}

function WalkThroughTabsUnderBasic(){
            for(var i=2;i<5;i++){
                    var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", i);
                    Tab.Click();
                    aqUtils.Delay(3000);
            }
}

function CheckPassengersIn(){
            Common.SafeClickObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 3).WPFObject("Button", "Check In", 3),5);
            Common.WaitForObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 3).WPFObject("Button", "Boarding Pass Print", 2),10);
}                 

function GetSeatNumOfCheckedInPassengers(){
            var Seats = [];
            var PaxList= HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("SelectedPassengers").WPFObject("CheckinSelectedPaxView").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("scrollbar").WPFObject("passengerList");
            Log.Message("The Pax count is: "+PaxList.wItemCount);
            for(var i=1;i<PaxList.wItemCount+1;i++){
                  Common.SafeClickObject(PaxList.WPFObject("ListBoxItem", "", i),20);
                  var SeatNum = PaxList.WPFObject("ListBoxItem", "", i).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("SSRSServicePanel").WPFObject("SeatItems").WPFObject("ContentPresenter", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("seatName").WPFControlText;
                  if(SeatNum != "INF"){
                       Seats.push(SeatNum);
                  }     
            } 
            return Seats;     
            //return Common.GetSeatOrSeqNumbersFromArray(Seats);
}

function NavigateToSeatInformation(){
                   var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", 4);
                   Tab.Click();
}

function NavigateToBaggageInformation(){
                   var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", 3);
                   Tab.Click();
}


module.exports.IsBasicScreenDisplayed = IsBasicScreenDisplayed;
module.exports.NavigateToAdvancedScreen = NavigateToAdvancedScreen;
module.exports.WalkThroughTabsUnderBasic = WalkThroughTabsUnderBasic;
module.exports.CheckPassengersIn = CheckPassengersIn;
module.exports.GetSeatNumOfCheckedInPassengers= GetSeatNumOfCheckedInPassengers;
module.exports.NavigateToSeatInformation = NavigateToSeatInformation;
module.exports.NavigateToBaggageInformation = NavigateToBaggageInformation;
