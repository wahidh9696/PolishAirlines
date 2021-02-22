package com.stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sample {
	
	@Given("The user has to be in login page")
	public void the_user_has_to_be_in_login_page() {
		System.out.println("Login Page");

	}

	@When("The User has to fill username")
	public void the_User_has_to_fill_username() {
		System.out.println("User name");
	}

	@When("The User has to be in password")
	public void the_User_has_to_be_in_password() {
		System.out.println("Password");
		}

	@Then("Login success")
	public void login_success() {
		System.out.println("Login successful");

	}

	
	

}
