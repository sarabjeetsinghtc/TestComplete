var Common = require("Common");
var FlightList = require("FlightList");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

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
                  Common.EnterTextInTextBox(HomePage.txtSearchFlight,20,SearchDetails);
          }
          else{
                  var SearchType = HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("searchModeTypeContainer").WPFObject("comboType");
                  Common.SelectDropDownValue(SearchType,Type);
                  switch(SearchType.wText){
                      case "Flight":
                            Common.EnterTextInTextBox(HomePage.txtSearchFlight,20,SearchDetails);
                            break;
                      case "Passenger":  
                            Common.EnterTextInTextBox(HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.txtSearchPassenger,20,SearchDetails);
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


module.exports.SearchFlightOrPassenger = SearchFlightOrPassenger;
module.exports.SelectSearchDropdown=SelectSearchDropdown;
module.exports.EmptyFlightSearch = EmptyFlightSearch;
module.exports.IsCheckInScreenDisplayed = IsCheckInScreenDisplayed;
module.exports.VerifyFlightSearchResultsGrid = VerifyFlightSearchResultsGrid;