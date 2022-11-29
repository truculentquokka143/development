# Development

### Link to Deployed Website
https://truculentquokka143.github.io/development/

### Goal and Value of the Application
The goal of this project was to use React to develop an interactive interface, use interface components, and tie the components to an internal data state. I made a list-based interface for users to select items out of a list and aggregate them. The application I have created for this assignment allows users to sort, filter, and favorite different marsupials based on their name, mass, length, and diet in hopes of educating others about the various kinds of marsupials that exist.


### Usability Principles Considered
In my App.js, I have my major states, each with it's function detailed below.

- favorites - Keeps track of the names of the favorited marsupials
- favoritesMass - The total mass of the favorites marsupials
- favoritesClicked - A bool indicating whether or not the favorites checkbox is checked
- filter1 - Holds the value for which radio button is selected for filter 1 (Diet)
- filter2 - Holds the value for which radio button is selected for filter 2 (Average Length)
- sort - Holds the value for which sorting method is selected in the dropdown

App.js holds the filter and item components and displays them neatly on the page. Filtering and sorting of the item data is done based on the value of the filter1, filter2, favoritesClicked, and sort states.

### Components and Organization
The Aggregator component displays a list of the favorited marsupials' names.

The Dropdown component represents the sort by dropdown that allows users to select the sorting method.

The Favorites component represents the 'Add to Favorites' button for each item card and changes to 'Remove' after an item has been added to the favorites list, which is passed in as a prop. The favoritesMass prop is also incremented. When 'Remove' is clicked, the item is removed from the favorites list and favorites mass.

The Filter component holds all of the filter radio buttons, favorites toggle, and favorites mass. When the value of the radio button or favorites checkbox changes, the states for those are updated using the set methods passed in as props from App.js.

The Items component holds all of the information about a marsupial.

### How Data is Passed Down Through Components
All of the major states are in App.js. 

The Aggregator component has one prop, favorites, so that it can display the names of the favorite marsupials.

The Dropdown component has one prop, setSort, so that sort can be set to the value of the dropdown.

The Filters component has the props setFilter1, setFilter2, favoritesClicked, setFavoritesClicked, and favoritesMass. The set methods are used to set the state of the filter methods and favorites clicked. The favoritesMass value is displayed. 

The Items component has the prop data which holds information about the marsupials to display. It also has the props favorites, setFavorites, favoritesMass, and setFavoritesMass, which it passes down to the Favorites component.

The Favorites component has all of the props mentioned above, as well as name and mass of the item.
When the favorites button is clicked and unclicked, the list of favorites and favoritesMass are changed using the set methods for those states.

### How the User Triggers State Changes
The user triggers state changes by clicking different radio buttons for the filters, by checking and unchecking the favorites, and by changing the sort by method in the dropdown.

### Usability principles
I attempted to keep a minimal design for my application. I established a visual hierarchy with large and bold titles and headers and small, unboleded body text. The filters panel is on the left for easy user recognition. The radio buttons enable users to only select one value for each filter to give user control but also to prevent errors by selecting multiple values. The 'Add To Favorites' button is large and beneath the item description, making it easy for users to find. Additionaly, a grid like pattern for the items makes the layout consistent and organize. Each filter, dropdown, section, and item is clearly labeled so users can easily understand what every element on the page is for.
