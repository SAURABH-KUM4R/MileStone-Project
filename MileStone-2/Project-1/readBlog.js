{/* <div id="brief">
    <div>
        <p></p>
        <p></p>
    </div>
        <img src="" alt="">
    </div>
<div id="content">
    <p>
    </p>
</div> */}

(
    () => {
        let fullBlog = document.getElementById("fullBlog");
        const id = localStorage.getItem("blogID")
        const blog = JSON.parse(localStorage.getItem(id));
        fullBlog.innerHTML = 
            `<div id="brief">
            <div>
                <p>${blog.title}</p>
                <p>${blog.description}</p>
            </div>
                <img src="${blog.poster}" alt="">
            </div>
            <div id="content">
                <p>
                ${blog.content}
                </p>
            </div>
            `
    }
)();