let coutries = document.getElementById('country');
let cities = document.getElementById("cities");


coutries.addEventListener('change', (event) => {
    let selectedValue = event.target.value;
    for(let i = 0; i < cities.length; i++) {
        let city = cities.options[i];
        let cityValue = city.value;
        switch(selectedValue) {
            case 'ger':
                if(cityValue !== 'br' && cityValue !== 'mh' && cityValue !== 'fr') {
                    city.setAttribute('hidden', 'hidden');
                }
                else {
                    city.removeAttribute('hidden');
                }
                
                break;
            case 'ukr':
                if(cityValue !== 'kv' && cityValue !== 'lv' && cityValue !== 'khar') {
                    city.setAttribute('hidden', 'hidden');
                }
                else {
                    city.removeAttribute('hidden');
                }
                break;
            case 'usa':
                if(cityValue !== 'wa' && cityValue !== 'ny' && cityValue !== 'la') {
                    city.setAttribute('hidden', 'hidden');
                }
                else {
                    city.removeAttribute('hidden');
                }
                break;
            default:
                city.removeAttribute('hidden'); 
        };
    };
});