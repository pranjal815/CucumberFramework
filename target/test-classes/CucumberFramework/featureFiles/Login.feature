Feature: Verify the login functionality
	Login with correct credentials will allow user to login
	
Scenario: Verify login into StackOverflow website
	Given Users navigate to StackOverflow website
	And User clicl on Login button
	And User enter valid username
	And User enter valid password
	When User click on Login button
	Then User should be able to login into the StackOverFlow website