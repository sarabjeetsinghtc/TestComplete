var Common = require("Common");
var HomePage = require("HomePage");
var LoginScreen = Aliases.flydubai_DCS_UI.HwndSource_DCSLoginView.DCSLoginView;

function Login(UserName,PassWord){
        Common.EnterTextInTextBox(LoginScreen.txtBoxUserName,5,UserName);
        Common.EnterTextInPasswordField(LoginScreen.passwordBox,2,PassWord);
        LoginScreen.loginButton.Click();
}

function AdvancedLogin(UserName,PassWord,Role,Environment,OStation){
          LoginScreen.txtBoxUserName.SetText(UserName);
          LoginScreen.passwordBox.Keys(PassWord);
          LoginScreen.chkboxAdvanced.Click();
          aqUtils.Delay(2000);
          //Common.SelectDropDownValue(LoginScreen.WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("grdlogin").WPFObject("StackPanel", "", 2).WPFObject("Grid", "", 1).WPFObject("rolesCombobox"),Role);
          Common.SelectDropDownValue(LoginScreen.WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("grdlogin").WPFObject("StackPanel", "", 2).WPFObject("environmentCombobox"),Environment);
          LoginScreen.WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("grdlogin").WPFObject("StackPanel", "", 2).WPFObject("txtBoxStation").Clear();
          LoginScreen.WPFObject("Grid", "", 1).WPFObject("Grid", "", 2).WPFObject("grdlogin").WPFObject("StackPanel", "", 2).WPFObject("txtBoxStation").SetText(OStation);
          LoginScreen.loginButton.Click(); 
          aqUtils.Delay(9000);
          HomePage.VerifyLogin();         
}
module.exports.Login = Login;
module.exports.AdvancedLogin = AdvancedLogin;