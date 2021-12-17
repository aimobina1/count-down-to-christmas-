const count_el = document.getElementById("count-number");

function rendercountdown(){
    christmas=25
    const today = new Date().getDate()
    let remainingTime = christmas - today
    count_el.textContent = remainingTime

}
rendercountdown()