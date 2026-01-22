
Feature: Authentification Feature

    As a user
    I want to log in to the application
    So that I can access my dashboard

    Background:
        Given I am on the  login page

    Scenario Outline: Successful login

        When  I enter valid  credentials
            | email                        | password   |
            | testvalidaccount@yopmail.com | Mar!012023 |
        And I submit the login form
        Then the user is authenticated

    Scenario Outline: Unsuccessful login with invalid credentials
        When I enter invalid  credentials
            | email                          | password   |
            | testinvalidaccount@yopmail.com | Mar!012023 |
        And I submit the login form
        Then I should see an error message "Incorrect email or password."
