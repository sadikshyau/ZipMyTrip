// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

<<<<<<< HEAD
// BUS DATA 
const busData = {
    'new york-washington': [
        {
            name: 'Pink Express ',
            type: 'AC Luxury',
=======
// TRAIN DATA 
const trainData = {
    'new york-washington': [
        {
            name: 'Pink Express ',
            type: 'AC First Class',
            price: 3500,
            duration: '4h 30m',
            departure: '08:00',
            arrival: '12:30',
<<<<<<< HEAD
            features: ['WiFi ', 'Charging Port ', 'Snacks ', 'AC '],
=======
            features: ['WiFi ', 'Charging Port ', 'Meals ', 'AC '],
>>>>>>> origin/sudi
            category: 'luxury'
        },
        {
            name: 'Comfort Plus ',
<<<<<<< HEAD
            type: 'AC Seater',
=======
            type: 'AC Chair Car',
>>>>>>> origin/sudi
            price: 2800,
            duration: '5h 15m',
            departure: '10:30',
            arrival: '15:45',
            features: ['WiFi ', 'AC ', 'Water '],
            category: 'ac'
        },
        {
            name: 'Dreamy Sleeper ',
<<<<<<< HEAD
            type: 'Sleeper',
=======
            type: 'Sleeper Class',
>>>>>>> origin/sudi
            price: 2200,
            duration: '6h 00m',
            departure: '22:00',
            arrival: '04:00+1',
            features: ['Blanket ', 'Pillow ', 'AC '],
            category: 'sleeper'
        }
    ],
    // ... other routes remain unchanged
};


<<<<<<< HEAD
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const swapButton = document.getElementById('swap-locations');
const departureDate = document.getElementById('departure-date');
const searchBtn = document.getElementById('search-btn');
const results = document.getElementById('results');
<<<<<<< HEAD
const busList = document.getElementById('bus-list');
=======
const trainList = document.getElementById('bus-list');
>>>>>>> origin/sudi
const resultsTitle = document.getElementById('results-title');
const confirmationFrame = document.getElementById('confirmation-frame');
const successMessage = document.getElementById('success-message');
const overlay = document.getElementById('overlay');

// ================= DATE HANDLING =================
const today = new Date().toISOString().split('T')[0];
departureDate.min = today;
departureDate.value = today;

// Quick date buttons
document.querySelectorAll('.date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const offset = parseInt(btn.dataset.offset);
        const date = new Date();
        date.setDate(date.getDate() + offset);
        departureDate.value = date.toISOString().split('T')[0];

        document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ================= SWAP LOCATIONS =================
swapButton.addEventListener('click', () => {
    const fromValue = fromInput.value;
    const toValue = toInput.value;
    fromInput.value = toValue;
    toInput.value = fromValue;
});

// ================= SEARCH FUNCTIONALITY =================
searchBtn.addEventListener('click', () => {
    const from = fromInput.value.toLowerCase().trim();
    const to = toInput.value.toLowerCase().trim();

    if (!from || !to) {
        alert('Please enter both departure and destination cities');
        return;
    }
    if (from === to) {
        alert('Departure and destination cities cannot be the same');
        return;
    }
<<<<<<< HEAD
    searchBuses(from, to);
});

function searchBuses(from, to) {
    const routeKey = `${from}-${to}`;
    const reverseRouteKey = `${to}-${from}`;
    const buses = busData[routeKey] || busData[reverseRouteKey] || generateRandomBuses(from, to);

    displayResults(buses, from, to);
=======
    searchTrains(from, to);
});

function searchTrains(from, to) {
    const routeKey = `${from}-${to}`;
    const reverseRouteKey = `${to}-${from}`;
    const trains = trainData[routeKey] || trainData[reverseRouteKey] || generateRandomTrains(from, to);

    displayResults(trains, from, to);
>>>>>>> origin/sudi
    results.classList.add('active');
    results.scrollIntoView({ behavior: 'smooth' });
}

<<<<<<< HEAD
// ================= RANDOM BUS GENERATOR =================
function generateRandomBuses(from, to) {
    const busNames = ['Pink Express ', 'Rose Liner ', 'Sakura Runner ', 'Blossom Pro ', 'Cherry Plus '];
    const busTypes = ['AC Seater', 'Non-AC', 'Sleeper', 'Luxury', 'Semi-Sleeper'];
=======
// ================= RANDOM TRAIN GENERATOR =================
function generateRandomTrains(from, to) {
    const trainNames = ['Pink Express ', 'Smile Metro', 'Sakura Runner', 'Blossom Metro', 'Berry Station'];
    const trainTypes = ['Second Class', 'Non-AC', 'Sleeper Class', 'First Class', 'Second Sitting'];
>>>>>>> origin/sudi
    const features = [
        ['WiFi ', 'AC '],
        ['Charging Port ', 'Water '],
        ['Blanket ', 'Pillow '],
<<<<<<< HEAD
        ['WiFi ', 'Movies ', 'AC '],
=======
        ['WiFi ', 'Pantry Car ', 'AC '],
>>>>>>> origin/sudi
        ['Basic Seating ']
    ];
    const categories = ['ac', 'economy', 'sleeper', 'luxury'];

<<<<<<< HEAD
    const buses = [];
=======
    const trains = [];
>>>>>>> origin/sudi
    const count = Math.floor(Math.random() * 4) + 2;

    for (let i = 0; i < count; i++) {
        const departureHour = Math.floor(Math.random() * 18) + 6;
        const durationHours = Math.floor(Math.random() * 8) + 3;
        const durationMinutes = Math.floor(Math.random() * 60);

        const departure = `${departureHour.toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
        const arrivalTime = new Date();
        arrivalTime.setHours(departureHour + durationHours);
        arrivalTime.setMinutes(durationMinutes);

        const arrival = `${arrivalTime.getHours().toString().padStart(2, '0')}:${arrivalTime.getMinutes().toString().padStart(2, '0')}`;
        const duration = `${durationHours}h ${durationMinutes}m`;

<<<<<<< HEAD
        buses.push({
            name: busNames[i % busNames.length],
            type: busTypes[Math.floor(Math.random() * busTypes.length)],
=======
        trains.push({
            name: trainNames[i % trainNames.length],
            type: trainTypes[Math.floor(Math.random() * trainTypes.length)],
>>>>>>> origin/sudi
            price: Math.floor(Math.random() * 50) + 20,
            duration,
            departure,
            arrival,
            features: features[Math.floor(Math.random() * features.length)],
            category: categories[Math.floor(Math.random() * categories.length)]
        });
    }
<<<<<<< HEAD
    return buses;
}

// ================= DISPLAY RESULTS =================
function displayResults(buses, from, to) {
    resultsTitle.textContent = `${buses.length} buses found from ${capitalize(from)} to ${capitalize(to)}`;

    if (buses.length === 0) {
        busList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-bus"></i>
                <h3>No buses found</h3>
=======
    return trains;
}

// ================= DISPLAY RESULTS =================
function displayResults(trains, from, to) {
    resultsTitle.textContent = `${trains.length} trains found from ${capitalize(from)} to ${capitalize(to)}`;

    if (trains.length === 0) {
        trainList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-train"></i>
                <h3>No trains found</h3>
>>>>>>> origin/sudi
                <p>Try searching for a different route or date</p>
            </div>`;
        return;
    }

<<<<<<< HEAD
    busList.innerHTML = '';
    buses.forEach((bus, index) => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        busCard.style.animationDelay = `${index * 0.1}s`;
        busCard.dataset.category = bus.category;

        busCard.innerHTML = `
            <div class="bus-card-header">
                <div class="bus-info">
                    <i class="fas fa-bus bus-icon"></i>
                    <div class="bus-details">
                        <h4>${bus.name}</h4>
                        <div class="bus-type"><i class="fas fa-star"></i> <span>${bus.type}</span></div>
                    </div>
                </div>
                <div class="price-info">
                    <div class="price">${bus.price}</div>
=======
    trainList.innerHTML = '';
    trains.forEach((train, index) => {
        const trainCard = document.createElement('div');
        trainCard.className = 'bus-card';
        trainCard.style.animationDelay = `${index * 0.1}s`;
        trainCard.dataset.category = train.category;

        trainCard.innerHTML = `
            <div class="bus-card-header">
                <div class="bus-info">
                    <i class="fas fa-train bus-icon"></i>
                    <div class="bus-details">
                        <h4>${train.name}</h4>
                        <div class="bus-type"><i class="fas fa-star"></i> <span>${train.type}</span></div>
                    </div>
                </div>
                <div class="price-info">
                    <div class="price">${train.price}</div>
>>>>>>> origin/sudi
                    <div class="price-per">per person</div>
                </div>
            </div>
            <div class="bus-journey">
                <div class="journey-point">
<<<<<<< HEAD
                    <div class="journey-time">${bus.departure}</div>
=======
                    <div class="journey-time">${train.departure}</div>
>>>>>>> origin/sudi
                    <div class="journey-city">${capitalize(from)}</div>
                </div>
                <div class="journey-line"></div>
                <div class="journey-point">
<<<<<<< HEAD
                    <div class="journey-time">${bus.arrival}</div>
=======
                    <div class="journey-time">${train.arrival}</div>
>>>>>>> origin/sudi
                    <div class="journey-city">${capitalize(to)}</div>
                </div>
            </div>
            <div class="bus-features">
<<<<<<< HEAD
                ${bus.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                <span class="feature">⏱️ ${bus.duration}</span>
            </div>
            <button class="book-btn" onclick="bookBus('${bus.name}', '${from}', '${to}', ${bus.price})">
                <i class="fas fa-heart"></i> Book Now
            </button>`;
        busList.appendChild(busCard);
    });
    setupFilters(buses);
}

// ================= FILTER =================
function setupFilters(buses) {
=======
                ${train.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                <span class="feature">⏱ ${train.duration}</span>
            </div>
            <button class="book-btn" onclick="bookTrain('${train.name}', '${from}', '${to}', ${train.price})">
                <i class="fas fa-heart"></i> Book Now
            </button>`;
        trainList.appendChild(trainCard);
    });
    setupFilters(trains);
}

// ================= FILTER =================
function setupFilters(trains) {
>>>>>>> origin/sudi
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.bus-card').forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });
}

// ================= BOOKING MODAL =================
<<<<<<< HEAD
function bookBus(busName, from, to, price) {
    document.getElementById('selected-bus').textContent = `Bus: ${busName}`;
=======
function bookTrain(trainName, from, to, price) {
    document.getElementById('selected-bus').textContent = `Train: ${trainName}`;
>>>>>>> origin/sudi
    document.getElementById('selected-route').textContent = `Route: ${capitalize(from)} → ${capitalize(to)}`;
    document.getElementById('selected-price').textContent = `Price: ${price} per person`;

    overlay.classList.add('active');
    confirmationFrame.style.display = 'block';
}

document.getElementById('confirm-btn').addEventListener('click', () => {
    confirmationFrame.style.display = 'none';
    overlay.classList.remove('active');
    successMessage.style.display = 'block';
    setTimeout(() => successMessage.style.display = 'none', 3000);
});

document.getElementById('cancel-btn').addEventListener('click', () => {
    confirmationFrame.style.display = 'none';
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    confirmationFrame.style.display = 'none';
    overlay.classList.remove('active');
});

// ================= AUTOCOMPLETE =================
function setupAutoComplete(input) {
    input.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length < 2) return;

        const suggestions = cities.filter(city => city.toLowerCase().includes(value)).slice(0, 5);
        const existing = document.querySelector('.suggestions'); if (existing) existing.remove();

        if (suggestions.length > 0) {
            const list = document.createElement('div');
            list.className = 'suggestions';
            suggestions.forEach(city => {
                const item = document.createElement('div');
                item.textContent = city;
                item.addEventListener('click', () => { input.value = city; list.remove(); });
                list.appendChild(item);
            });
            input.parentElement.appendChild(list);
        }
    });
    document.addEventListener('click', (e) => {
        if (!input.parentElement.contains(e.target)) {
            const sug = document.querySelector('.suggestions'); if (sug) sug.remove();
        }
    });
}
setupAutoComplete(fromInput);
setupAutoComplete(toInput);

// ================= UTILS =================
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Ensure "today" button is active
document.querySelector('.date-btn[data-offset="0"]').classList.add('active');

// Show random sample route if empty
setTimeout(() => {
    if (!fromInput.value && !toInput.value) {
        const samples = [
           
        ];
        const random = samples[Math.floor(Math.random() * samples.length)];
<<<<<<< HEAD
        searchBuses(random.from.toLowerCase(), random.to.toLowerCase());
        fromInput.value = random.from; toInput.value = random.to;
    }
}, 1000);

=======
        searchTrains(random.from.toLowerCase(), random.to.toLowerCase());
        fromInput.value = random.from; toInput.value = random.to;
    }
}, 1000);
>>>>>>> origin/sudi
