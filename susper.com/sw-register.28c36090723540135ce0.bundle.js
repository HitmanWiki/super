webpackJsonp([2], {
    2: function(r, e, o) {
        r.exports = o("3WLI")
    },
    "3WLI": function(r, e) {
        "serviceWorker" in navigator && navigator.serviceWorker.register("/susper.com/worker-basic.min.js").catch(function(r) {
            console.error("Error registering service worker:", r)
        })
    }
}, [2]);