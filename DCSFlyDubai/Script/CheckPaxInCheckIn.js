var ReadDataFromTextFile = require("ReadDataFromTextFile");
var CheckInScreen = require("CheckInScreen");
var HomePage = require("HomePage");
var ReadCredentials = require("ReadCreds");
var FlightScreenYetToBoard = require("FlightScreenYetToBoard");
var BoardingScreen = require("BoardingScreen");
var LaunchFlyDubai = require("LaunchFlyDubai");
var Login = require("Login");
var Common = require("Common");
var HomePage = require("HomePage");
var DynamicPaxGenericFaker = require("DynamicPaxGenericFaker");
var faker = require("faker");
var  CheckInPaxGrid = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.Grid;
var PnrNoRow;

function CheckPax(){
      DynamicPaxGenericFaker.generateTestData();
      LaunchFlyDubai.LaunchFlyDubaiDCSApp();
      var ReadData = ReadCredentials.ReadCredentails();
      var PNR = ReadDataFromTextFile.ReadData();
      Login.Login(ReadData.Username,ReadData.Password);
      HomePage.NavigateToCheckInScreen();
      CheckInScreen.SearchPax(PNR);
      aqUtils.Delay(4000);
      //CheckInPNR(PNR);
}


function CheckInPNR(PnrNo)
{
  var rowNo=GetRowIndex(PnrNo);
  if( CheckInPaxGrid.WPFObject("ParentDataGrid").WPFObject("DataGridRow", "", rowNo).WPFObject("DataGridCell", "", 11).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1).WPFObject("StatusConfirmationLabel").WPFControlText=="C")
  {
    Logger.LogData("Already Checked In","CheckInModule")
  }
  else
  {
    CheckInPaxGrid.WPFObject("ParentDataGrid").WPFObject("DataGridRow", "", rowNo).DblClick();
    ContentGrid.StackPanel.ButtonCheckIn.ClickButton();
    CheckInPopUpGrid = flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.Grid.Grid;
    itemsControl = CheckInPopUpGrid.ItemsControl;
    itemsControl.ContentPresenter.rdButton.ClickButton();
    itemsControl.ContentPresenter2.rdButton.ClickButton();
    itemsControl.ContentPresenter3.rdButton.ClickButton();
    itemsControl.ContentPresenter4.rdButton.ClickButton();
    itemsControl.ContentPresenter5.rdButton.ClickButton();
    itemsControl.ContentPresenter6.rdButton.ClickButton();
    CheckInPopUpGrid.ButtonProceed.ClickButton();
  }
}
function GetRowIndex(PnrNo)
{
  var CheckInPaxGrid=Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow.ContentGrid.Border.Grid.Grid.WPFObject("SearchResultsContent").WPFObject("PassengerSearchResult").WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("ParentDataGrid");
  var TotalPax=CheckInPaxGrid.Items.Count;
  if(TotalPax>0)
  {
      for(var i=1;i<=TotalPax;i++)
      {
        var PnrNoOfRow = CheckInPaxGrid.WPFObject("DataGridRow", "", i).WPFObject("DataGridCell", "", 4).WPFObject("ContentPresenter", "", 1).WPFObject("TextBlock", "*", 1).WPFControlText
        Log.Message("PnrNoOfRow: "+PnrNoOfRow);
       
        if(PnrNo == PnrNoOfRow)
         {
            Log.Message("Given PnrNo for Search"+ PnrNo);
            Log.Message("Matching PnrNo from grid"+ PnrNoOfRow);
            return i;
        }   
      }
  }
  else
  {
    Log.Message("There is no sufficient records to test this scenario")
  }
}