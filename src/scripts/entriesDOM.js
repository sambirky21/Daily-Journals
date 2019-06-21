//You have built your form for entering in journal entries, so now you need to define how the data that you will be collecting in the form should be stored. Your learning objective for this chapter is to build a function that returns an HTML representation of a journal entry data structure, and render it to the DOM.

function makeJournalEntryComponents(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
    <div>
    <h1>${journalEntry.Date_of_Entry}</h1>
    <h3>${journalEntry.Concepts_Covered}</h3>
    <h4>${journalEntry.Mood}</h4>
    <p>${journalEntry.Journal_Entry}</p>
    </div>
    `
}