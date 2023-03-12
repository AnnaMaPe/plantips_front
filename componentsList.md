# DATA

## DATA LAYER

- Tip

  - plant common name
  - plant scientific name
  - plant image
  - level of care required
  - water
  - light
  - user's tip

- User
  - username
  - email
  - password

## DATA MODIFICATIONS

- Load tips
- Create a new tip
- Add tip to list
- Update tip from user's list
- Delete tip from user's list

# COMPONENTS

## APP

- Show Header component

## Layout

- Show Layout component

## Header

- Contains the app logo
- Contains Navbar

## TipsList

- Receives the list of tips from the Api
- Shows a TipCard component for every tip in the TipsList
- Sends the tip info to each TipCard component

## TipCard

- Receives a tip
- Displays some information about each tip
  - plant name
  - plant scientfic name
  - plant image
  - level of care required
- Navigates to Detail page

## User's Form

- Receives the info to register a new user
- Receives an action to register a new user
- Shows a button "Register" to submit the form
- On submit executes the function to register a new user

- Receives the info to login an existing user
- Receives an action to login an existing user
- Shows a button "Login" to submit the form
- On submit executes the function to login an existing user

## Tip's Form

- Receives the info to create a new tip
- Receives an action to create a new tip
- Shows a button "Create a tip" to submit the form
- On submit executes the function to create a new tip
- Sends new tip to TipsList component

- Recives the updated info to modify an existing tip
- Receives an action to modify an existing tip
- Shows a button "Modify tip" to submit the form
- On submit executes the function to modify a new tip
- Modifys tip on TipsList and to User's Tips List Page

## Navbar

- Contains the routes to navigate to:
  - Home Page
  - User's tip page
  - Create a tip

## Feedback/Modals

- Contains the user feedback for:
  - Creating a tip:
    - tip was created
    - tip could not be created
  - Modifng a tip:
    - tip was modified
    - tip could not be modified
  - Registering:
    - user was not created
    - user already exists
  - Login
    - wrong credentials

## Search

- Contains a form to seacrh by plants scientific name
- Receives the function to search tips

## Pagination

- Receives the function to load more tips

## Button

- Receives text
- Shows the recieved text inside
- Receives an action
- Receives the function to search tips
- On click executes the recieved action

# Pages

## Home Page

- Contains the TipsList component
- Contains the Search component
- Contains the Pagination component

### User's Tips List Page

- Contains a list of tips created by the user
- Contains the function to remove a tip from the list
- Contains the function to modify a tip from the list

## Detail Page

- Shows a tip with all the information

## Create Page

- Contains the Form component
- Receives the function to create a new tip

## 404 Page

- Displays an error message when a request went wrong

## Modify Page

- Contains The Form component
- Receives the function to modify new tip
