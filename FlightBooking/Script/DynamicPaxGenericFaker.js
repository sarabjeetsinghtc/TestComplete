var faker = require("faker");
var formMonths = ["1 Jan", "2 Feb", "3 Mar", "4 Apr", "5 May", "6 Jun", "7 Jul", "8 Aug", "9 Sep", "10 Oct", "11 Nov", "12 Dec"];
var Common = require("Common");

function generateTestData(config, isAPISRequired) {
    var bookingPage, flightSelectSection, paxFormPage, paxFormSection, paxForm, optionalExtraPage, paymentPage;
    var selectedEnvironment = config[config.selectedEnv];
    var url = selectedEnvironment.Url + config.queryParameter;
    var paxCount = url.split('/')[6];
    var adults, children, infants, totalPax, i, segment, count = 1;
    var bookingObject = {
        paxList: [{}]
    };
    var path = Common.GetGenericFilePath();
        
    //Gets count of pax category based on axbycz notation where x represents adults, y represents children and z represents infants 
    adults = parseInt(paxCount[1]);
    children = parseInt(paxCount[3]);
    infants = parseInt(paxCount[5]);
    totalPax = adults + children + infants;

    //Navigates to result page and selects a flight
    Browsers.Item(btChrome).Navigate(url);
    bookingPage = Aliases.browser.pageQa4flightsFlydubaiComEnResul;
    bookingPage.Wait(25000);

    bookingObject.flightSegments = [{}];
    aqUtils.Delay(4000);
    flightSelectSection = bookingPage.panelSelectionDetailsHolder;
    var flightSelectCommon = flightSelectSection.Panel(0).Panel(6).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0);
    flightSelectCommon.Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Click();
    var stops = parseInt(flightSelectSection.Panel(0).Panel(6).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel(1).Panel(0).Panel(0).outerText.split(":")[1].trim());
    for (var i = 0; i <= stops; i++) {
        segment = {};
        segment.origin = flightSelectCommon.Panel(1).Panel(0).Panel(1).Panel(0).Panel(0).Panel(i).Panel(0).Panel(0).Panel(0).Panel(0).TextNode(0).outerText;
        segment.destination = flightSelectCommon.Panel(1).Panel(0).Panel(1).Panel(0).Panel(0).Panel(i).Panel(0).Panel(0).Panel(2).Panel(0).TextNode(0).outerText;
        segment.flightNum = flightSelectCommon.Panel(1).Panel(0).Panel(1).Panel(0).Panel(0).Panel(i).Panel(0).Panel(2).Panel(1).Panel(0).outerText.split("(")[0].trim();
        bookingObject.flightSegments[i] = segment;
    }

    flightSelectCommon.Panel(0).Panel(2).Panel(0).Panel(0).Click();
    var flightSelectionType = flightSelectCommon.Panel(2).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0);
    if (flightSelectionType.Exists) {
        flightSelectCommon.Panel(2).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Click();
    } else {
        flightSelectCommon.Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Click();
    }
    bookingPage.buttonEnterYourDetails.Click();

    //Navigates to the passenger information page 
    paxFormPage = Aliases.browser.pageQa4flightsFlydubaiComEnPasse;
    paxFormPage.Wait(25000);
    paxFormSection = paxFormPage.formPassengerformouter.panel;
    var fakerObject = {};

    //Loops through the pax sections and fills adult fields through faker js utilities
    for (i = 0; i < adults; i++) {

        fakerObject = (i === 0) ? getAdultData("primary") : getAdultData("secondary");

        bookingObject.paxList[count - 1] = fakerObject;
        paxForm = paxFormSection.panel.Panel(count - 1);
        paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c1").Select("atitleSelect" + i).ClickItem(fakerObject.Title);
        paxForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c2").SetText(fakerObject.FirstName);
        paxForm.Panel(0).Panel(1).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c4").SetText(fakerObject.LastName);

        if (i === 0) {
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).EmailInput("pax1c5").Keys(fakerObject.EmailAddress);
            paxForm.Panel(0).Panel(2).Panel(1).Panel(0).Panel(0).Panel(1).EmailInput("pax1c6").Keys(fakerObject.EmailAddress);
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c7").Select("adultDOBDay" + i).ClickItem(fakerObject.DOBDay);
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c8").Select("adultDOBMonth" + i).ClickItem(fakerObject.DOBMonth);
            paxForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c9").Select("adultDOBYear" + i).ClickItem(fakerObject.DOBYear);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c10").Select("countryCode0").ClickItem(fakerObject.CountryCode);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c11").Textbox("mobileNumber0").SetText(fakerObject.MobNumber);
            paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c12").Select("telcountryCode0").ClickItem(fakerObject.CountryCode);
            paxForm.Panel(0).Panel(3).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax1c13").Textbox("telNumber0").SetText(fakerObject.TelNumber);
            paxForm.Panel(0).Panel(3).Panel(2).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax1c14").Select("aCountryOfResidence0").ClickItem(fakerObject.Country);
            if (isAPISRequired) {
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(fakerObject.PassportNumber);
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(fakerObject.Country);
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(fakerObject.Country);
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
                paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
            }
        } else {
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c7").Select("adultDOBDay" + i).ClickItem(fakerObject.DOBDay);
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c8").Select("adultDOBMonth" + i).ClickItem(fakerObject.DOBMonth);
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c9").Select("adultDOBYear" + i).ClickItem(fakerObject.DOBYear);
            if (isAPISRequired) {
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(fakerObject.PassportNumber);
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(fakerObject.Country);
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(fakerObject.Country);
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
                paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
            }
        }
        count++;
    }

    //Loops through the pax sections and fills child fields through faker js utilities
    for (i = 0; i < children; i++) {

        fakerObject = getChildData();
        bookingObject.paxList[count - 1] = fakerObject;
        var childrenForm = paxFormSection.panel.Panel(count - 1);
        childrenForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c1").Panel(1).Panel(0).Select("ctitleSelect" + i).ClickItem(fakerObject.Title);
        childrenForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c2").SetText(fakerObject.FirstName);
        childrenForm.Panel(0).Panel(1).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c4").SetText(fakerObject.LastName);
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c5").Select("cDOBDay" + i).ClickItem(fakerObject.DOBDay);
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c6").Select("cDOBMonth" + i).ClickItem(fakerObject.DOBMonth);
        childrenForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c7").Select("cDOBYear" + i).ClickItem(fakerObject.DOBYear);
        if (isAPISRequired) {
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c8").SetText(fakerObject.PassportNumber);
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c9").Select("cissuingcountry" + i).ClickItem(fakerObject.Country);
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c10").Select("cNationality" + i).ClickItem(fakerObject.Country);
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c11").Select("childPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel(0).Select("childPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
            childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c13").Select("childPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
        }
        count++;
    }

    //Loops through the pax sections and fills infant fields through faker js utilities
    for (i = 0; i < infants; i++) {
        fakerObject = getInfantData();
        bookingObject.paxList[count - 1] = fakerObject;
        var infantForm = paxFormSection.panel.Panel(count - 1);
        var iIncrement = i + 1;

        infantForm.Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c1").Panel(1).Panel(0).Select("iAssignedTo" + i).ClickItem("Adult " + iIncrement);
        infantForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c2").Panel(1).Panel(0).Select("ititleSelect" + i).ClickItem(fakerObject.Title);
        infantForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("pax" + count + "c3").Textbox("ifirstName" + i).SetText(fakerObject.FirstName);
        infantForm.Panel(0).Panel(2).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c5").SetText(fakerObject.LastName);
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c6").Select("infantDOBDay" + i).ClickItem(fakerObject.DOBDay);
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c7").Select("infantDOBMonth" + i).ClickItem(fakerObject.DOBMonth);
        infantForm.Panel(0).Panel(3).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c8").Select("infantDOBYear" + i).ClickItem(fakerObject.DOBYear);
        if (isAPISRequired) {
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c9").SetText(fakerObject.PassportNumber);
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("pax" + count + "c10").ClickItem(fakerObject.Country);
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c11").Select("iNationality" + i).ClickItem(fakerObject.Country);
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c12").Select("infantPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c13").Select("infantPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
            infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c14").Select("infantPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
        }
        count++;
    }

    //Clicks the continue button to resume the booking flow
    paxFormSection.panel.buttonContinue.ClickButton();

    //Navigates to Optional extras page and skips the details
    optionalExtraPage = Aliases.browser.pageQa4flightsFlydubaiComEnOptio;
    optionalExtraPage.Wait(25000);
    optionalExtraPage.panel.panel.panel.buttonContinue.ClickButton();
    optionalExtraPage.popUpSection.panel.panel.panel.panel.panel.buttonNoThanks.ClickButton();

    //Navigates to payment page and completes payment by voucher
    paymentPage = Aliases.browser.pageQa4flightsFlydubaiComEnPayme;
    paymentPage.Wait(25000);
    var paymentSection = paymentPage.panel.formPaymentcompform.journeySummary.panel.panel.panel.panel.panel.panel;
    //paymentSection.panel.panel.panel.Click();
    paymentPage.panel.formPaymentcompform.journeySummary.Find("contentText", "Pay by voucher", 100).Click();
    paymentSection.textboxVoucherreference.SetText(selectedEnvironment.Voucher);
    paymentSection.passwordboxVoucherpin.SetText(selectedEnvironment.Pin);
    paymentSection.buttonVerifyVoucher.ClickButton();
    paymentSection.form.buttonUseVoucher.ClickButton();
    aqUtils.Delay(2000);

    var chkTermsAgree = paymentSection.checkboxCheckbox2;
    if (chkTermsAgree.WaitProperty("Enabled", true, 5000))
        chkTermsAgree.ClickChecked(true);
    aqUtils.Delay(2000);

    var btnPayNow = paymentPage.panel.formPaymentcompform.journeySummary.panel.panel.panel.panel.panel.buttonPayNow;
    if (btnPayNow.WaitProperty("Enabled", true, 5000))
        btnPayNow.ClickButton();
    aqUtils.Delay(20000);

    //Navigates to confirmation page and extracts the PNR details from the page
    Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait(35000);
    var confirmationSection = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel.panel.panel;
    var PNR = confirmationSection.panel.panel.panel.innerText;
    //var flightNum = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel2.panel.panel.panel.panel.panel.panel.flightnum.innerText;
    //flightNum = flightNum.trim();
    var flightDate = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel2.panel.panel.panel.panel.panel.panel.flightDate.innerText;

    //Writes the PNR details into the object for further use in check in module    
    var splitDate = flightDate.split(" ");
    var formattedDate = splitDate[1] + splitDate[2].substring(0, 3);

    bookingObject.PNR = PNR;
    bookingObject.adultCount = adults;
    bookingObject.childCount = children;
    bookingObject.infantCount = infants;
    bookingObject.flightNum = bookingObject.flightSegments[0].flightNum;
    bookingObject.flightDate = formattedDate;
    Log.Message("PNR " + PNR);
    
    writeToFile(JSON.stringify(bookingObject), path + "TestData_A-001.txt");
}

//Calls the faker js utilities to return an object with necessary details for adult booking form
function getAdultData(adultType) {
    var fakerPrimaryAdult = {};
    generateName(fakerPrimaryAdult, 1);
    generateDOB(fakerPrimaryAdult, 1);
    generatePPExpiry(fakerPrimaryAdult, 1);
    generatePassportDetail(fakerPrimaryAdult);
    if (adultType == "primary") {
        generatePrimaryOther(fakerPrimaryAdult);
    }
    return fakerPrimaryAdult;
}

//Calls the faker js utilities to return an object with necessary details for child booking form
function getChildData() {
    var fakerChild = {};
    generateName(fakerChild, 2);
    generateDOB(fakerChild, 2);
    generatePPExpiry(fakerChild, 1);
    generatePassportDetail(fakerChild);
    return fakerChild;
}

//Calls the faker js utilities to return an object with necessary details for infant booking form
function getInfantData() {
    var fakerInfant = {};
    generateName(fakerInfant, 2);
    generateDOB(fakerInfant, 3);
    generatePPExpiry(fakerInfant, 2);
    generatePassportDetail(fakerInfant);
    return fakerInfant;
}

//Faker utility to generate a name
//Parameter Info: 1. paxObject where generated data is appended, 2. paxType (1 for adults, 2 for children and infants)
function generateName(paxObject, paxType) {
    if (paxType == 1) {
        paxObject.Title = faker.name.prefix();
    } else {
        paxObject.Title = faker.name.suffix();
    }

    paxObject.FirstName = faker.name.firstName().replace("'", "");
    paxObject.LastName = faker.name.lastName().replace("'", "");
    return paxObject;
}

//Faker utility to generate date of birth
//Parameter Info: 1. paxObject where generated data is appended, 2. paxType (1 for adults, 2 for children and 3 for infants)
function generateDOB(paxObject, paxType) {

    var dob;
    //Adults
    if (paxType == 1) {
        dob = setDOBThreshold(1, 13, 70);
    }
    //Children
    else if (paxType == 2) {
        dob = setDOBThreshold(1, 3, 8);
    }
    //Infants
    else {
        dob = setDOBThreshold(2, 1, 1);
    }
    paxObject.DOBDay = dob.getDate();
    paxObject.DOBMonth = formMonths[dob.getMonth()];
    paxObject.DOBYear = dob.getFullYear().toString();
}

//Faker utility to set threshold for data of birth based on pax type
//Parameter Info: 1. paxType (1 for adults and children, 2 for infants)
//2. start to decrement the current date by specific number of years/months
//3. limit to provide an upper limit to which range should go
function setDOBThreshold(paxType, start, limit) {
    var dobThreshold, todayDate = new Date();
    //Year decrements
    if (paxType == 1) {
        dobThreshold = new Date(todayDate.getFullYear() - start, todayDate.getMonth(), todayDate.getDate());
    }
    //Month decrements
    else {
        dobThreshold = new Date(todayDate.getFullYear(), todayDate.getMonth() - start, todayDate.getDate());
    }
    return faker.date.past(limit, dobThreshold);
}

//Faker utility to set threshold for passport expiry based on pax type
//Parameter Info: 1. paxObject where generated data is appended, 2. paxType (1 for adults and children, 2 for infants)
function generatePPExpiry(paxObject, paxType) {
    var infantppMonths = ["1 ( Jan)", "2 ( Feb)", "3 ( Mar)", "4 ( Apr)", "5 ( May)", "6 ( Jun)", "7 ( Jul)", "8 ( Aug)", "9 ( Sep)", "10 ( Oct)", "11 ( Nov)", "12 ( Dec)"];
    var todayDate, ppThreshold, ppExpiry;

    todayDate = new Date();
    ppThreshold = new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate());
    ppExpiry = faker.date.future(8, ppThreshold);

    paxObject.PPExpiryDay = ppExpiry.getDate();
    paxObject.PPExpiryYear = ppExpiry.getFullYear().toString();
    if (paxType == 1) {
        paxObject.PPExpiryMonth = formMonths[ppExpiry.getMonth()];
    } else {
        paxObject.PPExpiryMonth = infantppMonths[ppExpiry.getMonth()];
    }
}
//Faker utility to generate passport number and country details
//Parameter Info: 1. paxObject where generated data is appended
function generatePassportDetail(paxObject) {
    paxObject.PassportNumber = faker.random.alphaNumeric(10).toUpperCase();
    paxObject.Country = faker.address.country();
}

//Faker utility to generate details required only for primary pax
//Parameter Info: 1. paxObject where generated data is appended
function generatePrimaryOther(paxObject) {
    paxObject.EmailAddress = faker.internet.email(paxObject.FirstName, paxObject.LastName);
    paxObject.CountryCode = faker.address.countryCode();
    paxObject.MobNumber = faker.random.number(9999999999);
    paxObject.TelNumber = faker.random.number(9999999999);
    paxObject.Address = faker.address.streetAddress();
    paxObject.City = faker.address.city();
}


//Writes the content of the object passed as parameter to a file in specified filePath
function writeToFile(paxObjectString, filePath) {
    //var sPath;
    //sPath = "c:\\MyFile.txt";
    if (!aqFile.Exists(filePath))
        aqFile.Create(filePath);
    aqFile.WriteToTextFile(filePath, paxObjectString, aqFile.ctANSI, true);
    Log.Message("The file contents are:");
    Log.Message(aqFile.ReadWholeTextFile(filePath, aqFile.ctANSI));
}

//Export modules for use in DCS windows application
module.exports.generateTestData = generateTestData;
module.exports.getAdultData = getAdultData;
module.exports.getChildData = getChildData;
module.exports.getInfantData = getInfantData;
module.exports.generateName = generateName;
module.exports.generateDOB = generateDOB;
module.exports.setDOBThreshold = setDOBThreshold;
module.exports.generatePPExpiry = generatePPExpiry;
module.exports.generatePassportDetail = generatePassportDetail;
module.exports.generatePrimaryOther = generatePrimaryOther;
module.exports.writeToFile = writeToFile;