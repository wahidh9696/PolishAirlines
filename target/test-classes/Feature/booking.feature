Feature: To validate the ticket booking functionality

Background:
Given The user has to be in booking page

@Regression
Scenario: To validate the booking page using data table
When The user has to select the origin and destination
	|WAW|WRO|
	|HAM|FRA|
	|DEL|MAA|
	|YUL|YOW|
	|DEL|MAA|
And The user has to select the trip type
And The user has to select the dates of the journey
And The user has to select the number of passengers
And The user has to select the cabin class
And The user has to click the search button
Then The user should be navigated to the flight details page

@Sanity
Scenario Outline: To validate the booking page using examples
When The user has to select the "<origin>" and "<destination>"
And The user has to select the trip type
And The user has to select the dates of the journey
And The user has to select the number of passengers
And The user has to select the cabin class
And The user has to click the search button
Then The user should be navigated to the flight details page
Examples:
|origin|destination|
|WAW|WRO|
|HAM|FRA|

@Smoke
Scenario Outline: To fail the testcase
When The user has to select the "<origin>" and "<destination>"
And The user has to select the trip type
And The user has to select the dates of the journey
And The user fails the testcase wantedly
And The user has to select the number of passengers
And The user has to select the cabin class
And The user has to click the search button
Then The user should be navigated to the flight details page
Examples:
|origin|destination|
|YUL|YOW|