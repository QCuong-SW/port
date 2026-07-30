const elements = document.querySelectorAll(
    ".reveal, .section-animate"
);


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
            entry.target.classList.add("show");

        }
        else{

            entry.target.classList.remove("show");

        }

    });

},
{
    threshold:0.2
});


elements.forEach(element=>{

    observer.observe(element);

});