let btn = document.querySelector('button');
let choose = document.querySelector('h1');
let select = document.querySelector('selector');

select.addEventListener('change', () =>{
    choose.innerText=select.value;
});

btn.addEventListener('click', () =>{
    select.value="bmw";
    triggerChange(select);

});
function triggerChange(element){
    let changeEvent =new Event('change');
    element.dispatchEvent(changeEvent);
}