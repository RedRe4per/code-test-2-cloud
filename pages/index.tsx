import MyListbox from "@/components/Listbox";
import Button from "@/components/Buttons";

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

export default function Home() {
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
            <Button color="primary" size="normal">
              Subscribe to Generate Summary Report
            </Button>
          </section>
        </section>
      </main>
    </>
  );
}
