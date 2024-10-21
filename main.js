const projects = {
    0:{
        "name":"example",
        "status":"complete",
        "description":"this si an example project",
        "date":"dd/mm/yy",
        "link":"https://github.com"
    }
}
const project_id =  new URLSearchParams(window.location.search).get('project_id');
console.log(project_id);
if (project_id != null) {
    console.log(project_id)
}

// ctx.addEventListener('load', () => {
//     const matrix = document.getElementById("matrix");
//     const ctx = matrix.getContext("2d");
//     ctx.canvas.width  = window.innerWidth;
// })
// console.log(matrix)

const date = new Date();
let yearscodeing = Number(date.getFullYear()) - 2019
let yearsnum = 0
function years() {
    if (yearsnum < yearscodeing + 1) {
        document.getElementById("years").innerText = yearsnum.toString()
        yearsnum++
        setTimeout(years,500)
    }
}

userHasScrolled = false;
window.onscroll = () => {
    if (userHasScrolled == false) {
        userHasScrolled = true;
        document.getElementById("years").innerText = 0
        setTimeout(years,1000)
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }
}
