class MainNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="../">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </a>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Expériences professionnelles
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="../professionnel/index-pro.html?id=stage-hcl">
                                    Stage HCL
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../professionnel/index-pro.html?id=stage-cermep-2026">
                                    Stage Ceremep 2026
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="../professionnel/index-pro.html?id=stage-cermep-2025">
                                    Stage Ceremep 2025
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Projets académiques
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../projet/index-projet.html?id=etl-immo">ETL pour une agence immobilière</a></li>
                            <li><a class="dropdown-item" href="../projet/index-projet.html?id=feedwatch">Feedwatch</a></li>
                            <li><a class="dropdown-item" href="../projet/index-projet.html?id=handistat">Handistat</a></li>
                            <li><a class="dropdown-item" href="../projet/index-projet.html?id=didactypo">Didactypo</a></li>
                            <li><a class="dropdown-item" href="../projet/index-projet.html?id=aerogestion">Aérogestion</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        <style>
            .navbar-nav {
                background-color: white !important;
                border-radius: 0.375rem !important;
            }
        </style>
        `
    }
}

customElements.define('main-nav', MainNav);