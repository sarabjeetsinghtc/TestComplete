var faker = require("faker");

function Test1()
{
  var bookingPage, flightSelectSection, paxFormPage, paxFormSection, paxForm, optionalExtraPage, paymentPage;
  var iIncrement; 
  
  var url = "http://qa4flights.flydubai.com/en/results/ow/a1c0i0/DXB_SKT/20180722";
  var paxCount = url.split('/')[6];  
  var adults, children, infants, totalPax, count = 1;
  
  adults = parseInt(paxCount[1]); children = parseInt(paxCount[3]); infants = parseInt(paxCount[5]);
  totalPax = adults + children + infants;
  Browsers.Item(btChrome).Navigate(url); //Make Dynamic
  
  bookingPage = Aliases.browser.pageQa4flightsFlydubaiComEnResul;
  flightSelectSection = bookingPage.panel.panel.panel.panel.FlightSelection;
  flightSelectSection.ClassSelection.panel.panel.EconomySection.Click();
  flightSelectSection.SSRSelection.panel.panel.panel.panel.panel.NoSSR.Click();
  bookingPage.buttonEnterYourDetails.Click();
  
  paxFormPage = Aliases.browser.pageQa4flightsFlydubaiComEnPasse;
  paxFormSection = paxFormPage.formPassengerformouter.panel;
  for( var i =0; i<adults; i++)
  {
  paxForm = paxFormSection.panel.Panel(i);
  iIncrement = parseInt(i)+1;
  //Make dynamic
  paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax"+ iIncrement +"c1").Select("atitleSelect"+ i).ClickItem("Mr"); 
  paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Textbox("pax"+ iIncrement +"c2").SetText(faker.name.firstName());
  paxForm.Panel(0).Panel(1).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax"+ iIncrement +"c3").SetText("kumar");
  paxForm.Panel(0).Panel(1).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax"+ iIncrement +"c4").SetText(faker.name.lastName());
  if(i==0)
  {
  paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).EmailInput("pax1c5").Keys("xyz@anyemail.com");
  paxForm.Panel(0).Panel(2).Panel(1).Panel(0).Panel(0).Panel(1).EmailInput("pax1c6").Keys("xyz@anyemail.com");
  paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax"+ iIncrement +"c7").Select("adultDOBDay" + i).ClickItem("13");
  paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax"+ iIncrement +"c8").Select("adultDOBMonth" + i).ClickItem("2 feb");
  paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax"+ iIncrement +"c9").Select("adultDOBYear" + i).ClickItem("1990");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c10").Select("countryCode0").ClickItem("Bangladesh + 880");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c11").Textbox("mobileNumber0").SetText("9897786");
  paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c12").Select("telcountryCode0").ClickItem("Bangladesh + 880");
  paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c13").Textbox("telNumber0").SetText("0090990");
  paxForm.Panel(0).Panel(3).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c14").Select("aCountryOfResidence0").ClickItem("Bangladesh");
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax"+ iIncrement +"c15").Textbox("passportnumber" + i).SetText("ABCV12345" + i);  
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem("Bangladesh");
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax"+ iIncrement +"c17").Select("Nationality" + i).ClickItem("Bangladesh");
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax"+ iIncrement +"c18").Select("adultPPExpiryDay" + i).ClickItem("13");
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax"+ iIncrement +"c19").Select("adultPPExpiryMonth" + i).ClickItem("2 feb");
  paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax"+ iIncrement +"c20").Select("adultPPExpiryYear" + i).ClickItem("2022"); 
  }
  else{
  paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax"+ iIncrement +"c7").Select("adultDOBDay" + i).ClickItem("13");
  paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax"+ iIncrement +"c8").Select("adultDOBMonth" + i).ClickItem("2 feb");
  paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax"+ iIncrement +"c9").Select("adultDOBYear" + i).ClickItem("1990");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax"+ iIncrement +"c15").Textbox("passportnumber" + i).SetText("ABCV12345"+ i);  
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem("Bangladesh");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax"+ iIncrement +"c17").Select("Nationality" + i).ClickItem("Bangladesh");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax"+ iIncrement +"c18").Select("adultPPExpiryDay" + i).ClickItem("13");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax"+ iIncrement +"c19").Select("adultPPExpiryMonth" + i).ClickItem("2 feb");
  paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax"+ iIncrement +"c20").Select("adultPPExpiryYear" + i).ClickItem("2022"); 
  }  
  }
  //Make Dynamic ends
  paxFormSection.panel.buttonContinue.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnOptio.Wait();
    
  optionalExtraPage = Aliases.browser.pageQa4flightsFlydubaiComEnOptio;
  optionalExtraPage.panel.panel.panel.buttonContinue.ClickButton();
  optionalExtraPage.popUpSection.panel.panel.panel.panel.panel.buttonNoThanks.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.Wait(); 
  
  paymentPage = Aliases.browser.pageQa4flightsFlydubaiComEnPayme;
  var voucherSection = paymentPage.formPaymentcompform.panel.panel.panel.panel.panel;
  voucherSection.panel.panel.Click();  
  voucherSection.textboxVoucherreference.SetText("33THB1");
  voucherSection.passwordboxVoucherpin.SetText("MPCMCL");
  voucherSection.buttonVerifyVoucher.ClickButton();
  voucherSection.form.buttonUseVoucher.ClickButton();
  voucherSection.checkboxCheckbox3.ClickChecked(true);  
  aqUtils.Delay(4000);
  paymentPage.formPaymentcompform.panel.panel.panel.panel.buttonPayNow.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait();  
  
  var confirmationSection  = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel.panel.panel;
  aqUtils.Delay(4000);
  var PNR =  confirmationSection.panel.panel.panel.innerText;
  Log.Message("PNR " + PNR);
}
