import Youtube, { YouTubeProps } from 'react-youtube';

interface getYoutubeProps {
  url: string;
  readyAction?: () => void;
}

export function getYoutube({ url, readyAction }: getYoutubeProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    if (readyAction) {
      readyAction();
    }
  }


  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
  }

  return (
    <Youtube videoId={url} opts={opts} onReady={onPlayerReady} className="w-full h-full" />
  );
}