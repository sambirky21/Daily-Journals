function makeJournalEntryComponents(journalEntry) {
    return `
    <div>
    <h1>${journalEntry.Date_of_Entry}</h1>
    <h3>${journalEntry.Concepts_Covered}</h3>
    <h4>${journalEntry.Mood}</h4>
    <p>${journalEntry.Journal_Entry}</p>
    </div>
    `
}

function makeJournalEntryComponentsDel (newerEntries) {
    let div = document.createElement("div")
    div.setAttribute("id", `deleteFormContainer-${newerEntries.id}`)
    div.innerHTML = makeJournalEntryComponents(newerEntries)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
//You now have a delete button, it does not have an event and it has not been appended to the DOM
//Create a click event for the delete button
    deleteBtn.addEventListener("click", () => {
        //you need to call the delete data function and pass the newerEntries argument into it
        API.deleteJournalEntry(newerEntries.id).then(journalData =>
            //Now we need to call the API fetch to get journals and pass the function that renders the entries back to the DOM.
            API.getJournalEntries().then(renderJournalEntries))
    })
    //Great, now you have a delete button, and it has a few functions that will be called in event listener function by the click
    //However, it is not attached to the div component so you have to appendchild within the makeJournalEntryComponentsDel function. SO when it gets called, the delete btn will be apart of of the div component you created.
    div.appendChild(deleteBtn)
    //make sure you return it, because that div contains all of the elements and functions that call and push these elements to the DOM.
    return div;
}