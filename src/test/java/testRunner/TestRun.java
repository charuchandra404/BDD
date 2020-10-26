package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
/**
 * This is the test Runner class
 * @author Charu
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features/Countdown.feature", 
		glue ="stepDefinitions",
		dryRun = false,
		monochrome = true,
		plugin = {"pretty","html:test-output"}
		)
public class TestRun {

}
