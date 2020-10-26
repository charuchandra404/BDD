package pageObjects;

import java.text.ParseException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utilities.Constants;

import org.junit.Assert;

/**
 * This Class is to define objects and methods of count down page
 * @author Charu
 *
 */
public class CounterPage {
	public WebDriver driver;

	public CounterPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(css = "h2[id='progressText']")
	@CacheLookup
	WebElement labelProgress;

	/**
	 * This method is to validate if Countdown is working as expected
	 * 
	 * @throws InterruptedException
	 * @throws ParseException
	 */
	public void validateTimerCounterSeconds(int timeOut) throws InterruptedException {

		Long timeSeconds1 = TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis());
		String initialTime = labelProgress.getText().trim().replace(Constants.strSeconds, "");
		driver.manage().timeouts().implicitlyWait(timeOut, TimeUnit.SECONDS);
		Long timeSeconds2 = TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis());
		String finalTime = labelProgress.getText().trim().replace(Constants.strSeconds, "");
		Integer timerDifference = Integer.parseInt(initialTime) - Integer.parseInt(finalTime);
		Integer sysDifference = timeSeconds2.intValue() - timeSeconds1.intValue();
		Assert.assertEquals(timerDifference, sysDifference);
		WebDriverWait wait = new WebDriverWait(driver, Integer.parseInt(initialTime)+5);
		Alert alert = wait.until(ExpectedConditions.alertIsPresent());
		Assert.assertEquals(alert.getText(), Constants.timeExpired);
		driver.switchTo().alert();
		alert.accept();
		Assert.assertEquals(labelProgress.getText(), Constants.timeExpired);
	}

}
