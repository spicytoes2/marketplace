    function fetching(){
        const base_url = "https://db1087.brighton.domains/gp/api.php";
        const option = "bestsellers";
        const num = 18;
    const url = `${base_url}?option=${option}&num=${num}`;

    return fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
        throw new Error(`Request failed with status code: ${response.status}`);
        }})
        .then(data => {
                console.log(data);
                if (data.results) {
                    for (i=0; i<18; i++){
                        var title = document.getElementById("bestsellers-title-" + (i+1));
                        var image = document.getElementById("bestsellers-cover-" + (i+1));
                        var imageURL = "images/game_number_" + (data.results[i].id) + ".png";
                        var price = document.getElementById("bestsellers-price-" + (i+1));
                        title.textContent = data.results[i].title;
                        price.textContent = "£" + data.results[i].price;
                        image.src = imageURL;
                        image.alt = data.results[i].title;
                    }
                }
            })
        .catch(error => {
            console.error(error);
        });
}

function fetchinglr(){
        const base_url2 = "https://db1087.brighton.domains/gp/api.php";
        const option2 = "latest_releases";
        const num2 = 6;
    const url2 = `${base_url2}?option=${option2}&num=${num2}`;

    return fetch(url2)
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
        throw new Error(`Request failed with status code: ${response.status}`);
        }})
        .then(data => {
                console.log(data);
                if (data.results) {
                    for (i=0; i<6; i++){
                        var title2 = document.getElementById("latest_releases-title-" + (i+1));
                        var image2 = document.getElementById("latest_releases-cover-" + (i+1));
                        var imageURL2 = "images/game_number_" + (data.results[i].id) + ".png";
                        var price2 = document.getElementById("latest_releases-price-" + (i+1));
                        title2.textContent = data.results[i].title;
                        price2.textContent = "£" + data.results[i].price;
                        image2.src = imageURL2;
                        image2.alt = data.results[i].title;
                    }
                }
            })
        .catch(error => {
            console.error(error);
        });
}

function fetchingtr(){
        const base_url3 = "https://db1087.brighton.domains/gp/api.php";
        const option3 = "trending";
        const num3 = 6;
    const url3 = `${base_url3}?option=${option3}&num=${num3}`;

    return fetch(url3)
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
        throw new Error(`Request failed with status code: ${response.status}`);
        }})
        .then(data => {
                console.log(data);
                if (data.results) {
                    for (i=0; i<6; i++){
                        var title3 = document.getElementById("trending-title-" + (i+1));
                        var image3 = document.getElementById("trending-cover-" + (i+1));
                        var imageURL3 = "images/game_number_" + (data.results[i].id) + ".png";
                        var price3 = document.getElementById("trending-price-" + (i+1));
                        title3.textContent = data.results[i].title;
                        price3.textContent = "£" + data.results[i].price;
                        image3.src = imageURL3;
                        image3.alt = data.results[i].title;
                    }
                }
            })
        .catch(error => {
            console.error(error);
        });
}
fetching();
fetchinglr();
fetchingtr();
