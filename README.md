# BantzProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Node Packages used

`npm install express`
`npm install fs`
`npm install body-parser`
`npm install collect.js` 

## Bantz Chat Application – 3813 Software Frameworks
## Jakeb Knowles – S5176723
#### https://github.com/jakeb-k/3813Assign-bantzz
## Git – Version Control Software
### Git Commits

The git repository that houses the bantz chat app is called bantz-project and within that project was a default initialisation of an angular app which contains all the frontend code (written with angular) and there is also a server directory in that same directory aptly named server. This directory contains the backend functionality for the application and has a routes folder, which contains the api functions, a data folder which contains the JSON files that store the information, as well as a server file which is used to configure the server and the requests it receives. 

# Version Control

Version control was done periodically, when a certain functionality was implemented, this can be seen below with a screenshot of the Git commit history. 
 
Every time a commit was made, it was ensured that the application, whilst missing finished functionality was creating errors that could lead to a crash, as well as ensuring the current function that was being done was finished to a usable standard or at least had non-problematic interactions with the server.

# Data Structures
There were 3 main JSON files that were used to structure the data, these including users.json, data.json and groups.json.

Users.json as the name suggest was responsible for storing user information, in this basic instance it stored the username and password which was important for user auth and checking the user was not being used twice in the same instance for other Data Structures. Users.json is an array of JSON objects which held a name and a password 

`[
  {
    "name": "jakebk",
    "password": "t"
  }
]`

These objects were separated with commas as it was an array of objects. 
Groups.json was used to hold the relevant information about groups such as admins and assistants as well as the users who have permission to access the groups. This structure is important as it allows users to load their account and view the groups they are in as well as see the roles they have. Groups.json was another array of JSON objects and each JSON object held a group name, which was a singular value, an users array an admins array and an assis array, and was structured in the format below. The values in the users, admins and assis array all correspond to an existing user.  

`[
  {
    "name": "group1",
    "users": [
      "superuser",
      "user2",
      "user3"
    ],
    "admins": [
      "superuser",
      "admin2"
    ],
    "assis": [
      "assis1"
    ]
  }
]`

These objects were separated with commas as it was an array of objects. 
The third structure that was utilized was the data.json file which held the messages sent from a user in that specific message channel. It has a msg number, the message and the name of the user who sent the message and was structured in the format below. The name value corresponds to an existing user defined in the users.json file.  

`[
  {
    "msgNum": 0,
    "name": "superuser",
    "message": "are thou working"
  }
]`


# REST API 
## Login Route
### Route	
/api/login
### Method	
POST
### Parameters	
Would check values were entered and IF true would send the following 
`JSON object:  userDetails = {
      "name": "",
      "password": ""
    }`
### Return Value	
`Response: true` or `Response:false`
### Explanation
The angular component would take in two values through ngModel and these values were checked to see if they are not empty strings. If they are not empty these values are sent to server which activates a post request on the specified route. This then calls the login function which reads the users.json file first and then uses a for loop to check the request values are not within the users.json file. If they are not in the JSON file it returns a Boolean value(userExists) which if false sends a response of false and if true sends a response of true. 




## Add Users 
### Route	/api/users
### Method	POST
### Parameters	Would check values were entered and IF true would send the following 
`JSON object:  userDetails = {
      "name": "",
      "password": ""
    }`
### Return Value	
`Response: true` or `Response:false`

### Explanation
The angular component would take in two values through ngModel and these values were checked to see if they are not empty strings. If they are not empty these values are sent to server which activates a post request on the specified route. This form could only be accessed if the user was a superuser. The addUser function would then be called and would load the users.json file into a data object. This data object would then be looped through and the request name would be checked against the names in the data object. If there was a match then a Boolean value (alreadyUsed) would be called as true and if there was not then that value would be false. If the value returned true the request.body would be added to a value called user and that user value would be pushed into the data object. The Json reader function would then be called again where within that function it would write over the current users.json with that data object that had the user pushed into it and  a true response would be sent back to the frontend. If the alreadyUsed value was false then it would not re-write the file and just send a false response back. 

## Delete User
### Route	/api/deleteUser
### Method	POST
### Parameters	
`userDelete = {
    "dUser": ""
  }`

### Return Value	
`Response: true` or `Response:false`

### Explanation
The angular component would allow the input of a name of the user to be deleted. This input can only be accessed by a superuser. This is then sent to server at the specified route where the deleteUser function is then called. This function uses the jsonReader function to load the current user data in an object. This object is then iterated through, checking the username for each object within. If there is a matched this object is then removed using the splice function. If there is no match the response is sent as false, and if there is a match the response is sent as true. 

## Add Group
### Route	/api/makeGroup
### Method	POST
### Parameters	
`group = {
    "name": "",
    "users": "",
    "admins": "",
    "assis": ""
  }`
### Return Value	
`Response: true` or `Response:false`
### Explanation	
The angular component would read in four different strings, and for the users, admins, and assis input the superuser is instructed to enter multiple user values and separate them with a comma, no spaces. This is then sent to the server on the specified route which activates the addGroup function. This function reads in the values through the request body, and for the user, admin and assis values these are then turned into an array that holds the values at their own indexes, using the split() function. Once this is done a jsonReader function is called which reads the groups.json file and adds the existing groups to an object. The new group object is then pushed into the existing groups object where the groups.json file is then written over and saved. 

## Get Group 
### Route	/api/groups
### Method	POST
### Parameters	
`var nameSend = {
    "username":username 
  }`

### Return Value	
`[groupName1, groupName2, …] `
### Explanation	
The component sends a post request, using the localStorage username as a parameter and sends it in a JSON object. The server receives this and then assigns it to a variable. The jsonReader function is used to load all the current groups. It then iterates through specifically, the users section of the group objects and if there is a match it appends the groupName to an array. This array is then sent back as the response. 

## Post Messages
### Route	/api/messages
### Method	POST
### Parameters	
`fullMessage = {
    "name":"",
    "message": ""
  }`

### Return Value	
No Response/Return Value
### Explanation	
The component allows for a message to be input, within the chatroom route. This is then appended to a JSON object where name is the localStorage username currently held and the message is input. This is then sent to the server on the specified route and the server loads the request and assigns to a variable. The jsonReader also reads all the messages that came before it and loads that into a data object. Using the collect function from the collect.js library allows the message to be numbered and this is then stored as JSON object with the following format. 
`var userMessage = { msgNum: msgCount, 
                        name: userResponse.name,
                        message: userResponse.message};`
This message is then pushed into the data object where the jsonReader then re-writes the data.json file (where the messages are stored) and does not send back a response. 

## Get Messages
### Route	/api/getMessages 
### Method	GET
### Parameters
No Parameters
### Return Value	
`userMessage = { msgNum: msgCount, 
                        name: “name”,
                        message: “message”
                     }`

### Explanation	
When the chatroom component is loaded, this GET request is made to server at the specified route. The getMessages function is then loaded which has the jsonReader function read the data.json file and load the array of objects into a data variable, which is then sent back to frontend as the response. 

# Angular Components
## Home Component
This is the component that appears on the first load of the application, it has a login form and button to submit that form. It contains some information about the application such as a heading displaying Bantz and a small paragraph text below outlining the purpose of the application. 

### Login Form
The login form uses ngModel to read the values from the html component into the typescript file. The username value is referred to as username and the password value is referred to as password. The submit button calls the function sendData(). These html elements are wrapped in a form element that designates the submit action as POST and the action as /api/login, which is the route the data is sent to in the backend server. 
### Home Component Functions 
The home component typescript contains 3 different functions , navby(), checkDetails() and sendData().
`navby()`
 The navby() function simply activates the Router class which allows navigation between the components. In this case the router is being told to navigate to the /account section which brings up the account component. 


`checkDetails()`
The checkDetails() function checks the details submitted in the login form to ensure that they are not empty strings. If they are not empty the function returns true, else it will display an alert telling the user to input a username and value and returns false. 

`sendData()`
The sendData() is responsible for the data being appended to a JSON object before being sent to the server. This function first uses an IF statement to check the validity of the input through the checkDetails(), if it returns true it will activate the process of appending the user values into the JSON object before then being sent to the server and saving the username into localStorage under the key of username. If the server responds true it will then activate navby() else it will display an alert telling the user to input a valid username and password. 

## Account Component
The account component displays the username of the logged in and below there is an `ngIf*` statement to check if the username is a superuser name and if it is it will display a routerLink to /admin. Below this is a logout button which allows the user to logout and will take them back to the home page. This button calls the navhome(). Below this is a list of groups that the user has access to. These are displayed by using the groupNames array and iterating through that using a `ngFor*` loop. 

### Account Component Functions 
The account component contains a name variable which grabs the username from the localStorage. There is a Boolean value called isSuper which is used to check if the current user has valid access to admin options. There is a groupName array which is used to hold the returned values of groups the current user has access to. There is also a currentName variable used to set the name of the group the user has clicked on and save that name to storage. It uses four different functions: navhome(), checkSuperUser(), getGroups(), setGroupName(). 
navhome()
The navhome() is responsible for allowing the user to logout and return to the home component. This function is called when the logout button is pressed and clears all the localStorage and uses a Router class to route the page back to ‘//’ which is the route of the home component. 


`checkSuperUser()`
This function is called when the component is initialized in the ngOnInit() and checks if the users name matches the specified super user name, if so changes the isSuper Boolean to a true value and will allow the link to admin options to be displayed. 
`getGroups()`
This function is responsible for making a post call to the server, using the group service, and then returning all the group names where the localStorage username appears. 
`setGroupName()`
This function grabs the value of the link the user has clicked and then stores as a localStorage item called group. 

## Admin Component
The admin component displays when a user with access to the admin options link clicks on it. This component displays a title specifying that this is the Bantz Admin Options page and below that is a link back to the account page. This is followed by a form that allows the users to create new groups and define the users, admins and assistants for that group. This form starts with a text input called groupName, where the user will enter the desired name for the group. This followed by a textarea input where the user is told how to enter the users for that group, this is the same for the admins and assistant textarea boxes that follow. The form has a POST method and the action is defined as api/makeGroup which is the route required to activate the makeGroup function on the backend, which is activated when the button below is pressed and the makeGroup() is called because of this. 
Below this form is another form that provides the user with the ability to create a new user. The first text input is where the desired username will be entered followed by the desired password. They use the ngModel to link the values to the typescript file under the names username and userpassword respectively. The button in the form then calls the sendData() function which is exactly the same as the sendData() in the home component. 
The final section of this component is a single input which provides the ability for a user to denote a user they want deleted off the app entirely. It only requires the username for the user being deleted and the button calls the deleteUser() on click. 

### Admin Component Functions

`checkDetails()`
The checkDetails() function checks the details submitted in the login form to ensure that they are not empty strings. If they are not empty the function returns true, else it will display an alert telling the user to input a username and value and returns false. 
`sendData()`
This function starts by using the checkDetails() to check that their has been a valid input. If the input is valid the ngModel username and password is assigned to a JSON object which contains two keys of the same name, and appends the two aforementioned values to these keys. Using the user service to return the http request needed, it sends the JSON object to the server which calls the makeUser function. If the response is true it sends an alert saying the specified user has been created and clears the ngModel inputs. If it returns false it means that the username already exists so it displays an alert stating that, as well as clearing the ngModel inputs. 
`makeGroup()`
This function first starts by checking there is at least one user specified, as admins and assistants are a necessity at this moment. If there is not a user specified an alert will display saying to enter at least one user. If there is users specified the group name input will be appended to the group JSON data structure, as well as the group users, admins and assistants, which are all currently in a string format. Using the group service to return the specified http request in angular it then sends the JSON object to the server. If this returns true it will display an alert saying the group specified has been created, as well as clearing all the inputs used to specify the users etc. 
`deleteUser()`
This function first checks there is a valid input and if there is not it will display an alert saying to enter a user to be deleted. If the input is valid the input is appended to the delete user JSON object and sent to the server. If the response returns true, it will alert the user saying the user has been deleted, else it will alert saying that the user specified does not exist and both will clear the input box. 


