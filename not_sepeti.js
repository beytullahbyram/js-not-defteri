const yeniGorev=document.querySelector('.input-gorev');// input kısmını seçtik
const yeniGorevEkleBtn=document.querySelector('.btn-gorev-ekle');//inputtaki buton
const gorevListesi=document.querySelector('.gorev-listesi');//notların eklendiği kısım yani ul 

yeniGorevEkleBtn.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla);

function gorevSilTamamla(e){
    const tiklanilanEleman=e.target;
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi')
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
        tiklanilanEleman.parentElement.classList.toggle('kaybol') // yavasca silmesini sağlar
        
        //üstteki efeckt bittikten sonra alttaki fonksiyon calısır ve silenecek eleman tamamen ekradan silinir
        tiklanilanEleman.parentElement.addEventListener('transitionend',function(){
        tiklanilanEleman.parentElement.remove('gorev-tamamlandi');

        })

    }
}


function gorevEkle(e){
        
        
        e.preventDefault(); // baska bir sayfaya gitmesini engellemek
        //div oluşturma
        const gorevDiv=document.createElement('div');
        gorevDiv.classList.add('gorev-item');//htmldaki divi ekledik
        //li olusturma
        const gorevLi=document.createElement('li');
        gorevLi.classList.add('gorev-tanim');//htmlda var olan liyi ekledik
        gorevLi.innerText=yeniGorev.value;
        gorevDiv.appendChild(gorevLi); //divin içine li yi ekledik
        
        
        //tamamlandı butonu ekle
        const gorevTamamlandı=document.createElement('button');
        gorevTamamlandı.classList.add('gorev-btn');
        gorevTamamlandı.classList.add('gorev-btn-tamamlandi');
        gorevTamamlandı.innerHTML='<i class="fas fa-calendar-check"></i>'
        gorevDiv.appendChild(gorevTamamlandı);
        
        const gorevSil=document.createElement('button');//buton oluşturduk
        gorevSil.classList.add('gorev-btn');//olusturdugumuz butona htmlda class sayesinde butonu atadık
        gorevSil.classList.add('gorev-btn-sil');
        gorevSil.innerHTML='<i class="fas fa-trash-alt">';
        gorevDiv.appendChild(gorevSil);//butonu dive attık
        
        
        yeniGorev.value='';
        localStorageKaydet(yeniGorev.value)
        
        gorevListesi.appendChild(gorevDiv); // ulye div ekledik
    };

function localStorageKaydet(yeniGorev){
    let gorevler;
    if(localStorage.getItem('gorevler')===null){
        gorevler =[];
    }else{
        gorevler=JSON.parse(localStorage.getItem('gorevler'))
    }
    gorevler.push(yeniGorev); 
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
}