// const objectsJournalEntry = [
//     {
//     Date_of_Entry: "06/06/2019",
//     Concepts_Covered: "Manipulating DOM & JS Objects",
//     Journal_Entry: "Today was a bit frustrating trying to understand how the concepts we are learning apply to the real world. However, I am confident that it will become more clear as we add more context to these components.",
//     Mood: "Weird"
// },

// {
//     Date_of_Entry: "06/06/2019",
//     Concepts_Covered: "Functions & Logic",
//     Journal_Entry: "What is this madness?",
//     Mood: "Frustrated"
// },

// {
//     Date_of_Entry: "06/06/2019",
//     Concepts_Covered: "API, Fetching & Events",
//     Journal_Entry: "Today I am more confident I know how to break down topics to understand them. It may take time, but that's okay. I understand what Joe means when he says 'take it line by line.",
//     Mood: "Happy"
// }

// ]

// From journal entry 2, oops got ahead of ourselves. We were supposed to make each object have it's very own variable. And then add each of those variables into the array. I defined one variable and within that array, I added each object which made things a bit redundant.
// const listOfJournalEntries = []
// listOfJournalEntries.push(objectsJournalEntry[0])
// listOfJournalEntries.push(objectsJournalEntry[1])
// listOfJournalEntries.push(objectsJournalEntry[2])
// console.log(listOfJournalEntries);

//You have built your form for entering in journal entries, so now you need to define how the data that you will be collecting in the form should be stored. Your learning objective for this chapter is to build a function that returns an HTML representation of a journal entry data structure, and render it to the DOM.

function makeJournalEntryComponents(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
    <div>
    <h1>${journalEntry.Date_of_Entry}</h1>
    <h2>${journalEntry.Concepts_Covered}</h2>
    <h3>${journalEntry.Mood}</h3>
    <p>${journalEntry.Journal_Entry}</p>
    </div>
    `
}

const renderJournalEntries = (entries) => { //function to add items to eventually add to DOM
    let divProcess = "";
    for (let i=0; i < entries.length; i++){
        divProcess += makeJournalEntryComponents(entries[i]); //Each value produced by the function added to divProcess
    }
 
    let entryHoldingLocation = document.getElementById("entryLog") //where do i add it? entryLog
    entryHoldingLocation.innerHTML = divProcess; // okay, add it

}

// renderJournalEntries(objectsJournalEntry)

// Your learning objective in this chapter is to set up JSON Server to store the data for your daily journal entries, query that data from the API, and then use your knowledge of Promises (remember, fetch is a fancy Promise) and then() to render the entries to the DOM.

fetch("http://localhost:8088/entries") // Fetch from the API
    .then(journalData => journalData.json())  // Parse as JSON
    .then(entries => {renderJournalEntries(entries)
        // What should happen when we finally have the array?
    })