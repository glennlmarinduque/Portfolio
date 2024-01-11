
    $(document).ready(() => {
        let  count = 1;
        let linkCount = 1
        if(count ===1){
            $(".skills_color").addClass("text-black");
           
        } 
        $(".mooon_button").on("click",()=>{
            count++;
        if(count %2 ===0){
            $("body").attr("data-bs-theme","dark");
            } else if(count %2 !=0){
            $("body").attr("data-bs-theme","light");
        };
           
        var theme = $("body").attr("data-bs-theme");
           if (theme === "dark") {
      
            $("body").css("background-color", "#191627")
            $(".foot").css("background-color", "#222");
            $(".third_color").css("background-color", "#1D1B3F");
            $(".mooon").attr("class", "bi bi-brightness-high mx-3 mooon");
            $(".mooon path").attr("d", "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z");
            $(".mooon_button svg").attr("fill", "white");
            $("nav.nav_background").removeClass("bg-white");
            $("nav.nav_background").css("background-color", "#191627");
            $(".skills_color").removeClass("text-black");
            $(".skills_color").addClass("text-white");
            $(".dropdown-menu").addClass("main_background_color")
            $(".exp").attr("fill", "white");
            $(".darkForm").addClass("dark__form");
            $(".fooot").removeClass("light__footer");
            $(".fooot").addClass("dark__footer");

        } 
          else if (theme === "light") {
            $("body").css("background-color", "#fff")
            $(".foot").css("background-color", "#F1F5F9");
            $(".third_color").css("background-color", "#EDE4FF");
            $(".mooon").attr("class", "bi bi-moon mx-3 mooon");
            $(".mooon path").attr("d", "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z");
            $(".mooon_button svg").attr("fill", "black");
            $("nav.nav_background").addClass("bg-white");
            $(".skills_color").removeClass("text-white");
            $(".skills_color").addClass("text-black");
            $(".dropdown-menu").removeClass("main_background_color");
            $(".exp").removeAttr("fill");
            $(".darkForm").removeClass("dark__form");
            $(".fooot").removeClass("dark__footer");
            $(".fooot").addClass("light__footer");
        }
        
        
        });
      

        $(".work").on("click",()=>{
                $(".education").attr("fill","currentColor");
                $(".education").removeClass("text__color");
                $("#svg-icon path").attr("fill", "#6E57E0");
                $(".work_text").addClass("text__color");
                $(".trigger__none").addClass("none__education");

        });

        $(".educ").on("click",()=>{
            $(".education").attr("fill","#6E57E0");
            $(".education").addClass("text__color");
            $("#svg-icon path").attr("fill", "currentColor");
            $(".work_text").removeClass("text__color");
            $(".trigger__none").removeClass("none__education");

    });


    });
