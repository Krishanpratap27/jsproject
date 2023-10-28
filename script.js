let arr = [
    {dp:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gisele_Bundchen2.jpg/1200px-Gisele_Bundchen2.jpg",storyy:"https://images.fashionmodeldirectory.com/images/models/15508/eva-dudas-460034-fit.jpg"},
    {dp:"https://th.bing.com/th/id/OIP.SAGBgDzc1nkwWEjnhIATfwDIEs?pid=ImgDet&rs=1",storyy:"https://th.bing.com/th/id/OIP.ZkyOznIZaOjqEy5058czfAHaLa?pid=ImgDet&w=664&h=1024&rs=1"},
    {dp:"https://www.fashiongonerogue.com/wp-content/uploads/2015/08/Blonde-Models-Rosie-Huntington-Whiteley.jpg",storyy:"https://th.bing.com/th/id/R.b09ae028c8d25f55ea4b9fa4ed4d39e9?rik=5TFNQ8pKRH22ag&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2015%2f11%2f23%2f20%2f2EBE638400000578-0-Showing_some_skin_Rosie_showed_off_her_chest_in_the_daring_neckl-m-19_1448309449139.jpg&ehk=kj65OePCAkmTDDnUHoCJzPNqcg%2bU%2bIW5u8Jd7Ye9dhg%3d&risl=&pid=ImgRaw&r=0"},
    {dp:"https://th.bing.com/th/id/OIP.vsDkL2bidIf2rrj6zwwbAgHaKg?pid=ImgDet&rs=1",storyy:"https://i.pinimg.com/736x/bc/1a/5e/bc1a5ef503710280934dd46fc453a79c--beauty.jpg"},
    {dp:"https://cdn.fashion.bg/img15/Top-10-modeli-6.jpg",storyy:"https://th.bing.com/th/id/OIP.T4KeJaTPs4i0S0zeWFXkVgHaKz?pid=ImgDet&w=2900&h=4232&rs=1"},
    {dp:"https://th.bing.com/th/id/R.187203f2bfb051a03b926d7c3d427f0f?rik=jr3UNPXCzcPBoQ&riu=http%3a%2f%2fhollywoodmomblog.com%2fwp-content%2fuploads%2f2017%2f02%2fTop-5-Child-Modeling-Tips-681x1024.jpg&ehk=7t0uB1fAAqkz1L6oKlylbdS8iDVDEQn5PtWHDpdVwCo%3d&risl=&pid=ImgRaw&r=0",storyy:"https://i.pinimg.com/originals/54/ad/a1/54ada19a65628f5928feb23524349f25.jpg"},
    {dp:"https://i.pinimg.com/originals/65/21/75/652175ee8d401a243890208ccd965ed6.jpg",storyy:"https://th.bing.com/th/id/OIP.-98gKRtNuKPOixBoPPx7mwAAAA?pid=ImgDet&w=418&h=626&rs=1"},
    {dp:"https://i.pinimg.com/originals/ee/85/ae/ee85ae1ceb94b04c59666b152dc3898c.jpg",storyy:"https://live.staticflickr.com/65535/49957975747_c675a93efd_b.jpg"},
] 


let openstory = document.querySelector("#story") ;


let clutter = "" ;

arr.forEach(function(elem,idx){
    clutter += `<div class="substorys">
    <img id="${idx}" src="${elem.dp}" alt="">

</div>`

});

openstory.innerHTML = clutter ;



openstory.addEventListener("click",function(dets){

    document.querySelector("#full-screen").style.display = "block";

    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].storyy})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },2000)

});


// line 34 m *arr[dets.target.id].storyy* (dp:"" ,storyy:"" wali)ka mtlb h dets yaani details,jo target kr rha h id Ko  or ye arr[] ke index jesa kaam kr rha h.. ye sab `url(${})` ke andar likha h