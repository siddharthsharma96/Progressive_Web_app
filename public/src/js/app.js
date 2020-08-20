var deferredPrompt;

if('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(){
            console.log('service worker registered')
        })
}

window.addEventListener('beforeinstallprompt',function(event){
    console.log('beforeinstall prompt fired');
    event.preventDefault();
    deferredPrompt=event;
})