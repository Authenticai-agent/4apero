// Language Toggle Functionality
let currentLanguage = 'en'; // Default language is English

// Retreat data - Update the image paths with your own images
const retreatsData = {
    en: [
        {
            id: 1,
            name: "SAGE SMOKE - Meat & Fish Smoking Workshop",
            description: "Discover the ancient art of fire, smoke, and preservation. Learn how to salt, dry, smoke, and prepare your own local delicacies. Enjoy smoky aromas and creative cooking as you transform simple ingredients into rich, complex flavors. Experience the satisfaction of mastering age-old techniques that connect you to tradition, nature, and the true essence of slow, mindful cuisine.<br><br><strong>Program Highlights:</strong><br>• Hands-on smoking workshop using Ausra's two smokers<br>• Preparation of local meats and fish<br>• Grilling techniques, marinades & smoky flavors<br>• Culinary creativity: the art of fire & taste<br>• 4 apéro evenings with local cheeses, wine & conversation<br>• Daily guided local excursions and hidden village visits<br>• Shopping in local artisan stores<br>• All meals and French wines included",
            location: "Castellane, France",
            date: "4 days / 3 nights retreat",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: #059669; font-size: 1.3rem;">$2800 per person</strong><br><small style="color: #666;">4 days / 3 nights retreat</small>',
            image: "./images/sageandmeat.png",
            highlights: [
                "Group of 4-6 people. Hands-on smoking workshop using Ausra's two smokers",
                "Preparation of local meats and fish",
                "Grilling techniques, marinades & smoky flavors",
                "Culinary creativity: the art of fire & taste",
                "4 apéro evenings with local cheeses, wine & conversation",
                "Daily guided local excursions and hidden village visits",
                "Shopping in local artisan stores",
                "Accommodation, all meals and French wines included"
            ]
        },
        {
            id: 2,
            name: "PERFUME & COLOR — Grasse & Castellane",
            description: "Embark on a sensorial journey that weaves together scent, color, and creation. Visit Grasse, the perfume capital of the world, and craft your own signature fragrance. Discover the secrets of aromatic blending, experiment with rare essences, and leave with a scent that captures your story and spirit.<br><br><strong>Program Highlights:</strong><br>• Guided visit to a traditional perfume house in Grasse<br>• Workshop: create your own natural perfume (personal blend)<br>• Dinner with floral & aromatic accents<br>• 4 apéro experiences pairing scent & taste<br>• Guided tours through local villages and nature trails<br>• Shopping in local perfume & artisan boutiques<br>• All meals, wines, and drinks included",
            location: "Grasse & Castellane, France",
            date: "4 days / 3 nights retreat",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: #059669; font-size: 1.3rem;">$2800 per person</strong><br><small style="color: #666;">4 days / 3 nights retreat</small>',
            image: "./images/perfumeandcolor.png",
            highlights: [
                "Group of 4-6 people. Guided visit to a traditional perfume house in Grasse",
                "Workshop: create your own natural perfume (personal blend)",
                "Dinner with floral & aromatic accents",
                "4 apéro experiences pairing scent & taste",
                "Guided tours through local villages and nature trails",
                "Shopping in local perfume & artisan boutiques",
                "Accommodation, all meals, wines, and drinks included"
            ]
        }
    ],
    lt: [
        {
            id: 1,
            name: "4 dienų kulinarinė kelionė Castellane regione",
            description: "4 dienų kulinarinė kelionė Castellane regione. Per keturias įkvepiančias dienas išmoksite, sužinosite ir pamatysite svarbiausias prancūziškos gastronomijos paslaptis. O svarbiausia – ragau­sit­e, valgysite ir gersite tiek, kiek širdis geidžia, niekuo nereikės rūpintis – jums beliks tik mėgautis.",
            location: "Castellane, Prancūzija",
            date: "4 dienų / 3 naktų kelionė",
            time: "Atvykimas: 15:00, Išvykimas: 10:00",
            price: '<span style="text-decoration: line-through; color: #999;">€2800</span> <span style="color: #059669; font-weight: bold;">80% nuolaida</span><br><strong style="color: #059669; font-size: 1.3rem;">€600 asmeniui</strong><br><small style="color: #666;">Visa kaina</small>',
            image: "./images/sageandmeat.png",
            highlights: [
                "Per šią kelionę: IŠMOKSITE \n Paruošti žuvį ir mėsą pagal tradicines prancūziškas technikas. \n Rūkyti žuvį ir mėsą šaltu ir karštu būdu. \n Gamyti prancūzišką pâté, kepti savo duoną ir bagetę. \n Virti legendinę Bouillabaisse sriubą. \n Gaminti tapenade ir kitus regioninius skanėstus. \n SUŽINOSITE \n Rūkymo paslaptis: medienos rūšys, temperatūros, laikai. \n Kaip atrinkti, brandinti, marinuoti ir džiovinti mėsą bei žuvį. \n Kaip derinti patiekalus su vietiniais vynais ir sūriais. \n Provanso kulinarinės kultūros pagrindus. \n PAMATYSITE \n Įspūdingą Verdono kanjoną, St. Croix ežerą ir kalnų kaimelius. \n Provanso gamtos grožį ir kepyklas. \n Rūkymo procesus nuo ruošimo iki degustacijos. \n Rūkymo procesus nuo ruošimo iki degustacijos."
            ]
        },
        {
            id: 2,
            name: "KVEPALAI IR SPALVOS — Grasse ir Castellane",
            description: "4 dienų kvapų ir skonių kelionė į Castellane",
            location: "Grasse ir Castellane, Prancūzija",
            date: "4 dienų / 3 naktų kelionė",
            time: "Atvykimas: 15:00, Išvykimas: 10:00",
            price: '<span style="text-decoration: line-through; color: #999;">€2800</span> <span style="color: #059669; font-weight: bold;">80% nuolaida</span><br><strong style="color: #059669; font-size: 1.3rem;">€600 asmeniui</strong><br><small style="color: #666;">Visa kaina</small>',
            image: "./images/perfumeandcolor.png",
            highlights: [
                "1 diena: Atvykimas į Nicą, kelionė į Castellane, įsikūrimas ir karališka prancūziška vakarienė.",
                "2 diena: Pusryčiai. Kelionė per Verdono kanjoną, St. Croix ežeras, kalnų kaimeliai, piknikas gamtoje ir vakarienė Castellane.",
                "3 diena: Pusryčiai. Vizitas į L’Occitane gamyklą ir muziejų, piknikas kalnuose, grįžimas ir vakarienė.",
                "4 diena: Pusryčiai. Kelionė į Grasse, apsilankymas Fragonard parfumerijoje, pietūs kelyje, išvykimas į Nicos oro uostą."
            ]
        }
    ]
};

// DOM Elements
const travelCardsContainer = document.getElementById('travelCards');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const ctaButton = document.querySelector('.cta-button');
const navbar = document.querySelector('.navbar');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderTravelCards();
    setupEventListeners();
    setupScrollEffects();
    setupIntersectionObserver();
});

// Render travel cards
function renderTravelCards() {
    if (!travelCardsContainer) return;
    
    // Get retreats for current language
    const retreats = retreatsData[currentLanguage] || retreatsData.en;
    
    // Show loading state
    travelCardsContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        travelCardsContainer.innerHTML = '';
        
        retreats.forEach((retreat, index) => {
            const card = createTravelCard(retreat, index);
            travelCardsContainer.appendChild(card);
        });
    }, 500);
}

// Create individual travel card
function createTravelCard(retreat, index) {
    const card = document.createElement('div');
    card.className = 'travel-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    card.style.opacity = '0';
    
    const highlightsList = retreat.highlights && retreat.highlights.length > 0 
        ? `<ul class="travel-card-highlights">${retreat.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` 
        : '';
    
    card.innerHTML = `
        <img src="${retreat.image}" alt="${retreat.name}" class="travel-card-image" loading="lazy">
        <div class="travel-card-content">
            <div>
                <h3 class="travel-card-title">${retreat.name}</h3>
                <p class="travel-card-description">${retreat.description}</p>
                ${highlightsList}
            </div>
            <div>
                <div class="travel-card-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${retreat.location}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${retreat.date}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${retreat.time}</span>
                    </div>
                </div>
                <div class="travel-card-price">${retreat.price}</div>
                <button class="card-book-button" onclick="handleCardClick(${JSON.stringify(retreat).replace(/"/g, '&quot;')})">Book Now</button>
            </div>
        </div>
    `;
    
    return card;
}

// Handle card click
function handleCardClick(retreat) {
    console.log('Card clicked:', retreat.name);
    // Here you could open a modal, navigate to a detail page, or trigger a booking flow
    showBookingModal(retreat);
}

// Show booking modal with form
function showBookingModal(retreat) {
    const t = translations[currentLanguage].bookingModal;
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        max-height: 90vh;
        overflow-y: auto;
    `;
    
    modalContent.innerHTML = `
        <h2 style="color: #000000; margin-bottom: 1rem; font-size: 1.5rem;">${t.title}</h2>
        <h3 style="margin-bottom: 0.5rem; color: #000000;">${retreat.name}</h3>
        <p style="color: #333333; margin-bottom: 1.5rem;">${retreat.description}</p>
        
        <form id="bookingForm" style="margin-bottom: 1.5rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.firstName} *</label>
                <input type="text" name="firstName" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.lastName} *</label>
                <input type="text" name="lastName" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.phone} *</label>
                <input type="tel" name="phone" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.email} *</label>
                <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.people} *</label>
                <select name="people" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
                    <option value="">Select number</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                </select>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; color: #000000; font-weight: 500;">${t.date} *</label>
                <input type="date" name="date" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <input type="hidden" name="retreatName" value="${retreat.name}">
            <input type="hidden" name="retreatPrice" value="${retreat.price}">
            
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="cta-button" style="flex: 1;">${t.confirmBooking}</button>
                <button type="button" class="cancel-button" style="flex: 1; background: #e5e7eb; color: #000000; padding: 1rem 2rem; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem;">${t.cancel}</button>
            </div>
        </form>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal handlers
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
        }, 300);
    };
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    modalContent.querySelector('.cancel-button').addEventListener('click', closeModal);
    
    // Handle form submission - COMPLETELY PREVENT DEFAULT SUBMISSION
    const form = modalContent.querySelector('#bookingForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        console.log('Form submission intercepted - no redirect will happen');
        
        const formValues = new FormData(form);
        const data = Object.fromEntries(formValues);
        
        // Create email content
        const emailSubject = `BOOKING FOR info@4apero.com - ${data.retreatName}`;
        const emailBody = `
IMPORTANT: This booking is for 4apero.com - Please forward to info@4apero.com

New Booking Request:

Retreat: ${data.retreatName}
Price: ${data.retreatPrice}

Personal Information:
First Name: ${data.firstName}
Last Name: ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}

Booking Details:
Number of People: ${data.people}
Preferred Date: ${data.date}

ACTION REQUIRED: Forward this email to info@4apero.com
Please contact the customer soon to confirm availability and provide payment information.
        `;
        
        // Send email using WebForms
        const emailData = {
            access_key: 'c703a095-66f9-47ca-b0cb-09bffc9fd03d',
            subject: `Booking Request - ${data.retreatName}`,
            message: `
New Booking Request:

Retreat: ${data.retreatName}
Price: ${data.retreatPrice}

Personal Information:
First Name: ${data.firstName}
Last Name: ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}

Booking Details:
Number of People: ${data.people}
Preferred Date: ${data.date}

Please contact the customer soon to confirm availability and provide payment information.
            `,
            from_name: `${data.firstName} ${data.lastName}`,
            reply_to: data.email,
            phone: data.phone,
            people: data.people,
            date: data.date,
            retreat: data.retreatName,
            price: data.retreatPrice
        };
        
        console.log('Sending email to WebForms with data:', emailData);
        
        // Send to WebForms (for admin)
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        }).then(response => {
            console.log('WebForms response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            console.log('Email sent successfully to info@4apero.com:', data);
            
            // Send payment link to customer automatically
            sendPaymentLinkToCustomer(data);
            
        }).catch(error => {
            console.error('Email service error:', error);
            alert('There was an error sending your booking. Please try again.');
            // Still show thank you message even if email fails
        });
        
        // Close modal and show thank you message immediately
        closeModal();
        setTimeout(() => {
            showThankYouMessage();
        }, 300);
        
        return false; // EXTRA PREVENTION
    });
}

// Send payment link to customer automatically
function sendPaymentLinkToCustomer(bookingData) {
    const customerEmailData = {
        access_key: 'c703a095-66f9-47ca-b0cb-09bffc9fd03d',
        subject: 'Payment Link for Your 4apero.com Booking',
        message: `
Dear Customer,

Thank you for your booking request!

To complete your reservation, please proceed with payment using the link below:

🔗 PAYMENT LINK: https://your-payment-link-here.com

Booking Details:
- Retreat: ${bookingData.retreat || 'Selected Retreat'}
- Price: ${bookingData.price || 'TBD'}
- People: ${bookingData.people || 'TBD'}
- Date: ${bookingData.date || 'TBD'}

Once payment is completed, we'll send you a confirmation email with all the details.

If you have any questions, please contact us at info@4apero.com

Best regards,
The 4apero.com Team
        `,
        from_name: '4apero.com Team',
        reply_to: 'info@4apero.com'
    };
    
    // Send payment email to customer
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerEmailData)
    }).then(response => {
        console.log('Payment link sent to customer, status:', response.status);
        return response.json();
    }).then(data => {
        console.log('Payment link email sent successfully to customer:', data);
    }).catch(error => {
        console.error('Error sending payment link to customer:', error);
    });
}

// Show About Hosts modal
function showAboutHostsModal() {
    const t = translations[currentLanguage].aboutHostModal;
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: white;
        padding: 2.5rem;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
            <h2 style="color: #000000; font-size: 1.8rem; margin: 0;">${t.title}</h2>
            <button onclick="this.closest('.modal-overlay').remove()" style="background: none; border: none; font-size: 1.5rem; color: #666; cursor: pointer; padding: 0.5rem; line-height: 1; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 4px; transition: background 0.2s;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='none'">×</button>
        </div>
        <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
            <img src="./images/host-photo.jpg" alt="Ausra - Your Host" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">
            <div style="color: #000000; line-height: 1.6; font-size: 1rem;">
                <p style="margin-bottom: 1rem;">
                    ${t.bio1}
                </p>
                <p style="margin-bottom: 1rem;">
                    ${t.bio2}
                </p>
                <p style="margin-bottom: 1rem;">
                    ${t.bio3}
                </p>
                <p style="margin-bottom: 1rem;">
                    ${t.bio4}
                </p>
                <p style="margin-bottom: 1rem;">
                    ${t.bio5}
                </p>
            </div>
        </div>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal handlers
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    };
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // X button close handler
    const closeButton = modalContent.querySelector('button[onclick*="remove"]');
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }
}

// Show Contact modal
function showContactModal() {
    const t = translations[currentLanguage].contactModal;
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: white;
        padding: 2.5rem;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <h2 style="color: #000000; margin-bottom: 1.5rem; font-size: 1.8rem;">${t.title}</h2>
        <form id="contactForm">
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #000000; margin-bottom: 0.5rem; font-weight: 500;">${t.name}</label>
                <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #000000; margin-bottom: 0.5rem; font-weight: 500;">${t.email}</label>
                <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #000000; margin-bottom: 0.5rem; font-weight: 500;">${t.message}</label>
                <textarea name="message" required rows="5" style="width: 100%; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="cta-button" style="flex: 1;">${t.send}</button>
                <button type="button" class="cancel-button" style="flex: 1; background: #f3f4f6; color: #000000; border: 1px solid #e5e7eb;">${t.cancel}</button>
            </div>
        </form>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Animate in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal handlers
    const closeModal = () => {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    };
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    modalContent.querySelector('.cancel-button').addEventListener('click', closeModal);
    
    // Form submission handler
    modalContent.querySelector('#contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData);
        
        console.log('Contact form submission intercepted - no redirect will happen');
        
        // Send email using WebForms
        const emailData = {
            access_key: 'c703a095-66f9-47ca-b0cb-09bffc9fd03d',
            subject: `Contact Inquiry from ${formValues.name}`,
            message: `
New Contact Inquiry:

Name: ${formValues.name}
Email: ${formValues.email}

Message:
${formValues.message}

Please respond to this inquiry as soon as possible.
            `,
            from_name: formValues.name,
            reply_to: formValues.email
        };
        
        console.log('Sending contact email to WebForms with data:', emailData);
        
        // Send to WebForms
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        }).then(response => {
            console.log('WebForms contact response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            console.log('Contact email sent successfully to info@4apero.com:', data);
            alert('Thank you for your message! We will get back to you soon.');
        }).catch(error => {
            console.error('Contact email service error:', error);
            alert('There was an error sending your message. Please try again.');
        });
        
        // Close modal
        closeModal();
        
        return false; // EXTRA PREVENTION
    });
}

// Show thank you message
function showThankYouMessage() {
    const thankYouOverlay = document.createElement('div');
    thankYouOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const thankYouContent = document.createElement('div');
    thankYouContent.style.cssText = `
        background: white;
        padding: 3rem 2rem;
        border-radius: 8px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    thankYouContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h2 style="color: #000000; margin-bottom: 1rem; font-size: 1.5rem;">Thank You!</h2>
        <p style="color: #333333; margin-bottom: 2rem; line-height: 1.6;">
            Thank you for your inquiry. We will contact you soon with payment link and more details.
        </p>
        <button id="closeThankYou" style="
            background: #059669;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
        ">Close</button>
    `;
    
    thankYouOverlay.appendChild(thankYouContent);
    document.body.appendChild(thankYouOverlay);
    
    // Animate in
    setTimeout(() => {
        thankYouOverlay.style.opacity = '1';
        thankYouContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close handler
    const closeThankYou = () => {
        thankYouOverlay.style.opacity = '0';
        thankYouContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(thankYouOverlay)) {
                document.body.removeChild(thankYouOverlay);
            }
        }, 300);
    };
    
    document.getElementById('closeThankYou').addEventListener('click', closeThankYou);
    thankYouOverlay.addEventListener('click', (e) => {
        if (e.target === thankYouOverlay) closeThankYou();
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-purple), var(--neon-purple));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Check if it's an external link (starts with http)
            if (href.startsWith('http')) {
                // Let external links work normally
                return;
            }
            
            // Prevent default for internal links only
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // CTA button click
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const retreatsSection = document.querySelector('#retreats');
            if (retreatsSection) {
                const offsetTop = retreatsSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Setup scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.travel-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex !important;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translateY(8px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px);
    }
`;

// Translation dictionary
const translations = {
    en: {
        nav: {
            home: 'Home',
            retreats: 'Retreats',
            aboutCastellane: 'About Castellane',
            aboutHosts: 'About Hosts',
            contact: 'Contact'
        },
        hero: {
            title: 'Discover <span class="highlight">Castellane, France</span>',
            subtitle: 'A Hidden Gem in the Heart of Provence',
            text1: 'Nestled between lavender fields and the turquoise waters of the Verdon River, Castellane invites you to slow down, breathe deeply, and reconnect with what truly matters. Over five unforgettable days and four restorative nights, immerse yourself in a sensorial journey that blends nature, art, wellness, and the timeless charm of Southern France.',
            text2: 'Wake up to the scent of wild herbs and the distant echo of church bells from the Notre-Dame du Roc chapel perched high above the village. Wander through cobbled streets lined with pastel façades, taste the region\'s finest cheeses and rosé, and let the golden Provençal light awaken your creativity and calm.',
            text3: 'Our exclusive retreats combine luxury comfort with authentic local experiences — from guided nature walks and riverside picnics to artisan workshops and mindful evenings under the stars. Whether you come to paint, heal, meditate, or simply rest, Castellane offers the perfect harmony of adventure and serenity.',
            highlightsTitle: 'Highlights'
        },
        retreats: {
            sectionTitle: 'Our Retreats',
            sectionSubtitle: 'Find your perfect escape in the heart of Provence',
            bookNow: 'Book Now'
        },
        bookingModal: {
            title: 'Book Your Retreat',
            firstName: 'First Name',
            lastName: 'Last Name',
            phone: 'Phone',
            email: 'Email',
            people: 'Number of People',
            date: 'Preferred Date',
            confirmBooking: 'Confirm Booking',
            cancel: 'Cancel'
        },
        aboutHostModal: {
            title: 'About Your Host',
            bio1: 'I am Ausra, professional artist of painting, drawing, calligraphy and stained glass art, deeply empowered by holistic conjuncture of spiritual human senses in everyday human life: touch, sight, hearing, smell, taste, extrasensory perception.',
            bio2: 'Painting by inner emotional sense, rising from music sounds&observing performance of musicians is an inseparable part of my compositions. Most surprising creative collaborations were experienced with Lille National Orchestra from France in 2009 by creating a line of peintures « Traits d\'Orchestre » and with Dayton Philharmonic Orchestra from USA in 2017, called « Symphony of Lines »',
            bio3: 'My passion for drawing and painting, combined with sacred process of the unconscious mind flows into the colors, shapes, textures and different techniques turned out into bravely and ambitiously experiment in stained glass art, finishing «Stained glass» and «Art therapy» studies in France and finally opening the « French stained glass » studio in Singapore in 2013.',
            bio4: 'Living in 4 totally different countries (Lithuania, France, USA, and Singapore), gathering impressions and experiences, made a deep imprint to my art: joyful soul of different cultures and traditions, expanded boundaries of world vision, linking universal human senses in vivid compositions.',
            bio5: 'While traveling abroad, inspiration of colors, tones and shapes revealed my passion for cooking and food smoking. I\'m certified in food protection in Ohio, USA. Also for the last 14 years I have been teaching a drawing, painting and creation of stained glass in Universities and private schools in France, Singapore and USA.'
        },
        contactModal: {
            title: 'Contact Us',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            cancel: 'Cancel'
        },
        footer: {
            tagline: 'Your gateway to Castellane, Provence region, France',
            explore: 'Explore',
            retreats: 'Retreats',
            aboutCastellane: 'About Castellane',
            aboutHosts: 'About Hosts',
            contactUs: 'Contact Us',
            rights: '© 2025 4Apero. All rights reserved.'
        }
    },
    lt: {
        nav: {
            home: 'Pradžia',
            retreats: 'Kelionės',
            aboutCastellane: 'Apie Castellane',
            aboutHosts: 'Apie šeimininkus',
            contact: 'Kontaktai'
        },
        hero: {
            title: 'Atraskite <span class="highlight">Castellane, Prancūziją</span>',
            subtitle: 'Paslėptas brangakmenis Provanso širdyje',
            text1: 'Tarp levandų laukų ir turkio spalvos Verdono upės vandenų įsikūręs Castellane miestas kviečia sulėtinti, giliai įkvėpti ir iš naujo susisieti su tuo, kas iš tiesų svarbu. Per keturias nepamirštamas dienas ir tris atgaivinančias naktis pasinerkite į jausmų pilną kelionę, kuri sujungia gamtą, meną, sveikatą ir amžiną Pietų Prancūzijos žavesį.',
            text2: 'Pabuskite pajutę laukinių žolelių aromatą ir tolimą varpų skambėjimą iš Notre-Dame du Roc koplyčios, stūksančios aukštai virš kaimo. Pasivaikščiokite pasteliniais fasadais išmargintomis akmenimis grįstomis gatvelėmis, paragaukite geriausių regiono sūrių ir rožinio vyno ir leiskite auksinei Provanso šviesai pažadinti jūsų kūrybiškumą ir ramybę.',
            text3: 'Mūsų išskirtinės kelionės sujungia jaukų komfortą su autentiškomis vietinėmis patirtimis, nuo žygių i gamtą ir piknikų prie upės iki amatininkų dirbtuvių ir nuostabių vakarų po žvaigždėmis. Nesvarbu, ar atvykstate tapyti, gydytis, medituoti ar tiesiog pailsėti, Castellane siūlo tobulą nuotykio ir ramybės harmoniją.',
            highlightsTitle: 'Pagrindinis'
        },
        retreats: {
            sectionTitle: 'Mūsų kelionės',
            sectionSubtitle: 'Raskite savo tobulą pabėgimą Provanso širdyje',
            bookNow: 'Rezervuoti dabar'
        },
        bookingModal: {
            title: 'Rezervuokite savo kelionę',
            firstName: 'Vardas',
            lastName: 'Pavardė',
            phone: 'Telefonas',
            email: 'El. paštas',
            people: 'Žmonių skaičius',
            date: 'Pageidaujama data',
            confirmBooking: 'Patvirtinti rezervaciją',
            cancel: 'Atšaukti'
        },
        aboutHostModal: {
            title: 'Apie jūsų šeimininkę Aušrą',
            bio1: 'Sveiki, aš esu Aušra, grafikė ir vitražistė. Didžiausia mano kūrybos įkvėpimo jėga visada buvo kelionės, žmonės ir įvairių pasaulio grožio formų įvairovė.',
            bio2: 'Gyvenau ir kūriau Lietuvoje, Prancūzijoje, JAV ir Singapūre – keturiose labai skirtingose šalyse, kurios paliko gilių įspūdžių ir atvėrė mano kūrybai bei virtuvei dar platesnį pasaulį. Laikui bėgant menas natūraliai susijungė su mano meile maistui. Gastronomija, degustacijos ir vietinių skonių atradimas tapo antra mano kūrybos forma.',
            bio3: 'Jau penkerius metus kartu su vyru prancūzu, gyvename Castellane, Pietų Prancūzijoje. Mūsų namai visada atviri svečiams. Čia dalijamės tuo, ką patys labiausiai mylime: ramybe, kalnų grožiu, naminiu maistu ir prancūziškais atradimais.',
            bio4: 'Kviečiu atvykti taip, tarsi lankytumėtės pas seniai matytą gerą draugą – šiltai, paprastai ir nuoširdžiai. Aš pasirūpinsiu viskuo, o jums liks tik mėgautis Pietų Prancūzijos ritmu ir skoniais.',
            bio5: 'Esu sertifikuota maisto saugos srityje, todėl užtikrinsiu, kad viskas būtų ne tik skanu, bet ir saugu. Labai jūsų lauksime, Aušra'
        },
        contactModal: {
            title: 'Susisiekite su mumis',
            name: 'Vardas',
            email: 'El. paštas',
            message: 'Žinutė',
            send: 'Siųsti žinutę',
            cancel: 'Atšaukti'
        },
        footer: {
            tagline: 'Jūsų vartai į Castellane, Provanso regioną, Prancūziją',
            explore: 'Naršyti',
            retreats: 'Kelionės',
            aboutCastellane: 'Apie Castellane',
            aboutHosts: 'Apie šeimininkus',
            contactUs: 'Susisiekite su mumis',
            rights: '© 2025 4Apero. Visos teisės saugomos.'
        }
    }
};

function toggleLanguage() {
    const ltPromo = document.querySelector('.lt-promo');
    const languageButton = document.querySelector('.language-toggle');
    
    if (currentLanguage === 'en') {
        currentLanguage = 'lt';
        languageButton.textContent = 'English';
        ltPromo.style.display = 'block';
    } else {
        currentLanguage = 'en';
        languageButton.textContent = 'Lietuviškai';
        ltPromo.style.display = 'none';
    }
    
    // Re-render retreat cards with new language
    renderTravelCards();
    updatePageContent();
}

function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Update Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = t.nav.home;
    if (navLinks[1]) navLinks[1].textContent = t.nav.retreats;
    if (navLinks[2]) navLinks[2].textContent = t.nav.aboutCastellane;
    if (navLinks[3]) navLinks[3].textContent = t.nav.aboutHosts;
    if (navLinks[4]) navLinks[4].textContent = t.nav.contact;
    
    // Update Hero Section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    const heroTexts = document.querySelectorAll('.hero-text');
    if (heroTexts[0]) heroTexts[0].textContent = t.hero.text1;
    if (heroTexts[1]) heroTexts[1].textContent = t.hero.text2;
    if (heroTexts[2]) heroTexts[2].textContent = t.hero.text3;
    
    // Show/hide hero highlights based on language
    const heroHighlights = document.querySelector('.hero-highlights');
    if (heroHighlights) {
        heroHighlights.style.display = currentLanguage === 'en' ? 'block' : 'none';
    }
    
    const highlightsTitle = document.querySelector('.highlights-title');
    if (highlightsTitle) highlightsTitle.textContent = t.hero.highlightsTitle;
    
    // Update Retreats Section
    const sectionTitle = document.querySelector('.section-header h2');
    if (sectionTitle) sectionTitle.textContent = t.retreats.sectionTitle;
    
    const sectionSubtitle = document.querySelector('.section-header p');
    if (sectionSubtitle) sectionSubtitle.textContent = t.retreats.sectionSubtitle;
    
    // Update all Book Now buttons
    const bookButtons = document.querySelectorAll('.card-book-button');
    bookButtons.forEach(button => {
        button.textContent = t.retreats.bookNow;
    });
    
    // Update Footer
    const footerTagline = document.querySelector('.footer-logo p');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    
    const footerExplore = document.querySelector('.link-group h4');
    if (footerExplore) footerExplore.textContent = t.footer.explore;
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = t.footer.retreats;
    if (footerLinks[1]) footerLinks[1].textContent = t.footer.aboutCastellane;
    if (footerLinks[2]) footerLinks[2].textContent = t.footer.aboutHosts;
    if (footerLinks[3]) footerLinks[3].textContent = t.footer.contactUs;
    
    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) footerRights.textContent = t.footer.rights;
}
document.head.appendChild(style);