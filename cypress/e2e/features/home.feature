Feature: Home page
    Scenario: Visiting home page
        When I visit "http://localhost:3030"
        Then I see "todos"