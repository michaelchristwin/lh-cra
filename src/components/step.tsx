import { twMerge } from "tailwind-merge";

interface StepProps {
  img1: string;
  img2: string;
  className?: string;
  step: string;
}

function Step({ img1, img2, step, className }: StepProps) {
  return (
    <div className="relative lg:w-[40vw] lg:h-[70vh] w-[80vw] h-[40vh] block">
      <img
        src={img1}
        alt="One"
        className="lg:h-[80px] lg:w-[80px] w-[50px] h-[50px] absolute lg:left-[40%] left-[40%] top-[5%] lg:top-[7%]"
      />
      <img
        src={img2}
        alt=""
        className={twMerge(
          `lg:w-[25vw] absolute lg:left-[20%] left-[23%] lg:top-[25%] top-[20%] lg:h-[32vh] w-[45vw]`,
          className
        )}
      />
      <p className="relative flex items-center text-center top-[73%] left-[6%] lg:w-[25vw] border shadow w-[70vw] h-fit py-2 bg-white lg:left-[20%] rounded-[9px] lg:text-[18px] text-[12px]">
        {step}
      </p>
    </div>
  );
}

export default Step;
