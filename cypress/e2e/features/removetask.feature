Feature: Delete task
    Scenario: Delete a task
        When I visit "http://localhost:3030"
        When I delete the task "Make food"
        Then I do not see the task "Make food"