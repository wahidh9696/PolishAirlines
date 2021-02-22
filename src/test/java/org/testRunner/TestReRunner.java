package org.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@src\\test\\resources\\FailedScenario\\failed.txt",
				glue="com.stepdefinition")


public class TestReRunner {

}
