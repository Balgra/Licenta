Bachelor Project:

Backend part.

Requierments: .net 6.0 sdk. Also installing the dotnet tools : "dotnet tool install --global dotnet-ef"

For setting up the data base we need to set up the SQL server locally, for my licence I have used Microsoft SQL Server, connecting to the database Engine using the localhost with the Windows Authentication

To do so,

In the main backend directory, in the program.cs

The following line: "builder.Services.AddDbContext(options => options.UseSqlServer("data source="Server Name";initial catalog="Database Name";trusted_connection=true;TrustServerCertificate=True"));"

Needs to be changed if you want to use other sql server than the localhost installed

Afterwards in the directory backend/ the command "dotnet ef database update" needs to be run to apply the migrations.

After doing so, you run the command "dotnet watch run" and the backend will be up to work.

Frontend part.

Requierments : node js 18.x LTS

In the file FrontEnd/src two commands need to be used:

npm install to set up all the dependencies npm run to run the application.

Link to UPT GitLab : https://gitlab.upt.ro/andrei.balgradean/Licenta
