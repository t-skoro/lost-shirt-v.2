function removeClassFromCollection(className, collection) {
    Array.from(collection).forEach(elem => {
        elem.classList.remove(className);
    });
} 