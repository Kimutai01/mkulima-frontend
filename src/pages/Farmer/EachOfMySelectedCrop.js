import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import Planting from "../../components/Farmer/Planting";
import SiteSelection from "../../components/Farmer/SiteSelection";
import Harvesting from "../../components/Farmer/Harvesting";
import Management from "../../components/Farmer/Management";
import Market from "../../components/Farmer/Market";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import { jsPDF } from "jspdf";
const EachOfMySelectedCrop = () => {
  const { id } = useParams();
  const [my_selected_crop, setMySelectedCrop] = useState({});

  const [stage, setStage] = useState("site selection");
  const [language, setLanguage] = useState("english");
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/selected_crops/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMySelectedCrop(data.plantable_crop);
      });
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadPdf = () => {
    // have 2 pages in the pdf
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text(0, 10, my_selected_crop.name);
    doc.setFont("helvetica", "bold");
    doc.text(0, 20, "Cost to Production per acre:");
    doc.setFont("helvetica", "normal");
    doc.text(80, 20, my_selected_crop.cost_of_production_per_acre);
    doc.setFont("helvetica", "bold");
    doc.text(0, 30, "Best Variety to grow:");
    doc.setFont("helvetica", "normal");
    doc.text(80, 30, my_selected_crop.variety);
    doc.setFont("helvetica", "bold");
    doc.text(0, 40, "Extension Officer Number:");
    doc.setFont("helvetica", "normal");
    doc.text(80, 40, my_selected_crop.extension_officer_phone_number);
    doc.setFont("helvetica", "bold");
    doc.text(0, 50, "Land Preparation:");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 55, my_selected_crop.land_preparation);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 80, "Planting ");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 85, my_selected_crop.planting);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(0, 120, "Crop Management");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 125, my_selected_crop.crop_management);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 180, "Harvesting");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 185, my_selected_crop.harvesting);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 230, "Storage");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 235, my_selected_crop.storage);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 280, "Thank you for using mche");

    doc.save(`${my_selected_crop.name} mche.pdf `);
  };

  const donwloadKiswahili = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text(0, 10, my_selected_crop.jina);
    doc.setFont("helvetica", "bold");
    doc.text(0, 20, "gharama ya uzalishaji kwa ekari :");
    doc.setFont("helvetica", "normal");
    doc.text(80, 20, my_selected_crop.cost_of_production_per_acre);
    doc.setFont("helvetica", "bold");
    doc.text(0, 30, "Aina bora ya kuzalisha:");
    doc.setFont("helvetica", "normal");
    doc.text(80, 30, my_selected_crop.variety);
    doc.setFont("helvetica", "bold");
    doc.text(0, 40, "Namba ya mtaalamu wa kilimo:");
    doc.setFont("helvetica", "normal");
    doc.text(80, 40, my_selected_crop.extension_officer_phone_number);
    doc.setFont("helvetica", "bold");
    doc.text(0, 50, "Uandaji wa ardhi:");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 55, my_selected_crop.uteuzi_wa_tovuti);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 80, "Kupanda ");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 85, my_selected_crop.kupanda);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(0, 120, "Usimamizi_wa_mazao");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 125, my_selected_crop.usimamizi_wa_mazao);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 180, "Kuvuna");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 185, my_selected_crop.uvunaji);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 230, "Hifadhi");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(0, 235, my_selected_crop.uhifadhi);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(0, 280, "Asante kwa kutumia mche");

    doc.save(`${my_selected_crop.jina} mche.pdf `);
  };

  return (
    <div className="pt-16 kulim-park">
      <div>
        {stage === "site selection" && (
          <div className="text-xl font-bold text-center flex justify-center gap-2   text-[#3B841F] md:text-5xl ">
            <h1 className="justify-center edunswact text-5xl flex items-center">
              {language === "english" ? "Plan" : "Kuandaa"}
            </h1>
            <img src={one} alt="one" className="w-20" />
          </div>
        )}
        {stage === "planting" && (
          <div className="text-xl font-bold text-center flex justify-center gap-2   text-[#3B841F] md:text-5xl ">
            <h1 className="justify-center edunswact text-5xl flex items-center">
              {language === "english" ? "Plant" : "Kupanda"}
            </h1>
            <img src={two} alt="two" className="w-20" />
          </div>
        )}
        {stage === "harvesting" && (
          <div className="text-xl font-bold text-center flex justify-center gap-2   text-[#3B841F] md:text-5xl ">
            <h1 className="justify-center  edunswact text-5xl flex items-center">
              {language === "english" ? "Harvest" : "Kuvuna"}
            </h1>
            <img src={four} alt="four" className="w-20" />
          </div>
        )}
        {stage === "management" && (
          <div className="text-xl font-bold text-center flex justify-center gap-2   text-[#3B841F] md:text-5xl ">
            <h1 className="justify-center edunswact text-5xl flex items-center">
              {language === "english" ? "Manage" : "Kupanga"}
            </h1>
            <img src={three} alt="three" className="w-20" />
          </div>
        )}

        <div className="flex justify-center gap-4">
          <p className="text-3xl text-[#3B841F] ">
            {language === "english" ? "Choose your Site" : "Chagua eneo lako"}
          </p>
          <p className="mb-2 text-gray-400   text-xl">................</p>
          <p className="text-3xl  text-[#3B841F]">
            {language === "english" ? "Choose your crop" : "Chagua mbegu yako"}
          </p>
          <p className="mb-2 text-gray-400 text-xl">................</p>
          <p className="text-3xl  text-[#3B841F]">
            {language === "english" ? "Advisory" : "Ushauri"}
          </p>
        </div>
      </div>

      {my_selected_crop && (
        <div className="pt-12">
          <div className="flex justify-center gap-12">
            <div className="w-1/2 text-center flex justify-center flex-col gap-2">
              <h1 className="text-[#3B841F] text-5xl my-4">
                {language === "english"
                  ? my_selected_crop.name
                  : my_selected_crop.jina}
              </h1>

              <h1 className="text-xm text-center text-[#3B841F] ">
                Choose the language you want to use for the advisory
              </h1>

              <div className="flex justify-center">
                <div
                  className="flex border rounded-l-2xl  py-2 px-4 justify-center gap-2"
                  style={{
                    border: "2px solid #3B841F",
                  }}
                >
                  <input
                    type="radio"
                    name="language"
                    id="english"
                    value="english"
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <label htmlFor="english">English</label>
                </div>

                <div
                  className="flex border rounded-r-2xl  py-2 px-4 justify-center gap-2"
                  style={{
                    border: "2px solid #3B841F",
                    borderLeft: "none",
                  }}
                >
                  <input
                    type="radio"
                    name="language"
                    id="kiswahili"
                    value="kiswahili"
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <label htmlFor="kiswahili">Kiswahili</label>
                </div>
              </div>

              <p className="font-italic">
                {language === "english"
                  ? `Thinking of growing
                  ${my_selected_crop.name}?`
                  : `Unafikiria kukuza
                  ${my_selected_crop.jina}?`}
              </p>
              <p>
                {language === "english"
                  ? "Here's a short summary of what exactly you might need to consider"
                  : "Hapa kuna muhtasari wa kina kuhusu mambo unayoweza kufikiria"}
              </p>
              <p className="font-bold text-xl edunswact ">
                {language === "english"
                  ? `  In case you need more information, you can always contact your
                extension officer on ${" "}
                ${my_selected_crop.extension_officer_phone_number}`
                  : `Ikiwa utahitaji habari zaidi, unaweza kuwasiliana na yako kila wakati
                afisa wa upanuzi kwenye ${""}
                ${my_selected_crop.extension_officer_phone_number}`}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between w-[50%] mx-auto">
                  <p className="text-[#3B841F]">Cost of production:</p>
                  <p>{my_selected_crop.cost_of_production_per_acre}</p>
                </div>

                <p
                  className="  w-[50%] mx-auto"
                  style={{
                    borderBottom: "2px solid #7DD959",
                  }}
                ></p>
              </div>
              <p className="my-4 w-[80%] mx-auto">
                {language === "english"
                  ? my_selected_crop.description
                  : my_selected_crop.maelezo}
              </p>

              <div className="flex justify-center gap-4">
                <button
                  className="bg-[#7DD959] text-white px-4 py-2 flex justify-center gap-2 rounded-lg"
                  onClick={() => {
                    if (language === "english") {
                      downloadPdf();
                    }
                    if (language === "kiswahili") {
                      donwloadKiswahili();
                    }
                  }}
                >
                  {language === "english" ? "Download Pdf" : "Pakua Pdf"}{" "}
                  <HiDownload className="text-white text-2xl" />
                </button>
              </div>
            </div>
            <div>
              <img
                src={my_selected_crop.image}
                alt="splash"
                className=" w-[550px] h-[80vh] rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-32 border-b-2 border-[#3B841F] w-[80%] mx-auto my-4">
        <p
          className={
            stage === "site selection"
              ? "text-xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-xl  cursor-pointer  font-bold px-4 py-2"
          }
          onClick={() => setStage("site selection")}
        >
          {language === "english" ? "Site Selection" : "Uchaguzi wa eneo"}
        </p>
        <p
          className={
            stage === "planting"
              ? "text-xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-xl  cursor-pointer font-bold px-4 py-2 "
          }
          onClick={() => setStage("planting")}
        >
          {language === "english" ? "Planting" : "Kuandaa mazao"}
        </p>
        <p
          className={
            stage === "management"
              ? "text-xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-xl  cursor-pointer font-bold px-4 py-2 "
          }
          onClick={() => setStage("management")}
        >
          {language === "english" ? "Management" : "Usimamizi"}
        </p>
        <p
          className={
            stage === "harvesting"
              ? "text-xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-xl  cursor-pointer font-bold px-4 py-2"
          }
          onClick={() => setStage("harvesting")}
        >
          {language === "english" ? "Harvesting" : "Kuvuna"}
        </p>
        <p
          className={
            stage === "market"
              ? "text-xl text-white bg-[#3B841F] cursor-pointer px-4 py-2 font-semibold "
              : "text-xl  cursor-pointer font-bold px-4 py-2 "
          }
          onClick={() => setStage("market")}
        >
          {language === "english" ? "Market" : "Soko"}
        </p>
      </div>
      <div>
        {stage === "site selection" && (
          <SiteSelection
            my_selected_crop={my_selected_crop}
            language={language}
          />
        )}
        {stage === "planting" && (
          <Planting my_selected_crop={my_selected_crop} language={language} />
        )}
        {stage === "management" && (
          <Management my_selected_crop={my_selected_crop} language={language} />
        )}
        {stage === "harvesting" && (
          <Harvesting my_selected_crop={my_selected_crop} language={language} />
        )}
        {stage === "market" && (
          <Market
            my_selected_crop={my_selected_crop}
            mySelectedCropId={my_selected_crop.id}
            language={language}
          />
        )}
      </div>
    </div>
  );
};

export default EachOfMySelectedCrop;
