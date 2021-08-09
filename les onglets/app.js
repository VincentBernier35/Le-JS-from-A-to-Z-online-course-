const onglets = Array.from(document.querySelectorAll('.onglets'));
const contenus = Array.from(document.querySelectorAll('.contenus'));

onglets.forEach(onglet => {
    onglet.addEventListener('click', (e) => {

        for(let i = 0; i < onglets.length ; i++ ){

            if(onglets[i] === e.target){

                onglets[i].classList.add('active-onglets');

            } else {
                
                onglets[i].classList.remove('active-onglets');
            }
        }

        console.log(onglets.indexOf(e.target));

        for(let i = 0; i < contenus.length ; i++ ){

            if(i === onglets.indexOf(e.target)){
                contenus[i].classList.add('active-contenu');
            } else {
                contenus[i].classList.remove('active-contenu');
            }
        }

    })
})