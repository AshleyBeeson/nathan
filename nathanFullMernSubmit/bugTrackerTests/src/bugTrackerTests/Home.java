package bugTrackerTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Home {
WebDriver driver;
	
	By caption = By.xpath("//*[@id=\"firstPara\"]");
	By editBugLink = By.xpath("//*[@id=\"root\"]/div/div[1]/a[3]");
	By viewBugsLink = By.xpath("//*[@id=\"root\"]/div/div[1]/a[2]");
	
	public Home(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public String getCaption()
	{
		return driver.findElement(caption).getText();
	}
	
	public void clickEditBugButton()
	{
		driver.get(driver.findElement(editBugLink).getAttribute("href"));
	}
	
	public void clickViewBugsButton()
	{
		driver.get(driver.findElement(viewBugsLink).getAttribute("href"));
	}
	
}
