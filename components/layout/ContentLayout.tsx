import { CommonImage } from "@components/image/CommonImage";
import Line from "@components/Line";
import { info } from "@libs/client/InfoData";
import { LineBreaker } from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "./common/Layout";
import { DateCounterLayout } from "@components/DateCounterLayout";
import { CalendarCapture } from "@components/CalendarCapture";
import MapLayout from "@components/MapLayout";
import { Gallery } from "@components/Gallery";
import { AccordionAccountLayout } from "@components/AccordionAccountLayout";

export default function ContentLayout() {
  const { image, text, parent, location, mapAddress } = info;

  return (
    <div className="w-full flex flex-col items-center">
      {/* 초대합니다 */}
      <Wrapper>
        <FormWithTitle title={"💌 초대합니다 💌"}>
          <div className="w-full h-[240px] flex justify-center items-center overflow-hidden">
            <CommonImage src={image.content} />
          </div>
          <div className="text-16 text-center leading-[30px]">
            {LineBreaker(text.invitation)}
          </div>
          <Line type={"short"} />
          <p className="text-16 text-center">
            아빠 {parent.dad.name} · 엄마 {parent.mom.name}
          </p>
        </FormWithTitle>
        <p className="text-main-color text-16"></p>
      </Wrapper>
      {/* 돌잔치 안내 */}
      <Wrapper providedStyle="bg-[#f6f5f5]">
        <FormWithTitle>
          <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col space-y-7">
              <div className="flex flex-col items-center space-y-1">
                <p className="text-24 text-gray-700">2025.03.02</p>
                <p className="text-16">일요일 오후 6시 30분</p>
              </div>
              <div className="w-[320px] py-4 border-t border-b border-[#e8dfdf] flex justify-center">
                <CalendarCapture date={info.date} />
              </div>
            </div>
            <DateCounterLayout date={info.date} name={info.baby.shortName} />
          </div>
        </FormWithTitle>
      </Wrapper>
      {/* 소중한 순간들 */}
      <Wrapper>
        <FormWithTitle title={"소중한 순간들 📸"}>
          <div className="px-4 w-full">
            <Gallery images={image.zip} />
          </div>
        </FormWithTitle>
      </Wrapper>
      {/* 오시는 길 */}
      <Wrapper providedStyle="!px-0">
        <FormWithTitle title={"오시는 길"}>
          <div className="flex flex-col items-center space-y-3">
            <div className="text-center text-18 leading-[30px]">
              {LineBreaker(
                "경기 용인시 처인구 명지로60번길 8-10\n광장프라자 6층, 플로렌스 파티하우스 용인점"
              )}
            </div>
            <p className="text-16">☎️ 031-333-6114</p>
          </div>
          <MapLayout
            address={info.address}
            mapAddress={{
              kakao: mapAddress.kakao,
              naver: mapAddress.naver,
              tmap: mapAddress.tmap,
            }}
          />
          <div className="w-full flex flex-col items-center space-y-4 px-4">
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
              img={"/img/etc/parking.jpg"}
            />
          </div>
        </FormWithTitle>
      </Wrapper>
      {/* 마음 전하실 곳 */}
      <Wrapper>
        <FormWithTitle title={"마음 전하실 곳"}>
          <div className="flex flex-col space-y-2 w-[300px]">
            <AccordionAccountLayout
              title="아빠 계좌번호"
              accountHolder={parent.dad.accountHolder}
              bankName={parent.dad.bankName}
              account={parent.dad.accountNumber}
            />
            <AccordionAccountLayout
              title="엄마 계좌번호"
              accountHolder={parent.mom.accountHolder}
              bankName={parent.mom.bankName}
              account={parent.mom.accountNumber}
            />
          </div>
        </FormWithTitle>
      </Wrapper>
    </div>
  );
}

interface WayToComeFormProps {
  title: string;
  descriptions: string[];
  img?: string;
}
export function WayToComeForm({
  title,
  descriptions,
  img,
}: WayToComeFormProps) {
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
      {img && <CommonImage src={img} />}
    </div>
  );
}
