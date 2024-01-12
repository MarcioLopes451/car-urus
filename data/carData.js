import Volkswagen from '../images/volkswagen golf.jpeg';
import FordFiesta from '../images/ford fiesta.webp'
import AudiA4 from '../images/audi a4.png'
import BMW3Series from '../images/bmw 3 series.png'
import BMWX2 from '../images/bmw x2.png'
import EClass from '../images/e-class.avif'
import FordExplorer from '../images/ford explorer.webp'
import HondaAccord from '../images/honda accord.png'
import HondaCivic from '../images/honda civic.png'
import KiaRio from '../images/kia rio.png'
import TeslaModel3 from '../images/tesla model 3.avif'
import TeslaModelY from '../images/tesla model y.webp'
import ToyotaCamry from '../images/toyota camry.avif'
import VauxhallCorsa from '../images/vaxuhall corsa.png'
import VolvoXC90 from '../images/volvo xc90.webp'

export const carData = [
  {
    id: 1,
    carName: "Volkswagen Golf",
    type: "Hatchback",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: Volkswagen,
    price: {
      perDay: 35,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "UrbanExplorer456",
          comment:
            "The Volkswagen Golf is a compact powerhouse! Its nimble size is perfect for urban driving, and the fuel efficiency is a major plus. BestCarsRental, you've hit the mark with this versatile and stylish hatchback",
        },
        {
          user: "EcoDriver789",
          comment:
            "For eco-conscious drivers, the Volkswagen Golf is a dream. The fuel efficiency is impressive, and it doesn't compromise on practicality. BestCarsRental, thank you for offering a sustainable and efficient hatchback option.",
        },
        {
          user: "SpeedyCommute123",
          comment:
            "Commute turned into a joyride with the Volkswagen Golf. The sporty design, responsive handling, and comfortable interior make it my go-to choice for daily commuting. BestCarsRental, you've nailed the balance between performance and practicality.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 2,
    carName: "Ford Fiesta",
    type: "Hatchback",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: FordFiesta,
    price: {
      perDay: 24,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "CityNomad456",
          comment:
            "The Ford Fiesta is a city explorer's dream! Its compact size makes parking a breeze, and the agile handling makes weaving through traffic effortless. BestCarsRental, the Fiesta is the perfect companion for urban adventures.",
        },
        {
          user: "EcoCommuter789",
          comment:
            "For eco-conscious commuters, the Ford Fiesta is a game-changer. It sips fuel efficiently without compromising on style and comfort. BestCarsRental, you've provided a practical and eco-friendly choice for daily commuting.",
        },
        {
          user: "BudgetFashionista123",
          comment:
            "The Ford Fiesta proves that style doesn't have to break the bank. It's affordable, yet the sleek design and modern features give it a premium feel. BestCarsRental, you've made driving in style accessible to all.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 3,
    carName: "Honda Civic",
    type: "Hatchback",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: HondaCivic,
    price: {
      perDay: 28,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "DailyDriver456",
          comment:
            "The Honda Civic is the ideal commuter's dream. Excellent fuel efficiency, a comfortable interior, and advanced safety features make it a perfect daily driver. BestCarsRental, you've nailed practicality with the Civic.",
        },
        {
          user: "StyleCruiser789",
          comment:
            "Driving the Honda Civic is a stylish affair. The sporty design, attention to detail, and premium interior give it an elegant edge. BestCarsRental, the Civic is a head-turner on the road.",
        },
        {
          user: "TechExplorer123",
          comment:
            "The Honda Civic's tech features are impressive! From the intuitive infotainment system to advanced driver-assistance, it's a tech-savvy traveler's best companion. BestCarsRental, you've raised the bar for in-car technology.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 4,
    carName: "Kia Rio",
    type: "Hatchback",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: KiaRio,
    price: {
      perDay: 25,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "EasyRider456",
          comment:
            "Driving the Kia Rio is a breeze! The smooth handling, responsive steering, and comfortable ride make it an effortless experience. BestCarsRental, you've made every drive enjoyable with the Rio.",
        },
        {
          user: "FrugalExplorer789",
          comment:
            "Affordable and efficient, the Kia Rio is a budget-friendly gem. It ticks all the boxes for practicality and reliability without breaking the bank. BestCarsRental, you've made quality accessible with the Rio.",
        },
        {
          user: "SpaceSeeker123",
          comment:
            "Don't let its size fool you! The Kia Rio is surprisingly spacious, with ample legroom and a well-designed interior. BestCarsRental, the Rio offers more room than you'd expect in a compact car.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 5,
    carName: "Vauxhall Corsa",
    type: "Hatchback",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: VauxhallCorsa,
    price: {
      perDay: 20,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "UrbanNavigator456",
          comment:
            "Navigating city streets is a breeze with the Vauxhall Corsa. Its agile handling and compact design make it a perfect urban navigator. BestCarsRental, the Corsa is a reliable companion for city adventures.",
        },
        {
          user: "TechCommuter789",
          comment:
            "The Vauxhall Corsa is a tech-savvy commuter's dream. From the intuitive infotainment system to advanced safety features, it's a perfect blend of technology and practicality. BestCarsRental, you've set the bar high with the Corsa.",
        },
        {
          user: "ComfortCruise123",
          comment:
            "Driving the Vauxhall Corsa is a comfortable cruise. The well-crafted interior, supportive seats, and smooth ride make it a joy on longer journeys. BestCarsRental, the Corsa offers a comfortable and enjoyable driving experience.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 6,
    carName: "BMW 3 Series",
    type: "Sedan",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: BMW3Series,
    price: {
      perDay: 76,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "PerformanceEnthusiast456",
          comment:
            "The BMW 3 Series truly lives up to its reputation as the 'Ultimate Driving Machine.' The powerful engine, precise handling, and luxurious interior make it a top choice for performance enthusiasts. BestCarsRental, you've elevated the driving experience with the 3 Series.",
        },
        {
          user: "LuxuryExplorer789",
          comment:
            "Driving the BMW 3 Series is an experience in elegance and comfort. The refined interior, premium materials, and advanced features make every journey a luxurious affair. BestCarsRental, the 3 Series is the epitome of sophistication.",
        },
        {
          user: "VersatileTraveler456",
          comment:
            "Took the BMW 3 Series on a cross-country trip, and it proved to be a versatile luxury car. Comfortable for long drives, spacious interior, and a trunk that accommodates luggage with ease. BestCarsRental, the 3 Series is a reliable companion for any journey",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 7,
    carName: "Honda Accord",
    type: "Sedan",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: HondaAccord,
    price: {
      perDay: 51,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "SmoothDriver456",
          comment:
            "Driving the Honda Accord is like gliding on a smooth road. The comfortable ride, responsive steering, and refined handling make it a joy to drive. BestCarsRental, the Accord is a smooth operator on the road.",
        },
        {
          user: "FamilyAdventurer789",
          comment:
            "As a family, the Honda Accord was the perfect choice. Spacious interior, ample legroom, and advanced safety features made our journey comfortable and secure. BestCarsRental, the Accord is a family-friendly sedan.",
        },
        {
          user: "TechCommuter123",
          comment:
            "The Honda Accord seamlessly blends technology with the driving experience. The user-friendly infotainment system, advanced safety tech, and connectivity options make it a tech-savvy commuter's dream. BestCarsRental, the Accord has nailed the balance.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 8,
    carName: "Toyota Camry",
    type: "Sedan",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: ToyotaCamry,
    price: {
      perDay: 49,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "SafetyAdvocate123",
          comment:
            "Safety is paramount, and the Toyota Camry excels in this aspect. Advanced safety features, solid build quality, and top-notch crash test ratings make it a reliable and secure choice. BestCarsRental, safety is truly prioritized with the Camry.",
        },
        {
          user: "EfficientTraveler456",
          comment:
            "Efficiency defines the Toyota Camry. It's fuel-efficient without compromising on performance. The smooth acceleration and precise handling make every drive effortless. BestCarsRental, the Camry is an efficient travel companion.",
        },
        {
          user: "StyleSeeker789",
          comment:
            "The Toyota Camry combines timeless style with practicality. Its sleek design, attention to detail, and modern features make it a stylish choice for any journey. BestCarsRental, the Camry is a blend of elegance and functionality.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 9,
    carName: "Ford Explorer",
    type: "SUV",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: FordExplorer,
    price: {
      perDay: 60,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "AdventureSeeker789",
          comment:
            "The Ford Explorer was our go-to choice for a family road trip. With ample space, comfortable seating, and a smooth ride, it made our journey enjoyable. BestCarsRental, you've got a family-friendly SUV that delivers on both style and practicality",
        },
        {
          user: "OffRoadWarrior456",
          comment:
            "Took the Ford Explorer off the beaten path, and it handled rough terrains with ease. The AWD system and terrain management make it a true off-road warrior. BestCarsRental, kudos for providing a reliable SUV for adventure seekers!",
        },
        {
          user: "CityEscape123",
          comment:
            "From city streets to suburban neighborhoods, the Ford Explorer effortlessly transitions. The advanced safety features and intuitive tech make it a breeze to drive. BestCarsRental, you've got the perfect SUV for city escape and suburban cruising.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 10,
    carName: "Volvo XC90",
    type: "SUV",
    details: {
      color: "Grey",
      gearbox: "Manual",
      seats: 5,
      year: 2022,
    },
    images: VolvoXC90,
    price: {
      perDay: 65,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "DesignEnthusiast123",
          comment:
            "The Volvo XC90 showcases elegant Scandinavian design. The attention to detail, premium materials, and minimalist aesthetic create a sophisticated and luxurious driving experience. BestCarsRental, the XC90 is a design enthusiast's delight.",
        },
        {
          user: "PerformanceSeeker456",
          comment:
            "The Volvo XC90 is not just about safety; it packs a punch in performance too. The powerful engine, responsive handling, and smooth ride make it a joy to drive. BestCarsRental, the XC90 brings a perfect blend of power and poise.",
        },
        {
          user: "TechExplorer789",
          comment:
            "Tech-forward travelers will appreciate the Volvo XC90. The intuitive infotainment system, connectivity options, and advanced tech features make it a modern and convenient travel companion. BestCarsRental, the XC90 is a tech-savvy choice.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 11,
    carName: "Mercedes-Benz E-Class",
    type: "Sedan",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: EClass,
    price: {
      perDay: 102,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "LuxuryLover456",
          comment:
            "The Mercedes-Benz E-Class is the epitome of luxury. From the elegant interior to the smooth ride, it redefines what a sedan should be. BestCarsRental, you've truly elevated the rental experience with this sophisticated choice.",
        },
        {
          user: "BusinessJetsetter789",
          comment:
            "As a frequent business traveler, the Mercedes-Benz E-Class is my top pick. The refined interior, advanced tech, and smooth ride provide a luxurious and comfortable journey. BestCarsRental, you understand the needs of business jetsetters!",
        },
        {
          user: "ElegantExplorer123",
          comment:
            "Driving the Mercedes-Benz E-Class feels like a journey in pure elegance. The attention to detail, superior craftsmanship, and advanced safety features make it stand out. BestCarsRental, you've brought effortless elegance to the rental experience.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 12,
    carName: "Audi A4",
    type: "Sedan",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: AudiA4,
    price: {
      perDay: 83,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "LuxuryConnoisseur123",
          comment:
            "Luxury is in every detail of the Audi A4. From the premium materials used in the interior to the cutting-edge technology, it sets a high standard for elegance. BestCarsRental, the A4 is a luxury connoisseur's choice.",
        },
        {
          user: "TechCommuter456",
          comment:
            "Tech-savvy commuters will love the Audi A4. The advanced infotainment system, virtual cockpit, and driver-assistance features create a haven of technology on the road. BestCarsRental, the A4 is a tech-forward travel companion.",
        },
        {
          user: "ComfortSeeker789",
          comment:
            "The Audi A4 offers a comfortable and refined driving experience. The plush seats, smooth ride, and quiet cabin make it a serene journey. BestCarsRental, the A4 is a comfort seeker's haven.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 13,
    carName: "Tesla Model Y",
    type: "Electric",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: TeslaModelY,
    price: {
      perDay: 130,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "TechInnovator456",
          comment:
            "The Tesla Model Y represents the future of driving. Its all-electric powertrain, autopilot capabilities, and cutting-edge tech redefine the driving experience. BestCarsRental, the Model Y is a testament to technological innovation.",
        },
        {
          user: "SpeedEnthusiast789",
          comment:
            "Experience the thrill of effortless acceleration with the Tesla Model Y. The instant torque, smooth acceleration, and silent ride make it a speed enthusiast's dream. BestCarsRental, the Model Y is a game-changer in performance.",
        },
        {
          user: "EcoLuxury123",
          comment:
            "Luxury meets sustainability in the Tesla Model Y. From the minimalist interior to the zero-emission driving, it's a perfect choice for eco-conscious luxury seekers. BestCarsRental, the Model Y brings a new era of sustainable luxury.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 14,
    carName: "BMW X2",
    type: "SUV",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: BMWX2,
    price: {
      perDay: 150,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "StyleAdventurer456",
          comment:
            "The BMW X2 boasts a bold and athletic design that stands out on the road. Its unique silhouette, distinctive grille, and stylish features make it a style adventurer's top pick. BestCarsRental, the X2 brings a touch of flair to every journey.",
        },
        {
          user: "PerformanceEnthusiast789",
          comment:
            "Driving the BMW X2 is a sporty affair. The powerful engine, responsive handling, and dynamic performance make it a true performance enthusiast's delight. BestCarsRental, the X2 delivers an exhilarating driving experience.",
        },
        {
          user: "SpaceSeeker123",
          comment:
            "Despite its compact size, the BMW X2 surprises with its spacious interior. Comfortable seating, ample cargo space, and a well-designed cabin make it a space seeker's dream. BestCarsRental, the X2 offers more room than expected.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
  {
    id: 15,
    carName: "Tesla Model 3",
    type: "Electric",
    details: {
      color: "Grey",
      gearbox: "Automatic",
      seats: 5,
      year: 2022,
    },
    images: TeslaModel3,
    price: {
      perDay: 101,
      currency: "GBP",
    },
    extraDetails: {
      reviews: [
        {
          user: "PerformanceEnthusiast456",
          comment:
            "The Tesla Model 3 delivers electrifying performance. Instant acceleration, smooth handling, and a whisper-quiet ride make it a performance enthusiast's dream. BestCarsRental, the Model 3 sets a new standard for electric driving.",
        },
        {
          user: "StyleInnovator789",
          comment:
            "Embrace sleek and minimalist design with the Tesla Model 3. Its clean lines, panoramic glass roof, and minimalist interior create an elegant and modern aesthetic. BestCarsRental, the Model 3 is a style innovator on the road.",
        },
        {
          user: "EfficiencyExplorer123",
          comment:
            "Efficiency reaches new heights with the Tesla Model 3. The long-range capabilities, regenerative braking, and sustainable design make it an eco-conscious efficiency explorer's dream. BestCarsRental, the Model 3 is redefining the future of driving.",
        },
      ],
      perks: [
        "Unlimited Mileage",
        "Theft Protection",
        "Collision Damage Waiver",
        "Third Party Liability",
        "Free Cancellation"
      ],
    },
  },
];
