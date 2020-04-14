const data = require("../../data");
const postData = data.postData;

const getHomePage = (req, res) => {
  res.render("index", { title: "just Me", posts: postData });
};

const getBlogPost = ({ params }, res) => {
  let post = postData.find((val) => val.id == params.postid);
  res.render("post", { title: post.title, post: post });
};

module.exports = {
  getHomePage,
  getBlogPost,
};
