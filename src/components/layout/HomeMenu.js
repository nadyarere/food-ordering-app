import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

function HomeMenu() {
  return (
    <section className="overflow-hidden">
      <div className="absolute right-0 left-0 w-full justify-start">
        <div className=" absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} alt="sallad1" width={109} height={189} />
        </div>
        <div className=" absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt="sallad2" width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={'Check out'} mainHeader={'Menu'}/>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
