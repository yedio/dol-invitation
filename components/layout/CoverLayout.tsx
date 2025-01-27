import { ArcFrame } from "@components/ArcFrame";
import Line from "@components/Line";
import { info } from "@libs/client/InfoData";

export default function CoverLayout() {
  const { image, baby, date, time, location } = info;

  return (
    <div className="relative w-full min-h-screen bg-cover-color flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="w-full py-4 flex items-center space-x-2.5">
        <Line />
        <h1 className="text-main-color text-15 text-nowrap  font-serif">
          1st birthday
        </h1>
        <Line />
      </div>
      {/* Main Image Section */}
      <div className="relative w-full flex flex-col items-center mt-[35%]">
        <div className="text-center text-main-color text-[60px] font-serif absolute top-0 leading-[80px] left-1/2 transform -translate-x-1/2 -translate-y-4 whitespace-nowrap z-10 font-weight-700">
          happy
          <br />
          birthday
          <span className="absolute top-0 right-0 text-2xl">✨</span>
          <span className="absolute top-1/2 -left-8 text-2xl">✨</span>
        </div>
        <ArcFrame
          src={image.cover}
          width={300}
          height={390}
          providedStyle="mt-[90px]"
        />
      </div>

      {/* Footer Info Section */}
      <div className="mt-0 flex flex-col items-center text-main-color space-y-1">
        <p className="text-17 font-weight-500">
          <span className="mx-2">✨</span>
          {baby.name}
          <span className="mx-2">✨</span>
        </p>
        <p className="text-20">
          {date} | {time}
        </p>
        <p className="text-14">{location}</p>
      </div>
    </div>
  );
}
