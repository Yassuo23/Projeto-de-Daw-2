// Elementos do HTML organizados para uso
const body = document.body;

const navInicial = document.querySelector("#NavInicial");
const estrela1 = document.querySelector("#estrela1");
const tituloSite = document.querySelector("#TituloSite");
const disc = document.querySelector("#disc");
const about = document.querySelector("#about");
const prizes = document.querySelector("#prizes");
const tema = document.querySelector("#tema");
const sidebar = document.querySelector("#sidebar");
const sidebarTitle = document.querySelector("#SidebarTitle");
const dontThemeButton = document.querySelector("#dontTheme");
const chromaThemeButton = document.querySelector("#ChromaTheme");
const callMeThemeButton = document.querySelector("#CallMe");
const igorThemeButton = document.querySelector("#IgorTheme");
const flowerThemeButton = document.querySelector("#FlowerTheme");
const overlay = document.querySelector("#overlay");

const meuCarrossel = document.querySelector("#meuCarrossel");
const banner1 = document.querySelector("#banner1");
const banner2 = document.querySelector("#banner2");
const banner3 = document.querySelector("#banner3");
const containerGeral = document.querySelector("#containerGeral");

const container1 = document.querySelector("#container1");
const subtitulo = document.querySelector("#subtitulo");
const titulo = document.querySelector("#titulo");
const rap = document.querySelector("#rap");
const produtor = document.querySelector("#produtor");
const criativo = document.querySelector("#criativo");
const estilista = document.querySelector("#estilista");

const container2 = document.querySelector("#container2");
const portrait1 = document.querySelector("#portrait1");
const carroselAlbuns = document.querySelector("#CarroselAlbuns");
const albuns = document.querySelector("#albuns");

const container3 = document.querySelector("#container3");
const subtitulo2 = document.querySelector("#subtitulo2");
const sobre = document.querySelector("#sobre");
const listaAlbuns = document.querySelector("#listaAlbuns");
const mark = document.querySelectorAll("#mark");
const container4 = document.querySelector("#container4");
const subtitulo3 = document.querySelector("#subtitulo3");
const moda = document.querySelector("#moda");
const marcas = document.querySelector("#marcas");

const container5 = document.querySelector("#container5");
const subtitulo4 = document.querySelector("#subtitulo4");
const discography = document.querySelector("#discography");
const dontTap = document.querySelector("#dontTap");
const chromaAlbum = document.querySelector("#chroma");
const callAlbum = document.querySelector("#Call");
const igorAlbum = document.querySelector("#igor");
const flowerAlbum = document.querySelector("#flower");
const cherryBomb = document.querySelector("#cherryBomb");
const wolf = document.querySelector("#wolf");



//função para a animação de fazer os elementos aparecerem na tela.

const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, {threshold: 0.4});
    
document.querySelectorAll(".unrevealed").forEach(element => observador.observe(element));


//função para a navbar lateral

const buttonTheme = document.querySelector("#tema");
const SideBar = document.querySelector("#sidebar");
const Overlay = document.querySelector("#overlay")

const OpenSideBar = (() => {

    SideBar.classList.toggle('open');
    Overlay.classList.toggle('show');

    if (SideBar.classList.contains('open')) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }

})


buttonTheme.addEventListener("click", OpenSideBar);

//botões dos temas//

const ChromakopiaTheme = (() => {

    body.style.backgroundColor = "var(--grey)"

    //NavBar//
    navInicial.style.backgroundColor = "var(--chromaGreen)";
    tituloSite.style.color = "black";
    disc.style.color = "black";
    about.style.color = "black";
    prizes.style.color = "black";

    //SideBar//

    sidebar.style.backgroundColor = "var(--darkGreen)";
    sidebarTitle.style.color = "white";
    dontThemeButton.style.color = "black";
    chromaThemeButton.style.color = "black";
    callMeThemeButton.style.color = "black";
    igorThemeButton.style.color = "black";
    flowerThemeButton.style.color = "black";

    //Banner carrossel de imagens//

    banner1.setAttribute("src", "../Images/chromakopia.webp");
    banner2.setAttribute("src", "../Images/ChromaBanner2.jpg");
    banner3.setAttribute("src", "../Images/Chromabanner3.jpg");

    //Container1//

    subtitulo.style.color = "var(--chromaGreen)";
    titulo.style.color = "var(--chromaGreen)";
    rap.style.color = "var(--chromaGreen)";
    produtor.style.color = "var(--chromaGreen)";
    criativo.style.color = "var(--chromaGreen)";
    estilista.style.color = "var(--chromaGreen)";

    //Container2//

    container3.style.backgroundColor = "var(--darkGrey)";
    subtitulo2.style.color = "var(--chromaGreen)";
    sobre.style.color = "var(--chromaGreen)";
    estilista.style.color = "var(--chromaGreen)";
    mark.style.color = "white";
    listaAlbuns.style.color = "var(--chromaGreen)";

})

chromaThemeButton.addEventListener("click", ChromakopiaTheme);