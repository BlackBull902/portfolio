async function makeContent() {
    const id = new URLSearchParams(window.location.search).get("id");

    if (id === null) {
        home()
        return
    }

    const resp = await fetch('./info-pro.json');
    var data = await resp.json();
    data = data[id];

    // Texte intro
    document.querySelector("#titre-pro").innerHTML = data.titre_pro;
    document.querySelector("#duree-pro").innerHTML = data.duree_pro;
    document.querySelector("#contexte-pro").innerHTML = data.contexte_pro;

    // Screenshots 
    const wrapper_image_pro = document.querySelector("#image-content");
    data.image_pro.forEach(src => {
        const image = document.createElement("img");
        image.src = '../images/pro/' + id + '/' + src;
        wrapper_image_pro.appendChild(image);
    });
    if (data.image_pro.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Aucune image"
        wrapper_image_pro.appendChild(p);
    }

    // Technologies
    const wrapper_techno_pro = document.querySelector("#techno-content");
    data.techno_pro.forEach(techno => {
        const card = document.createElement("div");
        card.className = "card flex-shrink-0";
        card.style.width = "250px";

        card.innerHTML = `
        <img src="../images/techno/${techno.img}" alt="${techno.alt}" class="card-img-top p-3" >
        <div class="card-body text-center wrapper-techno-text">
            <p class="card-text fw-semibold">${techno.text}</p>
        </div>
    `;
        wrapper_techno_pro.appendChild(card);
    });

    // Compétences Pro
    const list_comp_pro = document.querySelector("#comp-pro ul");
    data.comp_pro.forEach(comp => {
        const line = document.createElement('li');
        line.innerHTML = comp;
        line.classList.add('list-group-item');

        list_comp_pro.appendChild(line)
    })
}

function home() {

}



if (document.readyState !== 'loading') {
    makeContent();
} else {
    document.addEventListener('DOMContentLoaded', makeContent);
}
