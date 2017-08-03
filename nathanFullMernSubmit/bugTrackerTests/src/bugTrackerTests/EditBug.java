package bugTrackerTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EditBug {

WebDriver driver;
	
	By reportHeading = By.xpath("//*[@id=\"formDiv\"]/h3");
	By viewBugsLink = By.xpath("//*[@id=\"root\"]/div/div[1]/a[2]");
	By idLabel = By.xpath("//*[@id=\"reportForm\"]/table/tr[1]/td[1]");
	By severityLabel = By.xpath("//*[@id=\"severity\"]");
	By submit = By.xpath("//*[@id=\"submit\"]");
	
	public EditBug(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public String getText()
	{
		return driver.findElement(reportHeading).getText();
	}
	
	public void clickViewBugsButton()
	{
		driver.get(driver.findElement(viewBugsLink).getAttribute("href"));
	}
	
	public String getIdText()
	{
		return driver.findElement(idLabel).getText();
	}
	
	public String getSeverityText()
	{
		return driver.findElement(severityLabel).getText();
	}

}
