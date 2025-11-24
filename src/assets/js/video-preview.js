// Video Preview Manager for Work Grid
class VideoPreviewManager {
  constructor() {
    this.cards = document.querySelectorAll('.project-card');
    this.currentVideo = null;
  }

  init() {
    this.cards.forEach(card => {
      const video = card.querySelector('.preview-video');
      if (!video) return;

      card.addEventListener('mouseenter', () => {
        if (this.currentVideo && this.currentVideo !== video) {
          this.stopVideo(this.currentVideo);
        }
        this.playVideo(video);
      });

      card.addEventListener('mouseleave', () => {
        this.stopVideo(video);
      });
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
}

document.addEventListener('DOMContentLoaded', () => {
  const manager = new VideoPreviewManager();
  manager.init();
});
