import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "./assets/svg/25992-hand-scrolls-the-messages-on-the-phone.json";
import { useRef } from "react";

function App() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-900 font-normal text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Creating lovely animations </h1>
        <p>Fancy Animations</p>
        <div className="flex justify-center gap-2">
          <button>Learn More</button>
          <button>Library</button>
        </div>
        <div className="w-[60%] h-[60%]">
          <Lottie
            onComplete={() => {
              phoneRef.current?.goToAndPlay(20, true);
            }}
            lottieRef={phoneRef}
            loop={false}
            animationData={animationData}
          />
        </div>
      </div>
    </div>
  );
}

export default App
