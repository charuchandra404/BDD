# BDD Framework Project Egg Timer
* This Project is to explain how to set-up a basic BDD framework from scratch using Cucumber 
* Language used : Java, Gherkin
* Tools: Selenium, Cucumber
* Framework: Behavior Driven Development (BDD) framework
* Design Pattern used: Page object Model

### Local Set Up
* Precondition is Maven and Java should be installed in the system
```
java -version
mvn -v
```
* Open git bash in your system and run command 
```
$ git clone "https://github.com/charuchandra404/BDD.git"
```
* Move to root directory of the project and run command 
```
$ mvn compile
$ mvn test
```
* Reports will be available in test-output folder
* Sample reports are available in test-output folder

### Current Limitations
* Test cases can only be run in Chrome browser as other browser drivers(Gecko, InternetExplorerDriver) are not available in project path

### Dependencies
* Dependencies are added in Maven pom.xml

### Some Improvements that can be done
* Test data util classes can be created to fetch data from json/yaml/excel
* URL and basic setup info can be taken from config.property file
* Reporting can be changed to Extent Reporting or Allure reporting
* Take Screenshot when failure of tests feature can be added
