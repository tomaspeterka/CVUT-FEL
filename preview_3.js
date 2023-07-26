window.addEventListener('DOMContentLoaded', () => {

    const settingsVideo = document.querySelector('.video-sequence.drone.settings');

    function togglePlay() {
        settingsVideo.paused? settingsVideo.play(): settingsVideo.pause();
    }
    function handleSpacebarPress(event) {
        if (event.keyCode === 32 || event.keyCode === 75) {
            event.preventDefault();
            togglePlay();
        }
    }
    document.addEventListener('keydown', handleSpacebarPress);
    
});
