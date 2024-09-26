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
      <div className="relative w-full h-[16rem] md:h-[70vh]">
        <img
          className="w-full object-cover h-full"
          src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fteam.svg?alt=media&token=ed5d2b86-faba-4d7c-b9c6-af9c33345c86"
          alt="About Us"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] ps-[10] md:ps-[1rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FNew%20logo%20(3).svg?alt=media&token=785637f7-1df8-4c7e-9e92-1f5e0a91e73c"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-center text-[16px] font-medium md:text-[20px] absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Team Famto
          </h4>
        </div>
      </div>
      <div className="my-[50px]">
        <p className="max-w-[90%] mx-auto text-start ps-2 md:text-[14px] font-normal text-[13px]">
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

      <section className="w-fit md:w-[90%] mx-auto px-[1rem] md:px-[0rem] py-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[30px]">
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FSujith%20Sir.jpg?alt=media&token=c25fe84e-38d7-40c0-9ba2-e654468a2305"
            name="J Sujith"
            role="Director"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FMagi.jpg?alt=media&token=ef09ca93-1778-4f17-9a2c-dd29b6aed899"
            name="Magi GR"
            role="Director"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fsangeetha%20(1).jpg?alt=media&token=6788958f-d87a-434e-8fa3-2ae3809ded34"
            name="Sangeetha TP"
            role="Business Development Executive"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FAadhi.jpg?alt=media&token=fa0831ae-ad53-4dd4-a4de-d7fea7532c5f"
            name="Aadhil Muhammed H"
            role="HR Executive"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Friyas%20(2).jpg?alt=media&token=9cd22d3c-ca8a-4158-afd7-8aa596a55543"
            name="Riyas F"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FAkhilRaj.jpg?alt=media&token=d1821f0e-c967-40f8-a46c-974015a65192"
            name="Akhilraj B"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FAkhilBabu.jpg?alt=media&token=f2c38eb6-d3ac-486f-98f5-277c3ce0bdb0"
            name="Akhil Babu S"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FSarathRs.jpg?alt=media&token=9a872f4e-646b-4a30-b726-470ce90c5c3b"
            name="Sarath R S"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FGowri%20US.jpg?alt=media&token=404e67d5-610c-4105-bdaa-2b9afa7f143f"
            name="Gowri U S"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FSarath%20S%20B.jpg?alt=media&token=1220650c-c7b1-4d17-9e61-09457f82c5a7"
            name="Sarath S B"
            role="Software Developer"
          />
          <Card
            image="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FSanju.jpg?alt=media&token=2c8cbcb2-5c87-4cdf-b2de-b7c10a3d86d7"
            name="Sanju Bahukuttan"
            role="Business Development Executive"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
