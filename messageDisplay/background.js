browser.messageDisplay.onMessageDisplayed.addListener((tab, message) => {
    console.log(`subject: ${message.subject}`);

    var reciveAddresses = new Array();

    if (message.recipients.length !== 0) {
        reciveAddresses = reciveAddresses.concat(message.recipients);
    }

    if (message.ccList.length !== 0) {
        reciveAddresses = reciveAddresses.concat(message.ccList);
    }

    if (message.bccList.length !== 0) {
        reciveAddresses = reciveAddresses.concat(message.bccList);
    }

    console.log(reciveAddresses.length);
    console.log(`reciveAddresses: ${reciveAddresses[0]}`);
    console.log(`reciveAddresses: ${splitNameAndEmail(reciveAddresses[0])}`);
});

function splitNameAndEmail(address) {
    var extract = {name: "", email: ""};
    var emails = address.match(/[^@<\s]+@[^@\s>]+/g);
    if (emails) {
        extract.email = emails[0];
    }
    var names = address.split(/\s+/);
    if (names.length > 1) {
        names.pop();
        extract.name = names.join(" ").replace(/"/g, "");
    }
    return extract.name, extract.email;
}


// ui.addressBookDetails.onsubmit = function () {
//
//     let properties = {name: this.name.value};
//
//     let button = this.querySelector("button");
//     let promise;
//     button.disabled = true;
//     if (id) {
//         promise = browser.addressBooks.update(id, properties);
//     } else {
//         promise = browser.addressBooks.create(properties).then(() => {
//             this.hidden = true;
//         });
//     }
//     promise.then(() => {
//         button.disabled = false;
//     });
//
//     return false;
// };


async function injectIntoContent(tab, message) {
    let list = await browser.addressBooks.list();
    let defaultAddressBook = list[0];
    let defaultAddresses = await browser.contacts.list(defaultAddressBook.id);
    for (let i = 0; i < defaultAddressBook.length; i++) {
        defaultAddresses[0]
    }
    // defaultList[0].properties.DisplayName
    // defaultList[0].properties.PrimaryEmail
}

browser.messageDisplayAction.onClicked.addListener(injectIntoContent);
