function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    } else {
      header.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

// Navigation: Compares nav-links to actual site: if a nav-link matches => this link is active
$(document).ready(function(){
    let links = document.getElementsByClassName('nav-link');
    let actual = window.location.href;
    for(let i = 0; i < links.length; i++){
        if(actual == links[i].href){
            links[i].classList.add('active');
            console.log(links[i].className);
        }
    }
});

// Creates a dictionary from two arrays: plant names and description
var names = ["Vine maple", "Hornbeam", "Cedar", "Dwarf Japanese Garden Juniper"];
var infos = ["Acer circinatum, the vine maple, is a species of maple native to western North America, from southwest British Columbia to northern California. Vine maple trees can bend over easily. Sometimes, this can cause the top of the tree to grow into the ground and send out a new root system, creating a natural arch. This characteristic makes it the only maple capable of layering.",
            "Hornbeams are hardwood trees in the flowering plant genus Carpinus in the birch family Betulaceae. The 30–40 species occur across much of the temperate regions of the Northern Hemisphere.",
            "Cedrus, common English name cedar, is a genus of coniferous trees in the plant family Pinaceae (subfamily Abietoideae). They are native to the mountains of the western Himalayas and the Mediterranean region.",
            "Juniperus procumbens is a species of shrub in the cypress family Cupressaceae, native to Japan. This low-growing evergreen conifer is closely related to the Chinese juniper, Juniperus chinensis."];
var dict = {};
for(let i = 0; i < names.length; i++){
    dict[names[i]] = infos[i];
}

// Uses previously generated dict => Loads the content to a modal
function load(event){
    
    document.body.style.overflow = "hidden";
    
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
    
    let content = document.querySelector(".modal-content");
    
    // Creates a paragraph element => Will be placed on modal
    text = document.createElement('p');
    // Copies every value from event's innerHTML
    text.innerHTML = event.innerHTML;
    // Creates a paragraph element => Will be placed on modal
    long_desc = document.createElement('p');
    
    // Selected plant's name
    wich = text.getElementsByClassName("card-title");
    plant = wich[0].innerHTML;

    // Getting right value in dict with plant's name as key
    long_desc.innerHTML = dict[plant];
    
    
    // Image must be resized
    let pic = text.getElementsByTagName('img');
    pic[0].style.width="25%";
    pic[0].style.height="25%";
    // Appends both text and long_description
    content.appendChild(text);
    content.appendChild(long_desc);
    modal.appendChild(content);
    let closeBtn = document.querySelector(".close-btn");
    //Clicked on Close Button
    closeBtn.onclick = function(){
        modal.style.display = "none";
        document.body.style.overflow = "visible";
        long_desc.remove();
        text.remove();
    };
    //Clicked outside modal
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none";
            document.body.style.overflow = "visible";
            long_desc.remove();
            text.remove();
        }
    };
}


// Array of categories
sizes = ["mini", "medium", "large"];

// Arrays of plants from each category
minis = ["Kenshitsubo", "Shito", "Shohin"];
medium = ["Katade-Mochi", "Chumono-Chiu"];
large = ["Omono", "Dai", "Imperial"];


// Description for each plant
let trees = {};
trees['Kenshitsubo'] = "These are the smallest possible variety of bonsai tree. Little more than artfully-designed seedlings, they’re also known as poppy seed sized trees. Rarely are they ever more than one to three inches in height. They can be lifted with two fingers easily.";
trees['Shito'] = "These are the smallest common size of bonsai tree. Known as fingertip size, they grow generally between two and four inches in height. Often they can be found in pots no larger than a thimble, leading to their other name, the thimble bonsai.";
trees['Shohin'] = "These bonsai trees are in a category that overlaps others, leading to the disuse of the name. They grow between two and six inches in height. They’re also known as the palm bonsai, because of how they easily fit in a palm. Shohin and Shito are differentiated from other small bonsai trees by the techniques used to create them.";

trees['Katade-Mochi'] = "The largest bonsai classification that can be lifted in one hand, the Katade-Mochi bonsai grows between ten and eighteen inches in height. These are some of the more common tree sizes to work with, because they are neither too small to prune nor too large to handle.";
trees['Chumono-Chiu'] = "These two bonsai tree sizes are virtually the same. They are both considered two handed bonsai trees, and they both grow between sixteen and thirty-six inches in height. The names are virtually interchangeable.";

trees['Omono'] = "These large bonsai trees are the first among the four hand category. They grow anywhere from thirty to forty-eight inches in height. They are differentiated from the Dai category in very minor ways, such that both are classified as Very Large in English.";
trees['Dai'] = "These share the same size range and style as the Omono bonsai. The differences are likely only known to ancient Japanese bonsai masters.";
trees['Imperial'] = "The Imperial bonsai is the largest and most majestic of all Bonsai trees. They grow between sixty and eighty inches tall and are found most often in the Japanese imperial gardens. They are also known as eight-handed due to the number of people required to move them.";

// If plant selector button clicked
function checking(event){
    
    
    let num = parseInt(event.id.charAt(event.id.length-1));
    // Plant size index is (the last character of button id)-1
    let index = num - 1;
    
    
    let arr = sizes[index];
    let chosen = {};
    //Random plant from selected size
    chosen['mini'] = minis[Math.floor(Math.random() * minis.length)];
    chosen['medium'] = medium[Math.floor(Math.random() * medium.length)];
    chosen['large'] = large[Math.floor(Math.random() * large.length)];
    
    // Title is used as key in trees
    let title = chosen[arr];
    let desc = trees[title];

    // Updates for card's image, h5, and p tag
    card = document.getElementById('mycard');
    img = card.getElementsByTagName('img');
    source = "mybonsai/" + title + ".jpg";
    img[0].src = source;
    titl = card.getElementsByTagName('h5');
    para = card.getElementsByTagName('p');
    titl[0].innerHTML = title;
    para[0].innerHTML = desc;
    //Scrolls to page bottom
    window.scrollTo(0, document.body.scrollHeight);
}

