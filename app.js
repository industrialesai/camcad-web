/* =========================================================
   CAMCAD — contenido y comportamiento del sitio
   Todo lo editable vive aquí arriba.
   ========================================================= */

/* 0) CORREO AL QUE LLEGAN LAS SOLICITUDES DEL FORMULARIO */
const CORREO = "direccion@ccmsolutions.com.mx";

/* 1) LOGOS DE CLIENTES
      archivo = img/clientes/<archivo>  ·  alt = nombre visible */
const LOGOS = [
  {archivo:"telmex-1.svg",  alt:"Telmex"},
  {archivo:"logo-telcel.svg", alt:"Telcel"}
];

/* 2) CATÁLOGO
      slug = nombre EXACTO del archivo en img/productos/<slug>.webp */
const PIEZAS = [
  {slug:"grapa-tipo-o", clave:"CC-FO-01", grupo:"Fibra óptica", nombre:'Grapa tipo "O"', desc:"Sujeta el mensajero de la fibra óptica y permite ajustarlo en sitio.", attr:{Material:"Acero estructural", Acabado:"Galvanizado por inmersión NMX-J-004", Sujeción:"Ajustable"}},
  {slug:"herraje-tipo-d", clave:"CC-FO-02", grupo:"Fibra óptica", nombre:'Herraje tipo "D"', desc:"Remate para cable ADSS y FB; el sistema de rodamiento facilita la sujeción.", attr:{Material:"Acero estructural", Tensión:"1.5 t", Sujeción:"Un solo fleje"}},
  {slug:"herraje-tipo-pera", clave:"CC-FO-03", grupo:"Fibra óptica", nombre:'Herraje tipo "Perita"', desc:"Remate para cable ADSS y FB con doble punto de sujeción.", attr:{Material:"Acero estructural", Tensión:"1.5 t", Sujeción:"Doble fleje"}},
  {slug:"herraje-tipo-j", clave:"CC-FO-04", grupo:"Fibra óptica", nombre:'Herraje tipo "J"', desc:"Sujeción de fibra óptica con protección contra intemperie.", attr:{Barrenos:"2", Protección:"Goma neopreno resistente a UV", Acabado:"Galvanizado por inmersión"}},
  {slug:"comercilizacion-preformados-para-fibra-optica", clave:"CC-FO-05", grupo:"Fibra óptica", nombre:"Preformados para fibra óptica", desc:"Sujeción de fibra ADSS con preformado dimensionado por calibre de cable.", attr:{Medidas:"9-10 al 17-18", Material:"Alambre aluminizado", Forma:"Varillas unidas con adhesivo, dobladas en U"}},

  {slug:"herraje-tangente-mediano", clave:"CC-LA-01", grupo:"Línea aérea", nombre:"Herraje tangente mediano", desc:"Sujeción de cable de acero en tramos tangentes.", attr:{Material:"Acero estructural", Acabado:"Galvanizado por inmersión NMX-J-004"}},
  {slug:"herraje-de-tencion", clave:"CC-LA-02", grupo:"Línea aérea", nombre:"Herraje de tensión", desc:"Remata y tensa el cable de acero contra el poste.", attr:{Material:"Acero estructural", Tensión:"1.5 t", Acabado:"Galvanizado por inmersión"}},
  {slug:"herraje-de-extencion-tipo-d", clave:"CC-LA-03", grupo:"Línea aérea", nombre:'Herraje de extensión tipo "D"', desc:"Aleja el cable del poste con remate tipo D.", attr:{Manejos:"40, 60 y 100 cm", Refuerzo:"Redondo", Acabado:"Galvanizado por inmersión"}},
  {slug:"herraje-de-extencion-tipo-perita", clave:"CC-LA-04", grupo:"Línea aérea", nombre:'Herraje de extensión tipo "Perita"', desc:"Extensión con remate tipo perita en medidas estándar de poste.", attr:{Manejos:"40, 60 y 100 cm", Refuerzo:"Redondo", Acabado:"Galvanizado por inmersión"}},
  {slug:"herraje-de-extencion-tipo-j", clave:"CC-LA-05", grupo:"Línea aérea", nombre:'Herraje de extensión tipo "J"', desc:"Extensión con remate tipo J para separar la fibra del poste.", attr:{Manejos:"40, 60 y 100 cm", Flexibilidad:"Medidas a necesidad del cliente", Acabado:"Galvanizado por inmersión"}},
  {slug:"herraje-tipo-violin", clave:"CC-LA-06", grupo:"Línea aérea", nombre:"Herraje tipo violín", desc:"Separa el cable de acero del cuerpo del poste.", attr:{Material:"Acero estructural", Acabado:"Galvanizado por inmersión"}},
  {slug:"herraje-de-cruce-sencillo", clave:"CC-LA-07", grupo:"Línea aérea", nombre:"Herraje de cruce sencillo", desc:"Resuelve el cambio de dirección del cable protegiéndolo de la fricción.", attr:{Tornillos:"2", Material:"Acero estructural", Acabado:"Galvanizado por inmersión"}},
  {slug:"canal-tipo-cruceta", clave:"CC-LA-08", grupo:"Línea aérea", nombre:"Canal tipo cruceta", desc:"Da paso al acero y a la fibra, alejándolos del poste y de la alta tensión.", attr:{Incluye:"Abrazaderas tipo U", Material:"Acero estructural", Acabado:"Galvanizado por inmersión"}},
  {slug:"ancla-con-muerto", clave:"CC-LA-09", grupo:"Línea aérea", nombre:"Ancla con muerto", desc:"Soporte de retenida del poste, enterrado para anclar la instalación al suelo.", attr:{Profundidad:"Hasta 30 m", Material:"Lámina de acero estructural", Armado:"Varilla soldada al canal"}},

  {slug:"abrazadera-tipo-u", clave:"CC-SF-01", grupo:"Sujeción y fleje", nombre:"Abrazadera tipo U", desc:"Sujeta los brazos de extensión al poste.", attr:{Medidas:"8 y 10 pulgadas", Material:"Acero estructural", Acabado:"Galvanizado por inmersión"}},
  {slug:"comercializacion-fleje", clave:"CC-SF-02", grupo:"Sujeción y fleje", nombre:"Fleje", desc:"Fija los herrajes de extensión y de tensión al poste.", attr:{Material:"Acero inoxidable AISI 201, no magnético", Medidas:"5/8 y 3/4", Tensión:"115,000 PSI"}},
  {slug:"comercializacion-evilla", clave:"CC-SF-03", grupo:"Sujeción y fleje", nombre:"Hebilla", desc:"Cierra y amarra el fleje en sitio.", attr:{Material:"Acero inoxidable AISI 201", Norma:"ASTM A-413/2010", Tensión:"115,000 PSI"}},
  {slug:"comercializacion-preformados-para-cable-de-acero", clave:"CC-SF-04", grupo:"Sujeción y fleje", nombre:"Preformados para cable de acero", desc:"Sujeción del acero en las medidas comunes de obra.", attr:{Medidas:"1/8, 3/16, 1/4, 1/16 y 3/8", Forma:"Varilla helicoidal en U", Acabado:"Galvanizado por inmersión"}},
  {slug:"bobina-galvanizada", clave:"CC-SF-05", grupo:"Sujeción y fleje", nombre:"Bobina galvanizada", desc:"Alambre para el tejido de la fibra de acero, compatible con espinar C2 y J2.", attr:{Calibre:"18, galvanizado", Carrete:"400 metros lineales"}},

  {slug:"flejadora-de-uso-rudo", clave:"CC-HE-01", grupo:"Herramienta", nombre:"Flejadora de uso rudo", desc:"Fija el fleje al poste para sujetar fibra y estructuras.", attr:{Compatibilidad:"Fleje 5/8 y 3/4", Cuerpo:"Acero resistente"}},
  {slug:"comercializacion-flejadora-de-uso-libiano", clave:"CC-HE-02", grupo:"Herramienta", nombre:"Flejadora de uso liviano", desc:"Fijación de fleje en trabajos de mantenimiento y carga ligera.", attr:{Uso:"Liviano", Manejo:"En campo"}}
];

/* Extensión de las fotos de producto */
const EXT = "webp";

/* ---------- Render ---------- */
const $ = s => document.querySelector(s);
const id = t => t.replace(/\s+/g,"-").toLowerCase();

$("#logos").innerHTML = LOGOS.map(l =>
  `<img src="img/clientes/${l.archivo}" alt="${l.alt}" onerror="this.remove()">`).join("");

const grupos = [...new Set(PIEZAS.map(p => p.grupo))];

$("#indice").innerHTML = grupos.map(g => `<li><a href="#g-${id(g)}">${g}</a></li>`).join("");

$("#lista-partes").innerHTML = grupos.map(g => {
  const lote = PIEZAS.filter(p => p.grupo === g);
  return `<div class="grupo" id="g-${id(g)}">
    <div class="grupo-enc"><h3>${g}</h3><span class="conteo tab">${lote.length} PIEZAS</span></div>
    ${lote.map(p => `
      <article class="parte" id="p-${p.slug}">
        <div class="lamina">
          <span class="vacio">FOTO PENDIENTE<br>${p.slug}.${EXT}</span>
          <img src="img/productos/${p.slug}.${EXT}" alt="${p.nombre}" loading="lazy"
               onload="this.parentElement.classList.add('con-foto')" onerror="this.remove()">
        </div>
        <div>
          <span class="clave tab">${p.clave}</span>
          <h4>${p.nombre}</h4>
          <p class="desc">${p.desc}</p>
          <dl class="atributos">
            ${Object.entries(p.attr).map(([k,v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
          </dl>
        </div>
      </article>`).join("")}
  </div>`;
}).join("");

/* Imágenes que ya venían en caché y no disparan onload */
document.querySelectorAll(".lamina img").forEach(i => {
  if(i.complete && i.naturalWidth > 0) i.parentElement.classList.add("con-foto");
});

/* Puntos del plano → pieza en el catálogo */
function irAPieza(slug){
  const destino = document.getElementById("p-" + slug);
  if(!destino) return;
  document.querySelectorAll(".parte.resaltada").forEach(e => e.classList.remove("resaltada"));
  destino.classList.add("resaltada");
  destino.scrollIntoView({behavior:"smooth", block:"center"});
  setTimeout(() => destino.classList.remove("resaltada"), 2600);
}
document.querySelectorAll(".punto").forEach(p => {
  p.addEventListener("click", () => irAPieza(p.dataset.pieza));
  p.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); irAPieza(p.dataset.pieza); }
  });
});

/* Menú móvil */
$(".menu-btn").addEventListener("click", function(){
  const n = $("#nav-principal");
  n.classList.toggle("abierto");
  this.setAttribute("aria-expanded", n.classList.contains("abierto"));
});

$("#anio").textContent = new Date().getFullYear();

/* Formulario: sin backend todavía; arma el correo con los datos capturados.
   Cuando definamos Supabase o Formspree, se reemplaza este bloque. */
$("#form-cotizacion").addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const cuerpo = `Nombre: ${d.get("nombre")}%0D%0AEmpresa: ${d.get("empresa")}%0D%0ACorreo: ${d.get("correo")}%0D%0ATipo: ${d.get("tipo")}%0D%0A%0D%0A${d.get("mensaje")}`;
  window.location.href = `mailto:${CORREO}?subject=Solicitud de cotización — ${d.get("empresa") || d.get("nombre")}&body=${cuerpo}`;
});
