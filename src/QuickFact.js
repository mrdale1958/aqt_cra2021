import React from 'react';

const quickFacts=[
		 "Established: 1987",
		 "Number of visitors to The Quilt: over 20 million",
		 "Number of names on The Quilt: 100,000",
		 "Number of blocks of The Quilt: almost 6,000",
		 "Total Weight: 54.5 tons",
		 "Size (in square feet): 1,793,000", 
		 "Viewing Time: 34 days spending only one minute per panel",
		 "Number of people cured of AIDS: 0",
		 "Notable name on The Quilt: Peter Allen \u2014 entertainer",
		 "Arthur Ashe ","Material used in The Quilt:   tennis player",
		 "Notable name on The Quilt:   Michael Bennett \u2014 director/choreographer",
		 "Notable name on The Quilt:   Kimberly Bergalis \u2014 advocate for HIV testing of health care workers",
		 "Notable name on The Quilt:   Mel Boozer \u2014 black & gay rights activist",
		 "Notable name on The Quilt:   Arthur Bressan, Jr\u2014 filmmaker",
		 "Notable name on The Quilt:   Michael Callen \u2014 singer",
		 "Notable name on The Quilt:   Tina Chow \u2014 clothing designer",
		 "Notable name on The Quilt:   Roy Cohn \u2014 attorney",
		 "Notable name on The Quilt:   Brad Davis \u2014 actor",
		 "Notable name on The Quilt:   Eazy E \u2014 rap artist",
		 "Notable name on The Quilt:   Perry Ellis \u2014fashion designer",
		 "Notable name on The Quilt:   Wayland Flowers (Madame) \u2014 comedian",
		 "Notable name on The Quilt:   Michel Foucault \u2014 philosopher",
		 "Notable name on The Quilt:   Alison Gertz \u2014AIDS activist",
		 "Notable name on The Quilt:   Halston \u2014 fashion designer",
		 "Notable name on The Quilt:   Keith Haring \u2014 artist",
		 "Notable name on The Quilt:   Rock Hudson \u2014 actor",
		 "Notable name on The Quilt:   Richard Hunt \u2014 muppeteer",
		 "Notable name on The Quilt:   Liberace \u2014 performer",
		 "Notable name on The Quilt:   Robert Mapplethorpe \u2014photographer",
		 "Notable name on The Quilt:   Freddie Mercury \u2014 lead singer of Queen",
		 "Notable name on The Quilt:   Rudolf Nureyev \u2014 ballet dancer",
		 "Notable name on The Quilt:   Tim Richmond \u2014 NASCAR Winston Cup driver",
		 "Notable name on The Quilt:   Vito Russo \u2014 writer",
		 "Notable name on The Quilt:   Randy Shilts \u2014 author",
		 "Notable name on The Quilt:   Willi Smith \u2014 fashion designer",
		 "Notable name on The Quilt:   Sylvester \u2014 singer",
		 "Notable name on The Quilt:   Dr. Tom Waddell \u2014 Olympic athlete",
		 "Notable name on The Quilt:   Ryan White \u2014 AIDS Activist",
		 "Notable name on The Quilt:   Ricky Wilson \u2014 B-52's guitarist",
		 "Notable name on The Quilt:   Pedro Zamora \u2014 AIDS activist (MTV's Real World)",
		 "Material used in The Quilt:   Afghans",
		 "Material used in The Quilt:   Barbie dolls ",
		 "Material used in The Quilt:   buttons ",
		 "Material used in The Quilt:   car keys ",
		 "Material used in The Quilt:   condoms ",
		 "Material used in The Quilt:   corsets ",
		 "Material used in The Quilt:   ashes ",
		 "Material used in The Quilt:   credit cards ",
		 "Material used in The Quilt:   dresses ",
		 "Material used in The Quilt:   feather boas ",
		 "Material used in The Quilt:   ribbons ",
		 "Material used in The Quilt:   flags ",
		 "Material used in The Quilt:   gloves ",
		 "Material used in The Quilt:   hats ",
		 "Material used in The Quilt:   jeans ",
		 "Material used in The Quilt:   badges ",
		 "Material used in The Quilt:   uniforms ",
		 "Material used in The Quilt:   tennis shoes ",
		 "Material used in The Quilt:   vinyl ",
		 "Material used in The Quilt:   wedding rings ",
		 "Material used in The Quilt:   t-shirts",
		 "A panel is 3 ft by 6ft to represent the size of a human grave.",
		 "A block consists of 8 panels bundled together to form a 12 ft by 12 ft section",
		 "In addition to the panels, The Quilt Archives include nearly 500,000 objects that have been sent in with the panels." 
		 ];

		 class QuickFact extends  React.Component{


	 getRandomArbitrary(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
	 render() {
		 
		 var indexNo=this.getRandomArbitrary(0,quickFacts.length);
	 	return(
				<div id="quickfact" className="home">
				<span id="quickfact_label">QUICK FACT: </span>
				<span id="quickfact_text">{quickFacts[indexNo]}</span>
				</div>
			)
		}
}
export default QuickFact;