# Welcome to D-6 Shopping

D-6 Shopping is the first page in a long book that I plan on creating throughout my career. Working heavily in my past with students with special needs I have seen a need to more online apps that simulate real life activities. Things that many of us see as easy or mundane tasks can prove to be very challenging for this population. That is why I have created D-6 Shopping. 

This app will be a part of "D-6 Living",  a larger program that will include many life skills such as banking, domestic and social skills. 

After a student has logged in or signed up they are able to use the different functions of the app. They can sort through items of a generic grocery store, choosing which they would like to add to cart. They then can verify the amounts and total price in the cart and checkout. After checkingout the student can review previous orders, start a new order or logout. 

This is a streamlined base shopping activity. It has the ability to be added onto for more advanced students going forward. 

#### [D-6 Shopping](https://d6-living.herokuapp.com/orders/new)

#### The Interface

Student has the ability to Login or Sign-Up 

![Login](/public/screenshots/login.png)

![Sign-Up](/public/screenshots/signup.png)

Once logged in the student can begin filling their shopping cart by viewing multiple categories

![View](/public/screenshots/NewOrderPage.png)

![NewCAt](/public/screenshots/NewCat.png)

The Student can Add Items to the Cart

![Sign Up](/public/screenshots/addToCart.png)

The Student can change quantity and delet

![No Bets](/screenshots/no-bets.png)

You can add a name and wager to a new bet.

![Add Bet](/screenshots/add-bet.png)

Then you will be able to choose your teams.

![Add Teams](/screenshots/add-teams.png)

If teams have already played they will not be able to be chosen.

![Played Teams](/screenshots/played-teams.png)

Once you have chosen 3 teams you will no longer be able to choose anymore. User has the ability to remove teams until a score has been updated.

![Limit Teams](/screenshots/limit-teams.png)

As scores are updated teams will no longer be able to be removed and the total score will update.

![Team Score](/screenshots/team-score.png)

You can edit and delete your bets.

![Edit Bet](/screenshots/edit-bet.png)

![Delete Bet](/screenshots/delete-bet.png)

Once bets are created you will be able to view them here. 

![View Bets](/screenshots/view-bets.png)

If signed in as an admin you can view, create, delete and edit teams.

![Admin Abilities](/screenshots/team-index.png)

![Admin Abilities](/screenshots/edit-team.png)

![Admin Abilities](/screenshots/create-team.png)

![Admin Abilities](/screenshots/delete-team.png)

The app is responsive to smaller and larger screens using a navbar.

![Responsive](/screenshots/responsive.png)

![Navbar](/screenshots/navbar.png)

#### Technologies Used

-Django
-Python
-Html
-Materialize
-Javascript
-Heroku
-PgAdmin
-SQL Database


#### Approach

- Created ERD, Wireframes and Trello board to map out the app.
    - [Trello](https://trello.com/b/M735kYYA/slick)
    - [Whimsical](https://whimsical.com/slick-3X7VfkAn9qaBABjsd9Tqnh)
    - [ERD](https://lucid.app/lucidchart/c4fb7334-355b-41ec-86d8-2350e453bc4b/edit?viewport_loc=31%2C-129%2C1681%2C1075%2C0_0&invitationId=inv_59c5cf7b-97a6-449a-89d3-e46c7f34667f#)
- Assigned roles to members of the team
    - Michael Linch: Scrum and Documenter
    - Navjeet Chatta: Git Manager
    - Vincent Slater: Design Manager
    - Michael Kim: Database Manager
- Created CRUD operations for bets
    - creating paths, urls and views for each operation
- Created users to allow there to be 1:M relationship
    - included login, log out and sign up functionality
- Created teams and the M:M relationship with bets
- Added restrictions to non-authorized users
    - CUD ooperations for bets
- Limited the amount of teams a user could choose to 3
- Added the ability to remove teams from bet
- Created function to add total bet score as scores are updated
- Added restrictions to users who are not admin
    - CUD operations for teams
- Restircted users from adding teams who have or are currently playing a game.
- Restricted users from removing teams who have or are currently playing a game.

#### What went well...

- Mob style of coding
- Group communication
- Stuck to original plan and stayed on track

#### Hurdles

- Heroku deployment was our biggest hurdle. We had to create a new repo after breaking our original app. 
    - [OG Github](https://github.com/Nomje/SLICK-Fantasy)
- Initial conflicts when pushin to git main. 
- Adding total_score was the only function that gave us difficulty.

#### Ice Box

- Being able to search and compare scores with other users
- Adding other sports or players
- Adding team and user pictures
- Creating a league to play in all season
- Using an API to update teams and scores

#### Team Member Githubs

- [Michael Linch](https://github.com/michaellinch90)
- [Michael Kim](https://github.com/sparklingwaterlemon)
- [Navjeet Chatta](https://github.com/Nomje)
- [Vincent Salter](http://github.com/vsalter)



