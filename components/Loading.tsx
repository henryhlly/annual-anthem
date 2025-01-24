import { useEffect } from 'react';

export function Loading ({ loadingText, winner }: {loadingText: string, winner: {id: string, youtube_url: string}}) {
    useEffect(() => {
      async function addWin() {
        await fetch('/api/addSongWin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(winner),
        });
      }
  
      addWin();
    }, [winner]);

  return (
    <div className="relative flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
      <h1 className="text-2xl">{ loadingText }</h1>
      {/* Loading Icon is provided by Loading.io */}
      <img src="/loadingIcon.gif">
      </img>
    </div>
  )
}