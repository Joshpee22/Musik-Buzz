// Your existing code for the navigation bar shadow effect
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Your existing code for the filter functionality
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

    // Additional code for the search button click event
    $(".search-button").click(function () {
        const searchTerm = $(".search-bar input").val().toLowerCase();
        // Implement your search functionality based on searchTerm
        console.log("Search Term:", searchTerm);
        // For example, you can filter elements based on the searchTerm
        // $(".post-box").filter(":contains('" + searchTerm + "')").show("1000");
    });
});
