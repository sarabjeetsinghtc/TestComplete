var Common = require("Common");
var HomePage = Aliases.flydubai_DCS_UI.HwndSource_DCSMainWindow.DCSMainWindow;
var ReadDataFromTextFile = require("ReadDataFromTextFile");
var Popup = Aliases.flydubai_DCS_UI.HwndSource_popupWindow.popupWindow;

function VerifyAncillaryServicesAdded(AddedServices){          
          Common.WaitForObject(HomePage.FindChild("WPFControlName","Contentgrid",50).WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",50).Find("WPFControlName","AdvanceTabGrid",50).WPFObject("Tab").WPFObject("PaymentDetailsTabView", "", 1),20);      
                
          var ExpandServicesButton = HomePage.FindChild("WPFControlName","Contentgrid",50).WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",50).Find("WPFControlName","AdvanceTabGrid",50).WPFObject("Tab").WPFObject("PaymentDetailsTabView", "", 1).FindChild(new Array("WPFControlName","WPFControlOrdinalNo"),new Array("PaxPaymentUserControl",2),30).FindChild("WPFControlName","spPayment",30).FindChild("WPFControlName","PaymentCompletedServiceToggleButton",30);
          Common.SafeClickObject(ExpandServicesButton.WPFObject("Image", "", 1),20);
          var AncillaryServicePrice = HomePage.FindChild("WPFControlName","Contentgrid",50).WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",50).Find("WPFControlName","AdvanceTabGrid",50).WPFObject("Tab").WPFObject("PaymentDetailsTabView", "", 1).FindChild(new Array("WPFControlName","WPFControlOrdinalNo"),new Array("PaxPaymentUserControl",2),30).FindChild("WPFControlName","spPayment",30).WPFObject("DockPanel", "", 1).WPFObject("TextBlock", "*", 1);
          Log.Message(AddedServices[AddedServices.length-1]);
          Log.Message(AncillaryServicePrice.WPFControlText);
          Log.Message(AncillaryServicePrice.WPFControlText.replace(/,/g,'') );
          if(AncillaryServicePrice.WPFControlText.replace(/,/g,'') == AddedServices[AddedServices.length-1])
                Log.Message("Ancillary Service Grand Total is matching");
          else 
                Log.Warning("Ancillary Service Grand Total is not matching");
                
          var ServiceListGrid =  HomePage.FindChild("WPFControlName","Contentgrid",50).WPFObject("ModuleContent").WPFObject("CheckinMainView", "", 1).Find("WPFControlName","CheckinMainViewContent",50).Find("WPFControlName","AdvanceTabGrid",50).WPFObject("Tab").WPFObject("PaymentDetailsTabView", "", 1).FindChild(new Array("WPFControlName","WPFControlOrdinalNo"),new Array("PaxPaymentUserControl",2),30).FindChild("WPFControlName","spPayment",30).FindChild("WPFControlName","parentList",30);
           Log.Message(ServiceListGrid.wItemCount);
          for(var i=1;i<ServiceListGrid.wItemCount+1;i++){
                var PaxRecord = ServiceListGrid.WPFObject("ListViewItem", "", i).WPFObject("Grid", "", 1).WPFObject("Border", "", 1).WPFObject("CheckBox", "*", 1).WPFObject("TextBlock", "*", 1);
                Log.Message(PaxRecord.WPFControlText);
                for(var j=0;j<AddedServices.length-1;j++){
                      if(PaxRecord.WPFControlText == AddedServices[j]){
                            Log.Message(PaxRecord.WPFControlText +" Ancillary service is added ");
                            break;
                      }
                }
          }
}

function ProcessPaymentPopup(){
     var config = ReadDataFromTextFile.ReadData("E:\\Automation\\Automation\\Automation\\Data\\config.txt");
    var selectedEnvironment = config[config.selectedEnv];
  Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Voucher Reference", 100), 5);
     Common.SafeSetText(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlName",  "voucherReference", 100), 5, selectedEnvironment.Voucher);
      Common.SafeSetText(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlName",  "voucherPinNumber", 100), 5, selectedEnvironment.Pin);
      Sys.Desktop.Keys("[Tab]");
      Sys.Desktop.Keys("[Tab]");
      Sys.Desktop.Keys("[Tab]");
      Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Proceed", 100), 150);
     Common.SafeClickObject(Popup.Find("WPFControlName", "paymentView", 100).Find("WPFControlText",  "Proceed with Checkin", 100), 100);
}

//function 

module.exports.ProcessPaymentPopup = ProcessPaymentPopup;
module.exports.VerifyAncillaryServicesAdded = VerifyAncillaryServicesAdded;