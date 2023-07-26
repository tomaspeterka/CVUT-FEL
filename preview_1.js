window.addEventListener('DOMContentLoaded', () => {

    const previewControl = document.querySelector('.control-layer.drone.preview');
    const previewVideo = document.querySelector('.video-sequence.drone');
    const moreBtn = document.querySelector('.more-btn.drone.preview');
    const preview = document.querySelector('.drone.preview');
    const settingsBg = document.querySelector('.settings-bg.drone.settings');

    previewControl.addEventListener('mouseover', () => {
        previewVideo.play();
    });

    previewControl.addEventListener('mouseout', () => {
        previewVideo.pause();
    });

    moreBtn.addEventListener('click', () => {
        preview.style.display = 'none';
        settingsBg.style.display = 'flex';    // Show the settings-container
    });
    
});
