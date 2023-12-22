function search() {
  const tbx = document.getElementById('searchtbx');
  const api = `https://api.github.com/users/${tbx.textContent}`;
  fetch(api)
    .then(res => { return res.json(); })
    .then(data => {
      const name = document.getElementById('name');
      const login = document.getElementById('login');
      const url = document.getElementById('url');
      const blog = document.getElementById('blog');
      const city = document.getElementById('city');
      const email = document.getElementById('email');
      const followers = document.getElementById('followers');
      const following = document.getElementById('following');

      name.innerText = data.name;
      login.innerHTML = data.login;
      url.innerHTML = data.url;
      blog.innerHTML = data.blog;
      city.innerHTML = data.city;
      email.innerHTML = data.email;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
    })
    .catch(err => console.error(err.message));
}

const btn = document.getElementById('searchbtn');
btn.onclick = search();
