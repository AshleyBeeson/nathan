package bugTrackerTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BugsList {
	
WebDriver driver;
	
	By heading = By.xpath("//*[@id=\"root\"]/div/div[2]/main/div/h3");
	By issueIdText = By.xpath("//*[@id=\"root\"]/div/div[2]/main/div/div[1]/div[2]/text()[2]");
	By issueIdElement = By.xpath("//*[@id=\"root\"]/div/div[2]/main/div/div[1]");
	By filterFalse = By.xpath("//*[@id=\"root\"]/div/div[2]/main/div/table/tr[1]/td[3]/input");
	
	
	public BugsList(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public String getHeadingText()
	{
		return driver.findElement(heading).getText();
	}
	
	public String getIssueIdText()
	{
		return driver.findElement(issueIdText).getText();
	}
	
	public WebElement getIssueIdElement()
	{
		return driver.findElement(issueIdElement);
	}
	
	public void clickHighPriorityFalseButton()
	{
		driver.findElement(filterFalse).click();
	}


}
