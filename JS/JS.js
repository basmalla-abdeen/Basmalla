// Loading 


window.addEventListener("load", function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});
$(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
    
  });


console.log("hello");
$(".list li").hide();

$("document").ready(function(){
    let sidebarWidth=$(".detailed-side-bar").innerWidth();
$(".side-bar").css('left',-sidebarWidth)
    $('.detail').click(function () { 

if($(".side-bar").css("left") == "0px" ){
    console.log("clicked");
   
    $(".side-bar").animate({left:-sidebarWidth},1000)
    $(".detail i").removeClass('fa-x').addClass('fa-bars')
    
}
else {
    console.log("ELSE");
    $(".side-bar").animate({left:0},1000)
    $(".detail i").removeClass('fa-bars').addClass('fa-x')
    $(".list li.flist").show(300,function(){
        $(".list li.slist").show(300,function(){
            $(".list li.tlist").show(300,function(){
                $(".list li.folist").show(300,function(){
                    $(".list li.filist").show(300)
               })
            })
        })
    })

}

    });

// Home API 

let x =[];
(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`) ;
    x = await response.json();
    display() ;
 
})();

function display() {
    var cartona = " ";

    for (var i = 0; i < x.meals.length; i++) {
        const meal = x.meals[i];
        cartona += `<div class="col-md-3 rounded-3 img">
                        <div class="position-relative ">  
                            <img src="${meal.strMealThumb}" alt="${meal.strTags}" class="rounded-3" width="100%">
                            <div class="layer rounded-3">
                                <p class="m-auto mt-5 pt-5 ps-2 fw-bolder fs-4">
                                    ${meal.strMeal}
                                </p>
                            </div>
                        </div>  
                    </div>`;
    }

    document.getElementById('data').innerHTML = cartona;


    $('.img').on('click', function () {
        var cartona2 = " ";
        const index = $(this).index();
        console.log(index) 

        const meal = x.meals[index];
        console.log(meal);
        for(var i =0 ; i<meal; i++){
            console.log(meal[i]);
           
            console.log( meal.idMeal);

        }

        cartona2 = `<div class="col-md-5">
                        <img src="${meal.strMealThumb}" alt="${meal.strTags}" width="100%">
                        <h3 class="fw-bold" style="color: white;"> Category</h3>     
                    </div>
                    <div class="col-md-7">
                        <div class="InstructionsData">
                            <h2>Instructions</h2>
                            <p>${meal.strInstructions}</p>
                            <h3><span class="fw-bold"> Area: </span>${meal.strArea}  </h3>
                            <h3><span class="fw-bold"> Category:</span> ${meal.strCategory} </h3>
                            <h3><span class="fw-bold"> Recipes:</span>
                                <ul>
                                    <li class="rounded-3"> ${meal.strIngredient1} </li>
                                    <li class="rounded-3"> ${meal.strIngredient2} </li>
                                    <li class="rounded-3"> ${meal.strIngredient3} </li>
                                    <li class="rounded-3"> ${meal.strIngredient4} </li>
                                    <li class="rounded-3"> ${meal.strIngredient5} </li>
                                    <li class="rounded-3"> ${meal.strIngredient6} </li>
                                    <li class="rounded-3"> ${meal.strIngredient7} </li>



                                </ul>
                            </h3>
                            <h3>
                                <span class="fw-bold">Tags :</span>
                            </h3>
                            <a class="btn btn-success fw-bold" href="${meal.strSource}">Source</a>
                            <a class="btn btn-danger fw-bold" href="${meal.strYoutube}">Youtube</a>
                        </div>
                    </div>`;

        document.getElementById('data').innerHTML = cartona2;
    });  
}

     

//  ingredient API
let z = [];
function displayingredient(){
    var cartoonaingredient = ``;
    for( var i=0 ; i < z.meals.length ; i++){
        const meals = z.meals[i];
        if ( meals.strDescription != null){

        cartoonaingredient += `<div class=col-md-4 text-center m-auto" id="ingredientMeals">
        <i class="fa-solid fa-drumstick-bite fa-4x  m-auto ps-5" style="color: #ffffff;"></i>
        <h3 class="mt-4 text-center" style="color: #ffffff;">${meals.strIngredient}</h3>
       <div class="ph"> <p style="color: #ffffff;">${meals.strDescription}</p> </div>
    </div>`
}
    }

document.getElementById("data").innerHTML = cartoonaingredient;

}

$(".folist").click(async function(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);

    z = await response.json();

    displayingredient();
    
});


// Categories API

let y = [];

$(".slist").click( async function(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    
        y = await response.json();
    
        displaycategories();
    });
    
    function displaycategories(){

        var cartoonacategories = ``;
        for( var i=0 ; i < y.categories.length ; i++){
            const categories = y.categories[i];
            cartoonacategories += ` <div class="col-md-3">
                <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img src=${categories.strCategoryThumb} alt=${categories.strCategory} class="w-100">
                    <div class="MealLayer position-absolute ">
                        <h3>${categories.strCategory}</h3>
                        <p>${categories.strCategoryDescription}</p>
                    </div>
                </div>
            </div>`
     catapi=categories.strCategory;
console.log(catapi);
      
        }
    document.getElementById("data").innerHTML=cartoonacategories;



    ( async function(){
        const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    
        y = await response.json();
    
        displaycategories(cat);
    });
    

    // $('.meal').on('click', function () {
    //     var cartona2 = " ";
    //     const index = $(this).index();
    //     // console.log(index)
    //     const categories = y.categories[index];
    //     // console.log(categories);
    //     for(var i = 0 ; i< categories.length; i++){
    //         // console.log(categories[i]);
           
    //         // console.log( categories.idCategory);

    //         cartona2 += `<div class="col-md-3 rounded-3 img">
    //         <div class="position-relative ">  
    //             <img src="${categories.strCategoryThumb}" alt="${categories.strCategoryDescription}" class="rounded-3" width="100%">
    //             <div class="layer rounded-3">
    //                 <p class="m-auto mt-5 pt-5 ps-2 fw-bolder fs-4">
    //                     ${categories.strCategory}
    //                 </p>
    //             </div>
    //         </div>  
    //     </div>`



    //     }
            
    
        
    //     document.getElementById('data').innerHTML = cartona2;

    // })}
    // ;

    }

}



)
// Areas API
let a =[];
$(".tlist").click( async function(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    
        a = await response.json();
    
        displayareas();
    });
    
    function displayareas(){
        var cartoonaareas = ``;
        for( var i=0 ; i < a.meals.length ; i++){
            const ameals = a.meals[i];
            cartoonaareas += `
             <div class="col-md-3 m-auto area">
            <i class="fa-solid fa-house-laptop fa-5x" style="color: #ffffff;"></i>
        <h3 class="m-auto p-4">
        ${ameals.strArea}
        </h3>
        </div>`
        }
    
    document.getElementById("data").innerHTML=cartoonaareas;
    
    } 

//search by name 

let s = [];

function displaySearchResults(data) {
    var cartoonasearch = ``;
    for (var i = 0; i < data.meals.length; i++) {
        let meal = data.meals[i];
        cartoonasearch +=
            `<div class="col-md-3 rounded-3 img position-relative ">
                <img src="${meal.strMealThumb}" alt="${meal.strTags}" class="rounded-3" width="100%">
                <div class="layer rounded-3 position-absolute  w-100">
                    <p class="m-auto mt-5 pt-5 ps-2 fw-bolder fs-4">
                        ${meal.strMeal}
                    </p>
                </div>
            </div>`;
    }
    document.getElementById("data").innerHTML = cartoonasearch;
}



async function fetchDataFromAPI(searchTerm) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        s = await response.json();
        displaySearchResults(s);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// search by first letter



$(".flist").click(function () {
    const cartonasearch = `
        <div class="container mt-5" id="data">
            <div class="row d-flex justify-content-between">
                <input type="search" id="searchInput" class="form-control bg-black w-25" placeholder="Search by name..">
                <input type="search" id="searchInputLetter" class="form-control bg-black w-25" placeholder="Search by first letter..">
            </div>
            <div class="row d-flex justify-content-between">
                <button id="searchBtn" class="btn btn-primary w-25">Search By Name</button>
                <button id="searchBtn2" class="btn btn-primary w-25">Search By first letter</button>
            </div>
            <div id="resultsContainer"></div>
        </div>`;

    document.getElementById('data').innerHTML = cartonasearch;

    $("#searchBtn").click(function () {
        const searchTerm = $("#searchInput").val();
        if (searchTerm.trim() !== "") {
            fetchDataFromAPI(searchTerm);
        }
    });

    $("#searchBtn2").click(function () {
        const fistletterTerm = $("#searchInputLetter").val(); // Corrected variable name
        if (fistletterTerm.trim() !== "") {
            fetchDataFromAPI(fistletterTerm);
        }
    });
});

// async function fetchDataFromAPI(fistletterTerm) {
//     try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fistletterTerm}`);
//         sl = await response.json();
//         displaySearchResults(sl);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// function displaySearchResults(data) {
//     var cartoonasearchletter = ``;
//     for (var i = 0; i < data.meals.length; i++) {
//         let meall = data.meals[i];
//         cartoonasearchletter +=
//             `<div class="col-md-3 rounded-3 img">
//                 <div class="position-relative ">  
//                     <img src="${meall.strMealThumb}" alt="${meall.strTags}" class="rounded-3" width="100%">
//                     <div class="layer rounded-3">
//                         <p class="m-auto mt-5 pt-5 ps-2 fw-bolder fs-4">
//                             ${meall.strMeal}
//                         </p>
//                     </div>
//                 </div>  
//             </div>`;
//     }
//     document.getElementById("resultsContainer").innerHTML = cartoonasearchletter;
// }
















//////// contact us

let namee = document.getElementById('nameInput');
let email = document.getElementById('emailInput');
let phone = document.getElementById('phoneInput');
let age = document.getElementById('ageInput');
let password = document.getElementById('passwordInput');
let repassword = document.getElementById('repasswordInput');
let submitBtn = $("#SubmitBtn");


    $(".filist").click(function () {
        const cartona = `<div class="container">
            <div class="row py-5">
                <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
                    <div class="container w-75 text-center">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="nameInput" placeholder="Enter Your Name">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="emailInput" placeholder="Enter Your Email">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="phoneInput" placeholder="Enter Your Phone">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="ageInput" placeholder="Enter Your Age">
                            </div>
                            <div class="col-md-6">
                                <input type="password" class="form-control" id="passwordInput" placeholder="Enter Your Password">
                            </div>
                            <div class="col-md-6">
                                <input type="password" class="form-control" id="repasswordInput" placeholder="RePassword">
                            </div>
                        </div>
                        <button id="SubmitBtn" class="btn btn-outline-danger disabled px-2 mt-3" disabled>Submit</button>
                    </div>
                </div>
            </div>
        </div>`;

        document.getElementById("data").innerHTML = cartona;

        $("input").on("input", function () {
            checkFormCompletion();
        });
    });

    function checkFormCompletion() {
        if (namee.value !== '' &&
            email.value !== '' &&
            phone.value !== '' &&
            age.value!== '' &&
            password.value !== '' &&
            repassword.value !== '') {
                $("#SubmitBtn").removeClass("disabled");
            }
    $("#SubmitBtn").click(async function () {
        if (vaildName() && vaildEmail() && vaildPhone() && vaildAge() && vaildPassword() && vaildRepassword()) {
        } else {
            alert('Enter valid information');
        }
    });

    function vaildName() {
        var validName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
        return validName.test($("#nameInput").val());
    }

    function vaildEmail() {
        var validEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        return validEmail.test($("#emailInput").val());
    }

    function vaildPhone() {
        var validPhone = /^(?:\+20)?(?:01[0125]\d{8}|02\d{7})$/;
        return validPhone.test($("#phoneInput").val());
    }

    function vaildAge() {
        var validAge = /^(0?[1-9]|[1-9][0-9])$/;
        return validAge.test($("#ageInput").val());
    }

    function vaildPassword() {
        var validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return validPassword.test($("#passwordInput").val());
    }

    function vaildRepassword() {
        var validRepassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return validRepassword.test($("#repasswordInput").val());
    }
}
































