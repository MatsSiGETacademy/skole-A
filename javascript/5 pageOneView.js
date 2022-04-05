


function updatePageViewPageOne(){
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenu()}
    <div class="flexBoxContainer">
    <div class="leftBoxPillar"></div>
    
    <h1 class="tankeKartHeader"> tankekart med oppgaver </h1>
    <ul>
    <li>Terninger med 'while' og 'if' setninger, der man kan kaste teringer om og om igjen. </li>
    <li>klokke. klokke i CSS som går av seg selv. </li>
    <li>soundboard? appende lydklipp </li>

    </ul>
    
    
    <div class="rightBoxPillar"></div>
    </div>  
    `
}