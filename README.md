# Movies
Movies App - ReactJS and .net core 3.1

Swagger: http://test-2032382248.us-west-2.elb.amazonaws.com/swagger
Public Url: http://test-2032382248.us-west-2.elb.amazonaws.com/

Testing:

Replace the Db Connection string in Entity/TitlesContext.cs with yours.

Search works based on Movie TitleName, Use keywords such as "Casablanca" or partial search with letters (ex: "a", "de"). Hover over the images for storyline.

Technologies used:

ReactJS, state hook, spread operators, axios,
Amazon AWS EC2 Windows, Application Load Balancer,
Swagger,
Entity Framework,
SQL Server Management Studio,
Powershell (to run npm commands and dotnet commands)

Tried and Failed:

Used Docker SQL image and connected from Azure Data Studio in Mac (as I primarily work on mac) and imported the data. 
Couldn't run donet commands such as scaffold-database on mac M1 chip (ran into ARM Architecuture issues).
So as a resort, switched to developing on EC2 Windows instance.

Scope for Improvements:

Make search universal that works on Actors names and movie alternate names. Make UI more user friendly and dynamic. Pull movie images from opensource database.
Move the DB connection string to AppSettings.json, we can have different ones for each environment. Configure Https and secure the API's using JWT.


