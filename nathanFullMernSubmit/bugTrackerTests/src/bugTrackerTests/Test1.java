package bugTrackerTests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class Test1 {
	WebDriver driver;
	
	ExtentReports report = new ExtentReports("C:\\Users\\Administrator\\Documents\\mern-assessment\\stage-1\\testLog.html", false);
	
	Home homepage;
	EditBug editBugPage;
	BugsList bugsListPage;
	
	@Before
	public void setup ()
	{
		System.setProperty("webdriver.chrome.driver","C:\\LocalInstall\\Selenium\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/");
	}

	@Test
	public void testWebsiteExists()
	{
		ExtentTest test = report.startTest("Verify website exists");
		homepage = new Home(driver);
		test.log(LogStatus.INFO, "Browser started.");
		String homepageCaption = homepage.getCaption();
		try {
			Thread.sleep(2500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("This the home page of the tracker.", homepageCaption);
		test.log(LogStatus.PASS, "Homepage loaded.");
		homepage.clickEditBugButton();
		test.log(LogStatus.INFO, "Loading edit bug page.");
		
		editBugPage = new EditBug(driver);
		String formHeading = editBugPage.getText();
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("Bug Report Update Form", formHeading);
		test.log(LogStatus.PASS, "Edit Bug report page loaded.");
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		editBugPage.clickViewBugsButton();
		test.log(LogStatus.INFO, "Loading view bugs page");
		
		bugsListPage = new BugsList(driver);
		String listHeading = bugsListPage.getHeadingText();
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("Bug List", listHeading);
		test.log(LogStatus.PASS, "View bugs page loaded.");
		
		report.endTest(test);
		report.flush();
	}
	
	@Test
	public void testFormElementsExists()
	{
		ExtentTest test = report.startTest("Verify form exists on edit bug page");
		homepage = new Home(driver);
		test.log(LogStatus.INFO, "Browser started.");
		String homepageCaption = homepage.getCaption();
		try {
			Thread.sleep(2500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("This the home page of the tracker.", homepageCaption);
		test.log(LogStatus.PASS, "Homepage loaded.");
		homepage.clickEditBugButton();
		test.log(LogStatus.INFO, "Loading edit bug page.");
		
		editBugPage = new EditBug(driver);
		String formHeading = editBugPage.getText();
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("Bug Report Update Form", formHeading);
		test.log(LogStatus.PASS, "Edit Bug report page loaded.");
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		test.log(LogStatus.INFO, "Trying to verify form exists.");
		String idLabel = editBugPage.getIdText();
		test.log(LogStatus.INFO, "Trying to locate Id label in the form");
		assertEquals("id:", idLabel);
		test.log(LogStatus.PASS, "Id label found!.");
		String severityLabel = editBugPage.getSeverityText();
		test.log(LogStatus.INFO, "Trying to locate severity label in the form");
		assertEquals("Severity:", severityLabel);
		test.log(LogStatus.PASS, "Severity label found!");
		
		test.log(LogStatus.PASS, "Form exists!");
		
		report.endTest(test);
		report.flush();
	}
	
	@Test
	public void testBugsDisplayed()
	{
		ExtentTest test = report.startTest("Verify bugs are displayed");
		homepage = new Home(driver);
		test.log(LogStatus.INFO, "Browser started.");
		String homepageCaption = homepage.getCaption();
		try {
			Thread.sleep(2500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("This the home page of the tracker.", homepageCaption);
		test.log(LogStatus.PASS, "Homepage loaded.");
		homepage.clickViewBugsButton();
		test.log(LogStatus.INFO, "Loading view bugs page.");
		
		bugsListPage = new BugsList(driver);
		String listHeading = bugsListPage.getHeadingText();
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals("Bug List", listHeading);
		test.log(LogStatus.PASS, "View bugs page loaded.");
		
		bugsListPage = new BugsList(driver);
		test.log(LogStatus.INFO, "Is BUG-0001 being displayed?");
		WebElement bug1 = bugsListPage.getIssueIdElement();
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		assertEquals(true, bug1.isDisplayed());
		test.log(LogStatus.PASS, "BUG-0001 is being displayed!.");
		bugsListPage.clickHighPriorityFalseButton();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) 
		{
			e.printStackTrace();
		}
		test.log(LogStatus.PASS, "Bugs are being displayed!.");
		
		report.endTest(test);
		report.flush();
		
	}
	
//	@Test
//	public void testFilterWorks()
//	{
//		ExtentTest test = report.startTest("Verify filter works");
//		homepage = new Home(driver);
//		test.log(LogStatus.INFO, "Browser started.");
//		String homepageCaption = homepage.getCaption();
//		try {
//			Thread.sleep(2500);
//		} catch (InterruptedException e) 
//		{
//			e.printStackTrace();
//		}
//		assertEquals("This the home page of the tracker.", homepageCaption);
//		test.log(LogStatus.PASS, "Homepage loaded.");
//		homepage.clickViewBugsButton();
//		test.log(LogStatus.INFO, "Loading view bugs page.");
//		
//		bugsListPage = new BugsList(driver);
//		String listHeading = bugsListPage.getHeadingText();
//		try {
//			Thread.sleep(1500);
//		} catch (InterruptedException e) 
//		{
//			e.printStackTrace();
//		}
//		assertEquals("Bug List", listHeading);
//		test.log(LogStatus.PASS, "View bugs page loaded.");
//		
//		bugsListPage = new BugsList(driver);
//		test.log(LogStatus.INFO, "Is BUG-0001 being displayed?");
//		WebElement bug1 = bugsListPage.getIssueIdElement();
//		try {
//			Thread.sleep(1500);
//		} catch (InterruptedException e) 
//		{
//			e.printStackTrace();
//		}
//		assertEquals(true, bug1.isDisplayed());
//		test.log(LogStatus.PASS, "BUG-0001 is being displayed!.");
//		
//		bugsListPage.clickHighPriorityFalseButton();
//		test.log(LogStatus.INFO, "Filtering Bugs.");
//		try {
//			Thread.sleep(1500);
//		} catch (InterruptedException e) 
//		{
//			e.printStackTrace();
//		}
//		//Boolean isPresent = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div[2]/main/div/div[1]")).size() > 0;
//		assertEquals(false, bug1.isDisplayed());
//		test.log(LogStatus.PASS, "Bug-0001 doesn't exist!");
//		
//		test.log(LogStatus.PASS, "Filter works!");
//		
//		
//		report.endTest(test);
//		report.flush();
//	}

	@After
	public void cleanUp()
	{
		try {
			driver.close();
		} catch (Exception ex) {
			System.out.println(ex.toString());
		}
	}
	

}
