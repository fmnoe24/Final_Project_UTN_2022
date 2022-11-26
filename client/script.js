
const $listEmojiButton = document.getElementById("listEmojiButton");

async function getListEmoji(event){
    console.log("Obteniendo lista de emojis");
    const $start = document.getElementById("start")?.value;
    const $limit = document.getElementById("limit")?.value;

    const $listEmojis = document.getElementById("listEmojis");

    if(!start || !limit) {
        console.log("No hay datos ingresados");
    }

    const url = `/api/v1/emojis?start=${start}&limit=${limit}`;

    const result = await fetch(url);

    const data = await result.json();
    console.log(data)
}

$listEmojiButton.addEventListener("click", getListEmoji);

