// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(journalData => journalData.json())  // Parse as JSON
//     .then(entries => {console.log(entries)
//         // What should happen when we finally have the array?
//     })

// Replace the code in src/scripts/data.js with the code below. Since you moved the code to this file, you should consider this file an independent, helper module now. It should not directly execute any logic for the application. The responsbility for how the application should operate should reside in src/scripts/journal.js now.

// The code in the data.js module, then, should only define functionality for how to access the data, but should not immediately run it.
    const API = {
        getJournalEntries () {
            return fetch("http://localhost:3000/entries")
                .then(entries => entries.json())
        }
    }