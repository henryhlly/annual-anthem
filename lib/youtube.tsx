import Youtube, { YouTubeProps } from 'react-youtube';
import React, { useEffect } from 'react';

export function getYoutube({ url, action }: { url: string, action?: () => void }) {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    if (action) {
      action();
    }
  }

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '480'
  }

  return <Youtube videoId={url} opts={opts} onReady={onPlayerReady} />;
}