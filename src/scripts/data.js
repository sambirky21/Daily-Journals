    const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(journalData => journalData.json())
    },

    postNewJournal(newJournalEntry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    },

    deleteJournalEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
    };