function aparecerElementos() {
    let e = document.querySelectorAll(".para-aparecer");
    var o = .8 * window.innerHeight;
    e.forEach(e => {
        var t = e.getBoundingClientRect().top;
        e.classList.toggle("aparecer", t < o);
    });
}

document.querySelector(".menu-mobile-toggle").addEventListener("click", function () {
    document.querySelector(".menu-mobile").classList.toggle("active");
});

// Adiciona o fechamento automático do menu ao clicar em um link
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.menu-mobile').classList.remove('active');
        document.querySelector('.menu-mobile-toggle').classList.remove('active');
    });
});

const curriculoBtn = document.getElementById("curriculoBtn"),
    tooltip = document.getElementById("tooltip-topo");

function mostrarTooltip(e) {
    tooltip.classList.add("show"),
        tooltip.style.left = e.pageX + "px",
        tooltip.style.top = e.pageY + 20 + "px";
}

function esconderTooltip() {
    tooltip.classList.remove("show");
}

curriculoBtn.addEventListener("mouseenter", mostrarTooltip),
    curriculoBtn.addEventListener("mousemove", mostrarTooltip),
    curriculoBtn.addEventListener("mouseleave", esconderTooltip);

let downloadTimer;

function cancelarDownload() {
    clearTimeout(downloadTimer);
}

function filtrarProjetos(t) {
    const e = document.querySelectorAll(".projeto"),
        o = document.querySelectorAll(".filtro");
    o.forEach(e => {
        e.classList.remove("ativo");
    }),
        "todos" === t ? (o[0].classList.add("ativo"), e.forEach(e => {
            e.style.display = "flex";
        })) : (o.forEach(e => {
            e.getAttribute("data-categoria") === t && e.classList.add("ativo");
        }),
            e.forEach(e => {
                e.style.display = e.getAttribute("data-categoria") === t ? "flex" : "none";
            }));
}

curriculoBtn.addEventListener("mousedown", function () {
    downloadTimer = setTimeout(function () {
        let e = document.createElement("a");
        e.href = "Currículo de Rodrigo da Silva Pires.pdf",
            e.download = "Currículo de Rodrigo da Silva Pires.pdf",
            document.body.appendChild(e),
            e.click(),
            document.body.removeChild(e);
    }, 2000);
}),
    curriculoBtn.addEventListener("mouseup", cancelarDownload),
    curriculoBtn.addEventListener("mouseleave", cancelarDownload),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.querySelectorAll(".menu-desktop ul li a");

        function t() {
            let o = -1;
            e.forEach((e, t) => {
                e = document.querySelector(e.getAttribute("href"));
                e && window.scrollY >= e.offsetTop - 50 && (o = t);
            }),
                e.forEach((e, t) => {
                    e.parentElement.classList.toggle("active", t === o);
                });
        }
        window.addEventListener("scroll", t),
            t();
    }),
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var t = document.getElementById("name").value.trim(),
            o = document.getElementById("email").value.trim(),
            e = document.getElementById("message").value.trim();
        t && o && e ? document.getElementById("formMessage").style.display = "block" : alert("Por favor, preencha todos os campos.");
    }),
    document.querySelectorAll(".filtro").forEach(e => {
        e.addEventListener("click", () => {
            filtrarProjetos(e.getAttribute("data-categoria"));
        });
    }),
    filtrarProjetos("todos"),
    window.addEventListener("scroll", aparecerElementos),
    aparecerElementos(),
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: !0,
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
                value: .5
            },
            size: {
                value: 3,
                random: !0
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#007bff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 6,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: !0
    });
