
        function toggleMobileMenu(menu) {
            menu.classList.toggle('open');
        };


fetch ('https://reqres.in/api/users?page=1')
.then(response => response.json())
.then(data => {
    const div = document.querySelector('#test');
    data.data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'userDiv'
        const userImg = document.createElement('img');
        const Name = document.createElement('p');
        const email = document.createElement('p');
        const space = ' ';
        Name.textContent= user.first_name + space + user.last_name;
        email.textContent= user.email;
        userImg.src = user.avatar;
        userImg.alt = user.first_name;
        div.appendChild(userDiv);
        userDiv.appendChild(userImg);
        userDiv.appendChild(Name);
        userDiv.appendChild(email);
        })


});
