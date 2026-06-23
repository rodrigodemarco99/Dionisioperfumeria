import { useEffect } from "react";

import heroImg from "@assets/Gemini_Generated_Image_66h5hk66h5hk66h5_(1)_1776041591795.png";

import img01 from "@assets/Captura_de_pantalla_2026-03-10_160500_1776041552664.jpg";
import img02 from "@assets/Captura_de_pantalla_2026-03-10_160513_1776041552664.jpg";
import img03 from "@assets/Captura_de_pantalla_2026-03-10_160524_1776041552665.jpg";
import img04 from "@assets/Captura_de_pantalla_2026-03-10_160536_1776041552666.jpg";
import img05 from "@assets/Captura_de_pantalla_2026-03-10_160548_1776041552666.jpg";
import img06 from "@assets/Captura_de_pantalla_2026-03-10_160637_1776041552670.jpg";
import img07 from "@assets/Captura_de_pantalla_2026-03-10_160421_1776041552662.jpg";
import img08 from "@assets/Captura_de_pantalla_2026-03-10_160434_1776041552662.jpg";
import img09 from "@assets/Captura_de_pantalla_2026-03-10_160446_1776041552663.jpg";
import img10 from "@assets/Captura_de_pantalla_2026-03-10_160345_1776041552661.jpg";
import img11 from "@assets/Captura_de_pantalla_2026-03-10_160601_1776041552667.jpg";
import img12 from "@assets/Captura_de_pantalla_2026-03-10_160615_1776041552667.jpg";
import img13 from "@assets/Captura_de_pantalla_2026-03-10_160626_1776041552668.jpg";
import img14 from "@assets/Captura_de_pantalla_2026-04-07_102455_1776042829225.png";
import img15 from "@assets/Captura_de_pantalla_2026-04-07_102541_1776042829224.png";
import img16 from "@assets/Captura_de_pantalla_2026-04-07_102603_1776042829224.png";
import img17 from "@assets/Captura_de_pantalla_2026-04-07_102626_1776042829223.png";
import img18 from "@assets/Captura_de_pantalla_2026-04-07_102833_1776042829223.png";
import img19 from "@assets/Captura_de_pantalla_2026-04-07_102845_1776042829222.png";
import img20 from "@assets/Captura_de_pantalla_2026-04-07_102857_1776042829222.png";
import img21 from "@assets/Captura_de_pantalla_2026-04-07_102943_1776042829221.png";
import img22 from "@assets/Captura_de_pantalla_2026-04-07_103046_1776042829221.png";
import img23 from "@assets/Captura_de_pantalla_2026-04-07_103135_1776042829220.png";
import img24 from "@assets/Captura_de_pantalla_2026-04-07_103255_1776042829219.png";
import img25 from "@assets/Captura_de_pantalla_2026-04-15_181140_1776288680914.png";
import img26 from "@assets/Captura_de_pantalla_2026-04-15_181152_1776288680915.png";
import img27 from "@assets/Captura_de_pantalla_2026-04-15_181203_1776288680916.png";
import img28 from "@assets/Captura_de_pantalla_2026-04-15_181213_1776288680917.png";
import img29 from "@assets/Captura_de_pantalla_2026-04-15_181249_1776288680918.png";
import img30 from "@assets/Captura_de_pantalla_2026-04-15_181326_1776288680921.png";
import img31 from "@assets/Captura_de_pantalla_2026-04-15_181339_1776288680921.png";
import img32 from "@assets/Captura_de_pantalla_2026-04-15_181403_1776288680923.png";
import img33 from "@assets/Captura_de_pantalla_2026-04-15_181416_1776288680924.png";
import img34 from "@assets/Captura_de_pantalla_2026-04-15_181430_1776288680925.png";
import img35 from "@assets/Captura_de_pantalla_2026-04-15_181442_1776288680926.png";
import img36 from "@assets/Captura_de_pantalla_2026-04-15_181453_1776288680927.png";
import img37 from "@assets/Captura_de_pantalla_2026-04-15_181502_1776288680928.png";
import img38 from "@assets/Captura_de_pantalla_2026-04-15_181606_1776288680928.png";

import aaa01 from "@assets/image_1776289233879.png";
import aaa02 from "@assets/image_1776289346603.png";
import aaa03 from "@assets/image_1776289481298.png";
import aaa04 from "@assets/image_1776289521616.png";
import aaa05 from "@assets/image_1776289571629.png";
import aaa06 from "@assets/image_1776289687247.png";
import aaa07 from "@assets/image_1776289727092.png";
import aaa08 from "@assets/image_1776289755913.png";
import aaa09 from "@assets/image_1776289823193.png";
import aaa10 from "@assets/image_1776289843232.png";

import afeeff from "@assets/PERFUME AFEEF 100ML.png";
import alfaris from "@assets/PERFUME AL FARIS 100ML.png";
import am9 from "@assets/PERFUME AM9 100ML.png";
import musamam from "@assets/PERFUME ARABE MUSAMAM 100ML.png";
import qaaed from "@assets/PERFUME ARABE QAAED 100ML.png";
import candee from "@assets/PERFUME CANDEE 100ML.png";
import choco from "@assets/PERFUME CHOCO OVERDOSE 75ML.png";
import cookie from "@assets/PERFUME COOKIE CRAVE 75ML.png";
import gisela from "@assets/PERFUME GISELA 200ML.png";
import giselarosa from "@assets/PERFUME GISELA ROSA 200ML.png";
import hasik from "@assets/PERFUME HASIK 100ML.png";
import hawasfire from "@assets/PERFUME HAWAS FIRE 100ML.png";
import hawasice from "@assets/PERFUME HAWAS ICE 100ML.png";
import hawasmalibu from "@assets/PERFUME HAWAS MALIBU 100ML.png";
import hayarosa from "@assets/PERFUME HAYA ROSA 100ML.png";
import mallow from "@assets/PERFUME MALLOW MADNESS 75ML.png";
import marshmallow from "@assets/PERFUME MARSHMALLOW BLUSH 100ML.png";
import odysseyagua from "@assets/PERFUME ODYSSEY AGUA 100ML.png";
import rayhaan from "@assets/PERFUME RAYHAAN 100ML.png";
import supremacy from "@assets/PERFUME SUPREMACY 100ML.png";
import vanilla from "@assets/PERFUME VANILLA FREAK 75ML.png";
import vulcan from "@assets/PERFUME VULCAN 100ML.png";
import vulcannegro from "@assets/PERFUME VULCAN NEGRO 100ML.png";
import whipped from "@assets/PERFUME WHIPPED PLEASURE 75ML.png";
import white from "@assets/PERFUME WHITE EDITION 100ML.png";
import wildone from "@assets/PERFUME WILD ONE 100ML.png";
import erbaSoprano from "@assets/PERFUME ERBA PURA 100ML soprano.png";
import erbaAcento from "@assets/PERFUME ERBA PURA acento overdose 100ML.png";
import erbaOpera from "@assets/PERFUME ERBA PURA opera.png";
import erbaCoro from "@assets/PERFUME ERBA PURA coro.png";
import erbaNueva from "@assets/PERFUME ERBA PURA Nueva edición.png";
import historicOlmeda from "@assets/PERFUME HISTORIC OLMEDA 100ML.png";
import bhararaRose from "@assets/PERFUME BHARARA ROSE 100ML.png";
import bhararaChocolate from "@assets/PERFUME BHARARA KING CHOCOLATE 100ML.png";
import bhararaGold from "@assets/PERFUME BHARARA KING GOLD EDITION 100ML.png";
import akHaramain from "@assets/PERFUME AK HARAMAIN AMBER OUD 60ML.png";
import alHaramain from "@assets/PERFUME AL HARAMAIN AMBER OUD 60ML.png";
import haramainGold from "@assets/PERFUME HARAMAIN AMBER OUD GOLD EDITION 60ML.png";
import bhararaBleu from "@assets/BHARARA KING BLEU 100ML.png";
import theKingdom from "@assets/PERFUME THE KINGDOM 100ML.png";
import artOfUniverse from "@assets/PERFUME ART OF UNIVERSE 100ML.png";
import azzaroWanted from "@assets/PERFUME AZZARO THE MOST WANTED 100ML.png";
import asadElixirNegro from "@assets/PERFUME ASAD ELIXIR NEGRO 100ML.png";

import bs01 from "@assets/imgvs1_1776041960423.jpg";
import bs02 from "@assets/imgvs2_1776041960424.jpg";
import bs03 from "@assets/imgvs3_1776041960425.jpg";
import bs04 from "@assets/imgvs4_1776041960425.jpg";
import bs05 from "@assets/imgvs5_1776041960426.jpg";
import bs06 from "@assets/Captura_de_pantalla_2026-04-12_221912_1776043185592.png";
import bs07 from "@assets/Captura_de_pantalla_2026-04-12_221856_1776043185593.png";
import bs08 from "@assets/Captura_de_pantalla_2026-04-12_221846_1776043185594.png";
import bs09 from "@assets/Captura_de_pantalla_2026-04-12_221808_1776043185595.png";

const waLink = (name: string) =>
  "https://wa.me/5491132393925?text=" + encodeURIComponent("Hola! Me interesa el perfume: " + name);

const arabes = [
  { img: img01, name: "Badee Al Oud Honor & Glory", marca: "Lattafa", genero: "Unisex", aroma: "Oud, amaderado, almizclado", precio: 55000 },
  { img: img02, name: "Badee Al Oud Oud for Glory", marca: "Lattafa", genero: "Unisex", aroma: "Oud, amaderado, especiado", precio: 55000 },
  { img: img03, name: "Badee Al Oud Sublime", marca: "Lattafa", genero: "Unisex", aroma: "Oud, floral, almizclado", precio: 55000 },
  { img: img04, name: "Badee Al Oud Rose", marca: "Lattafa", genero: "Mujer", aroma: "Rosa, oud, almizclado", precio: 55000 },
  { img: img05, name: "Badee Al Oud Amethyst", marca: "Lattafa", genero: "Mujer", aroma: "Floral, frutal, almizclado", precio: 55000 },
  { img: img06, name: "9pm Night Out", marca: "Afnan", genero: "Hombre", aroma: "Amaderado, especiado, ámbar", precio: 45000 },
  { img: img07, name: "Club de Nuit Intense Man", marca: "Armaf", genero: "Hombre", aroma: "Cítrico, amaderado, almizclado", precio: 60000 },
  { img: img08, name: "Club de Nuit Woman", marca: "Armaf", genero: "Mujer", aroma: "Floral, frutal, almizclado", precio: 55000 },
  { img: img09, name: "Club de Nuit Untold", marca: "Armaf", genero: "Unisex", aroma: "Floral, amaderado, almizclado", precio: 55000 },
  { img: img10, name: "Odyssey Mandarin Sky", marca: "Armaf", genero: "Hombre", aroma: "Cítrico, acuático, amaderado", precio: 60000 },
  { img: img11, name: "Odyssey Candee", marca: "Armaf", genero: "Mujer", aroma: "Frutal, dulce, almizclado", precio: 60000 },
  { img: img12, name: "Odyssey Tyrant", marca: "Armaf", genero: "Hombre", aroma: "Amaderado, especiado, cuero", precio: 55000 },
  { img: img13, name: "Odyssey Limoni", marca: "Armaf", genero: "Unisex", aroma: "Cítrico, fresco, verde", precio: 55000 },
  { img: img14, name: "Ishq Al Shuyukh Silver", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, ámbar, especiado", precio: 55000 },
  { img: img15, name: "His Confession Black", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, ámbar, almizclado", precio: 55000 },
  { img: img16, name: "Her Confession", marca: "Lattafa", genero: "Mujer", aroma: "Floral, vainilla, almizclado", precio: 55000 },
  { img: img17, name: "Maahir Black Edition", marca: "Lattafa", genero: "Hombre", aroma: "Cuero, amaderado, especiado", precio: 55000 },
  { img: img18, name: "Asad Zanzibar", marca: "Lattafa", genero: "Hombre", aroma: "Acuático, amaderado, almizclado", precio: 57000 },
  { img: img19, name: "Asad Elixir", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, ámbar, especiado", precio: 57000 },
  { img: img20, name: "Yara Amarillo", marca: "Lattafa", genero: "Mujer", aroma: "Frutal, floral, almizclado", precio: 57000 },
  { img: img21, name: "Erba Pura", marca: "Xerjoff", genero: "Unisex", aroma: "Cítrico, floral, almizclado", precio: 60000 },
  { img: img22, name: "Viking Beirut", marca: "Bharara", genero: "Hombre", aroma: "Especiado, amaderado, ámbar", precio: 57000 },
  { img: img23, name: "Al Noble Safeer", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, oud, almizclado", precio: 55000 },
  { img: img24, name: "Odyssey Mega", marca: "Armaf", genero: "Hombre", aroma: "Amaderado, cítrico, ámbar", precio: 55000 },
  { img: img25, name: "Club de Nuit Urban Man Elixir", marca: "Armaf", genero: "Hombre", aroma: "Amaderado, cuero, especiado", precio: 60000 },
  { img: img26, name: "Club de Nuit Impériale", marca: "Armaf", genero: "Mujer", aroma: "Floral, almizclado, vainilla", precio: 55000 },
  { img: img27, name: "Give Me Gourmand Berry on Top", marca: "Lattafa", genero: "Mujer", aroma: "Frutal, dulce, fresa", precio: 55000 },
  { img: img28, name: "Give Me Gourmand Cookie Crave", marca: "Lattafa", genero: "Mujer", aroma: "Dulce, gourmand, vainilla", precio: 46500 },
  { img: img29, name: "Odyssey Homme", marca: "Armaf", genero: "Hombre", aroma: "Amaderado, especiado, almizclado", precio: 55000 },
  { img: img30, name: "Yara Rosa", marca: "Lattafa", genero: "Mujer", aroma: "Floral, frutal, almizclado", precio: 57000 },
  { img: img31, name: "Asad", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, oud, especiado", precio: 57000 },
  { img: img32, name: "9am Dive", marca: "Afnan", genero: "Unisex", aroma: "Acuático, cítrico, amaderado", precio: 36000 },
  { img: img33, name: "Give Me Gourmand Mallow Madness", marca: "Lattafa", genero: "Mujer", aroma: "Dulce, gourmand, almizclado", precio: 46500 },
  { img: img34, name: "Give Me Gourmand Whipped Pleasure", marca: "Lattafa", genero: "Mujer", aroma: "Vainilla, caramelo, almizclado", precio: 46500 },
  { img: img35, name: "Give Me Gourmand Vanilla Freak", marca: "Lattafa", genero: "Mujer", aroma: "Vainilla, chocolate, dulce", precio: 46500 },
  { img: img36, name: "Yara Fucsia", marca: "Lattafa", genero: "Mujer", aroma: "Floral, frutal, almizclado", precio: 57000 },
  { img: img37, name: "Khamrah Qahwa", marca: "Lattafa", genero: "Unisex", aroma: "Café, oud, especiado", precio: 46500 },
  { img: img38, name: "Qaed Al Fursan", marca: "Lattafa", genero: "Hombre", aroma: "Cítrico, amaderado, almizclado", precio: 34500 },
  { img: gisela, name: "Gisela 200ML", marca: "Lattafa", genero: "Mujer", aroma: "Dulce, vainilla, almizclado", precio: 40500 },
  { img: giselarosa, name: "Gisela Rosa 200ML", marca: "Lattafa", genero: "Mujer", aroma: "Rosa, floral, almizclado", precio: 40500 },
  { img: afeeff, name: "Afeef", marca: "Lattafa", genero: "Unisex", aroma: "Frutal, floral, dulce", precio: 70000 },
  { img: vulcan, name: "Vulcan Feu", marca: "French Avenue", genero: "Hombre", aroma: "Mango, frutal, amaderado", precio: 45000 },
  { img: vulcannegro, name: "Vulcan Negro", marca: "French Avenue", genero: "Hombre", aroma: "Oscuro, amaderado, especiado", precio: 45000 },
  { img: supremacy, name: "Supremacy", marca: "Afnan", genero: "Hombre", aroma: "Cítrico, amaderado, almizclado", precio: 33000 },
  { img: hasik, name: "Hasik", marca: "Lattafa", genero: "Unisex", aroma: "Oud, especiado, amaderado", precio: 42000 },
  { img: rayhaan, name: "Rayhaan", marca: "Rayhaan", genero: "Unisex", aroma: "Amaderado, floral, almizclado", precio: 45000 },
  { img: musamam, name: "Musamam", marca: "Lattafa", genero: "Unisex", aroma: "Oud, ámbar, especiado", precio: 50000 },
  { img: marshmallow, name: "Marshmallow Blush", marca: "Lattafa", genero: "Mujer", aroma: "Dulce, vainilla, malvavisco", precio: 65000 },
  { img: hayarosa, name: "Haya Rosa", marca: "Lattafa", genero: "Mujer", aroma: "Rosa, dulce, almizclado", precio: 39750 },
  { img: hawasfire, name: "Hawas Fire", marca: "Rasasi", genero: "Hombre", aroma: "Cítrico, especiado, amaderado", precio: 45000 },
  { img: hawasice, name: "Hawas Ice", marca: "Rasasi", genero: "Hombre", aroma: "Mentolado, acuático, fresco", precio: 45000 },
  { img: hawasmalibu, name: "Hawas Malibu", marca: "Rasasi", genero: "Hombre", aroma: "Coco, acuático, fresco", precio: 45000 },
  { img: white, name: "White Edition", marca: "Lattafa", genero: "Unisex", aroma: "Cítrico, floral, almizclado", precio: 50000 },
  { img: alfaris, name: "Al Faris", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, especiado, almizclado", precio: 30000 },
  { img: wildone, name: "Wild One", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, cuero, almizclado", precio: 50000 },
  { img: odysseyagua, name: "Odyssey Agua", marca: "Armaf", genero: "Hombre", aroma: "Acuático, cítrico, fresco", precio: 50000 },
  { img: choco, name: "Choco Overdose", marca: "Lattafa", genero: "Mujer", aroma: "Chocolate, dulce, gourmand", precio: 65000 },
  { img: erbaSoprano, name: "Erba Pura Soprano", marca: "Lattafa", genero: "Unisex", aroma: "Frutal, dulce, almizclado", precio: 60000 },
  { img: erbaAcento, name: "Erba Pura Acento Overdose", marca: "Lattafa", genero: "Unisex", aroma: "Dulce, frutal, almizclado", precio: 60000 },
  { img: erbaOpera, name: "Erba Pura Opera", marca: "Lattafa", genero: "Unisex", aroma: "Frutal, floral, vainilla", precio: 60000 },
  { img: erbaCoro, name: "Erba Pura Coro", marca: "Lattafa", genero: "Unisex", aroma: "Cítrico, frutal, almizclado", precio: 60000 },
  { img: erbaNueva, name: "Erba Pura Nueva Edición", marca: "Lattafa", genero: "Unisex", aroma: "Afrutado, dulce, premium", precio: 65000 },
  { img: historicOlmeda, name: "Historic Olmeda", marca: "Al Haramain", genero: "Hombre", aroma: "Amaderado, especiado, ámbar", precio: 70000 },
  { img: bhararaRose, name: "Bharara Rose", marca: "Bharara", genero: "Mujer", aroma: "Rosa, floral, almizclado", precio: 70000 },
  { img: bhararaChocolate, name: "Bharara King Chocolate", marca: "Bharara", genero: "Unisex", aroma: "Cacao, dulce, gourmand", precio: 70000 },
  { img: bhararaGold, name: "Bharara King Gold Edition", marca: "Bharara", genero: "Hombre", aroma: "Amaderado, ámbar, especiado", precio: 70000 },
  { img: akHaramain, name: "AK Haramain Amber Oud", marca: "Al Haramain", genero: "Unisex", aroma: "Ámbar, oud, almizclado", precio: 70000 },
  { img: alHaramain, name: "Al Haramain Amber Oud", marca: "Al Haramain", genero: "Unisex", aroma: "Ámbar, oud, especiado", precio: 70000 },
  { img: haramainGold, name: "Haramain Amber Oud Gold Edition", marca: "Al Haramain", genero: "Unisex", aroma: "Ámbar, oud, dorado", precio: 70000 },
  { img: bhararaBleu, name: "Bharara King Bleu", marca: "Bharara", genero: "Hombre", aroma: "Acuático, amaderado, almizclado", precio: 70000 },
  { img: theKingdom, name: "The Kingdom", marca: "Lattafa", genero: "Hombre", aroma: "Amaderado, cuero, especiado", precio: 70000 },
  { img: artOfUniverse, name: "Art of Universe", marca: "Lattafa", genero: "Unisex", aroma: "Cítrico, floral, almizclado", precio: 70000 },
  { img: azzaroWanted, name: "Azzaro The Most Wanted", marca: "Azzaro", genero: "Hombre", aroma: "Amaderado, ámbar, especiado", precio: 60000 },
  { img: asadElixirNegro, name: "Asad Elixir Negro", marca: "Lattafa", genero: "Hombre", aroma: "Negro, amaderado, especiado", precio: 60000 },
];

const aaa = [
  { img: aaa01, name: "Le Male Le Parfum", marca: "Jean Paul Gaultier", genero: "Hombre", aroma: "Lavanda, vainilla, cuero, almizclado", precio: 30000 },
  { img: aaa02, name: "Invictus Legend", marca: "Paco Rabanne", genero: "Hombre", aroma: "Acuático, amaderado, almizclado", precio: 30000 },
  { img: aaa03, name: "Invictus Onyx", marca: "Paco Rabanne", genero: "Hombre", aroma: "Especiado, amaderado, cuero", precio: 30000 },
  { img: aaa04, name: "Invictus EDT", marca: "Paco Rabanne", genero: "Hombre", aroma: "Acuático, ambar, almizclado", precio: 30000 },
  { img: aaa05, name: "212 VIP Men", marca: "Carolina Herrera", genero: "Hombre", aroma: "Amaderado, almizclado, ámbar", precio: 30000 },
  { img: aaa06, name: "Scandal Pour Homme EDT Azul", marca: "Jean Paul Gaultier", genero: "Hombre", aroma: "Bergamota, ámbar, almizclado", precio: 30000 },
  { img: aaa07, name: "Scandal Pour Homme EDT", marca: "Jean Paul Gaultier", genero: "Hombre", aroma: "Bergamota, cuero, almizclado", precio: 30000 },
  { img: aaa08, name: "Scandal Le Parfum", marca: "Jean Paul Gaultier", genero: "Hombre", aroma: "Cuero, ámbar, almizclado", precio: 30000 },
  { img: aaa09, name: "Phantom EDT", marca: "Paco Rabanne", genero: "Hombre", aroma: "Vainilla, lavanda, amaderado", precio: 30000 },
  { img: aaa10, name: "Bad Boy EDT", marca: "Carolina Herrera", genero: "Hombre", aroma: "Cuero, cacao, amaderado", precio: 30000 },
];

const bodySplash = [
  { img: bs01, name: "Midnight Fantasy", marca: "Victoria's Secret", genero: "Mujer", aroma: "Frutal, floral, almizclado", precio: 25000 },
  { img: bs02, name: "Temptation", marca: "Victoria's Secret", genero: "Mujer", aroma: "Oriental, vainilla, almizclado", precio: 25000 },
  { img: bs03, name: "Aqua Kiss", marca: "Victoria's Secret", genero: "Mujer", aroma: "Floral, acuático, fresco", precio: 25000 },
  { img: bs04, name: "Sugar High Shimmer", marca: "Victoria's Secret", genero: "Mujer", aroma: "Dulce, frutal, almizclado", precio: 25000 },
  { img: bs05, name: "Love Spell", marca: "Victoria's Secret", genero: "Mujer", aroma: "Frutal, floral, almizclado", precio: 25000 },
  { img: bs06, name: "Coconut Musk", marca: "Al Wataniah", genero: "Mujer", aroma: "Coco, almizclado, dulce", precio: 25000 },
  { img: bs07, name: "Odyssey Mandarin Sky Body Spray", marca: "Armaf", genero: "Unisex", aroma: "Cítrico, acuático, fresco", precio: 25000 },
  { img: bs08, name: "Ameer Al Arab", marca: "Lattafa", genero: "Unisex", aroma: "Acuático, amaderado, almizclado", precio: 25000 },
  { img: bs09, name: "Khamrah", marca: "Lattafa", genero: "Unisex", aroma: "Oud, especiado, amaderado", precio: 60000 },
];

const destacados = [arabes[6], arabes[30], arabes[36], arabes[0], arabes[7], arabes[10]];

const formatPrecio = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function PerfumeCard({ img, name, marca, genero, aroma, precio }: { img: string; name: string; marca: string; genero: string; aroma: string; precio?: number }) {
  const generoClass = genero === "Hombre" ? "badge-hombre" : genero === "Mujer" ? "badge-mujer" : "badge-unisex";
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <a href={waLink(name)} target="_blank" rel="noopener noreferrer" className="perfume-card-link">
        <div className="perfume-card">
          <div className="perfume-img-wrap">
            <img src={img} alt={name} className="perfume-img" loading="lazy" />
            <div className="aroma-overlay">
              <div className="aroma-overlay-inner">
                <p className="aroma-label">Notas</p>
                <p className="aroma-text">{aroma}</p>
                <span className="aroma-cta"><i className="bi bi-whatsapp"></i> Consultar</span>
              </div>
            </div>
          </div>
          <div className="perfume-info">
            <div className="perfume-meta">
              <p className="perfume-marca">{marca}</p>
              <span className={`genero-badge ${generoClass}`}>{genero}</span>
            </div>
            <p className="perfume-name">{name}</p>
            {precio && <div className="precio-badge">{formatPrecio(precio)}</div>}
          </div>
        </div>
      </a>
    </div>
  );
}

const navItems = [
  { label: "Más Buscados", href: "#destacados" },
  { label: "Árabes", href: "#arabes" },
  { label: "AAA", href: "#aaa" },
  { label: "Body Splash", href: "#body-splash" },
];

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a.nav-scroll-link');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = (link as HTMLAnchorElement).getAttribute('href');
        if (target) {
          const el = document.querySelector(target);
          if (el) {
            const header = document.querySelector('.top-shipping-bar');
            const nav = document.querySelector('.dionisio-navbar');
            const headerH = header?.clientHeight ?? 0;
            const navH = nav?.clientHeight ?? 56;
            const top = (el as HTMLElement).offsetTop - headerH - navH;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      });
    });

    const navbar = document.querySelector('.dionisio-navbar') as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --gold: #d4a853;
          --gold-light: #f0d080;
          --gold-dark: #b8922a;
          --bg-black: #0a0a0a;
          --bg-card: #121212;
          --bg-elevated: #1a1a1a;
          --text-primary: #f5f0eb;
          --text-secondary: #a09888;
          --text-muted: #6b6558;
          --border-dim: rgba(212, 168, 83, 0.15);
          --border-gold: rgba(212, 168, 83, 0.3);
          --font-serif: 'Playfair Display', 'Cormorant Garamond', serif;
          --font-sans: 'Montserrat', 'Raleway', sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: var(--font-sans);
          background: var(--bg-black);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
        }

        img { max-width: 100%; display: block; }

        /* ===== SHIPPING BAR ===== */
        .top-shipping-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          background: linear-gradient(90deg, #1a1008, #2a1a0a, #1a1008);
          border-bottom: 1px solid var(--border-gold);
          padding: 0.45rem 1rem;
          text-align: center;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--gold-light);
        }
        .top-shipping-bar span {
          color: var(--text-primary);
        }

        /* ===== NAVBAR ===== */
        .dionisio-navbar {
          position: fixed;
          top: 34px;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-dim);
          transition: background 0.3s, box-shadow 0.3s;
        }
        .dionisio-navbar.scrolled {
          background: rgba(10, 10, 10, 0.97);
          box-shadow: 0 2px 24px rgba(0,0,0,0.4);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-brand-text {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gold) !important;
          letter-spacing: 0.04em;
          text-decoration: none;
          line-height: 1;
        }
        .navbar-nav {
          display: flex;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link-custom {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-secondary) !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.4rem 0.65rem;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link-custom:hover {
          color: var(--gold) !important;
        }
        .navbar-toggler {
          display: none;
          background: none;
          border: 1px solid var(--border-gold);
          padding: 0.35rem 0.5rem;
          cursor: pointer;
          color: var(--gold);
          font-size: 1.2rem;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .navbar-toggler {
            display: block;
          }
          .navbar-nav {
            display: none;
            flex-direction: column;
            width: 100%;
            padding: 0.5rem 0;
            gap: 0;
          }
          .navbar-nav.open {
            display: flex;
          }
          .nav-link-custom {
            padding: 0.6rem 0;
            border-top: 1px solid var(--border-dim);
          }
          .navbar-inner {
            flex-wrap: wrap;
          }
        }

        /* ===== HERO ===== */
        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          margin-top: 0;
          padding-top: 90px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('${heroImg}');
          background-size: cover;
          background-position: center 30%;
          filter: brightness(0.35) saturate(1.1);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top,
            rgba(10,10,10,1) 0%,
            rgba(10,10,10,0.6) 50%,
            rgba(10,10,10,0.3) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem 1.5rem;
          max-width: 720px;
        }
        .hero-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--border-gold);
          padding: 0.3rem 0.9rem;
          margin-bottom: 1.2rem;
        }
        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 8vw, 4.5rem);
          font-weight: 400;
          line-height: 1.08;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .hero-title span {
          color: var(--gold-light);
          font-style: italic;
        }
        .hero-subtitle {
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, var(--gold-dark), var(--gold));
          color: #0a0a0a;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
          border: none;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(212,168,83,0.25);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ===== SECTIONS ===== */
        .perfume-section {
          padding: 4rem 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }
        .section-tag {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          font-weight: 400;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }
        .section-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .section-divider {
          width: 40px;
          height: 2px;
          background: var(--gold);
          margin: 0 auto 1rem;
        }

        /* ===== DESTACADOS ===== */
        #destacados {
          background: var(--bg-black);
        }
        .destacados-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .destacado-card {
          background: var(--bg-card);
          border: 1px solid var(--border-dim);
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
          text-decoration: none;
          display: block;
        }
        .destacado-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }
        .destacado-img-wrap {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #1a1410;
        }
        .destacado-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .destacado-card:hover .destacado-img-wrap img {
          transform: scale(1.06);
        }
        .destacado-info {
          padding: 0.7rem 0.85rem 0.9rem;
          text-align: center;
        }
        .destacado-marca {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.15rem;
          font-weight: 600;
        }
        .destacado-name {
          font-family: var(--font-serif);
          font-size: 0.92rem;
          color: #fff;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .destacado-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #25D366;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.45rem 1rem;
          text-decoration: none;
          transition: background 0.2s;
          border-radius: 2px;
        }
        .destacado-wa:hover {
          background: #1ebe5a;
        }

        @media (max-width: 600px) {
          .destacados-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }

        /* ===== PERFUME CARDS ===== */
        .perfume-card-link {
          text-decoration: none;
          display: block;
        }
        .perfume-card {
          background: var(--bg-card);
          border: 1px solid var(--border-dim);
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .perfume-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }
        .perfume-img-wrap {
          position: relative;
          overflow: hidden;
          background: #1a1410;
          aspect-ratio: 1 / 1;
        }
        .perfume-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .perfume-card:hover .perfume-img {
          transform: scale(1.06);
        }
        .aroma-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 6, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .perfume-card:hover .aroma-overlay {
          opacity: 1;
        }
        .aroma-overlay-inner {
          text-align: center;
          padding: 1rem;
        }
        .aroma-label {
          font-size: 0.55rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 700;
          margin-bottom: 0.35rem;
        }
        .aroma-text {
          font-family: var(--font-serif);
          font-size: 0.85rem;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 0.7rem;
        }
        .aroma-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: #25D366;
          padding: 0.35rem 0.8rem;
        }
        .perfume-info {
          padding: 0.7rem 0.85rem 0.85rem;
          text-align: center;
        }
        .perfume-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-bottom: 0.2rem;
          flex-wrap: wrap;
        }
        .perfume-marca {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0;
          font-weight: 600;
        }
        .genero-badge {
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.12rem 0.4rem;
          border-radius: 20px;
          line-height: 1;
        }
        .badge-hombre { background: rgba(59,130,246,0.15); color: #60a5fa; }
        .badge-mujer { background: rgba(244,114,182,0.15); color: #f472b6; }
        .badge-unisex { background: rgba(168,85,247,0.15); color: #a855f7; }
        .perfume-name {
          font-family: var(--font-serif);
          font-size: 0.88rem;
          color: #fff;
          margin-bottom: 0;
          line-height: 1.3;
        }
        .precio-badge {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--gold);
          margin-top: 0.35rem;
          letter-spacing: 0.5px;
        }

        /* ===== COMING SOON ===== */
        .coming-soon {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
          border: 1px dashed var(--border-dim);
        }
        .coming-soon i {
          font-size: 2rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.8rem;
        }
        .coming-soon p {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0;
        }

        /* ===== FOOTER ===== */
        .dionisio-footer {
          background: var(--bg-elevated);
          border-top: 1px solid var(--border-dim);
          padding: 3rem 1rem 6rem;
          text-align: center;
        }
        .footer-brand {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .footer-tagline {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* ===== WHATSAPP FLOATING ===== */
        .wa-float {
          position: fixed;
          bottom: 1.2rem;
          right: 1.2rem;
          z-index: 2000;
          width: 56px;
          height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wa-float:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(37,211,102,0.45);
          color: #fff;
        }
        .wa-float .wa-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ff4444;
          color: #fff;
          font-size: 0.55rem;
          font-weight: 700;
          padding: 0.15rem 0.35rem;
          border-radius: 20px;
          line-height: 1;
        }

        @media (max-width: 575px) {
          .perfume-info { padding: 0.55rem 0.65rem 0.7rem; }
          .perfume-name { font-size: 0.78rem; }
          .perfume-marca { font-size: 0.5rem; }
          .genero-badge { font-size: 0.45rem; }
          .aroma-text { font-size: 0.75rem; }
        }
      `}</style>

      {/* SHIPPING BAR */}
      <div className="top-shipping-bar">
        <i className="bi bi-truck me-1"></i> Envío GRATIS e inmediato en Avellaneda y La Boca <span>🚚</span>
      </div>

      {/* NAVBAR */}
      <nav className="dionisio-navbar">
        <div className="navbar-inner">
          <a className="navbar-brand-text" href="#">Dionisio Perfumería</a>
          <button className="navbar-toggler" id="navToggle" aria-label="Menú">
            <i className="bi bi-list"></i>
          </button>
          <ul className="navbar-nav" id="mainNav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="nav-link-custom nav-scroll-link" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Alta Perfumería</div>
          <h1 className="hero-title">
            Tu próxima firma<br /><span>personal está acá</span>
          </h1>
          <p className="hero-subtitle">Fragancias árabes originales · Lattafa · Armaf · Afnan</p>
          <a href="#destacados" className="hero-cta nav-scroll-link">
            <i className="bi bi-box"></i>
            Ver Catálogo de Invierno
          </a>
        </div>
        <div className="hero-scroll-hint">
          <i className="bi bi-chevron-down"></i>
          Descubrí
        </div>
      </header>

      {/* DESTACADOS */}
      <section id="destacados" className="perfume-section">
        <div className="section-header">
          <div className="section-divider"></div>
          <p className="section-tag">Los favoritos</p>
          <h2 className="section-title">Más Buscados</h2>
          <p className="section-desc">
            Los pesos pesados que todos quieren. Khamrah, Asad, Club de Nuit y más.
          </p>
        </div>
        <div className="destacados-grid">
          {destacados.map((p, i) => (
            <a key={i} href={waLink(p.name)} target="_blank" rel="noopener noreferrer" className="destacado-card">
              <div className="destacado-img-wrap">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="destacado-info">
                <p className="destacado-marca">{p.marca}</p>
                <p className="destacado-name">{p.name}</p>
                <span className="destacado-wa"><i className="bi bi-whatsapp"></i> Consultar</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PERFUMES ÁRABES */}
      <section id="arabes" className="perfume-section">
        <div className="container">
          <div className="section-header">
            <div className="section-divider"></div>
            <p className="section-tag">Oriente en tu piel</p>
            <h2 className="section-title">Perfumes Árabes</h2>
            <p className="section-desc">
              Fragancias orientales de casas árabes reconocidas. Oud, especias y maderas nobles.
            </p>
          </div>
          <div className="row g-3">
            {arabes.map((p, i) => (
              <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} genero={p.genero} aroma={p.aroma} precio={p.precio} />
            ))}
          </div>
        </div>
      </section>

      {/* PERFUMES AAA */}
      <section id="aaa" className="perfume-section">
        <div className="container">
          <div className="section-header">
            <div className="section-divider"></div>
            <p className="section-tag">Calidad Premium</p>
            <h2 className="section-title">Perfumes AAA</h2>
            <p className="section-desc">
              Inspirados en las mejores fragancias del mundo, a precios accesibles.
            </p>
          </div>
          {aaa.length > 0 ? (
            <div className="row g-3 justify-content-center">
              {aaa.map((p, i) => (
                <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} genero={p.genero} aroma={p.aroma} precio={p.precio} />
              ))}
            </div>
          ) : (
            <div className="coming-soon">
              <i className="bi bi-stars"></i>
              <p>Próximamente nuevos productos</p>
            </div>
          )}
        </div>
      </section>

      {/* BODY SPLASH */}
      <section id="body-splash" className="perfume-section">
        <div className="container">
          <div className="section-header">
            <div className="section-divider"></div>
            <p className="section-tag">Frescura todo el día</p>
            <h2 className="section-title">Body Splash</h2>
            <p className="section-desc">
              Splashes corporales vibrantes y frescos, ideales para el día a día.
            </p>
          </div>
          {bodySplash.length > 0 ? (
            <div className="row g-3">
              {bodySplash.map((p, i) => (
                <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} genero={p.genero} aroma={p.aroma} precio={p.precio} />
              ))}
            </div>
          ) : (
            <div className="coming-soon">
              <i className="bi bi-stars"></i>
              <p>Próximamente nuevos productos</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dionisio-footer">
        <p className="footer-brand">Dionisio Perfumería</p>
        <p className="footer-tagline">Buenos Aires, Argentina</p>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a href="https://wa.me/5491132393925?text=Hola!%20Me%20interesa%20consultar%20sobre%20sus%20perfumes." target="_blank" rel="noopener noreferrer" className="wa-float">
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* NAV TOGGLE SCRIPT */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('navToggle')?.addEventListener('click', function() {
              document.getElementById('mainNav')?.classList.toggle('open');
            });
          `
        }}
      />
    </>
  );
}
