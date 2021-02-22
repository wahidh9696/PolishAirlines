Feature: To check the login functionality

Scenario: To pass user name and password
Background:
Given The user has to be in login page

When The User has to fill username
And The User has to be in password
Then Login success

#Scenario: To pass user name1 and password1
#
#When The User has to fill username1
#And The User has to be in password1
#Then Login success