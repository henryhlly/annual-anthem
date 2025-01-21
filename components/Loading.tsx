export const Loading = ({ loadingText }: {loadingText: string}) => {
  return (
    <div className="relative flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
      <h1 className="text-2xl">{ loadingText }</h1>
      {/* Loading Icon is provided by Loading.io */}
      <img src="/loadingIcon.gif">
      </img>
    </div>
  )
}