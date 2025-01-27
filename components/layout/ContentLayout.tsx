import { CommonImage } from "@components/image/CommonImage";
import Line from "@components/Line";
import { info } from "@libs/client/InfoData";
import { LineBreaker } from "@libs/client/Utility";
import { FormWithTile, Wrapper } from "./common/Layout";
import { DateCounterLayout } from "@components/DateCounterLayout";
import { CalendarCapture } from "@components/CalendarCapture";

export default function ContentLayout() {
  const { image, text, parent, location } = info;

  return (
    <div className="w-full flex flex-col items-center">
      {/* 초대합니다 */}
      <Wrapper>
        <FormWithTile title={"💌 초대합니다 💌"}>
          <div className="w-full h-[300px] object-contain overflow-hidden">
            <CommonImage src={image.content} />
          </div>
          <div className="text-16 text-center leading-[30px]">
            {LineBreaker(text.invitation)}
          </div>
          <Line type={"short"} />
          <p className="text-16 text-center">
            아빠 {parent.dad.name} · 엄마 {parent.mom.name}
          </p>
        </FormWithTile>
        <p className="text-main-color text-16"></p>
      </Wrapper>
      {/* 돌잔치 안내 */}
      <Wrapper providedStyle="bg-[#f6f5f5]">
        <FormWithTile title={"돌잔치 안내"}>
          <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col space-y-4">
              <p className="text-center text-gray-700">
                {LineBreaker(`2025년 5월 24일 토요일 오후 6:30\n${location}`)}
              </p>
              <div className="w-[320px] py-4 border-t border-b border-[#e8dfdf] flex justify-center">
                <CalendarCapture date={info.date} />
              </div>
            </div>

            <DateCounterLayout date={info.date} name={info.baby.shortName} />
          </div>
        </FormWithTile>
      </Wrapper>
      {/* 소중한 순간들 */}
      <Wrapper>
        <FormWithTile title={"소중한 순간들 📸"}>
          <div>갤러리</div>
        </FormWithTile>
      </Wrapper>
      {/* 오시는 길 */}
      <Wrapper>
        <FormWithTile title={"오시는 길"}>
          <div className="text-center text-18 leading-[30px]">
            {LineBreaker(
              "경기 용인시 처인구 명지로60번길 8-10\n광장프라자 6층\n플로렌스 파티하우스 용인점"
            )}
            <p>031-333-6114</p>
          </div>
          <div>지도</div>
          <div className="w-full flex flex-col items-center space-y-4">
            <WayToComeForm
              title="🚌 버스 이용"
              descriptions={[
                "명지대방면 이마트,상공회의소 하차\n용인버스 13번, 21번 y1201번, y1202번\n광역버스 5000B, 5001-1, 5003B 이용",
              ]}
            />
            <WayToComeForm
              title="🚆 지하철 이용"
              descriptions={[
                "에버라인 명지대역 하차\n이마트, 명지대방면으로 도보 15분거리",
                "기흥역하차 5번출구\n용인버스 Y1201, Y1202번\n광역버스 5003B 이용하여 명지대방면 이마트,상공회의소 하차",
              ]}
            />
            <WayToComeForm
              title="🅿️ 주차"
              descriptions={[
                "J1 주차타워 주차가능 (경기도 용인시 처인구 역북동 757)",
                "2시간 무료주차, 매장까지 도보1~2분거리",
              ]}
            />
          </div>
        </FormWithTile>
      </Wrapper>
      {/* 마음 전하실 곳 */}
      <Wrapper>
        <FormWithTile title={"마음 전하실 곳"}>
          <div>아코디언</div>
        </FormWithTile>
      </Wrapper>
    </div>
  );
}

interface WayToComeFormProps {
  title: string;
  descriptions: string[];
}
export function WayToComeForm({ title, descriptions }: WayToComeFormProps) {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="text-gray-500">{title}</div>
      <div className="flex flex-col space-y-2">
        {descriptions.map((desc, index) => (
          <div key={index} className="">
            {LineBreaker(desc)}
          </div>
        ))}
      </div>
    </div>
  );
}
