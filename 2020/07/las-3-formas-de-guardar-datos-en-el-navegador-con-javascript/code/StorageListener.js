window.addEventListener('storage', function(e) {  
    console.log("Key: " + e.key);
    console.log("Old value: " + e.oldValue);
    console.log("New value: " + e.newValue);
    console.log("Url: " + e.url);
    console.log("Storage area: " + JSON.stringify(e.storageArea));
});