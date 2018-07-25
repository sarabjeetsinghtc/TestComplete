var Common = require("Common");

var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;
function SearchFlight(FlightNum){
      Common.EnterTextInTextBox(HomePage.txtSearchFlight,5,FlightNum);
      aqUtils.Delay(1000);
      HomePage.ContentGrid.Border.Grid.Grid.Grid.Grid.Image.Click();
      Common.WaitForObject(HomePage.ContentGrid.Border.Grid.BoardingPaxListGrid,10);
}

module.exports.SearchFlight = SearchFlight;