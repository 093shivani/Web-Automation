Feature: Goibibo Test

    # @current
    # Scenario: User can search one way flights
    #     Given I am on the "home" page
    #     When I enter "Bangalore" into the "gosuggest_inputSrc" input field on Goibibo
    #     When I enter "Mumbai" into the "gosuggest_inputDest" input field on Goibibo
    #     When I select the departure date as "fare_20191025" from "departureCalendar" calendar
    #     Then I click the "gi_search_btn" button on Goibibo
    #     Then the "nextPage" page should be loaded
    #     Then I click the "PRICE" button on Goibibo
    #     Then I should get the price in decreasing order
    
    @current
    Scenario: User cannot enter numeric data in Source field
        Given I am on the "home" page
        When I enter "123" into the "gosuggest_inputSrc" input field on Goibibo for incorrect value
        Then I click the "gi_search_btn" button on Goibibo
        Then the error message should say "Please enter a valid Source"

    @current
    Scenario: User cannot enter numeric data in Destination field
        Given I am on the "home" page
        When I enter "Bangalore" into the "gosuggest_inputSrc" input field on Goibibo
        When I enter "123" into the "gosuggest_inputDest" input field on Goibibo for incorrect value
        Then I click the "gi_search_btn" button on Goibibo
        Then the error message should say "Please enter a valid Destination"
    
    @current
    Scenario: User cannot search flights without valid departure date
        Given I am on the "home" page
        When I enter "Bangalore" into the "gosuggest_inputSrc" input field on Goibibo
        When I enter "Mumbai" into the "gosuggest_inputDest" input field on Goibibo
        Then I click the "gi_search_btn" button on Goibibo
        Then the error message should say "Please enter a valid departure date"
    
        