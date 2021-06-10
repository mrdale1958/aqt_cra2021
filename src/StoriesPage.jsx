import React from 'react';
//import StoriesBox from './StoriesBox.js';
import MovieView from './MovieView.js';
import TOCBox from './TOCBox.js';
import ThreadsBox from './ThreadsBox.js';

const tours = {type: 'tours',
				tours: [
				{url: "https://player.vimeo.com/external/218227290.hd.mp4?s=f0fe76780198b13a8dbb80ec8d36c7462ded6aa5&profile_id=119",
					title: "THE ORIGINS OF THE QUILT AND ITS GROWTH OVER TIME",
					thumbnail: "tourbuttons/Tour1.jpg"},
				{url: "https://player.vimeo.com/external/217741918.hd.mp4?s=58d68560d5d9e159c35083102a6009348f56c514&profile_id=119",
					title: "CLARISSA CRABTREE - TENDING THE QUILT WITH PASSION",
					thumbnail: "tourbuttons/ClarissaCrabtree.jpg"},
				{url: "https://player.vimeo.com/external/217741791.hd.mp4?s=3fa578174599ea0bbb81292befa5d1b76d873e5b&profile_id=119",
					title: "SALLY HIPSCHER - FOSTERING A NEW GENERATION OF AIDS ACTIVISTS",
					thumbnail: "tourbuttons/SallyHipscher.jpg"}
				]
		};
const toursTitle = "Video stories from the past, present and future of The Quilt";
const toursSubtitle = "";

const threads = { type: 'threads',
	threads: [ {
			titleText: "Aids &amp; Activism",
			slides: [ 
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/workroom_bak.jpg",
					titleText: "Aids &amp; Activism"},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/workroom_bak_dark.jpg",
					textBlock: [
					"The history of the AIDS Quilt is deeply intertwined with  AIDS activism. The " +
					"Quilt has always served both as a space of memorialization and as a tool to pressure" +
					"government and pharma to create just policies.",
					"When displayed in the Washington Mall, the Quilt literally laid down a body count at the feet of politicians, urging them to address a global crisis affecting all."
					]
				},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
					textBlock: [
					"People deeply engaged in the early fight for HIV/AIDS rights are commemorated in the Quilt. Learn about their stories by following this thread."
					]
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Roger Gail Lyon",
					audioFile: "assets/threads/aids-activism/audio/Roger.mp3",
					quotes: [
								{
									quoteText: ["Roger Gail Lyon should be remembered as an AIDS activist.  He was one of the first in San Francisco to die of AIDS.  While others were hiding in the shadows, Roger stood forth and told the world that he had AIDS.  His courage convinced others to do the same…He was featured on the cover of Physicians Magazine at a time when others would only do so with their identities concealed.  Roger was dying but even then, he continued to open his life to the world in the hopes of a cure someday for others.  His panel and other belongings are now at the Smithsonian so the world will know what this man did in the fight to end AIDS."],
								quoteByline: "Gert McMullin",
							}
							],
					image: "assets/threads/aids-activism/images/1_roger_gail_lyon.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Iris De La Cruz",
					audioFile: "assets/threads/aids-activism/audio/Iris.mp3",
					quotes: [
								{
					quoteText: [ "My daughter, Iris De La Cruz was one of the first female activists in the world of AIDS.  There was no place for women to go with their illnesses.  She was told that nothing she had was AIDS related.  She went all over America to fight for women.  She started a support group for women with AIDS.  She ran heterosexual dances so that people with AIDS could touch and hug each other. She spoke at conferences to people in DC, begging for women’s issues to be recognized.",
					 "After she died in 1991, I continued her fight and finally opened the first center for women with AIDS in NY.  It is called the IRIS HOUSE in my daughters honor.  It is located on Adam Clayton Powell Blvd in NYC."
					 ],
							}
							],
					image: "assets/threads/aids-activism/images/2_iris_de_la_cruz.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Charles Robert Pitre",
					audioFile: "assets/threads/aids-activism/audio/Charles.mp3",
					quotes: [
								{
					quoteText: ["My name is Charles Pitre.  I&rsquo;m a house painter from Aquebogue.  I&rsquo;m not a public speaker, but I&rsquo;m a person living with AIDS, and I want to talk to you today about it.",
					"But he was a public speaker, with a totally honest lack of pretense that immediately captured his audience and endeared him with so many groups from elementary school children to prisoners in the jail.  Charlie wanted to save one person from AIDS.  At the AIDS Collective, Charlie would always bring us back to earth with the question, &lsquo;How will this help save lives?&rsquo; "],
							}
							],
					image: "assets/threads/aids-activism/images/3_charles_robert_pitre.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Jose Alvarez",
					audioFile: "assets/threads/aids-activism/audio/Jose.mp3",
					quotes: [
								{
					quoteText: ["Jose is praised for bringing AIDS programs to Philadelphia’s Latino community and he was so committed that often he literally gave the shirt off his back to those in need… He was very laid-back and shy, but he was passionate and single-minded in his commitment to doing whatever he could to help people with AIDS.", "He was very proud of being Puerto Rican and he wanted to portray a positive role image with his appearance but charity limited his wardrobe.  He only owned one pair of shoes.  When he bought one pair, he would give the other away."],
					quoteByline: "Andy Wallace, Philadelphia Inquirer",
							}
							],
					image: "assets/threads/aids-activism/images/4_jose_a_alvarez.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Stuart Colby Freedman",
					audioFile: "assets/threads/aids-activism/audio/Stuart.mp3",
					quotes: [
								{
					quoteText: ["Stuart was my friend.  He was my husband&rsquo;s brother and my children&rsquo;s uncle. He went around the world many times but never found himself.  He never said &lsquo;Good Night&rsquo; to someone he loved.  He never heard &lsquo;Good Morning&rsquo; from someone who loved him.",
					"Stuart traveled alone, teaching.  Preaching to his Fire Island Congregation, reading, guiding people around New York and around the work, helping them to see the beauty he saw.",
					"My brother-in-law tried very hard to do the right thing and I liked this quality most of all.  I loved this man very much.  I&rsquo;m happy for the time I had with him and I&rsquo;m glad he was part of my life and my family."],
							}
							],
					image: "assets/threads/aids-activism/images/5_stuart_colby_freedman_corrected.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
			  		headingText: "Rich Cahalane",
					audioFile: "assets/threads/aids-activism/audio/Rich.mp3",
					quotes: [
						{quoteText: ["My name is Ben Lieberson.  I&rsquo;m six years old.  My Dad&rsquo;s real name was Rich Cahalane but I used to call him Iggy.  He died when I was 3 years old.  I made this panel for The AIDS Quilt because my Dad died of AIDS."],
						 quoteByline: "Ben Lieberson, Jan. 18, 1995"},
						 {quoteText: ["Rich Cahalane was an extraordinary man.  He was a social activist, a loving father, my best friend and husband.",
						 "Rich turned his rage at social and political injustice into powerful creative energy.  Rich's gentle spirit lives on&mdash;in those who loved him and the many people whose lives he touched who never knew him."],
						 quoteByline: "Debbie Lieberson  (Ben's Mom)"}
						 ],
					image: "assets/threads/aids-activism/images/6_rich_cahalane.jpg"
				},
			]
		},
		{
			titleText: "Children &amp; AIDS",
			slides: [ 
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_light.jpg",
					titleText: "Children &amp; AIDS",
					subtitleText: "This thread tells stories of collateral infections. Many children were born to HIV positive mothers who didn’t know they had the virus."},
			  	{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "For All the Babies",
					quotes: [
								{
								quoteText: ["I am a biochemist involved in AIDS-related viral research, as well as a mother.  I have dedicated my Quilt squares to all the AIDS babies.  I made this panel from diapers and receiving blankets that were my own infant son&rsquo;s.  He is completely healthy – for which I am both thankful and slightly guilt-ridden.  So many babies are not.  Science moves slowly.  Patience is a necessity.  But please, know that we are doing the best that we can."],
								quoteByline: "Lisa M. Smith"
								}
							],
							image: "assets/threads/aids-children/images/1_1626.jpg"
				},
			  	
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Benjamin Thomas West-Campbell",
					quotes: [
						{
							quoteText: ["This Quilt began with Benjamin&rsquo;s Great Grandmother who died in 1985 at the age of 92, Aimetta Waters.  It took for generation completing this quilt, which included Benjamin&rsquo;s mother, his brother, both maternal grandparents, a dear friend of Benjamin&rsquo;s mother.  Every stitch is hand stitched with love for Benjamin that surpasses all worldly love."],
							quoteByline: "Panelmaker",
						 }
					],
					image: "assets/threads/aids-children/images/2_3154.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Candace Rose Simon",
					quotes: [
						{
							quoteText: [ "Our little Candace was so brave.  Candace knew she was nearing the end.  She was becoming more comfortable knowing soon there would be no more pain…One day before Candace died, we celebrated her 6th birthday in the hospital inviting hospital staff, family and friends.. Candace always loved her birthdays and this one was going to be special, because it was going to be the last we would celebrate together.",
							 "Candace died very peacefully the next night in her mother&rsquo;s arms, her last words she muttered was &lsquo;Mommy&rsquo;."
							 ],
						}
					],
					image: "assets/threads/aids-children/images/3_3292.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "LaVonne Lacey, Tavoris Lacey",
					quotes: [
						{
							quoteText: ["LaVonne was abandoned by her family and Annie Collins, her nurse, Godmother and friend, took care of her, loving her and carrying her church.  Annie stood by her to the bitter end.  Tavoris was a beautiful two year-old that loved to go to church and is best remembered clapping his little hands and singing ‘Halle’lujah.’  He was a healthy happy little boy who got sick and died so quickly.  Once he was gone, his mother was ready to join him."],
							quoteByline: "Alice Macomber",
						}
					],
					image: "assets/threads/aids-children/images/4_5312.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Jeremy Augustin",
					quotes: [
						{
							quoteText: ["Jeremy Augustin was dearly loved by all of us at Connor&rsquo;s Nursery, a residential home for infants and children with AIDS.  Jeremy spent all four years of his entire life with us. Though he could not walk or talk, he could communicate very well with hand motions and he had a very special talent for making each of us feel as if we were his favorite.  Jeremy had the most beautiful eyes and sweet smile ever given to a child."],
						}
					],
					image: "assets/threads/aids-children/images/5_4649.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Kara Claypool",
					quotes: [
						{
							quoteText: ["On behalf of the students and staff at Willard Elementary School in Spokane, Washington, I would like to present this Willard quilt square in fondest memory of Kara Claypool.  Kara enjoyed two years of school with us before her death in August of 1995 and we certainly enjoyed Kara.  She appreciated every day, and helped us to focus on what is actually important in life.  After taking her medication in the office at lunch, she always stopped to chat with me and collect a surprise.  She thought it was her reward; sharing time with her was mine."],
							quoteByline: "Gene Wooley, Principal, Willard Elementary School",
						}
					],
					image: "assets/threads/aids-children/images/6_4148.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Beatrice and Freddy Herrera",
					quotes: [
						{
							quoteText: ["Beatriz got pregnant and contracted HIV/AIDS at the same time. I met her right after she was diagnosed and helped her to die with dignity and love. Her baby (1 1/2 years old) was diagnosed with AIDS right before she died, and she was very worried about his future. His aunt and my family took little Freddy into our hearts and lives, and he became a wonderful part of our family. With love and good food and care, he has lived for 17 years, defying the doctors&rsquo; prediction that he would be dead in 6 months. Beatriz must be smiling down from Heaven right now to know her little son has done so well.","Blessings to all of you who dedicate your lives to keep the stories alive."],
						 
						}
					],
					image: "assets/threads/aids-children/images/7_5671.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Tamika",
					quotes: [
						{
							quoteText: ["Six years is not very long, but six years is all it took for her to belong.  To fill many hearts, to catch everyone&rsquo;s eye, my Precious Angel never left my side.  Let her be an example of those who don&rsquo;t know, people don&rsquo;t last, everyone goes…No more aches, pains, moans or groans.  Just her laughter remains in my mind.  The glow of her spirit that still remains in my heart."],
							quoteByline: "Iisha Stevens",
						}
					],
					image: "assets/threads/aids-children/images/8_4890.jpg"
				}
			]
		},
		 {
			titleText: "AIDS &amp; Community",
			slides: [ 
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_bright.jpg",
					titleText: "AIDS &amp; Community",
					subtitleText: "A vital sense of community brings people together to create a panel for a loved one. This thread presents panels made by groups to remember a member (or members) that passed away of HIV/AIDS."},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Camp Barney Medintz",
					quotes: [
								{
								quoteText: ["In the summer of 1994, the Jewish community in Atlanta realized that AIDS does affect them too and they initiated a program, ‘Awakening the Jewish Heart to AIDS.’ Since I had created a panel, I was asked to give a talk to the two summer youth camps about AIDS and the Quilt. Sadly at their young ages (13-18) they already knew seven friends or relatives who had died. I asked them if they wanted to create a panel to the memory of those they had lost. I broke them into small groups and each group came up with a pencil sketch of a one square foot panel. I took the sketches back to Atlanta and spent the next 36 hours at the sewing machine turning their sketches into a colorful and appropriate memorial.",
	                  "I think the young people who made these panels were profoundly affected.  One young man, who on the first visit was haughty, aloof, and put out by the discussion, approached me after the presentation of the completed panel with tears in his eyes and said, &lsquo;I understand now. Thank you for changing my life!&rsquo;"],
								quoteByline: "Rick Namors"
								}
							],
							image: "assets/threads/aids-community/images/1_4484.jpg"
				},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Kara Claypool",
					quotes: [
						{
							quoteText: ["On behalf of the students and staff at Willard Elementary School in Spokane, Washington, I would like to present this Willard quilt square in fondest memory of Kara Claypool.  Kara enjoyed two years of school with us before her death in August of 1995 and we certainly enjoyed Kara.  She appreciated every day, and helped us to focus on what is actually important in life.  After taking her medication in the office at lunch, she always stopped to chat with me and collect a surprise.  She thought it was her reward; sharing time with her was mine."],
							quoteByline: "Gene Wooley, Principal, Willard Elementary School",
						}
					],
					image: "assets/threads/aids-children/images/6_4148.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Washo Medicine Wheel",
					quotes: [
						{
							quoteText: ["I have been working with Native-American students in our area. Each student made a square representing themselves as individuals who speak with one voice in the statement, &lsquo;Help Protect the Balance&mdash;Learn About AIDS.&rsquo; The Washo Medicine Wheel is displayed on The Quilt, which represents the physical, emotional, spiritual and mental aspects of a person in balance. We would be very honored if our work could join the NAMES Project and speak to all those who experience the healing power of the quilts."],
						 }
					],
					image: "assets/threads/aids-community/images/3_5426.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Tom, Teresa, Joseph, Richard",
					quotes: [
						{
							quoteText: [ "Tom and Teresa were husband and wife. Rick and Joe were neighbors from childhood.  The four lived less than 20 miles apart, yet didn’t know each other. Each of their mothers has met and we&rsquo;ve formed friendships. We&rsquo;ve met at Rich&rsquo;s Mom&rsquo;s house to create and do our quilts with much love and support.  Through our grief and losses we&rsquo;ve formed friendships and found much comfort from each other."
							 ],
							quoteByline: "The mothers of Tom Celarek, Teresa Celarek, Joseph Dash and Richard Hestand",
						}
					],
					image: "assets/threads/aids-community/images/4_4631.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Mr. Gray",
					quotes: [
						{
							quoteText: ["Mr. Gray was my high school drama teacher.  During my Senior Year (1990), we staged &lsquo;A Midsummer Night's Dream&rsquo; and Mr. Gray cast me as Oberon.  Please read aloud Oberon's speech, V:1, lines 417-424 and think of Mr. Gray."],
							quoteByline: "David Sinolan",
						},
						{
							quoteText: ["<i>With this field-dew consecrate,<br />",
	                  "Every fairy take his gait,<br />",
	                  "And each several chamber bless,<br />",
	                  "Through this palace, with sweet peace, <br />",
	                  "And the owner of it blest<br />",
	                  "Ever shall in safety rest.<br />",
	                  "Trip away; make no stay;<br />",
	                  "Meet me all by break of day.&rdquo;<br /></i>"
	                  ],
							quoteByline: "A Midsummer Night&rsquo;s Dream",
						}
					],
					image: "assets/threads/aids-community/images/5_4048.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Harvo Aoki",
					quotes: [
						{
							quoteText: ["My friendship with Mr. Aoki didn&rsquo;t start off that great.  In a way he seemed like a total nerd.  I was a 14 year-old freshman with a very bad attitude.  The days passed and I began to see him not only as a teacher, but in a way he was like a role model.  No, he was more than that.  In my eyes he became almost something holy.  I learned so much about life and how to save the important and special things I like such as a sunset or a flower in bloom.",
	              "I want him to be remembered as an outstanding teacher, an artist and as a beautiful friend.  To Mr. Aoki wherever you are:  We love you.  I&rsquo;ll miss you more than anyone."],
							quoteByline: "Jose Perez, Project 10",
						}
					],
					image: "assets/threads/aids-community/images/6_3087.jpg"
				},
				
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/disco_ball_back_dark.jpg",
			  		headingText: "Ronnie Foster",
					quotes: [
						{
							quoteText: ["By the time we completed the project&mdash;2 a.m. on the day the Quilt exhibit opened&mdash;it was obvious that this quilt panel had deeply touched all those who worked on it.  We came to the sobering realization that we’re not invincible&mdash;we&rsquo;re all cut from the same fabric and we&rsquo;re all vulnerable to this disease.", 
	        "The creation of this panel was a community project. It was conceived by the Mono County AIDS Coordinator, designed and painted by Mammoth High School art students and assembled by a member of the Mammoth Hospital Board."],
							quoteByline: "Betsy Mellinger, Mammoth Hospital",
						 
						}
					],
					image: "assets/threads/aids-community/images/7_5097.jpg"
				},
				
			]
		},
		{
			titleText: "Women &amp; AIDS",
			slides: [ 
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/quilt_bak_light.jpg",
					titleText: "Women &amp; AIDS",
				},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/quilt_bak_dark.jpg",
					textBlock: [
								"Women were always at risk of getting HIV, but they were not considered part of “risk groups”&mdash;especially in the beginning of the crisis. At the time, the medical and scientific community had incorrect ideas about women’s health and women’s bodies&mdash;and on how the virus was transmitted, resulting in the idea that women could not be affected by HIV."
							],
				},
			  	
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Iris De La Cruz",
			  		quotes: [
								{
					quoteText: [ "My daughter, Iris De La Cruz was one of the first female activists in the world of AIDS.  There was no place for women to go with their illnesses.  She was told that nothing she had was AIDS related.  She went all over America to fight for women.  She started a support group for women with AIDS.  She ran heterosexual dances so that people with AIDS could touch and hug each other. She spoke at conferences to people in DC, begging for women’s issues to be recognized.",
					 "After she died in 1991, I continued her fight and finally opened the first center for women with AIDS in NY.  It is called the IRIS HOUSE in my daughters honor.  It is located on Adam Clayton Powell Blvd in NYC."
					 ],
							}
							],
					image: "assets/threads/aids-activism/images/2_iris_de_la_cruz.jpg"
				},
				/*{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "Iris De La Cruz",
					videoFile: "https://player.vimeo.com/video/218487366",
					textBlock: [ "Sally Hipscher on Iris De La Cruz"
					],
				},*/
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "SHIRLEY ANN GAULZETTI",
					quotes: [
						{
							quoteText: ["It is our family&rsquo;s hope that people may stop to wonder how a 64 year old woman died of AIDS.  The answer is:  with dignity, grace and love…just like she lived her life.  I never thought I’d see my mom on television, talking about condoms.  I’m sure she never expected to either.  A local TV station had asked to interview her about the rising incidence of the virus among heterosexual women.  She called me to ask if I was ready for her to talk about AIDS so publicly.  Was I ready?  She was ready.  That&rsquo;s all I needed to know."],
							quoteByline: "Janita Gaulzetti",
						}
					],
					image: "assets/threads/aids-women/images/2_4737.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "KRISTA BLAKE",
					quotes: [
						{
							quoteText: ["One of the most heart-wrenching experiences a grandfather must endure is the death of a beautiful, intelligent 22 year-old granddaughter that he deeply loves.  It&rsquo;s been said that grown men don&rsquo;t cry, but you can believe me when I say that I cried and I still cry inside when I think about what has been lost.  My granddaughter and I had a marvelous relationship.  The love that engendered that relationship still endures and the dignity and strength with which she bore her affliction inspires and sustains me as I approach the winter of my life."],
							quoteByline: "Krista&rsquo;s Opa (Grandfather)",
						}
					],
					image: "assets/threads/aids-women/images/3_4569.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "CLAUDIA WASHINGTON",
					quotes: [
						{
							quoteText: ["This is my memorial quilt panel for my friend and soul sister, Claudia Sharon Washington.  The process of constructing this panel has taken one month from start to finish but it has taken half of my lifetime to build."],
							quoteByline: "Phil Jones",
						},
						{
							quoteText: ["Someone once said that some people come into our lives, leave footprints on our hearts and we are never, ever the same.  My heart is full of Claudia&rsquo;s footprints and I feel her presence often."],
							quoteByline: "Karen",
						}
					],
					image: "assets/threads/aids-women/images/4_2957.png"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "DEBORAH LYNN HUELLE BIANCHI",
					quotes: [
						{
							quoteText: ["Debbie Bianchi was blonde and beautiful.  She was married to a young attorney on the rise and had a flourishing career of her own.  In 1987 when Debbie was diagnosed with HIV, she wasn’t the typical face of AIDS. This was a time in our country when the media was spewing out HIV and AIDS were a gay man&rsquo;s disease, people were losing jobs, being thrown out of apartments and even being firebombed.  The panic gripping country made our family as frightened of the world as well as the dread of this horrid disease."],
							quoteByline: "Lil Huelle, mother",
						}
					],
					image: "assets/threads/aids-women/images/5_3109.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "DEBORAH HAYNES",
					quotes: [
						{
							quoteText: ["Rosa Parks had made panels for her friends in her neighborhood.  Still a working pioneer, she was deeply concerned about the increasingly devastating impact of AIDS on young African-Americans at a time when others were afraid to speak openly."],
						}
					],
					image: "assets/threads/aids-women/images/6_1321.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "ERIN GOLDSTONE",
					quotes: [
						{
							quoteText: ["Today, May 31, 1996, my granddaughter, Nicole, graduated from the eighth grade.  It was a wonderful and very important event in her life.    Three years ago she graduated from the fifth grade and the most significant difference between then and now is that in 1993, her mother Erin Goldstone, was in the audience to watch.  I know that Erin was here today, too and that she will be at all the other important happenings of her daughter&rsquo;s life.  She will be with us in our hearts and in spirit… We will remember her and love her always."],
							quoteByline: "Dorothy Goldstone, mother",
						}
					],
					image: "assets/threads/aids-women/images/7_4534.png"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "NIKKI CORTEZ",
					quotes: [
						{
							quoteText: ["Roman Cortez had the help of his 5th grade class in creating a panel for his mother, Nikki who died from AIDS in September 1998.  Together they created a panel that included Nikki&rsquo;s favorite things including her love of music, picnics in the mountains and of course, shooting hoops with Roman.  The students also planned carefully to include a shade of Nikki&rsquo;s favorite color purple in every section of the panel."],
						}
					],
					image: "assets/threads/aids-women/images/8_5586.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "ALISON L. MCAULIFFE",
					quotes: [
						{
							quoteText: ["It was a beautiful, warm day in June 1989, when I got the call.  My daughter Alison told me she had some bad news – after trying to donate blood in the local blood drive, a community heath nurse had just told Alison that she was HIV positive. Alison made me promise that day that I would not tell anyone.  Two years later, Alison came down with PCP –the pneumonia associated with AIDS –and had to be hospitalized.  Alison and Greg then made a critical decision:  They went public.  And I mean public",
							"How did Alamosa react?  Not a single medical person refused to treat Alison.  Not a single parent took their child of out of the school where Alison&rsquo;s children attended.  Not a single patient left Greg&rsquo;s then thriving medical practice.  Even when Alison recovered from the pneumonia, she continued to work for hospice, and none of her patients refused to let her continue to treat them.  The whole town rallied around the McAuliffe family.",
							"Thank you for allowing me to share my sister’s memory with you."],
							quoteByline: "Carlin Knight",
						}
					],
					image: "assets/threads/aids-women/images/9_4403.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/aqt_stacks_bak_dark.jpg",
			  		headingText: "PEGGY BUCKLIN",
					quotes: [
						{
							quoteText: ["My best friend, Nicole, and I met Peggy Bucklin in 1987.  She was the leader of our Presbyterian Youth Group.  Every life that Peggy touched was changed in some way.  She taught us all what it meant to be strong and to believe in ourselves.  She was bright and beautiful and we miss her every day.  Peggy would want us to go on and not to cry but with this Quilt piece we offer our tears and our joy and our friend&rsquo;s cherished memory for everyone to see and share with us.  We love you, Peggy."],
							quoteByline: "Pagan Morris & Nicole Evans-Blanck",
						}
					],
					image: "assets/threads/aids-women/images/10_4587.jpg"
				}
			]
		},
		 {
			titleText: "The Quilt &amp; Healing",
			slides: [ 
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_bright.jpg",
					titleText: "The Quilt &amp; Healing",
				},
			  	{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
					textBlock: [
								"This thread gathers stories about the therapeutic role of the AIDS Quilt. For many panelmakers the experience of creating a panel was cathartic, working as a healing mourning process, which helped them deal with the loss of a loved one.",
								"Some of the memorialized individuals participated in the process of creating their own panels, which have helped them in the final stages of the disease."
							],
				},
			  	
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Carlos Charles Karloz Morales",
					quotes: [
						{
							quoteText: ["When my 14 year-old daughter and I showed up at Santa Sophia…ready to start our AIDS Quilt for my friend Carlos…we were greeted by Sister Margaret and the most wonderful group of women.  From that first day we bonded and developed a friendship that has continued to today.",
							"As we put our quilts together…Some of us ironed, glued, cut, sewed, gave advice and free hugs.  In our little world, we released the shame and pain we had been carrying around for sometimes."],
							quoteByline: "Sara A. Souffrain",
						 }
					],
					image: "assets/threads/healing/images/1_5018.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Robert Giudici",
					quotes: [
						{
							quoteText: [ "What can I say about my son?  How can I truly convey who my son was?  He was my only son.  He was the little boy who helped me make cookies, the child who loved to dance, fish and play with our dog.  He was the child who would say how important families were; to keep those ties bound.",
							 "The process of completing the panel has been a healer for me.  I made the family square first.  This contains a necktie he wore often to work, his favorite shirt, a pillowcase from his bed, a handprint he made in kindergarten, and a picture he drew of himself and his sister.  After completing this panel, I still felt incomplete.  After some thought, I made the black and white square as a personal message, tribute, but not good-bye, just till we meet again."
							 ],
							quoteByline: "Carol Garvey",
						}
					],
					image: "assets/threads/healing/images/2_5424.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Jeff Roberg",
					quotes: [
						{
							quoteText: ["Draping my casket is a quilt made by some very special people.  Seeing it and touching it has been even more wonderful and peaceful that I could have ever imagined.  It has in many ways helped me to complete my life here on earth."],
							quoteByline: "Remarks prepared by Jeff Roberg, Panel Maker to be read at his funeral",
						},
						{
							quoteText: ["Jeffrey worked with three women in the hospital where he volunteered to design his piece of the Quilt.  They were able to present it to him about one month before he died.  It was clearly his most prized possession during these last weeks.  Since Jeff’s death, this Quilt piece has provided me and the members of my family much comfort as well."],
							quoteByline: "Adrian Roberg",
						}
					],
					image: "assets/threads/healing/images/3_2769.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Nicolas Corrado",
					quotes: [
						{
							quoteText: ["He was not the first friend of mine to die of AIDS but he was the closest to me and the first that I saw daily from diagnosis until his death.  His death changed me.  It was difficult for me to cry before he died, but after his death, the tears would not stop.",
							"His panel took me four years to start and four days to make.  The blanket on the panel was his.  During the last three months of his life I would visit him to cook, talk and later we would watch television wrapped up in this blanket.  It was not easy for me to give up his blanket, but after I started it felt good to give this tangible remembrance to the Quilt so that others could see it and maybe remember his name."],
							quoteByline: "Gregg Carron",
						}
					],
					image: "assets/threads/healing/images/4_1322.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "R. Gordon Simmons",
					quotes: [
						{
							quoteText: ["his panel has been prepared for our father, Richard Gordon Simmons. The NAMES Project has given us the chance to express feelings, emotions, and experiences, which most people do not have the opportunity to share with others, especially after a loved one has physically left us.  It offers a healing process no one can understand unless they too have been touched by its tragic cause and results.",
							"It has taken one and a half years to get up the guts and perseverance to finish this panel.  It’s been worth all of the gathering, costs, and time to release our love for all to share.  Please enjoy the bits and pieces of our father’s life contained within this panel.  It is only a tiny part of his existence, a glimpse and reflection of his life."],
							quoteByline: "Sharon J. Simmons and April J. Simmons",
						}
					],
					image: "assets/threads/healing/images/5_1706.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Ted Galeza",
					quotes: [
						{
							quoteText: ["I loved giving Ted funny, off-beat gifts and gave him his first Pig, which started a a collection of over 100 pigs many which accentuated his irreverent sense of humor…in his last house in San Francisco, he had an artist paint a wonderful mural on the ceiling of his living room, a la Sistine Chapel.  A sky of angels floated in a sea of clouds…one in the central mandala had a pig face!",
							"Shortly after he died, Ted came to me in a dream and gave me the first directions that began the design of the panel.  I merely &lsquo;followed orders&rsquo; as I created.  I tried to show Ted as he saw himself.  He was right there with me…laughing his hearty laugh and calling out his yeas and nays.  It was a deeply spiritual experience for me, filled with grief and completion…an intense labor of love that brought me exquisite joy."],
							quoteByline: "Judy Gerard",
	
						}
					],
					image: "assets/threads/healing/images/6_5070.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Keith Vandivort",
					quotes: [
						{
							quoteText: ["Eighteen women came to our dining-room table to quilt. I watched their hands, some deft and others clumsy, some smooth and others wrinkled, every one providing service, not one needing command. For the quilting women, who did not know my son, this quilt in his memorial became what they organized their days around. They gave to it and were given to by it and by each other.",
							"And they came to love each other and one felt that what made them able to love was the need the quilt had for their ministry.  It was at times as if the quilt were Keith himself, lying in their midst, a fallen man."],
							quoteByline: "Gary Scrimgeour, father",
						}
					],
					image: "assets/threads/healing/images/7_3671.jpg"
				},
				{ orientation: "vertical", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Bob Roe",
					quotes: [
						{
							quoteText: ["I created this panel in memory of Robert William Roe who died of AIDS in 2002.  Bob was my brother, my hero, and my best friend.  He designed the panel in the early 1990’s after he became ill.  It is a combination of two Matisse paintings depicting a central human figure reaching to the stars and surrounded by windows of color with the words &lsquo;Salvation Is Created&rsquo; embroidered at the bottom…",
							"After my brother Bob died, I had no idea how to proceed.  I bought a sewing machine, learned how to appliqué and embroider, and finally took a deep breath and started.  One of Bob’s gifts to me was to introduce me to a whole new world of quilting and friendship that helped to support me in my grief…It was my privilege to walk with Bob during the last months of his illness and to be with him when he died.  He faced his disease with courage, dignity and humor.  He will always be my hero and my inspiration.  May this Quilt panel serve to honor him and to keep him in our hearts forever."],
							quoteByline: "Diana Gaskell",
						}
					],
					image: "assets/threads/healing/images/8_5756.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "David Scott O’Brien",
					quotes: [
						{
							quoteText: ["This panel is for my bother and it has been a long time journeying to you.  Scott died of AIDS in March, 1994.  We&mdash;Scott’s family and friends&mdash;started his quilt panel in the spring of 1996, and we are submitting it to you in March 2009.  In the years in between, the panel has traveled around the United States and Canada as each person or family contributed to it.  Its creation has been a true international and cosmopolitan endeavor.  It has also been an endeavor of great procrastination at times.  In other words, it is a most fitting tribute to a much-loved, funny, and creative man who was blessed with devoted friends in diverse places and who was an accomplished procrastinator himself!",
							"…And so we join with all of the many, many quilt makers over the years who have honored the ones they love with pieces of their own hearts as we commit Scott’s panel into your tender care."],
							quoteByline: "Patricia O’Brien Moyle",
						}
					],
					image: "assets/threads/healing/images/9_5810.jpg"
				},
				{ orientation: "horizontal", backgroundImage: "assets/images/backgrounds/healing_bak_dark.jpg",
			  		headingText: "Michael Caves",
					quotes: [
						{
							quoteText: ["How does a mother go about creating a memorial for her son by representing his life on a 3&rsquo; x 6&rsquo; piece of cloth?  As I began to design my son Mark&rsquo;s panel and lay out the pieces I felt as though it was the saddest and most beautiful experience of my life—somehow merging the pain of burying my son in October of 1986 with the joy of giving birth to him 37 years ago...All across America there are other mothers like me, as well as fathers, grandparents. Sisters, brothers, sons, daughters, nieces, nephews, lovers and friends who had found themselves &mdash; or soon will—drawn to The Quilt by the immense power of its hope and humanity.  I did it for two reasons – for Mike and for all the other who&rsquo;ve been lost to aids and for myself and all the others who&rsquo;ve lost them."],
							quoteByline: "Sue Caves",
						}
					],
					image: "assets/threads/healing/images/10_235.jpg"
				}
			]
		},]

						/* page template
					{ backgroundImage: "assets/images/backgrounds/sewing_machines_bak_dark.jpg",
						audioFile: "assets/threads/aids-activism/audio/.mp3",
						videoFile: "https://player.vimeo.com/video/"
						titleText: "",
						subtitleText: "",
						headingText: "",
						textBlock: [],
						quotes: [
							{
							quoteText: [""],
							quoteByline: ""
							}
						],
						image: "assets/threads/aids-/images/.jpg"
					},
					*/

};

const threadsTitle = "NARRATIVE THREADS";
const threadsSubtitle = "Stories told through the Quilt Panels";


export default class SearchResults extends React.Component {

	constructor(props) {
    	super(props);
  		this.handleClick = this.handleClick.bind(this);
  		this.state = { storytype: null, };

  	}
  	handleClick(clickedObjectType, data)
	{
		if (clickedObjectType==='menubutton') this.setState({storytype: data});
		else if (clickedObjectType==='PLAYVIDEO') {
			this.setState({storytype:clickedObjectType, url: data});
		}
		else if (clickedObjectType==='PLAYTHREAD') {
			this.setState({storytype:clickedObjectType, thread: data});
		}
		else debugger;
	}
	render() {
		var activeBox = <div></div>;
		var info, title, subtitle; //, video;
		if (this.state.storytype === 'TOURS')  {
			info=tours;
			title = toursTitle;
			subtitle = toursSubtitle;
		activeBox = <TOCBox info={info} title={title} subtitle={subtitle} storytype={this.state.storytype} clickHandler={this.handleClick}/>;
		}
		else if (this.state.storytype === 'THREADS')   {
			info=threads;
			title = threadsTitle;
			subtitle = threadsSubtitle;
		activeBox = <TOCBox info={info} title={title} subtitle={subtitle} storytype={this.state.storytype} clickHandler={this.handleClick}/>;
		}
		else if (this.state.storytype === 'PLAYVIDEO')   {
			activeBox = <MovieView url={this.state.url}></MovieView>
		}		
		else if (this.state.storytype === 'PLAYTHREAD')   {
			activeBox = <ThreadsBox thread={this.state.thread}></ThreadsBox>
		}		
		else {
			info=[{text: 'wtf'}];
			title = 'STORIES ABOUT AND THROUGH THE QUILT';
			subtitle = '';
		activeBox = <TOCBox info={info} title={title} subtitle={subtitle} storytype={this.state.storytype} clickHandler={this.handleClick}/>;
		}

	  return (
	  	<div id="stories">
	  		{activeBox}
			<div id="infobuttons">
				<button className="innerNaviBtn historyinner" onClick={() => this.handleClick('menubutton','THREADS')}>THREADS</button>
				<button className="innerNaviBtn creditsinner" onClick={() => this.handleClick('menubutton','TOURS')}>TOURS</button>
				
        	</div>
		</div>
	  	);
	}
				//<button className="innerNaviBtn creditsinner" onClick={() => this.handleClick('menubutton','TOURS')}>TOURS</button>
		//var indexview = null;

		//var movieview = null;


		//var selectedName = this.state ? this.state.selectedName : null;

		//var searchingP = this.state ? this.state.searching : false;
		
	  
	//}
}
