// fetch("http://localhost:8088/entries")
// .then(journalData => journalData.json())
// // .then(entries => {renderJournalEntries(entries)
// // })

// The code in the data.js module, then, should only define functionality for how to access the data, but should not immediately run it.
    const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(journalData => journalData.json())
        }
    }