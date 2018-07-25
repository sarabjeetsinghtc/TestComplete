function Test1()
{
  var bookingPage, flightSelectSection, paxFormPage, paxFormSection, paxForm, optionalExtraPage, paymentPage;
  Browsers.Item(btChrome).Navigate("http://qa4flights.flydubai.com/en/results/ow/a9/DXB_SKT/20180110"); //Make Dynamic
  bookingPage = Aliases.browser.pageQa4flightsFlydubaiComEnResul;
  flightSelectSection = bookingPage.panel.panel.panel.panel.FlightSelection;
  flightSelectSection.ClassSelection.panel.panel.EconomySection.Click();
  flightSelectSection.SSRSelection.panel.panel.panel.panel.panel.NoSSR.Click();
  bookingPage.buttonEnterYourDetails.Click();
  
  paxFormPage = Aliases.browser.pageQa4flightsFlydubaiComEnPasse;
  paxFormSection = paxFormPage.formPassengerformouter.panel
  paxForm = paxFormSection.panel;
  
  //Make dynamic
  paxForm.selectTitle.ClickItem("Mr"); 
  paxForm.textboxPax1FirstName.SetText("xyz");
  paxForm.textboxPax1MiddleName.SetText("kumar");
  paxForm.textboxPax1LastName.SetText("yadav");
  paxForm.emailinputPax1.Keys("xyz@anyemail.com");
  paxForm.emailinputPax1Confirm.Keys("xyz@anyemail.com");
  paxForm.selectAdultDOBDay.ClickItem("13");
  paxForm.selectAdultDOBMonth.ClickItem("2 feb");
  paxForm.selectAdultDOBYear.ClickItem("1990");
  paxForm.selectMobileCountryCode.ClickItem("Bangladesh + 880");
  paxForm.textboxMobileNumber.SetText("9897786");
  paxForm.selectTelCountryCode.ClickItem("Bangladesh + 880");
  paxForm.textboxTelNumber.SetText("0090990");
  paxForm.selectCountryofResidence.ClickItem("Bangladesh");
  paxForm.textboxPassportNumber.SetText("ABCV12345");  
  paxForm.selectIssuingCountry.ClickItem("Bangladesh");
  paxForm.selectNationality.ClickItem("Bangladesh");
  paxForm.selectAdultPPExpiryDay.ClickItem("13");
  paxForm.selectAdultPPExpiryMonth.ClickItem("2 feb");
  paxForm.selectAdultPPExpiryYear.ClickItem("2022");
  
  //Make Dynamic ends
  paxFormSection.buttonContinue.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnOptio.Wait();
  
  optionalExtraPage = Aliases.browser.pageQa4flightsFlydubaiComEnOptio;
  optionalExtraPage.panel.panel.panel.buttonContinue.ClickButton();
  optionalExtraPage.buttonNoThanks.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.Wait(); 
  
  paymentPage = Aliases.browser.pageQa4flightsFlydubaiComEnPayme;
  var voucherSection = paymentPage.formPaymentcompform.panel.panel.panel.panel.panel;
  voucherSection.panel.panel.Click();  
  voucherSection.textboxVoucherreference.SetText("33THB1");
  voucherSection.passwordboxVoucherpin.SetText("MPCMCL");
  voucherSection.buttonVerifyVoucher.ClickButton();
  voucherSection.form.buttonUseVoucher.ClickButton();
  voucherSection.checkboxCheckbox3.ClickChecked(true);  
  aqUtils.Delay(2000);
  paymentPage.formPaymentcompform.panel.panel.panel.panel.buttonPayNow.ClickButton();
  Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait();  
  
  var confirmationSection  = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel.panel.panel;
  aqUtils.Delay(4000);
  var PNR =  confirmationSection.panel.panel.panel.innerText;
  Log.Message("PNR " + PNR);
}
