function veriAl(){
    var ad = document.getElementById('firstname').value;
    var soyad = document.getElementById('lastname').value;
    var tcno = document.getElementById('tcNo').value;

    document.getElementById('sonuclar').innerHTML='<h2>aday bilgileri</h2>'+
    '<p>Adın: ' + ad + '<br>' +'</p>' +
    
    '<p>Soyadın: ' + soyad +'<br>'+ '</p>' +
    
    '<p>TCno: ' + tcno + '</p>';

    return false;
}
function arttir(){
    var box=document.getElementById('sayi');
    var deger=parseInt(box.value);
    deger=deger+2;

    box.value=deger;
}
function azalt(){
    var box=document.getElementById('sayi');
    var deger=parseInt(box.value);
    deger--;
    box.value=deger;
    }

