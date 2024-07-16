//your JS code here. If required.
const bands = [
            'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
            'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
            'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
        ];

        function stripArticle(word) {
            return word.replace(/^(a |an |the )/i, '').trim();
        }

        const sortedBands = bands.sort((a, b) => {
            if (stripArticle(a).toLowerCase() < stripArticle(b).toLowerCase()) return -1;
            if (stripArticle(a).toLowerCase() > stripArticle(b).toLowerCase()) return 1;
            return 0;
        });

        const ul = document.getElementById('bands');
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            ul.appendChild(li);
        });
