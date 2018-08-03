var Common = require("Common");
var FlightList = require("FlightList");
var MockData = require("DynamicPaxgenericFaker");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;
var Popup = Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow;

function IsCheckInScreenDisplayed(){
      var BreadcrumbCheckIn = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Logo").WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("StackPanel", "", 1).WPFObject("btnBreadcumb");
      if(BreadcrumbCheckIn.WPFControlText == "Check in" && BreadcrumbCheckIn.Enabled == false){
          Log.Message("Navigated to Check in screen");
      }
      else{
          Log.Warning("Landed on unexpected page");
      }
}

// OnlyFlightSearch flag should be false if search is made in Check in, else it should be true
// Type should be 0 for Passenger and 1 for Flight in case OnlyFlightSearch is true else it can be skipped
function SearchFlightOrPassenger(OnlyFlightSearch, SearchDetails,Type){
          if(OnlyFlightSearch){
                  Common.SafeSetText(HomePage.txtSearchFlight,20,SearchDetails);
          }
          else{
                  var SearchType = HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("searchModeTypeContainer").WPFObject("comboType");
                  Common.SelectDropDownValue(SearchType,Type);
                  switch(SearchType.wText){
                      case "Flight":
                            Common.SafeSetText(HomePage.txtSearchFlight,20,SearchDetails);
                            break;
                      case "Passenger":  
                            Common.SafeSetText(HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.txtSearchPassenger,20,SearchDetails);
                            break;   
                       default:
                            Log.Error("Flight/Passenger should be selected");
                            break;     
                  }
      }      
      aqUtils.Delay(1000);
      HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.Image.Click();
}


function SelectSearchDropdown(Type){
      Common.SelectDropDownValue(HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("searchModeTypeContainer").WPFObject("comboType"),Type);
}

function EmptyFlightSearch(){
      HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.Image.Click();  
      FlightList.IsFlightListScreenDisplayed(); 
}

function VerifyFlightSearchResultsGrid(){
      var ResultsGrid = HomePage.ContentGrid.Border.Grid.Grid.WPFObject("SearchResultsContent").WPFObject("FlightSearch").WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("StackPanel", "", 1).WPFObject("flyDataGrid");
      if(ResultsGrid.Columns.Count == 10 && ResultsGrid.Items.Count > 0){
          Log.Message("Search shows appropriate results");
      }
      else{
          Log.Error("Search is not successful");
      }        
}

function AddNewPax(adult, child, infant)
{
  var AddPaxButton = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlText", "Add New Passenger", 100);
  Common.SafeClickObject(AddPaxButton, 1000);
  
  var addPaxControl = Popup.WPFObject("Grid", "", 1).Find("WPFControlName","AddNewPaxControl",30).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1);
  Common.SelectDropDownValue(addPaxControl.WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 1).WPFObject("ComboBox", "", 1), adult);
  Common.SelectDropDownValue(addPaxControl.WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 2).WPFObject("ComboBox", "", 1), child);
  Common.SelectDropDownValue(addPaxControl.WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 3).WPFObject("ComboBox", "", 1), infant);
  Common.SelectDropDownValue(addPaxControl.WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 4).WPFObject("ComboBox", "", 1), 1);
  Common.SafeClickObject(addPaxControl.WPFObject("Grid", "", 2).Find("WPFControlText", "View Price", 100), 1000);
  Common.SafeClickObject(addPaxControl.Find("WPFControlText", "Proceed", 100), 1000);
}

//Update Mock gender, nationality and country of issue.
function FillNewPaxDetails(adult, child, infant, config)
{
  var mockObject ={}, paxCount = adult + child + infant;
  var selectedEnvironment = config[config.selectedEnv];
  var paxListControl = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName", "passengerList", 100);
  var InfoOfPaxContent =  HomePage.ContentGrid.Find("WPFControlName", "InformationOfPaxContent", 100);
  for(var i=0; i<paxCount; i++)
  {
    paxListControl.WPFObject("ListBoxItem", "", i+1).Click();
    var category = paxListControl.WPFObject("ListBoxItem", "", i+1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBlock", "*", 1).WPFControlText.trim();
    mockObject = (i === 0) ? MockData.getAdultData("primary") : MockData.getAdultData("secondary");
    
  if(category == "Child"){
      MockData.generateDOB(mockObject, 2);
    }
    else if(category == "Infant")
    {
      MockData.generateDOB(mockObject, 3);
      Common.SelectDropDownValue(InfoOfPaxContent.Find("WPFControlName", "comboAssociatedAdult", 100), adult -1);
      adult--;
    }
      
      if(i==0){ 
        //fill exta detail
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtHomeDocument", 100), 100, mockObject.TelNumber);
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtMobileDocument", 100), 100, mockObject.MobNumber);
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtEmail", 100), 100, mockObject.EmailAddress);
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtConfirmEmail", 100), 100, mockObject.EmailAddress);
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtAddress1", 100), 100, mockObject.Address);
        Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtCity", 100), 100, mockObject.City);
      }
      var ppExpiry = mockObject.PPExpiryDay + "/" + mockObject.PPExpiryMonth.split(" ")[0] + "/" + mockObject.PPExpiryYear;
     var dob = mockObject.DOBDay + "/" + mockObject.DOBMonth.split(" ")[0] + "/" + mockObject.DOBYear;
     Common.SafeSetText(InfoOfPaxContent.Find("WPFControlName", "txtLastName", 100), 100, mockObject.FirstName);
     Common.SafeSetText( InfoOfPaxContent.Find("WPFControlName", "txtFirstName", 100), 100, mockObject.LastName);
     Common.SelectDropDownValue( InfoOfPaxContent.Find("WPFControlName", "comboGender", 100), 0);
     Common.SelectDropDownValue(InfoOfPaxContent.Find("WPFControlName", "comboDocType", 100), 0);
     Common.SafeSetText( InfoOfPaxContent.Find("WPFControlName", "txtDocumentNo", 100), 100, mockObject.PassportNumber);
     InfoOfPaxContent.Find("WPFControlName", "dateDocExp", 100).Keys(ppExpiry);
     Common.SelectDropDownValue( InfoOfPaxContent.Find("WPFControlName", "comboCountryofIssue", 100), 10);
     Common.SelectDropDownValue( InfoOfPaxContent.Find("WPFControlName", "comboNationality", 100), 10);
     InfoOfPaxContent.Find("WPFControlName", "dateDOB", 100).Keys(dob);
    }
    Common.SafeClickObject(HomePage.Find("WPFControlName", "CheckinMainViewContent", 100).Find("WPFControlText", "Next", 100),25)
    aqUtils.Delay(3000);
    Common.SafeClickObject(HomePage.Find("WPFControlName", "CheckinMainViewContent", 100).Find("WPFControlText", "Proceed with payment", 100),25)
    Common.SafeClickObject(Popup.Find("WPFControlText", "Proceed", 100), 25);
    
    Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Voucher Reference", 100), 5);
     Common.SafeSetText(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlName",  "voucherReference", 100), 5, selectedEnvironment.Voucher);
      Common.SafeSetText(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlName",  "voucherPinNumber", 100), 5, selectedEnvironment.Pin);
      Sys.Desktop.Keys("[Tab]");
      Sys.Desktop.Keys("[Tab]");
      Sys.Desktop.Keys("[Tab]");
      Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Proceed", 100), 150);
     Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Proceed with Checkin", 100), 100);
     }

module.exports.SearchFlightOrPassenger = SearchFlightOrPassenger;
module.exports.SelectSearchDropdown=SelectSearchDropdown;
module.exports.EmptyFlightSearch = EmptyFlightSearch;
module.exports.IsCheckInScreenDisplayed = IsCheckInScreenDisplayed;
module.exports.VerifyFlightSearchResultsGrid = VerifyFlightSearchResultsGrid;
module.exports.AddNewPax = AddNewPax;
module.exports.FillNewPaxDetails = FillNewPaxDetails;