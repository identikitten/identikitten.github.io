const textContent = "";
let currentIndex = 0;
const textPath = document.getElementById('textPathContent');




document.addEventListener('keydown', function(event) {
    if ((event.key === 'c' || event.key === 'C') && currentIndex === 0) {
        $('#welcome').fadeOut(2000, function() {
            $(this).css('display', 'none');
        });
        console.log("It’s embarrassing for me to stay fixated on a brief moment, 10 years ago, when I walked by myself at night and didn’t feel terrified. It’s a moment I can’t let go of. It was me, and the silence of the night, the cold air, the distant lights. I had gone for two months to an artistic residency in Barcelona, and walking alone at 2am without fear felt like something inside me was new. I knew that it could only grow if nurtured under these conditions.I wanted to repeat this night until I could see what would grow from it.");
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
        addText("Press 'o' to continue.");
        console.log("Remember to type in the browser, not in the console log")
        currentIndex++;
    }

    if (event.key === 'o' || event.key === 'O') {

        console.log("Agoraphobia is the anxiety, not of open spaces, but about the boundaries of spaces. Is this why I also try to write in different formats, always? Is this why I’m writing this essay for the console, creating a margin for the website, the vastless blank canvas by excellence? Is it why I keep looking for liminal openings, transitional spaces, where nothing is its final form? ");
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
        addText("Press 'm' to continue.");
    }


    if (event.key === 'm' || event.key === 'M') {

        console.log("Maybe the boundary crossing terrifies me because it means I have to look at the world. Maybe I don’t want to look at the world. Maybe I want this, the vast infinite canvas, unfolding over pixels and light. Maybe I want my fragmented body, the mirror of Zoom webcams slightly pixelating me, confining my life to that small visible rectangle. The click that opens up possibilities, endless creation without me being my body first, the threat, the endless threat that it represents.");
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
        addText("Press 'p' to continue.");
    }

    if (event.key === 'p' || event.key === 'P') {

        console.log("“The heart of justice,” writes bell hooks, “is truth telling, seeing ourselves and the world the way it is rather than the way we want it to be”. I have not been honest with my pain. I have not been honest with the fact that I interiorized the idea that safety, in this country, is bought, or that it is futile to demand it. Our government is patronizing, and it speaks, mechanically, the language of neglect. The institutions’ systematic gaslighting reminds of an unhealed wound, an exposed nerve. The patriarchal gaze & language, the one I grew up with, before I had a chance to learn what it meant to be asked for silence about my own pain.");
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
        addText("Wait until the house is finished. Then press 'u' to continue.");
    }

    if (event.key === 'u' || event.key === 'U') {

        console.log("The internet was not like that night that I wanted to be a thousand nights, but it worked as a replacement, a pacifier. I don’t know who I’d be without it. My current life is completely networked, I have loved a lot through the internet, and have feared so little. I feel sometimes like I was born in this world to observe and contemplate. My desire to watch and know is bigger than anything else. Maybe that was that night for me, maybe I didn’t feel observed, surveilled by a male gaze that inhibits me, punishes me when I’m not dressed how I should be dressed, placates me. Maybe I was the observer.");
        typeAscii(
`
𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓋼𖤣𖥧𖡼𓋼෴🌷෴෴
⚘෴𓋼𖡼𖤣𖥧𓋼𖤣𖥧෴⚘෴⁕෴𓍊𓋼𓍊෴⁕෴⚘෴𓋼𖤣𖥧𖡼෴⁕෴⚘෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⁕෴🌸෴𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴⁕෴෴⚘෴𓋼𖡼𖤣𖥧෴𖥧𓋼𖤣𖡼෴🪻෴෴𓋼෴෴෴
⚘෴𓋼𖥧𖤣𖡼𓋼𖤣𖥧෴⚘෴⁕෴𓍊෴𓆏෴𓍊𓋼𓍊෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼෴෴
⚘෴𓋼𖡼𖤣𖥧𓋼𖤣𖥧෴⚘෴⁕෴𓍊෴🌷෴𓍊𓋼𓍊෴⚘෴𓋼𖡼𖤣𖥧𓋼෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⁕෴⁕෴𖥧𓋼𖤣𖡼෴🪻෴෴⚘෴𓋼𖤣𖥧𖡼𓋼෴🌷෴𓍊෴𓋼𖡼𖤣𖥧𖤣𖥧෴⚘෴𖥧𖤣𖥧෴⚘෴⁕෴🌸෴⚘෴𓋼𖡼𖤣𖥧෴⚘
 `, 20,'asciiContainer'); 
        $( "#textDiv" ).empty();
        addText("Wait until the garden is finished. Then press 't' to continue.");
    }


    if (event.key === 't' || event.key === 'T') {

        console.log("Maybe that night is not a spatial reality. Maybe that night is my freedom and anger and sadness and the tenderness I feel when everything around me is not mine. It’s gentleness and courage. It’s my mother meditating in the garden. It’s me riding a bike at night with my best friend, terrified of the cars but looking at her, feeling like we’re part of the veins of a city I’m trying to love.");
        $( "#textDiv" ).empty();
        $("#asciiCloudLeft, #asciiCloudRight").wrap("<marquee></marquee>");
        addText("Press 'e' to continue.");
    }


    if (event.key === 'e' || event.key === 'E') {

        console.log("“Taking responsibility,” says bell hooks, “means that in the face of barriers we still have the capacity to invent our lives, to shape our destinies”. The internet for me has been a simulacrum of freedom and of agency. A disembodied being in public, a different dynamic when I’m observing and being observed.");
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
        
        addText("Press 'r' to continue.");
    }

    if (event.key === 'r' || event.key === 'R') {

        console.log("It’s not strange to learn that one of the first ideas to create computer icons designed for a graphic user interface, a desktop, was called ‘pygmalion’. The form you mold that takes its own life, breathes its own air, one that you fall in love with. Maybe because it reminds you of your own power. Maybe because it gives you a sense of control. Maybe because it reminds you that outside of your own desires of what the world should be, there’s one that already exists, with rules set in motion, with a kind of vitality that will breathe inside anything you create. Maybe I build a home from that night feeling. Maybe that's from where I'll look back at the world.");
     
        $( "#textDiv" ).empty();
       
         // Change background color with fade
    $('body').css('background-color', '#433334');
    
    // Change text color with fade
    $('body, p, h2').css('color', '#ffcfdc');
    displayRandomStrings();
        
        addCredits("Visual interactive essay by @identikitten. Created during the Welcome to my Homepage Digital Residency at MOHA. Thanks to Rachel Stuckey for the support. Credits: Code remixed from Todd Anderson. Typographies: FT88 from Velvetyne & basiic from Cinni's dream home.");
    
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



