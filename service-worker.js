
try {
    caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
    })
} catch (err) {
    console.log(err)
}
