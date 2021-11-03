 $(document).ready(function () {
   $("#myBtn").on("click", function () {
       read();
   });

   $(".reply").click(function () {
       $(this).parents("div.row").next("div.card").toggle();
   });
 });

 function read() {
    var dots = document.getElementById("dots");
    var morText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "عرض المزيد";
        morText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "عرض عناصر اقل"
        morText.style.display = "inline";
    }
 }