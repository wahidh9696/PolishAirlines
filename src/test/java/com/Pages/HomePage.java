package com.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import baseClass.BaseClass;

public class HomePage extends BaseClass{
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@class='cookies-accept g-overflow o-btn o-btn-blue cookies-close g-no-padding g-no-margin']")
	private WebElement cookies;

	@FindBy(xpath="//select[@id='departureAirport']")
	private WebElement origin;

	@FindBy(xpath="//select[@id='destinationAirport']")
	private WebElement dest;

	@FindBy(xpath="(//label[@class='booker-label radio-label'])[1]")
	private WebElement roundTrip;
	
	@FindBy(xpath="//span[text()='One-way flight']")
	private WebElement oneWay;
	
	@FindBy(xpath="//span[@id='departureDate-display']")
	private WebElement deptDate;
	
	@FindBy(xpath="//span[@id='returnDate-display']")
	private WebElement returnDate;
	
	@FindBy(id="passenger-switch")
	private WebElement passenger;
	
	@FindBy(xpath="//select[@id='numOfAdults']")
	private WebElement adults;
	
	@FindBy(id="numOfYouths")
	private WebElement youths;
	
	@FindBy(id="numOfChildren")
	private WebElement children;
	
	@FindBy(id="numOfInfants")
	private WebElement infants;
	
	@FindBy(xpath="//select[@id='ticketClass']")
	private WebElement ticketClass;
	
	@FindBy(id="select2-ticketClass-result-cnfs-BUSINESS")
	private WebElement businessClass;
	
	@FindBy(xpath="(//span[text()='Search'])[2]")
	private WebElement btnSearch;

	public WebElement getCookies() {
		return cookies;
	}

	public WebElement getBusinessClass() {
		return businessClass;
	}

	public WebElement getOrigin() {
		return origin;
	}

	public WebElement getDest() {
		return dest;
	}

	public WebElement getRoundTrip() {
		return roundTrip;
	}

	public WebElement getOneWay() {
		return oneWay;
	}

	public WebElement getDeptDate() {
		return deptDate;
	}

	public WebElement getReturnDate() {
		return returnDate;
	}

	public WebElement getPassenger() {
		return passenger;
	}

	public WebElement getAdults() {
		return adults;
	}

	public WebElement getYouths() {
		return youths;
	}

	public WebElement getChildren() {
		return children;
	}

	public WebElement getInfants() {
		return infants;
	}

	public WebElement getTicketClass() {
		return ticketClass;
	}

	public WebElement getBtnSearch() {
		return btnSearch;
	}
	

}
