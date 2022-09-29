let valueCarousel = 0;
let valueTargetChange = "";

    function slideGauche(event){
        let value = event.target.dataset;
        let target = value.container;
        value.value = valueCarousel;

        let containerOffre = document.querySelector(`${target}`);
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        console.log(value.value);
        if(Number(value.value) < 0){
            value.value = Number(value.value) + (dimension + 20);
            valueCarousel = Number(value.value);
        }

        containerOffre.style.transform = `translateX(${valueCarousel}px)`;
    }
    function slideDroite(event){
        let value = event.target.dataset;
        if(valueTargetChange !== value.container || valueTargetChange === ""){
            valueCarousel = 0;
        }
        let target = value.container;
        value.value = Number(value.value);
        valueTargetChange = value.container;

        let containerOffre = document.querySelector(`${target}`);
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        value.value = valueCarousel;
        value.value = Number(value.value) - (dimension + 20);
        valueCarousel = Number(value.value);
        console.log(valueCarousel)

        containerOffre.style.transform = `translateX(${valueCarousel}px)`;
    }

export{slideGauche, slideDroite};