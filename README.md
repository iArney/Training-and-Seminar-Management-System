# tsms


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Technology stack
### vue 2.7.10
See [Vue documentation](https://vuejs.org/).

### @vue/cli 
See [Official documentation](https://cli.vuejs.org/).

### Boostrap 5.2(cdn)
See [Official documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

### Vuetify 2.6.9
See [Official documentation](https://vuetifyjs.com/en/getting-started/installation/).

### Pinia 2.0.21
See [Official documentation](https://pinia.vuejs.org/introduction.html).

### Fetch API
Browser API for sending queries to back end

### API standards
GraphQL 
See [GraphQL documentation](https://graphql.org/)

### NODE v16.0^ && NPM v8.18.0^

## File Structure
### > node_modules
Project dependencies installed by npm

### > public
#### index.html
The main html file.
All cdn links are embedded in this file

#### main.css
Location of the main css file.
All global styling classes are found in this file

### > src
Code base of the project. All the scripts are found in this folder.

### > src/assets
Location of images and icons used in the project

### > src/components/decorations
Decorative components used in the project. Example BubbleDecoration.vue

###  > src/components/global_components
Globally reusable components used in the project such as the AppBar, NavigationDrawer.

### > src/components/Microcomponents
Reusable components used in the project, such as TextInput, Selects, Cards

### > src/components/sections
Modular sections used in the project, such as Registration form, Banners

### > src/graphQLqueries
Location of graphQl queries for querrying data and performing mutations

### > src/helpers
Location of helper functions which can be reused to extend fuctionalities of components

### > src/plugins
Location of vuetify plugin function. From here you can specify the themes of the application.

### > src/router
Location of the routes of the application.

### > src/stores
Location of global pinia stores form managing states of the components

### > src/views
Location of page view components of project

### > src/useAPIClient.js
Definitation of the fetch API client.







