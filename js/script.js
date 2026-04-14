// Navigation entre les pages
function navigateTo(page) {
    // Masquer toutes les pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.add('hidden'));

    // Afficher la page sélectionnée
    const selectedPage = document.getElementById(`${page}-page`);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // Mettre à jour les liens de navigation actifs
    updateActiveNav();
}

// Mettre à jour la navigation active
function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('nav-active'));
}

// Formations détails
const formationDetails = {
    'fitness': {
        title: 'Formation Fitness & Bien-être',
        desc: 'Apprenez les techniques modernes de fitness, nutrition et bien-être. Cette formation intensive de 3 mois vous permettra de maîtriser les fondamentaux et de devenir un professionnel du fitness.'
    },
    'digital': {
        title: 'Formation Marketing Digital',
        desc: 'Maîtrisez le marketing digital moderne, réseau sociaux, SEO, et gestion de contenu. Vous apprendrez les stratégies les plus efficaces pour développer votre présence en ligne.'
    },
    'management': {
        title: 'Formation Management & Leadership',
        desc: 'Développez vos compétences en leadership, gestion d\'équipe et prise de décision. Devenez un gestionnaire efficace et inspirant pour votre équipe.'
    }
};

function showFormationDetail(formation) {
    const detail = formationDetails[formation];
    if (detail) {
        document.getElementById('detail-title').textContent = detail.title;
        document.getElementById('detail-desc').textContent = detail.desc;
        
        // Trouver l'image appropriée
        let imgPath = 'docs/fitness.jpg';
        if (formation === 'digital') imgPath = 'docs/img.png';
        if (formation === 'management') imgPath = 'docs/mgm.png';
        
        document.getElementById('detail-image').src = imgPath;
        document.getElementById('formation-detail').classList.remove('hidden');
    }
}

function closeFormationDetail() {
    document.getElementById('formation-detail').classList.add('hidden');
}

// Fermer le modal en cliquant en dehors
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('formation-detail');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeFormationDetail();
        }
    });

    // Gestion du formulaire de formation
    const formationForm = document.getElementById('formation-form');
    if (formationForm) {
        formationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci! Nous avons reçu votre inscription. Vous recevrez bientôt nos coordonnées pour finaliser votre inscription.');
            formationForm.reset();
        });
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message! Nous vous contacterons très bientôt.');
            contactForm.reset();
        });
    }

    // Par défaut, afficher la page d'accueil
    navigateTo('accueil');
});

// Animation au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});