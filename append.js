document.querySelector('[class="L0Z3Pu"]').addEventListener('mouseover',()=>{
    console.log("hover event");
});

document.querySelector('[class="L0Z3Pu"]').addEventListener('click',()=>{
    console.log("clicked");
});


document.querySelector('[class="L0Z3Pu"]').removeEventListener('mouseover',()=>{
    console.log("hover event");
});