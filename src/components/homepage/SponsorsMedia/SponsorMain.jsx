import React from 'react'
import SponsorsMedia from './SponsorsMedia.jsx'
import"./SponsorMain.css"
import { useNavigate } from 'react-router-dom'

export const SponsorMain = () => {
    const navigate = useNavigate();

    const SponsorImages = [
        [
            "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/ghbucwukzav2f63jmqyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ezflynldz6c5e1pnbcw3.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/indtdbdyvuqne7jqt8xz.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/oujirgalpbgpkr66aipo.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/f9wchu6pvannqhnxom7z.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708014297/Sponsors_webp/j209kuroisn3hd0scp9y.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/kyvyyi7gjsgheqsjlnzu.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/oafgn40qgljd2ydfts2w.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/zlaq2cgxmphe6u6mnhxl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/pvxaq7j6hwzpvcwsvrwg.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/d9dkdoowhgdqovyoada2.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ooz63xbjc9jfjp9j0yww.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/gru2nflgjncvm5s7c7rq.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/daklik83d25fpbjhcptm.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/clkhde4wtshuruzn9b0i.webp",
    
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ezflynldz6c5e1pnbcw3.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/ghbucwukzav2f63jmqyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/indtdbdyvuqne7jqt8xz.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/oujirgalpbgpkr66aipo.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/f9wchu6pvannqhnxom7z.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708014297/Sponsors_webp/j209kuroisn3hd0scp9y.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/kyvyyi7gjsgheqsjlnzu.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/oafgn40qgljd2ydfts2w.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/zlaq2cgxmphe6u6mnhxl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/pvxaq7j6hwzpvcwsvrwg.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/d9dkdoowhgdqovyoada2.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ooz63xbjc9jfjp9j0yww.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/gru2nflgjncvm5s7c7rq.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/daklik83d25fpbjhcptm.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/clkhde4wtshuruzn9b0i.webp",
        ]
      
    ];


    const mediaImages=[[
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/y2gedmgbptiikgp4auev.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/hpyyofmhvq05bzfkthmi.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/sxeebenslrzkugnafkxv.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/mxjvj21hxlj8pr4vpqz0.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/p3tnwcixgvziwxkgtqjy.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1709050046/logo_sy_4_kdsogo.png",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708017541/Parteners/eoptm6fv7sersqfmxakb.png",/*tgh*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/oenvwavqufn9mnqyqvkd.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/j65lz2mbx2piln7kz2jr.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/fu4otcyc1ijpjcdkvyxy.webp",/*prabhat*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708018109/Parteners/fz8l9u3jmflviqzwyukt.png", /*0unstop*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708018193/Parteners/mgkcx8khmcrtuiihm3aw.png",/*silicon india*/
        //repeat
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/y2gedmgbptiikgp4auev.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/hpyyofmhvq05bzfkthmi.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/sxeebenslrzkugnafkxv.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/mxjvj21hxlj8pr4vpqz0.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/p3tnwcixgvziwxkgtqjy.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1709050046/logo_sy_4_kdsogo.png",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708017541/Parteners/eoptm6fv7sersqfmxakb.png",/*tgh*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/oenvwavqufn9mnqyqvkd.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/j65lz2mbx2piln7kz2jr.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/fu4otcyc1ijpjcdkvyxy.webp",/*prabhat*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708018109/Parteners/fz8l9u3jmflviqzwyukt.png", /*0unstop*/
        "https://res.cloudinary.com/di40y80dw/image/upload/v1708018193/Parteners/mgkcx8khmcrtuiihm3aw.png",/*silicon india*/
    
    
      ]]
  return (
   <div className="main-container-sponsor">
    <div className="sponser-title">
    Our Previous Sponsers
    </div>
    <div className="sponsor-marquee">


        <SponsorsMedia images={SponsorImages}/>
        


    </div>
  
        
   <div className="button-container">
      <button
        onClick={() => {
         navigate('/sponsermedia');
        }}
        className="space-button"
      >
        All Previous Sponsors
      </button>
  </div>


  <div className="sponser-title">
    Previous Media Partners
    </div>
    <div className="media-marquee">


   <SponsorsMedia images={mediaImages}/>



     </div>

     <div className="button-container">
      <button
        onClick={() => {
         navigate('/sponsermedia');
        }}
        className="space-button"
      >
        All Previous Media Partners
      </button>
  </div>


   </div>
   
  )
}

export default SponsorMain;
