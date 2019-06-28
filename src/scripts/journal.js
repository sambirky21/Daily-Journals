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

let radioBTN = document.getElementsByName("mood")
radioBTN.forEach(radio => {
  radio.addEventListener("click", event => {
    let moodValue = event.target.value
    console.log(moodValue)
    API.getJournalEntries().then(entries => {
      let moodString = entries.filter(entry => entry.Mood === `${moodValue}`)
      console.log(moodString)
      renderJournalEntries(moodString)
    })  
  })
})

eventListener()
API.getJournalEntries().then(renderJournalEntries)