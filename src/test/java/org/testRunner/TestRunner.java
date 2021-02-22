package org.testRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import baseClass.JVMReport;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",
					glue="com.stepdefinition", 
					dryRun=false,
					monochrome=true,
					tags= {"@Smoke,@Sanity,@Regression"},
					plugin= {"pretty",
							"html:src\\test\\resources\\Reports",
							"json:src\\test\\resources\\Reports\\report.json",
							"junit:src\\test\\resources\\Reports\\output.xml",
							"rerun:src\\test\\resources\\FailedScenario\\failed.txt"})

public class TestRunner {
	@AfterClass
	public static void report() {
		JVMReport.generateJVMReport("src\\test\\resources\\Reports\\report.json");
	}
	
	
}
