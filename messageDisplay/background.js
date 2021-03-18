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

    let firstAddress = reciveAddresses[0];
    let fitstAddressName, firstAddressEmail = splitNameAndEmail(firstAddress);
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

// /**
//  * Definition for a binary tree node.
//  * struct TreeNode {
//  *     int val;
//  *     TreeNode *left;
//  *     TreeNode *right;
//  *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//  * };
//  */
// class Solution {
//     public:
//         vector<int> postorderTraversal(TreeNode *root) {
//     vector<int> result;
//     traversal(root, result);
//     return result;
// }
// void traversal(TreeNode *root, vector<int> &result) {
//     if (root == nullptr)
//         return;
//     traversal(root->left, result);
//     traversal(root->right, result);
//     result.emplace_back(root->val);
// }
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
