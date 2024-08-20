import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { useEffect } from "react";

const Team = () => {
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
      <div className="relative w-full">
        <img className="w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fteam.svg?alt=media&token=ed5d2b86-faba-4d7c-b9c6-af9c33345c86" alt="About Us" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-center text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Team Famto
          </h4>
        </div>
      </div>
      <div className="my-[50px]">
        <p className="max-w-[90%] mx-auto text-balance">
          Welcome to our "Team Famto" page, where you'll discover the vibrant
          personalities behind our organization. Delve into the diverse
          backgrounds, expertise, and passions of each member who contributes to
          our collective success. From visionary leaders to dedicated
          specialists, our team embodies a shared commitment to excellence,
          innovation, and collaboration. Get to know the faces driving our
          mission forward and find out how their unique talents and experiences
          align with our values and goals.
        </p>
      </div>

      <section className="w-full md:w-[90%] mx-auto px-[1rem] md:px-[0rem] py-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[30px]">
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fsujithsir.jpg?alt=media&token=9470743d-d0cd-46f0-a0a6-f9159452a272" name="J Sujith" role="Director" />
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fmagimadam.jpg?alt=media&token=3ae9ac4c-6ca4-46d4-9150-4adf853fdbe5" name="Magi GR" role="Director" />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Faadhil.jpg?alt=media&token=a8294fb4-40ad-4317-9abd-00ffd8996907"
            name="Aadhil Muhammed H"
            role="HR Executive"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fsangeetha.jpg?alt=media&token=3c60ef30-c51d-4516-9776-826a8189b8a8"
            name="Sangeetha TP"
            role="Business Development Executive"
          />
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Friyas.jpg?alt=media&token=ae5a35d4-3483-44ac-886f-f77df05d3f08" name="Riyas F" role="Software Developer" />
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fakhil.jpg?alt=media&token=cd8f4dcb-9587-45ba-a350-7e13f80a474f" name="Akhilraj B" role="Software Developer" />
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fakhilbabu.jpg?alt=media&token=2b46e78f-7426-49bc-bbd7-87156e828972" name="Akhil Babu S" role="Software Developer" />
          <Card image="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fsarath.png?alt=media&token=2f016583-5d8a-454a-9e8b-55551afdabcf" name="Sarath R S" role="Software Developer" />
        </div>
      </section>

      <Whatsapp />

      <Footer />
    </main>
  );
};

export default Team;