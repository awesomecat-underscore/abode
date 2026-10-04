/* blog.js */

const reader = new FileReader();

const table = document.getElementById("table");


async function loadJSON() {
    const response = await fetch("posts.json")
    const posts = await response.json();

    
    for (i = 0; i < posts.posts.length; i++) {
        const row = document.createElement("tr")

        const title = document.createElement("th");
        title.innerHTML = posts.posts[i].title;

        const date = document.createElement("th");
        date.innerHTML = posts.posts[i].date;

        const link = document.createElement("th");
        const hypr = document.createElement("a");
        hypr.innerHTML = posts.posts[i].link;
        hypr.href = posts.posts[i].link;
        link.append(hypr);

        row.append(title);
        row.append(date);
        row.append(link);

        table.append(row);
    }
}

loadJSON()