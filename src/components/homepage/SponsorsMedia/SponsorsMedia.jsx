import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import "./sponsorMedia.css"; // Your custom styles if needed

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const SponsorsMedia = () => {
  const navigate = useNavigate();

  const ListOfSponsors = [

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

  const ListOfMediaPartners = [
    
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",/*redfm*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733689178/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_7_coo8yx.png",/*abp*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",/*campus india*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",/*EOE*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",/*kumarSpecific*/
   

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687421/Untitled_design_10_vnvn9l.png",/*startupindia*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688561/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_6_zirmcd.png",/*tgh*/

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688479/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_5_i827oc.png",/*prabhat*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688406/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_4_uzo8nd.png",/*sakal*/
    
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688332/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_3_pryu7x.png",/*BusinessSphMag*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688252/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_2_u99caj.png",/*samna*/

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688173/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_1_gqc92l.png", /*0unstop*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688067/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_fynb4d.png",/*silicon india*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687943/Untitled_design_13_aspjv3.png",/*bootstrap*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687812/Untitled_design_12_isyjc8.png",/*startupnews*/

    //repeat
    
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",/*redfm*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733689178/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_7_coo8yx.png",/*abp*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",/*campus india*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",/*EOE*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",/*kumarSpecific*/
   

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687421/Untitled_design_10_vnvn9l.png",/*startupindia*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688561/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_6_zirmcd.png",/*tgh*/

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688479/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_5_i827oc.png",/*prabhat*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688406/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_4_uzo8nd.png",/*sakal*/
    
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688332/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_3_pryu7x.png",/*BusinessSphMag*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688252/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_2_u99caj.png",/*samna*/

    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688173/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_1_gqc92l.png", /*0unstop*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688067/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_fynb4d.png",/*silicon india*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687943/Untitled_design_13_aspjv3.png",/*bootstrap*/
    "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687812/Untitled_design_12_isyjc8.png",/*startupnews*/

    // Add more media partner image URLs...
  ];

  return (
    <div className="sponsors-container">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8 Previous">
        Our Previous Sponsors
      </h1>
      <div className="swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {ListOfSponsors.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded overflow-hidden shadow-lg backdrop-blur-sm bg-white">
                <img
                  className="brightness-75"
                  src={img}
                  alt={`Sponsor ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/sponsermedia")}
          className="space-button"
          style={{ marginTop: "10px", borderColor: "#7c008d" }}
        >
          All Sponsors
        </button>
      </div>

      <h1 className="main-heading to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8 Previous">
        Previous Media Partners
      </h1>
      <div className="swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {ListOfMediaPartners.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded overflow-hidden shadow-lg backdrop-blur-sm bg-white">
                <img
                  className="brightness-75"
                  src={img}
                  alt={`Media Partner ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/mediapartner")}
          className="space-button"
          style={{ marginTop: "10px", borderColor: "#7c008d" }}
        >
          All Media Partners
        </button>
      </div>
    </div>
  );};

export default SponsorsMedia;

