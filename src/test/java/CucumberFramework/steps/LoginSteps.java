package CucumberFramework.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	@Given("^Users navigate to StackOverflow website$")
	public void users_navigate_to_StackOverflow_website() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}

	@Given("^User clicl on Login button$")
	public void user_clicl_on_Login_button() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}

	@Given("^User enter valid username$")
	public void user_enter_valid_username() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}

	@Given("^User enter valid password$")
	public void user_enter_valid_password() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}

	@When("^User click on Login button$")
	public void user_click_on_Login_button() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}

	@Then("^User should be able to login into the StackOverFlow website$")
	public void user_should_be_able_to_login_into_the_StackOverFlow_website() throws Throwable {
		System.out.println("users_navigate_to_StackOverflow_website");
	}


}
