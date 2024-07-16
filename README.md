# e2e_exploration
This repository serves as a laboratory for me to learn about and implement end to end testing for React Native apps.

## Goals
1. Gain understanding of the following concepts or technologies:
	* End-to-end testing (E2E or e2e)
	* React Native
	* Detox 
	* Jest
	* Docker
	* GitHub Actions
	* Expo (bare)
2. Build a small React Native app
3. Develop e2e test for the app using Detox and Jest
4. Put the whole thing in a docker container so that tests can be done easily (my lack of docker knowledge prevents me from specifying this goal clearly)

Setting up a stable end-to-end (E2E) testing environment for the Wunderpar app built in React Native using Detox and Jest.

## Goal 1: Learning
### 1.1 End-to-end testing (E2E or e2e)
#### Definition
**E2E testing** simulates users using a system. The user interface, backend services, databases, and network communication are tested.  
Unit & integration tests are quick, but E2E ensures that certain things work (e.g. logging in).

#### How to:
1. Design a test case
	1. Determine app requirements (determines test validation values)
	2. Set up test environment
	3. Think of software and hardware requirements
	4. Define all processes of systems and subsystems, and their respective roles
	5. Determine input and output of each system
2. Do a manual test
3. Automate the test
4. Execute the test, save results, evaluate results

#### Important concepts
There are two types of e2e tests:
1. *Horizontal testing*: make sure one layer of the stack works when interacting with different (sub)systems
	* Exa: Test all UI components on one screen.
2. *Vertical testing*: make sure the whole stack works in a specific instance
	* Exa: Make sure logging in works.

You are testing real user scenarios. Think user stories.  
Focus on testing more critical workflows first.

#### Example
User login screen  
enter valid/invalid info  
handle entered data  
validate that responses are correct (server responses/error codes)

#### Further questions
Q: What are the ends of e2e testing?  
A: The ends refer to the position where a test starts and ends. It specifies the state the app should be in at the start and at the end of the test.  
Q: What's the difference between e2e testing, and system testing?  
Q: Why use Detox and Jest?  
A: Detox was made by Wix specifically for doing e2e testing on React Native apps. It makes life easier.  

#### Resources: 
https://smartbear.com/learn/automated-testing/what-is-end-to-end-testing/
https://circleci.com/blog/what-is-end-to-end-testing/
https://www.browserstack.com/guide/end-to-end-testing
https://katalon.com/resources-center/blog/end-to-end-e2e-testing

### 1.2 React Native
#### Definition
React is a JavaScript framework useful for making web apps.  
React Native allows the developer to write React apps, which are then translated into the native devoper laguage of different platforms (Android = Java/Kotlin, iOS = Objective-C). The apps aren't PWA's, they are fully Java/Objective-C apps, making use of the native components/APIs of each platform. This improves the feel of the app, while allowing code sharing, making development easier.

#### Resources
Articles & YT videos. Didn't track.


### 1.3 Expo (bare)
#### Definition
A wrapper around React Native (command line tools, library for running RN apps). Expo is a bunch of tools that makes developing RN apps easier, including file routing, and live testing of your app on your phone (with the Expo Go app).

### 1.4 Detox
#### Definition
Framework for making end-to-end tests for React Native apps.

#### Notes
 * A 'testID' prop is added to components for testing. (remove from deployed code)
 * Beware of test dependency - when one test depends on another passing. This should be avoided.
 * testing function naming convention: 'userXXXX' for when a user does something

#### Resources
https://wix.github.io/Detox/  
https://www.youtube.com/watch?v=_neMz2_6u20  
https://youtu.be/Ndof_lgJmx8?feature=shared  

### 1.5 Jest
#### Definition
Jest is a JavaScript testing framework. It allows you to run tests from the command line.

#### Resources
https://jestjs.io/
https://jestjs.io/docs/getting-started
https://www.youtube.com/watch?v=FgnxcUQ5vho

### 1.6 Docker
#### Definition
Docker is software used to make containers.

#### Containers
A container is an isolated environment to run any code.

#### Docker terminology
**Docker images** are read-only templates containing instructions for creating a container. A Docker image creates containers to run on the Docker platform.

A **Dockerfile** is a text document with instructions on how to create a container environment. All the command line instructions to assemble an image.

#### Notes
App + dockerfile -> docker image -> container (which can be run)
Q: How is a docker image and file used to make a docker container?
A: 

#### Resources
https://www.docker.com/
https://docs.docker.com/guides/docker-overview/
https://www.docker.com/resources/what-container/
https://www.youtube.com/watch?v=R8_veQiYBjI

### 1.7 GitHub Actions
#### Defninition
GitHub actions are a way of automating developer workflows (including testing and CI/CD).  
They are triggered when something happens in the repository, like a pull request.  
Workflows are defined in .yml files, stored in the ./.github/workflows/ directory of a project

### 1.8 General notes
#### Relationship between Detox and Jest
Jest will be used to run tests, Detox will be used to write the tests. Jest will be executing the Detox tests.

## Goal 2: Building a React Native app
I created the RN app using Create React Native App by Expo by running the following in the root directory of the repo:
```
npx create-react-native-app
```
I gave the app the name 'e2e_explorer', and chose the 'navigation' template.

Inside the e2e_explorer directory, run 
```
npx expo start
```

## Goal 3: e2e test with Detox and Jest  
I installed Jest and Detox, while adding them as dev-dependencies, with the following command in e2e_explorer/:
```
npm install --save-dev jest detox
```

Created Detox configuration files
```
npx detox init -r jest
```

### Resources
https://docs.expo.dev/build-reference/e2e-tests/  
https://wix.github.io/Detox/docs/introduction/environment-setup

## Goal 4: Containerization

## Goal 5: Automated testing with GitHub Actions
