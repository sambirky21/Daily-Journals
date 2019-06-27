//so now you have called upon makeJournalEntryComponents. So I think if i just call my new makeJournalEntryComponentDel it should just do more, since make journalentrycomponent is called within makeJournalEntryComponentDel
// create divProcess outside of function so i can add innerHTML to it
divProcess = document.querySelector("#entryLog")

const renderJournalEntries = (entries) => {
    divProcess.innerHTML = "";
    for (let i=0; i < entries.length; i++){
        //Update to note above, actually deleting the below and will create a new variable with the value of delete function and pass in the entries. And then i will append child to this new variable and pass delete function into the append function
        // divProcess += makeJournalEntryComponents(entries[i]);
        let updatedHTML = makeJournalEntryComponentsDel(entries[i])
        divProcess.appendChild(updatedHTML)
    }
    //I no longer need the below because the append child passes in the variable that holds the updated function
    // let entryHoldingLocation = document.getElementById("entryLog")
    // entryHoldingLocation.innerHTML = divProcess;

}