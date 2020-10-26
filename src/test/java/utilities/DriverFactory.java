package utilities;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class DriverFactory {
	private WebDriver driver;

	public WebDriver getDriver(String browserName) {
		if (driver == null)
			driver = createDriver(browserName);
		return driver;
	}

	/**
	 * to launch a specific browser
	 * 
	 * @param browserName
	 * @return
	 */
	private WebDriver createDriver(String browserName) {
		driver = null;
		switch (browserName) {
		case "Firefox":
			if (driver == null) {
				driver = new FirefoxDriver();
			}
			break;
		case "IE":
			if (driver == null) {
				System.setProperty("webdriver.ie.driver",
						System.getProperty("user.dir") + "\\Drivers\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();
			}
			break;
		case "Chrome":
			if (driver == null) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
			}
			break;
		}
		return driver;
	}

	/**
	 * To quit all the browsers
	 */
	public void closeDriver() {
		driver.close();
		driver.quit();
	}

}
