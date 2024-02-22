    document.getElementById("buy").addEventListener("click", function() 
    {
        alert("Товар добавлен в корзину.");
    });
    
    function changeImage1() 
    {
        const img = document.getElementById('image');
        var src = img.src;
    if (src == 'img/mockup_the_shop/tshirts/tshirt_yellow.jpg' || 'img/mockup_the_shop/tshirts/tshirt_green.jpg') 
    {
       img.src = 'img/mockup_the_shop/tshirts/tshirt_white.jpg' ;
    } 
    else 
    {
    img.src = 'img/mockup_the_shop/tshirts/tshirt_white.jpg';
    }
    }
    
    function changeImage2() 
    {
    var img = document.getElementById('image');
    var src = img.src;
    if (src == 'img/mockup_the_shop/tshirts/tshirt_white.jpg' || 'img/mockup_the_shop/tshirts/tshirt_green.jpg') 
    {
       img.src = 'img/mockup_the_shop/tshirts/tshirt_yellow.jpg' ;
    } 
    else 
    {
    img.src = 'img/mockup_the_shop/tshirts/tshirt_yellow.jpg';
    }
    }
    
    function changeImage3() 
    {
    var img = document.getElementById('image');
    var src = img.src;
    if (src == 'img/mockup_the_shop/tshirts/tshirt_white.jpg' || 'img/mockup_the_shop/tshirts/tshirt_yellow.jpg') 
    {
       img.src = 'img/mockup_the_shop/tshirts/tshirt_green.jpg' ;
    } 
    else 
    {
    img.src = 'img/mockup_the_shop/tshirts/tshirt_green.jpg';
    }
    }