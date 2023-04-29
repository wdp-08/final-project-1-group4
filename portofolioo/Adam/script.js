let isForm = document.getElementById("idForm");
function hide() {
    if (isForm.style.display === "none") {
        isForm.style.display = "block";
    } else {
        isForm.style.display = "none";
    }
}

function set() {
    let idNama = document.getElementById("nama").value;
    document.getElementById("txtnama").innerHTML = idNama;
    let idRole = document.getElementById("role").value;
    document.getElementById("txtrole").innerHTML = idRole;
    let idAvail = document.getElementById("avail").value;
    document.getElementById("txtavail").innerHTML = idAvail;
    let idUsia = document.getElementById("usia").value;
    document.getElementById("txtusia").innerHTML = idUsia;
    let idLokasi = document.getElementById("lokasi").value;
    document.getElementById("txtlokasi").innerHTML = idLokasi;
    let idExper = document.getElementById("exper").value;
    document.getElementById("txtexper").innerHTML = idExper;
    let idEmail = document.getElementById("email").value;
    document.getElementById("txtemail").innerHTML = idEmail;

}
