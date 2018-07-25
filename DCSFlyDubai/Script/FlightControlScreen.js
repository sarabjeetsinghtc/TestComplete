var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function ChangeFlightStatus(ToStatus){
        var FlightStatus = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("RecentSearchedFlights").WPFObject("RecentSearchFlights").WPFObject("Grid", "", 1).WPFObject("scrollbar").WPFObject("flightList").WPFObject("ListBoxItem", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("GroupBox", "", 1).WPFObject("Viewbox", "", 1).WPFObject("Button", "*", 1);
        if(FlightStatus.WPFControlText == "FO"){
                Log.Message("The flight is already in FO status");
        }     
        else{ 
                var StatusIcon = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("FlightHeaderContent").WPFObject("FlightInfo").WPFObject("DockPanel", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("Grid", "", 1).WPFObject("GroupBox", "", 1).WPFObject("Viewbox", "", 1).WPFObject("hostControl");
                aqUtils.Delay(2000);
                StatusIcon.Click();
                aqUtils.Delay(1000);
                Aliases.flydubai_DCS_UI.WPFObject("HwndSource: PopupRoot", "").WPFObject("PopupRoot", "", 1).WPFObject("Decorator", "", 1).WPFObject("NonLogicalAdornerDecorator", "", 1).WPFObject("ComboBoxItem", "FO", "2").Click();
                aqUtils.Delay(2000);
                Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Button", "Proceed", 2).Click();
                aqUtils.Delay(4000);
                if(FlightStatus.WPFControlText == "FO"){
                        Log.Message("The flight status is changed to "+ToStatus+" successfully");
                }
        }         
}

module.exports.ChangeFlightStatus = ChangeFlightStatus;