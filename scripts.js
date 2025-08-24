// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// PLANE DATA 
const PlaneData = {
    'new york-washington': [
        {
            name: 'Pink Sky AIRLINE 🌸',
            type: 'AC Luxury',
            price: 350000,
            duration: '4h 30m',
            departure: '08:00',
            arrival: '12:30',
            features: ['WiFi 📶', 'Charging Port 🔌', 'Snacks 🍪', 'AC ❄'],
            category: 'luxury'
        },
        {
            name: 'Fly AIR  💕',
            type: 'Business',
            price: 280000,
            duration: '5h 15m',
            departure: '10:30',
            arrival: '15:45',
            features: ['WiFi 📶', 'AC ❄', 'Water 💧'],
            category: 'Elite'
        },
        {
            name: 'Dreamy Sleeper 🌙',
            type: 'Sleeper',
            price: 22000,
            duration: '6h 00m',
            departure: '22:00',
            arrival: '04:00+1',
            features: ['Blanket 🛏', 'Pillow 🌸', 'AC ❄'],
            category: 'sleeper'
        }
    ],
    // ... other routes remain unchanged
};

// ================= DOM ELEMENTS =================
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const swapButton = document.getElementById('swap-locations');
const departureDate = document.getElementById('departure-date');
const searchBtn = document.getElementById('search-btn');
const results = document.getElementById('results');
const PlaneList = document.getElementById('Plane-list');
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
    searchPlanes(from, to);
});

function searchPlanes(from, to) {
    const routeKey = `${from}-${to}`;
    const reverseRouteKey = `${to}-${from}`;
    const Planes = PlaneData[routeKey] || PlaneData[reverseRouteKey] || generateRandomPlanes(from, to);

    displayResults(Planes, from, to);
    results.classLisst.add('active');
    results.scrollIntoView({ behavior: 'smooth' });
}


// ================= RANDOM PLANE GENERATOR =================
function generateRandomPlanes(from, to) {
    const PlaneNames = ['Pink Sky Airline ', 'FLY Air ', 'Cloud chaser ', 'Destinity AirLine ', 'FLY Plus '];
    const PlaneTypes = ['First-class', 'Business', 'Sleeper', 'Luxury', 'Semi-Sleeper'];
    const features = [
        ['WiFi 📶', 'AC ❄'],
        ['Charging Port 🔌', 'Water 💧'],
        ['Blanket 🛏', 'Pillow 🌸'],
        ['WiFi 📶', 'Movies 🎬', 'AC ❄'],
        ['Basic Seating 🪑']
    ];
    const categories = ['Business', 'economy', 'First-class', ];

    const Planes = [];
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

        Planes.push({
            name: PlaneNames[i % PlaneNames.length],
            type: PlaneTypes[Math.floor(Math.random() * PlaneTypes.length)],
            price: Math.floor(Math.random() * 50) + 20,
            duration,
            departure,
            arrival,
            features: features[Math.floor(Math.random() * features.length)],
            category: categories[Math.floor(Math.random() * categories.length)]
        });
    }
    return Planes;
}

// ================= DISPLAY RESULTS =================
function displayResults(Planes, from, to) {
    resultsTitle.textContent = `${Planes.length}Planes found from ${capitalize(from)} to ${capitalize(to)}`;

    if (Planes.length === 0) {
        PlaneList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-Plane"></i>
                <h3>No Planes found</h3>
                <p>Try searching for a different route or date</p>
            </div>`;
        return;
    }

   PlaneList.innerHTML = '';
    Planes.forEach((Plane, index) => {
        const PlaneCard = document.createElement('div');
        PlaneCard.className = 'Plane-card';
        PlaneCard.style.animationDelay = `${index * 0.1}s`;
        PlaneCard.dataset.category = Plane.category;

        PlaneCard.innerHTML = `
            <div class="Plane-card-header">
                <div class="Plane-info">
                    <i class="fas fa-Plane Plane-icon"></i>
                    <div class="Plane-details">
                        <h4>${Plane.name}</h4>
                        <div class="Plane-type"><i class="fas fa-star"></i> <span>${Plane.type}</span></div>
                    </div>
                </div>
                <div class="price-info">
                    <div class="price">${Plane.price}</div>
                    <div class="price-per">per person</div>
                </div>
            </div>
            <div class="Plane-journey">
                <div class="journey-point">
                    <div class="journey-time">${Plane.departure}</div>
                    <div class="journey-city">${capitalize(from)}</div>
                </div>
                <div class="journey-line"></div>
                <div class="journey-point">
                    <div class="journey-time">${Plane.arrival}</div>
                    <div class="journey-city">${capitalize(to)}</div>
                </div>
            </div>
            <div class="Plane-features">
                ${Plane.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                <span class="feature">⏱ ${Plane.duration}</span>
            </div>
            <button class="book-btn" onclick="bookPlanePlane('${Plane.name}', '${from}', '${to}', ${Plane.price})">
                <i class="fas fa-heart"></i> Book Now
            </button>`;
        PlaneList.appendChild(PlaneCard);
    });
    setupFilters(Planes);
}

// ================= FILTER =================
function setupFilters(Planes) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.Plane-card').forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });
}



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
            // add sample objects here
        ];
        const random = samples[Math.floor(Math.random() * samples.length)];
        searchPlanes(random.from.toLowerCase(), random.to.toLowerCase());
        fromInput.value = random.from; toInput.value = random.to;
    }
}, 1000);
