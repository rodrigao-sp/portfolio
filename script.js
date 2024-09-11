function aparecerElementos() {
    const elementos = document.querySelectorAll(".para-aparecer");
    const limiteVisibilidade = 0.8 * window.innerHeight;
    
    elementos.forEach((elemento) => {
        const topo = elemento.getBoundingClientRect().top;
        elemento.classList.toggle("aparecer", topo < limiteVisibilidade);
    });
}

const curriculoBtn = document.getElementById('curriculoBtn');
const tooltip = document.getElementById('tooltip-topo');

function mostrarTooltip(e) {
    tooltip.classList.add('show');
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = e.pageY + 20 + 'px';
}

function esconderTooltip() {
    tooltip.classList.remove('show');
}

curriculoBtn.addEventListener('mouseenter', mostrarTooltip);
curriculoBtn.addEventListener('mousemove', mostrarTooltip);
curriculoBtn.addEventListener('mouseleave', esconderTooltip);

let downloadTimer;

curriculoBtn.addEventListener('mousedown', function() {
    const holdTime = 2000;
    
    downloadTimer = setTimeout(function() {
        const link = document.createElement('a');
        link.href = 'Currículo de Rodrigo da Silva Pires.pdf';
        link.download = 'Currículo de Rodrigo da Silva Pires.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, holdTime);
});

function cancelarDownload() {
    clearTimeout(downloadTimer);
}

curriculoBtn.addEventListener('mouseup', cancelarDownload);
curriculoBtn.addEventListener('mouseleave', cancelarDownload);

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu-desktop ul li a");

    function atualizarMenu() {
        let index = -1;
        menuLinks.forEach((link, i) => {
            const alvo = document.querySelector(link.getAttribute("href"));
            if (alvo && window.scrollY >= alvo.offsetTop - 50) {
                index = i;
            }
        });
        menuLinks.forEach((link, i) => {
            link.parentElement.classList.toggle("active", i === index);
        });
    }

    window.addEventListener("scroll", atualizarMenu);
    atualizarMenu();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();
    
    if (nome && email && mensagem) {
        document.getElementById("formMessage").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

window.addEventListener("scroll", aparecerElementos);
aparecerElementos();

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#007bff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#007bff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
