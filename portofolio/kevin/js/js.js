

 const editbiobutton = document.getElementById('edit-data-btn');
 const biodataForm = document.querySelector('.container2');
 
 editbiobutton.addEventListener('click', function() {
     
     biodataForm.style.display = 'block';
 });

 
 
 
 function editBiodata() {
 namavalue.value = namatext.textContent;
 rolevalue.value = bidangtext.textContent;
 avaivalue.value = avaitext.textContent;
 usiavalue.value = usiatext.textContent;
 lokasivalue.value = lokasitext.textContent;
 pengalamanvalue.value = pengalamantext.textContent;
 emailvalue.value = emailtext.textContent;
 
 
     
     form.style.display = 'block';
     biodataHeading.style.display = 'none';
 }
 
 const form = document.querySelector('form');
 const namavalue = document.querySelector('#nama-value');
 const rolevalue = document.querySelector('#role-value');
 const avaivalue = document.querySelector('#availability-value');
 const usiavalue = document.querySelector('#usia-value');
 const lokasivalue = document.querySelector('#lokasi-value');
 const pengalamanvalue = document.querySelector('#pengalaman-value');
 const emailvalue = document.querySelector('#email-value');
 

 const namatext = document.querySelector('#nama');
 const bidangtext = document.querySelector('#role');
 const avaitext = document.querySelector('#availability');
 const usiatext = document.querySelector('#usia');
 const lokasitext = document.querySelector('#lokasi');
 const pengalamantext = document.querySelector('#pengalaman');
 const emailtext = document.querySelector('#email');
 
 
 form.addEventListener('submit', (event) => {
     event.preventDefault(); 
     
 
     
namatext.textContent = namavalue.value;
bidangtext.textContent = rolevalue.value;
avaitext.textContent = avaivalue.value;
usiatext.textContent = usiavalue.value;
lokasitext.textContent = lokasivalue.value;
pengalamantext.textContent = pengalamanvalue.value;
emailtext.textContent = emailvalue.value;
 
     
namavalue.value = '';
rolevalue.value = '';
avaivalue.value = '';
usiavalue.value = '';
lokasivalue.value = '';
pengalamanvalue.value = '';
emailvalue.value = '';
 
     
     form.style.display = 'none';
     biodataHeading.style.display = 'block';
     
     submitButton.textContent = 'Simpan';
 });
 
 
 window.addEventListener('DOMContentLoaded', () => {
 namavalue.value = namatext.textContent;
 rolevalue.value = bidangtext.textContent;
 avaivalue.value = avaitext.textContent;
 usiavalue.value = usiatext.textContent;
 lokasivalue.value = lokasitext.textContent;
 pengalamanvalue.value = pengalamantext.textContent;
 emailvalue.value = emailtext.textContent;
 });
 
 
 editbiobutton.addEventListener('click', () => {
 form.style.display = 'block';
 biodataHeading.style.display = 'none';
 submitButton.textContent = 'Update';
 });
 
 