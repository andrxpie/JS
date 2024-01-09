let api = "https://api.github.com/users/andrxpie";


function search() {
  const tbx = document.getElementById('searchtbx');
  api = "https://api.github.com/users/" + tbx.textContent;
  fetch(api)
    .then(res => res.json())
    .then(res => {
      const name = document.getElementById('name');
      const login = document.getElementById('login');
      const url = document.getElementById('url');
      const blog = document.getElementById('blog');
      const city = document.getElementById('city');
      const email = document.getElementById('email');
      const followers = document.getElementById('followers');
      const following = document.getElementById('following');

      name.innerText = res.name;
      login.innerText = res.login;
      url.innerHTML = "<a href='" + res.url + "'>" + res.url + "</a>";
      blog.innerHTML = "<a href='" + res.blog + "'>" + res.blog + "</a>";
      city.innerText = res.city;
      email.innerText = res.email;
      followers.innerText = res.followers;
      following.innerText = res.following;
    })
    .catch(err => console.error(err.message));
}

const btn = document.getElementById('searchbtn');
btn.onclick = search();
