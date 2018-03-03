"use strict";

function contains(linkedList, someValue) {
    let current = linkedList.root;
    
    while (current !== null) {
        if (current.value === someValue) {
            return true;
        }
        current = current.next;
    }
    return false;
}