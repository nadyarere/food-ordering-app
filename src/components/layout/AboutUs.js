import SectionHeaders from "./SectionHeaders";

const AboutUs = () => {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            labore aliquam, repellat corporis eum cumque culpa. Cupiditate
            debitis provident id quaerat, harum iure aspernatur maxime ratione.
            Temporibus nisi consequatur est soluta, culpa distinctio corrupti ad
            non et reiciendis! Tempore obcaecati laborum saepe repellat ducimus
            blanditiis magni nam dignissimos optio laudantium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            fugiat reiciendis atque alias, ea, obcaecati aut, ipsam quasi saepe
            odio necessitatibus porro impedit nemo nihil vero corporis quibusdam
            eos incidunt commodi ullam. Quibusdam adipisci ullam iure delectus
            minima ipsa minus eaque blanditiis quidem. Aliquid officia ipsum
            minus, maxime ea autem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            magnam quam, nulla suscipit ipsa et praesentium corrupti rerum omnis
            dolor!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
