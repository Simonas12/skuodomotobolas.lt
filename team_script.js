       // Flip card function
        function flipCard(card) {
            card.classList.toggle('flipped');
        }

        // Highlight card on hover
        function highlightCard(card) {
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.add('blurred');
                }
            });
        }

        // Unhighlight all cards
        function unhighlightCards() {
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(c => {
                c.classList.remove('blurred');
            });
        }

        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('header').classList.toggle('menu-active');
        });