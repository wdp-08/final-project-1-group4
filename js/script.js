
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
      <tr>
          <td>${element.nama}</td>
          <td>${element.sepatu}</td>
          <td>${element.layanan}</td>
          <td id="status">Waiting</td>
          <td>
          <button onclick="deleteOrder(${index})" class="btn btn-danger">Delete</button>
          </td>
      </tr>`
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

