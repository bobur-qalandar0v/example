const UserRow = document.querySelector(".user-row");
const PostRow = document.querySelector(".post-row");
const CommentRow = document.querySelector(".coment-row");

let userData = null;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    getUser(json);
  });

let userPosts = null;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    userPosts = json;
  });

let userComments = null;
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((json) => {
    userComments = json;
  });

function createElement(tagName, className, innerText, parent) {
  let element = document.createElement(tagName);
  element.setAttribute("class", className);
  element.innerText = innerText;
  parent.append(element);
  return element;
}

function getUser(userData) {
  userData.map((item) => {
    let RowItem = createElement("div", "row-item", "", UserRow);
    let RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Name:", RowData);
    createElement("p", "row-text", item.name, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Email:", RowData);
    createElement("p", "row-text", item.email, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Address:", RowData);
    createElement("p", "row-text", item.address.city, RowData);
    let RowButton = createElement("button", "row-button", "Posts", RowItem);
    RowButton.addEventListener("click", () => getPosts(item.id));
    return RowItem;
  });
}

function getPosts(id) {
  PostRow.innerHTML = "";
  let filteredPosts = userPosts.filter((item) => item.userId === id);
  filteredPosts.map((item) => {
    let RowItem = createElement("div", "row-item", "", PostRow);
    let RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "User ID:", RowData);
    createElement("p", "row-text", item.userId, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Title:", RowData);
    createElement("p", "row-text", item.title, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Body:", RowData);
    createElement("p", "row-text", item.body, RowData);
    let RowComment = createElement("button", "row-button", "Comments", RowItem);
    RowComment.addEventListener("click", () => getComments(item.id));
    return RowData;
  });
}

function getComments(id) {
  CommentRow.innerHTML = "";
  let filteredComments = userComments.filter((item) => item.postId === id);
  filteredComments.map((item) => {
    let RowItem = createElement("div", "row-item", "", CommentRow);
    let RowData = createElement("div", "row-data", "", RowItem);  
    createElement("p", "row-subtitle", "Post ID:", RowData);
    createElement("p", "row-text", item.postId, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Name:", RowData);
    createElement("p", "row-text", item.name, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Email:", RowData);
    createElement("p", "row-text", item.email, RowData);
    RowData = createElement("div", "row-data", "", RowItem);
    createElement("p", "row-subtitle", "Body:", RowData);
    createElement("p", "row-text", item.body, RowData);
  });
}
