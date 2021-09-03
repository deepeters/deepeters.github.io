//Import Images
import CE from "./images/CE.png";
import CE2 from "./images/CE-2.png";
import MA from "./images/MA.png";
import MA2 from "./images/MA-2.png";
import DF from "./images/DF.png";
import DF2 from "./images/DF-2.png";

export const ProjectState = () => {
  return [
    {
      title: "Currency Exchange",
      mainImg: CE,
      secondaryImg: CE2,
      url: "/projects/currency-exchange",
      detailDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, totam?",
      links: [
        {
          title: "Live Link",
          description:
            "link comes here",
        },
        {
          title: "Youtube Demo",
          description:
            "youtube link comes here",
        },
        {
          title: "Repository Link",
          description:
            "github link comes here",
        },
      ],
    },
    {
        title: "Music Application",
        mainImg: MA,
        secondaryImg: MA2,
        url: "/projects/music-application",
        detailDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, totam?",
        links: [
          {
            title: "Live Link",
            description:
              "link comes here",
          },
          {
            title: "Youtube Demo",
            description:
              "youtube link comes here",
          },
          {
            title: "Repository Link",
            description:
              "github link comes here",
          },
        ],
        
      },
      {
        title: "Douglas Fir",
        mainImg: DF,
        secondaryImg: DF2,
        url: "/projects/douglas-fir",
        detailDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, totam?",
        links: [
          {
            title: "Live Link",
            description:
              "link comes here",
          },
          {
            title: "Youtube Demo",
            description:
              "youtube link comes here",
          },
          {
            title: "Repository Link",
            description:
              "github link comes here",
          },
        ],
      },
  ];
};
