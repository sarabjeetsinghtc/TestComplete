var faker = require("faker");
var formMonths = ["1 Jan", "2 Feb", "3 Mar", "4 Apr", "5 May", "6 Jun", "7 Jul", "8 Aug", "9 Sep", "10 Oct", "11 Nov", "12 Dec"];

function executeTestCases(){
  var caseList = readTestCases();
  
  for(var i =0; i<caseList.testList.length; i++)
  {
    generateTestData(caseList.testList[i]);
  }
}

function generateTestData(testCase) {
    var bookingPage, flightSelectSection, paxFormPage, paxFormSection, paxForm, optionalExtraPage, paymentPage;
    var url = testCase.url;
    var paxCount = url.split('/')[6];
    var adults, children, infants, totalPax, i, count = 1;

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
    var fakerObject = {};
    var bookingObject = {paxList : [{}]};
    bookingObject.testCaseID = testCase.caseID;
    //Adults Loop

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
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(fakerObject.PassportNumber);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(fakerObject.Country);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(fakerObject.Country);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
            paxForm.Panel(0).Panel(5).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
        }
        else {
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel("pax" + count + "c7").Select("adultDOBDay" + i).ClickItem(fakerObject.DOBDay);
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c8").Select("adultDOBMonth" + i).ClickItem(fakerObject.DOBMonth);
            paxForm.Panel(0).Panel(2).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c9").Select("adultDOBYear" + i).ClickItem(fakerObject.DOBYear);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel("pax" + count + "c15").Textbox("passportnumber" + i).SetText(fakerObject.PassportNumber);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("issuingcountry" + i).ClickItem(fakerObject.Country);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c17").Select("Nationality" + i).ClickItem(fakerObject.Country);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c18").Select("adultPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c19").Select("adultPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
            paxForm.Panel(0).Panel(3).Panel(0).Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c20").Select("adultPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
        }
        count++;
    }
    //Adults Loop Ends

    //Child Loop Starts
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
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c8").SetText(fakerObject.PassportNumber);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c9").Select("cissuingcountry" + i).ClickItem(fakerObject.Country);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c10").Select("cNationality" + i).ClickItem(fakerObject.Country);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c11").Select("childPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel(0).Select("childPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
        childrenForm.Panel(0).Panel(4).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c13").Select("childPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
        count++;
    }

    //Child Loop Ends

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
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Textbox("pax" + count + "c9").SetText(fakerObject.PassportNumber);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel(0).Select("pax" + count + "c10").ClickItem(fakerObject.Country);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(1).Panel("pax" + count + "c11").Select("iNationality" + i).ClickItem(fakerObject.Country);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(1).Panel(0).Panel("pax" + count + "c12").Select("infantPPExpiryDay" + i).ClickItem(fakerObject.PPExpiryDay);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(2).Panel("pax" + count + "c13").Select("infantPPExpiryMonth" + i).ClickItem(fakerObject.PPExpiryMonth);
        infantForm.Panel(0).Panel(5).Panel(0).Panel(0).Panel(0).Panel(2).Panel(0).Panel(0).Panel(3).Panel("pax" + count + "c14").Select("infantPPExpiryYear" + i).ClickItem(fakerObject.PPExpiryYear);
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
    paymentSection.textboxVoucherreference.SetText("33THB1"); //Make dynamic
    paymentSection.passwordboxVoucherpin.SetText("MPCMCL"); //Make dynamic
    paymentSection.buttonVerifyVoucher.ClickButton();
    paymentSection.form.buttonUseVoucher.ClickButton();
    paymentSection.panel2.panel.panel.checkboxTermsAgree.ClickChecked(true);
    aqUtils.Delay(4000);
    paymentPage.formPaymentcompform.panel.panel.panel.panel.panel2.buttonPayNow.ClickButton();
    Aliases.browser.pageQa4flightsFlydubaiComEnConfi.Wait();

    var confirmationSection = Aliases.browser.pageQa4flightsFlydubaiComEnConfi.panel.panel.panel.panel.panel;
    aqUtils.Delay(6000);
    var PNR = confirmationSection.panel.panel.panel.innerText;
    bookingObject.PNR = PNR;
    bookingObject.adultCount = adults;
    bookingObject.childCount = children;
    bookingObject.infantCount = infants;
    Log.Message("PNR " + PNR);
    
    writeToFile(JSON.stringify(bookingObject), "D:\\TestData\\TestData_" + testCase.caseID + ".txt");
}

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

function getChildData() {
    var fakerChild = {};
    generateName(fakerChild, 2);
    generateDOB(fakerChild, 2);
    generatePPExpiry(fakerChild, 1);
    generatePassportDetail(fakerChild);
    return fakerChild;
}

function getInfantData() {
    var fakerInfant = {};
    generateName(fakerInfant, 2);
    generateDOB(fakerInfant, 3);
    generatePPExpiry(fakerInfant, 2);
    generatePassportDetail(fakerInfant);
    return fakerInfant;
}


function generateName(paxObject, paxType) {
    if (paxType == 1) {
        paxObject.Title = faker.name.prefix();
    }
    else {
        paxObject.Title = faker.name.suffix();
    }

    paxObject.FirstName = faker.name.firstName().replace("'", "");
    paxObject.LastName = faker.name.lastName().replace("'", "");
    return paxObject;
}

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

function setDOBThreshold(type, start, limit) {
    var dobThreshold, todayDate = new Date();
    //Year decrements
    if (type == 1) {
        dobThreshold = new Date(todayDate.getFullYear() - start, todayDate.getMonth(), todayDate.getDate());
    }
    //Month decrements
    else {
        dobThreshold = new Date(todayDate.getFullYear(), todayDate.getMonth() - start, todayDate.getDate());
    }
    return faker.date.past(limit, dobThreshold);
}

function generatePPExpiry(paxObject, paxType) {
    var infantppMonths = ["1 ( Jan)", "2 ( Feb)", "3 ( Mar)", "4 ( Apr)", "5 ( May)", "6 ( Jun)", "7 ( Jul)", "8 ( Aug)", "9 ( Sep)", "10 ( Oct)", "11 ( Nov)", "12 ( Dec)"];
    var todayDate, ppThreshold, ppExpiry;

    todayDate = new Date();
    ppThreshold = new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate());
    ppExpiry = faker.date.future(15, ppThreshold);

    paxObject.PPExpiryDay = ppExpiry.getDate();
    paxObject.PPExpiryYear = ppExpiry.getFullYear().toString();
    if (paxType == 1) {
        paxObject.PPExpiryMonth = formMonths[ppExpiry.getMonth()];
    }
    else {
        paxObject.PPExpiryMonth = infantppMonths[ppExpiry.getMonth()];
    }
}

function generatePassportDetail(paxObject) {
    paxObject.PassportNumber = faker.random.alphaNumeric(10).toUpperCase();
    paxObject.Country = faker.address.country();
}

function generatePrimaryOther(paxObject) {
    paxObject.EmailAddress = faker.internet.email(paxObject.FirstName, paxObject.LastName);
    paxObject.CountryCode = faker.address.countryCode();
    paxObject.MobNumber = faker.random.number(9999999999);
    paxObject.TelNumber = faker.random.number(9999999999);
}

function writeToFile(paxObjectString, filePath)
{
  //var sPath;
  //sPath = "c:\\MyFile.txt";
  if (!aqFile.Exists(filePath)) 
    aqFile.Create(filePath);
  aqFile.WriteToTextFile(filePath, paxObjectString, aqFile.ctANSI, true);
  Log.Message("The file contents is:");
  Log.Message(aqFile.ReadWholeTextFile(filePath, aqFile.ctANSI));
}

function readTestCases()
{
  var testListObject = {};
  var tests = {"testList": [{}]};
  var t ={};
  var filePath = "D:\\TestCases\\TestCaseList.txt";
  if (!aqFile.Exists(filePath)){
    Log.Message("The test case list file doesn't exists");
    }
    else{
      testListObject = JSON.parse(aqFile.ReadWholeTextFile(filePath, aqFile.ctANSI));
    }
    for (var i =0; i<testListObject.testCaseList.length; i++){
      t ={};
      t.url = generateDynamicURL(testListObject.testCaseList[i]);
      t.caseID = testListObject.testCaseList[i].caseID;
      tests.testList[i] = t;
    } 
    return tests;       
}



function generateDynamicURL(testCaseObject){
  var dynamicURL, baseURL = "http://qa4flights.flydubai.com/en/results/[journeyType]/a[adultCount]c[childCount]i[infantCount]/[source]_[destination]/[journeyDate]";
  var journeyType = (testCaseObject.journeyType === "Onward") ? "ow" : "rt";
  
  dynamicURL = baseURL.replace("[adultCount]", testCaseObject.adultCount).replace("[childCount]", testCaseObject.childCount).replace("[infantCount]", testCaseObject.infantCount);
  dynamicURL = dynamicURL.replace("[source]", testCaseObject.source).replace("[destination]", testCaseObject.destination);
  dynamicURL = dynamicURL.replace("[journeyType]", journeyType).replace("[journeyDate]", testCaseObject.journeyDate);
  return dynamicURL;
}