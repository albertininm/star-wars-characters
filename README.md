# [Star Wars - Character Wiki](https://albertininm.github.io/star-wars-characters/)
The purpose of this app is to show information about Star Wars characters:
- Name
- Species
- Home world name and population

When clicking on a character from the list, the app lists all movies that the selected character participated.

## Folder structure
- src/components
  - All components necessary for the application. If they have inner components, they are nested following the folder structure
- src/config
  - Basic configuration for the app. In this case, only the API endpoint used to build the application
- src/contexts
  - Folder for all React contexts used in the application. We only have the cache context which was created to store data retrieved from API
- src/helpers
  - Contains helper functions used by components, allowing components to be less complex.
- src/hooks
  - Custom React hooks to fetching data and interacting with cache context
- src/types
  - Basic types for retrieving data from API
- src/utils
  - Simmilar to helpers, but more "agnostic" to application


## Running the APP

Run `yarn install && yarn build && yarn start` to see the APP running on `localhost:3000` in your machine.


TODO:
- tests