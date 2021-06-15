const Wrapper = require("./Wrapper");

const get = (model, domain, done) => {
  fetch(`https://jsonplaceholder.typicode.com/${domain}`)
    .then((res) => res.json())
    .then((json) => {
      model[domain] = json;
      done();
    });
};

const app = document.getElementById("app");

const run = (model) =>
  get(model, "users", () =>
    get(model, "posts", () => {
      model.users.forEach((user) => (model.userIdx[user.id] = user));
      app.innerText = "";
      model.posts.forEach((post) =>
        app.appendChild(renderPost(post, model.userIdx[post.userId]))
      );
    })
  );
app.appendChild(
  Wrapper.generate("button", "Load").click(() =>
    run({
      userIdx: {},
    })
  ).element
);
