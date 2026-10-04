/* vault.js */

const table = document.getElementById("table");


async function loadJSON() {
    const response = await fetch("vault.json")
    const songs = await response.json();

    
    for (i = 0; i < songs.songs.length; i++) {
        const row = document.createElement("tr")

        const title = document.createElement("th");
        title.innerHTML = songs.songs[i].title;

        const description = document.createElement("th");
        description.innerHTML = songs.songs[i].description;

        const year = document.createElement("th");
        year.innerHTML = songs.songs[i].year;

        const link = document.createElement("th");
        const hypr = document.createElement("a");
        hypr.innerHTML = songs.songs[i].link;
        hypr.href = songs.songs[i].link;
        link.append(hypr);

        const play = document.createElement("th");
        const audio = document.createElement("audio");
        audio.src = songs.songs[i].link;
        audio.controls = true
        play.append(audio)

        row.append(title);
        row.append(description);
        row.append(year);
        row.append(link);
        row.append(play);


        table.append(row);
    }
}

loadJSON()