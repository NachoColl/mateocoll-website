// Video/GIF Preview Manager for Work Grid
class PreviewManager {
  constructor() {
    this.cards = document.querySelectorAll('.project-card');
    this.currentVideo = null;
  }

  init() {
    this.cards.forEach(card => {
      const video = card.querySelector('.preview-video');
      const gif = card.querySelector('.preview-gif');

      if (video) {
        card.addEventListener('mouseenter', () => {
          if (this.currentVideo && this.currentVideo !== video) {
            this.stopVideo(this.currentVideo);
          }
          this.playVideo(video);
        });

        card.addEventListener('mouseleave', () => {
          this.stopVideo(video);
        });
      }

      if (gif) {
        card.addEventListener('mouseenter', () => {
          this.resetGif(gif);
        });

        card.addEventListener('mouseleave', () => {
          this.resetGif(gif);
        });
      }

    });
  }

  playVideo(video) {
    video.currentTime = 0;
    video.play().catch(() => {});
    this.currentVideo = video;
  }

  stopVideo(video) {
    video.pause();
    video.currentTime = 0;
  }

  resetGif(gif) {
    const src = gif.src;
    gif.src = '';
    gif.src = src;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const manager = new PreviewManager();
  manager.init();
});
