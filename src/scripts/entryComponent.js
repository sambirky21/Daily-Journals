const renderJournalEntries = (entries) => { //function to add items to eventually add to DOM
    let divProcess = "";
    for (let i=0; i < entries.length; i++){
        divProcess += makeJournalEntryComponents(entries[i]); //Each value produced by the function added to divProcess
    }
 
    let entryHoldingLocation = document.getElementById("entryLog") //where do i add it? entryLog
    entryHoldingLocation.innerHTML = divProcess; // okay, add it

}