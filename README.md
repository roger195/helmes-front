# Helmese testtöö frontend

## Project description
This is a "session" based form filling project. To get started create a session using the "Create Session" button
in the header. After that you can fill all the fields and save your data. The session id is saved in the 
session storage, so you can start a new session by clicking the button again or by opening another tab.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Tasks:

1. Correct all the deficiencies in index.html

2. "Sectors" selectbox:

    2.1. Add all the entries from the "Sectors" selectbox to database

    2.2. Compose the "Sectors" selectbox using data from database

3. Perform the following activities after the "Save" button has been pressed:

    3.1. Validate all input data (all fields are mandatory)

    3.2. Store all input data to the database (Name, Sectors, Agree to terms)

    3.3. Refill the form using stored data

    3.4. Allow the user to edit his/her own data during the session

