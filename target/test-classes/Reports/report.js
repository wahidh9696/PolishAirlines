$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/booking.feature");
formatter.feature({
  "name": "To validate the ticket booking functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.the_user_has_to_be_in_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the booking page using data table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "The user has to select the origin and destination",
  "rows": [
    {
      "cells": [
        "WAW",
        "WRO"
      ]
    },
    {
      "cells": [
        "HAM",
        "FRA"
      ]
    },
    {
      "cells": [
        "DEL",
        "MAA"
      ]
    },
    {
      "cells": [
        "YUL",
        "YOW"
      ]
    },
    {
      "cells": [
        "DEL",
        "MAA"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_origin_and_destination(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_trip_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_dates_of_the_journey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_number_of_passengers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_cabin_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.the_user_should_be_navigated_to_the_flight_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the booking page using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "The user has to select the \"\u003corigin\u003e\" and \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "origin",
        "destination"
      ]
    },
    {
      "cells": [
        "WAW",
        "WRO"
      ]
    },
    {
      "cells": [
        "HAM",
        "FRA"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.the_user_has_to_be_in_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the booking page using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "The user has to select the \"WAW\" and \"WRO\"",
  "keyword": "When "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_trip_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_dates_of_the_journey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_number_of_passengers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_cabin_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.the_user_should_be_navigated_to_the_flight_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.the_user_has_to_be_in_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the booking page using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "The user has to select the \"HAM\" and \"FRA\"",
  "keyword": "When "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_trip_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_dates_of_the_journey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_number_of_passengers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_cabin_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.the_user_should_be_navigated_to_the_flight_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To fail the testcase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "The user has to select the \"\u003corigin\u003e\" and \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.step({
  "name": "The user fails the testcase wantedly",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "origin",
        "destination"
      ]
    },
    {
      "cells": [
        "YUL",
        "YOW"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.the_user_has_to_be_in_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To fail the testcase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "The user has to select the \"YUL\" and \"YOW\"",
  "keyword": "When "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the trip type",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_trip_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to select the dates of the journey",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_dates_of_the_journey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fails the testcase wantedly",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_fails_the_testcase_wantedly()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.stepdefinition.Main.the_user_fails_the_testcase_wantedly(Main.java:74)\r\n\tat ✽.The user fails the testcase wantedly(src/test/resources/Feature/booking.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user has to select the number of passengers",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_number_of_passengers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user has to select the cabin class",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_select_the_cabin_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user has to click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.the_user_has_to_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should be navigated to the flight details page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.the_user_should_be_navigated_to_the_flight_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});