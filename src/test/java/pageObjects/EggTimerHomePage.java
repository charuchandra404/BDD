package pageObjects;

import java.util.NoSuchElementException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
/**
 * This Class is to define objects of Egg timer home page
 * @author 91995
 *
 */
public class EggTimerHomePage {
	public WebDriver driver;

	public EggTimerHomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "start_a_timer")
	@CacheLookup
	WebElement inputStartTimer;

	@FindBy(id = "timergo")
	@CacheLookup
	WebElement buttonGo;

	/**
	 * This method is to enter timer value in input field
	 * 
	 * @param timerStr
	 */
	public void enterTimerValue(String timerStr) {
		try {
			inputStartTimer.clear();
			inputStartTimer.sendKeys(timerStr);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}

	/**
	 * This is method is to click on Go Button
	 */
	public void clickGoButton() {
		try {
			buttonGo.click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}

}
