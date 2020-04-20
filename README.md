An React application with basic routing and authentication concepts to list, add, update item details where we have 3 pages
1. /login
    - to login with username password
2. /list
    - user can see all list after login here
3. /add
    - Add or update an item

Here are some restrictions.
1. use localstorage to store all details
2. itemdetails format = [{"name":"Sample item 1", "price":201, "tax":true, "_id":1}]
3. in itemdetails array, id is auto generated number
4. in list page all items details are listed in a table where user can edit and delete items
5. there is an add button in item list page, using which user can goto add page where user can add and save new item.
6. user should be able to see list and add pages only after user logged in
7. when user directly goes to list page without login, it should take user to login page
8. if user tries to goto login page aeven after login, it should not display login page, it should immediately redirect to list page
9. there is a button to logout in list page
10. user can't add duplicated item names,
11. item names are not editable
12. clicking update button will take user to add page where user can see the details and update the item details
