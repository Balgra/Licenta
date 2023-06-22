# Licenta

Backend part.

Requierments: .net 6.0 sdk.

For setting up the data base we need to set up the SQL server locally, for my licence I have used Microsoft SQL Server, connecting to the database Engine
using the localhost and the Username being my PC.

To do so,

In the main backend directory, in the program.cs 

The following line:
"builder.Services.AddDbContext<ApplicationDbContext>(
        options => options.UseSqlServer("data source="Server Name";initial catalog="Database Name";trusted_connection=true;TrustServerCertificate=True"));"

Needs to be changed with the corresponding data, 

Afterwards in the directory backend/ the command "database update" needs to be run.

After doing so, you run the command "dotnet watch run" and the backend will be up to work.

Frontend part.

Requierments :  node js 18.x LTS

In the file FrontEnd/src two commands need to be used:

npm install to set up all the dependencies
npm run to run the application.



