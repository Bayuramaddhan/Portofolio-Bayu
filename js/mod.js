const freeBtn = document.querySelector("#free-btn");
const gorBtn = document.querySelector("#gor-btn");
const freeDesign = document.querySelector(".free-content");
const goroadDesign = document.querySelector(".goroad-content");

//mengaktifkan button free sejak awal
activeStart();

function activeStart(){
    gorBtn.classList.add("active-btn");
    freeDesign.classList.add("hidden");
}

function activefreeBtn(){
    //cek apakah free btn mempunya class active btn, ! untuk melakukan sebaliknya, melihat freebtn tidak punya class active-btn
    // if (!freeBtn.classList.contains("active-btn")){
    freeBtn.classList.add("active-btn");
    gorBtn.classList.remove("active-btn");
    
    acvtiveDesignFree();
}

function activegorBtn(){
    freeBtn.classList.remove("active-btn");
    gorBtn.classList.add("active-btn");

    acvtiveDesignGoroad();
}

function acvtiveDesignFree(){
    freeDesign.classList.remove("hidden");
    goroadDesign.classList.add("hidden");
}
function acvtiveDesignGoroad(){
    freeDesign.classList.add("hidden");
    goroadDesign.classList.remove("hidden");
}