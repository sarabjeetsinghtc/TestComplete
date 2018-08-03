var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;

function AddBaggage(Pieces,Weight){
          Common.SafeSetText(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("WrapPanel", "", 1).WPFObject("StackPanel", "", 2).WPFObject("txtPieces"),10,Pieces);
          Common.SafeSetText(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("WrapPanel", "", 1).WPFObject("StackPanel", "", 4).WPFObject("txtWeight"),10,Weight);
          Common.SafeClickObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("WrapPanel", "", 1).WPFObject("StackPanel", "", 7).WPFObject("StackPanel", "", 1).WPFObject("btnAddCategory"), 4);
          if(Weight%32 > Pieces){
              Common.WaitForObject(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentControl", "", 1).WPFObject("ErrorMessage", "", 1).WPFObject("Grid", "", 1).WPFObject("ScrollViewer", "", 1).WPFObject("Grid", "", 1).WPFObject("ErrorMessagePopup").WPFObject("ContentPresenter", "", 1).WPFObject("ErrorMessageBorder").WPFObject("Grid", "", 1).WPFObject("TextBlock", "Single piece exceeds 32kgs.*", 1),5);
              Common.SafeClickObject(Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Button", "Proceed", 2),3);
          }
          aqUtils.Delay(6000);
          
          if(Weight > GetBaggageAllowance()){
              Common.SafeClickObject(HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).Find("WPFControlText","Add To Cart",200),10);
              //var ExtraBaggage = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).Find("WPFControlName","baggageScreen",100).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 2).WPFObject("Border", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 2).WPFObject("StackPanel", "", 1).WPFObject("totalweight");
              var ExtraBaggage = HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",100).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",100).Find("WPFControlName","BaggaeUserControl",100).Find("WPFControlName","totalweight",100);
              Log.Message("Extra Baggage added is: "+ExtraBaggage.WPFControlText);    
          }
          for(var i=1;i<Pieces+1;i++){
              AddTag(GenerateTagNumber());
          }
          //return  HomePage.WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ContentGrid").WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",100).WPFObject("TopWindow").Find("WPFControlName","basicTabsContent",100).Find("WPFControlName","BaggaeUserControl",100).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("StackPanel", "", 1).WPFObject("TextBlock", "*", 2).WPFControlText.replace(/,/g,'') ;
}

function AddTag(TagNum){
          Common.SafeClickObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("checkboxAddTags"),5);
          aqUtils.Delay(2000);
          Common.SafeSetText(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 1).WPFObject("tagNumber"),5,TagNum);
          Sys.Desktop.Keys("[Tab]");
          aqUtils.Delay(1000);          
          Common.SafeClickObject(HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").WPFObject("TopWindow").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("basicTabsContent").WPFObject("BasicTab").WPFObject("Grid", "", 1).WPFObject("tab").WPFObject("BaggaeUserControl").WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("ParentScroll").WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("StackPanel", "", 1).WPFObject("Grid", "", 1).WPFObject("StackPanel", "", 3).WPFObject("StackPanel", "", 1).WPFObject("Button", "Add", 1),5);
          aqUtils.Delay(3000);
}

function GetBaggageAllowance(){
          var Baggage = HomePage.ContentGrid.WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 1).WPFObject("CheckinMainViewContent").Find("WPFControlName","basicTabsContent",100).Find("WPFControlName","BaggaeUserControl",100).Find("WPFControlName","ParentScroll",100).Find(new Array("ClrClassName","WPFControlOrdinalNo"), new Array("WrapPanel","1"),100).WPFObject("StackPanel", "", 5).WPFObject("StackPanel", "", 1).WPFObject("TextBox", "", 1); 
          return Baggage.wText;
}

function GenerateTagNumber(){
          var Tag ="FZ";
          for(var i=1;i<7;i++){
   		        Tag += Math.floor(Math.random() * 10);
          }
          return Tag;
}


module.exports.AddBaggage = AddBaggage;
module.exports.AddTag = AddTag;
module.exports.GetBaggageAllowance = GetBaggageAllowance;