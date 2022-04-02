import { useEffect, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import Carousel from "react-elastic-carousel";
import { News2 } from "../News2/News2";
import { News3 } from "../News3/News3";
import { News4 } from "../News4/News4";
import { Scroll } from "../Scroll/Scroll";

export const LandingPage = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 2 },
    { width: 200, itemsToShow: 3 },
    { width: 300, itemsToShow: 4 },
  ];
  const breakpoints2 = [{ width: 1, itemsToShow: 1 }];
  const api = "852b09e330cd44518bd49a10d6559e9d";
  // const [news, setNews] = useState([]);
  const [topnews, setTopnews] = useState([]);
  const visualnews = {
    visualstories: [
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6277/assets/13.jpeg?time=1648637316&size=125:168",
        title: "Best Camera Phones Under Rs 30000",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6275/assets/17.jpeg?time=1648635894&size=125:168",
        title: "Rab Ne Banadi Jodi: Tejasswi & Karan",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6276/assets/13.jpeg?time=1648636119&size=125:168",
        title: "IPL 2022: Orange Cap List After Round 1",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6274/assets/15.jpeg?time=1648635876&size=125:168",
        title: "Pooja Hegda Love For Florias",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6270/assets/18.jpeg?time=1648628434&size=125:168",
        title: "8 Most Expensive Indian Films",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6264/assets/19.jpeg?time=1648567488&size=125:168",
        title: "Alia Bhat: Full of Life And Love",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6263/assets/20.jpeg?time=1648559803&size=125:168",
        title: "Hottie Jennifer Winget",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6253/assets/15.jpeg?time=1648548292&size=125:168",
        title: "Aadi Gert Engaged to Nikki Galrani",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6250/assets/20.jpeg?time=1648543948&size=125:168",
        title: "7 Times Schumer stole joikes",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6248/assets/14.jpeg?time=1648536277&size=125:168",
        title: "Hardik Pandya, KL Rahul in IPL bromance",
      },
    ],
  };

  const special = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/sri_lanka_crisis.jpeg?size=647:363",
      desc: "How Sri Lankan economic crisis unfolded | Infographic",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/WHO_1200x768.jpeg?size=647:363",
      desc: "Covid deaths see 43% spike in last week, WHO concerned about reduced testing",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/wang_yi_1200x768.png?size=647:363",
      desc: "Wang Yi visit and the Chinese art of deception",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/WhatsApp_Image_2022-03-30_at_8.jpeg?size=647:363",
      desc: "Arvind Kejriwal and his ‘The Kashmir Files’ firefighting",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Sri_Lanka__AP__1200x768.jpeg?size=647:363",
      desc: "Refugees, inflation and power cuts: How Sri Lanka walked itself into a mess",
    },
  ];
  const News = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Jaishankar_Lavrov_1200x768.jpeg?size=483:271",
      desc: "As West tries to coax India to condemn Russia's Ukraine invasion, Jaishankar maintains neutral stance",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Cover_Image_-_Genome.png?size=237:133",
      desc: "Now we know what makes us. Researchers decode full human genome",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/WhatsApp_Image_2022-04-01_at_1_1_1200x768.jpeg?size=237:133",
      desc: "TMC mocks BJP's 'acche din' with Oscars slapgate meme on April Fool's day",
    },
  ];

  useEffect(() => {
    // getDataMain();
    getTopnewsData();
    // getVisualnewsData();
  }, []);
  // const getDataMain = () => {
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/everything?q=Apple&from=2022-03-30&sortBy=popularity&apiKey=${api}`
  //     )
  //     .then((res) => {
  //       setNews(res.data.articles);
  //       // console.log("data:", res);
  //     });
  // };

  const getTopnewsData = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`)
      .then((res) => {
        setTopnews(res.data.articles);
        // console.log("data:", topnews);
      });
  };
  // const getVisualnewsData = () => {
  //   axios
  //     .get(
  //       `https://localhost:3001`
  //     )
  //     .then((res) => {
  //       // setVisualnews(res.data.sources);
  //       console.log("data:", res);
  //     });
  // };

  return (
    <div className="maindiv">
      <div id="child-div">
        <div className="newsdiv">
          <div>
            <div className="imgdiv">
              <img className="newsimg" src={News[0].img} alt="" />
            </div>
            <h1 className="newstitle">{News[0].desc}</h1>
          </div>
          <div className="newsdiv1-1">
            <div>
              <div className="img0div">
                <img className="img0" src={News[1].img} alt="" />
              </div>
              <h1 className="newstitle0">{News[1].desc}</h1>
            </div>
            <div>
              <div className="img0div">
                <img className="img0" src={News[2].img} alt="" />
              </div>
              <h1 className="newstitle0">{News[2].desc}</h1>
            </div>
          </div>
        </div>
        <div className="topnewsdiv">
          <h2 className="topstoriesh2">TOP STORIES</h2>
          {topnews.map((e) => {
            return (
              <div className="topnewsdiv1-1">
                <h3 className="topnewstitle">{e.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container2">
        <div className="visual">
          <h2>VISUAL STORIES</h2>
          <div className="visualnewsouterdiv">
            <Carousel breakPoints={breakpoints}>
              {visualnews.visualstories.map((e) => {
                return (
                  <div className="visualnewsdiv">
                    <img className="visualnewsimg" src={e.img} alt="" />
                    <h2 className="visualnewstitle">{e.title}</h2>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="todaysspecial">
          <h2>TODAY'S SPECIAL</h2>
          <div className="todaysspecialdiv">
            <Carousel breakPoints={breakpoints2}>
              {special.map((e) => {
                return (
                  <div className="todaysspecialdiv-1">
                    <img src={e.img} alt="" />
                    <p>{e.desc}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <News2 />
      <News3 />
      <News4 />
      <Scroll />
    </div>
  );
};
