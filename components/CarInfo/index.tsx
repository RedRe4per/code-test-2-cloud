import Button from "../Buttons";
import { ICarInfo } from "@/pages/search";

interface Props {
  carInfo: ICarInfo;
}
//grid grid-cols-1 sm:grid-cols-2 customSlg:grid-cols-3 customLg:grid-cols-1
export default function CarInfo({ carInfo }: Props) {
  const { carName, detail, sell, mil, state, condition, soldDate } = carInfo;
  return (
    <section className="flex flex-col customLg:flex-row items-center justify-between p-4 bg-white rounded-md shadow-car-info ">
      <section className="flex flex-col gap-2">
        <div className="flex">
          <span className="text-text-2-boldest">{carName}</span>
          <span className="text-text-2">&nbsp;{detail}</span>
        </div>
        <div className="flex flex-col customLg:flex-row gap-2 text-text-1-tag">
          <div className="flex gap-2">
            <span className="bg-[#f6f4f4] px-2 py-[2px] rounded-md">
              {sell}
            </span>
            <span className="bg-[#f6f4f4] px-2 py-[2px] rounded-md">{mil}</span>
            <span className="bg-[#f6f4f4] px-2 py-[2px] rounded-md">
              {state}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex">
              <div></div>
              <span>{condition}</span>
            </div>
            <div className="flex">
              <div></div>
              <span>Sold &nbsp;{soldDate}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between gap-2">
        <Button category="carInfo" size="small">
          Subscribe to Reveal Price
        </Button>
        <Button category="info" size="small">
          See More
        </Button>
      </div>
    </section>
  );
}
