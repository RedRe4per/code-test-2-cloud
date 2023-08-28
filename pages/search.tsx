import MyListbox from "@/components/Listbox";
import Button from "@/components/Buttons";

type Car = {
  id: number;
  name: string;
};

interface Props {
  data: Car[];
}

export default function Search({ data }: Props) {
  const carList = data;

  return (
    <>
      <main className="bg-[#f6f4f4] text-[#212529] shadow-inset-top">
        <section className="max-w-[1180px] mx-auto pt-4">
          <h1 className="text-heading-1">Search Used Car Prices</h1>
          <section className="grid grid-cols-7 gap-x-0 gap-y-[10px] mt-4">
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
            <MyListbox optionList={carList} />
          </section>
          <section className="mt-[10px] pr-10 flex w-full justify-between">
            <input
              type="text"
              className="rounded border border-customGray bg-white h-[36px] min-w-[436px] w-[45%] px-3 text-text-list-box focus:border-customGray focus:outline-none"
              placeholder="e.g. Metallic Paint,Power front seats,Power Sunroof, ..."
            ></input>
            <Button color="primary" size="normal">
              Apply Filter
            </Button>
            <Button color="primary" size="normal">
              Clear Filter
            </Button>
            <Button color="secondary" size="normal">
              Subscribe to Generate Summary Report
            </Button>
          </section>
          <section className="flex text-text-2-bolder h-10 items-center mt-4 bg-white">
            <div className="text-white bg-primary h-full w-[208px] flex items-center justify-center">
              <span>Volkswagen Caddy Stats:</span>
            </div>
            <section className="flex flex-grow h-full shadow-car-info">
              <div className="flex-grow flex justify-center items-center">
                <span>Records</span>
              </div>
              <div className="flex-grow flex justify-center items-center">
                <span>Avg Price:&nbsp;</span>
                <span className="text-primary">Subscribe to Reveal Price</span>
              </div>
              <div className="flex-grow flex justify-center items-center">
                <span>Avg KM:&nbsp;</span>
                <span>129,377 kms </span>
              </div>
              <div className="flex-grow flex justify-center items-center">
                <span>Avg Age:&nbsp;</span>
                <span>83 months </span>
              </div>
              <div className="flex-grow flex justify-center items-center">
                123
              </div>
            </section>
          </section>
          <section className="text-text-2-bolder flex justify-center items-center h-10 bg-secondary mt-4 shadow-car-info">
            <div>
              <span className="text-white">
                Need a Prices People Pay Valuation Report?
              </span>
              <button className="bg-white ml-2 px-6 py-1 rounded-2xl text-secondary">
                Get One Now
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const carList = [
    { id: 1, name: "Make" },
    { id: 2, name: "Abarth" },
    { id: 3, name: "Alfa Romeo" },
    { id: 4, name: "Aston Martin" },
    { id: 5, name: "Audi" },
    { id: 6, name: "Make2" },
    { id: 7, name: "Abarth2" },
    { id: 8, name: "Alfa Romeo2" },
    { id: 9, name: "Aston Martin2" },
    { id: 10, name: "Audi2" },
    { id: 11, name: "Make3" },
    { id: 12, name: "Abarth3" },
    { id: 13, name: "Alfa Romeo3" },
    { id: 14, name: "Aston Martin3" },
    { id: 15, name: "Audi3" },
  ];

  return {
    props: { data: carList },
  };
}
