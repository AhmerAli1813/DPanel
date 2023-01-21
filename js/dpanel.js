$(function () {
//  menu toggle function
    $("#menu-toggle").click(function (e) { 
        var val =    getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width'); // #999999
        if(val == "20%"){
            var sidebar = $(".dpanel-sidebar");
            var width = (sidebar.clientWidth + 1) + "px";
            console.log(width)
                $(':root').css('--sidebar-width', "7%");
                $("#menu-toggle i").addClass("fas fa-arrow-right")
                $("#menu-toggle i").removeClass("fa-arrow-left");
                $(".dpanel-sidebar").addClass("active");
                $(".navbar-brand").css("padding", "0.5rem")
            }else{
                $(':root').css('--sidebar-width', '20%');
                $("#menu-toggle i").addClass("fa-arrow-left");
                $("#menu-toggle i").removeClass("fa-arrow-right");
                $(".dpanel-sidebar").removeClass("active");
                $(".navbar-brand").css("padding", "0.5rem 1.5rem")

            }
        

    });
    // navbar 
    $("#nav-menu-toggle").click(function (e) { 
        
        $(".dpanel-sidebar ul ul").toggleClass("active")
        
    });
    // search btn 
    $(".search-btn").click(function (e) { 
        e.preventDefault();
        $("#search-form").addClass("active");
        
    });
    
    $(".btn-close").click(function (e) { 
        e.preventDefault();
        $("#search-form").removeClass("active");
        
    });
//  dropDown function
$(".dropdown-menu").css("display" ,"none")

    $(".dropdown").click(function (e) { 

        e.preventDefault();
        var dropdown_item = $(this).attr("data-dropdown");
        // alert(dropdown_item)
        $(dropdown_item).toggle("active");
        $(this).siblings().children(".caret").toggleClass('rotate-180');
        
        
    });

    // themes

    $("#color-gallery .color-item").click(function (e) { 
        e.preventDefault();
      var color =  $(this).data("color");
      var color_hsl =  $(this).data("hsl");
      var color_sts =  $(this).data("color-sts");
            $(":root").css("--hue-color" , color);
            if(color_sts == "dark"){
                $(":root").css("--body-color" , `var(--bs-dark)`)   
                $(":root").css("--text-color" , `white`)   
             var nodeRoot = document.documentElement.style;
                nodeRoot.setProperty("--text-color" , `white`)
                $(":root").css("--first-color" ,`hsl(${color})` );
            }else {
                
                $(":root").css("--body-color" , `white`)   
                $(":root").css("--text-color" , `var(--bs-dark)`)   
                $(":root").css("--first-color" ,`hsl(${color} , 69% ,61%)` );
            }
           
            
    });
                // active class moving
                $('.sidebar-item').click(function(e) {
                    
                    $('.sidebar-item').removeClass('active');
            
                    var $this = $(this);
                    if (!$this.hasClass('active')) {
                        $this.addClass('active');
                    }
                   
                });
});