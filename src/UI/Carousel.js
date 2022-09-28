let valueHomme = 0;

    function slideGauche(event){
        let containerOffre = document.querySelector(".affichage_offre");
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        if(valueHomme >= 0){
            return;
        }else{
            valueHomme += dimension + 20;
        }
        containerOffre.style.transform = `translateX(${valueHomme}px`
    }
    function slideDroite(event){
        let value = event.target.dataset;
        let test = Number(value.mssg);
        let containerOffre = document.querySelector(".affichage_offre");
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        if (valueHomme === 0){
            test -= dimension + 20;
            valueHomme = test;
        }else{
            valueHomme -= dimension + 20;
        }
        ;
        containerOffre.style.transform = `translateX(${valueHomme}px`
    }

export{slideGauche, slideDroite};