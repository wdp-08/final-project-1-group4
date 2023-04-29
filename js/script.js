
// Navbar

const navbar = document.getElementById("navbar");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    navbar.classList.add("active");
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("shadow");
  }
};

window.addEventListener("scroll", onScroll);

// todo

function orderValidation() {
  let nama = document.getElementById("nama").value;
  let sepatu = document.getElementById("sepatu").value;
  let layanan = document.getElementById("layanan").value;

  if(nama == "" || sepatu == "" || layanan == ""){
      alert("Data anda tidak lengkap!")
      return false;
  }
  return true;

}

function showOrder() {
  let orderlist;
  if (localStorage.getItem("orderlist") == null) {
      orderlist = [];
  } else{
      orderlist = JSON.parse(localStorage.getItem("orderlist"))
  }

  let table = document.getElementById("order-data");
  table.innerHTML = '';

  orderlist.forEach(function (element, index){
      table.innerHTML += `
      <div class="container">      
              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">${element.sepatu}</p>
                      <p><span class="text-muted">Owner: </span>${element.nama}</p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">${element.layanan}</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a onclick="deleteOrder(${index})" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
        </div>`
  });
  // console.log(orderlist);
}

document.onload = showOrder();

function addOrder(){
  if (orderValidation() == true) {
      let nama = document.getElementById("nama").value;
      let sepatu = document.getElementById("sepatu").value;
      let layanan = document.getElementById("layanan").value;

      let orderlist;
  if (localStorage.getItem("orderlist") == null) {
      orderlist = [];
  } else{
      orderlist = JSON.parse(localStorage.getItem("orderlist"))
  }

  orderlist.push({
      nama : nama,
      sepatu : sepatu,
      layanan : layanan
  });

  localStorage.setItem("orderlist", JSON.stringify(orderlist));
  showOrder();
  document.getElementById("nama").value = "";
  document.getElementById("sepatu").value = "";
  document.getElementById("layanan").value = "";

  }
}

function deleteOrder(index){
  let orderlist;
  if (localStorage.getItem("orderlist") == null) {
      orderlist = [];
  } else{
      orderlist = JSON.parse(localStorage.getItem("orderlist"))
  }

  orderlist.splice(index, 1);
  localStorage.setItem("orderlist", JSON.stringify(orderlist))
  showOrder();

}

