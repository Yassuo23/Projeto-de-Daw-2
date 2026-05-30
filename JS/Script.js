
//função para a animação de fazer os elementos aparecerem na tela.

const Container1 = document.querySelector("#container1");
const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log("Esta Visivel");
            entry.target.classList.add('revealed');
            observador.unobserve(entry.target);
        }
        });
    }, {threshold: 0.5});
    
document.querySelectorAll(".unrevealed").forEach(element => observador.observe(element));



