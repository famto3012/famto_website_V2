import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Blog_August = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  return (
    <main className="relative">
      <div className="relative w-full bg-[#00ced1] ">
        <div className="inset-0 bg-gradient-to-bl from-[#014546] via-black/35 to transparent h-[19rem] md:h-[70vh] flex items-center justify-center md:space-x-4 space-x-3">
          <figure className="md:h-[4rem] h-[2rem]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FNew%20logo%20(30)%201.svg?alt=media&token=5491c133-13a7-4e45-8edb-a0a36f338536"
              alt=""
              className="object-cover h-full"
            />
          </figure>
          <h1 className="text-white text-center text-[14px] md:text-[32px] font-semibold">
            Famto<span className="italic font-thin md:px-3 px-1">honours</span>
          </h1>
        </div>

        <div className="absolute inset-0">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[2rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:ps-[4rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FNew%20logo%20(3).svg?alt=media&token=785637f7-1df8-4c7e-9e92-1f5e0a91e73c"
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <section className="w-full text-[13px] md:text-[14px] mx-auto px-[2rem] md:px-[4rem] py-[1rem] mb-20">
        <Link to="/blogs">
          <div className="text-black flex items-center my-2 gap-x-2 underline underline-offset-2">
            <WestOutlinedIcon /> Back
          </div>
        </Link>
        <div className="flex flex-col md:items-center md:justify-center md:text-center py-10 w-full md:w-[80%]  mx-auto">
          <h1 className="text-[18px] font-semibold md:text-[26px] lg:text-[32px] leading-tight">
            "An Award that Fuels Our Drive for Continuous Excellence"
          </h1>
          <h1 className="text-black/25 md:mt-4 order-4 md:order-3">
            August 01,2024
          </h1>
          <h1 className="text-cyan-400 italic md:mt-4 my-4 font-semibold order-3 md:order-4">
            By Famto content team
          </h1>
        </div>
        <div className="flex items-center justify-center rounded-lg mx-auto order-1 lg:order-2">
          <figure className="h-[20rem] lg:w-auto lg:h-[20rem] max-w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FKarma%20awards.svg?alt=media&token=7940152e-67e9-41fb-90a9-eddb2ba2a2df"
              alt=""
              className=" object-cover rounded-lg h-full w-full"
            />
          </figure>
        </div>
        {/* <div className="grid grid-cols-1 md:space-y-4 lg:grid-cols-3 lg: items-center md:mb-[3rem] mb-[1rem] w-full gap-8"> */}
        <div className=" md:space-y-5 py-10 order-2 lg:order-1">
          <p>
            At a prestigious event hosted by the Sree Vidya Kalanikethan
            Cultural Society, the Director of a unique delivery service was
            honored with an award recognizing outstanding contributions to the
            business world, particularly in the online delivery sector. This
            service, known for operating without the use of an app, has set a
            new standard for reliability and speed. With an incredible track
            record, it has become a lifeline for the elderly, ensuring they
            receive essential items quickly and efficiently. The service is
            highly flexible, adapting to each customer's specific needs and
            preferences, making it an invaluable resource for those who may have
            limited mobility or access to technology.
          </p>
        </div>
        {/* </div> */}
        <div className="space-y-6">
          <p>
            <span className="font-[600]">The Ceremony: </span>The award
            ceremony, held during the 12th anniversary of the SreeVidya
            Kalanikethan Cultural Society. The event was attended by notable
            figures and well-wishers who gathered to celebrate the achievements
            of women entrepreneurs making a difference in their communities
          </p>
          <p>
            <span className="font-[600]">
              A Journey of Resilience and Vision:{" "}
            </span>
            In the online delivery space, especially through Famto, has not only
            set new standards in the industry but also provided opportunities
            and convenience to many, including the elderly population who
            benefit from her tailored services
          </p>
          <p>
            This recognition by the SreeVidya Kalanikethan Cultural Society is a
            testament to our hard work, dedication, and the impact we has made.
          </p>
          <p>
            <span className="font-[600]">In the Media Spotlight:</span>
            The event and the award given to Famto's innovative service did not
            go unnoticed by the media. Local newspapers highlighted the
            service's achievements, underscoring the significance of its
            contributions to the business community and the positive ripple
            effect it continues to create. The recognition also emphasizes the
            importance of supporting businesses that prioritize accessibility
            and community service, ensuring they have the platforms and
            opportunities needed to thrive.
          </p>
          <p>
            <span className="font-[600]">Looking Ahead:</span> As Famto
            continues to lead with innovation and compassion, its story serves
            as a powerful reminder that success is not just about business
            growth, but about making a tangible difference in the lives of
            others. The work done by Famto is a shining example of how a
            service, even without the use of an app, can create meaningful
            change by meeting the needs of the community, especially the
            elderly.
          </p>
          <p>
            The award from SreeVidya Kalanikethan Cultural Society marks a
            significant milestone in Famto’s journey, one that promises even
            greater achievements in the future. Famto's story will undoubtedly
            inspire many more to follow its model, embracing challenges, and
            turning them into opportunities for growth and community betterment
          </p>
          <h3 className="font-[600]">Conclusion</h3>
          <p>
            Famto's recognition as a leading service provider is well-deserved,
            highlighting its relentless pursuit of excellence and commitment to
            community service. As it continues to innovate and lead, Famto's
            story will inspire others to believe in the power of their vision
            and the impact they can make in the world.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog_August;
