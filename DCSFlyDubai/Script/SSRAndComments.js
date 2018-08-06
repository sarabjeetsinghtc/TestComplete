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
function ClearManualGateComments(PaxName)
{
        Common.SafeKeys(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("BoardingPaxListContent").WPFObject("BoardingPaxList").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("DataGridActionPanel", "", 1).WPFObject("gridLayout").WPFObject("StackPanel", "", 1).WPFObject("SearchTextBox", "", 1), 5, PaxName);
        aqUtils.Delay(1000);
         
        var BoardingPassengerListGrid = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("BoardingPaxListContent").WPFObject("BoardingPaxList").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardingPaxListGrid");
        //Log.Message(BoardingPassengerListGrid.Items.Count);
        if(BoardingPassengerListGrid.Items.Count > 0){
         //select the pax row to edit gate comments
          BoardingPassengerListGrid.WPFObject("DataGridRow", "", 1).DblClick();
             }
          //Click on Edit button
          HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("BoardingPaxListContent").WPFObject("BoardingPaxList").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardingPaxListGrid").WPFObject("DataGridRow", "", 1).WPFObject("Canvas", "", 1).WPFObject("stackSelectedPanel").WPFObject("Grid", "", 1).WPFObject("Button", "", 2).WPFObject("Image", "", 1).Click();
           //Click on Gate comments Cell
          HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("BoardingPaxListContent").WPFObject("BoardingPaxList").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardingPaxListGrid").WPFObject("DataGridRow", "", 1).WPFObject("DataGridCell", "", 7).WPFObject("ContentPresenter", "", 1).WPFObject("StackPanel", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Border").Click();        
          var GateCommentsGrid = Aliases.flydubai_DCS_UI.WPFObject("HwndSource: popupWindow").WPFObject("popupWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("PaxComments").WPFObject("Grid", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("ItemsControl", "", 1);
          if(GateCommentsGrid.ChildCount > 0)
          {
              for (var i = 1; i <= GateCommentsGrid.ChildCount; i++)
              {
               var GateCommentCloseButton = Sys.Process("flydubai.DCS.UI").WPFObject("HwndSource: popupWindow").WPFObject("popupWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("PaxComments").WPFObject("Grid", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("ItemsControl", "", 1).WPFObject("ContentPresenter", "", i).WPFObject("ItemsBorder").WPFObject("Grid", "", 1).WPFObject("Button", "", 1);
              if(GateCommentCloseButton.Visible){
                    GateCommentCloseButton.WPFObject("Image", "", 1).Click();
                    aqUtils.Delay(1000);
                }
              }
          }
          //Delete the manual gate comment
          Aliases.flydubai_DCS_UI.WPFObject("HwndSource: popupWindow").WPFObject("popupWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Button", "", 1).WPFObject("Image", "", 1).Click();
         //Close the gate comments pop up
          Aliases.flydubai_DCS_UI.WPFObject("HwndSource: DCSMainWindow").WPFObject("DCSMainWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("BoardingView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ContentControl", "", 1).WPFObject("BoardingPax").WPFObject("Grid", "", 1).WPFObject("scrollVertical").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("BoardingPaxListContent").WPFObject("BoardingPaxList").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("BoardingPaxListGrid").WPFObject("DataGridRow", "", 1).WPFObject("Canvas", "", 1).WPFObject("stkUpdatePanel").WPFObject("Grid", "", 1).WPFObject("btnUpdate").WPFObject("Image", "", 1).Click();
   

}
 
module.exports.ClearManualGateComments = ClearManualGateComments;
module.exports.ToggleCheckInCommentsSection = ToggleCheckInCommentsSection;
module.exports.ToggleBaggageCommentsSection = ToggleBaggageCommentsSection;
module.exports.ToggleGateCommentsSection = ToggleGateCommentsSection;
module.exports.ToggleReservationCommentsSection = ToggleReservationCommentsSection;
module.exports.AddCommentToSection = AddCommentToSection;
 


