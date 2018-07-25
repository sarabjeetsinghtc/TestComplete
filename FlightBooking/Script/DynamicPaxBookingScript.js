var faker = require("faker");

function Test1() {
    var bookingPage, flightSelectSection, paxFormPage, paxFormSection, paxForm, optionalExtraPage, paymentPage;
    var emailAddress, dob, countryCode, country, infantppMonth, primaryFirstName, primaryLastName;
    var formMonths = ["1 Jan", "2 Feb", "3 Mar", "4 Apr", "5 May", "6 Jun", "7 Jul", "8 Aug", "9 Sep", "10 Oct", "11 Nov", "12 Dec"];
    var infantppMonths = ["1 ( Jan)",  "2 ( Feb)",  "3 ( Mar)",  "4 ( Apr)",  "5 ( May)",  "6 ( Jun)",  "7 ( Jul)",  "8 ( Aug)",  "9 ( Sep)",  "10 ( Oct)",  "11 ( Nov)",  "12 ( Dec)"];
    var url = "http://qa4flights.flydubai.com/en/results/ow/a2c1i1/DXB_SKT/20180111";
    var paxCount = url.split('/')[6];
    var adults, children, infants, totalPax, count = 1;

    adults = parseInt(paxCount[1]); children = parseInt(paxCount[3]); infants = parseInt(paxCount[5]);
    totalPax = adults + children + infants;
    Browsers.Item(btChrome).Navigate(url);

    bookingPage = Aliases.browser.pageQa4flightsFlydubaiComEnResul;
    flightSelectSection = bookingPage.panel.panel.panel.panel.FlightSelection;
    flightSelectSection.ClassSelection.panel.panel.EconomySection.Click();
    flightSelectSection.SSRSelection.panel.panel.panel.panel.panel.NoSSR.Click();
    bookingPage.buttonEnterYourDetails.Click();

    paxFormPage = Aliases.browser.pageQa4flightsFlydubaiComEnPasse;
    paxFormSection = paxFormPage.formPassengerformouter.panel;
    country = faker.address.country();
    //Adults Loop
    for (var i = 0; i < adults; i++) {
        primaryFirstName = faker.name.firstName().replace("'", "");
        primaryLastName = faker.name.lastName().replace("'", "");
        emailAddress = faker.internet.email(primaryFirstName, primaryLastName);
        countryCode = faker.address.countryCode();
        dob = faker.date.past(50, new Date("Sat Sep 20 2000"));
        ppExpiry = faker.date.future(15, new Date("Sun Sep 20 2020"));

        paxForm = paxFormSection.panel.Panel(count - 1);
        paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c1").Select("atitleSelect" + i).ClickItem(faker.name.prefix());
        paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c2").SetText(primaryFirstName);
        // paxForm.Panel(0).Panel(1).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax"+ count +"c3").SetText("kumar");
        paxForm.Panel(0).Panel(1).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c4").SetText(primaryLastName);
        if (i == 0) {
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).EmailInput("pax1c5").Keys(emailAddress);
            paxForm.Panel(0).Panel(2).Panel(1).Panel(0).Panel(0).Panel(1).EmailInput("pax1c6").Keys(emailAddress);
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c7").Select("adultDOBDay" + i).ClickItem(dob.getDate());
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c8").Select("adultDOBMonth" + i).ClickItem(formMonths[dob.getMonth()]);
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c9").Select("adultDOBYear" + i).ClickItem(dob.getFullYear().toString());
            paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c10").Select("countryCode0").ClickItem(countryCode);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c11").Textbox("mobileNumber0").SetText(faker.random.number(9999999999));
            paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c12").Select("telcountryCode0").ClickItem(countryCode);
            paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c13").Textbox("telNumber0").SetText(faker.random.number(9999999999));
            paxForm.Panel(0).Panel(3).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c14").Select("aCountryOfResidence0").ClickItem(country);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(faker.random.alphaNumeric(10).toUpperCase());
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(country);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(country);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(ppExpiry.getDate());
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(formMonths[ppExpiry.getMonth()]);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(ppExpiry.getFullYear().toString());
        }
        else {
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c7").Select("adultDOBDay" + i).ClickItem(dob.getDate());
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c8").Select("adultDOBMonth" + i).ClickItem(formMonths[dob.getMonth()]);
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c9").Select("adultDOBYear" + i).ClickItem(dob.getFullYear().toString());
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(faker.random.alphaNumeric(10).toUpperCase());
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(country);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(country);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(ppExpiry.getDate());
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(formMonths[ppExpiry.getMonth()]);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(ppExpiry.getFullYear().toString());
        }
        count++;
    }
    //Adults Loop Ends

    //Child Loop Starts
    for (var i = 0; i < children; i++) {

        dob = faker.date.past(8, new Date("Sat Sep 20 2015"));
        ppExpiry = faker.date.future(15, new Date("Sun Sep 20 2020"));

        childrenForm = paxFormSection.panel.Panel(count - 1);
        childrenForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c1").Panel(1).Panel(0).Select("ctitleSelect" + i).ClickItem(faker.name.suffix());
        childrenForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c2").SetText(faker.name.firstName().replace("'", ""));
        //childrenForm.Panel(0).Panel(1).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c3");
        childrenForm.Panel(0).Panel(1).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c4").SetText(faker.name.lastName().replace("'", ""));
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c5").Select("cDOBDay" + i).ClickItem(dob.getDate());
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c6").Select("cDOBMonth" + i).ClickItem(formMonths[dob.getMonth()]);
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c7").Select("cDOBYear" + i).ClickItem(dob.getFullYear().toString());
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c8").SetText(faker.random.alphaNumeric(10).toUpperCase());
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c9").Select("cissuingcountry" + i).ClickItem(country);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c10").Select("cNationality" + i).ClickItem(country);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c11").Select("childPPExpiryDay" + i).ClickItem(ppExpiry.getDate());
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel(0).Select("childPPExpiryMonth" + i).ClickItem(formMonths[ppExpiry.getMonth()])
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c13").Select("childPPExpiryYear" + i).ClickItem(ppExpiry.getFullYear().toString());
        count++;
    }

    //Child Loop Ends

    for (var i = 0; i < infants; i++) {
    
        dob = faker.date.past(2, new Date("Mon Jan 01 2018"));
        ppExpiry = faker.date.future(15, new Date("Sun Sep 20 2020"));        
        
        infantForm = paxFormSection.panel.Panel(count - 1);
        iIncrement = i + 1;
        infantForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c1").Panel(1).Panel(0).Select("iAssignedTo" + i).ClickItem("Adult " + iIncrement);
        infantForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c2").Panel(1).Panel(0).Select("ititleSelect" + i).ClickItem(faker.name.suffix());
        infantForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("pax" + count + "c3").Textbox("ifirstName" + i).SetText(faker.name.firstName().replace("'", ""));
        infantForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c5").SetText(faker.name.lastName().replace("'", ""));
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c6").Select("infantDOBDay" + i).ClickItem(dob.getDate());
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c7").Select("infantDOBMonth" + i).ClickItem(formMonths[dob.getMonth()]);
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c8").Select("infantDOBYear" + i).ClickItem(dob.getFullYear().toString());
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c9").SetText(faker.random.alphaNumeric(10).toUpperCase());
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("pax" + count + "c10").ClickItem(country);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c11").Select("iNationality" + i).ClickItem(country);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c12").Select("infantPPExpiryDay" + i).ClickItem(ppExpiry.getDate());
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c13").Select("infantPPExpiryMonth" + i).ClickItem(infantppMonths[ppExpiry.getMonth()]);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c14").Select("infantPPExpiryYear" + i).ClickItem(ppExpiry.getFullYear().toString());
        count++;
    }

    paxFormSection.panel.buttonContinue.ClickButton();
    Aliases.browser.pageQa4flightsFlydubaiComEnOptio.Wait();

    optionalExtraPage = Aliases.browser.pageQa4flightsFlydubaiComEnOptio;
    optionalExtraPage.panel.panel.panel.buttonContinue.ClickButton();
    optionalExtraPage.popUpSection.panel.panel.panel.panel.panel.buttonNoThanks.ClickButton();
    Aliases.browser.pageQa4flightsFlydubaiComEnPayme.Wait();

    paymentPage = Aliases.browser.pageQa4flightsFlydubaiComEnPayme;
    var paymentSection = paymentPage.panel.formPaymentcompform.panel.panel.panel.panel.paymentGrid;
    paymentSection.panel.panel.panel3.Click();
    paymentSection.textboxVoucherreference.SetText("33THB1");
    paymentSection.passwordboxVoucherpin.SetText("MPCMCL");
    paymentSection.buttonVerifyVoucher.ClickButton();
    paymentSection.form.buttonUseVoucher.ClickButton();
    paymentSection.panel2.panel.panel.checkboxTermsAgree.ClickChecked(true);
    aqUtils.Delay(4000);
    paymentPage.formPaymentcompform.panel.panel.panel.panel.panel2.buttonPayNow.ClickButton();
    Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait();

    var confirmationSection = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel.panel.panel;
    aqUtils.Delay(4000);
    var PNR = confirmationSection.panel.panel.panel.innerText;
    Log.Message("PNR " + PNR);
}


