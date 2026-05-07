import product1 from '@/images/products/product1.webp'
import product2 from '@/images/products/product2.webp'
import product3 from '@/images/products/product3.jpg'
import fender from '@/images/products/fender.jpg'
import fenders from '@/images/products/fenders.webp'
import frameBrackets from '@/images/frameBrackets.webp'

//Brackets
import kenworth1 from '@/images/products/kenworth1.webp'
import kenworth2 from '@/images/products/kenworth2.webp'
import peterbilt4 from '@/images/products/peterbilt4.webp'
import peterbiltVisiors from '@/images/products/peterbiltVisiors.webp'
import peterbiltDash from '@/images/products/peterbiltDash.webp'
import peterbiltGrill from '@/images/products/peterbiltGrill.jpg'
import peterbiltMirror from '@/images/products/peterbiltMirror.webp'
import peterbiltSkirting from '@/images/products/peterbiltSkirting.webp'
import peterbiltSteps from '@/images/products/peterbiltStep.webp'
import peterbiltWindow from '@/images/products/peterbiltWindows.webp'
import turnSignal from '@/images/products/turnSignal.webp'
import universalWaterMelon from '@/images/products/universalWatermelon.webp'
import cabMountBrackets from "@/images/brackets/cabMountBrackets.webp"
import watermelonBracket from "@/images/brackets/watermelonBrackets.webp"
import peterbiltBracket from "@/images/brackets/peterbiltBrackets.webp"
import peterbiltDoorBrackets from "@/images/brackets/peterbiltDoorBrackets.jpg"
import watermelonBracket1 from "@/images/brackets/watermelonBrackets1.webp"
import mirrorBracket from "@/images/brackets/mirrorBrackets.jpg"
import straighdownBrackets from "@/images/brackets/straightdownBrackets.webp"
import bunkloadBrackets from "@/images/brackets/bunkLoadBrackets.jpg"
import pennyLightBrackets from "@/images/brackets/pennyLightBrackets.webp"
import internalWmBrackets from "@/images/brackets/internaWmBrackets.webp"
import premium15Brackets from "@/images/brackets/premium15Brackets.webp"
import dualFunctionBrackets from "@/images/brackets/dualFunctionBrackets.webp"
import angledBrackets from "@/images/brackets/angledBrackets.webp"
import peterbiltFlattopBrackets from "@/images/brackets/peterbiltFlattopBrackets.jpg"
import peterbilt379Brackets from "@/images/brackets/peterbilt379Brackets.webp"

//BreatherPanels
import breatherPanelOne from "@/images/breatherPanels/breatherPanelOne.webp"
import breatherPanelTwo from "@/images/breatherPanels/breatherPanelTwo.webp"
import breatherPanelThree from "@/images/breatherPanels/breatherPanelThree.webp"
import breatherPanelFour from "@/images/breatherPanels/breatherPanelFour.webp"
import breatherPanelFive from "@/images/breatherPanels/breatherPanelFive.webp"
import breatherPanelSix from "@/images/breatherPanels/breatherPanelSix.webp"
import breatherPanelSeven from "@/images/breatherPanels/breatherPanelSeven.webp"
import breatherPanelEight from "@/images/breatherPanels/breatherPanelEight.webp"
import breatherPanelNine from "@/images/breatherPanels/breatherPanelNine.webp"
import breatherPanelTen from "@/images/breatherPanels/breatherPanelTen.webp"
import breatherPanelEleven from "@/images/breatherPanels/breatherPanelEleven.webp"
import breatherPanelTwelve from "@/images/breatherPanels/breatherPanelTwelve.webp"

//bumpers
import bumperOne from "@/images/bumpers/bumperOne.jpg"
import bumperTwo from "@/images/bumpers/bumperTwo.avif"
import bumperThree from "@/images/bumpers/bumperThree.avif"
import bumperFour from "@/images/bumpers/bumperFour.jpg"
import bumperFive from "@/images/bumpers/bumperFive.webp"
import bumperSix from "@/images/bumpers/bumperSix.avif"

//fender
// import fender from "@/images/fender/fender.jpg"

export const featuredProducts = [
  {
    id: 1,
    name: "Brackets",
    slug: "brackets",
    image: { src: product1.src, height: product1.height, width: product1.width, alt: "Bulkhead Product" },
    description: "brackets"
  },
  {
    id: 2,
    name: "Breather Panels",
    slug: "breather-panels",
    image: { src: product2.src, height: product2.height, width: product2.width, alt: "Bulkhead 2 Product" },
    description: "breather panels"
  },
  {
    id: 3,
    name: "Bumper",
    slug: "bumper",
    image: { src: product3.src, height: product3.height, width: product3.width, alt: "Wiring Product" },
    description: "bumper"
  },
  {
    id: 4,
    name: "Fender",
    slug: "fender",
    image: { src: fender.src, height: fender.height, width: fender.width, alt: "fender Product" },
    description: "fender"
  },
  {
    id: 5,
    name: "Fenders",
    slug: "fenders",
    image: { src: fenders.src, height: fenders.height, width: fenders.width, alt: "fenders Product" },
    description: "Heavy duty 3/16 aluminium half fenders"
  },
  {
    id: 6,
    name: "Frame Brackets",
    slug: "frame-brackets",
    image: { src: frameBrackets.src, height: frameBrackets.height, width: frameBrackets.width, alt: "Peterbilt 2 Product" },
    description: "Frame Brackets",
    price: 110.0
  },
  {
    id: 7,
    name: "Kenworth Flat Glass",
    slug: "kenworth-flat-glass",
    image: { src: kenworth1.src, height: kenworth1.height, width: kenworth1.width, alt: "Peterbilt 3 Product" },
    description: "kenworth flat glass"
  },
  {
    id: 8,
    name: "Kenworth Round Glass Visors",
    slug: "kenworth-round-glass-visors",
    image: { src: kenworth2.src, height: kenworth2.height, width: kenworth2.width, alt: "Peterbilt 4 Product" },
    description: "Kenworth Round glass visors"
  },
  {
    id: 9,
    name: "Peterbilt 379 Series Visors",
    slug: "peterbilt-379-series-visors",
    image: { src: peterbilt4.src, height: peterbilt4.height, width: peterbilt4.width, alt: "Peterbilt 4" },
    description: "Peterbilt 3** series visors"
  },
  {
    id: 10,
    name: "Peterbilt 359 Visors",
    slug: "peterbilt-359-visors",
    image: { src: peterbiltVisiors.src, height: peterbiltVisiors.height, width: peterbiltVisiors.width, alt: "Peterbilt Visiors" },
    description: "Peterbilt 359 visors"
  },
  {
    id: 11,
    name: "Peterbilt Dash Panels",
    slug: "peterbilt-dash-panels",
    image: { src: peterbiltDash.src, height: peterbiltDash.height, width: peterbiltDash.width, alt: "Peterbilt Dash" },
    description: "Peterbilt Dash Panels"
  },
  {
    id: 12,
    name: "Peterbilt Grill",
    slug: "peterbilt-grill",
    image: { src: peterbiltGrill.src, height: peterbiltGrill.height, width: peterbiltGrill.width, alt: "Peterbilt Grill" },
    description: "Peterbilt grill"
  },
  {
    id: 13,
    name: "Peterbilt Mirror Brackets",
    slug: "peterbilt-mirror-brackets",
    image: { src: peterbiltMirror.src, height: peterbiltMirror.height, width: peterbiltMirror.width, alt: "Peterbilt Mirror" },
    description: "Peterbilt mirror brackets"
  },
  {
    id: 14,
    name: "Peterbilt Step Skirting",
    slug: "peterbilt-step-skirting",
    image: { src: peterbiltSkirting.src, height: peterbiltSkirting.height, width: peterbiltSkirting.width, alt: "Peterbilt Skirting" },
    description: "Peterbilt Step Options"
  },
  {
    id: 15,
    name: "Peterbilt Steps",
    slug: "peterbilt-steps",
    image: { src: peterbiltSteps.src, height: peterbiltSteps.height, width: peterbiltSteps.width, alt: "Peterbilt Steps" },
    description: "peterbilt steps"
  },
  {
    id: 16,
    name: "Peterbilt Window Chops",
    slug: "peterbilt-window-chops",
    image: { src: peterbiltWindow.src, height: peterbiltWindow.height, width: peterbiltWindow.width, alt: "Peterbilt Window" },
    description: "Peterbilt Window Chops"
  },
  {
    id: 17,
    name: "Turn Signal Brackets",
    slug: "turn-signal-brackets",
    image: { src: turnSignal.src, height: turnSignal.height, width: turnSignal.width, alt: "Turn Signal" },
    description: "Turn Signal Brackets"
  },
  {
    id: 18,
    name: "Universal Watermelon Brackets",
    slug: "universal-watermelon-brackets",
    image: { src: universalWaterMelon.src, height: universalWaterMelon.height, width: universalWaterMelon.width, alt: "Universal Water Melon" },
    description: "Universal Watermelon brackets"
  }
];


export const groupedProducts = [
  {
    id: 1,
    name: "Brackets",
    slug: "brackets",
    image: { src: product1.src, height: product1.height, width: product1.width, alt: "Bulkhead Product" },
    description: "brackets"
  },
  {
    id: 2,
    name: "Breather Panels",
    slug: "breather-panels",
    image: { src: product2.src, height: product2.height, width: product2.width, alt: "Bulkhead 2 Product" },
    description: "breather panels"
  },
  {
    id: 3,
    name: "Bumper",
    slug: "bumper",
    image: { src: product3.src, height: product3.height, width: product3.width, alt: "Wiring Product" },
    description: "bumper"
  },
  {
    id: 4,
    name: "Fender",
    slug: "fender",
    image: { src: fender.src, height: fender.height, width: fender.width, alt: "fender Product" },
    description: "fender"
  },
  {
    id: 5,
    name: "Fenders",
    slug: "fenders",
    image: { src: fenders.src, height: fenders.height, width: fenders.width, alt: "fenders Product" },
    description: "fenders"
  },
  {
    id: 6,
    name: "Frame Brackets",
    slug: "frame-brackets",
    image: { src: frameBrackets.src, height: frameBrackets.height, width: frameBrackets.width, alt: "Peterbilt 2 Product" },
    description: "Frame Brackets",
    price: 110.0
  },
  {
    id: 7,
    name: "Kenworth Flat Glass",
    slug: "kenworth-flat-glass",
    image: { src: kenworth1.src, height: kenworth1.height, width: kenworth1.width, alt: "Peterbilt 3 Product" },
    description: "kenworth flat glass"
  },
  {
    id: 8,
    name: "Kenworth Round Glass Visors",
    slug: "kenworth-round-glass-visors",
    image: { src: kenworth2.src, height: kenworth2.height, width: kenworth2.width, alt: "Peterbilt 4 Product" },
    description: "Kenworth Round glass visors"
  },
  {
    id: 9,
    name: "Peterbilt 379 Series Visors",
    slug: "peterbilt-379-series-visors",
    image: { src: peterbilt4.src, height: peterbilt4.height, width: peterbilt4.width, alt: "Peterbilt 4" },
    description: "Peterbilt 3** series visors"
  },
  {
    id: 10,
    name: "Peterbilt 359 Visors",
    slug: "peterbilt-359-visors",
    image: { src: peterbiltVisiors.src, height: peterbiltVisiors.height, width: peterbiltVisiors.width, alt: "Peterbilt Visiors" },
    description: "Peterbilt 359 visors"
  },
  {
    id: 11,
    name: "Peterbilt Dash Panels",
    slug: "peterbilt-dash-panels",
    image: { src: peterbiltDash.src, height: peterbiltDash.height, width: peterbiltDash.width, alt: "Peterbilt Dash" },
    description: "Peterbilt Dash Panels"
  },
  {
    id: 12,
    name: "Peterbilt Grill",
    slug: "peterbilt-grill",
    image: { src: peterbiltGrill.src, height: peterbiltGrill.height, width: peterbiltGrill.width, alt: "Peterbilt Grill" },
    description: "Peterbilt grill"
  },
  {
    id: 13,
    name: "Peterbilt Mirror Brackets",
    slug: "peterbilt-mirror-brackets",
    image: { src: peterbiltMirror.src, height: peterbiltMirror.height, width: peterbiltMirror.width, alt: "Peterbilt Mirror" },
    description: "Peterbilt mirror brackets"
  },
  {
    id: 14,
    name: "Peterbilt Step Skirting",
    slug: "peterbilt-step-skirting",
    image: { src: peterbiltSkirting.src, height: peterbiltSkirting.height, width: peterbiltSkirting.width, alt: "Peterbilt Skirting" },
    description: "Peterbilt Step Options"
  },
  {
    id: 15,
    name: "Peterbilt Steps",
    slug: "peterbilt-steps",
    image: { src: peterbiltSteps.src, height: peterbiltSteps.height, width: peterbiltSteps.width, alt: "Peterbilt Steps" },
    description: "peterbilt steps"
  },
  {
    id: 16,
    name: "Peterbilt Window Chops",
    slug: "peterbilt-window-chops",
    image: { src: peterbiltWindow.src, height: peterbiltWindow.height, width: peterbiltWindow.width, alt: "Peterbilt Window" },
    description: "Peterbilt Window Chops"
  },
  {
    id: 17,
    name: "Turn Signal Brackets",
    slug: "turn-signal-brackets",
    image: { src: turnSignal.src, height: turnSignal.height, width: turnSignal.width, alt: "Turn Signal" },
    description: "Turn Signal Brackets"
  },
  {
    id: 18,
    name: "Universal Watermelon Brackets",
    slug: "universal-watermelon-brackets",
    image: { src: universalWaterMelon.src, height: universalWaterMelon.height, width: universalWaterMelon.width, alt: "Universal Water Melon" },
    description: "Universal Watermelon brackets"
  },

  // =========================
  // 🆕 NEW BRACKET PRODUCTS (ADDED ONLY)
  // =========================

  {
    id: 19,
    name: "Cab Mount Brackets",
    slug: "brackets",
    image: {
      src: cabMountBrackets.src,
      height: cabMountBrackets.height,
      width: cabMountBrackets.width,
      alt: "Cab Mount Brackets"
    },
    description: "cab mount brackets"
  },
  {
    id: 20,
    name: "Watermelon Brackets",
    slug: "brackets",
    image: {
      src: watermelonBracket.src,
      height: watermelonBracket.height,
      width: watermelonBracket.width,
      alt: "Watermelon Brackets"
    },
    description: "watermelon brackets"
  },
  {
    id: 21,
    name: "Peterbilt Brackets",
    slug: "brackets",
    image: {
      src: peterbiltBracket.src,
      height: peterbiltBracket.height,
      width: peterbiltBracket.width,
      alt: "Peterbilt Brackets"
    },
    description: "peterbilt brackets"
  },
  {
    id: 22,
    name: "Peterbilt Door Brackets",
    slug: "brackets",
    image: {
      src: peterbiltDoorBrackets.src,
      height: peterbiltDoorBrackets.height,
      width: peterbiltDoorBrackets.width,
      alt: "Peterbilt Door Brackets"
    },
    description: "door brackets"
  },
  {
    id: 23,
    name: "Watermelon Brackets V2",
    slug: "brackets",
    image: {
      src: watermelonBracket1.src,
      height: watermelonBracket1.height,
      width: watermelonBracket1.width,
      alt: "Watermelon Brackets V2"
    },
    description: "watermelon brackets v2"
  },
  {
    id: 24,
    name: "Mirror Brackets",
    slug: "brackets",
    image: {
      src: mirrorBracket.src,
      height: mirrorBracket.height,
      width: mirrorBracket.width,
      alt: "Mirror Brackets"
    },
    description: "mirror brackets"
  },
  {
    id: 25,
    name: "Straight Down Brackets",
    slug: "brackets",
    image: {
      src: straighdownBrackets.src,
      height: straighdownBrackets.height,
      width: straighdownBrackets.width,
      alt: "Straight Down Brackets"
    },
    description: "straight down brackets"
  },
  {
    id: 26,
    name: "Bunk Load Brackets",
    slug: "brackets",
    image: {
      src: bunkloadBrackets.src,
      height: bunkloadBrackets.height,
      width: bunkloadBrackets.width,
      alt: "Bunk Load Brackets"
    },
    description: "bunk load brackets"
  },
  {
    id: 27,
    name: "Penny Light Brackets",
    slug: "brackets",
    image: {
      src: pennyLightBrackets.src,
      height: pennyLightBrackets.height,
      width: pennyLightBrackets.width,
      alt: "Penny Light Brackets"
    },
    description: "penny light brackets"
  },
  {
    id: 28,
    name: "Internal Watermelon Brackets",
    slug: "brackets",
    image: {
      src: internalWmBrackets.src,
      height: internalWmBrackets.height,
      width: internalWmBrackets.width,
      alt: "Internal Watermelon Brackets"
    },
    description: "internal watermelon brackets"
  },
  {
    id: 29,
    name: "Premium 15 Brackets",
    slug: "brackets",
    image: {
      src: premium15Brackets.src,
      height: premium15Brackets.height,
      width: premium15Brackets.width,
      alt: "Premium 15 Brackets"
    },
    description: "premium 15 brackets"
  },
  {
    id: 30,
    name: "Dual Function Brackets",
    slug: "brackets",
    image: {
      src: dualFunctionBrackets.src,
      height: dualFunctionBrackets.height,
      width: dualFunctionBrackets.width,
      alt: "Dual Function Brackets"
    },
    description: "dual function brackets"
  },
  {
    id: 31,
    name: "Angled Brackets",
    slug: "brackets",
    image: {
      src: angledBrackets.src,
      height: angledBrackets.height,
      width: angledBrackets.width,
      alt: "Angled Brackets"
    },
    description: "angled brackets"
  },
  {
    id: 32,
    name: "Peterbilt Flattop Brackets",
    slug: "brackets",
    image: {
      src: peterbiltFlattopBrackets.src,
      height: peterbiltFlattopBrackets.height,
      width: peterbiltFlattopBrackets.width,
      alt: "Peterbilt Flattop Brackets"
    },
    description: "peterbilt flattop brackets"
  },
  {
    id: 33,
    name: "Peterbilt 379 Brackets",
    slug: "brackets",
    image: {
      src: peterbilt379Brackets.src,
      height: peterbilt379Brackets.height,
      width: peterbilt379Brackets.width,
      alt: "Peterbilt 379 Brackets"
    },
    description: "peterbilt 379 brackets"
  },
  // =========================
// 🆕 BREATHER PANEL PRODUCTS
// =========================

{
  id: 34,
  name: "Breather Panel One",
  slug: "breather-panels",
  image: {
    src: breatherPanelOne.src,
    height: breatherPanelOne.height,
    width: breatherPanelOne.width,
    alt: "Breather Panel One"
  },
  description: "breather panel one"
},
{
  id: 35,
  name: "Breather Panel Two",
  slug: "breather-panels",
  image: {
    src: breatherPanelTwo.src,
    height: breatherPanelTwo.height,
    width: breatherPanelTwo.width,
    alt: "Breather Panel Two"
  },
  description: "breather panel two"
},
{
  id: 36,
  name: "Breather Panel Three",
  slug: "breather-panels",
  image: {
    src: breatherPanelThree.src,
    height: breatherPanelThree.height,
    width: breatherPanelThree.width,
    alt: "Breather Panel Three"
  },
  description: "breather panel three"
},
{
  id: 37,
  name: "Breather Panel Four",
  slug: "breather-panels",
  image: {
    src: breatherPanelFour.src,
    height: breatherPanelFour.height,
    width: breatherPanelFour.width,
    alt: "Breather Panel Four"
  },
  description: "breather panel four"
},
{
  id: 38,
  name: "Breather Panel Five",
  slug: "breather-panels",
  image: {
    src: breatherPanelFive.src,
    height: breatherPanelFive.height,
    width: breatherPanelFive.width,
    alt: "Breather Panel Five"
  },
  description: "breather panel five"
},
{
  id: 39,
  name: "Breather Panel Six",
  slug: "breather-panels",
  image: {
    src: breatherPanelSix.src,
    height: breatherPanelSix.height,
    width: breatherPanelSix.width,
    alt: "Breather Panel Six"
  },
  description: "breather panel six"
},
{
  id: 40,
  name: "Breather Panel Seven",
  slug: "breather-panels",
  image: {
    src: breatherPanelSeven.src,
    height: breatherPanelSeven.height,
    width: breatherPanelSeven.width,
    alt: "Breather Panel Seven"
  },
  description: "breather panel seven"
},
{
  id: 41,
  name: "Breather Panel Eight",
  slug: "breather-panels",
  image: {
    src: breatherPanelEight.src,
    height: breatherPanelEight.height,
    width: breatherPanelEight.width,
    alt: "Breather Panel Eight"
  },
  description: "breather panel eight"
},
{
  id: 42,
  name: "Breather Panel Nine",
  slug: "breather-panels",
  image: {
    src: breatherPanelNine.src,
    height: breatherPanelNine.height,
    width: breatherPanelNine.width,
    alt: "Breather Panel Nine"
  },
  description: "breather panel nine"
},
{
  id: 43,
  name: "Breather Panel Ten",
  slug: "breather-panels",
  image: {
    src: breatherPanelTen.src,
    height: breatherPanelTen.height,
    width: breatherPanelTen.width,
    alt: "Breather Panel Ten"
  },
  description: "breather panel ten"
},
{
  id: 44,
  name: "Breather Panel Eleven",
  slug: "breather-panels",
  image: {
    src: breatherPanelEleven.src,
    height: breatherPanelEleven.height,
    width: breatherPanelEleven.width,
    alt: "Breather Panel Eleven"
  },
  description: "breather panel eleven"
},
{
  id: 45,
  name: "Breather Panel Twelve",
  slug: "breather-panels",
  image: {
    src: breatherPanelTwelve.src,
    height: breatherPanelTwelve.height,
    width: breatherPanelTwelve.width,
    alt: "Breather Panel Twelve"
  },
  description: "breather panel twelve"
},
// =========================
// 🆕 BUMPER PRODUCTS
// =========================

{
  id: 47,
  name: "Bumper One",
  slug: "bumper",
  image: {
    src: bumperOne.src,
    height: bumperOne.height,
    width: bumperOne.width,
    alt: "Bumper One"
  },
  description: "bumper one"
},
{
  id: 48,
  name: "Bumper Two",
  slug: "bumper",
  image: {
    src: bumperTwo.src,
    height: bumperTwo.height,
    width: bumperTwo.width,
    alt: "Bumper Two"
  },
  description: "bumper two"
},
{
  id: 49,
  name: "Bumper Three",
  slug: "bumper",
  image: {
    src: bumperThree.src,
    height: bumperThree.height,
    width: bumperThree.width,
    alt: "Bumper Three"
  },
  description: "bumper three"
},
{
  id: 50,
  name: "Bumper Four",
  slug: "bumper",
  image: {
    src: bumperFour.src,
    height: bumperFour.height,
    width: bumperFour.width,
    alt: "Bumper Four"
  },
  description: "bumper four"
},
{
  id: 51,
  name: "Bumper Five",
  slug: "bumper",
  image: {
    src: bumperFive.src,
    height: bumperFive.height,
    width: bumperFive.width,
    alt: "Bumper Five"
  },
  description: "bumper five"
},
{
  id: 52,
  name: "Bumper Six",
  slug: "bumper",
  image: {
    src: bumperSix.src,
    height: bumperSix.height,
    width: bumperSix.width,
    alt: "Bumper Six"
  },
  description: "bumper six"
},


];

