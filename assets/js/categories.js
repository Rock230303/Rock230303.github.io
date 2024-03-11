---
---

const categories = { {% for category in site.categories %}{% capture category_name %}{{ category | first }}{% endcapture %}{{ category_name | replace: " ", "_" }}: [{% for post in site.categories[category_name] %}{ url: `{{ site.baseurl }}{{ post.url }}`, date: `{{post.date | date_to_string}}`, title: `{{post.title}}`},{% endfor %}],{% endfor %} }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      posts.target = "_blank";

    });
  });


};