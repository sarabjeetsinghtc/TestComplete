//Checkin/SSRComments -- Master mwthods for SSRComments section

var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function ToggleCheckInCommentsSection()
{
  var CheckInComments = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("CheckInCommentsHeader").WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("tbCheckinComments").WPFObject("StackPanel", "", 1).WPFObject("Image", "", 1);
  if(CheckInComments.IsVisible)
  {
     CheckInComments.Click();
  }
}
function ToggleBaggageCommentsSection()
{
  var BaggageComments = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("BaggageCommentsHeader").WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("tbBaggageComments").WPFObject("StackPanel", "", 1).WPFObject("Image", "", 1);
  if(BaggageComments.IsVisible)
  {
     BaggageComments.Click();
  }
}
function ToggleGateCommentsSection()
{
 var GateComments = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("GateCommentsHeader").WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("tbGateComments").WPFObject("StackPanel", "", 1).WPFObject("Image", "", 1);
  if(GateComments.IsVisible)
  {
     GateComments.Click();
  }
}
function ToggleReservationCommentsSection()
{
  var ReservationComments = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("ReservationCommentsHeader").WPFObject("StackPanel", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("tbReservation").WPFObject("StackPanel", "", 1).WPFObject("Image", "", 1);
  if(ReservationComments.IsVisible)
  {
     ReservationComments.Click();
  }
}

function AddCommentToSection(){

      var CommentsDropdownObject = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("comboType");
      Sys.Desktop.Keys("[Tab]");
      Common.SelectDropDownValue(CommentsDropdownObject,1);
      HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBox", "", 1).SetText("Checkin Comments");
      Sys.Desktop.Keys("[Tab]"); 
      HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("AdvancedTabsView", "", 1).WPFObject("AdvanceTabGrid").WPFObject("Tab").WPFObject("SSRComments").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("MainScroll").WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Button", "Add", 1).ClickButton();
}

module.exports.ToggleCheckInCommentsSection = ToggleCheckInCommentsSection;
module.exports.ToggleBaggageCommentsSection = ToggleBaggageCommentsSection;
module.exports.ToggleGateCommentsSection = ToggleGateCommentsSection;
module.exports.ToggleReservationCommentsSection = ToggleReservationCommentsSection;
module.exports.AddCommentToSection = AddCommentToSection;
 


