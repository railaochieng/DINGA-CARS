const totalCars = 40; // Total car images
const carGallery = document.getElementById("carGallery");

document.getElementById("viewCarsBtn").addEventListener("click", () => {
    carGallery.innerHTML = ""; // Clear existing content

    for (let i = 1; i <= totalCars; i++) {
        const carItem = document.createElement("div");
        carItem.className = "car-item";

        const carImg = document.createElement("img");
        carImg.src = `images/${i}.jpeg`; // Dynamically set image path
        carImg.alt = `Car ${i}`;

        const whatsappLink = document.createElement("a");
        whatsappLink.href = "https://whatsapp.com/channel/0029Vb50gErAe5Vj3HRzve3y";
        whatsappLink.className = "view-whatsapp";
        whatsappLink.target = "_blank";
        whatsappLink.textContent = "View in WhatsApp Channel";

        const contactNumber = document.createElement("p");
        contactNumber.textContent = "Dealer Contact: 0707961671";

        carItem.appendChild(carImg);
        carItem.appendChild(whatsappLink);
        carItem.appendChild(contactNumber);

        carGallery.appendChild(carItem);
    }

    carGallery.classList.remove("hidden");
});