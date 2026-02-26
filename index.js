<!-- ======================================================== -->
<!-- 1. INDEX.HTML: Ise apni 'index.html' file mein dalein    -->
<!-- ======================================================== -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smile Princy - Quote of the Day</title>
    
    <!-- Tailwind CSS (Aap ise index.html mein hi rakhein) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- AGAR AAP ALAG CSS FILE BANA RAHE HAIN, TOH YE LINE USE KAREIN: -->
    <!-- <link rel="stylesheet" href="style.css"> -->

    <!-- ======================================================== -->
    <!-- 2. STYLE.CSS: Iske andar ka code 'style.css' mein dalein -->
    <!-- ======================================================== -->
    <style>
        /* Font aur background ka color set kar rahe hain */
        body {
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            background-color: #fdf2f8; /* Halka pink background */
        }
        
        /* Quote aane par jo animation hoga uska code */
        .fade-in {
            animation: fadeIn 0.4s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
    <!-- CSS YAHAN KHATAM HOTA HAI -->

</head>
<body class="min-h-screen flex items-center justify-center p-4">

    <!-- Main safed dibba (Card) jisme sab kuch hoga -->
    <div class="bg-white max-w-md w-full rounded-3xl shadow-lg p-8 text-center border-2 border-pink-200">
        
        <!-- Cat Avatar ka section -->
        <div class="flex justify-center mb-4">
            <!-- Robohash API se ek cute billi (cat) ka avatar -->
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-300 bg-pink-50 shadow-md">
                <img 
                    src="https://robohash.org/smileprincy?set=set4&size=200x200" 
                    alt="Cute Cat Avatar" 
                    class="w-full h-full object-cover mt-2"
                >
            </div>
        </div>
        
        <!-- Aapka Naam -->
        <h1 class="text-3xl font-bold text-pink-500 mb-6">
            Smile Princy
        </h1>

        <div class="w-full h-px bg-pink-100 mb-6"></div>

        <!-- Quote of the Day Title -->
        <h2 class="text-lg font-bold text-purple-400 uppercase tracking-widest mb-4">
            Quote of the Day
        </h2>
        
        <!-- Yahan par naya quote aayega -->
        <div id="quote-box" class="fade-in min-h-[120px] flex flex-col justify-center items-center px-4">
            <p id="quote-text" class="text-xl text-gray-700 font-medium mb-4">
                "Keep smiling, because life is a beautiful thing and there's so much to smile about."
            </p>
            <p id="quote-author" class="text-pink-600 font-bold w-full text-right">
                - Marilyn Monroe
            </p>
        </div>

        <!-- Naya quote lane wala button -->
        <button 
            id="new-quote-btn" 
            class="mt-8 w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-200 transform hover:scale-105 active:scale-95 text-lg"
        >
            Get a New Quote
        </button>

    </div>

    <!-- AGAR AAP ALAG JS FILE BANA RAHE HAIN, TOH YE LINE USE KAREIN: -->
    <!-- <script src="script.js"></script> -->

    <!-- ======================================================== -->
    <!-- 3. SCRIPT.JS: Iske andar ka code 'script.js' mein dalein -->
    <!-- ======================================================== -->
    <script>
        // English quotes ka list
        const quotes = [
            { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
            { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
            { text: "A smile is a curve that sets everything straight.", author: "Phyllis Diller" },
            { text: "Let us always meet each other with smile, for the smile is the beginning of love.", author: "Mother Teresa" },
            { text: "You're never fully dressed without a smile.", author: "Martin Charnin" },
            { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
        ];

        // HTML se elements ko pakad rahe hain
        const quoteTextElement = document.getElementById('quote-text');
        const quoteAuthorElement = document.getElementById('quote-author');
        const newQuoteBtn = document.getElementById('new-quote-btn');
        const quoteBox = document.getElementById('quote-box');

        // Naya quote lane ka function
        function displayNewQuote() {
            // Animation ko wapas chalane ke liye class hata rahe hain
            quoteBox.classList.remove('fade-in');
            
            // Ye browser ko batata hai ki page refresh kare (animation ke liye zaroori hai)
            void quoteBox.offsetWidth;
            
            // Random quote nikal rahe hain array mein se
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            // Naya quote text aur author set kar rahe hain
            quoteTextElement.textContent = `"${randomQuote.text}"`;
            quoteAuthorElement.textContent = `- ${randomQuote.author}`;
            
            // Animation class wapas laga rahe hain
            quoteBox.classList.add('fade-in');
        }

        // Button par click karne par function chalega
        newQuoteBtn.addEventListener('click', displayNewQuote);

        // Jab page pehli baar load hoga, tab apne aap ek quote aa jayega
        displayNewQuote();
    </script>
    <!-- JAVASCRIPT YAHAN KHATAM HOTA HAI -->

</body>
</html>