document.getElementById("idheader").innerHTML = `
<nav class="nav">
            <div class="logo">
                <a href="index.html"><img src="img/ecosystem.svg" alt="logo"></a>
            </div>
            <div class="menu">
                <ul class="menu-list">
                <li class="menu-item"><a href="index.html#servicios" tittle="ancla servicios">SERVICIOS</a></li>
                    
                    <li class="menu-item"><a href="#" title="seccion especies">ESPECIES  <i class="fas fa-angle-down"></i> </a>
                        <ul class="submenu">
                            <li class="sub-item">&raquo;<a href="seleccion.html">SELECCION</a></li>
                            <li class="sub-item">&raquo;<a href="productos.html">PRODUCTOS</a></li>
                        </ul>
                    </li>

                    <li class="menu-item"><a href="cuidados.html">CUIDADOS</a></li>
                    <li class="menu-item"><a href="contacto.html">CONTACTO</a></li>
                    <li class="animate__animated animate__tada animate__delay-1s  animate__repeat-3	3 " id="app-whatsapp" >
                    <a target="_blanck" href="https://api.whatsapp.com/send?phone=+5492916499028&text=Hola!">
                    <img class="whatsapp-img" , src="img/whatsapp.png" alt="whatsapp"></a>
                    </li> 
                </ul>
                </div>

            <div class="nav-button">
                <button class="nav-toogle">
            <i class="fas fa-bars", style="height: 20px;"></i></button>
            </div>

</nav>

`
document.getElementById("footer").innerHTML = `
<div class="redes">
<p>Seguinos en nuestras redes&nbsp;<i class="fab fa-facebook-square">

</i>&nbsp;<i class="fab fa-instagram"></i>
</p>
</div>

<div class="autor">
<p>Proyecto Integrador HTML-CSS-JS </p>

&copy; Todos los derechos reservados
<a href="#">Clarisa Saade</a>&nbsp; &nbsp;<a href="https://github.com/clarisaade/proyecto_git.git" target="_blanck"><i id="github" class="fab fa-github"></i></a>
</div>
`



const navToggle = document.querySelector(".nav-button");
const navMenu = document.querySelector(".menu-list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-list_visible");
});