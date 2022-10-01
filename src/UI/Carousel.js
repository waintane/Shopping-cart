let valueCarousel = 0; // valeur par default carousel
let valueTargetChange = ""; // valeur utiliser pour savoir si on change la classe visé

    function slideGauche(event){
        let value = event.target.dataset;  //objet du bouton
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        let target = value.container;
        let containerOffre = document.querySelector(`${target}`);
        
        value.value = valueCarousel;
        if(valueTargetChange !== value.container || valueTargetChange === ""){
            valueCarousel = 0;
        }


        
        if(Number(value.value) < 0){    
            value.value = Number(value.value) + (dimension + 20);
            valueCarousel = Number(value.value);
        }

        containerOffre.style.transform = `translateX(${valueCarousel}px)`;
    }

    function slideDroite(event){
        let value = event.target.dataset; //objet du bouton
        let screenSize = window.innerWidth;
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        let cardWidth = Number(value.length) * (dimension + 20);
        let maximumValue = screenSize - cardWidth;
        console.log(screenSize);
        if(valueTargetChange !== value.container || valueTargetChange === ""){ //si on change de carousel
            valueCarousel = 0;
        }

        let target = value.container;
        value.value = Number(value.value);
        valueTargetChange = value.container;
        let containerOffre = document.querySelector(`${target}`);
        
        value.value = valueCarousel;
        if(Number(value.value) > maximumValue){
            value.value = Number(value.value) - (dimension + 20);
            valueCarousel = Number(value.value);
            containerOffre.style.transform = `translateX(${valueCarousel}px)`;
        }
        console.log(dimension);
        console.log(maximumValue);
        console.log(value.value);
    }

export{slideGauche, slideDroite};