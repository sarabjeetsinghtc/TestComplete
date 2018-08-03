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
            Common.SafeClickObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 3).WPFObject("Button", "Check In", 3),50);
            Common.WaitForObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 3).WPFObject("Button", "Boarding Pass Print", 2),20);
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
}

function NavigateToSeatInformation(){
                   var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", 4);
                   Tab.Click();
}

function NavigateToBaggageInformation(){
                   var Tab = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", 3);
                   Tab.Click();
}

function OffloadPopUp(){
          var PaxList = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CheckinSelectedPaxView", 1000).Find("WPFControlName","passengerList",1000);
          Log.Message(PaxList.Items.Count);
          PaxList.WPFObject("ListBoxItem", "", 1).ClickR();
          aqUtils.Delay(2000);
}

function UpdateAPISDetail(paxList){
  var paxListControl = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "passengerList", 100);
  for(var i=0; i<paxList.length; i++)
  {
    if(i!=0)
    {
      Common.SafeClickObject(paxListControl.WPFObject("ListBoxItem", "", i+1), 5)
    }
    Common.SelectDropDownValue(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "TravelDocumentType", 100), 1);
    Common.SelectDropDownValue(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "TypeOfPassport", 100), 1);
    Common.SafeKeys(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "DocNumber", 100), 10, paxList[i].PassportNumber);
    HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "DocumentExpDate", 100).Keys("22/07/2022");
    Common.SelectDropDownValue(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CountryOfResidence", 100), 10);
    Common.SelectDropDownValue(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "Nationality", 100), 10);
   }
}

function ReassociateInfantPassenger(){
           Common.WaitForObject(HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CheckinSelectedPaxView", 1000).Find("WPFControlName","passengerList",1000),15);
           var PaxList = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "CheckinSelectedPaxView", 1000).Find("WPFControlName","passengerList",1000);
           Log.Message(PaxList.wItemCount);
           for(var i=1;i<PaxList.wItemCount+1;i++){
                    var Passenger = PaxList.WPFObject("ListBoxItem", "", i);
                    Passenger.Click();
                    if(Passenger.WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("DockPanel", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Image", "", 3).VisibleOnScreen){
                            Passenger.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("paxName").Click();
                            break;
                    } 
            }            
            Common.SafeClickObject(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("InfantDeselectSelectAssociatePassenger", "", 1).Find("WPFControlName","ComboBoxToggle",50),20);          
            aqUtils.Delay(2000);
            var RestOfAdultPax = Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("InfantDeselectSelectAssociatePassenger", "", 1).Find("WPFControlName","listItems",100);
            Log.Message(RestOfAdultPax.WItemCount);
            var Pax1 = RestOfAdultPax.WPFObject("ListBoxItem", "", 1);
            Log.Message(Pax1.WPFObject("StackPanel", "", 1).WPFObject("TextBlock", "*", 1).WPFControlText);
            Common.SafeClickObject(Pax1.WPFObject("StackPanel", "", 1).WPFObject("RadioButton", "", 1),5);
            Common.SafeClickObject(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("InfantDeselectSelectAssociatePassenger", "", 1).Find("WPFControlText","Proceed",50),10);              
}

function IsOutofSequence()
{
  var outofSequenceControl = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlText", "Out of Sequence", 100);
  if(outofSequenceControl.Exists)
  {
    Log.Message("Navigated to out of sequence screen");
  }
            else{
                   Log.Warning("Landed on unexpected page");
            }
}

function NavigateToSpecificTab(TabIndex){
          var Tabs = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",20).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",10).WPFObject("BasicTab");
          Common.SafeClickObject(Tabs.WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("TabItem", "", TabIndex),10);
}

module.exports.IsBasicScreenDisplayed = IsBasicScreenDisplayed;
module.exports.NavigateToAdvancedScreen = NavigateToAdvancedScreen;
module.exports.WalkThroughTabsUnderBasic = WalkThroughTabsUnderBasic;
module.exports.CheckPassengersIn = CheckPassengersIn;
module.exports.GetSeatNumOfCheckedInPassengers= GetSeatNumOfCheckedInPassengers;
module.exports.NavigateToSeatInformation = NavigateToSeatInformation;
module.exports.NavigateToBaggageInformation = NavigateToBaggageInformation;
module.exports.OffloadPopUp = OffloadPopUp;
module.exports.UpdateAPISDetail = UpdateAPISDetail;
module.exports.ReassociateInfantPassenger = ReassociateInfantPassenger;
module.exports.IsOutofSequence = IsOutofSequence;
module.exports.NavigateToSpecificTab =NavigateToSpecificTab;