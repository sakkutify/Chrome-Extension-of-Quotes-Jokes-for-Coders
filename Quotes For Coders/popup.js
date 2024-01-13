// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quote-text');
    const refreshButton = document.getElementById('refresh-button');
  
    // Your array of quotes
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "The best error message is the one that never shows up.", 
        "Code as if the next developer is you, but with way less coffee.", 
        "The only way to do great work is to love what you do.", 
        "Code, eat, sleep, repeat - the coder's life cycle.",
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        
        "Why did the programmer quit his job? He didn't get arrays.",
        "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
        "A programmer's favorite song? 0 to 99 problems, but a glitch ain't one.",
        "You are not a machine. Learn to rest, not to quit.",
        
        "Code is where the real magic happens.", 
        "The only code that is bug-free is the one that is never written.", 
        "Code like a butterfly, test like a bee.",
        "Why do Java developers wear glasses? Because they don't see sharp.",
        
        "Why did the programmer go broke? Because he used up all his cache.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "What's a programmer's favorite game? Hide and seek - with bugs.",
        "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
        "The best way to predict the future is to create it." ,
        "Don’t watch the clock; do what it does. Keep going." ,
        "Code is like humor. When you have to explain it, it’s bad." ,
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "The code you write makes you a programmer. The code you delete makes you a good one.",
        "Why don't programmers like nature? It has too many bugs.",
        
        "Why did the developer go broke? Because he used up all his cache.",
        "Why do programmers prefer dark mode? Because the light attracts bugs.",
        "How do you comfort a JavaScript bug? You console it!",
        
        "The best error message is the one that never shows up.",
        
        "Code is like humor. When you have to explain it, it’s bad." ,
        "Code as if the next developer is you, but with way less coffee." ,
        "The only way to do great work is to love what you do." ,
        "Code, eat, sleep, repeat - the coder's life cycle.",
        "You are not a machine. Learn to rest, not to quit." ,
        
        "Every great developer you know got there by solving problems", 
        "Code is where the real magic happens." ,
        "The only code that is bug-free is the one that is never written.",
        "Code like a butterfly, test like a bee." ,
        "Why do Java developers wear glasses? Because they don't see sharp.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "Programming is 10% writing code and 90% understanding why it’s not working",
        "You are the ; to my statements",
        "What did the Java Code say to the C code? You’ve got no class",
        "There’s no place like 127.0.0.1",
        
        "If at first you don’t succeed, call it version 1.0",
        "My love for you has no bugs",
        "What is the most used language in programming? Profanity.",
        "Real programmers count from 0",
        "My mind is like an internet browser, 19 tabs open, 3 of them are frozen,", 
        "while (alive) { eat(); sleep (); code ();}",
        "There are 2 types of people in the world. Those who can extrapolate from incomplete data…",
        "What do you call a programmer who vomits at IHOP? A stack overflow.",
        "Computers will neverl fully replace humans until they learn to laugh at the boss’s jokes",
        "Binary: It’s as easy as 01, 10, 11",
        "All programmers are playwrights, and all computers are lousy actors.",
        "Algorithm: words used by programmers when they don’t want to explain what they did",
        "When in doubt // it out",
        "Coding like poetry should be short and concise.",
        "It’s not a bug; it’s an undocumented feature.",
        "First, solve the problem. Then, write the code.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "Make it work, make it right, make it fast.",
        "Clean code always looks like it was written by someone who cares.",
        "Of course, bad code can be cleaned up. But it’s very expensive.",
        "Software is like sex: it’s better when it’s free",
        "Programming is like sex: One mistake, and you have to support it for the rest of your life.",
        "I'm not lazy, I'm on energy-saving mode.",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        "I would like to change the world, but they won't give me the source code.",
        "Without you, my world is null.",
        
        "You are the CSS to my HTML.",
        "You are a field in my class; you will always be protected.",
        
        "I always thought love was a static class until you made an instance of it.",
        
        "I promise to designate my methods as virtual as long as you promise to override them.",
        
        "I love user interfaces because that is where U and I are always together.",
        "You are my; I can’t function without you.",
        
        "My heart is an array with the size of 1. I only have room in it for you.",
        
        "You are the clearfix to my floating heart.",
        "My mind is an infinite loop. Thinking of you. 100% usage….",
        
        "I promise, I will never multi-thread on you.",
        "Wrap you in a try, and I’ll throw all my love at you.",
        
        "You will always be my #0.",
        
        "If you were my hash function, I would let you collide with me anytime.",
        
        "I don’t care if you are not my type. We can always typecast.",
        "If you ever throw an exception. I will be there to catch it.",
        
        "Upon reflection, I love all of your attributes.",
        
         "I tried to test your methods, but I can’t mock your love.",
        
        "You are my exit. Everything I do leads to you.",
        
         "You have a constant pointer to my heart.",
        
        "You are the singleton instance for my heart.",
        "Girl, you are the MY in MySQL.",
        
        "Nice pull request; let’s merge it in.",
        "I tried passing you ByVal, but you can’t be duplicated.",
        
        "I will never delete the pointer in my heart to you.",
        
        "You will always be on my L1 cache.",
        
        "On a scale of 1 to 10, you’re a solid F.",
        
        "I wish you were asynchronous, so you would give me a callback.",
        
        "You have the highest priority in my queue, so I will always serve you first.",
        "My heart is a stack, and you make it overflow.",
        
        "Hey girl, did you lose a timestamp? Because I am pretty sure it’s DateTime.Now",
        
        "You’re the stop condition to my heart’s search algorithm.",
        
         "You are the IDEA that auto-completes me."
      
      // Add more quotes as needed
    ];
  
    // Function to get a random quote from your array
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    // Initial quote display
    quoteText.textContent = getRandomQuote();
  
    // Refresh button click event
    refreshButton.addEventListener('click', function () {
      // Fetch a new quote and update the display
      quoteText.textContent = getRandomQuote();
    });
  });
  