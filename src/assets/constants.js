export const SECTORS = [
  {
    label: "Manufacturing",
    key: "1",
    children: [
      {
        label: "Construction materials",
        key: "19",
      },
      {
        label: "Electronics and Optics",
        key: "18",
      },
      {
        label: "Food and Beverage",
        key: "6",
        children: [
          {
            label: "Bakery & confectionery products",
            key: "342",
          },
          {
            label: "Beverages",
            key: "43",
          },
          {
            label: "Fish & fish products",
            key: "42",
          },
          {
            label: "Meat & meat products",
            key: "40",
          },
          {
            label: "Milk & dairy products",
            key: "39",
          },
          {
            label: "Other",
            key: "437",
          },
          {
            label: "Sweets & snack food",
            key: "378",
          },
        ],
      },
      {
        label: "Furniture",
        key: "13",
        children: [
          {
            label: "Bathroom/sauna",
            key: "389",
          },
          {
            label: "Bedroom",
            key: "385",
          },
          {
            label: "Children’s room",
            key: "390",
          },
          {
            label: "Kitchen",
            key: "98",
          },
          {
            label: "Living room",
            key: "101",
          },
          {
            label: "Office",
            key: "392",
          },
          {
            label: "Other (Furniture)",
            key: "394",
          },
          {
            label: "Outdoor",
            key: "341",
          },
          {
            label: "Project furniture",
            key: "99",
          },
        ],
      },
      {
        label: "Machinery",
        key: "12",
        children: [
          {
            label: "Machinery components",
            key: "94",
          },
          {
            label: "Machinery equipment/tools",
            key: "91",
          },
          {
            label: "Manufacture of machinery",
            key: "224",
          },
          {
            label: "Maritime",
            key: "97",
            children: [
              {
                label: "Aluminium and steel workboats",
                key: "271",
              },
              {
                label: "Boat/Yacht building",
                key: "269",
              },
              {
                label: "Ship repair and conversion",
                key: "230",
              },
            ],
          },
          {
            label: "Metal structures",
            key: "93",
            children: [
              {
                label: "Other",
                key: "508",
              },
            ],
          },
          {
            label: "Repair and maintenance service",
            key: "227",
          },
        ],
      },
      {
        label: "Metalworking",
        key: "11",
        children: [
          {
            label: "Construction of metal structures",
            key: "67",
          },
          {
            label: "Houses and buildings",
            key: "263",
          },
          {
            label: "Metal products",
            key: "267",
            children: [
              {
                label: "Metal works",
                key: "542",
              },
            ],
          },
          {
            label: "CNC-machining",
            key: "75",
          },
          {
            label: "Forgings, Fasteners",
            key: "62",
          },
          {
            label: "Gas, Plasma, Laser cutting",
            key: "69",
          },
          {
            label: "MIG, TIG, Aluminum welding",
            key: "66",
          },
        ],
      },
      {
        label: "Plastic and Rubber",
        key: "9",
        children: [
          {
            label: "Packaging",
            key: "54",
          },
          {
            label: "Plastic goods",
            key: "556",
          },
          {
            label: "Plastic processing technology",
            key: "559",
            children: [
              {
                label: "Blowing",
                key: "55",
              },
              {
                label: "Moulding",
                key: "57",
              },
              {
                label: "Plastics welding and processing",
                key: "53",
              },
            ],
          },
          {
            label: "Plastic profiles",
            key: "560",
          },
        ],
      },
      {
        label: "Printing",
        key: "5",
        children: [
          {
            label: "Advertising",
            key: "148",
          },
          {
            label: "Book/Periodicals printing",
            key: "150",
          },
          {
            label: "Labelling and packaging printing",
            key: "145",
          },
        ],
      },
      {
        label: "Textile and Clothing",
        key: "7",
        children: [
          {
            label: "Clothing",
            key: "44",
          },
          {
            label: "Textile",
            key: "45",
          },
        ],
      },
      {
        label: "Wood",
        key: "8",
        children: [
          {
            label: "Other (Wood)",
            key: "337",
          },
          {
            label: "Wooden building materials",
            key: "51",
          },
          {
            label: "Wooden houses",
            key: "47",
          },
        ],
      },
    ],
  },
  {
    label: "Other",
    key: "3",
    children: [
      {
        label: "Creative industries",
        key: "37",
      },
      {
        label: "Energy technology",
        key: "29",
      },
      {
        label: "Environment",
        key: "33",
      },
    ],
  },
  {
    label: "Service",
    key: "2",
    children: [
      {
        label: "Business services",
        key: "25",
      },
      {
        label: "Engineering",
        key: "35",
      },
      {
        label: "Information Technology and Telecommunications",
        key: "28",
        children: [
          {
            label: "Data processing, Web portals, E-marketing",
            key: "581",
          },
          {
            label: "Programming, Consultancy",
            key: "576",
          },
          {
            label: "Software, Hardware",
            key: "121",
          },
          {
            label: "Telecommunications",
            key: "122",
          },
        ],
      },
      {
        label: "Tourism",
        key: "22",
      },
      {
        label: "Translation services",
        key: "141",
      },
      {
        label: "Transport and Logistics",
        key: "21",
        children: [
          {
            label: "Air",
            key: "111",
          },
          {
            label: "Rail",
            key: "114",
          },
          {
            label: "Road",
            key: "112",
          },
          {
            label: "Water",
            key: "113",
          },
        ],
      },
    ],
  },
];

/*[
  {
    label: "Manufacturing",
    id: "1",
    children: [
      {
        label: "Construction materials",
        id: "19",
      },
      {
        label: "Electronics and Optics",
        id: "18",
      },
      {
        label: "Food and Beverage",
        id: "6",
        children: [
          {
            label: "Bakery & confectionery products",
            id: "342",
          },
          {
            label: "Beverages",
            id: "43",
          },
          {
            label: "Fish & fish products",
            id: "42",
          },
          {
            label: "Meat & meat products",
            id: "40",
          },
          {
            label: "Milk & dairy products",
            id: "39",
          },
          {
            label: "Other",
            id: "437",
          },
          {
            label: "Sweets & snack food",
            id: "378",
          },
        ],
      },
      {
        label: "Furniture",
        id: "13",
        children: [
          {
            label: "Bathroom/sauna",
            id: "389",
          },
          {
            label: "Bedroom",
            id: "385",
          },
          {
            label: "Children’s room",
            id: "390",
          },
          {
            label: "Kitchen",
            id: "98",
          },
          {
            label: "Living room",
            id: "101",
          },
          {
            label: "Office",
            id: "392",
          },
          {
            label: "Other (Furniture)",
            id: "394",
          },
          {
            label: "Outdoor",
            id: "341",
          },
          {
            label: "Project furniture",
            id: "99",
          },
        ],
      },
      {
        label: "Machinery",
        id: "12",
        children: [
          {
            label: "Machinery components",
            id: "94",
          },
          {
            label: "Machinery equipment/tools",
            id: "91",
          },
          {
            label: "Manufacture of machinery",
            id: "224",
          },
          {
            label: "Maritime",
            id: "97",
            children: [
              {
                label: "Aluminium and steel workboats",
                id: "271",
              },
              {
                label: "Boat/Yacht building",
                id: "269",
              },
              {
                label: "Ship repair and conversion",
                id: "230",
              },
            ],
          },
          {
            label: "Metal structures",
            id: "93",
            children: [
              {
                label: "Other",
                id: "508",
              },
            ],
          },
          {
            label: "Repair and maintenance service",
            id: "227",
          },
        ],
      },
      {
        label: "Metalworking",
        id: "11",
        children: [
          {
            label: "Construction of metal structures",
            id: "67",
          },
          {
            label: "Houses and buildings",
            id: "263",
          },
          {
            label: "Metal products",
            id: "267",
            children: [
              {
                label: "Metal works",
                id: "542",
              },
            ],
          },
          {
            label: "CNC-machining",
            id: "75",
          },
          {
            label: "Forgings, Fasteners",
            id: "62",
          },
          {
            label: "Gas, Plasma, Laser cutting",
            id: "69",
          },
          {
            label: "MIG, TIG, Aluminum welding",
            id: "66",
          },
        ],
      },
      {
        label: "Plastic and Rubber",
        id: "9",
        children: [
          {
            label: "Packaging",
            id: "54",
          },
          {
            label: "Plastic goods",
            id: "556",
          },
          {
            label: "Plastic processing technology",
            id: "559",
            children: [
              {
                label: "Blowing",
                id: "55",
              },
              {
                label: "Moulding",
                id: "57",
              },
              {
                label: "Plastics welding and processing",
                id: "53",
              },
            ],
          },
          {
            label: "Plastic profiles",
            id: "560",
          },
        ],
      },
      {
        label: "Printing",
        id: "5",
        children: [
          {
            label: "Advertising",
            id: "148",
          },
          {
            label: "Book/Periodicals printing",
            id: "150",
          },
          {
            label: "Labelling and packaging printing",
            id: "145",
          },
        ],
      },
      {
        label: "Textile and Clothing",
        id: "7",
        children: [
          {
            label: "Clothing",
            id: "44",
          },
          {
            label: "Textile",
            id: "45",
          },
        ],
      },
      {
        label: "Wood",
        id: "8",
        children: [
          {
            label: "Other (Wood)",
            id: "337",
          },
          {
            label: "Wooden building materials",
            id: "51",
          },
          {
            label: "Wooden houses",
            id: "47",
          },
        ],
      },
    ],
  },
  {
    label: "Other",
    id: "3",
    children: [
      {
        label: "Creative industries",
        id: "37",
      },
      {
        label: "Energy technology",
        id: "29",
      },
      {
        label: "Environment",
        id: "33",
      },
    ],
  },
  {
    label: "Service",
    id: "2",
    children: [
      {
        label: "Business services",
        id: "25",
      },
      {
        label: "Engineering",
        id: "35",
      },
      {
        label: "Information Technology and Telecommunications",
        id: "28",
        children: [
          {
            label: "Data processing, Web portals, E-marketing",
            id: "581",
          },
          {
            label: "Programming, Consultancy",
            id: "576",
          },
          {
            label: "Software, Hardware",
            id: "121",
          },
          {
            label: "Telecommunications",
            id: "122",
          },
        ],
      },
      {
        label: "Tourism",
        id: "22",
      },
      {
        label: "Translation services",
        id: "141",
      },
      {
        label: "Transport and Logistics",
        id: "21",
        children: [
          {
            label: "Air",
            id: "111",
          },
          {
            label: "Rail",
            id: "114",
          },
          {
            label: "Road",
            id: "112",
          },
          {
            label: "Water",
            id: "113",
          },
        ],
      },
    ],
  },
];*/

/*
export const SECTORS = [
  {
    label: "Manufacturing",
    value: "1",
    children: [
      {
        label: "Construction materials",
        value: "19",
      },
      {
        label: "Electronics and Optics",
        value: "18",
      },
      {
        label: "Food and Beverage",
        value: "6",
        children: [
          {
            label: "Bakery & confectionery products",
            value: "342",
          },
          {
            label: "Beverages",
            value: "43",
          },
          {
            label: "Fish & fish products",
            value: "42",
          },
          {
            label: "Meat & meat products",
            value: "40",
          },
          {
            label: "Milk & dairy products",
            value: "39",
          },
          {
            label: "Other",
            value: "437",
          },
          {
            label: "Sweets & snack food",
            value: "378",
          },
        ],
      },
      {
        label: "Furniture",
        value: "13",
        children: [
          {
            label: "Bathroom/sauna",
            value: "389",
          },
          {
            label: "Bedroom",
            value: "385",
          },
          {
            label: "Children’s room",
            value: "390",
          },
          {
            label: "Kitchen",
            value: "98",
          },
          {
            label: "Living room",
            value: "101",
          },
          {
            label: "Office",
            value: "392",
          },
          {
            label: "Other (Furniture)",
            value: "394",
          },
          {
            label: "Outdoor",
            value: "341",
          },
          {
            label: "Project furniture",
            value: "99",
          },
        ],
      },
      {
        label: "Machinery",
        value: "12",
        children: [
          {
            label: "Machinery components",
            value: "94",
          },
          {
            label: "Machinery equipment/tools",
            value: "91",
          },
          {
            label: "Manufacture of machinery",
            value: "224",
          },
          {
            label: "Maritime",
            value: "97",
            children: [
              {
                label: "Aluminium and steel workboats",
                value: "271",
              },
              {
                label: "Boat/Yacht building",
                value: "269",
              },
              {
                label: "Ship repair and conversion",
                value: "230",
              },
            ],
          },
          {
            label: "Metal structures",
            value: "93",
            children: [
              {
                label: "Other",
                value: "508",
              },
            ],
          },
          {
            label: "Repair and maintenance service",
            value: "227",
          },
        ],
      },
      {
        label: "Metalworking",
        value: "11",
        children: [
          {
            label: "Construction of metal structures",
            value: "67",
          },
          {
            label: "Houses and buildings",
            value: "263",
          },
          {
            label: "Metal products",
            value: "267",
            children: [
              {
                label: "Metal works",
                value: "542",
              },
            ],
          },
          {
            label: "CNC-machining",
            value: "75",
          },
          {
            label: "Forgings, Fasteners",
            value: "62",
          },
          {
            label: "Gas, Plasma, Laser cutting",
            value: "69",
          },
          {
            label: "MIG, TIG, Aluminum welding",
            value: "66",
          },
        ],
      },
      {
        label: "Plastic and Rubber",
        value: "9",
        children: [
          {
            label: "Packaging",
            value: "54",
          },
          {
            label: "Plastic goods",
            value: "556",
          },
          {
            label: "Plastic processing technology",
            value: "559",
            children: [
              {
                label: "Blowing",
                value: "55",
              },
              {
                label: "Moulding",
                value: "57",
              },
              {
                label: "Plastics welding and processing",
                value: "53",
              },
            ],
          },
          {
            label: "Plastic profiles",
            value: "560",
          },
        ],
      },
      {
        label: "Printing",
        value: "5",
        children: [
          {
            label: "Advertising",
            value: "148",
          },
          {
            label: "Book/Periodicals printing",
            value: "150",
          },
          {
            label: "Labelling and packaging printing",
            value: "145",
          },
        ],
      },
      {
        label: "Textile and Clothing",
        value: "7",
        children: [
          {
            label: "Clothing",
            value: "44",
          },
          {
            label: "Textile",
            value: "45",
          },
        ],
      },
      {
        label: "Wood",
        value: "8",
        children: [
          {
            label: "Other (Wood)",
            value: "337",
          },
          {
            label: "Wooden building materials",
            value: "51",
          },
          {
            label: "Wooden houses",
            value: "47",
          },
        ],
      },
    ],
  },
  {
    label: "Other",
    value: "3",
    children: [
      {
        label: "Creative industries",
        value: "37",
      },
      {
        label: "Energy technology",
        value: "29",
      },
      {
        label: "Environment",
        value: "33",
      },
    ],
  },
  {
    label: "Service",
    value: "2",
    children: [
      {
        label: "Business services",
        value: "25",
      },
      {
        label: "Engineering",
        value: "35",
      },
      {
        label: "Information Technology and Telecommunications",
        value: "28",
        children: [
          {
            label: "Data processing, Web portals, E-marketing",
            value: "581",
          },
          {
            label: "Programming, Consultancy",
            value: "576",
          },
          {
            label: "Software, Hardware",
            value: "121",
          },
          {
            label: "Telecommunications",
            value: "122",
          },
        ],
      },
      {
        label: "Tourism",
        value: "22",
      },
      {
        label: "Translation services",
        value: "141",
      },
      {
        label: "Transport and Logistics",
        value: "21",
        children: [
          {
            label: "Air",
            value: "111",
          },
          {
            label: "Rail",
            value: "114",
          },
          {
            label: "Road",
            value: "112",
          },
          {
            label: "Water",
            value: "113",
          },
        ],
      },
    ],
  },
];
*/
