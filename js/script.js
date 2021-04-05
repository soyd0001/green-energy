// Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);




const controls = document.querySelectorAll(".content-nav button");
let container = document.querySelector(".body-text");
let content = [
    {
        head: "Solar Panels",
        bodyText: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores itaque, ipsam ab architecto vitae quia, odio unde hic doloremque modi dolor delectus, voluptatum vel? Amet sequi fuga ullam repellat perferendis iure voluptatem praesentium, modi natus odit, iusto minima! Sunt accusantium, labore quam reiciendis non porro veniam quidem et unde nulla debitis facilis architecto quisquam esse officia, ducimus impedit. Ipsum accusantium nisi eum ab eius iste ratione voluptatibus ducimus voluptas assumenda minus, nesciunt aut ullam deserunt neque libero ipsam eos distinctio sequi! Quibusdam placeat nesciunt dolore, expedita amet corporis! Eum voluptates voluptatum itaque quasi, dolorem esse necessitatibus pariatur rem, quos repudiandae fuga natus, ad vitae adipisci nam sequi quisquam. Eaque pariatur et cum, molestiae optio placeat praesentium porro fuga iusto veritatis saepe vitae sequi, nostrum odit nobis assumenda possimus sunt? Eius autem minus sunt suscipit molestias aspernatur, earum nemo accusantium ut quas. Iusto, placeat iure odio mollitia modi officiis sint perferendis accusamus itaque aperiam ex! Tempora molestias repellendus animi dolorem veniam fugit eligendi sed, distinctio eius obcaecati recusandae voluptatum, quos unde pariatur dolore adipisci deleniti aliquid eaque quasi laborum omnis. Quisquam rerum delectus, provident rem similique dignissimos, in ad unde minus officia odit, laboriosam minima nam, voluptas. Voluptates cum excepturi incidunt.",
        thumbnail: "img/solar.jpg",
        alt: "solar" 
    },
    {
        head: "Smart Home Devices",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        thumbnail: "img/smart.jpg",
        alt: "smart" 
        
    },
    {
        head: "Led Lights",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        thumbnail: "img/led.jpg",
        alt: "led" 
        
    }
];

container.innerHTML = `<h2>${content[0].head}</h2>
     <img class="thumb" src="${content[0].thumbnail}" alt="${content[0].alt}">
     <p>${content[0].bodyText}</p>`;


function handleSelection(e){
    for (let i=0; i < controls.length; i++){
        if(controls[i].hasAttribute("id")){
            controls[i].removeAttribute("id");
        }
    }
    let btn = e.target;
    btn.setAttribute("id", "active");
    
    for(let b =0; b<controls.length; b++){
        if(controls[b].hasAttribute("id")){
            container.innerHTML = `
                <h2>${content[b].head}</h2>
                <img class="thumb" src="${content[b].thumbnail}" alt="${content[b].alt}">
             <p>${content[b].bodyText}</p>`;
        }
    };
    
};

for (let p = 0; p < controls.length; p++){
    controls[p].addEventListener("click", handleSelection);
}








