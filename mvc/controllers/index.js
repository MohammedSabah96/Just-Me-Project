const data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostsAmount = 3;

const getHomePage = (req, res) => {
  res.render("index", {
    title: "just Me",
    posts: postData,
    active: "index",
    categoryData: categoryData,
  });
};

const getBlogPost = ({ params }, res) => {
  let post = postData.find((val) => val.id == params.postid);
  if (!post) {
    res.redirect("/404");
  }
  res.render("post", {
    title: post.title,
    post: post,
    uniqueTags: uniqueTags,
    recentPosts: postData.slice(0, recentPostsAmount),
    categoryData: categoryData,
  });
};

const get404 = (req, res) => {
  res.render("404", {
    title: "404 -I couldn't find that page...",
    uniqueTags: uniqueTags,
    recentPosts: postData.slice(0, recentPostsAmount),
    categoryData: categoryData,
  });
};

const redirect404 = (req, res) => {
  res.redirect("/404");
};

const getAbout = (req, res) => {
  res.render("about", {
    title: "About Me",
    active: "about",
    categoryData: categoryData,
  });
};

const getContact = (req, res) => {
  res.render("contact", {
    title: "Contact",
    active: "contact",
    categoryData: categoryData,
  });
};

const getFilteredList = ({ query }, res) => {
  let filteredPosts = postData.filter((val) => val.category == query.category);
  res.render("filter", {
    title: "Just Me - Filtered",
    active: query.category,
    posts: filteredPosts,
    categoryData: categoryData,
  });
};

module.exports = {
  getHomePage,
  getBlogPost,
  getAbout,
  getContact,
  get404,
  redirect404,
  getFilteredList,
};
