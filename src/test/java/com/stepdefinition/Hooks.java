package com.stepdefinition;

import baseClass.BaseClass;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	
	@Before
	public void beforeScenario() {
		launchBrowser();
		launchUrl("https://www.lot.com/in/en/");
		waitAll();
	}
	
	@After
	public void afterScenario() {
		quitBrowser();
	}
	
	
}
