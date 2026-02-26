<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smile Princy - Quote of the Day</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="stylesheet" href="style.css">
</head>
<body class="min-h-screen flex items-center justify-center p-4">

    <div class="bg-white max-w-md w-full rounded-3xl shadow-lg p-8 text-center border-2 border-pink-200">
        
        <div class="flex justify-center mb-4">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-300 bg-pink-50 shadow-md">
                <img 
                    src="https://robohash.org/smileprincy?set=set4&size=200x200" 
                    alt="Cute Cat Avatar" 
                    class="w-full h-full object-cover mt-2"
                >
            </div>
        </div>
        
        <h1 class="text-3xl font-bold text-pink-500 mb-6">
            Smile Princy
        </h1>

        <div class="w-full h-px bg-pink-100 mb-6"></div>

        <h2 class="text-lg font-bold text-purple-400 uppercase tracking-widest mb-4">
            Quote of the Day
        </h2>
        
        <div id="quote-box" class="min-h-[120px] flex flex-col justify-center items-center px-4">
            <p id="quote-text" class="text-xl text-gray-700 font-medium mb-4">
                "Keep smiling..."
            </p>
            <p id="quote-author" class="text-pink-600 font-bold w-full text-right">
                - Author
            </p>
        </div>

        <button 
            id="new-quote-btn" 
            class="mt-8 w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-200 transform hover:scale-105 active:scale-95 text-lg"
        >
            Get a New Quote
        </button>

    </div>

    <script src="script.js"></script>
</body>
</html>
