// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.
function eventListener() {
    document.querySelector("#clickButton").addEventListener("click", () => {
        let journalDateValue = document.querySelector("#journalDate").value
        let conceptsCoveredValue = document.querySelector("#conceptsCovered").value
        let journalEntryValue = document.querySelector("#journalEntry").value
        let moodID = document.getElementById("mood")
        let valueMood = moodID.options[moodID.selectedIndex].text
        if (journalDateValue == "" || conceptsCoveredValue == "" || journalEntryValue == "") {
            alert("you are missing an entry")
        }
        const newJournalEntry = journalFactory(journalDateValue, conceptsCoveredValue, journalEntryValue, valueMood)
        postNewJournal(newJournalEntry)
    })
}

function journalFactory(date, concepts, entry, mood) {
    return {
        Date_of_Entry: date,
        Concepts_Covered: concepts,
        Journal_Entry: entry,
        Mood: mood
    }
}

function postNewJournal(newJournalEntry) {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
}

eventListener()
API.getJournalEntries().then(renderJournalEntries)