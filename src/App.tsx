import Lottie from "lottie-react";
import animationData from "./assets/svg/25992-hand-scrolls-the-messages-on-the-phone.json"
function App() {
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-900 font-normal text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Creating lovely animations </h1>
        <p>Fancy Animations</p>
        <div className="flex justify-center gap-2">
          <button>Learn More</button>
          <button>Library</button>
        </div>
      </div>
      <div className="w-[50%] h-[50%]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

export default App
