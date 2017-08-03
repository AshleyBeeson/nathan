To run this project, copy the 'nathanFullMernSubmit' folder onto your pc.

You will need node.js installed on your computer. I have included a download link: https://nodejs.org/en/download/ . Download
    the appropriate verson and follow the installation instructions.

You will also need mongodb insatalled for your machine. There is a download link here: https://www.mongodb.com/download-center . Download the latest version
	for your operating system and install following the installation instructions. Once it is installed, navigate to the program files folder for mongo and
	access the bin folder, on my system that path is so: 'C:\Program Files\MongoDB\Server\3.4\bin'   . Launch the mongodb.exe program and leave it running in the background.

Open the node.js cmd line and cd into the 'C:\Users\Nathan\Documents\Work\nathanFullMernSubmit\bug-databse-server' folder.
From here run 'npm install'. This should install all of the modules and dependencies that you need for the server hosting the database.

Open a seperate node.js cmd line and cd  into the 'C:\Users\Nathan\Documents\Work\nathanFullMernSubmit\bug-databse-server\client' folder.
From here run 'npm install'. This should install all of the modules and dependencies that you need for react app itself.

In the node.js cmd line in the 'bug-database-server' folder, type 'npm start'. This will generate documents in a collection called bugs stored in the mongo database,
	based upon a mongoose schema that is derived from the provided 'bugs_format.json' file. This server is now running to be called to by the react app.

In the node.js cmd line in the 'bug-database-server\client' folder, type 'npm start' and the website should now automaticlly load in the browser (which for me is Google Chrome).
When you click the view bugs page, you may have to refesh the page the first time you access it before the data is loaded in from the database.

What I achieved:
The website currently contains 3 pages. A home page, bugs list page and edit bug report page.

During the process of building the project I have had to add extra modules to the package.json files. Whenever this occurs, the server has
    to be closed, do an npm install, and then restart the server.

The bug report update page has a form which can be filled in.

The bug list page contains all of the bugs listed in the provided JSON file. This is imported from a mongodb database hosted on a different server.
    The bugs details are listed horizontally, with each bug taking up one row. I did not  manage to display the actions.

I have changed the favicon to the image of a bug which goes quite nicely with the title. The header and footer appear on all pages.

I have styled the website using material design lite. I am not very experienced using it and so the layout of my bugs list page
    doesn't quite match my wireframe,

I have implemented a system whereby you can filter the bug list in 5 different ways. However when the filter by 'severity high' option is chosen
    all of the bugs are listed. This is because no bugs have a high severity and I haven't figured out how to make it display nothing.

I have also implemented a sort function. There are 5 different sorts currently available. These can be done either in ascending or descending order.
There is also the functionality to sort a filtered list, and filter a sorted list.

There is a reset button on the page which clears any currently applied filter but it only clears the sort sometimes.

I have tested the website using selenium webdriver. The tests are automated when you press play and an extent report is generated upon completion of a successful test.

To use my tests yourself you need a java jdk installed along with the eclipse ide. In this package I have included the java project the relevant jar files needed
    for the project to work properly. You will however need to change the path that the test looks for the chrome driver on the 'System.setProperty' line 27 of the
    @before part of the test1.java file. You would also need to change the path that the extent report will be written to on line 18 of the test1.java file. To use
    the required jar files, within eclipse you must click 'Project' on the top navbar. The click 'properties', followed by 'Java build path', followed by 'Libraries'.
    Click 'add external jars' and locate this folder, or wherever you chose to copy them to on your system. Select them all and click 'open' followed by 'apply'.

I have included the extent reports that were generated when I ran my tests. You can view them by double clicking on the 'testLog.html' file in the root folder.

I have used the MERN stack to create this web app, where the R means thatI have used the react.js methodolgy which includes using .jsx files. The reason for this is 
	that as eveyones computers have got more powerful, we can let the users computer do more of the work. Upon connection to a website built using react, all the
	data is downloaded at the start, and then the different 'pages' are 'loaded' simply by rerendering the page with what is effectviely a filter. This results in
	very fast and responsive web apps.
