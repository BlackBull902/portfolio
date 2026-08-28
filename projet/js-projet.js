async function makeContent() {
    const id = new URLSearchParams(window.location.search).get("id");

    if (id === null) {
        home()
        return
    }

    const resp = await fetch('./info-projet.json');
    var data = await resp.json();
    data = data[id];

    // Texte intro
    document.querySelector("#titre-proj").innerHTML = data.titre_proj;
    document.querySelector("#duree-proj").innerHTML = data.duree_proj;
    document.querySelector("#contexte-proj").innerHTML = data.contexte_proj;

    // Screenshots 
    const wrapper_image_proj = document.querySelector("#image-content");
    data.image_proj.forEach(src => {
        const image = document.createElement("img");
        image.src = '../images/projet/' + id + '/' + src;
        wrapper_image_proj.appendChild(image);
    });
    if (data.image_proj.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Aucune image pour ce projet";
        wrapper_image_proj.appendChild(p);
    }

    // Technologies
    const wrapper_techno_proj = document.querySelector("#techno-content");
    data.techno_proj.forEach(techno => {
        const card = document.createElement("div");
        card.className = "card flex-shrink-0";
        card.style.width = "250px";

        card.innerHTML = `
        <img src="../images/techno/${techno.img}" alt="${techno.alt}" class="card-img-top p-3" >
        <div class="card-body text-center wrapper-techno-text">
            <p class="card-text fw-semibold">${techno.text}</p>
        </div>
    `;
        wrapper_techno_proj.appendChild(card);
    });

    // Compétences proj
    const list_comp_proj = document.querySelector("#comp-proj ul");
    data.comp_proj.forEach(comp => {
        const line = document.createElement('li');
        line.innerHTML = comp;
        line.classList.add('list-group-item');

        list_comp_proj.appendChild(line)
    })

    // Git
    const wrapper_git_proj = document.querySelector("#git-content");
    data.git_proj.forEach(git => {
        const a = document.createElement("a");
        a.href = git.href;
        a.innerHTML = git.text;
        a.target = '_blanc'

        wrapper_git_proj.appendChild(a);
    })

    if (data.git_proj.length === 0) {
        document.querySelector("#git-proj").remove();
    }

    speceficStuff(id);
}

function home() {

}



if (document.readyState !== 'loading') {
    makeContent();
} else {
    document.addEventListener('DOMContentLoaded', makeContent);
}

function speceficStuff(id) {
    switch (id) {
        case "handistat":
            const anchor = document.querySelector("#duree-proj");
            const link = document.createElement("a");
            link.textContent = "Handistat";
            link.href = "https://handistat.alwaysdata.net/";
            link.target = "_blanc";
            link.classList.add('ms-3');

            anchor.after(link);
            break;
    }
}