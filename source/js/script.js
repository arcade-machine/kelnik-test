var URL = "./js/rooms.json";
var searchList = document.querySelector(".search__list");
var roomTemplate = document.getElementById("#card-list-template").querySelector(".room");
var moreButton = document.querySelector(".search__more");
var rooms = document.querySelectorAll(".room");

// создание запроса
window.load = function() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
        try {
            var massive = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                onSuccess(massive);
            }
        } catch (err) {
            console.error(err.message);
        }
    });

    xhr.open('GET', URL);
    xhr.send();
};

const onSuccess = function(room) {
    for (var i = 0; i < 12; i++) {
        var roomGenerator = roomTemplate.cloneNode(true);

        if (room[i].favourite === true) {
            roomGenerator.classList.add("room--favourite")
        }
        if (room[i].roomStatus === "reserved") {
            roomGenerator.classList.add("room--reserved");
            roomGenerator.querySelector(".room__status").innerHTML = "Забронировано";
        } else if (room[i].roomStatus === "free") {
            roomGenerator.classList.add("room--free");
            roomGenerator.querySelector(".room__status").innerHTML = "Свободно";
        } else if (room[i].roomStatus === "sold") {
            roomGenerator.classList.add("room--sold");
            roomGenerator.querySelector(".room__status").innerHTML = "Продано";
        }
        if (room[i].roomDiscount === true) {
            roomGenerator.classList.add("room--discount");
            roomGenerator.querySelector(".room__discount").innerText = room[i].roomDiscountValue;
        }
        if (room[i].roomShock === true) {
            roomGenerator.classList.add("room--shock");
        }
        roomGenerator.querySelector(".room__image").src = room[i].roomImage;
        roomGenerator.querySelector(".room__image").style.width = room[i].roomWidth;
        roomGenerator.querySelector(".room__image").style.height = room[i].roomHeight;
        roomGenerator.querySelector(".room__furnish").innerText = room[i].roomFurnish;
        roomGenerator.querySelector(".room__area-count").innerText = room[i].roomArea;
        roomGenerator.querySelector(".room__floor-count").innerText = room[i].roomFloor;
        roomGenerator.querySelector(".room__price").innerText = room[i].roomPrice + " руб.";
        roomGenerator.querySelector(".room__header").innerText = room[i].roomHeader;

        searchList.appendChild(roomGenerator);
    }

    moreButton.addEventListener("click", function () {
        for (var i = 12; i < room.length; i++) {
            var roomGenerator = roomTemplate.cloneNode(true);

            if (room[i].favourite === true) {
                roomGenerator.classList.add("room--favourite")
            }
            if (room[i].roomStatus === "reserved") {
                roomGenerator.classList.add("room--reserved");
                roomGenerator.querySelector(".room__status").innerHTML = "Забронировано";
            } else if (room[i].roomStatus === "free") {
                roomGenerator.classList.add("room--free");
                roomGenerator.querySelector(".room__status").innerHTML = "Свободно";
            } else if (room[i].roomStatus === "sold") {
                roomGenerator.classList.add("room--sold");
                roomGenerator.querySelector(".room__status").innerHTML = "Продано";
            }
            if (room[i].roomDiscount === true) {
                roomGenerator.classList.add("room--discount");
                roomGenerator.querySelector(".room__discount").innerText = room[i].roomDiscountValue;
            }
            if (room[i].roomShock === true) {
                roomGenerator.classList.add("room--shock");
            }
            roomGenerator.querySelector(".room__image").src = room[i].roomImage;
            roomGenerator.querySelector(".room__image").style.width = room[i].roomWidth;
            roomGenerator.querySelector(".room__image").style.height = room[i].roomHeight;
            roomGenerator.querySelector(".room__furnish").innerText = room[i].roomFurnish;
            roomGenerator.querySelector(".room__area-count").innerText = room[i].roomArea;
            roomGenerator.querySelector(".room__floor-count").innerText = room[i].roomFloor;
            roomGenerator.querySelector(".room__price").innerText = room[i].roomPrice + " руб.";
            roomGenerator.querySelector(".room__header").innerText = room[i].roomHeader;

            searchList.appendChild(roomGenerator);
        }
        moreButton.outerHTML = "";
    })
};


window.load();