const states = [
  {
    "id": 1,
    "name": "Alabama",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/1024px-Flag_of_Alabama.svg_-360x240.png.webp"
  },
  {
    "id": 2,
    "name": "Alaska",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst003-360x240.gif"
  },
  {
    "id": 3,
    "name": "Arizon",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst004-360x240.gif"
  },
  {
    "id": 4,
    "name": "Arkansas",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst005r-360x240.gif"
  },
  {
    "id": 5,
    "name": "California",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst0006-360x240.gif"
  },
  {
    "id": 6,
    "name": "Colorado",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/colorado-flag-360x240.png"
  },
  {
    "id": 7,
    "name": "Connecticut",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/Connecticut-state-flag-360x278.png.webp"
  },
  {
    "id": 8,
    "name": "Delaware",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/de-largeflag-360x240.png.webp"
  },
  {
    "id": 9,
    "name": "Florida",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst012-360x240.gif"
  },
  {
    "id": 10,
    "name": "Georgia",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst090.gif"
  },
  {
    "id": 11,
    "name": "Hawaii",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/1280px-Flag_of_Hawaii.svg_-360x180.png"
  },
  {
    "id": 12,
    "name": "Idaho",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_Idaho.svg_-360x284.png.webp"
  },
  {
    "id": 13,
    "name": "Illinois",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/800px-Flag_of_Illinois.svg_-360x216.png.webp"
  },
  {
    "id": 14,
    "name": "Indiana",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst021.gif"
  },
  {
    "id": 15,
    "name": "Iowa",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/flagofIowa-360x240.png"
  },
  {
    "id": 16,
    "name": "Kansas",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/800px-Flag_of_Kansas-360x216.png.webp"
  },
  {
    "id": 17,
    "name": "Kentucky",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst026-360x188.gif"
  },
  {
    "id": 18,
    "name": "Louisiana",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/LouisianaStateFlagRGBLarge-1-360x233.jpg.webp"
  },
  {
    "id": 19,
    "name": "Maine",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst030.gif"
  },
  {
    "id": 20,
    "name": "Maryland",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst032-360x240.gif"
  },
  {
    "id": 21,
    "name": "Massachusetts",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst033-360x216.gif"
  },
  {
    "id": 22,
    "name": "Michigan",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst035-360x240.gif"
  },
  {
    "id": 23,
    "name": "Minnesota",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst037-360x232.gif"
  },
  {
    "id": 24,
    "name": "Mississippi",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/01/50-States-mississippi-state-flag-2-e1611052007102.png.webp"
  },
  {
    "id": 25,
    "name": "Missouri",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/Missouri-state-flag-flat-360x216.png.webp"
  },
  {
    "id": 26,
    "name": "Montana",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst042-360x240.gif"
  },
  {
    "id": 27,
    "name": "Nebraska",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst044-360x216.gif"
  },
  {
    "id": 28,
    "name": "Nevada",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst046-360x240.gif"
  },
  {
    "id": 29,
    "name": "New Hampshire",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_New_Hampshire.svg_-360x240.png.webp"
  },
  {
    "id": 30,
    "name": "New Jersey",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/state-flag-new-jersey_800-360x240.jpg.webp"
  },
  {
    "id": 31,
    "name": "New Mexico",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst052-360x240.gif"
  },
  {
    "id": 32,
    "name": "New York",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst053-360x180.gif"
  },
  {
    "id": 33,
    "name": "North Carolina",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst055.gif"
  },
  {
    "id": 34,
    "name": "North Dakota",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst056.gif"
  },
  {
    "id": 35,
    "name": "Ohio",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/01/ohio-flag-large-360x221.png"
  },
  {
    "id": 36,
    "name": "Oklahoma",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst059-360x240.gif"
  },
  {
    "id": 37,
    "name": "Oregon",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst061-360x216.gif"
  },
  {
    "id": 38,
    "name": "Pennsylvania",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst063.gif"
  },
  {
    "id": 39,
    "name": "Rhode Island",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/660px-Flag_of_Rhode_Island.svg_-360x316.png.webp"
  },
  {
    "id": 40,
    "name": "South Carolina",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst066-360x240.gif"
  },
  {
    "id": 41,
    "name": "South Dakota",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst067-360x216.gif"
  },
  {
    "id": 42,
    "name": "Tennessee",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst069-360x216.gif"
  },
  {
    "id": 43,
    "name": "Texas",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/640px-Flag_of_Texas4.png.webp"
  },
  {
    "id": 44,
    "name": "Utah",
    "flag_url": "https://www.50states.com/wp-content/uploads/2020/01/1024px-Flag_of_Utah.svg_-360x225.png.webp"
  },
  {
    "id": 45,
    "name": "Vermont",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst073-360x216.gif"
  },
  {
    "id": 46,
    "name": "Virginia",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst075-360x232.gif"
  },
  {
    "id": 47,
    "name": "Washington",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst077-360x240.gif"
  },
  {
    "id": 48,
    "name": "West Virginia",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst080.gif"
  },
  {
    "id": 49,
    "name": "Wisconsin",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst081-360x240.gif"
  },
  {
    "id": 50,
    "name": "Wyoming",
    "flag_url": "https://www.50states.com/wp-content/uploads/2021/02/nunst083-360x252.gif"
  },
  {
    "id": 51,
    "name": "Puerto Rico",
    "flag_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/255px-Flag_of_Puerto_Rico.svg.png"
  }
]

export default states
