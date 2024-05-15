/* BUTONA TIKLADIĞIMIZDA GELECEK ELEMANLAR */
const searchForm = document.querySelector(".search-form"); /* Html'deki ".search-form" class'ına erişerek çağırdık. */
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//TIKLAYACAĞIMIZ BUTONLAR
const searchBtn = document.querySelector("#search-btn"); /* Header kısmındaki arama butonunu id'sine göre çağırdık. */
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu_btn");

/* BUTONA TIKLANDIĞINDA search-form'un AÇILMASINI SAĞLAYALIM */

searchBtn.addEventListener("click", function () { /* butona basıldığında(click olduğunda), */
    searchForm.classList.toggle("active");     /* searchForm'a bir "active" class'ı ekle.Yani görünür yap. */ /* NOT: toggle = butona bir defa basıldığında açılsın,ikinci basışta kapansın. */

    /* EĞER; "e" EVENT'ININ YAYILMA YOLUNDA "searchBtn" veya "searchForm" YOKSA 
        (YANİ SAYFANIN HERHANGİ BİR YERİNE TIKLANDIĞINDA "searchBtn" veya "searchForm" YOKSA)*/
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))
            /* if bloğunun içindeki ifade, bir olayın etkileşimde bulunduğu öğelerin bir listesinde, 
               belirli bir öğenin bulunup bulunmadığını kontrol eder. */ {
            searchForm.classList.remove("active"); /* "searchForm" öğesini kapat. */
        }
    });
});


/* ------------------------------------------------------- */

                                        /* SHOPPING CART */

cartBtn.addEventListener("click", function () { 
    cartItem.classList.toggle("active");     

    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem))
        {
            cartItem.classList.remove("active"); 
        }
    });
});      

/* ------------------------------------------------------- */

                                        /* MENU BUTTON */

menuBtn.addEventListener("click", function () { 
    navbar.classList.toggle("active");     
    
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar))
        {
            navbar.classList.remove("active"); 
        }
    });
});  

/* NOT: QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize 
izin veren iki modern JavaScript yönteminden biridir. Bu yöntem ile hem css class'larını hem de 
id'lerini kullanabilirsiniz. */

/* NOT: Olay dinleyicisi (e) , JavaScript'te bir olayın gerçekleşmesini bekleyen ve ardından 
ona yanıt veren bir işlevdir. Bir olayın gerçekleşip gerçekleşmeyeceğini dinliyor. 
Gerçekleştiğinde ise anında tetiklenip çalışıyor.

JavaScript addEventListener yöntemi, bir kullanıcı bir düğmeyi tıkladığında olduğu gibi, 
belirli bir olay gerçekleştiğinde çağrılacak işlevleri ayarlamanıza olanak tanır. 
Olaylar, kullanıcı veya tarayıcı bir sayfayı manipüle ettiğinde gerçekleşen eylemlerdir.
*/

/* NOT:  composedPath() yöntemi olayın etkileşimde bulunduğu tüm öğelerin bir yolunu sunar, 
böylece olayın hangi öğeler üzerinde hareket ettiğini anlamak ve buna göre işlem yapmak mümkün olur. 
*/