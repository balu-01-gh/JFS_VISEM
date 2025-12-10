// Data for the programming languages and their inventors, with image URLs
const languageData = [
    {
        name: "Python",
        inventor: "Guido van Rossum",
        details: "A high-level, interpreted, general-purpose programming language. Created in the late 1980s, its design philosophy emphasizes code readability with its notable use of significant indentation. Van Rossum served as the language's Benevolent Dictator For Life (BDFL) until July 2018.",
        image: "images/guido van russum.jpg"
    },
    {
        name: "JavaScript",
        inventor: "Brendan Eich",
        details: "A high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It was conceived by Brendan Eich at Netscape Communications in 1995 for the purpose of adding dynamic and interactive elements to websites.",
        image: "images/brendan elch.jpg"
    },
    {
        name: "Java",
        inventor: "James Gosling",
        details: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was originally developed by James Gosling at Sun Microsystems (now owned by Oracle) and released in 1995. It's known for its 'Write once, run anywhere' philosophy.",
        image: "images/James_Gosling.jpg"
    },
    {
        name: "C",
        inventor: "Dennis Ritchie",
        details: "A general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, while a static type system prevents unintended operations. Ritchie created it between 1972 and 1973 at Bell Labs.",
        image: "images/Dennis_Ritchie.jpg"
    },
    {
        name: "C++",
        inventor: "Bjarne Stroustrup",
        details: "A general-purpose programming language created as an extension of the C language. It was developed by Stroustrup at Bell Labs starting in 1979. It retains C's efficiency and adds features for object-oriented programming.",
        image: "images/Bjarne_Stroustrup.jpg"
    },
    {
        name: "PHP",
        inventor: "Rasmus Lerdorf",
        details: "A general-purpose scripting language especially suited to web development. It was originally created by Rasmus Lerdorf in 1994, and is now maintained by The PHP Group. It is one of the first server-side scripting languages.",
        image: "images/rasmus lerdorf.jpg"
    },
    {
        name: "Ruby",
        inventor: "Yukihiro 'Matz' Matsumoto",
        details: "An interpreted, high-level, general-purpose programming language that supports multiple programming paradigms. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan, focusing on simplicity and productivity.",
        image: "images/yukhiro.jpg"
    },
    {
        name: "Swift",
        inventor: "Chris Lattner",
        details: "A general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, and more. It was created in 2010 by Chris Lattner and released in 2014, designed to be safer and faster than Objective-C.",
        image: "images/chris-lattner.jpg"
    },
    {
        name: "Kotlin",
        inventor: "Dmitry Jemerov and Andrey Breslav (JetBrains Team)",
        details: "A cross-platform, statically typed, general-purpose programming language with type inference. It was designed by JetBrains to interoperate fully with Java, and is the preferred language for Android app development by Google.",
        image: "images/andrey berslev.jpg"
    },
    {
        name: "Go (Golang)",
        inventor: "Robert Griesemer, Rob Pike, and Ken Thompson",
        details: "A statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but has memory safety, garbage collection, structural typing, and CSP-style concurrency.",
        image: "images/go.jpg"
    }
];

// Get necessary DOM Elements
const languageSelect = document.getElementById('language-select');
const initialMessage = document.getElementById('initial-message');
const inventorCard = document.getElementById('inventor-card');
const languageNameEl = document.getElementById('language-name');
const inventorNameEl = document.getElementById('inventor-name');
const inventorImageEl = document.getElementById('inventor-image');
const inventorDetailsEl = document.getElementById('inventor-details');

// 1. Function to populate the select dropdown with languages
function populateLanguageSelect() {
    languageData.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.name;
        option.textContent = lang.name;
        languageSelect.appendChild(option);
    });
}

// 2. Function to handle selection and update the details panel
function selectLanguage(lang) {
    // A. Show/Hide elements
    initialMessage.classList.add('hidden');
    inventorCard.classList.remove('hidden');

    // B. Update the right panel content
    languageNameEl.textContent = lang.name;
    inventorNameEl.textContent = `Inventor: ${lang.inventor}`;
    inventorImageEl.src = lang.image;
    inventorImageEl.alt = `${lang.inventor}'s Photo`;
    inventorDetailsEl.textContent = lang.details;
}

// 3. Event listener for select dropdown change
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    
    if (selectedLanguage === '') {
        // Reset to initial message if no language is selected
        initialMessage.classList.remove('hidden');
        inventorCard.classList.add('hidden');
    } else {
        // Find the language data and display it
        const lang = languageData.find(l => l.name === selectedLanguage);
        if (lang) {
            selectLanguage(lang);
        }
    }
});

// Initialize the application when the page is loaded
document.addEventListener('DOMContentLoaded', populateLanguageSelect);