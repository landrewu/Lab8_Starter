# Lab 8 - Starter

## Intro
1. Option 1. Automated tests should be put within a Github action for consistency when testing. Because tests are run on all code for every developer, it is important for all code to be tested with identical tests for consistency. If this testing were to be done manually in a local branch, every test is not guaranteed to be the same. Additionally, if tests were to be updated and changed, it would be much more efficient for tests to exist remotely as a GitHub action, rather than a manual test.

## Part 1
2. No. An end-to-end test would not be used to test if a function is returning the correct output. End-to-end tests focus on the user's interaction with the webpage, not just individual patches of code. Testing a particular function would be more likely a unit test.

## Part 2
3. No. I would not use a unit test to test the messaging feature of a messaging application. That sounds like the job of an end-to-end test. One unit test that tests a whole feature of an application sounds way too complicated. Unit tests are meant to test small parts of the code at a time, not to test whole features.
4. Yes. I would use a unit test to test the max message length feature of a messaging application. Because this is a relatively small task, a unit test would be the perfect size to test this feature.