const textContent = "";
let currentIndex = 0;
const textPath = document.getElementById('textPathContent');




document.addEventListener('keydown', function(event) {
    if ((event.key === 'c' || event.key === 'C') && currentIndex === 0) {
        $('#welcome').fadeOut(2000, function() {
            $(this).css('display', 'none');
        });
        console.log("Me avergüenza seguir obsesionada con un breve momento de hace 10 años, cuando caminé sola de noche y no sentí terror. Es un momento que no puedo soltar. Éramos yo y el silencio de la noche, el aire frío, las luces a lo lejos. Había pasado dos meses en una residencia artística en Barcelona, y caminar sola a las 2 a. m. sin miedo se sintió como si algo nuevo hubiera nacido dentro de mí. Supe que solo podría crecer si lo nutría bajo esas condiciones. Quería repetir esa noche hasta ver qué podía crecer ahí.");
        typeAscii(
         ` 
     ÷÷÷÷÷÷÷÷÷   ÷÷÷÷     ÷÷÷÷÷       
   ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷     
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷    
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷   
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷  
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
 ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
 ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
 ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷
  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷   
      ÷÷÷  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷      
            ÷÷÷÷÷÷÷÷÷  ÷÷÷÷÷÷÷÷÷       
        `, 20, 'asciiCloudLeft'); 
        playSoundSolo("day");
        addText("Presiona 'o' para continuar.");
        console.log("Recuerda presionar la tecla en el navegador, no dentro de la consola.")
        currentIndex++;
    }

    if (event.key === 'o' || event.key === 'O') {

        console.log("La agorafobia es la ansiedad, no de los espacios abiertos, sino ante los límites de éstos. ¿Es por eso que también intento escribir siempre en formatos distintos? ¿Es por eso que escribo este ensayo para la consola, creando un margen para la página web, ese lienzo en blanco y sin límites por excelencia? ¿Es por eso que sigo buscando aperturas liminales, espacios de transición, donde nada tiene su forma final?");
        typeAscii(
`
    .........   ....     .....       
   ...............................     
...................................    
....................................   
.....................................  
.......................................
 ......................................
 ......................................
 ......................................
  ..................................   
      ...  ......................      
            .........  .........       
                       
        `, 20, 'asciiCloudRight'); 
        $( "#textDiv" ).empty();
        addText("Presiona 'm' para continuar.");
    }


    if (event.key === 'm' || event.key === 'M') {

        console.log("Tal vez cruzar los límites me aterra porque significa tener que mirar al mundo. Quizás no quiero mirarlo. Quizás quiero esto, el lienzo vasto e infinito que se despliega sobre píxeles y luz. Quizás quiero mi cuerpo fragmentado, el espejo de las cámaras de Zoom que me pixelean un poco, confinando mi vida a ese pequeño rectángulo visible. El clic que abre posibilidades, la creación sin fin sin que yo sea primero mi cuerpo, la vulnerabilidad interminable que éste representa.");
        $('#asciiContainer').css('font-size', '11px');
        typeAscii(
`
                       ÷÷÷÷÷÷÷                       
                     ÷÷÷÷÷÷÷÷÷÷÷                     
                  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷                  
               ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷               
            ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷            
         ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷         
      ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷      
   ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷   
÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷`, 20, 'asciiContainer'); 
        $( "#textDiv" ).empty();
        addText("Presiona 'p' para continuar.");
    }

    if (event.key === 'p' || event.key === 'P') {

        console.log("“El corazón de la justicia”, escribe bell hooks, “es decir la verdad, vernos a nosotros mismos y al mundo como es y no como queremos que sea”. No he sido honesta con mi dolor. No he sido honesta con el hecho de que interioricé la idea de que la seguridad, en este país, se compra, o de que es inútil exigirla. Nuestro gobierno es condescendiente y habla, mecánicamente, el lenguaje de la negligencia. La manipulación sistemática de las instituciones recuerda a una herida sin sanar, a un nervio expuesto. La mirada y el lenguaje patriarcales, con los que crecí, antes de que tuviera la oportunidad de aprender lo que significaba que me pidieran silencio sobre mi propio dolor.");
        typeAscii(
`
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓         ▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓         ▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 `, 20,'asciiContainer'); 
        $( "#textDiv" ).empty();
        addText("Espera a que la casa terminé de construirse. Después presiona 'u' para continuar.");
    }

    if (event.key === 'u' || event.key === 'U') {

console.log("El internet no era como esa noche que quería que se extendiera como un plano de miles de noches, pero funcionó como reemplazo. No sé quién sería sin él. Mi vida actual está completamente enredada en cables y electricidad, he amado mucho a través de internet, mucho de lo que me rodea ahora fue mediado por la red. A veces siento que lo único que realmente me interesa es observar y contemplar. Mi deseo de mirar y conocer es más grande que cualquier otra cosa. Quizás eso fue aquella noche para mí, quizás no me sentí observada, vigilada por una mirada masculina que me inhibe, que me castiga cuando no voy vestida como se supone que debo ir, que me apacigua. Quizás era yo la observadora, y la mirada no tenía intenciones de regular al otro, de exigirle ser una forma, sino más bien una curiosidad, una pregunta, y mucha emoción por la noche.");
        typeAscii(
`
𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓋼𖤣𖥧𖡼𓋼෴🌷෴෴
⚘෴𓋼𖡼𖤣𖥧𓋼𖤣𖥧෴⚘෴⁕෴𓍊𓋼𓍊෴⁕෴⚘෴𓋼𖤣𖥧𖡼෴⁕෴⚘෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⁕෴🌸෴𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴෴⚘෴𓋼𖡼𖤣𖥧෴𖥧𓋼𖤣𖡼෴🪻෴෴𓋼෴෴෴
⚘෴𓋼𖥧𖤣𖡼𓋼𖤣𖥧෴⚘෴⁕෴𓍊෴𓆏෴𓍊𓋼𓍊෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼෴෴
⚘෴𓋼𖡼𖤣𖥧𓋼𖤣𖥧෴⚘෴⁕෴𓍊෴🌷෴𓍊𓋼𓍊෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⚘
 `, 20,'asciiContainer'); 
        $( "#textDiv" ).empty();
        addText("Espera a que el jardín esté terminado. Luego presiona 't' para continuar.");
    }


    if (event.key === 't' || event.key === 'T') {

        console.log("Quizás esa noche no es una realidad física, no es un lugar al que pueda llegar caminando. Quizás esa noche es mi libertad y mi rabia y mi tristeza y la ternura que siento cuando nada a mi alrededor es mío. Es dulzura y valentía. Es mi madre meditando en el jardín. Soy yo andando en bicicleta de noche con mi amiga, aterrada por la velocidad de los coches pero mirándola a ella, sintiendo que somos parte de las venas de una ciudad que intento fútilmente amar.");
        $( "#textDiv" ).empty();
        $("#asciiCloudLeft, #asciiCloudRight").wrap("<marquee></marquee>");
        addText("Presiona 'e' para continuar.");
    }


    if (event.key === 'e' || event.key === 'E') {

      console.log("“Asumir la responsabilidad”, dice bell hooks, “significa que, frente a las barreras, aún tenemos la capacidad de inventar nuestras vidas, de dar forma a nuestros destinos”. Para mí, el internet ha sido un simulacro de libertad y de agencia. Un ser sin cuerpo en público, una dinámica distinta cuando observo y soy observada.");
        $('#asciiCloudLeft, #asciiCloudRight').fadeOut(2000, function() {
            $(this).css('opacity:', '0%');
        });
        $("#asciiContainer").css('margin-top', '170px');
        playSoundSolo("night");

        typeAscii(
            
`
                  ░░
              ▒░░░░░
          ▒░░░░░░░░░                
      ▒░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░▒           
   ▒░░░░░░░░░░░░░▒   
  ▒░░░░░░░░░░░░░                          
 ▒░░░░░░░░░░░░░      
 ░░░░░░░░░░░░░▒             
 ░░░░░░░░░░░░░                                      
 ░░░░░░░░░░░░░▒      
 ░░░░░░░░░░░░░░                    
  ░░░░░░░░░░░░░░         
   ▒░░░░░░░░░░░░░▒                  
     ░░░░░░░░░░░░░░▒▒                                                   
       ▒░░░░░░░░░░░░░                                                   
            ▒░░░░░░░░░         
                ▒░░░░░
                     ░░                               
 `, 10,'moonContainer'); 
 
        $( "#textDiv" ).empty();
        
        addText("Presiona 'r' para continuar.");
    }

    if (event.key === 'r' || event.key === 'R') {

     console.log("No me extraña saber que una de las primeras ideas para crear íconos de computadora para el escritorio se llamaba ‘pigmalión’, por el escultor chipriota que se enamoró de su escultura. La forma que moldeas y que cobra vida propia, que respira su propio aire. Quizás porque te recuerda tu propio poder. Quizás porque te da una sensación de control. Quizás porque te recuerda que, fuera de tus propios deseos de cómo debería ser el mundo, ya existe uno, con reglas puestas en marcha, con una vitalidad que respirará dentro de todo lo que crees, y no te pertenece. Quizás construyo un hogar a partir de esa sensación de noche. Quizás desde ahí miraré de nuevo el mundo.");
     
        $( "#textDiv" ).empty();
       
         // Change background color with fade
    $('body').css('background-color', '#433334');
    
    // Change text color with fade
    $('body, p, h2').css('color', '#ffcfdc');
    displayRandomStrings();
        
addCredits("Ensayo visual interactivo de @identikitten. Creado durante la Residencia Digital Welcome to my Homepage en MOHA. Gracias a Rachel Stuckey por su apoyo. Créditos: código remezclado de Todd Anderson. Tipografías: FT88 de Velvetyne y basiic de Cinni's dream home.");    
        $('#asciiContainer').fadeOut(2000, function() {
            $(this).css('opacity:', '0%');
        });
    }

    


});






function typeText(text, speed) {
    let c = 0;
    textPath.textContent = '';
    let i = setInterval(function () {
        if (c >= text.length) {
            clearInterval(i);
        } else {
            textPath.textContent += text[c];
            c += 1;
        }
    }, speed);
}

function typeAscii(text, speed, containerID) {
    let c = 0;
    const asciiContainer = $('#' + containerID);
    let i = setInterval(function () {
        if (c >= text.length) {
            clearInterval(i);
        } else {
            asciiContainer.text(asciiContainer.text() + text[c]);
            c += 1;
        }
    }, speed);
}


function addText (text){
    setTimeout(function(){
      $('#textDiv').append("<h2>"+text+"</h2>");
      $('#textDiv').css('color', '#433334')
      //scrolls to the bottom
      //$('#bottom')[0].scrollIntoView(false);
    }, 10300);
  
  }

  function addCredits (text){
    setTimeout(function(){
      $('#textDiv').append("<h4>"+text+"</h4>");
      //scrolls to the bottom
      //$('#bottom')[0].scrollIntoView(false);
    }, 10300);
  
  }

  function playSoundSolo (id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    let sound = $("#" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime >  0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}


    // Array of strings
const strings = ["☆", "⟡", "⭑", "⭒", "‧₊˚⋅", "༘⋆", "⋆⭒˚｡⋆", "⊹₊⋆", "☆", "⟡", "⭑", "⭒", "‧₊˚⋅", "༘⋆", "⋆⭒˚｡⋆", "⊹₊⋆", "☆", "⟡", "⭑", "⭒", "‧₊˚⋅", "༘⋆", "⋆⭒˚｡⋆", "⊹₊⋆", "☆", "⟡", "⭑", "⭒", "‧₊˚⋅", "༘⋆", "⋆⭒˚｡⋆", "⊹₊⋆"];

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to display random strings at random positions
function displayRandomStrings() {
    strings.forEach(function(string) {
        // Generate random x and y coordinates
        const x = getRandomNumber(0, window.innerWidth);
        const y = getRandomNumber(0, window.innerHeight);

        // Create a new element for the string
        const stringElement = $('<div class="random-string"></div>').text(string).fadeIn(4000);

        // Set the position of the element
        stringElement.css({
            'position': 'absolute',
            'left': x + 'px',
            'top': y + 'px'
        });

        // Append the element to the body
        $('body').append(stringElement);
    });
}



