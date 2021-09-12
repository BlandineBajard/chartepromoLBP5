const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
accordeonItemHeader.forEach(accordeonItemHeader =>{
    accordeonItemHeader.addEventListener("click", event => {
        accordeonItemHeader.classList.toggle("active");
    });
});  