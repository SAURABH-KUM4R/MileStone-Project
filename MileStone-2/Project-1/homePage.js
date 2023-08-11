const add = document.getElementById("add");
const dialog = document.getElementById("dialog");
const addBlog = document.getElementById("addBlog");
const localStorage = window.localStorage;
const display = document.getElementById("display");
add.addEventListener("click",() => {
    dialog.show()
})

addBlog.addEventListener("click",() => {
    const title = document.getElementById("title").value;
    const poster = document.getElementById("poster").value;
    const description = document.getElementById("description").value;
    const content = document.getElementById("content").value;
    const blog = {
        title: title,
        poster: poster,
        description: description,
        content: content
    }
    
    if (!localStorage.getItem("id")) {
        localStorage.setItem("id",0);
    }

    let id = localStorage.getItem("id")
    localStorage.setItem(id,JSON.stringify(blog));
    id++;
    localStorage.setItem("id",id);
    showBlog();
    dialog.close();
});

function showBlog() {
    const blog = [];
    for (let index = 0; index < localStorage.getItem("id"); index++) {
        blog.push(JSON.parse(localStorage.getItem(index)))
    }
    let card = blog.map((Element, i) => {
        return( 
            `<div class="card" id="${i}">
            <img src="${Element.poster}" alt="">
            <p id="title">${Element.title}</p>
            <p>${Element.description}</p>
            <span hidden="true" id="btnID">${i}</span>
            <button onClick="readBlog(${i})">Read More</button>
            </div>`
        )
    })
    display.innerHTML = card;
}

(
    () => {
        showBlog();
    }
)();

function readBlog(id) {
    window.location = "./readBlog.html";
    localStorage.setItem("blogID",id);
}