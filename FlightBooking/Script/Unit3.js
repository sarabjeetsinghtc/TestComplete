function Test9()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("http://qa4flights.flydubai.com/en/payment/ow/a1c0i0/DXB_SKT/20180722");
  //Clicks at point (23, 7) of the 'panel' object.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.panel.panel.Click(23, 7);
  //Clicks at point (92, 20) of the 'textboxVoucherreference' object.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.textboxVoucherreference.Click(92, 20);
  //Sets the text '5F4GY4' in the 'textboxVoucherreference' text editor.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.textboxVoucherreference.SetText("5F4GY4");
  //Clicks at point (149, 25) of the 'passwordboxVoucherpin' object.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.passwordboxVoucherpin.Click(149, 25);
  //Sets the text '3YGNMR' in the 'passwordboxVoucherpin' text editor.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.passwordboxVoucherpin.SetText("3YGNMR");
  //Clicks the 'buttonVerifyVoucher' button.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.buttonVerifyVoucher.ClickButton();
  //Clicks the 'buttonUseVoucher' button.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.form.panel.panel.buttonUseVoucher.ClickButton();
  //Sets the state of the 'checkboxCheckbox2' checkbox to True.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.panel.checkboxCheckbox2.ClickChecked(true);
  //Clicks the 'buttonPayNow' button.
  Aliases.browser.pageQa4flightsFlydubaiComEnPayme.formPaymentcompform.panel.panel.panel.panel.panel.buttonPayNow.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait();
}