import "./style.css";
import "../navbar/style.css";
import "../SearchBar/style.css";
import React from "react";
import Navwiki from "./navwiki";
import { Hellovietnam } from ".";
const index = () => {
  return (
    <div className="container">
      <Navwiki />
      <Hellovietnam
        title={"Hello Vietnam"}
        content={
          '"Hello Vietnam" is the title of a song written by Tom T. Hall and recorded by American country music singer Johnnie Wright, written with lyrics in support'
        }
        seen={"2 KB (109 words) - 12:32, 23 Jun 2021"}
      />
      <Hellovietnam
        title={"Bonjour Vietnam"}
        content={
          '"Hello Vietnam" in Thúy Nga\'s Paris By Night 92 show. Later, Quynh Anh released the single "Hello Vietnam". Bach Lien, Thanh Liem. Bonjour Vietnam'
        }
        seen={"3 KB (217 words) - 21:22, 8 Oct 2021"}
      />
      <Hellovietnam
        title={"Hello Muddah, Hello Fadduh (A Letter from Camp)"}
        content={
          '"Hello Muddah, Hello Fadduh (A Letter from Camp)" is a novelty song recorded by Allan Sherman. The melody is taken from the ballet Dance of the Hours'
        }
        seen={"11 KB (1,305 words) - 21:08, 10 Dec 2021"}
      />
      <Hellovietnam
        title={"Hello, Dolly! (musical)"}
        content={
          "Hello, Dolly! is a 1964 musical with lyrics and music by Jerry Herman and a book by Michael Stewart, based on Thornton Wilder's 1938 farce The Merchant"
        }
        seen={"76 KB (6,895 words) - 01:33, 5 Dec 2021"}
      />
      <Hellovietnam
        title={"The Oh, Hello Show"}
        content={
          "The Oh, Hello Show is a comedy act created by Americans Nick Kroll and John Mulaney that was popularized on Comedy Central's Kroll Show. The show centers"
        }
        seen={"76 KB (6,895 words) - 01:33, 5 Dec 2021"}
      />
    </div>
  );
};

export default index;
