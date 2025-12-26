// Language Toggle Functionality
let currentLanguage = 'en'; // Default language is English

const heroGalleryOrder = [
    "./images/image03242.jpeg",
    "./images/image03245.jpeg",
    "./images/image03246.jpeg",
    "./images/image03248.jpeg",
    "./images/image03253.jpeg",
    "./images/image05054.jpeg",
    "./images/image05056.jpeg",
    "./images/image05060.jpeg",
    "./images/image05336.jpeg",
    "./images/image05339.jpeg",
    "./images/image05342.jpeg",
    "./images/image05343.jpeg",
    "./images/image05348.jpeg",
    "./images/image05451.jpeg",
    "./images/image05455.jpeg",
    "./images/image05456.jpeg",
    "./images/image05457.jpeg",
    "./images/image05458.jpeg",
    "./images/image05462.jpeg",
    "./images/image05463.jpeg",
    "./images/image05467.jpeg",
    "./images/image05470.jpeg",
    "./images/image05633.jpeg",
    "./images/image05634.jpeg",
    "./images/image05637.jpeg",
    "./images/image05638.jpeg",
    "./images/image05642.jpeg",
    "./images/image05643.jpeg",
    "./images/image05645.jpeg",
    "./images/image05647.jpeg",
    "./images/image05648.jpeg",
    "./images/image05649.jpeg",
    "./images/image05652.jpeg",
    "./images/image05653.jpeg",
    "./images/image05654.jpeg",
    "./images/image05655.jpeg",
    "./images/image05656.jpeg",
    "./images/image05658.jpeg",
    "./images/image05899.jpeg",
    "./images/image05900.jpeg",
    "./images/image05903.jpeg",
    "./images/image05904.jpeg",
    "./images/image05910.jpeg",
    "./images/image05912.jpeg",
    "./images/image05913.jpeg",
    "./images/image05914.jpeg",
    "./images/image05918.jpeg",
    "./images/image05919.jpeg",
    "./images/image05920.jpeg",
    "./images/image05922.jpeg",
    "./images/image05924.jpeg",
    "./images/image05928.jpeg",
    "./images/image05930.jpeg",
    "./images/image05934.jpeg",
    "./images/image05936.jpeg",
    "./images/image05937.jpeg",
    "./images/image05938.jpeg",
    "./images/image05954.jpeg",
    "./images/image05955.jpeg",
    "./images/image06367.jpeg",
    "./images/image06369.jpeg",
    "./images/image06370.jpeg",
    "./images/image06378.jpeg",
    "./images/image06379.jpeg",
    "./images/image06380.jpeg",
    "./images/image06381.jpeg",
    "./images/image06382.jpeg",
    "./images/image06383.jpeg",
    "./images/image06384.jpeg",
    "./images/image06385.jpeg",
    "./images/image06386.jpeg",
    "./images/image06389.jpeg",
    "./images/image06390.jpeg",
    "./images/image06391.jpeg",
    "./images/image06392.jpeg",
    "./images/image06393.jpeg",
    "./images/image06403.jpeg",
    "./images/image06404.jpeg",
    "./images/image06405.jpeg",
    "./images/image06406.jpeg"
];

function uniqueImages(arr) {
    const seen = new Set();
    return arr.filter((x) => {
        if (!x) return false;
        if (seen.has(x)) return false;
        seen.add(x);
        return true;
    });
}

function photosByNumber(numbers) {
    return uniqueImages(numbers.map((n) => heroGalleryOrder[n - 1]).filter(Boolean));
}

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
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 per person</strong><br><small style="color: #666;">4 days / 3 nights retreat</small>',
            images: photosByNumber([3, 8, 9, 13, 16, 18, 20, 34, 44, 45, 51, 56, 57, 60, 63, 64, 66, 67, 71, 72, 74, 80]),
            image: "./images/image05654.jpeg",
            highlights: [
                "Group of 4-6 people. Hands-on smoking workshop using Ausra's two smokers",
                "Preparation of local meats and fish",
                "Grilling techniques, marinades & smoky flavors",
                "Culinary creativity: the art of fire & taste",
                "2 apéro evenings with local cheeses, wine & conversation",
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
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 per person</strong><br><small style="color: #666;">4 days / 3 nights retreat</small>',
            images: photosByNumber([1, 2, 10, 11, 14, 19, 23, 28, 42, 53, 78, 69]),
            image: "./images/image05903.jpeg",
            highlights: [
                "Group of 4-6 people. Guided visit to a traditional perfume house in Grasse",
                "Workshop: create your own natural perfume (personal blend)",
                "Dinner with floral & aromatic accents",
                "2 apéro experiences pairing scent & taste",
                "Guided tours through local villages and nature trails",
                "Shopping in local perfume & artisan boutiques",
                "Accommodation, all meals, wines, and drinks included"
            ]
        },
        {
            id: 3,
            name: "Petardier Festival – Premium 4-Day Culinary & Cultural Escape in Castellane",
            description: "Experience an exceptional getaway in the heart of Provence during the legendary Petardier Festival in Castellane, where centuries-old traditions meet French gastronomy and lifestyle.",
            location: "Castellane, France",
            date: "January 30 – February 2",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 per person</strong><br><small style="color: #666;">Jan 30 – Feb 2</small>',
            images: uniqueImages(["./images/image05919.jpeg", ...photosByNumber([4, 5, 7, 12, 15, 22, 26, 27, 29, 32, 33, 37, 38, 48, 49, 50, 76])]),
            image: "./images/image05919.jpeg",
            highlights: [
                "Exclusive access to the Petardier Festival, Castellane’s iconic historical celebration",
                "Traditional Castellane meals, shared with locals",
                "Guided tours of Castellane and surrounding villages, exploring heritage, nature, and charming towns",
                "Exclusive culinary workshops: learn to bake artisanal baguettes and prepare quiches and regional specialties",
                "Moments of tasting, sharing, and conviviality, celebrating authentic Provence"
            ]
        }
    ],
    fr: [
        {
            id: 1,
            name: "SAGE SMOKE — Atelier fumage de viande & poisson",
            description: "Découvrez l’art ancestral du feu, de la fumée et de la conservation. Apprenez à saler, sécher, fumer et préparer vos propres spécialités locales. Savourez des arômes fumés et une cuisine créative en transformant des ingrédients simples en saveurs riches et complexes. Vivez la satisfaction de maîtriser des techniques d’autrefois qui vous relient à la tradition, à la nature et à l’essence d’une cuisine lente et consciente.<br><br><strong>Points forts du programme :</strong><br>• Atelier pratique de fumage avec les deux fumoirs d’Ausra<br>• Préparation de viandes et poissons locaux<br>• Techniques de grillades, marinades & saveurs fumées<br>• Créativité culinaire : l’art du feu et du goût<br>• 2 soirées apéro avec fromages locaux, vin & conversation<br>• Excursions locales guidées et visites de villages secrets<br>• Shopping dans des boutiques d’artisans locaux<br>• Hébergement, tous les repas et vins français inclus",
            location: "Castellane, France",
            date: "Séjour de 4 jours / 3 nuits",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 par personne</strong><br><small style="color: #666;">4 jours / 3 nuits</small>',
            images: photosByNumber([3, 8, 9, 13, 16, 18, 20, 34, 44, 45, 51, 56, 57, 60, 63, 64, 66, 67, 71, 72, 74, 80]),
            image: "./images/image05654.jpeg",
            highlights: [
                "Groupe de 4 à 6 personnes. Atelier pratique de fumage avec les deux fumoirs d’Ausra",
                "Préparation de viandes et poissons locaux",
                "Techniques de grillades, marinades & saveurs fumées",
                "Créativité culinaire : l’art du feu et du goût",
                "2 soirées apéro avec fromages locaux, vin & conversation",
                "Excursions locales guidées et visites de villages secrets",
                "Shopping dans des boutiques d’artisans locaux",
                "Hébergement, tous les repas, vins et boissons inclus"
            ]
        },
        {
            id: 2,
            name: "PARFUM & COULEUR — Grasse & Castellane",
            description: "Embarquez pour un voyage sensoriel mêlant parfum, couleur et création. Visitez Grasse, capitale mondiale du parfum, et composez votre propre fragrance signature. Découvrez les secrets des accords olfactifs, expérimentez des essences rares et repartez avec un parfum qui raconte votre histoire et votre esprit.<br><br><strong>Points forts du programme :</strong><br>• Visite guidée d’une maison de parfum traditionnelle à Grasse<br>• Atelier : créer votre parfum naturel (mélange personnel)<br>• Dîner aux accents floraux et aromatiques<br>• 2 expériences apéro associant parfum & goût<br>• Balades guidées dans les villages et sentiers nature<br>• Shopping dans des boutiques de parfums et d’artisans<br>• Hébergement, repas, vins et boissons inclus",
            location: "Grasse & Castellane, France",
            date: "Séjour de 4 jours / 3 nuits",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 par personne</strong><br><small style="color: #666;">4 jours / 3 nuits</small>',
            images: photosByNumber([1, 2, 10, 11, 14, 19, 23, 28, 42, 53, 78, 69]),
            image: "./images/image05903.jpeg",
            highlights: [
                "Groupe de 4 à 6 personnes. Visite guidée d’une maison de parfum traditionnelle à Grasse",
                "Atelier : créer votre parfum naturel (mélange personnel)",
                "Dîner aux accents floraux et aromatiques",
                "2 expériences apéro associant parfum & goût",
                "Balades guidées dans les villages et sentiers nature",
                "Shopping dans des boutiques de parfums et d’artisans",
                "Hébergement, repas, vins et boissons inclus"
            ]
        },
        {
            id: 3,
            name: "Festival du Petardier – escapade premium culinaire & culturelle (4 jours) à Castellane",
            description: "Vivez une escapade exceptionnelle au cœur de la Provence pendant le légendaire Festival du Petardier à Castellane, où traditions séculaires riment avec gastronomie et art de vivre.",
            location: "Castellane, France",
            date: "30 janvier – 2 février",
            time: "Check-in: 3:00 PM, Check-out: 10:00 AM",
            price: '<strong style="color: var(--brand-primary); font-size: 1.3rem;">$2800 par personne</strong><br><small style="color: #666;">30 janv. – 2 fév.</small>',
            images: uniqueImages(["./images/image05919.jpeg", ...photosByNumber([4, 5, 7, 12, 15, 22, 26, 27, 29, 32, 33, 37, 38, 48, 49, 50, 76])]),
            image: "./images/image05919.jpeg",
            highlights: [
                "Accès exclusif au Festival du Petardier, célébration historique emblématique de Castellane",
                "Repas traditionnels de Castellane partagés avec les habitants",
                "Visites guidées de Castellane et des villages alentours : patrimoine, nature et charme provençal",
                "Ateliers culinaires exclusifs : baguettes artisanales, quiches et spécialités régionales",
                "Moments de dégustation, de partage et de convivialité – l’authenticité de la Provence"
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
            time: "",
            price: '<span style="text-decoration: line-through; color: #999;">€2800</span> <span style="color: var(--brand-primary); font-weight: bold;">80% nuolaida</span><br><strong style="color: var(--brand-primary); font-size: 1.3rem;">€600 asmeniui</strong><br><small style="color: #666;">Visa kaina</small>',
            images: photosByNumber([3, 8, 9, 13, 16, 18, 20, 34, 44, 45, 51, 56, 57, 60, 63, 64, 66, 67, 71, 72, 74, 80]),
            image: "./images/image05654.jpeg",
            highlights: [
                "Per šią kelionę: IŠMOKSITE \n Paruošti žuvį ir mėsą pagal tradicines prancūziškas technikas. \n Rūkyti žuvį ir mėsą šaltu ir karštu būdu. \n Gaminti prancūzišką pâté, kepti savo duoną ir bagetę. \n Virti legendinę Bouillabaisse sriubą. \n Gaminti tapenade ir kitus regioninius skanėstus. \n SUŽINOSITE \n Rūkymo paslaptis: medienos rūšys, temperatūros, laikai. \n Kaip atrinkti, brandinti, marinuoti ir džiovinti mėsą bei žuvį. \n Kaip derinti patiekalus su vietiniais vynais ir sūriais. \n Provanso kulinarinės kultūros pagrindus. \n PAMATYSITE \n Įspūdingą Verdono kanjoną, St. Croix ežerą ir kalnų kaimelius. \n Provanso gamtos grožį ir kepyklas. \n Rūkymo procesus nuo ruošimo iki degustacijos."
            ]
        },
        {
            id: 2,
            name: "KVEPALAI IR SPALVOS — Grasse ir Castellane",
            description: "4 dienų kvapų ir skonių kelionė į Castellane",
            location: "Grasse ir Castellane, Prancūzija",
            date: "4 dienų / 3 naktų kelionė",
            time: "",
            price: '<span style="text-decoration: line-through; color: #999;">€2800</span> <span style="color: var(--brand-primary); font-weight: bold;">80% nuolaida</span><br><strong style="color: var(--brand-primary); font-size: 1.3rem;">€600 asmeniui</strong><br><small style="color: #666;">Visa kaina</small>',
            images: photosByNumber([1, 2, 10, 11, 14, 19, 23, 28, 42, 53, 78, 69]),
            image: "./images/image05903.jpeg",
            description: "Leiskitės į pojūčių kelionę, kurioje susipina kvapai, spalvos ir kūryba. Aplankykite Grasse – pasaulio parfumerijos sostinę – ir susikurkite savo unikalų aromatą. Atraskite kvapų derinimo paslaptis, išbandykite retas esencijas ir parsivežkite kvapą, atspindintį jūsų istoriją bei dvasią.",
            highlightsIntro: "Kelionė pilna kvapų ir prancūziškų skanumynų\n\nQuiche, Bourguignon, Tartiflette, Taboulé, Foie Gras, austres, sūriai, vynas, šampanas…\nKelionė, kurios tikrai nepamiršite!\n\nVos 1 val. 30 min. kelio – ir Jūs L’Occitane gamykloje.\nĮspūdinga ekskursija, kurios metu sužinosite apie prekės ženklo istoriją, ingredientus ir gamybos procesus.\nPo jos – boutique’as su fabriko kainomis – tobula proga parsivežti kvapnių atradimų.\n\nAplankysime ir Galimard / Fragonard Grasse – vietą, kur gimė Prancūzijos parfumerija.\nSusipažinsite su tradicine kvepalų gamyba, sužinosite, kaip gimsta aromatai, ir pasinersite į kvapų istorijas pačioje Grasse širdyje.\n\nKą patirsite šios kelionės metu\n\nTai ne tik degustacinė ir pažintinė kelionė, bet ir jutiminė patirtis, leidžianti atsipalaiduoti ir atitrūkti nuo kasdienybės.\nJūsų lauks dažų liejimas ant drobių – kūrybinis procesas be taisyklių, kuriame spalvos, judesys ir emocijos susilieja į unikalų rezultatą. Ši veikla padės paleisti kontrolę, pasinerti į momentą ir sukurti savo asmeninį kelionės prisiminimą.\n\nSužinosite, kaip gyvena prancūzai, kokios jų tradicijos, etiketas ir elgesys prie stalo.\nIšmoksite, kada valgomas sūris, kaip derinti skonius ir kaip ragauti taip, kaip tai daro vietiniai.\n\nAtraskite, kaip atskirti vynus iš skirtingų Prancūzijos regionų, kuo jie išsiskiria ir kaip juos teisingai derinti prie maisto.",
            highlights: [
                "1 diena: Atvykimas į Nicą, kelionė į Castellane, įsikūrimas ir karališka prancūziška vakarienė.",
                "2 diena: Pusryčiai. Kelionė per Verdono kanjoną, St. Croix ežeras, kalnų kaimeliai, piknikas gamtoje ir vakarienė Castellane.",
                "3 diena: Pusryčiai. Vizitas į L’Occitane gamyklą ir muziejų, piknikas kalnuose, grįžimas ir vakarienė.",
                "4 diena: Pusryčiai. Kelionė į Grasse, apsilankymas Fragonard parfumerijoje, pietūs kelyje, išvykimas į Nicos oro uostą."
            ]
        },
        {
            id: 3,
            name: "Petardier šventė – prabangus 4 dienų kulinarinis ir kultūrinis poilsis Castellane",
            description: "Patirkite išskirtinę akimirką Provanso širdyje, dalyvaudami legendinėje Petardier šventėje Castellane, kur susilieja senovinės tradicijos, prancūziška gastronomija ir gyvenimo džiaugsmas.",
            location: "Castellane, Prancūzija",
            date: "sausio 30 – vasario 2",
            time: "",
            price: '<span style="text-decoration: line-through; color: #999;">€2800</span> <span style="color: var(--brand-primary); font-weight: bold;">80% nuolaida</span><br><strong style="color: var(--brand-primary); font-size: 1.3rem;">€600 asmeniui</strong><br><small style="color: #666;">sausio 30 – vasario 2</small>',
            images: uniqueImages(["./images/image05919.jpeg", ...photosByNumber([4, 5, 7, 12, 15, 22, 26, 27, 29, 32, 33, 37, 38, 48, 49, 50, 76])]),
            image: "./images/image05919.jpeg",
            highlights: [
                "Išskirtinė prieiga prie Petardier šventės, Castellane istorinio renginio",
                "Tradiciniai Castellane patiekalai, dalinami su vietiniais gyventojais",
                "Ekskursijos po Castellane ir apylinkes, atrandant paveldą, gamtą ir žavingus kaimelius",
                "Išskirtiniai kulinariniai užsiėmimai: kepkite rankų darbo bagetes ir gaminkite quiches bei regioninius patiekalus",
                "Degustacijos, bendrystė ir malonūs potyriai, švenčiant autentišką Provansą"
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
    const storedLanguage = (() => {
        try {
            return localStorage.getItem('language');
        } catch (e) {
            return null;
        }
    })();

    if (storedLanguage) {
        currentLanguage = storedLanguage;
    }

    setLanguage(currentLanguage);
    setupEventListeners();
    setupScrollEffects();
    setupGalleryImageErrorHandling();
});

function setupGalleryImageErrorHandling() {
    const mainImage = document.getElementById('mainGalleryImage');
    const thumbnails = Array.from(document.querySelectorAll('.gallery-thumbnails .thumbnail'));

    const isSmallScreen = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const maxThumbnailsOnMobile = 18;

    thumbnails.forEach((thumb) => {
        if (!thumb.getAttribute('loading')) {
            thumb.setAttribute('loading', 'lazy');
        }

        if (!thumb.getAttribute('decoding')) {
            thumb.setAttribute('decoding', 'async');
        }

        thumb.addEventListener('error', () => {
            thumb.style.display = 'none';
        }, { once: true });

        if (thumb.complete && thumb.naturalWidth === 0) {
            thumb.style.display = 'none';
        }
    });

    if (isSmallScreen) {
        const visibleThumbs = thumbnails.filter(t => t.style.display !== 'none');
        visibleThumbs.slice(maxThumbnailsOnMobile).forEach((thumb) => {
            thumb.style.display = 'none';
        });
    }

    if (mainImage) {
        mainImage.addEventListener('error', () => {
            const firstVisibleThumb = thumbnails.find(t => t.style.display !== 'none' && t.getAttribute('src'));
            if (firstVisibleThumb) {
                mainImage.src = firstVisibleThumb.getAttribute('src');
            }
        }, { once: true });

        if (mainImage.complete && mainImage.naturalWidth === 0) {
            const firstVisibleThumb = thumbnails.find(t => t.style.display !== 'none' && t.getAttribute('src'));
            if (firstVisibleThumb) {
                mainImage.src = firstVisibleThumb.getAttribute('src');
            }
        }
    }
}

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

        updatePageContent();
    }, 500);
}

// Create individual travel card
function createTravelCard(retreat, index) {
    const card = document.createElement('div');
    card.className = 'travel-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    card.style.opacity = '0';

    const t = translations[currentLanguage];
    const bookNowLabel = t && t.retreats && t.retreats.bookNow ? t.retreats.bookNow : 'Book Now';

    const highlightsIntro = retreat.highlightsIntro
        ? `<p class="travel-card-highlights-intro" style="white-space: pre-line; color: #111827; margin: 0 0 0.75rem; line-height: 1.6;">${retreat.highlightsIntro}</p>`
        : '';
    
    const highlightsList = retreat.highlights && retreat.highlights.length > 0 
        ? `<ul class="travel-card-highlights">${retreat.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` 
        : '';

    const timeRow = retreat.time
        ? `
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${retreat.time}</span>
                    </div>
        `
        : '';
    
    card.innerHTML = `
        <img src="${retreat.image}" alt="${retreat.name}" class="travel-card-image" loading="lazy">
        <div class="travel-card-content">
            <div>
                <h3 class="travel-card-title">${retreat.name}</h3>
                <p class="travel-card-description">${retreat.description}</p>
                ${highlightsIntro}
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
                    ${timeRow}
                </div>
                <div class="travel-card-price">${retreat.price}</div>
                <button class="card-book-button" onclick="handleCardClickById(${retreat.id})">${bookNowLabel}</button>
            </div>
        </div>
    `;
    
    return card;
}

function handleCardClick(retreat) {
    console.log('Card clicked:', retreat.name);
    // Here you could open a modal, navigate to a detail page, or trigger a booking flow
    showBookingModal(retreat);
}

function handleCardClickById(retreatId) {
    const retreats = retreatsData[currentLanguage] || retreatsData.en;
    const retreat = Array.isArray(retreats) ? retreats.find((r) => r && r.id === retreatId) : null;
    if (!retreat) {
        console.warn('Retreat not found for id:', retreatId);
        return;
    }

    handleCardClick(retreat);
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
    
    const modalImages = Array.isArray(retreat.images) && retreat.images.length
        ? retreat.images
        : (retreat.image ? [retreat.image] : []);

    const galleryHtml = modalImages.length
        ? `
        <div style="margin-bottom: 1rem;">
            <img id="modalMainImage" src="${modalImages[0]}" alt="${retreat.name}" style="width: 100%; height: auto; border-radius: 8px; background: #f3f4f6; object-fit: cover; aspect-ratio: 16 / 9;">
            ${modalImages.length > 1 ? `
                <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-top: 0.75rem; -webkit-overflow-scrolling: touch;">
                    ${modalImages.map((src, i) => `<img src="${src}" alt="${retreat.name} ${i + 1}" style="width: 64px; height: 64px; border-radius: 6px; object-fit: cover; cursor: pointer; flex: 0 0 auto; border: 2px solid ${i === 0 ? 'var(--brand-primary)' : 'transparent'};" onclick="document.getElementById('modalMainImage').src='${src}'; Array.from(this.parentNode.children).forEach((el)=>el.style.borderColor='transparent'); this.style.borderColor='var(--brand-primary)';">`).join('')}
                </div>
            ` : ''}
        </div>
        `
        : '';

    modalContent.innerHTML = `
        ${galleryHtml}
        <h2 style="color: #000000; margin-bottom: 1rem; font-size: 1.5rem;">${t.title}</h2>
        <h3 style="margin-bottom: 0.5rem; color: #000000;">${retreat.name}</h3>
        <p style="color: #333333; margin-bottom: 1.5rem;">${retreat.description}</p>
        <div style="background: var(--brand-primary-soft); border: 1px solid rgba(185, 119, 34, 0.25); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <p style="color: var(--brand-primary); margin: 0; line-height: 1.7; font-weight: 600;">${t.instructions}</p>
        </div>
        <div>
            <button type="button" class="thank-you-button cta-button" style="width: 100%;">${t.thankYou}</button>
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
            if (document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
        }, 300);
    };
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    const thankYouBtn = modalContent.querySelector('.thank-you-button');
    if (thankYouBtn) {
        thankYouBtn.addEventListener('click', () => {
            closeModal();
        });
    }
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
            aboutHosts: 'About Hosts',
            contact: 'Contact'
        },
        hero: {
            title: 'Discover <span class="highlight">Castellane, France</span>',
            subtitle: 'A Hidden Gem in the Heart of Provence',
            text1: 'Nestled between lavender fields and the turquoise waters of the Verdon River, Castellane invites you to slow down, breathe deeply, and reconnect with what truly matters. Over five unforgettable days and four restorative nights, immerse yourself in a sensorial journey that blends nature, art, wellness, and the timeless charm of Southern France.',
            text2: 'Wake up to the scent of wild herbs and the distant echo of church bells from the Notre-Dame du Roc chapel perched high above the village. Wander through cobbled streets lined with pastel façades, taste the region\'s finest cheeses and rosé, and let the golden Provençal light awaken your creativity and calm.',
            text3: 'Our exclusive retreats combine luxury comfort with authentic local experiences — from guided nature walks and riverside picnics to artisan workshops and mindful evenings under the stars. Whether you come to paint, heal, meditate, or simply rest, Castellane offers the perfect harmony of adventure and serenity.',
            highlightsTitle: 'Highlights',
            highlightsSection: {
                title: '✨ Highlights',
                items: [
                    'Boutique accommodation with panoramic mountain views',
                    'Gourmet Provençal cuisine and local wines',
                    'Personalized wellness or creative workshops',
                    'Visits to Grasse, the world\'s perfume capital',
                    'Time to explore the Verdon Gorges and lavender valleys'
                ],
                strong: '🌸 4 Days / 3 Nights of Reconnection and Renewal',
                em: 'Let Provence remind you how good life can feel.',
                text: 'Book your retreat in Castellane today — where nature, color, and calm meet.'
            },
            cta: 'Book now'
        },
        retreats: {
            sectionTitle: 'Our Retreats',
            sectionSubtitle: 'Find your perfect escape in the heart of Provence',
            bookNow: 'More information'
        },
        bookingModal: {
            title: 'Inquiry',
            firstName: 'First Name',
            lastName: 'Last Name',
            phone: 'Phone',
            email: 'Email',
            people: 'Number of People',
            date: 'Preferred Date',
            confirmBooking: 'Ask for details',
            instructions: 'Please send your inquiry to info@4apero.com, add your name, email, number of people, and desired dates. And we will get back to you as soon as possible.',
            thankYou: 'Thank you'
        },
        aboutHostModal: {
            title: 'About Your Host',
            bio1: 'I am Ausra, professional artist of painting, drawing, calligraphy and stained glass art, deeply empowered by holistic conjuncture of spiritual human senses in everyday human life: touch, sight, hearing, smell, taste, extrasensory perception.',
            bio2: 'Painting by inner emotional sense, rising from music sounds&observing performance of musicians is an inseparable part of my compositions. Most surprising creative collaborations were experienced with Lille National Orchestra from France in 2009 by creating a line of peintures « Traits d\'Orchestre » and with Dayton Philharmonic Orchestra from USA in 2017, called « Symphony of Lines »',
            bio3: 'My passion for drawing and painting, combined with sacred process of the unconscious mind flows into the colors, shapes, textures and different techniques turned out into bravely and ambitiously experiment in stained glass art, finishing «Stained glass» and «Art therapy» studies in France and finally opening the « French stained glass » studio in Singapore in 2013.',
            bio4: 'Living in 4 totally different countries (Lithuania, France, USA, and Singapore), gathering impressions and experiences, made a deep imprint to my art: joyful soul of different cultures and traditions, expanded boundaries of world vision, linking universal human senses in vivid compositions.',
            bio5: 'While traveling abroad, inspiration of colors, tones and shapes revealed my passion for cooking and food smoking. I\'m certified in food protection in Ohio, USA. Also for the last 14 years I have been teaching a drawing, painting and creation of stained glass in Universities and private schools in France, Singapore and USA.'
        },
        footer: {
            tagline: 'Your gateway to Castellane, Provence region, France',
            explore: 'Explore',
            retreats: 'Retreats',
            aboutHosts: 'About Hosts',
            contactUs: 'Contact Us',
            rights: '© 2025 4Apero. All rights reserved.'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            retreats: 'Séjours',
            aboutHosts: 'À propos des hôtes',
            contact: 'Contact'
        },
        hero: {
            title: 'Découvrez <span class="highlight">Castellane, France</span>',
            subtitle: 'Un trésor caché au cœur de la Provence',
            text1: 'Entre champs de lavande et eaux turquoise du Verdon, Castellane vous invite à ralentir, respirer et vous reconnecter à l’essentiel. Pendant quatre jours inoubliables et trois nuits réparatrices, vivez une expérience sensorielle qui mêle nature, art, bien-être et charme intemporel du Sud de la France.',
            text2: 'Réveillez-vous au parfum des herbes sauvages et au lointain écho des cloches de la chapelle Notre-Dame du Roc, perchée au-dessus du village. Flânez dans les ruelles pavées aux façades pastel, goûtez les meilleurs fromages et rosés de la région, et laissez la lumière dorée de Provence éveiller votre créativité et votre calme.',
            text3: 'Nos séjours exclusifs allient confort et expériences locales authentiques — randonnées guidées, pique-niques au bord de l’eau, ateliers artisanaux et soirées apaisantes sous les étoiles. Que vous veniez pour créer, vous ressourcer, méditer ou simplement vous reposer, Castellane offre l’équilibre parfait entre aventure et sérénité.',
            highlightsTitle: 'Temps forts',
            highlightsSection: {
                title: '✨ Temps forts',
                items: [
                    'Hébergement de charme avec vue panoramique sur les montagnes',
                    'Cuisine provençale et vins locaux',
                    'Ateliers bien-être ou créatifs personnalisés',
                    'Visites de Grasse, capitale mondiale du parfum',
                    'Exploration des Gorges du Verdon et des vallées de lavande'
                ],
                strong: '🌸 4 jours / 3 nuits pour se reconnecter et se régénérer',
                em: 'Laissez la Provence vous rappeler comme la vie peut être douce.',
                text: 'Réservez votre séjour à Castellane — là où la nature, la couleur et le calme se rencontrent.'
            },
            cta: 'Réserver'
        },
        retreats: {
            sectionTitle: 'Nos séjours',
            sectionSubtitle: 'Trouvez votre escapade idéale au cœur de la Provence',
            bookNow: 'Plus d’informations'
        },
        bookingModal: {
            title: 'Demande',
            firstName: 'Prénom',
            lastName: 'Nom',
            phone: 'Téléphone',
            email: 'E-mail',
            people: 'Nombre de personnes',
            date: 'Dates souhaitées',
            confirmBooking: 'Demander des détails',
            instructions: 'Veuillez envoyer votre demande à info@4apero.com en indiquant votre nom, votre e-mail, le nombre de personnes et les dates souhaitées. Nous vous répondrons dès que possible.',
            thankYou: 'Merci'
        },
        aboutHostModal: {
            title: 'À propos de votre hôte',
            bio1: 'Je suis Ausra, artiste professionnelle (peinture, dessin, calligraphie et vitrail), profondément inspirée par l’harmonie des sens : le toucher, la vue, l’ouïe, l’odorat, le goût et la perception extrasensorielle.',
            bio2: 'Peindre à partir de l’émotion intérieure, nourrie par la musique et l’observation des musiciens, fait partie intégrante de mon travail. J’ai vécu des collaborations créatives marquantes avec l’Orchestre National de Lille (France) en 2009 (« Traits d\'Orchestre ») et avec le Dayton Philharmonic Orchestra (USA) en 2017 (« Symphony of Lines »).',
            bio3: 'Ma passion pour le dessin et la peinture, associée au flux de l’inconscient, m’a menée vers l’expérimentation du vitrail : études de « Stained glass » et « Art therapy » en France, puis ouverture du studio « French stained glass » à Singapour en 2013.',
            bio4: 'Vivre dans quatre pays très différents (Lituanie, France, États‑Unis et Singapour) a profondément marqué mon art : des cultures variées, des traditions et une vision du monde élargie, réunies dans des compositions vivantes.',
            bio5: 'En voyage, les couleurs et les formes ont aussi révélé ma passion pour la cuisine et le fumage. Je suis certifiée en sécurité alimentaire (Ohio, USA). Depuis 14 ans, j’enseigne le dessin, la peinture et le vitrail dans des universités et écoles privées en France, à Singapour et aux États‑Unis.'
        },
        footer: {
            tagline: 'Votre porte d’entrée vers Castellane, en Provence, France',
            explore: 'Explorer',
            retreats: 'Séjours',
            aboutHosts: 'À propos des hôtes',
            contactUs: 'Nous contacter',
            rights: '© 2025 4Apero. Tous droits réservés.'
        }
    },
    lt: {
        nav: {
            home: 'Pradžia',
            retreats: 'Kelionės',
            aboutHosts: 'Apie šeimininkus',
            contact: 'Kontaktai'
        },
        hero: {
            title: 'Castellane <span class="highlight">Vartai į Verdoną</span>',
            subtitle: 'Paslėptas brangakmenis Provanso širdyje',
            text1: 'Castellane yra žavingas miestelis Pietų Prancūzijoje, įsikūręs Provence-Alpes-Côte d’Azur regione, Alpes-de-Haute-Provence departamente. Miestelis stovi 724 m virš jūros lygio, prie Verdono upės, šalia vieno įspūdingiausių kanjonų Europoje - Gorges du Verdon.',
            text2: 'Senamiestyje galima pasivaikščioti siaurų akmenimis grįstų gatvelių labirintais, aplankyti Notre-Dame du Roc bažnyčią ant uolos virš miesto ir pajusti autentišką pietų Prancūzijos atmosferą. Castellane žiemą gyvena apie 1 200 žmonių, tačiau vasaros sezonu miestelis atgyja turistų deka iki 30 000.',
            text3: 'Turistams ir nuotykių ieškotojams: \n Raftingas, kanojos ir kitos vandens pramogos Verdon upėje \nŽygiai, kopimai ir fotografavimas Gorges du Verdon kanjone. \nLevandų laukų vizitai ir mažų kaimelių aplankymas. \nVietiniai turgeliai ir amatininkų dirbtuvės.',
            text4: 'Castellane – ideali vieta jungiati gamtą, kultūrą, gastronomiją ir sportą.',
            highlightsTitle: 'Pagrindinis'
        },
        retreats: {
            sectionTitle: 'Mūsų kelionės',
            sectionSubtitle: 'Raskite savo tobulą pabėgimą Provanso širdyje',
            bookNow: 'Užklausimas'
        },
        bookingModal: {
            title: 'Užklausimas',
            firstName: 'Vardas',
            lastName: 'Pavardė',
            phone: 'Telefonas',
            email: 'El. paštas',
            people: 'Žmonių skaičius',
            date: 'Pageidaujama data',
            confirmBooking: 'Klausti',
            instructions: 'Prašome siųsti užklausą į info@4apero.com, nurodykite savo vardą, el. paštą, žmonių skaičių ir pageidaujamas datas. Atsakysime kuo greičiau.',
            thankYou: 'Ačiū'
        },
        aboutHostModal: {
            title: 'Laiškas nuo jūsų šeimininkės Aušros',
            bio1: 'Sveiki, aš esu Aušra, grafikė ir vitražistė. Didžiausia mano kūrybos įkvėpimo jėga visada buvo kelionės, žmonės ir įvairių pasaulio grožio formų įvairovė.',
            bio2: 'Gyvenau ir kūriau Lietuvoje, Prancūzijoje, JAV ir Singapūre – keturiose labai skirtingose šalyse, kurios paliko gilių įspūdžių ir atvėrė mano kūrybai bei virtuvei dar platesnį pasaulį. Laikui bėgant menas natūraliai susijungė su mano meile maistui. Gastronomija, degustacijos ir vietinių skonių atradimas tapo antra mano kūrybos forma.',
            bio3: 'Jau penkerius metus kartu su vyru prancūzu, gyvename Castellane, Pietų Prancūzijoje. Mūsų namai visada atviri svečiams. Čia dalijamės tuo, ką patys labiausiai mylime: ramybe, kalnų grožiu, naminiu maistu ir prancūziškais atradimais.',
            bio4: 'Kviečiu atvykti taip, tarsi lankytumėtės pas seniai matytą gerą draugą – šiltai, paprastai ir nuoširdžiai. Aš pasirūpinsiu viskuo, o jums liks tik mėgautis Pietų Prancūzijos ritmu ir skoniais.',
            bio5: 'Esu sertifikuota maisto saugos srityje, todėl užtikrinsiu, kad viskas būtų ne tik skanu, bet ir saugu. Labai jūsų lauksime, Aušra'
        },
        footer: {
            tagline: 'Jūsų vartai į Castellane, Provanso regioną, Prancūziją',
            explore: 'Naršyti',
            retreats: 'Kelionės',
            aboutHosts: 'Apie šeimininkus',
            contactUs: 'Susisiekite su mumis',
            rights: '© 2025 4Apero. Visos teisės saugomos.'
        }
    }
};

function setLanguage(lang) {
    const nextLang = translations[lang] ? lang : 'en';
    currentLanguage = nextLang;

    try {
        localStorage.setItem('language', currentLanguage);
    } catch (e) {
        // ignore
    }

    const ltPromo = document.querySelector('.lt-promo');
    if (ltPromo) ltPromo.style.display = currentLanguage === 'lt' ? 'block' : 'none';

    document.querySelectorAll('.language-toggle[data-lang]').forEach((btn) => {
        const isActive = btn.getAttribute('data-lang') === currentLanguage;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

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
    if (navLinks[2]) navLinks[2].textContent = t.nav.aboutHosts;
    if (navLinks[3]) navLinks[3].textContent = t.nav.contact;
    
    // Update Hero Section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

    const heroDescription = document.querySelector('.hero-description');
    const heroHighlights = document.querySelector('.hero-highlights');

    const heroTexts = heroDescription
        ? Array.from(heroDescription.querySelectorAll('.hero-text')).filter((el) => !el.closest('.hero-highlights'))
        : [];

    if (heroTexts[0]) heroTexts[0].textContent = t.hero.text1;
    if (heroTexts[1]) heroTexts[1].textContent = t.hero.text2;
    if (heroTexts[2]) heroTexts[2].textContent = t.hero.text3;

    heroTexts.forEach((el) => {
        if (typeof el.textContent === 'string' && el.textContent.includes('\n')) {
            el.style.whiteSpace = 'pre-line';
        } else {
            el.style.whiteSpace = '';
        }
    });

    if (t.hero && typeof t.hero.text4 === 'string' && t.hero.text4.trim().length > 0 && heroDescription) {
        const heroText4El = heroDescription.querySelector('.hero-text-4');
        if (heroText4El) {
            heroText4El.textContent = t.hero.text4;
            heroText4El.style.display = '';
            if (t.hero.text4.includes('\n')) {
                heroText4El.style.whiteSpace = 'pre-line';
            } else {
                heroText4El.style.whiteSpace = '';
            }
        } else if (heroTexts[3]) {
            heroTexts[3].textContent = t.hero.text4;
        } else {
            const newP = document.createElement('p');
            newP.className = 'hero-text hero-text-4';
            newP.textContent = t.hero.text4;
            if (heroHighlights && heroHighlights.parentNode === heroDescription) {
                heroDescription.insertBefore(newP, heroHighlights);
            } else {
                heroDescription.appendChild(newP);
            }
        }
    } else {
        const heroDescriptionEl = document.querySelector('.hero-description');
        const heroText4El = heroDescriptionEl ? heroDescriptionEl.querySelector('.hero-text-4') : null;
        if (heroText4El) heroText4El.style.display = 'none';
    }
    
    const ctaButtonSpan = document.querySelector('.cta-button span');
    if (ctaButtonSpan && t.hero && typeof t.hero.cta === 'string') {
        ctaButtonSpan.textContent = t.hero.cta;
    } else if (ctaButtonSpan && currentLanguage === 'en') {
        ctaButtonSpan.textContent = 'Book now';
    }

    // Show/hide hero highlights based on language
    const heroHighlightsEl = document.querySelector('.hero-highlights');
    if (heroHighlightsEl) {
        heroHighlightsEl.style.display = (currentLanguage === 'en' || currentLanguage === 'fr') ? 'block' : 'none';
    }
    
    const highlightsTitle = document.querySelector('.highlights-title');
    if (highlightsTitle) highlightsTitle.textContent = t.hero.highlightsTitle;

    const highlightsSection = t.hero && t.hero.highlightsSection ? t.hero.highlightsSection : null;
    if (heroHighlightsEl && highlightsSection) {
        const h4 = heroHighlightsEl.querySelector('h4');
        if (h4) h4.textContent = highlightsSection.title;

        const lis = Array.from(heroHighlightsEl.querySelectorAll('ul li'));
        if (Array.isArray(highlightsSection.items)) {
            lis.forEach((li, idx) => {
                if (typeof highlightsSection.items[idx] === 'string') {
                    li.textContent = highlightsSection.items[idx];
                }
            });
        }

        const ps = Array.from(heroHighlightsEl.querySelectorAll('p.hero-text'));
        if (ps[0] && highlightsSection.strong) ps[0].innerHTML = `<strong>${highlightsSection.strong}</strong>`;
        if (ps[1] && highlightsSection.em) ps[1].innerHTML = `<em>${highlightsSection.em}</em>`;
        if (ps[2] && highlightsSection.text) ps[2].textContent = highlightsSection.text;
    }
    
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
    if (footerLinks[1]) footerLinks[1].textContent = t.footer.aboutHosts;

    const footerContactLabel = document.querySelector('.footer-contact-label');
    if (footerContactLabel) footerContactLabel.textContent = `${t.footer.contactUs}:`;
    
    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) footerRights.textContent = t.footer.rights;
}

// Gallery image change function
function changeGalleryImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainGalleryImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (thumbnail) {
        thumbnail.classList.add('active');
    }
}

document.head.appendChild(style);