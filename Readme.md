# Habit Hunter
* This Application is used to track the habits on daily and weekly basis.
* NodeJs, expressJs, mongoDB and ejs technologies are used in creation of this application.
## Functioning:
* The Application once opened will be having input form. We need to enter our habit along with the category and the time.
* Once we add the habit it will be displayed on the main page along with the status. (Status can be tracked by looking at the color of the habit on that particular day)
* If the habit is highlighted in blue color that means it is in pending action and no action has been taken on it.
* If it is in red color then it implies tha action was cancelled/not perfomed for that day.
* If it is in green color then it implies that the habit has been performed on that day.
* Each habit will have a button as weekly status. If we click that we can navigate to the weekly status page for that habit. This page mainly stores the habit status for the last 7 days.
* We can toggle between the status by clicking on the date for the last 7 days.
* If we want to remove it we can click on the delete Icon which is given for all the habits seperately 
## Folder Structure:

```Habit-Tracker
    |
    |               |--->css
    |--->assets---->|--->images
    |
    |
    |
    |--->config---->|--->mongoose.js
    |
    |
    |
    |--->controllers-->|-->habit_controller.js
    |                  |-->home_controller.js
    |
    |
    |
    |--->models---->|-->habits
    |
    |
    |
    |
    |--->routes---->|-->habitroutes.js
    |               |-->index.js
    |
    |
    |
    |              
    |--->views---->|--->home.ejs
    |              |--->weekly_status.ejs
    |
    |-->.env
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json```

## How to setup the project on local system:

* Clone this project into the system.
* Run the command npm i or npm install for installing all the required dependencies.
* Install the mongodb in the system if not already available.
* Now Run the command npm start.
* Open the browser and navigate to http://localhost:7000/ to start the application.
