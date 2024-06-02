const rangeInput = document.querySelectorAll(".rangeInput input"),
priceInput = document.querySelectorAll(".priceInput input"),
progress = document.querySelector(".slider .progress");

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minValue = parseInt(priceInput[0].value),
        maxValue = parseInt(priceInput[1].value);

        if((maxValue - minValue >= 1000) && maxValue <= 10000) {
            if(e.target.className === "inputMin"){
                rangeInput[0].value = minValue;
                progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxValue;
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minValue = parseInt(rangeInput[0].value),
        maxValue = parseInt(rangeInput[1].value);

        if(maxValue - minValue < 1000) {
            if(e.target.className === "rangeMin"){
                rangeInput[0].value = maxValue - 1000;
            }else{
                rangeInput[1].value = minValue + 1000;
            }
        }else {
            priceInput[0].value = minValue;
            priceInput[1].value = maxValue;
            progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }
    });
});