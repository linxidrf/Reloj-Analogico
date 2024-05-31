const deg = 6;
const hora =document.querySelector('.hora');
const minuto =document.querySelector('.minuto');
const segundo =document.querySelector('.segundo');

setInterval(()=>{

    let tiempo = new Date ();
    let hr = tiempo.getHours() * 30;
    let mn = tiempo.getMinutes()* deg ;
    let sg = tiempo.getSeconds() * deg ;

hora.style.transform = `rotate(${(hr)+(mn/12)}deg)`;
minuto.style.transform = `rotate(${mn}deg)`;
segundo.style.transform = `rotate(${sg}deg)`;
})