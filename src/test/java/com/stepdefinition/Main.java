package com.stepdefinition;

import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import com.Pages.HomePage;
import com.Pages.PageObjectManager;

import baseClass.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Main extends BaseClass {
	PageObjectManager page;
	HomePage p1;
	
	@Given("The user has to be in booking page")
	public void the_user_has_to_be_in_booking_page() {
//		page=PageObjectManager.getManager();
//		p1=page.getHome();
		p1=new HomePage();
		click(p1.getCookies());
	}

	@When("The user has to select the origin and destination")
	public void the_user_has_to_select_the_origin_and_destination(io.cucumber.datatable.DataTable d) {
		List<List<String>> li = d.asLists();
		List<String> list = li.get(2);
	
		selectByValue(p1.getOrigin(), list.get(0));
		selectByValue(p1.getDest(), list.get(1));
		driver.findElement(By.xpath("//span[text()='Book a flight']")).click();
	}
	
	@When("The user has to select the {string} and {string}")
	public void the_user_has_to_select_the_and(String org, String dest) {
		selectByValue(p1.getOrigin(), org);
		selectByValue(p1.getDest(), dest);
		driver.findElement(By.xpath("//span[text()='Book a flight']")).click();
	}

	@When("The user has to select the trip type")
	public void the_user_has_to_select_the_trip_type() {
		Actions a=new Actions(driver);
		a.moveToElement(p1.getRoundTrip()).click().perform();
	}

	@When("The user has to select the dates of the journey")
	public void the_user_has_to_select_the_dates_of_the_journey() {
		
			click(p1.getDeptDate());
			click(driver.findElement(By.xpath("(//a[@class='ui-state-default'])[33]")));
			
			if (p1.getReturnDate().isEnabled()==true) {
			click(p1.getReturnDate());
			click(driver.findElement(By.xpath("(//a[@class='ui-state-default'])[34]")));
			}
		}
	
	@When("The user has to select the number of passengers")
	public void the_user_has_to_select_the_number_of_passengers() {
		click(p1.getPassenger());
		selectByValue(p1.getAdults(), "2");
		selectByValue(p1.getYouths(), "1");
		selectByValue(p1.getChildren(), "3");
		selectByValue(p1.getInfants(), "0");
	}

	@When("The user fails the testcase wantedly")
	public void the_user_fails_the_testcase_wantedly() {
		Assert.assertTrue(false);
	}
	
	@When("The user has to select the cabin class")
	public void the_user_has_to_select_the_cabin_class() {
		Select s=new Select(p1.getTicketClass());
		s.selectByValue("BUSINESS");
	}

	@When("The user has to click the search button")
	public void the_user_has_to_click_the_search_button() {
		click(p1.getBtnSearch());
	}

	@Then("The user should be navigated to the flight details page")
	public void the_user_should_be_navigated_to_the_flight_details_page() {
		System.out.println("Done.....");
		
	}

	
}
