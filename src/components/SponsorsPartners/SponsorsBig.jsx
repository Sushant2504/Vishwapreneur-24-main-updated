import React from "react";

const SponsorCard = ({ img }) => {
  return (
    <>
      <span className="mx-1 ">
        <div className=" h-30 max-w-10 rounded overflow-hidden shadow-lg backdrop-blur-sm inline-block">
          <img className="brightness-50 grayscale" style={{"filter": "brightness(0.1)"}} src={img} alt="brand Logo" />
        </div>
      </span>
    </>
  );
};
const SponsorsAll = () => {
  let ListOfSponsors = [
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965527/VP-23/sponsors-photo/twj-01_o9auxe.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965467/VP-23/sponsors-photo/kiranacademy-01_jsoztm.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/herody-01_brshxy.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965714/VP-23/sponsors-photo/aecc-01_rsiu2e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/newstride-01_hhrx5e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677479947/VP-23/sponsors-photo/edwise-01_tvwxnw.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676206111/VP-23/sponsors-photo/peterengland-01_sgqpek.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/ather-01_vapcah.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/hero_new-01_etsbgs.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/stackos-01_mhietf.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/balaji-01_akpawr.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/haldiram-01_ki7j2w.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/budhani-01_h2vmka.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/smita-01_rudjre.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/growthschool-01_mhrxpp.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204645/VP-23/sponsors-photo/bliss_coffee-01_z9wsyq.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965398/VP-23/sponsors-photo/interview_buddy-01_yd0371.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677038643/VP-23/sponsors-photo/wellness-01_xaj2v6.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/my_nutrition-01_jajigx.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677478746/VP-23/sponsors-photo/nufurn-01_umzvwp.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965527/VP-23/sponsors-photo/twj-01_o9auxe.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965467/VP-23/sponsors-photo/kiranacademy-01_jsoztm.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/herody-01_brshxy.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965714/VP-23/sponsors-photo/aecc-01_rsiu2e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/newstride-01_hhrx5e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677479947/VP-23/sponsors-photo/edwise-01_tvwxnw.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676206111/VP-23/sponsors-photo/peterengland-01_sgqpek.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/ather-01_vapcah.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/hero_new-01_etsbgs.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/stackos-01_mhietf.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/balaji-01_akpawr.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/haldiram-01_ki7j2w.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/budhani-01_h2vmka.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/smita-01_rudjre.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/growthschool-01_mhrxpp.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204645/VP-23/sponsors-photo/bliss_coffee-01_z9wsyq.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965398/VP-23/sponsors-photo/interview_buddy-01_yd0371.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677038643/VP-23/sponsors-photo/wellness-01_xaj2v6.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/my_nutrition-01_jajigx.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677478746/VP-23/sponsors-photo/nufurn-01_umzvwp.png",
  ];
 
  return (
    <>
      <div className="bg-black group">
        <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
          Sponsors and Media Partners
        </h1>



        <div className="relative flex overflow-x-hidden ">
          <div className="py-2 animate-marqueeInternal1 whitespace-nowrap ">
            {ListOfSponsors.map((img, index) => (
              <>
                <SponsorCard key={index} img={img} />
              </>
            ))}
          </div>
        </div>
        <div className="relative flex overflow-x-hidden bg-black">
          <div className="py-2 animate-marqueeInternal2 whitespace-nowrap ">
            {ListOfSponsors.map((img, index) => (
              <SponsorCard key={index} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsAll;
