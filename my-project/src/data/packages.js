import tawangOne from "../../public/images/IMG_3991.JPG.jpeg";
import tawangTwo from "../../public/images/IMG_4232.JPG.jpeg";
import tawangThree from "../../public/images/IMG_4249.JPG.jpeg";
import tawangFour from "../../public/images/IMG_6047 3.jpg.jpeg";
import tawangFive from "../../public/images/IMG_6632.jpg";
import tawangSix from "../../public/images/IMG_7001.jpg";
import tawangSeven from "../../public/images/IMG_7013.jpg";
import tawangEight from "../../public/images/IMG_7050.jpg";
import tawangNine from "../../public/images/sikkim.jpg";
import tawangTen from "../../public/images/sikkim2.jpg";

export const packages = [
  {
    id: 1,
    title: "Tawang Tour",
    duration: "5 Days / 4 Nights",
    price: 9999,

    location: "Tawang, Arunachal Pradesh",

    image:
      "https://images.unsplash.com/photo-1628070018796-a9f4e2dd482a?q=80&w=1170",

    gallery: [
      tawangOne,
      tawangTwo,
      tawangThree,
      tawangFour,
      tawangFive,
      tawangSix,
      tawangSeven,
      tawangEight,
      tawangNine,
      tawangTen,
    ],

    video: "https://www.youtube.com",

    description:
      "Discover the breathtaking beauty of Tawang in Arunachal Pradesh. Visit the famous Tawang Monastery, cross the scenic Sela Pass, and explore stunning Himalayan landscapes.",

    highlights: [
      "Visit Tawang Monastery",
      "Drive through Sela Pass",
      "Explore Bum La Pass",
      "Visit Madhuri Lake",
      "Experience Monpa culture",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        description: "Arrival and transfer to Bhalukpong.",
      },
      {
        day: 2,
        title: "Bhalukpong to Tawang",
        description: "Travel via Sela Pass and Jaswant Garh.",
      },
      {
        day: 3,
        title: "Explore Tawang",
        description: "Visit monasteries and local markets.",
      },
      {
        day: 4,
        title: "Bum La Pass",
        description: "Excursion to Bum La Pass and Sangetsar Lake.",
      },
      {
        day: 5,
        title: "Return",
        description: "Return journey to Guwahati.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast and dinner",
      "Transportation",
      "Guide assistance",
    ],

    exclusions: ["Airfare", "Personal expenses", "Travel insurance"],

    reviews: [
      {
        name: "Rahul Sharma",
        rating: 5,
        comment: "The views in Tawang are unforgettable.",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=Tawang&output=embed",

    pdf: "/pdf/tawang-itinerary.pdf",
  },

  {
    id: 2,
    title: "Explore Meghalaya 🏔️",
    duration: "4 Days / 3 Nights",
    price: 6999,

    location: "Meghalaya, India",

    image:
      "https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?q=80&w=1074",

    gallery: [
      "https://images.unsplash.com/photo-1625654325562-762dcec9e6f2",
      "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],

    video: "https://www.youtube.com/embed/XQ8fGq5J9nM",

    description:
      "Explore the magical land of Meghalaya including Cherrapunji, Dawki river, living root bridges, and stunning waterfalls.",

    highlights: [
      "Visit Dawki crystal river",
      "Living root bridges",
      "Explore Cherrapunji caves",
      "Asia's cleanest village Mawlynnong",
    ],

    itinerary: [
      {
        day: 1,
        title: " Guwahati to Cherrapunji",
        description:
          "Stop 1: Umiam Lake. Great for a quick photo op or 15 min.Stop 2: Laitlum Canyons. This is a detour from the main SH-5 highway.Arrival: Reach Cherrapunji by evening. You can catch the Seven Sisters Falls at sunset, though they are most impressive during or just after the monsoon.",
      },
      {
        day: 2,
        title: "Cherrapunji - Tyrna Village",
        description:
          "The Trek: The Double Decker Living Root Bridge trek starts from Tyrna village. It involves about 3,500 steps one way. Blue Lagoon: This is a stunning turquoise pool a bit further from double decker bridge. ",
      },
      {
        day: 3,
        title: "The Jaintia Hills Transition",
        description:
          "Drive Time: Cherrapunji to Krang Suri (Jowai) is roughly a 3-hour drive through very winding roads.Krang Suri: Famous for its crystal blue water. You can swim here (life jackets are mandatory).The Optional Dilemma: * Phe Phe Falls is spectacular but requires a small trek and a boat crossing.",
      },
      {
        day: 4,
        title: "Jowai to Guwahat",
        description:
          "This is about a 4.5 to 5-hour drive (approx. 160 km).Dropping at Airport /Railway Station",
      },
    ],

    inclusions: [
      "Accommodation in 3 Star hotels on double sharing",
      "Meal Plan: Breakfast at Hotels",
      "All transfers & Sighgseeing as per Itinerary,Driver allowances, Toll Tax, Parking Charges, States Tax,Professional Tour Guide to assist throughout the Trip",
    ],
    exclusions: [
      "Personal expenses such as drinks, laundry, camera fees or any other item",
      "Entry tickets and activities",
      "Lunch and dinner though out the tour",
      "International/Domestic airfare, visa fees, airport tax or any kind of insurance cover",
    ],

    reviews: [
      {
        name: "Sophia Williams",
        rating: 5,
        comment: "Dawki river is unreal. A must visit!",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=Meghalaya&output=embed",

    pdf: "/pdf/meghalaya-tour.pdf",
  },

  {
    id: 3,
    title: "North Sikkim Valley",
    duration: "5 Days / 4 Nights",
    price: 11999,

    location: "North Sikkim",

    image:
      "https://images.unsplash.com/photo-1551155311-88cda3ebe650?q=80&w=1068",

    gallery: [
      "https://images.unsplash.com/photo-1551155311-88cda3ebe650",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    ],

    video: "https://www.youtube.com/embed/Scxs7L0vhZ4",

    description:
      "Journey through the breathtaking valleys of North Sikkim including Lachung and Yumthang Valley.",

    highlights: [
      "Yumthang Valley",
      "Gurudongmar Lake",
      "Lachung village",
      "Snow mountain views",
    ],

    itinerary: [
      { day: 1, title: "Gangtok Arrival", description: "Explore Gangtok." },
      { day: 2, title: "Lachung", description: "Travel to Lachung." },
      { day: 3, title: "Yumthang", description: "Visit Yumthang Valley." },
      { day: 4, title: "Return", description: "Back to Gangtok." },
      { day: 5, title: "Departure", description: "Departure." },
    ],

    inclusions: ["Hotel", "Meals", "Transport"],
    exclusions: ["Flights", "Insurance"],

    reviews: [
      {
        name: "Ankit Verma",
        rating: 5,
        comment: "North Sikkim landscapes are magical.",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=North%20Sikkim&output=embed",

    pdf: "/pdf/north-sikkim-tour.pdf",
  },

  {
    id: 4,
    title: "East Sikkim Scenic Tour",
    duration: "5 Days / 4 Nights",
    price: 10999,

    location: "East Sikkim",

    image:
      "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?q=80&w=1170",

    gallery: [
      "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a",
    ],

    video: "https://www.youtube.com/embed/XQ8fGq5J9nM",

    description:
      "Explore Tsomgo Lake, Baba Mandir, and Nathula Pass with breathtaking Himalayan scenery.",

    highlights: ["Tsomgo Lake", "Baba Mandir", "Nathula Pass"],

    itinerary: [
      { day: 1, title: "Gangtok", description: "Arrival." },
      { day: 2, title: "Tsomgo Lake", description: "Lake visit." },
      { day: 3, title: "Nathula Pass", description: "Border visit." },
    ],

    inclusions: ["Hotel", "Transport"],
    exclusions: ["Flights"],

    reviews: [
      {
        name: "Priya Das",
        rating: 5,
        comment: "The frozen lake was stunning!",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=East%20Sikkim&output=embed",

    pdf: "/pdf/east-sikkim-tour.pdf",
  },

  {
    id: 5,
    title: "North & East Sikkim Combined Tour",
    duration: "5 Days / 4 Nights",
    price: 16999,

    location: "Sikkim",

    image:
      "https://images.unsplash.com/photo-1634827181140-6ed3520f57c4?q=80&w=1170",

    gallery: [
      "https://images.unsplash.com/photo-1634827181140-6ed3520f57c4",
      "https://images.unsplash.com/photo-1600402808924-9c591a6dace8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634400001131-d04275db2076?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],

    video: "https://www.youtube.com/embed/Scxs7L0vhZ4",

    description: "A complete Sikkim experience covering North and East Sikkim.",

    highlights: ["Lachung", "Yumthang Valley", "Tsomgo Lake"],

    itinerary: [
      { day: 1, title: "Gangtok", description: "Arrival." },
      { day: 2, title: "North Sikkim", description: "Travel to Lachung." },
      { day: 3, title: "Yumthang", description: "Explore valley." },
      { day: 4, title: "East Sikkim", description: "Tsomgo Lake." },
      { day: 5, title: "Departure", description: "Return." },
    ],

    inclusions: ["Hotels", "Meals", "Transport"],
    exclusions: ["Flights"],

    reviews: [
      {
        name: "David Lee",
        rating: 5,
        comment: "Best Himalayan tour I've ever done.",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=Sikkim&output=embed",

    pdf: "/pdf/sikkim-tour.pdf",
  },

  {
    id: 6,
    title: "Bhutan Cultural & Mountain Tour",
    duration: "5 Days / 4 Nights",
    price: 22999,

    location: "Bhutan",

    image:
      "https://images.unsplash.com/photo-1593331792312-15bead7aaa9b?q=80&w=886",

    gallery: [
      "https://images.unsplash.com/photo-1593331792312-15bead7aaa9b",
      "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580649851649-992b28f56e98?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],

    video: "https://www.youtube.com/embed/XQ8fGq5J9nM",

    description:
      "Discover the peaceful kingdom of Bhutan with visits to Paro, Thimphu, and Tiger's Nest.",

    highlights: ["Tiger's Nest Monastery", "Paro valley", "Bhutan culture"],

    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Paro." },
      { day: 2, title: "Thimphu", description: "Explore capital." },
      { day: 3, title: "Tiger's Nest", description: "Monastery hike." },
      { day: 4, title: "Local villages", description: "Cultural experience." },
      { day: 5, title: "Departure", description: "Return journey." },
    ],

    inclusions: ["Hotels", "Meals", "Guide"],
    exclusions: ["Flights"],

    reviews: [
      {
        name: "Emily Johnson",
        rating: 5,
        comment: "Bhutan is magical. Highly recommended.",
      },
    ],

    mapEmbed: "https://www.google.com/maps?q=Bhutan&output=embed",

    pdf: "/pdf/bhutan-tour.pdf",
  },

  {
    id: 7,
    title: "Kaziranga Wildlife & Tawang Explorer",
    duration: "6 Days / 5 Nights",
    price: 14999,

    location: "Assam & Arunachal Pradesh",

    image:
      "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?q=80&w=1170",

    gallery: [
      "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57",
      "https://images.unsplash.com/photo-1678365924255-8201ca795722?q=80&w=1300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1675296097877-8adea07ebe50?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1689751439845-e57c1fab564d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],

    video: "https://www.youtube.com/embed/XQ8fGq5J9nM",

    description:
      "Combine wildlife safari in Kaziranga National Park with the mountain beauty of Tawang.",

    highlights: ["Kaziranga safari", "Rhino spotting", "Tawang monastery"],

    itinerary: [
      { day: 1, title: "Kaziranga", description: "Arrival and safari." },
      { day: 2, title: "Safari", description: "Elephant safari." },
      { day: 3, title: "Travel to Tawang", description: "Mountain drive." },
      { day: 4, title: "Explore Tawang", description: "Local attractions." },
      { day: 5, title: "Bum La Pass", description: "High altitude trip." },
      { day: 6, title: "Return", description: "Back to Guwahati." },
    ],

    inclusions: ["Hotel", "Safari permits", "Transport"],
    exclusions: ["Flights"],

    reviews: [
      // {
      //   name: "Arjun Patel",
      //   rating: 3,
      //   comment: "Seeing rhinos in Kaziranga was incredible!",
      // },
    ],

    mapEmbed: "https://www.google.com/maps?q=Kaziranga&output=embed",

    pdf: "/pdf/kaziranga-tour.pdf",
  },
];
