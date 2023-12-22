import SectionHeaders from "./SectionHeaders";

const Contact = () => {
  return (
    <>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+628128649648"
          >
            +62 8128 649 648
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
