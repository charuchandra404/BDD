package stepDefinitions;

import java.text.ParseException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.CounterPage;
import pageObjects.EggTimerHomePage;
import utilities.DriverFactory;

/**
 * This Java class is to define the feature steps
 * 
 * @author Charu
 */
public class Steps {
	public WebDriver driver;
	public EggTimerHomePage eggH;
	public CounterPage eggC;
	DriverFactory driverFactory;

	@Given("^User Launch \\\"([^\\\"]*)\\\" browser$")
	public void user_Launch_browser(String browser) {
		driverFactory = new DriverFactory();
		driver = driverFactory.getDriver(browser);
		eggH = new EggTimerHomePage(driver);
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) {
		driver.get(url);
	}

	@When("^User enters \"([^\"]*)\" in input field$")
	public void user_enters_in_input_field(String timeValue) {
		eggH.enterTimerValue(timeValue);
	}

	@When("^User click on Go button$")
	public void user_click_on_Go_button() {
		eggH.clickGoButton();
	}

	@Then("^Counter should be decreased by (\\d+) second with increment of (\\d+) second$")
	public void counter_should_be_decreased_by_second_with_increment_of_second(int timeOut, int arg2)
			throws InterruptedException, ParseException {
		eggC = new CounterPage(driver);
		eggC.validateTimerCounterSeconds(timeOut);
	}

	@Then("^close browser$")
	public void close_browser() {
		driverFactory.closeDriver();
	}
}
