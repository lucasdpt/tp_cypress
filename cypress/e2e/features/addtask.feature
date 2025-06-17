Feature: Add task
    Scenario: Add new task
        When I visit "http://localhost:3030"
        When I add a task "Make food"
        Then I see the task "Make food"