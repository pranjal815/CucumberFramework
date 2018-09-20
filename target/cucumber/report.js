$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the login functionality",
  "description": "Login with correct credentials will allow user to login",
  "id": "verify-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify login into StackOverflow website",
  "description": "",
  "id": "verify-the-login-functionality;verify-login-into-stackoverflow-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Users navigate to StackOverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicl on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be able to login into the StackOverFlow website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.users_navigate_to_StackOverflow_website()"
});
formatter.result({
  "duration": 85848535,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicl_on_Login_button()"
});
formatter.result({
  "duration": 64493,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_username()"
});
formatter.result({
  "duration": 86902,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_password()"
});
formatter.result({
  "duration": 77158,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 150376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_login_into_the_StackOverFlow_website()"
});
formatter.result({
  "duration": 91164,
  "status": "passed"
});
});