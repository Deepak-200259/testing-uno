globalThis.gameManager;

function initializeGameManager() {
    // Initialize the game manager
    console.log("Initializing GameManager");
    if (!globalThis.gameManager) {
        gameManager = new GameManager();
        gameManager.onLoad();
        globalThis.gameManager = gameManager;
    }

    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.imageSmoothingEnabled = false;
    switch(checkDevice()){
        case "IPAD_DEVICE": 
            CANVAS_WIDTH = 1366;
            CANVAS_HEIGHT = 1024;
            break;
        case "IPAD_DEVICE_3X4": 
            CANVAS_WIDTH = 1024;
            CANVAS_HEIGHT = 1366;
            break;
        case "MOBILE_DEVICE": 
            CANVAS_WIDTH = 768;
            CANVAS_HEIGHT = 1370;
            break;
        case "DESKTOP_DEVICE": 
            CANVAS_WIDTH = 1920;
            CANVAS_HEIGHT = 1080;
            break;
    }
    currentUI = checkDevice();
    screen.orientation.addEventListener("change", preventWrongOrientation);
    preventWrongOrientation();
    document.getElementById("canvas").width = CANVAS_WIDTH;
    document.getElementById("canvas").height = CANVAS_HEIGHT;
    
}

document.addEventListener("DOMContentLoaded", () => {
    // Do this when the DOM is loaded
    initializeGameManager();
});

function preventWrongOrientation() {
    // Detect device type using the user-agent
    const isMobile = checkDevice().includes("MOBILE");
    const isTablet = checkDevice().includes("IPAD");
    const isDeskTop =   checkDevice().includes("DESKTOP")
    // Get the current orientation of the screen
    const isPortrait = window.innerHeight > window.innerWidth;
    console.log("Is Portrait:", isPortrait);

    // Get the element for block_game
    const blockGameElement = document.getElementById("block_game");

    if (isMobile) {
        // For tablets: Always show the block_game screen regardless of orientation
        if (isPortrait) {
            console.log("Portrait (Mobile)");
            blockGameElement.style.display = "none"; // Hide in portrait mode
        } else {
            console.log("Not Portrait(Mobile)");
            blockGameElement.style.display = "block"; // Show in landscape mode
        }
    } else if (isTablet) {
        if(currentUI !== checkDevice()){
            blockGameElement.style.display = "block";
            // For mobile: Show block_game only in landscape mode
        } else {
            blockGameElement.style.display = "none"; // Show in landscape mode
        }
    } else if (isDeskTop){
        console.log("Is Desktop");
        
        blockGameElement.style.display = "none"
    }
}

// Call this function on load, resize, and orientation change
window.addEventListener("load", preventWrongOrientation);
window.addEventListener("resize", preventWrongOrientation);
window.addEventListener("orientationchange", preventWrongOrientation);


class GameManager {
    // Use this to set a function to be called when an event is received
    set(propertyName, fn) {
        this[propertyName] = fn;
    }

    onLoad() {
        this.sendRNEvent({ eventType: "LOAD_COMPLETE" });
    }

    constructor() {
        this.rewardHandlers = {}; // Add to this to handle differnt reward types. Add success and failure handlers.
        this.setupMessageListener();
        this.setupGlobalEventHandlers();
    }

    setupMessageListener() {
        console.log("setupMessageListener");
        const isUIWebView = () => {
            return !!navigator.userAgent.toLowerCase().match(/\(ip.*applewebkit(?!.*(version|crios))/);
        };

        const isSandboxTesting = () => {
            const url = window.location.href;
            return url.includes('preview') || url.includes('public') || url.includes('index.html');
        };

        const receiver = isUIWebView() || isSandboxTesting() ? window : document;
        receiver.addEventListener('message', (e) => {
            if (e.data) {
                this.onRNEvent(e.data);
            }
        }, false);
    }

    setupGlobalEventHandlers() {
        window.onRNEvent = this.onRNEvent.bind(this);
    }

    onRNEvent(payload) {
        console.log('Received RN Event:', payload);
        const data = JSON.parse(payload);
        console.log('Parsed data:', data);

        switch (data.eventType) {
            case "TRIGGER_GAME_OVER":
                this.onGameOver(this.score);
                break;
            case "REWARDED_AD_SUCCESS":
                this.rewardHandlers[data.rewardType]();
                break;
            case "REWARDED_AD_FAILED":
                this.rewardHandlers[`${data.rewardType}_FAILED`]();
                break;
            case "UPDATE_CONFIG":
                this.onUpdateConfig(data.insets);
                break;
            default:
                console.log("INVALID EVENT");
                break;
        }
    }

    sendRNEvent(payload) {
        console.log('Sending RN Event:', payload);
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify(payload));
        } else {
            window.parent.postMessage(JSON.stringify(payload), '*');
        }
    }

    onUpdateConfig(data){
        console.log("Updating Config", data);
    }

    trackEvent(eventName, eventData) {
        this.sendRNEvent({
            eventType: "TRACK_EVENT",
            eventName: eventName,
            eventData: JSON.stringify(eventData || {})
        });
    }

    // Use this to add a reward handler for a given reward type
    addRewardHandler(rewardType, fn) {
        this.rewardHandlers[rewardType] = fn;
    }

    onGameOver(outcome) {
        this.onGameComplete(outcome);
    }

    onGameComplete(outcome) {
        console.log(`Game completed. Outcome :${outcome}`);
        this.sendRNEvent({ eventType: "GAME_COMPLETED", outcome: outcome });
    }

    showRewardedAd(rewardType) {
        this.sendRNEvent({ eventType: "SHOW_REWARDED_AD", rewardType: rewardType });
    }
}
