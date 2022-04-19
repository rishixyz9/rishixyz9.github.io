import icon0 from './static/icon0.svg'
import icon1 from './static/icon1.svg'
import icon2 from './static/icon2.svg'
import icon3 from './static/icon3.svg'
import icon4 from './static/icon4.svg'
import icon5 from './static/icon5.svg'

var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

window.onload = async function() {
    let i = 0;
    let alt = 0;
    const icons = [icon1, icon2, icon3, icon4, icon5]
    while(true){
        if(i !==0 && i % 5 === 0 && alt % 2 === 0){
            change()
        }
        else if(i !==0 && i % 5 === 0){
            reset()
        }
        let item = (i % 5) + 1;
        let icon = document.getElementById('icon' + item);
        icon.classList.add("animated");
        await sleep(500);
        icon.classList.remove("animated");
        i++;
        alt++;
    }
    async function reset(){
        let i = 1
        while(i <= 5){
            let icon = document.getElementById('icon' + i);
            icon.classList.remove("animated");
            icon.src = icon0;
            await sleep(500);
            i++;
        }
    }
    async function change(){
        let i = 1
        while(i <= 5){
            let newIconID = Math.floor(Math.random() * 5)
            let icon = document.getElementById('icon' + i);
            icon.classList.remove("animated");
            icon.src = icons[newIconID]
            await sleep(500);
            i++;
        }
    }
};