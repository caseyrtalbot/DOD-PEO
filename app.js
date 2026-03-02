// ============================================================
// DoD PEO Common Operating Picture — Application Logic
// Bloomberg Terminal Aesthetic
// All data embedded. No external API calls.
// ============================================================

(function () {
  "use strict";

  // ============================================================
  // DATA
  // ============================================================
  const DATA = {
    navy: [
      {
        id: "peo-iws",
        name: "PEO IWS",
        fullName: "Integrated Warfare Systems",
        parent: "NAVSEA",
        location: "Washington Navy Yard, D.C.",
        budget: "~$6.7B",
        budgetNote: "FY2025 DDG-51 total + SPY-6; FY2026 DDG(X) R&D $133.5M",
        categories: ["Combat systems","Radars (SPY-6)","Missiles","AEGIS","Directed energy","IAMD"],
        keyPrograms: [
          {name:"DDG-51 Flight III",status:"Production",budget:"~$5.0B (2 ships FY25)"},
          {name:"AN/SPY-6(V) Radar",status:"Production ramp",budget:"Funded across FYDP"},
          {name:"DDG(X) Next-Gen Destroyer",status:"Concept design",budget:"$133.5M R&D FY26"},
          {name:"CPS (Hypersonic)",status:"Integration on DDG-1000",budget:"Classified"},
          {name:"NIFC-CA",status:"Architecture",budget:"Included in IWS"},
          {name:"Aegis Ashore",status:"Operational (Romania/Poland)",budget:"Continued"}
        ],
        modernization: [
          "Aegis system upgrades to Baseline 9/10",
          "Flight III DDG-51 production ramp with SPY-6",
          "DDG(X) concept development",
          "CPS fielding on Zumwalt; future SSN integration",
          "Directed energy weapons under IWS 2.0",
          "NIFC-CA architecture modernization"
        ],
        subOffices: [
          {office:"IWS 1.0",name:"AEGIS Integrated Combat Systems",desc:"DDG-51/CG-47 combat system; SPY-1/SPY-6; Standard Missile integration"},
          {office:"IWS 1F",name:"Aegis Fleet Readiness",desc:"Fleet introduction and readiness for Aegis"},
          {office:"IWS 2.0",name:"Above Water Sensors & Lasers",desc:"AN/SPY-6 AMDR; lasers; EO/IR sensors"},
          {office:"IWS 3.0",name:"Surface Ship Weapons",desc:"MK 41 VLS; gun systems; SM-2/SM-3/SM-6; LRASM"},
          {office:"IWS 4.0",name:"International Programs & FMS",desc:"Aegis exports to Japan, Korea, Spain, Australia"},
          {office:"IWS 5.0",name:"Undersea Systems",desc:"Surface ship ASW systems; sonar; torpedoes"},
          {office:"IWS 6.0",name:"Command and Control",desc:"Ship combat management; C2 integration"},
          {office:"IWS 80",name:"Ship Self-Defense / LCS / Unmanned",desc:"SSDS; LCS combat management; unmanned integration"},
          {office:"IWS 9.0",name:"Zumwalt Combat System",desc:"DDG-1000 TSCE; CPS integration"},
          {office:"IWS 11.0",name:"Terminal Defense Systems",desc:"RAM; CIWS Phalanx; SeaRAM"},
          {office:"IWS 12.0",name:"NATO SEASPARROW",desc:"NSSMS surface missile system"},
          {office:"IWS X",name:"Next-Gen Integrated Combat Systems",desc:"Systems-of-Systems Engineering / Integrated Fire"}
        ],
        leadership: [
          {name:"RADM Thomas J. Dickinson",title:"PEO"},
          {name:"Ryan Moore",title:"Deputy PEO"},
          {name:"Van Hendrey",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"},
          {label:"DoD Budget Materials",url:"https://comptroller.defense.gov/Budget-Materials/"}
        ]
      },
      {
        id: "peo-usc",
        name: "PEO USC",
        fullName: "Unmanned & Small Combatants",
        parent: "NAVSEA",
        location: "Washington Navy Yard, D.C.",
        budget: "~$3B+",
        budgetNote: "FFG-62 ~$1.2B/ship; FY25 reconciliation adds $4.6B for UxV",
        categories: ["Frigates","Unmanned surface vessels","Mine warfare","Unmanned undersea","Expeditionary","Naval Special Warfare"],
        keyPrograms: [
          {name:"FFG-62 Constellation Frigate",status:"Production (delayed ~36 mo)",budget:"~$1.2B/ship"},
          {name:"LUSV",status:"R&D; transition to PEO RAS",budget:"$54M R&D FY25"},
          {name:"MUSV",status:"R&D",budget:"$1.8B reconciliation"},
          {name:"Orca XLUUV",status:"Test/Eval",budget:"$21M R&D + $1.3B reconciliation"},
          {name:"Medium Landing Ship (LSM)",status:"First ship funded",budget:"$268M FY25"},
          {name:"LCS Sustainment",status:"35 hulls; early retirements",budget:"Sustainment"}
        ],
        modernization: [
          "Frigate program schedule recovery (FFG-62)",
          "Unmanned vessel demonstration and PEO RAS transition",
          "XLUUV/Orca production decision",
          "LSM fleet build-up for Marine Corps EABO",
          "Mine warfare modernization",
          "NSW systems modernization"
        ],
        subOffices: [
          {office:"PMS 406",name:"Unmanned Maritime Systems",desc:"LUSV, MUSV, XLUUV/Orca"},
          {office:"PMS 408",name:"Expeditionary Missions",desc:"EPF, LSM, connectors"},
          {office:"PMS 420",name:"LCS Mission Modules",desc:"MCM, SUW, ASW packages"},
          {office:"PMS 495",name:"Mine Warfare Systems",desc:"Mine countermeasures and hunting"},
          {office:"PMS 501",name:"LCS Ships",desc:"Freedom and Independence-class sustainment"},
          {office:"PMS 515",name:"FFG-62 Constellation",desc:"Guided-missile frigate program"},
          {office:"PMS 340",name:"Naval Special Warfare",desc:"SEAL delivery; combat submersibles"},
          {office:"PMS 300",name:"Boats & Craft",desc:"Small boats, craft, FMS"},
          {office:"PMS 525",name:"International USC",desc:"FMS for USC programs"}
        ],
        leadership: [
          {name:"Melissa L. Kirkendall",title:"Acting PEO / Executive Director"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-ships",
        name: "PEO Ships",
        fullName: "Ships",
        parent: "NAVSEA",
        location: "Washington Navy Yard, D.C.",
        budget: "~$10B+ (SCN share)",
        budgetNote: "DDG-51 ~$6.7B total FY25; LPD ~$1.8B; DDG(X) $133.5M R&D FY26",
        categories: ["Surface combatants","Amphibious ships","Sealift","Destroyers","Polar cutter"],
        keyPrograms: [
          {name:"DDG-51 Arleigh Burke",status:"~94 ships; 2/yr production",budget:"~$6.7B FY25 total"},
          {name:"DDG(X) Next-Gen Destroyer",status:"Concept/design",budget:"$133.5M R&D FY26"},
          {name:"LPD-17 Flight II",status:"Production",budget:"~$1.8B/ship"},
          {name:"LHA America-class",status:"Production",budget:"$3.7B reconciliation"},
          {name:"DDG-1000 Zumwalt",status:"CPS integration",budget:"3 ships total"},
          {name:"Polar Security Cutter",status:"Under construction",budget:"Bollinger Shipyards"}
        ],
        modernization: [
          "DDG-51 Flight III production ramp with SPY-6",
          "DDG(X) concept design and requirements finalization",
          "Amphibious recapitalization (LPD Flight II, LHA-9)",
          "Polar Security Cutter delivery",
          "Surface combatant industrial base health",
          "T-AOL development"
        ],
        subOffices: [
          {office:"PMS 400D",name:"DDG-51 Arleigh Burke",desc:"Flight I/II/IIA/III build and sustainment"},
          {office:"PMS 460",name:"DDG(X)",desc:"Next-generation guided-missile destroyer"},
          {office:"PMS 500",name:"DDG-1000 Zumwalt",desc:"Three Zumwalt-class DDGs; CPS integration"},
          {office:"PMS 317",name:"Amphibious Assault / LPD-17",desc:"San Antonio-class amphibious ships"},
          {office:"PMS 377",name:"Amphibious Warfare (LHA)",desc:"America-class; LCAC; LCU; connectors"},
          {office:"PMS 373",name:"Polar Security Cutter",desc:"Heavy icebreaker program"},
          {office:"PMS 385",name:"Strategic & Theater Sealift",desc:"T-AKE, T-AOE, sealift vessels"},
          {office:"PMS 320",name:"Electric Ships Office",desc:"IPS development; DDG(X) power systems"},
          {office:"PMS 325",name:"Support Ships",desc:"Auxiliary and special mission ships"}
        ],
        leadership: [
          {name:"RADM Brian A. Metcalf",title:"PEO"},
          {name:"Jill J. Boward",title:"Executive Director, Combatants"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-ssn",
        name: "PEO SSN",
        fullName: "Attack Submarines",
        parent: "NAVSEA / Team Submarine",
        location: "Washington Navy Yard, D.C.",
        budget: "~$7.6B",
        budgetNote: "FY25 Virginia total (hull + SIB); SIB FYDP $11.1B",
        categories: ["Attack submarines","Weapons","Sensors","Submarine industrial base","AUKUS"],
        keyPrograms: [
          {name:"Virginia-class SSN",status:"Production (1 FY25, 2/yr FY26)",budget:"~$7.6B FY25 total"},
          {name:"SSN(X) Next-Gen Attack Sub",status:"Concept development",budget:"R&D re-phased"},
          {name:"AUKUS Optimal Pathway",status:"Active",budget:"SIB investment"},
          {name:"MK48 ADCAP Torpedo",status:"Continued production",budget:"PMS 404"},
          {name:"BYG-1 Weapons Control",status:"Block upgrades ongoing",budget:"PMS 425"},
          {name:"Submarine Industrial Base",status:"$11.1B FYDP investment",budget:"$3.9B FY25"}
        ],
        modernization: [
          "Virginia-class rate recovery to 2/year by FY2026",
          "AUKUS SSN Optimal Pathway execution",
          "SIB expansion (~25 outsource nodes)",
          "SSN(X) requirements development",
          "BYG-1 upgrades for Project Overmatch",
          "CPS undersea-launch integration (FY2028)"
        ],
        subOffices: [
          {office:"PMS 450",name:"Virginia Class",desc:"SSN-774 new construction; Block V/VI"},
          {office:"PMS 392",name:"In-Service Submarines",desc:"688/21/22/774 support"},
          {office:"PMS 401",name:"Submarine Acoustic Systems",desc:"Sonar systems and sensors"},
          {office:"PMS 404",name:"Undersea Weapons",desc:"MK48 ADCAP torpedoes"},
          {office:"PMS 425",name:"Submarine Combat & Weapons Control",desc:"AN/BYG-1; fire control"},
          {office:"PMS 435",name:"Submarine Electromagnetic Systems",desc:"EW; periscopes; photonics masts"},
          {office:"PMS 415",name:"Undersea Defensive Warfare",desc:"Countermeasures; decoys"},
          {office:"PMS 394",name:"Advanced Undersea Systems",desc:"R&D; prototypes"},
          {office:"PMS 485",name:"Maritime Surveillance Systems",desc:"Fixed/mobile ocean surveillance; SOSUS"}
        ],
        leadership: [
          {name:"RADM Jonathan E. Rucker",title:"PEO"},
          {name:"Lisa M. Radocha",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-ssbn",
        name: "PEO SSBN",
        fullName: "Strategic Submarines",
        parent: "NAVSEA / Team Submarine",
        location: "Washington Navy Yard, D.C.",
        budget: "~$9.9B",
        budgetNote: "SSBN 827 incremental; NSBDF $5.9B FY25",
        categories: ["Ballistic missile submarines","Nuclear deterrence","Columbia-class","Common Missile Compartment"],
        keyPrograms: [
          {name:"Columbia-class SSBN",status:"Construction (12 planned)",budget:"$9.9B FY25 (hull 2)"},
          {name:"Common Missile Compartment",status:"Joint w/ UK Dreadnought",budget:"Included"},
          {name:"Ohio-to-Columbia transition",status:"Active planning",budget:"NSBDF funded"}
        ],
        modernization: [
          "Columbia-class on-schedule production (first patrol FY2031)",
          "Ohio-class to Columbia transition",
          "CMC construction and installation",
          "D5LE re-hosting onto Columbia platforms",
          "Shore infrastructure at Kings Bay and Bangor"
        ],
        subOffices: [
          {office:"PMS 397",name:"Columbia-Class SSBN",desc:"Lead SSBN 826/827 and follow-on boats"}
        ],
        leadership: [
          {name:"RADM Todd S. Weeks",title:"PEO"},
          {name:"Matthew D. Sermon",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-uws",
        name: "PEO UWS",
        fullName: "Undersea Warfare Systems",
        parent: "NAVSEA / Team Submarine",
        location: "Washington Navy Yard, D.C.",
        budget: "Classified",
        budgetNote: "Submarine combat systems portfolio",
        categories: ["Submarine combat systems","Project Overmatch","Cybersecurity","SWFTS"],
        keyPrograms: [
          {name:"Project Overmatch",status:"Active development",budget:"Classified"},
          {name:"SWFTS Software",status:"Upgrades ongoing",budget:"Included"},
          {name:"Advanced Undersea Payloads",status:"Development",budget:"PMS 394"}
        ],
        modernization: [
          "Project Overmatch submarine combat system data fabric",
          "SWFTS software upgrades",
          "Advanced undersea payload development",
          "Cybersecurity hardening of submarine combat systems"
        ],
        subOffices: [
          {office:"PMS 394",name:"Advanced Undersea Systems",desc:"Prototype undersea vehicles and payloads"},
          {office:"SUB-SB",name:"SWFTS",desc:"Software-defined combat system integration"},
          {office:"UDPIO",name:"Undersea Domain Program Integration",desc:"Cross-PEO undersea integration"}
        ],
        leadership: [
          {name:"RADM Douglas J. Adams",title:"PEO"}
        ],
        budgetLinks: []
      },
      {
        id: "peo-cvn",
        name: "PEO CVN",
        fullName: "Aircraft Carriers",
        parent: "NAVSEA",
        location: "Washington Navy Yard, D.C.",
        budget: "~$12.7-13.3B per ship",
        budgetNote: "Ford-class total cost per ship; CVN-80/81 block buy savings ~$2.9B",
        categories: ["Carrier construction","Carrier sustainment","EMALS","AAG","Ford-class"],
        keyPrograms: [
          {name:"CVN-78 Gerald R. Ford",status:"Commissioned; IOC Dec 2021",budget:"~$13.3B total"},
          {name:"CVN-79 John F. Kennedy",status:"Delivery Jul 2025",budget:"~$12.7B"},
          {name:"CVN-80 Enterprise",status:"Under construction",budget:"~$12.8B"},
          {name:"CVN-81 Doris Miller",status:"Construction start 2026",budget:"~$12.9B"},
          {name:"CVN-75 Truman RCOH",status:"Funded FY2025",budget:"Included"}
        ],
        modernization: [
          "CVN-79 delivery and commissioning (FY2025)",
          "CVN-80 construction at Newport News",
          "Advanced planning for CVN-81 and CVN-82",
          "Ford-class EMALS/AAG reliability improvements",
          "Reducing CVN 50-year O&S costs (~$4B savings vs Nimitz)"
        ],
        subOffices: [
          {office:"PMS 378",name:"CVN New Construction",desc:"Ford-class construction"},
          {office:"PMS 379",name:"CVN-79/80/81",desc:"JFK, Enterprise, Doris Miller"},
          {office:"PMS 312",name:"In-Service Aircraft Carriers",desc:"RCOH; maintenance"},
          {office:"PMS 368",name:"Carrier Inactivation & Disposal",desc:"Decommissioning"},
          {office:"CPA",name:"Carrier Planning Activity",desc:"CVN-82 acquisition strategy"}
        ],
        leadership: [
          {name:"RADM Casey J. Moton",title:"PEO"},
          {name:"Justin T. Meyer",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-a",
        name: "PEO(A)",
        fullName: "ASW, Assault & Special Mission Programs",
        parent: "NAVAIR",
        location: "NAS Patuxent River, MD",
        budget: "~$3B+",
        budgetNote: "CH-53K ~$1.85B (19 ac FY25); P-8A sustainment",
        categories: ["Helicopters","Maritime patrol","Special mission","ASW aviation","Presidential helicopter"],
        keyPrograms: [
          {name:"CH-53K King Stallion",status:"Block buy production",budget:"~$1.85B (19 aircraft)"},
          {name:"P-8A Poseidon",status:"120+ aircraft; international",budget:"Sustainment/upgrades"},
          {name:"MQ-4C Triton",status:"Multi-INT delivered",budget:"Continued production"},
          {name:"MH-60R/S Seahawk",status:"Primary Navy helicopter",budget:"International sales"},
          {name:"VH-92A Presidential Helo",status:"In service",budget:"Completed"},
          {name:"E-6B / E-XX TACAMO",status:"E-XX in development",budget:"PMA-271"}
        ],
        modernization: [
          "CH-53K King Stallion block buy fielding",
          "P-8A international sustainment and upgrades",
          "MQ-4C Triton Multi-INT operational capability",
          "E-XX next-gen TACAMO development",
          "MH-60R/S international FMS expansion"
        ],
        subOffices: [
          {office:"PMA-261",name:"H-53 Heavy Lift",desc:"CH-53K King Stallion; CH-53E"},
          {office:"PMA-290",name:"Maritime Patrol & Reconnaissance",desc:"P-8A Poseidon; MQ-4C; P-3C"},
          {office:"PMA-299",name:"H-60 Multi-Mission Helicopter",desc:"MH-60R/S Seahawk"},
          {office:"PMA-274",name:"Presidential Helicopters",desc:"VH-92A Marine One"},
          {office:"PMA-275",name:"V-22 Joint Program",desc:"MV-22B; CV-22B; CMV-22B"},
          {office:"PMA-276",name:"H-1 Program",desc:"UH-1Y Venom; AH-1Z Viper"},
          {office:"PMA-271",name:"TACAMO (E-6B/E-XX)",desc:"Airborne strategic C2"},
          {office:"PMA-264",name:"Air ASW Systems",desc:"ASW sensors; sonobuoys"},
          {office:"PMA-207",name:"Tactical Airlift",desc:"CMV-22B; C-2A sustainment"}
        ],
        leadership: [
          {name:"BGen David C. Walsh, USMC",title:"PEO"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-t",
        name: "PEO(T)",
        fullName: "Tactical Aircraft Programs",
        parent: "NAVAIR",
        location: "NAS Patuxent River, MD",
        budget: "~$4B+",
        budgetNote: "F/A-18 sustainment; EA-18G/NGJ; F/A-XX $454M R&D FY25",
        categories: ["Fighters","Electronic attack","Airborne C2","Training aircraft","Air-to-air missiles","EMALS/AAG"],
        keyPrograms: [
          {name:"F/A-18E/F Super Hornet",status:"Block III upgrades",budget:"Production winding down"},
          {name:"EA-18G / NGJ",status:"NGJ Mid-Band production",budget:"NGJ Low-Band in dev"},
          {name:"E-2D Advanced Hawkeye",status:"In production",budget:"CEC equipped"},
          {name:"F/A-XX (6th Gen Fighter)",status:"Development",budget:"$454M R&D + $500M reconciliation"},
          {name:"AIM-120D / AIM-260 JATM",status:"Procurement/Development",budget:"PMA-259"},
          {name:"EMALS / AAG",status:"Ford-class installed",budget:"Reliability improvements"}
        ],
        modernization: [
          "F/A-XX 6th-gen fighter development",
          "NGJ Mid-Band production acceleration",
          "E-2D Advanced Hawkeye CEC integration",
          "AIM-260 JATM development",
          "EMALS/AAG reliability improvements on Ford-class"
        ],
        subOffices: [
          {office:"PMA-265",name:"F/A-18 and EA-18G",desc:"Super Hornet and Growler"},
          {office:"PMA-234",name:"Airborne Electronic Attack",desc:"EA-18G; NGJ pods"},
          {office:"PMA-231",name:"E-2/C-2 Hawkeye",desc:"E-2D Advanced Hawkeye"},
          {office:"PMA-259",name:"Air-to-Air Missiles",desc:"AMRAAM; AIM-9X; AIM-260"},
          {office:"PMA-251",name:"Aircraft Launch & Recovery",desc:"EMALS; AAG"},
          {office:"PMA-209",name:"Air Combat Electronics",desc:"Avionics; EW suites"},
          {office:"PMA-205",name:"Training Systems & Ranges",desc:"T-45C; T-6; simulators"},
          {office:"PMA-226",name:"Adversary Aircraft",desc:"F-5 adversary services"}
        ],
        leadership: [
          {name:"RADM John S. Lemmon",title:"PEO"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-uw",
        name: "PEO(U&W)",
        fullName: "Unmanned Aviation & Strike Weapons",
        parent: "NAVAIR",
        location: "NAS Patuxent River, MD",
        budget: "~$3B+",
        budgetNote: "MQ-25A + Tomahawk + LRASM + NSM procurement",
        categories: ["UAS","Precision strike","Carrier drone","Tomahawk","LRASM","Targets"],
        keyPrograms: [
          {name:"MQ-25A Stingray",status:"3 aircraft FY25",budget:"Carrier tanker drone"},
          {name:"Tomahawk Block V/Va",status:"MYP; anti-ship variant",budget:"22 TLAM FY25"},
          {name:"LRASM",status:"Production",budget:"30 LRASM + 60 LRASM-ER FY25"},
          {name:"Naval Strike Missile",status:"Procurement",budget:"102 NSMs FY25"},
          {name:"MQ-4C Triton",status:"Multi-INT IOC",budget:"Continued"},
          {name:"Carrier UCAV",status:"RFP issued",budget:"$500M reconciliation"}
        ],
        modernization: [
          "MQ-25A Stingray carrier integration",
          "Tomahawk Block Va anti-ship capability",
          "LRASM production surge",
          "Carrier-based UCAV development (loyal wingman)",
          "MQ-4C Triton operational expansion"
        ],
        subOffices: [
          {office:"PMA-268",name:"Unmanned Carrier Aviation",desc:"MQ-25A Stingray; future UCAV"},
          {office:"PMA-280",name:"Tomahawk Weapons System",desc:"Block IV/V/Va"},
          {office:"PMA-201",name:"Precision Strike Weapons",desc:"JASSM-ER; LRASM; NSM; Harpoon"},
          {office:"PMA-262",name:"Persistent Maritime UAS",desc:"MQ-4C Triton"},
          {office:"PMA-266",name:"Multi-Mission Tactical UAS",desc:"MQ-8C Fire Scout"},
          {office:"PMA-242",name:"Direct & Time-Sensitive Strike",desc:"SDB II / StormBreaker"},
          {office:"PMA-263",name:"Small Tactical UAS",desc:"RQ-21A Blackjack"},
          {office:"PMA-208",name:"Aerial Targets",desc:"BQM-177A; supersonic targets"},
          {office:"PMA-281",name:"Strike Planning & Execution",desc:"JMPS; digital targeting"}
        ],
        leadership: [
          {name:"RADM Stephen R. Tedford",title:"PEO"}
        ],
        budgetLinks: [
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-f35j",
        name: "PEO(F-35/J)",
        fullName: "Joint Strike Fighter",
        parent: "NAVAIR (Joint Program)",
        location: "Pentagon, Arlington, VA",
        budget: "~$3.4B (Navy/USMC share)",
        budgetNote: "26 F-35 total FY25 (13 F-35B + 9 F-35C + 4 F-35C USMC)",
        categories: ["5th-gen fighter","F-35B STOVL","F-35C carrier variant","Block 4 upgrades"],
        keyPrograms: [
          {name:"F-35B (USMC)",status:"Production; 13 FY25",budget:"STOVL variant"},
          {name:"F-35C (Navy/USMC)",status:"Production; 13 FY25",budget:"Carrier variant"},
          {name:"Block 4 / TR-3",status:"Upgrade development",budget:"Avionics refresh"},
          {name:"Total DON Buy",status:"340 F-35C + 420 F-35B",budget:"760 aircraft planned"}
        ],
        modernization: [
          "Block 4 capability upgrades",
          "Technology Refresh 3 (TR-3) avionics",
          "F-35C carrier integration expansion",
          "International partner coordination"
        ],
        subOffices: [],
        leadership: [
          {name:"Lt Gen Michael J. Schmidt, USAF",title:"PEO (Joint)"}
        ],
        budgetLinks: [
          {label:"F-35 Program Office",url:"https://www.f35.com"}
        ]
      },
      {
        id: "peo-c4i",
        name: "PEO C4I",
        fullName: "Command, Control, Communications, Computers & Intelligence",
        parent: "NAVWAR",
        location: "San Diego, CA",
        budget: ">$5B FYDP",
        budgetNote: "PMW/A 170 alone >$5B FYDP; IT total ~$6.1B unclassified",
        categories: ["Communications","Networks","Cyber","ISR","C2","SATCOM","Project Overmatch"],
        keyPrograms: [
          {name:"CANES",status:">110 ships",budget:"Primary ship network"},
          {name:"Navy Multiband Terminal (NMT)",status:"Production",budget:">$5B FYDP"},
          {name:"NTCDL",status:"MS-C Oct 2024",budget:"IOC 2025"},
          {name:"Project Overmatch",status:"Active development",budget:"Data fabric"},
          {name:"GCCS-M",status:"Operational",budget:"PMW 150"},
          {name:"Crypto Modernization",status:"Ongoing",budget:"$86M FY25"}
        ],
        modernization: [
          "CANES proliferation and upgrades",
          "SATCOM resiliency (STtNG NGSO/PLEO diversity)",
          "Crypto modernization (cease-key dates for legacy)",
          "NMT production and international fielding",
          "Project Overmatch data fabric",
          "Zero Trust Architecture implementation"
        ],
        subOffices: [
          {office:"PMW/A 170",name:"Communications & GPS Navigation",desc:"SATCOM; NMT; NTCDL; CBSP; DMR; GPNTS"},
          {office:"PMW 160",name:"Tactical Networks",desc:"CANES; ADNS; SubLAN; EPCA"},
          {office:"PMW 150",name:"Naval C2 Systems",desc:"GCCS-M; NATO NILE; NC3"},
          {office:"PMW 130",name:"Cybersecurity",desc:"SHARKCAGE; CND; crypto modernization"},
          {office:"PMW 120",name:"Battlespace Awareness & IO",desc:"ISR integration; SEWIP; DCGS-N"},
          {office:"PMA/PMW 101",name:"MIDS / Link 16",desc:"Tactical data links"},
          {office:"PMW 750",name:"Carrier Air Integration",desc:"CVN C4I; amphib C4I"},
          {office:"PMW 760",name:"Ship Integration",desc:"New construction C4I"},
          {office:"PMW 770",name:"Undersea Communications",desc:"Submarine C4I; NC3; VLF/ELF"},
          {office:"PMW 790",name:"Shore & Expeditionary",desc:"DJC2; MOC; Navy Expeditionary C4I"},
          {office:"PMW 740",name:"International C4I",desc:"FMS C4I; security cooperation"}
        ],
        leadership: [
          {name:"Bill Luebke, Ph.D.",title:"PEO"},
          {name:"Capt. Khary Hembree-Bey",title:"Deputy Military PEO"}
        ],
        budgetLinks: [
          {label:"PEO C4I",url:"https://www.peoc4i.navy.mil"},
          {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"}
        ]
      },
      {
        id: "peo-digital",
        name: "PEO Digital",
        fullName: "Digital and Enterprise Services",
        parent: "NAVWAR",
        location: "San Diego, CA",
        budget: "~$6.1B (DON IT share)",
        budgetNote: "Navy ERP $616M; NGEN $73M; total DON unclassified IT ~$6.1B",
        categories: ["Enterprise IT","Cloud","Microsoft 365","NMCI","Zero Trust","Navy ERP"],
        keyPrograms: [
          {name:"Flank Speed / M365",status:"650K+ users",budget:"Enterprise cloud"},
          {name:"NMCI / ONE-Net",status:"Transformation",budget:"$73M NGEN FY25"},
          {name:"Navy ERP",status:"SAP S/4 HANA migration",budget:"$616M FY25"},
          {name:"Flank Speed Wireless",status:"~15K users",budget:"Afloat expansion"},
          {name:"Naval Identity Services (NIS)",status:"Zero Trust IAM",budget:"Cross-DON"}
        ],
        modernization: [
          "Flank Speed adoption and mobile scaling",
          "NMCI/ONE-Net device transition to NAUS configs",
          "Zero Trust migration using NIS",
          "IoE pier connectivity expansion",
          "Data center consolidation (IL6 cloud)"
        ],
        subOffices: [],
        leadership: [
          {name:"Louis A. Koplon",title:"PEO"},
          {name:"Jeff Proudfoot",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"PEO Digital",url:"https://www.peodigital.navy.mil"}
        ]
      },
      {
        id: "peo-mlb",
        name: "PEO MLB",
        fullName: "Manpower, Logistics & Business Solutions",
        parent: "NAVWAR",
        location: "San Diego, CA",
        budget: "~$1B+",
        budgetNote: "Navy ERP $616M (shared); NP2 $164M; NMRO $211M",
        categories: ["HR IT","Logistics IT","Business systems","Financial IT","Marine Corps logistics"],
        keyPrograms: [
          {name:"Navy Personnel & Pay (NP2)",status:"Deployment",budget:"$164M FY25"},
          {name:"Navy ERP / ERP+",status:"SAP S/4 HANA transition",budget:"$616M FY25"},
          {name:"GCSS-MC",status:"Marine Corps logistics",budget:"Sustainment"},
          {name:"Naval MRO",status:"100% DME",budget:"$211M FY25"},
          {name:"LOG IT Modernization",status:"Reducing 200 legacy systems",budget:"Active"}
        ],
        modernization: [
          "NP2 deployment replacing legacy NSIPS/pay systems",
          "Navy ERP+ SAP S/4 HANA transition",
          "LOG IT digital transformation",
          "Agile/SAFe delivery model adoption",
          "AI/ML analytics for HR and logistics"
        ],
        subOffices: [],
        leadership: [
          {name:"Christine Rodriguez",title:"PEO"},
          {name:"Mary Thoms",title:"Executive Director"}
        ],
        budgetLinks: [
          {label:"PEO MLB",url:"https://www.peomlb.navy.mil"}
        ]
      },
      {
        id: "ssp",
        name: "SSP",
        fullName: "Strategic Systems Programs",
        parent: "Direct Reporting (DRPM)",
        location: "Washington Navy Yard, D.C.",
        budget: "Classified (NSBDF $5.9B FY25)",
        budgetNote: "D5LE2 +$400M; SLCM-N +$2B reconciliation; CPS classified",
        categories: ["Nuclear deterrence","Trident","Hypersonic strike","SLBM","SLCM-N","CPS"],
        keyPrograms: [
          {name:"Trident D5LE",status:"Deployed on all Ohio SSBNs",budget:"Re-hosting to Columbia"},
          {name:"D5LE2",status:"SRR 2025; IOC 2039",budget:"$400M acceleration"},
          {name:"Columbia CMC",status:"Joint w/ UK Dreadnought",budget:"Launcher engineering"},
          {name:"CPS (Hypersonic)",status:"Zumwalt FY25/26; Virginia FY28",budget:">$3.9B reconciliation"},
          {name:"SLCM-N",status:"Development restarted",budget:"$2B reconciliation"}
        ],
        modernization: [
          "Columbia-class CMC installation; D5LE re-hosting",
          "D5LE2 development (SRR 2025 milestone)",
          "CPS fielding on DDG-1000 and Virginia integration",
          "SLCM-N development acceleration",
          "Nuclear weapons surety modernization",
          "AUKUS technology transfer (UK SWS)"
        ],
        subOffices: [
          {office:"SP20X",name:"D5LE Strategic Weapons",desc:"Trident II D5 Life Extension"},
          {office:"SP21X",name:"D5LE2 Development",desc:"Next-gen SLBM"},
          {office:"SP22X",name:"Launcher Engineering / CMC",desc:"Common Missile Compartment"},
          {office:"CPS",name:"Conventional Prompt Strike",desc:"Hypersonic weapon program"},
          {office:"SLCM-N",name:"Nuclear Sea-Launched Cruise Missile",desc:"Nuclear SLCM development"}
        ],
        leadership: [
          {name:"VADM Johnny Wolfe",title:"Director, SSP"}
        ],
        budgetLinks: [
          {label:"SSP Website",url:"https://www.ssp.navy.mil"}
        ]
      }
    ],
    army: [
      {
        id: "peo-avn",
        name: "PEO Aviation",
        fullName: "Aviation (CPE Aviation)",
        parent: "PAE Maneuver Air",
        location: "Redstone Arsenal, AL",
        budget: "~$5-6B",
        budgetNote: "FLRAA ~$70B total program; $1.2B FY26 boost",
        categories: ["Helicopters","Tiltrotor","UAS","Launched effects","ISR","Fixed wing"],
        keyPrograms: [
          {name:"FLRAA / MV-75 (V-280 Valor)",status:"Top priority; accelerated",budget:"~$70B total program"},
          {name:"AH-64E Apache V4",status:"Ongoing production",budget:"Attack helicopter"},
          {name:"UH-60M Black Hawk",status:"Modernization through 2050+",budget:"RFI issued Feb 2026"},
          {name:"CH-47F+ Chinook",status:"Block II fielding",budget:"Extended range"},
          {name:"HADES",status:"Rapid acquisition",budget:"6 aircraft target"},
          {name:"Launched Effects",status:"Active development",budget:"Air/ground launched"}
        ],
        modernization: [
          "FLRAA — #1 priority, accelerated",
          "Drone dominance — UAS marketplace, company-level drones",
          "Launched effects — ground and air-launched",
          "HADES high-altitude ISR",
          "UH-60M modernization through 2050+"
        ],
        subOffices: [
          {office:"PM FLRAA",name:"Future Long-Range Assault Aircraft",desc:"Bell V-280 Valor (MV-75)"},
          {office:"PM Apache",name:"Apache Attack Helicopters",desc:"AH-64E Guardian"},
          {office:"PM Utility",name:"Utility Helicopters",desc:"UH-60M Black Hawk; UH-60V"},
          {office:"PM Cargo",name:"Cargo Helicopters",desc:"CH-47F/F+ Chinook"},
          {office:"PM UAS",name:"Uncrewed Aircraft Systems",desc:"Gray Eagle; FTUAS; launched effects"},
          {office:"PM Fixed Wing",name:"Fixed Wing Aircraft",desc:"C-12; EMARSS; HADES"},
          {office:"PM AMSA",name:"Aviation Mission Systems",desc:"Avionics integration"},
          {office:"PM ITEP",name:"Improved Turbine Engine",desc:"Next-gen engine (uncertain)"}
        ],
        leadership: [
          {name:"BG David Phillips",title:"PEO"}
        ],
        budgetLinks: [
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "peo-gcs",
        name: "PEO GCS",
        fullName: "Ground Combat Systems",
        parent: "PAE Maneuver Ground",
        location: "Detroit Arsenal, Warren, MI",
        budget: "~$3-4B",
        budgetNote: "M1E3 $723.5M FY26; XM30 ~$386M RDT&E FY26",
        categories: ["Armored vehicles","Tanks","Infantry fighting vehicles","Self-propelled howitzer","Robotic platforms"],
        keyPrograms: [
          {name:"M1E3 Abrams",status:"Early design; accelerated",budget:"$723.5M FY26"},
          {name:"XM30 MICV",status:"MS-B paused Feb 2026",budget:"~$386M RDT&E FY26"},
          {name:"M2A4E1 Bradley",status:"Sustainment + APS upgrade",budget:"Enduring until XM30"},
          {name:"AMPV (M113 replacement)",status:"Scaled back",budget:"Sustainment rates"},
          {name:"Stryker",status:"No new production",budget:"Sustainment only"}
        ],
        modernization: [
          "M1E3 next-gen tank (reduced weight, modular protection)",
          "XM30 as Bradley replacement (50mm, hybrid electric)",
          "Counter-UAS integration on all platforms",
          "360-degree situational awareness",
          "Digital/model-based systems engineering"
        ],
        subOffices: [
          {office:"PM MBTS",name:"Main Battle Tank Systems",desc:"M1A2 SEPv3, M1E3 development"},
          {office:"PM XM30",name:"XM30 Combat Vehicle",desc:"Bradley replacement"},
          {office:"PM MAV",name:"Mounted Armored Vehicles",desc:"AMPV variants"},
          {office:"PM Stryker",name:"Stryker BCT",desc:"Stryker sustainment"},
          {office:"PM SPHS",name:"Self-Propelled Howitzer",desc:"M109A7 Paladin (moving to PAE Fires)"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "pae-fires",
        name: "PAE Fires",
        fullName: "Fires (formerly PEO Missiles & Space)",
        parent: "PAE Fires (top-level PAE)",
        location: "Redstone Arsenal, Huntsville, AL",
        budget: "~$4-5B",
        budgetNote: "LTAMDS $1.3B FY26; M-SHORAD $729M FY26; 62 programs of record",
        categories: ["Missiles","Air defense","Rockets","HIMARS","Hypersonic","Counter-UAS","LRPF"],
        keyPrograms: [
          {name:"Precision Strike Missile (PrSM)",status:"Production + Incr 4/5",budget:"Top LRPF priority"},
          {name:"HIMARS (M142)",status:"High rate; major FMS",budget:"Ongoing procurement"},
          {name:"LTAMDS",status:"Replaces Patriot radar",budget:"$1.3B FY26"},
          {name:"M-SHORAD (SGT STOUT)",status:"Stryker-based SHORAD",budget:"$729M FY26"},
          {name:"LRHW (Dark Eagle)",status:"Rapid development",budget:"Multiple batteries"},
          {name:"Typhon (Mid-Range)",status:"Deployed PHL/Europe",budget:"Tomahawk + SM-6"},
          {name:"IBCS",status:"Fielding to ADA battalions",budget:"Fires C2"}
        ],
        modernization: [
          "Long-range precision fires — Army #1 priority",
          "Strike moving land/maritime targets by 2027",
          "European/Indo-Pacific forward basing (Typhon)",
          "Accelerate M-SHORAD for counter-UAS",
          "LTAMDS to replace aging Patriot radar",
          "Directed energy integration into AMD layers"
        ],
        subOffices: [
          {office:"PM STORM",name:"Strategic & Operational Rockets",desc:"HIMARS; MLRS; ATACMS; PrSM"},
          {office:"PM SHIELD",name:"Short/Intermediate Effectors",desc:"Patriot; SHORAD; IFPC; interceptors"},
          {office:"PM STARE",name:"Search Track Acquire Radiate Eliminate",desc:"TPY-4; LTAMDS radars"},
          {office:"PM IFMC",name:"Integrated Fires Mission Command",desc:"IBCS; fires C2; sensor-shooter"},
          {office:"PM TAGM",name:"Tactical Aviation & Ground Munitions",desc:"Air/ground munitions"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"PEO Missiles & Space",url:"https://www.army.mil/peoms"},
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "peo-c3n",
        name: "PEO C3N",
        fullName: "Command, Control, Communications & Network",
        parent: "PAE Counter C2",
        location: "Aberdeen Proving Ground, MD",
        budget: "~$3B+",
        budgetNote: "NGC2 $2.9B FY26; HMS Radios $478M FY26",
        categories: ["Tactical networks","C2","Radios","Cloud","AI/ML","Zero Trust"],
        keyPrograms: [
          {name:"NGC2 (Next Gen C2)",status:"OTA awards; 4th/25th ID prototypes",budget:"$2.9B FY26"},
          {name:"HMS Radios",status:"Ongoing procurement",budget:"$478M FY26"},
          {name:"Army Link 16",status:"Expanding",budget:"$134M FY26"},
          {name:"Capability Sets (CS23/25)",status:"Iterative fielding",budget:"Active"},
          {name:"NGLD-M (COMSEC)",status:"Replacing SKL",budget:"$66M FY25"}
        ],
        modernization: [
          "NGC2 — seamless, AI-enabled C2",
          "Data-centric architecture; cloud at tactical edge",
          "Transport-agnostic network",
          "Zero-trust cybersecurity",
          "Command post signature reduction",
          "DDIL operations capability"
        ],
        subOffices: [
          {office:"PM C2 Applications",name:"C2 Applications",desc:"Mission-focused apps; NGC2 ecosystem"},
          {office:"PM C2 Data/AI",name:"C2 Data/AI",desc:"AI/ML-enabled data platform; DDIL"},
          {office:"PM C2 Infrastructure",name:"C2 Infrastructure",desc:"Secure compute/store; crypto; cloud"},
          {office:"PM C2 Transport",name:"C2 Transport",desc:"Transport-agnostic radio network"},
          {office:"PM IEN",name:"Integrated Enterprise Network",desc:"Enterprise comms for Army/DoD"}
        ],
        leadership: [
          {name:"BG Jack 'Shane' Taylor",title:"CPE"}
        ],
        budgetLinks: [
          {label:"PEO C3N",url:"https://peoc3n.army.mil"},
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "cpe-isw",
        name: "CPE IEW&S",
        fullName: "Intelligence, EW & Sensors (CPE ISW)",
        parent: "PAE Counter C2",
        location: "Aberdeen Proving Ground, MD",
        budget: "~$2.7B",
        budgetNote: "80+ programs of record; ~$1.5B PNT portfolio alone",
        categories: ["Intel","Electronic warfare","Cyber","Sensors","PNT","Biometrics","SIGINT"],
        keyPrograms: [
          {name:"TLS Manpack",status:"First unit issued FY24",budget:"SIGINT/EW at BCT"},
          {name:"TLS EAB",status:"First unit FY26",budget:"Division/Corps EW"},
          {name:"Prophet Enhanced",status:"ESP upgrades FY25-26",budget:"BCT SIGINT"},
          {name:"MAPS Gen II / DAPS",status:"Full rate production",budget:"M-code GPS"},
          {name:"Project Linchpin",status:"Army's first AI POR",budget:"AI-enabled ISR"},
          {name:"CREW Duke V3",status:"C-UAS loadset update",budget:"Counter-RCIED/C-UAS"}
        ],
        modernization: [
          "CEMA (Cyber-Electromagnetic Activities) integration",
          "AI/ML for SIGINT and EW signal recognition",
          "Miniaturized broadband EW antennas",
          "CMOSS architecture adoption",
          "Navigation warfare countermeasures",
          "Attritable/disaggregated EW payloads"
        ],
        subOffices: [
          {office:"PM EW&C",name:"Electronic Warfare & Cyber",desc:"EW; SIGINT; space; CREW"},
          {office:"PM C&S",name:"Cyber & Space",desc:"Offensive cyber; space layer"},
          {office:"PM DCO",name:"Defensive Cyber Operations",desc:"Defensive cyber tools"},
          {office:"PM IS&A",name:"Intel Systems & Analytics",desc:"ISR PED; Project Linchpin"},
          {office:"PM ASE",name:"Aircraft Survivability Equipment",desc:"IRCM; laser warning"},
          {office:"PM PNT",name:"Positioning, Navigation & Timing",desc:"MAPS; DAPS; M-code GPS"}
        ],
        leadership: [
          {name:"BG Kevin Chaney",title:"CPE ISW"}
        ],
        budgetLinks: [
          {label:"CPE ISW",url:"https://cpeisw.army.mil"},
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "peo-soldier",
        name: "PEO Soldier",
        fullName: "Soldier",
        parent: "PAE Maneuver Ground",
        location: "Fort Belvoir, VA",
        budget: "~$1.5-2B",
        budgetNote: "NGSW; ENVG-B; SPS fielding",
        categories: ["Individual equipment","Weapons","Body armor","Night vision","Medical","Crew-served weapons"],
        keyPrograms: [
          {name:"NGSW (XM7/XM250)",status:"Fielding",budget:"SIG Sauer / GD"},
          {name:"ENVG-B",status:"Fielding",budget:"L3Harris"},
          {name:"Soldier Protection System",status:"Fielding",budget:"Modular vest/helmet"},
          {name:"Air Warrior",status:"Ongoing",budget:"Aviation life support"},
          {name:"SBMC",status:"MTA Rapid Prototype",budget:"Dismounted C2/ISR"}
        ],
        modernization: [
          "Individual lethality overmatch (NGSW family)",
          "Soldier protection vs. evolving threats",
          "Dismounted SA (SBMC, ENVG, target designation)",
          "Soldier power management",
          "Medical capabilities for extended operations"
        ],
        subOffices: [
          {office:"PM SSV",name:"Soldier Survivability",desc:"Clothing, equipment, body armor, air warrior"},
          {office:"PM SL",name:"Soldier Lethality",desc:"Rifles, carbines, machine guns, NGSW"},
          {office:"PM SWAR",name:"Soldier Warrior",desc:"Sensors, targeting devices, SBMC"},
          {office:"PM SMD",name:"Soldier Medical Devices",desc:"Deployable medical capabilities"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"PEO Soldier",url:"https://www.peosoldier.army.mil"}
        ]
      },
      {
        id: "peo-stri",
        name: "PEO STRI",
        fullName: "Simulation, Training & Instrumentation",
        parent: "PAE Counter C2",
        location: "Orlando, FL",
        budget: "~$800M-1B",
        budgetNote: "STE $73.8M; RVCT $96M FY25 procurement",
        categories: ["Training","Simulation","Live/virtual/constructive","Cyber training","Targets"],
        keyPrograms: [
          {name:"Synthetic Training Environment (STE)",status:"Active fielding",budget:"$73.8M FY25"},
          {name:"RVCT",status:"Contract through FY2039",budget:"$96M FY25"},
          {name:"PCTE",status:"Fielded",budget:"Cyber training platform"},
          {name:"Threat-UAS (T-UAS)",status:"Development",budget:"Drone threat training"}
        ],
        modernization: [
          "AI/ML integration into training environments",
          "3D gaming engine technologies",
          "Cloud-based synthetic training at tactical edge",
          "Drone/C-UAS training simulation",
          "Joint and coalition training interoperability"
        ],
        subOffices: [
          {office:"PM SE",name:"Synthetic Environment",desc:"STE; LVC architectures; game-engine training"},
          {office:"PM TRADE",name:"Training Devices",desc:"Live/virtual training; RVCT"},
          {office:"PM CT2",name:"Cyber, Test & Training",desc:"PCTE; cyber range"},
          {office:"PM ITTS",name:"Instrumentation, Targets & Threat Simulators",desc:"Range instrumentation; targets"}
        ],
        leadership: [
          {name:"BG Christine A. Beeler",title:"CPE STRI"}
        ],
        budgetLinks: [
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "peo-enterprise",
        name: "PEO Enterprise",
        fullName: "Enterprise (CPE ES2)",
        parent: "Army CIO",
        location: "Fort Belvoir, VA",
        budget: "~$500-700M",
        budgetNote: "IPPS-A, EBS-C, GCSS-A, GFEBS",
        categories: ["Business IT","ERP","HR","Logistics","Finance","Cloud"],
        keyPrograms: [
          {name:"IPPS-A",status:"Release 3 fielding",budget:"$5.3M FY26"},
          {name:"EBS-C (ERP Convergence)",status:"Converging 5 ERPs by ~2032",budget:"Major investment"},
          {name:"GCSS-A",status:"Sustainment",budget:"$1.99M FY26"},
          {name:"GFEBS",status:"Financial management",budget:"EBS-C portfolio"}
        ],
        modernization: [
          "IPPS-A full Army deployment",
          "EBS-C: converging 5 legacy ERPs",
          "Cloud-first enterprise services",
          "Data analytics platform modernization"
        ],
        subOffices: [
          {office:"PM IPPS-A",name:"Integrated Personnel & Pay",desc:"Personnel and force management"},
          {office:"PM EBS-C",name:"Enterprise Business Systems",desc:"Logistics/finance ERP convergence"},
          {office:"PM DIBS",name:"Defense Integrated Business Systems",desc:"Acquisition/training/readiness"},
          {office:"PM ES",name:"Enterprise Services",desc:"Cloud; data platform; IT services"}
        ],
        leadership: [
          {name:"Bill Hepworth",title:"PEO"}
        ],
        budgetLinks: [
          {label:"PEO Enterprise",url:"https://www.army.mil/enterprise"}
        ]
      },
      {
        id: "peo-cscss",
        name: "PEO CS&CSS",
        fullName: "Combat Support & Combat Service Support",
        parent: "PAE Agile Sustainment & Ammo",
        location: "Detroit Arsenal, Warren, MI",
        budget: "~$2.5-3B",
        budgetNote: "~$8.5B over 3 years (FY22-24); ~$2.8B/yr",
        categories: ["Tactical vehicles","Energy","Bridging","Logistics","Electric power","Watercraft"],
        keyPrograms: [
          {name:"JLTV",status:"Production (slowed under ATI)",budget:"Joint Army/USMC/SOCOM"},
          {name:"FMTV / HEMTT",status:"Sustainment + upgrades",budget:"Medium tactical vehicles"},
          {name:"Common Tactical Truck (CTT)",status:"Development",budget:"Next-gen medium truck"},
          {name:"Bridging",status:"Active modernization",budget:"AVLB replacement"},
          {name:"Mobile Electric Power",status:"Next-gen generators",budget:"MEP-831A+"}
        ],
        modernization: [
          "Power and energy (hybrid vehicles, energy harvesting)",
          "Arctic/cold-weather logistics",
          "Predictive logistics / digital twin",
          "Robotic autonomous logistics vehicles",
          "Bridging modernization",
          "Advanced/additive manufacturing in the field"
        ],
        subOffices: [
          {office:"PM E2S2",name:"Expeditionary Energy & Sustainment",desc:"Power; generators; sustainment"},
          {office:"PM FP",name:"Force Projection",desc:"Bridging; engineer equipment; robotics"},
          {office:"JPO JLTV",name:"Joint Light Tactical Vehicle",desc:"JLTV; ground mobility"},
          {office:"PM TS",name:"Transportation Systems",desc:"Heavy/medium trucks; watercraft"}
        ],
        leadership: [
          {name:"BG Camilla White",title:"PEO"},
          {name:"Andrew DiMarco",title:"Deputy PEO"}
        ],
        budgetLinks: [
          {label:"PEO CS&CSS",url:"https://www.peocscss.army.mil"}
        ]
      },
      {
        id: "peo-acwa",
        name: "PEO ACWA",
        fullName: "Assembled Chemical Weapons Alternatives",
        parent: "Dedicated appropriation",
        location: "Aberdeen Proving Ground, MD",
        budget: "$213M FY26",
        budgetNote: "Major decline from $775M FY25; near end of mission",
        categories: ["Chemical weapons destruction","Demilitarization","CWC compliance"],
        keyPrograms: [
          {name:"PCAPP (Pueblo, CO)",status:"Demolition FY26",budget:"Mustard agent"},
          {name:"BGCAPP (Richmond, KY)",status:"Destruction complete; closure",budget:"GB/VX agents"},
          {name:"CSEPP Closeout",status:"Final closeout",budget:"Kentucky counties"}
        ],
        modernization: [
          "Program wind-down; complete by ~2028",
          "100% CWC obligation met",
          "Facility decommissioning and demolition"
        ],
        subOffices: [],
        leadership: [],
        budgetLinks: [
          {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"}
        ]
      },
      {
        id: "jpeo-aa",
        name: "JPEO A&A",
        fullName: "Armaments & Ammunition",
        parent: "PAE Fires + PAE Agile Sustainment",
        location: "Picatinny Arsenal, NJ",
        budget: "~$3-4B",
        budgetNote: "Single Manager for Conventional Ammunition; $1.1B FY26 facility modernization",
        categories: ["Ammunition","Armaments","Artillery projectiles","Rockets","Small arms ammo","Industrial base"],
        keyPrograms: [
          {name:"155mm Surge Production",status:"Active surge",budget:"Scranton/Radford plants"},
          {name:"HIMARS/MLRS Rockets",status:"Production acceleration",budget:"PL TAS"},
          {name:"Ammo Industrial Base",status:"21st-century by 2028",budget:"$1.1B FY26 facility mod"},
          {name:"Small Caliber Ammo",status:"Ongoing",budget:"PM MAS"}
        ],
        modernization: [
          "Ammunition stockpile replenishment (post-Ukraine priority)",
          "155mm artillery projectile production surge",
          "HIMARS/MLRS rocket production acceleration",
          "Organic industrial base modernization by 2028",
          "$1.1B FY26 for modernizing 7 ammo production facilities"
        ],
        subOffices: [
          {office:"PM CCS",name:"Close Combat Systems",desc:"Shoulder-launched; grenades; bombs"},
          {office:"PM CAS",name:"Combat Ammunition Systems",desc:"Artillery projectiles; tank ammo; mortar"},
          {office:"PM MAS",name:"Maneuver Ammunition Systems",desc:"Small caliber ammunition"},
          {office:"PL TAS",name:"Tactical Artillery Systems",desc:"Rocket/missile-class munitions"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"JPEO A&A",url:"https://jpeoaa.army.mil"}
        ]
      }
    ],
    airforce: [
      {
        id: "pae-c3bm",
        name: "PAE C3BM",
        fullName: "Command, Control, Communications & Battle Management",
        parent: "AFLCMC",
        location: "Pentagon / Hanscom AFB, MA",
        budget: ">$1B",
        budgetNote: "ABMS ~$951M FY26; DAF Battle Network spans 50+ programs",
        categories: ["Battle management","ABMS","Data links","C2","JADC2","Kill chains"],
        keyPrograms: [
          {name:"ABMS Digital Infrastructure",status:"Active deployment",budget:"~$951M FY26"},
          {name:"TOC-L",status:"MR2 (40+ systems)",budget:"Deployable C2 node"},
          {name:"CBC2",status:"Replaced legacy NORAD systems",budget:"CBC2+ in dev"},
          {name:"BACN",status:"Aerial relay operational",budget:"Comms bridging"},
          {name:"Kessel Run",status:"Agile software dev",budget:"Battle mgmt apps"}
        ],
        modernization: [
          "Deliver to depreciate — deploy now, improve iteratively",
          "Scale from experimentation to operational deployment",
          "Joint Fires Network integration (stood up Oct 2025)",
          "Kill chain alignment across 50+ programs",
          "Maritime Mission Integration (Nov 2025)"
        ],
        subOffices: [
          {office:"ABMS Division",name:"Advanced Battle Management System",desc:"Digital infrastructure; software; deployable C2"},
          {office:"Kessel Run",name:"Kessel Run Division",desc:"Agile software development"},
          {office:"C2ISR",name:"C2ISR Division",desc:"Command/control + ISR integration"},
          {office:"Aerial Networks",name:"Aerial Networks Division",desc:"BACN; Airborne Edge Node"},
          {office:"JFN",name:"Joint Fires Network",desc:"Integrated fires coordination (Oct 2025)"}
        ],
        leadership: [
          {name:"BG Jason Voorheis",title:"PAE (Feb 2026)"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-acs",
        name: "PEO ACS",
        fullName: "Agile Combat Support",
        parent: "AFLCMC",
        location: "Hanscom AFB / Maxwell AFB / Wright-Patterson AFB",
        budget: "~$1.25B",
        budgetNote: "ES directorate ~$1.25B; GB directorate ~$1.25B",
        categories: ["Combat support","Test systems","Enterprise IT","Logistics IT","Force protection"],
        keyPrograms: [
          {name:"Automatic Test Systems (ATS)",status:"JTA modernization",budget:"Armament/avionics/EW"},
          {name:"LAIRCM",status:"Large aircraft IR countermeasures",budget:"Self-protection"},
          {name:"Enterprise Logistics Systems",status:"Modernization",budget:"Digital supply chain"},
          {name:"ACE Support Tools",status:"Agile Combat Employment",budget:"Support equipment"}
        ],
        modernization: [
          "Modernizing test systems toward common JTA",
          "LAIRCM and self-protection for high-value assets",
          "Agile Combat Employment support tools",
          "Enterprise logistics IT modernization"
        ],
        subOffices: [
          {office:"ES/HB",name:"Electronic Systems Directorate",desc:"120+ programs; ~$1.25B"},
          {office:"GB",name:"Business & Enterprise Systems",desc:"120+ programs; ~$1.25B"},
          {office:"RO",name:"Combat Readiness Directorate",desc:"ATS; EW; avionics; human systems"}
        ],
        leadership: [
          {name:"Lea Kirkwood, SES",title:"Director, ES"},
          {name:"Alvin Burse, SES",title:"Director, GB"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-hn",
        name: "Cyber & Networks (HN)",
        fullName: "Cyber & Networks Directorate",
        parent: "AFLCMC",
        location: "Hanscom AFB, MA",
        budget: "Included in DAF IT",
        budgetNote: "AFNET operations; nuclear C3; crypto modernization",
        categories: ["Cyberspace","Communications","Cryptographic","Nuclear C3","AFNET"],
        keyPrograms: [
          {name:"AFNET",status:"Operations and modernization",budget:"Enterprise infrastructure"},
          {name:"Nuclear C3 Networks",status:"Modernization",budget:"NC3 support"},
          {name:"Cryptographic Modernization",status:"Ongoing",budget:"Crypto systems"},
          {name:"Airborne Communications",status:"Nodes operational",budget:"Partially under C3BM"}
        ],
        modernization: [
          "AFNET enterprise infrastructure modernization",
          "Nuclear C3 network resilience",
          "Cryptographic system upgrades",
          "Zero Trust implementation"
        ],
        subOffices: [
          {office:"Crypto & Cyber",name:"Crypto & Cyber Systems",desc:"Cryptographic systems; cybersecurity"},
          {office:"Enterprise IT",name:"Enterprise IT & Cyber Infrastructure",desc:"AFNET infrastructure"},
          {office:"Special Programs",name:"Cyber & Networks Special Programs",desc:"Classified programs"}
        ],
        leadership: [
          {name:"BG Joshua Williams",title:"Director (Jan 2026)"}
        ],
        budgetLinks: []
      },
      {
        id: "peo-faa",
        name: "PEO FAA",
        fullName: "Fighters & Advanced Aircraft",
        parent: "AFLCMC / DRPM White",
        location: "Wright-Patterson AFB, OH",
        budget: "~$4.3B",
        budgetNote: "F-47 $3.5B + CCA $807M FY26",
        categories: ["Fighters","6th-gen","CCA drones","F-35A","F-22","F-15EX","Airborne C2"],
        keyPrograms: [
          {name:"F-47 NGAD",status:"Boeing awarded Mar 2025",budget:"$3.5B FY26"},
          {name:"CCA (Drone Wingmen)",status:"Prototypes flying FY25",budget:"$807M FY26"},
          {name:"F-35A Lightning II",status:"Block 4/TR-3 upgrades",budget:"24 aircraft FY26"},
          {name:"F-22A Raptor",status:"Upgrades ongoing",budget:"~$548M/yr avg"},
          {name:"F-15EX Eagle II",status:"Production",budget:"21 aircraft via reconciliation"},
          {name:"E-7 Wedgetail",status:"Effectively deferred/cancelled",budget:"~$200M FY26"}
        ],
        modernization: [
          "F-47 / CCA program execution (highest priority)",
          "CCA first flight and operational squadron",
          "F-35 Block 4 / TR-3 delivery",
          "F-22 sustainment as bridge to F-47",
          "SAOC development (NC3 airborne C2)"
        ],
        subOffices: [
          {office:"Advanced Aircraft",name:"Advanced Aircraft Division",desc:"F-47 NGAD; CCA"},
          {office:"F-22 Office",name:"F-22A Raptor Office",desc:"F-22 sustainment/upgrades"},
          {office:"F-15 FMS",name:"F-15 FMS",desc:"F-15 foreign military sales"},
          {office:"AWACS/Wedgetail",name:"AWACS & Wedgetail",desc:"E-3/E-7 battle management"},
          {office:"JSF/WJ",name:"Joint Strike Fighter",desc:"F-35 directorate (joint PEO)"},
          {office:"SAOC",name:"Survivable Airborne Ops Center",desc:"NC3 airborne command post"}
        ],
        leadership: [
          {name:"Col. Timothy Helfrich",title:"Director (Jan 2026)"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-mobility",
        name: "PEO Mobility",
        fullName: "Mobility",
        parent: "AFLCMC",
        location: "Wright-Patterson AFB, OH",
        budget: "~$5B portfolio",
        budgetNote: "~$47B total portfolio value; KC-46 15/yr",
        categories: ["Airlift","Tankers","Strategic lift","KC-46","C-17","C-130","NGAL"],
        keyPrograms: [
          {name:"KC-46A Pegasus",status:"15/yr production",budget:"Multi-point refueling tanker"},
          {name:"C-17 Globemaster III",status:"222 aircraft; service through 2075",budget:"Strategic airlift backbone"},
          {name:"C-130 Hercules",status:"Ongoing upgrades",budget:"Tactical airlift"},
          {name:"C-5M Super Galaxy",status:"Drive to 55% MC rate",budget:"52 aircraft"},
          {name:"NGAL (Next-Gen Airlift)",status:"AoA FY2027; IOC 2041",budget:"Replaces C-5/C-17"}
        ],
        modernization: [
          "Connectivity: Starshield on tankers/C-17s",
          "Survivability: self-protection for tankers",
          "Resilient communications (counter-jamming, pLEO)",
          "NGAL industry concept exploration",
          "C-17 SLEP / C-5 Drive to 55"
        ],
        subOffices: [
          {office:"KC-46",name:"KC-46 Pegasus",desc:"Multi-point refueling tanker + cargo"},
          {office:"C-17",name:"C-17 Globemaster",desc:"Strategic airlift"},
          {office:"C-130",name:"C-130 Hercules",desc:"Tactical airlift"},
          {office:"C-5",name:"C-5 Galaxy",desc:"Heavy airlift; Drive to 55"},
          {office:"NGAL",name:"Next-Generation Airlift",desc:"Future C-5/C-17 replacement"}
        ],
        leadership: [
          {name:"Kevin D. Stamey, SES",title:"PEO/Director"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-training",
        name: "PEO Training",
        fullName: "Training",
        parent: "AFLCMC",
        location: "Wright-Patterson AFB, OH",
        budget: "Included in ACS portfolio",
        budgetNote: "T-7A fielding; JSE expansion; 300+ programs",
        categories: ["Trainer aircraft","Simulators","JSE","SCARS","Flight training"],
        keyPrograms: [
          {name:"T-7A Red Hawk",status:"First delivery Dec 2025",budget:"Advanced pilot trainer"},
          {name:"JSE (Joint Simulation Environment)",status:"Multi-domain training",budget:"5th/6th-gen classified"},
          {name:"SCARS",status:"Virtualized OFP hosting",budget:"Simulator standards"},
          {name:"T-38 Talon",status:"Transitioning to T-7A",budget:"Legacy trainer"}
        ],
        modernization: [
          "T-7A Red Hawk fielding and GBTS",
          "JSE expansion to operational units",
          "SCARS for simulator concurrency",
          "Reduce flying hour dependency"
        ],
        subOffices: [
          {office:"T-7A Division",name:"T-7A Red Hawk",desc:"Advanced trainer aircraft"},
          {office:"Legacy Training",name:"Legacy Training Aircraft",desc:"T-38; T-6; T-1; T-53A"},
          {office:"ATC Division",name:"Advanced Training Capabilities",desc:"JSE; JSSE; SCARS"}
        ],
        leadership: [
          {name:"Rodney Stevens, SES",title:"PEO/Director"}
        ],
        budgetLinks: []
      },
      {
        id: "peo-nuclear",
        name: "PEO Nuclear/Bombers",
        fullName: "Nuclear Deterrence & Bombers",
        parent: "AFLCMC / AFNWC / DRPM White",
        location: "Wright-Patterson AFB / Tinker AFB / Kirtland AFB",
        budget: "~$14.5B",
        budgetNote: "B-21 $10.3B; Sentinel $4.2B FY26",
        categories: ["Bombers","ICBMs","Nuclear cruise missiles","B-21","Sentinel","B-52J"],
        keyPrograms: [
          {name:"B-21 Raider",status:"LRIP; 100+ planned",budget:"$10.3B FY26 total"},
          {name:"LGM-35A Sentinel",status:"Restructure; MS-B end 2026",budget:"$4.2B FY26"},
          {name:"AGM-181 LRSO",status:"Nuclear cruise missile",budget:"Doubled FY26 funding"},
          {name:"B-52J Modernization",status:"Engine replacement + radar",budget:"76 aircraft through 2050s+"},
          {name:"B-2 Spirit",status:"Wind-down (retire with B-21)",budget:"~$57M FY25"},
          {name:"B-1B Lancer",status:"Retirement by ~2030",budget:"Sustainment"}
        ],
        modernization: [
          "B-21 Raider LRIP and production expansion",
          "Sentinel ICBM restructure completion (2026)",
          "LRSO nuclear cruise missile development",
          "B-52J engine/radar/comms modernization",
          "B-2 and B-1B retirement management"
        ],
        subOffices: [
          {office:"RCO",name:"Rapid Capabilities Office",desc:"B-21 Raider program (Northrop Grumman)"},
          {office:"Bombers/WB",name:"Bombers Directorate",desc:"B-52J, B-2, B-1B sustainment"},
          {office:"AFNWC",name:"Nuclear Weapons Center",desc:"Sentinel; Minuteman III; LRSO; B61-12"},
          {office:"DRPM",name:"DRPM Critical Weapons",desc:"Gen. Dale White oversight"}
        ],
        leadership: [
          {name:"Gen. Dale R. White (4-star)",title:"DRPM Critical Weapons"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "usaf-rco",
        name: "USAF RCO",
        fullName: "Rapid Capabilities Office",
        parent: "SAF / DepSecDef",
        location: "Pentagon / Bolling AFB",
        budget: "~$10.3B (B-21)",
        budgetNote: "B-21: $4.7B RDT&E + $4.5B production + procurement",
        categories: ["Stealth bomber","Classified capabilities","Advanced prototypes"],
        keyPrograms: [
          {name:"B-21 Raider",status:"LRIP; 6 test aircraft",budget:"$692M avg unit cost"},
          {name:"F-47 NGAD (oversight)",status:"DRPM White",budget:"See PEO FAA"},
          {name:"Classified Programs",status:"Active",budget:"Not publicly disclosed"}
        ],
        modernization: [
          "B-21 production expansion (25% capacity increase)",
          "First operational aircraft target 2027 (Ellsworth AFB)",
          "Minimum 100 aircraft replacing B-1B and B-2"
        ],
        subOffices: [],
        leadership: [],
        budgetLinks: [
          {label:"B-21 Raider Fact Sheet",url:"https://www.af.mil/About-Us/Fact-Sheets/Display/Article/2682973/b-21-raider/"}
        ]
      },
      {
        id: "peo-pea",
        name: "PEO PEA",
        fullName: "Presidential & Executive Airlift",
        parent: "AFLCMC",
        location: "Wright-Patterson AFB, OH",
        budget: "~$602M R&D FY26",
        budgetNote: "VC-25B delivery mid-2028; Qatar 747 bridge <$400M",
        categories: ["Presidential aircraft","Executive transport","VIP airlift","Air Force One"],
        keyPrograms: [
          {name:"VC-25B (Air Force One)",status:"Delivery mid-2028",budget:">$4.3B total"},
          {name:"Qatar 747 Bridge Aircraft",status:"L3Harris converting; summer 2026",budget:"<$400M"},
          {name:"C-32A / C-37 / C-40",status:"VP/Senior leader transport",budget:"Fleet sustainment"}
        ],
        modernization: [
          "VC-25B schedule recovery and delivery",
          "Qatar 747 bridge aircraft rapid fielding",
          "747-8 training pipeline establishment"
        ],
        subOffices: [],
        leadership: [
          {name:"BG Leigh Ottati",title:"Director/PEO"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-tactical",
        name: "PEO Tactical/Armament",
        fullName: "Armament Directorate (PAE Air Dominance)",
        parent: "AFLCMC",
        location: "Eglin AFB, FL",
        budget: "~$4.2B",
        budgetNote: "JASSM-ER/LRASM surge; LRSO doubled; HACM development",
        categories: ["Weapons","Munitions","Electronic warfare","Hypersonic","Cruise missiles","JASSM","LRASM"],
        keyPrograms: [
          {name:"JASSM-ER",status:"Production surge",budget:"Major increase FY26"},
          {name:"LRASM",status:"Production doubled+",budget:"INDOPACOM priority"},
          {name:"AGM-181 LRSO",status:"Nuclear cruise missile",budget:"Doubled FY26"},
          {name:"HACM",status:"Air-breathing hypersonic",budget:"Raytheon/Northrop"},
          {name:"ARRW",status:"Relaunched FY26 budget",budget:"Boost-glide hypersonic"},
          {name:"SDB I & II",status:"Continued procurement",budget:"StormBreaker"}
        ],
        modernization: [
          "Modular open-system architecture for weapons",
          "Increased JASSM-ER/LRASM production capacity",
          "Hypersonic weapons development (HACM, ARRW)",
          "Long-range precision strike for INDOPACOM",
          "Affordability and mass production for peer competition"
        ],
        subOffices: [
          {office:"Long Range Systems",name:"Long Range Systems",desc:"LRSO; JASSM-ER; LRASM"},
          {office:"Air Dominance",name:"Air Dominance Division",desc:"Advanced air superiority weapons"},
          {office:"Attack",name:"Attack Division",desc:"Air-to-ground weapons"},
          {office:"Stand In Strike",name:"Stand In Strike",desc:"Close-in denied-area weapons"},
          {office:"Weapons Superiority",name:"Weapons Superiority",desc:"Electronic warfare; advanced weapons"}
        ],
        leadership: [
          {name:"BG Robert Lyons III",title:"Director/PEO"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      },
      {
        id: "peo-isrsof",
        name: "PEO ISR & SOF",
        fullName: "ISR & Special Operations Forces",
        parent: "AFLCMC",
        location: "Wright-Patterson AFB, OH",
        budget: "~$2B",
        budgetNote: "HH-60W, MH-139A, ISR platform sustainment; 200+ programs",
        categories: ["ISR platforms","SOF aircraft","CSAR","Helicopters","RQ-4","U-2","A-10 retirement"],
        keyPrograms: [
          {name:"HH-60W Jolly Green II",status:"Production; replacing HH-60G",budget:"CSAR helicopter"},
          {name:"MH-139A Grey Wolf",status:"Production; ICBM security",budget:"Replacing UH-1N"},
          {name:"RQ-4 Global Hawk",status:"Block 40/50 sustained",budget:"Evaluating future"},
          {name:"U-2 Dragon Lady",status:"Sustained",budget:"Retirement debate"},
          {name:"A-10 Thunderbolt II",status:"All 162 retire by end 2027",budget:"CAS retirement"},
          {name:"HC-130J Combat King II",status:"In production",budget:"Personnel recovery"}
        ],
        modernization: [
          "HH-60W Jolly Green II fielding",
          "MH-139A Grey Wolf AFGSC integration",
          "ISR recapitalization (U-2 vs RQ-4)",
          "SOF aircraft sustainment",
          "A-10 retirement management"
        ],
        subOffices: [
          {office:"ISR Sensors",name:"ISR Sensors",desc:"RQ-4, U-2, SIGINT payloads"},
          {office:"SOF/PR",name:"SOF & Personnel Recovery",desc:"HC-130J; HH-60W; MC-130J"},
          {office:"Helo Office",name:"Helicopter Program Office",desc:"HH-60W; MH-139A"},
          {office:"CV-22",name:"CV-22 Osprey",desc:"SOF tiltrotor (NAS Pax River)"},
          {office:"645 AESG",name:"Big Safari",desc:"Rapid/special acquisition; classified"}
        ],
        leadership: [
          {name:"Col. John 'Moose' Dayton",title:"PEO/Director (Dec 2025)"}
        ],
        budgetLinks: [
          {label:"AF FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
        ]
      }
    ],
    spaceforce: [
      {
        id: "peo-aats",
        name: "PEO AATS",
        fullName: "Assured Access to Space",
        parent: "Space Systems Command (SSC)",
        location: "Los Angeles AFB (El Segundo), CA",
        budget: "~$1.4B",
        budgetNote: "NSSL Phase 3 $5.6B total; FY25 7 launches",
        categories: ["Launch services","Launch infrastructure","NSSL","Eastern/Western Range"],
        keyPrograms: [
          {name:"NSSL Phase 3",status:"Multi-award $5.6B",budget:"Blue Origin/SpaceX/ULA"},
          {name:"Launch Infrastructure",status:"Modernization ongoing",budget:"Cape Canaveral + Vandenberg"},
          {name:"FMS Launch",status:"$70M+ active cases",budget:"40K+ M-code GPS inquiries"}
        ],
        modernization: [
          "Expanding launch provider competition (New Glenn operational)",
          "Reducing launch costs through competition",
          "Increasing launch cadence for PWSA proliferation",
          "Launch range modernization"
        ],
        subOffices: [],
        leadership: [
          {name:"BG Kristin Panzenhagen",title:"PEO"}
        ],
        budgetLinks: [
          {label:"SSC AATS",url:"https://www.ssc.spaceforce.mil/Program-Offices/Assured-Access-to-Space"}
        ]
      },
      {
        id: "peo-bmc3i",
        name: "PEO BMC3I",
        fullName: "Battle Management C3 & Space Intelligence",
        parent: "SSC",
        location: "Los Angeles AFB, CA",
        budget: "Largest SSC PEO",
        budgetNote: "$6.4B earmarked for Long-Range Kill Chains (reconciliation)",
        categories: ["Space C2","Satellite control","Kill chains","SDA data","SWORD training"],
        keyPrograms: [
          {name:"Satellite Control Network (SCN)",status:"Modernization",budget:"Worldwide antenna network"},
          {name:"Space C2",status:"CSpOC software",budget:"SDA; orbital C2; EW"},
          {name:"Unified Data Library (UDL)",status:"Operational",budget:"SDA data repository"},
          {name:"System Delta 85 (SYD 85)",status:"Stood up Aug 2025",budget:"Kill chain integration"},
          {name:"meshONE-T",status:"9 nodes installed",budget:"Fiber/wireless backbone"}
        ],
        modernization: [
          "Space-based kill chain contributions",
          "SCN modernization for resilience and speed",
          "SWORD training environment scaling",
          "OODA loop compression for space domain",
          "TAP Lab partnership expansion"
        ],
        subOffices: [
          {office:"SYD 85",name:"System Delta 85",desc:"Col. Jason West; BMC3 acquisition-to-operations"},
          {office:"SPD-BA",name:"Battlespace Awareness",desc:"SDA analytics; space intelligence"},
          {office:"SPD-BM",name:"Battle Management",desc:"Operational C2; BMC3 applications"},
          {office:"SPD-SANS",name:"Space Access & Networked Services",desc:"SCN; satellite comms"}
        ],
        leadership: [
          {name:"Shannon Pallone",title:"PEO"}
        ],
        budgetLinks: [
          {label:"SSC BMC3I",url:"https://www.ssc.spaceforce.mil/Program-Offices/Battle-Management-Command-Control-Communications-and-Space-Intelligence"}
        ]
      },
      {
        id: "peo-spacesensing",
        name: "PEO Space Sensing",
        fullName: "Space Sensing",
        parent: "SSC",
        location: "Los Angeles AFB, CA",
        budget: "~$4-5B",
        budgetNote: "Next-Gen OPIR GEO $9.5B total; Polar $5.9B total; Golden Dome",
        categories: ["Missile warning","Missile tracking","Environmental monitoring","Hypersonic tracking","Golden Dome"],
        keyPrograms: [
          {name:"Next-Gen OPIR GEO",status:"Launch ≥Mar 2026",budget:"$9.5B (2 GEO sats)"},
          {name:"Next-Gen OPIR Polar",status:"On track for 2028",budget:"$5.9B (2 polar sats)"},
          {name:"SBIRS",status:"Legacy sustaining",budget:"6 GEO + HEO payloads"},
          {name:"Resilient MW/MT MEO",status:"Early-stage",budget:"Hypersonic tracking"},
          {name:"Golden Dome Space Components",status:"Major FY26 investment",budget:"$4.1B classified+unclassified"}
        ],
        modernization: [
          "Next-Gen OPIR GEO launch acceleration",
          "Multi-orbit missile warning (GEO + MEO + LEO)",
          "Hypersonic tracking: disaggregated sensors",
          "AMTI/GMTI space-based targeting",
          "Golden Dome national missile defense integration"
        ],
        subOffices: [
          {office:"SYD 84",name:"Space-Based MW/MT",desc:"Missile warning and tracking"},
          {office:"SYD 810",name:"Space-Based Sensing & Targeting",desc:"Environmental monitoring; tactical sensing"}
        ],
        leadership: [
          {name:"Col. Leroy Brown",title:"PEO (Jul 2025)"}
        ],
        budgetLinks: [
          {label:"SSC Space Sensing",url:"https://www.ssc.spaceforce.mil/program-offices/space-sensing"}
        ]
      },
      {
        id: "peo-mcpnt",
        name: "PEO MCPNT",
        fullName: "Military Communications & PNT",
        parent: "SSC",
        location: "Los Angeles AFB, CA",
        budget: "~$3B+",
        budgetNote: "ESS $2.8B contract; PTS-G $4B IDIQ; GPS IIIF",
        categories: ["MILSATCOM","GPS","PNT","Strategic SATCOM","Protected tactical","Wideband"],
        keyPrograms: [
          {name:"ESS (Evolved Strategic SATCOM)",status:"Boeing $2.8B (2 sats)",budget:"NC3 modernization; ~$12B total"},
          {name:"PTS-G",status:"$4B IDIQ; 5 awardees",budget:"$239M FY26; first launch 2028"},
          {name:"PTS-P Prototype",status:"Launching 2026",budget:"Anti-jam Ka-band"},
          {name:"GPS IIIF",status:"Procurement continuing",budget:"Lockheed Martin"},
          {name:"WGS-11",status:"PTS-P payload; Boeing",budget:"Launching 2026"},
          {name:"EPS-R",status:"Launched Aug 2024; operational",budget:"Arctic MILSATCOM"}
        ],
        modernization: [
          "ESS fielding for NC3 modernization",
          "PTS-P operationalization (anti-jam comms)",
          "PTS-G constellation development (2028 launch)",
          "GPS IIIF and OCX ground system",
          "EPS-R Arctic MILSATCOM integration",
          "Resiliency and anti-jam across all SATCOM tiers"
        ],
        subOffices: [],
        leadership: [
          {name:"Cordell DeLaPena Jr.",title:"PEO"}
        ],
        budgetLinks: [
          {label:"SSC MCPNT",url:"https://www.ssc.spaceforce.mil/Program-Offices/Military-Communications-Positioning-Navigation-Timing"}
        ]
      },
      {
        id: "peo-sdacp",
        name: "PEO SDA&CP",
        fullName: "Space Domain Awareness & Combat Power",
        parent: "SSC",
        location: "Los Angeles AFB, CA / Peterson SFB, CO",
        budget: ">$10B portfolio",
        budgetNote: "60+ programs; Digital Bloodhound $750M; counterspace largely classified",
        categories: ["Space domain awareness","Counterspace","Cyber","SDA radars","Ground sensors","NCMC"],
        keyPrograms: [
          {name:"Digital Bloodhound",status:"Cyber defense/offense",budget:"$750M"},
          {name:"UEWR (Early Warning Radars)",status:"Globally distributed",budget:"BMD early warning"},
          {name:"NCMC Modernization",status:"Cheyenne Mountain",budget:"Deep underground facility"},
          {name:"Space Safari",status:"Rapid/affordable prototyping",budget:"COTS spacecraft"},
          {name:"CETIP (Counter-Comms)",status:"Electronic warfare",budget:"$91M"}
        ],
        modernization: [
          "Space domain characterization at scale (AI/ML)",
          "Offensive/defensive counterspace (classified)",
          "NCMC and ground radar modernization",
          "Cyber defense of space systems",
          "Space Safari rapid responsive space",
          "Golden Dome radar/ground station contributions"
        ],
        subOffices: [
          {office:"Ground Radar",name:"Ground Radar Division",desc:"SSN radars; UEWR; COBRA DANE"},
          {office:"Optical/RF",name:"Optical & Passive RF",desc:"Ground-based optical/RF monitoring"},
          {office:"Combat Systems",name:"Combat Systems Division",desc:"Counter-communications; counterspace"},
          {office:"Cyber Ops",name:"Cyber Operations",desc:"Digital Bloodhound; cyber defense"},
          {office:"Space Safari",name:"Space Safari",desc:"Rapid acquisition; COTS spacecraft"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"SSC SDA&CP",url:"https://www.ssc.spaceforce.mil/Program-Offices/Space-Combat-Power"}
        ]
      },
      {
        id: "peo-otti",
        name: "PEO OTTI",
        fullName: "Operational Test & Training Infrastructure",
        parent: "SSC",
        location: "Los Angeles AFB, CA",
        budget: "Included in SSC",
        budgetNote: "SWORD training environment; OTA awarded Sep 2025",
        categories: ["Test infrastructure","Training","SWORD","Space warfighter readiness"],
        keyPrograms: [
          {name:"SWORD",status:"Scaling to enterprise 2026",budget:"Synthetic training environment"},
          {name:"Space Test",status:"OTA awarded Sep 2025",budget:"Software Acquisition Pathway"}
        ],
        modernization: [
          "SWORD training environment enterprise scaling",
          "Integrated test and training capabilities",
          "Software Acquisition Pathway adoption"
        ],
        subOffices: [],
        leadership: [
          {name:"Col. Corey Klopstein",title:"PEO / SYD 81 Commander"}
        ],
        budgetLinks: []
      },
      {
        id: "sda",
        name: "SDA",
        fullName: "Space Development Agency",
        parent: "U.S. Space Force",
        location: "Washington, D.C. / Grand Forks AFB, ND",
        budget: "~$4.3B",
        budgetNote: "T3 Tracking $3.5B awarded Dec 2025; 72 satellites",
        categories: ["Proliferated LEO constellation","PWSA","Missile tracking","Optical links","Transport layer"],
        keyPrograms: [
          {name:"PWSA Tranche 1",status:"Launching Sep 2025 – mid-2026",budget:"154 transport + tracking sats"},
          {name:"PWSA Tranche 2",status:"Development; launch 2027",budget:"Transport + 54 tracking sats"},
          {name:"PWSA T3 Tracking",status:"$3.5B awarded Dec 2025",budget:"72 satellites; 4 vendors"},
          {name:"Tranche 0",status:"Operational since 2023",budget:"28 transport + 4 tracking demo"},
          {name:"Airborne Optical Comms",status:"RFI Jan 2026",budget:"Aircraft-to-PWSA link"}
        ],
        modernization: [
          "T1 launch campaign (Sep 2025 – early 2027)",
          "T2 development and launch preparation",
          "T3 contract execution (72 tracking + transport sats)",
          "Iron Dome for America architecture contributions",
          "Airborne optical terminal integration"
        ],
        subOffices: [
          {office:"Transport Layer",name:"Transport Layer",desc:"Low-latency military data relay; optical inter-satellite links"},
          {office:"Tracking Layer",name:"Tracking Layer",desc:"Global missile warning/tracking; hypersonic"},
          {office:"Battle Mgmt Layer",name:"Battle Management Layer",desc:"Architecture tasking; kill chain closure"},
          {office:"Custody Layer",name:"Custody Layer",desc:"24/7 target custody for engagement"},
          {office:"Navigation Layer",name:"Navigation Layer",desc:"GPS-independent optical ranging"}
        ],
        leadership: [
          {name:"Dr. Gurpartap 'GP' Sandhoo",title:"Acting Director"}
        ],
        budgetLinks: [
          {label:"SDA Website",url:"https://www.sda.mil"}
        ]
      }
    ],
    defensewide: [
      {
        id: "disa",
        name: "DISA",
        fullName: "Defense Information Systems Agency",
        parent: "DoD CIO",
        location: "Fort Meade, MD",
        budget: "~$3B+ O&M",
        budgetNote: "Seven mission areas; JWCC cloud; Zero Trust by FY2027",
        categories: ["DoDIN","Enterprise IT","Cloud","Cyber","Identity management","DISN"],
        keyPrograms: [
          {name:"JWCC (Cloud)",status:"Multi-vendor operational",budget:"Enterprise cloud at all classification levels"},
          {name:"Zero Trust",status:"DoD-wide implementation",budget:"Full deployment by FY2027"},
          {name:"DoD365",status:"Enterprise license",budget:"Microsoft 365 for DoD"},
          {name:"DISN",status:"3,800 locations / 42 countries",budget:"$303M FY25"},
          {name:"ICAM",status:"Enterprise identity services",budget:"DoD-wide"}
        ],
        modernization: [
          "Zero Trust implementation across DoDIN",
          "JWCC cloud migration acceleration",
          "AI/data analytics integration",
          "Cyber warfighting architecture modernization",
          "5G/advanced communications for warfighter mobility"
        ],
        subOffices: [],
        leadership: [],
        budgetLinks: [
          {label:"DISA",url:"https://www.disa.mil"},
          {label:"DoD Budget Materials",url:"https://comptroller.defense.gov/Budget-Materials/"}
        ]
      },
      {
        id: "mda",
        name: "MDA",
        fullName: "Missile Defense Agency",
        parent: "USD(R&E)",
        location: "Pentagon / Huntsville, AL",
        budget: "$13.2B total",
        budgetNote: "$10.2B base + $3.0B reconciliation (Golden Dome); ~$10.5B RDT&E",
        categories: ["Missile defense","GMD","THAAD","Aegis BMD","Hypersonic defense","Golden Dome"],
        keyPrograms: [
          {name:"GMD / NGI",status:"44 GBIs; NGI in development",budget:"~$3.2B"},
          {name:"THAAD",status:"37 interceptors FY26",budget:"~$1.6B"},
          {name:"Aegis BMD",status:"Network Enabled Interceptor",budget:"~$2.4B"},
          {name:"GPI (Glide Phase Interceptor)",status:"Hypersonic countermeasure",budget:"FOC ~2035"},
          {name:"Golden Dome ($25B total)",status:"National priority",budget:"$3B MDA share"},
          {name:"Defense of Guam",status:"Early planning",budget:"Comprehensive architecture"}
        ],
        modernization: [
          "Accelerate NGI fielding despite delays",
          "Establish 3rd GMD site (East Coast)",
          "Multi-layered defense of Guam",
          "Counter hypersonic weapons (GPI)",
          "Space-based sensing integration",
          "Expand THAAD batteries"
        ],
        subOffices: [],
        leadership: [],
        budgetLinks: [
          {label:"DoD Budget Materials",url:"https://comptroller.defense.gov/Budget-Materials/"},
          {label:"R-1 Document",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/FY2026_r1.pdf"}
        ]
      },
      {
        id: "darpa",
        name: "DARPA",
        fullName: "Defense Advanced Research Projects Agency",
        parent: "USD(R&E)",
        location: "Arlington, VA",
        budget: "~$4.9B",
        budgetNote: "$4.5B base + $350M+ reconciliation; 12% increase",
        categories: ["R&D","AI/ML","Autonomy","Biotechnology","Quantum","Hypersonics","Microsystems"],
        keyPrograms: [
          {name:"Autonomous Systems",status:"Major investment ($13.4B DoD-wide)",budget:"TTO/STO"},
          {name:"AI/ML Programs",status:"CLARA; I2O-wide",budget:"Automated reasoning"},
          {name:"Quantum Technologies",status:"MTO/DSO",budget:"Research"},
          {name:"Biotechnology",status:"MASH; Smart-RBC",budget:"BTO programs"},
          {name:"Hypersonics Counter",status:"STO/TTO",budget:"Counter-adversary"}
        ],
        modernization: [
          "Create and prevent technological surprise",
          "Bridge fundamental science to military application",
          "Time-limited PM model (3-5 year tours)",
          "ERIS 7-minute pitch rapid awards"
        ],
        subOffices: [
          {office:"BTO",name:"Biological Technologies Office",desc:"Biology for national security; warfighter readiness"},
          {office:"DSO",name:"Defense Sciences Office",desc:"Quantum; novel materials; energy; physics"},
          {office:"I2O",name:"Information Innovation Office",desc:"AI/ML; cybersecurity; autonomous systems"},
          {office:"MTO",name:"Microsystems Technology Office",desc:"Photonic/quantum circuits; manufacturing"},
          {office:"STO",name:"Strategic Technology Office",desc:"Hypersonics; EW; distributed systems"},
          {office:"TTO",name:"Tactical Technology Office",desc:"Autonomous platforms; swarm tech; mass systems"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"DARPA RDT&E Book",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/budget_justification/pdfs/03_RDT_and_E/RDTE_Vol1_DARPA_MasterJustificationBook_PB_2026.pdf"}
        ]
      },
      {
        id: "socom-peos",
        name: "SOCOM PEOs",
        fullName: "US Special Operations Command Acquisition",
        parent: "USSOCOM SOF AT&L",
        location: "Tampa, FL (HQ)",
        budget: "$2.32B procurement",
        budgetNote: "$2.06B base + $263M reconciliation; $1.4B RDT&E",
        categories: ["SOF equipment","Special mission aircraft","Maritime SOF","Rotary wing","Digital apps"],
        keyPrograms: [
          {name:"OA-1K Skyraider II",status:"6 aircraft FY26",budget:"$156.6M"},
          {name:"AC-130J Ghostrider",status:"Sustained",budget:"SOF gunship"},
          {name:"MC-130J Talon III",status:"Fleet sustained",budget:"SOF transport"},
          {name:"Counter-UAS Systems",status:"FY26 priority",budget:"Robotic/counter-robotic"},
          {name:"SOF Ground Vehicles (FOSOV)",status:"Active",budget:"PM SOF Warrior"}
        ],
        modernization: [
          "Counter-UAS / robotic solutions (FY26 priority)",
          "Deep sensing in contested environments",
          "Assured access technologies",
          "Multidomain/great power conflict capabilities",
          "AI-enabled tactical edge decision-making"
        ],
        subOffices: [
          {office:"PEO-SW",name:"SOF Warrior",desc:"$1.5B annual; weapons, comms, protection"},
          {office:"PEO-FW",name:"Fixed Wing",desc:"MC-130J; OA-1K; AC-130J; U-28A; UAS"},
          {office:"PEO-RW",name:"Rotary Wing",desc:"MH-60; MH-47; 160th SOAR support"},
          {office:"PEO-M",name:"Maritime",desc:"NSW surface/undersea platforms"},
          {office:"PEO-SDA",name:"SOF Digital Applications",desc:"Software; data; DevSecOps"},
          {office:"PEO-SV",name:"Services",desc:"Professional/technical services"},
          {office:"PEO-SOFSA",name:"SOF Logistics & Support",desc:"Largest SOCOM service contract"},
          {office:"PEO-TIS",name:"Tactical Information Systems",desc:"Intel; tactical comms; SIGINT"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"SOCOM Programs",url:"https://www.socom.mil/SOF-ATL/Pages/programs_new2.aspx"},
          {label:"SOCOM Procurement (P-1)",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/budget_justification/pdfs/02_Procurement/PROC_SOCOM_PB_2026.pdf"}
        ]
      },
      {
        id: "cpe-cbrnd",
        name: "CPE CBRND",
        fullName: "CBRN Defense",
        parent: "PAE Layered Protection + CBRN",
        location: "Aberdeen Proving Ground, MD",
        budget: "~$1.2B",
        budgetNote: "CBRN defense portion of CBDP; slight decrease",
        categories: ["CBRN defense","Protection","Medical countermeasures","Sensors","Genomics","SOF CBRN"],
        keyPrograms: [
          {name:"CBRN Protection Equipment",status:"70+ programs in sustainment",budget:"JPM Protection"},
          {name:"Medical Countermeasures",status:"MCM development",budget:"JPM Medical"},
          {name:"CBRN Sensors",status:"Lifecycle management",budget:"JPM Sensors"},
          {name:"JWARN",status:"Warning & Reporting Network",budget:"JPL Integration"},
          {name:"Genomic Sequencing",status:"Field capability",budget:"JPL Enabling Biotech"}
        ],
        modernization: [
          "Genomic sequencing workflows for field deployment",
          "Rapid MCM development and manufacturing",
          "CBRN defense in multi-domain/great power competition",
          "Integration with Army IBCS/IAMD"
        ],
        subOffices: [
          {office:"JPM Protection",name:"CBRN Protection",desc:"Individual/collective protection; 70+ programs"},
          {office:"JPM Medical",name:"CBRN Medical",desc:"Medical countermeasures; diagnostics"},
          {office:"JPM Sensors",name:"CBRN Sensors",desc:"Detection and identification systems"},
          {office:"JPM SOF",name:"CBRN SOF",desc:"SOF/Special Purpose Force equipment"},
          {office:"JPL Biotech",name:"Enabling Biotechnologies",desc:"Genomics; rapid MCM manufacturing"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"CPE CBRND",url:"https://www.jpeocbrnd.osd.mil"}
        ]
      },
      {
        id: "dha-peos",
        name: "DHA PEOs",
        fullName: "Defense Health Agency",
        parent: "DHA",
        location: "Falls Church, VA",
        budget: "~$40B DHP",
        budgetNote: "DHP O&M ~$40B; MHS GENESIS fully deployed; JOMIS active",
        categories: ["Military healthcare IT","Electronic health records","Battlefield medicine","Health surveillance"],
        keyPrograms: [
          {name:"MHS GENESIS",status:"Full deployment complete FY24",budget:"Oracle/Cerner EHR"},
          {name:"JOMIS",status:"Active development",budget:"$7.4M+/yr; +$11.3M FY26"},
          {name:"DMIX / EIDS",status:"Data analytics platform",budget:"Precision medicine"},
          {name:"MTF Direct Care",status:"+$310M investment FY26",budget:"Workforce expansion"}
        ],
        modernization: [
          "MHS GENESIS sustainment and data utilization",
          "JOMIS battlefield medicine integration",
          "Zero Trust for healthcare systems",
          "Cryopreservation Demonstration Program (FY26 new start)"
        ],
        subOffices: [
          {office:"PEO-DHMS",name:"Defense Healthcare Management Systems",desc:"MHS GENESIS; JOMIS; EIDS"},
          {office:"PEO Med Sys",name:"Medical Systems",desc:"Medical capital equipment; devices"}
        ],
        leadership: [],
        budgetLinks: [
          {label:"DHP Budget",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/budget_justification/pdfs/09_Defense_Health_Program/00-DHP_Vols_I_and_II_PB26.pdf"}
        ]
      },
      {
        id: "dla",
        name: "DLA",
        fullName: "Defense Logistics Agency",
        parent: "USD(A&S)",
        location: "Fort Belvoir, VA",
        budget: "$401.5M O&M",
        budgetNote: "HQ/admin; total DLA enterprise much larger; 8,500+ suppliers",
        categories: ["Logistics","Supply chain","Energy","Weapons support","Distribution"],
        keyPrograms: [
          {name:"DAI (Financial Mgmt)",status:"120K+ users; 26 agencies",budget:"$97M FY26"},
          {name:"Warstoppers",status:"Industrial base surge",budget:"$49.3M FY26"},
          {name:"Supply Chain Digitization",status:"Advanced analytics",budget:"Active"},
          {name:"DLA Weapons Support",status:"+13% demand FY26",budget:"Parts and materials"}
        ],
        modernization: [
          "Supply chain digitization and demand forecasting",
          "Warstoppers industrial base surge capacity",
          "AI/automation for procurement efficiency",
          "Semiconductor strategic stockpiling through ~CY2030"
        ],
        subOffices: [],
        leadership: [],
        budgetLinks: [
          {label:"DLA O&M Budget",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/budget_justification/pdfs/01_Operation_and_Maintenance/O_M_VOL_1_PART_1/DLA_OP-5.pdf"}
        ]
      }
    ]
  };

  // ============================================================
  // BUDGET OVERVIEW DATA
  // ============================================================
  const BUDGET_OVERVIEW = {
    serviceComparison: [
      {service:"Army",fy25:"$185.8B",fy26:"$197.4B",change:"+6.2%"},
      {service:"Navy (incl. USMC)",fy25:"$257.6B",fy26:"$292.2B",change:"+13.4%"},
      {service:"Air Force",fy25:"$188.1B",fy26:"$209.6B",change:"+11.4%"},
      {service:"Space Force",fy25:"$29.4B",fy26:"$39.9B",change:"+35.7%"},
      {service:"Defense-Wide",fy25:"~$170B",fy26:"$170.9B",change:"~flat"},
      {service:"TOTAL DoD",fy25:"~$895B",fy26:"$961.6B",change:"+13.4%"}
    ],
    rdteBreakdown: [
      {service:"Air Force",fy25:"$47.69B",fy26base:"$52.02B",fy26recon:"$10.23B",fy26total:"$62.24B"},
      {service:"Defense-Wide",fy25:"$37.82B",fy26base:"$33.92B",fy26recon:"$8.90B",fy26total:"$42.82B"},
      {service:"Space Force",fy25:"$18.53B",fy26base:"$15.49B",fy26recon:"$13.55B",fy26total:"$29.03B"},
      {service:"Navy",fy25:"$27.00B",fy26base:"$25.71B",fy26recon:"$3.45B",fy26total:"$29.16B"},
      {service:"Army",fy25:"$17.12B",fy26base:"$14.55B",fy26recon:"$0.85B",fy26total:"$15.40B"},
      {service:"TOTAL",fy25:"$149.50B",fy26base:"$142.00B",fy26recon:"$37.07B",fy26total:"$179.07B"}
    ],
    procurementHighlights: [
      "Total DoD Procurement: ~$205B ($153.3B base + ~$52B reconciliation)",
      "47 F-35 Joint Strike Fighters (reduced from prior year)",
      "F-47 NGAD: $3.5B (6th-generation fighter)",
      "B-21 Raider: $10.3B total ($3.8B procurement + RDT&E)",
      "Columbia-class SSBN: $11.2B (up $1.4B)",
      "Virginia-class SSN: 2 boats in FY2026",
      "37 THAAD interceptors (MDA)",
      "Autonomy investment: $13.4B DoD-wide",
      "Nuclear modernization total: ~$62B",
      "Space Force surge: $39.9B (+43% from FY25)"
    ],
    budgetLinks: [
      {label:"DoD Budget Materials (Main)",url:"https://comptroller.defense.gov/Budget-Materials/"},
      {label:"P-1 Procurement Programs",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/FY2026_p1.pdf"},
      {label:"R-1 RDT&E Programs",url:"https://comptroller.war.gov/Portals/45/Documents/defbudget/FY2026/FY2026_r1.pdf"},
      {label:"Army Budget Materials",url:"https://www.asafm.army.mil/Budget-Materials/"},
      {label:"Navy FY2026 Budget",url:"https://www.secnav.navy.mil/fmc/fmb/Pages/Fiscal-Year-2026.aspx"},
      {label:"Air Force FY2026 Budget",url:"https://www.saffm.hq.af.mil/FM-Resources/Budget/Air-Force-Presidents-Budget-FY26/"}
    ]
  };

  // ============================================================
  // SERVICE COLORS MAP
  // ============================================================
  const SERVICE_COLORS = {
    navy: "#4488cc",
    army: "#88aa44",
    airforce: "#6688dd",
    spaceforce: "#aaaacc",
    defensewide: "#ccaa44"
  };

  const SERVICE_LABELS = {
    navy: "Navy",
    army: "Army",
    airforce: "Air Force",
    spaceforce: "Space Force",
    defensewide: "Defense-Wide"
  };

  // ============================================================
  // DOM REFS
  // ============================================================
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];
  const mainEl = $("#main");
  const contentEl = $("#content");
  const searchInput = $("#search");
  const searchResults = $("#searchResults");
  const searchResultsInner = $("#searchResultsInner");
  const sidebar = $("#sidebar");
  const sidebarOverlay = $("#sidebarOverlay");
  const hamburger = $("#hamburger");
  const densityToggle = $("#densityToggle");

  let currentView = "overview";
  let currentPeoId = null;
  let isCompact = false;

  // ============================================================
  // TICKER BAR
  // ============================================================
  function initTicker() {
    const items = [
      "DOD FY26: $961.6B",
      "RDT&E: $179.1B <span class='ticker-up'>▲27%</span>",
      "PROCUREMENT: ~$205B",
      "SPACE FORCE: $39.9B <span class='ticker-up'>▲36%</span>",
      "NUCLEAR: ~$62B",
      "NAVY: $292.2B <span class='ticker-up'>▲13%</span>",
      "AIR FORCE: $209.6B <span class='ticker-up'>▲11%</span>",
      "ARMY: $197.4B <span class='ticker-up'>▲6%</span>",
      "F-47 NGAD: $3.5B",
      "B-21 RAIDER: $10.3B",
      "COLUMBIA SSBN: $11.2B",
      "GOLDEN DOME: $25B",
      "AUTONOMY: $13.4B DOD-WIDE"
    ];
    const sep = '<span class="ticker-bar__sep">│</span>';
    const content = items.map(i => `<span class="ticker-bar__item">${i}</span>`).join(sep);
    const tickerContent = $("#tickerContent");
    // Duplicate for seamless scroll
    tickerContent.innerHTML = content + sep + content;
  }

  // ============================================================
  // PEO COUNT BADGES
  // ============================================================
  function initPeoBadges() {
    for (const [branch, peos] of Object.entries(DATA)) {
      const badge = $(`#badge-${branch}`);
      if (badge) badge.textContent = peos.length;
    }
  }

  // ============================================================
  // HELPER: Parse budget string to number (billions)
  // ============================================================
  function parseBudget(str) {
    if (!str) return 0;
    const clean = str.replace(/[~$,>]/g, "").trim();
    const match = clean.match(/([\d.]+)\s*B/i);
    if (match) return parseFloat(match[1]);
    const matchM = clean.match(/([\d.]+)\s*M/i);
    if (matchM) return parseFloat(matchM[1]) / 1000;
    return 0;
  }

  // ============================================================
  // HELPER: Parse % change
  // ============================================================
  function parseChange(str) {
    if (!str) return 0;
    if (str.includes("flat")) return 0;
    const match = str.match(/([+-]?[\d.]+)%/);
    return match ? parseFloat(match[1]) : 0;
  }

  // ============================================================
  // HELPER: Status classification
  // ============================================================
  function classifyStatus(status) {
    const s = status.toLowerCase();
    if (s.includes("production") || s.includes("operational") || s.includes("fielding") || s.includes("commissioned") || s.includes("in service") || s.includes("deployed") || s.includes("fielded") || s.includes("active")) return "green";
    if (s.includes("development") || s.includes("design") || s.includes("test") || s.includes("prototype") || s.includes("concept") || s.includes("r&d") || s.includes("ramp") || s.includes("integration") || s.includes("modernization") || s.includes("upgrade")) return "amber";
    if (s.includes("delay") || s.includes("paused") || s.includes("restructure") || s.includes("retire") || s.includes("wind-down") || s.includes("scaled back") || s.includes("cancelled") || s.includes("deferred")) return "red";
    if (s.includes("classified") || s.includes("tbd") || s.includes("included")) return "gray";
    return "amber";
  }

  // ============================================================
  // VIS: Sparkline YoY bar
  // ============================================================
  function renderSparkline(changeStr) {
    const val = parseChange(changeStr);
    const maxPct = 40;
    const width = Math.min(Math.abs(val) / maxPct * 100, 100);
    const dir = val > 0 ? "up" : val < 0 ? "down" : "flat";
    const label = val === 0 ? "~FLAT" : changeStr;

    return `<span class="sparkline-bar">
      <span class="sparkline-bar__track">
        <span class="sparkline-bar__fill sparkline-bar__fill--${dir}" style="width:${width}%"></span>
      </span>
      <span class="sparkline-bar__label sparkline-bar__label--${dir}">${label}</span>
    </span>`;
  }

  // ============================================================
  // VIS: Horizontal bar chart (service budgets)
  // ============================================================
  function renderServiceBudgetChart() {
    const data = [
      {label: "NAVY", fy26: 292.2, fy25: 257.6, color: SERVICE_COLORS.navy},
      {label: "AIR FORCE", fy26: 209.6, fy25: 188.1, color: SERVICE_COLORS.airforce},
      {label: "ARMY", fy26: 197.4, fy25: 185.8, color: SERVICE_COLORS.army},
      {label: "DEFENSE-WIDE", fy26: 170.9, fy25: 170.0, color: SERVICE_COLORS.defensewide},
      {label: "SPACE FORCE", fy26: 39.9, fy25: 29.4, color: SERVICE_COLORS.spaceforce}
    ];
    const max = 300;
    return `<div class="bar-chart">${data.map(d => {
      const w26 = (d.fy26 / max * 100).toFixed(1);
      const w25 = (d.fy25 / max * 100).toFixed(1);
      return `<div class="bar-chart__row">
        <span class="bar-chart__label">${d.label}</span>
        <span class="bar-chart__track">
          <span class="bar-chart__compare" style="width:${w25}%;border-color:${d.color}"></span>
          <span class="bar-chart__fill" style="width:${w26}%;background:${d.color}"></span>
        </span>
        <span class="bar-chart__value">$${d.fy26}B</span>
      </div>`;
    }).join("")}</div>
    <div style="font-size:9px;color:#555;margin-top:4px;text-transform:uppercase;letter-spacing:0.04em">
      SOLID = FY26 │ OUTLINE = FY25
    </div>`;
  }

  // ============================================================
  // VIS: RDT&E Stacked bars
  // ============================================================
  function renderRdteStackedBars() {
    const data = BUDGET_OVERVIEW.rdteBreakdown.filter(r => r.service !== "TOTAL");
    const max = 65;
    const colorMap = {
      "Air Force": SERVICE_COLORS.airforce,
      "Defense-Wide": SERVICE_COLORS.defensewide,
      "Space Force": SERVICE_COLORS.spaceforce,
      "Navy": SERVICE_COLORS.navy,
      "Army": SERVICE_COLORS.army
    };
    return `<div class="bar-chart">${data.map(d => {
      const base = parseBudget(d.fy26base);
      const recon = parseBudget(d.fy26recon);
      const total = base + recon;
      const wBase = (base / max * 100).toFixed(1);
      const wRecon = (recon / max * 100).toFixed(1);
      const color = colorMap[d.service] || "#888";
      return `<div class="bar-chart__row">
        <span class="bar-chart__label">${d.service.toUpperCase()}</span>
        <span class="stacked-bar__track">
          <span class="stacked-bar__segment" style="width:${wBase}%;background:${color}"></span>
          <span class="stacked-bar__segment stacked-bar__segment--hatched" style="width:${wRecon}%;background:${color}"></span>
        </span>
        <span class="bar-chart__value">$${total.toFixed(1)}B</span>
      </div>`;
    }).join("")}</div>
    <div style="font-size:9px;color:#555;margin-top:4px;text-transform:uppercase;letter-spacing:0.04em">
      SOLID = BASE BUDGET │ HATCHED = RECONCILIATION
    </div>`;
  }

  // ============================================================
  // VIS: Budget Treemap (CSS grid)
  // ============================================================
  function renderBudgetTreemap() {
    const items = [
      {name:"NAVY",value:292.2,color:SERVICE_COLORS.navy},
      {name:"AIR FORCE",value:209.6,color:SERVICE_COLORS.airforce},
      {name:"ARMY",value:197.4,color:SERVICE_COLORS.army},
      {name:"DEFENSE-WIDE",value:170.9,color:SERVICE_COLORS.defensewide},
      {name:"SPACE FORCE",value:39.9,color:SERVICE_COLORS.spaceforce},
      {name:"MDA",value:13.2,color:"#cc6644"},
      {name:"DARPA",value:4.9,color:"#8866aa"},
      {name:"SOCOM",value:2.3,color:"#669966"}
    ];
    const total = items.reduce((s, i) => s + i.value, 0);
    // Use a CSS grid with column spans proportional to value
    // Simplified: 2-row layout
    return `<div class="treemap" style="grid-template-columns:repeat(20,1fr);grid-template-rows:1fr 1fr;">
      <div class="treemap__cell" style="grid-column:span 6;background:${items[0].color}33;border-color:${items[0].color}55"><span class="treemap__cell-name">${items[0].name}</span><span class="treemap__cell-value">$${items[0].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 5;background:${items[1].color}33;border-color:${items[1].color}55"><span class="treemap__cell-name">${items[1].name}</span><span class="treemap__cell-value">$${items[1].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 5;background:${items[2].color}33;border-color:${items[2].color}55"><span class="treemap__cell-name">${items[2].name}</span><span class="treemap__cell-value">$${items[2].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 4;background:${items[3].color}33;border-color:${items[3].color}55"><span class="treemap__cell-name">${items[3].name}</span><span class="treemap__cell-value">$${items[3].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 6;background:${items[3].color}33;border-color:${items[3].color}55"><span class="treemap__cell-name">DEF-WIDE (CONT.)</span><span class="treemap__cell-value">&nbsp;</span></div>
      <div class="treemap__cell" style="grid-column:span 5;background:${items[4].color}33;border-color:${items[4].color}55"><span class="treemap__cell-name">${items[4].name}</span><span class="treemap__cell-value">$${items[4].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 4;background:${items[5].color}33;border-color:${items[5].color}55"><span class="treemap__cell-name">${items[5].name}</span><span class="treemap__cell-value">$${items[5].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 3;background:${items[6].color}33;border-color:${items[6].color}55"><span class="treemap__cell-name">${items[6].name}</span><span class="treemap__cell-value">$${items[6].value}B</span></div>
      <div class="treemap__cell" style="grid-column:span 2;background:${items[7].color}33;border-color:${items[7].color}55"><span class="treemap__cell-name">${items[7].name}</span><span class="treemap__cell-value">$${items[7].value}B</span></div>
    </div>
    <div style="font-size:9px;color:#555;margin-top:4px;text-transform:uppercase;letter-spacing:0.04em">
      FY2026 BUDGET ALLOCATION │ AREA ∝ BUDGET SIZE │ TOTAL: $961.6B
    </div>`;
  }

  // ============================================================
  // VIS: Budget Context Bar (PEO detail)
  // ============================================================
  function renderBudgetContextBar(peo, branch) {
    const serviceTotals = {
      navy: 292.2, army: 197.4, airforce: 209.6, spaceforce: 39.9, defensewide: 170.9
    };
    const peoBudget = parseBudget(peo.budget);
    const serviceTotal = serviceTotals[branch] || 200;
    if (peoBudget <= 0) return "";
    const pct = Math.min((peoBudget / serviceTotal) * 100, 100);
    const color = SERVICE_COLORS[branch] || "#888";
    return `<div class="budget-context-bar">
      <div class="budget-context-bar__fill" style="width:${pct.toFixed(1)}%;background:${color}"></div>
      <div class="budget-context-bar__label">${peo.budget} = ${pct.toFixed(1)}% OF ${SERVICE_LABELS[branch] ? SERVICE_LABELS[branch].toUpperCase() : branch.toUpperCase()} ($${serviceTotal}B)</div>
    </div>`;
  }

  // ============================================================
  // SIDEBAR TREE POPULATION
  // ============================================================
  function populateSidebar() {
    for (const [branch, peos] of Object.entries(DATA)) {
      const container = $(`#${branch}-children`);
      if (!container) continue;
      peos.forEach(peo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = "sidebar__child-btn";
        btn.textContent = peo.name;
        btn.dataset.peoId = peo.id;
        btn.dataset.branch = branch;
        btn.addEventListener("click", () => selectPeo(branch, peo.id));
        li.appendChild(btn);
        container.appendChild(li);
      });
    }
  }

  // Branch toggle
  function setupBranchToggles() {
    $$(".sidebar__branch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        if (target === "overview") {
          showOverview();
          return;
        }
        const children = $(`#${target}-children`);
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !isOpen);
        children.classList.toggle("sidebar__children--open", !isOpen);
      });
    });
  }

  function setActiveSidebar(branch, peoId) {
    $$(".sidebar__branch-btn--active").forEach(el => el.classList.remove("sidebar__branch-btn--active"));
    $$(".sidebar__child-btn--active").forEach(el => el.classList.remove("sidebar__child-btn--active"));

    if (branch === "overview") {
      const btn = $('[data-target="overview"]');
      if (btn) btn.classList.add("sidebar__branch-btn--active");
    } else {
      const branchBtn = $(`[data-target="${branch}"]`);
      if (branchBtn) {
        branchBtn.classList.add("sidebar__branch-btn--active");
        branchBtn.setAttribute("aria-expanded", "true");
        const children = $(`#${branch}-children`);
        if (children) children.classList.add("sidebar__children--open");
      }
      if (peoId) {
        const childBtn = $(`[data-peo-id="${peoId}"]`);
        if (childBtn) childBtn.classList.add("sidebar__child-btn--active");
      }
    }
  }

  // ============================================================
  // VIEWS
  // ============================================================
  function showOverview() {
    currentView = "overview";
    currentPeoId = null;
    setActiveSidebar("overview", null);
    closeMobileSidebar();
    renderOverview();
    mainEl.scrollTop = 0;
  }

  function selectPeo(branch, peoId) {
    currentView = "peo";
    currentPeoId = peoId;
    setActiveSidebar(branch, peoId);
    closeMobileSidebar();
    const peo = DATA[branch].find(p => p.id === peoId);
    if (peo) renderPeoDetail(peo, branch);
    mainEl.scrollTop = 0;
  }

  // ============================================================
  // RENDER: Budget Overview
  // ============================================================
  function renderOverview() {
    const b = BUDGET_OVERVIEW;
    let html = `
      <div class="section">
        <div class="section__header"><h2 class="section__title">FY2026 Service Budget Comparison</h2></div>
        <div class="section__body">
          ${renderServiceBudgetChart()}
          <div style="height:12px"></div>
          <table class="data-table overview-table">
            <thead><tr><th>SERVICE / COMPONENT</th><th>FY2025</th><th>FY2026</th><th>YOY CHANGE</th></tr></thead>
            <tbody>
              ${b.serviceComparison.map(r => `<tr class="${r.service === 'TOTAL DoD' ? 'row--total' : ''}"><td>${r.service.toUpperCase()}</td><td class="mono">${r.fy25}</td><td class="mono">${r.fy26}</td><td>${renderSparkline(r.change)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <div class="section__header"><h2 class="section__title">RDT&E Breakdown by Service</h2></div>
        <div class="section__body">
          ${renderRdteStackedBars()}
          <div style="height:12px"></div>
          <table class="data-table overview-table">
            <thead><tr><th>SERVICE</th><th>FY2025</th><th>FY2026 BASE</th><th>RECONCILIATION</th><th>FY2026 TOTAL</th></tr></thead>
            <tbody>
              ${b.rdteBreakdown.map(r => `<tr class="${r.service === 'TOTAL' ? 'row--total' : ''}"><td>${r.service.toUpperCase()}</td><td class="mono">${r.fy25}</td><td class="mono">${r.fy26base}</td><td class="mono">${r.fy26recon}</td><td class="mono">${r.fy26total}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <div class="section__header"><h2 class="section__title">Budget Allocation Overview</h2></div>
        <div class="section__body">
          ${renderBudgetTreemap()}
        </div>
      </div>
      <div class="section">
        <div class="section__header"><h2 class="section__title">Procurement Highlights</h2></div>
        <div class="section__body">
          <ul class="priorities">${b.procurementHighlights.map(h => `<li>${h}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="section">
        <div class="section__header"><h2 class="section__title">Official Budget Documents</h2></div>
        <div class="section__body">
          <div class="budget-links">
            ${b.budgetLinks.map(l => `<a class="budget-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>`).join("")}
          </div>
        </div>
      </div>`;
    contentEl.innerHTML = html;
  }

  // ============================================================
  // RENDER: PEO Detail
  // ============================================================
  function renderPeoDetail(peo, branch) {
    const badgeClass = `badge--${branch}`;
    const headerClass = `peo-header--${branch}`;
    const branchLabel = SERVICE_LABELS[branch] || branch;

    let html = `
      ${renderBudgetContextBar(peo, branch)}
      <div class="peo-header ${headerClass}">
        <div class="peo-header__info">
          <h2 class="peo-header__name">${peo.name}</h2>
          <div class="peo-header__full">${peo.fullName}</div>
          <div class="peo-header__meta">
            <span class="peo-header__meta-item"><strong>PARENT:</strong> ${peo.parent}</span>
            <span class="peo-header__meta-item"><strong>LOCATION:</strong> ${peo.location}</span>
          </div>
        </div>
        <span class="section__badge ${badgeClass}">${branchLabel.toUpperCase()}</span>
      </div>`;

    // Budget
    html += `<div class="budget-row">
      <div class="budget-card"><div class="budget-card__label">ESTIMATED BUDGET</div><div class="budget-card__value">${peo.budget}</div><div class="budget-card__note">${peo.budgetNote}</div></div>
    </div>`;

    // Categories
    if (peo.categories.length) {
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Capability Areas / Mission</h3></div>
        <div class="section__body"><div class="categories">${peo.categories.map(c => `<span class="category-tag">${c}</span>`).join("")}</div></div></div>`;
    }

    // Key Programs with status indicators
    if (peo.keyPrograms.length) {
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Key Programs</h3></div>
        <div class="section__body"><table class="data-table"><thead><tr><th>PROGRAM</th><th>STATUS</th><th>BUDGET / NOTES</th></tr></thead><tbody>
        ${peo.keyPrograms.map(p => {
          const statusClass = classifyStatus(p.status);
          return `<tr><td><strong>${p.name}</strong></td><td><span class="status-indicator"><span class="status-dot status-dot--${statusClass}"></span>${p.status}</span></td><td class="mono">${p.budget}</td></tr>`;
        }).join("")}
        </tbody></table></div></div>`;
    }

    // Modernization
    if (peo.modernization.length) {
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Modernization Priorities</h3></div>
        <div class="section__body"><ul class="priorities">${peo.modernization.map(m => `<li>${m}</li>`).join("")}</ul></div></div>`;
    }

    // Sub-Offices
    if (peo.subOffices.length) {
      const soId = `so-${peo.id}`;
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Sub-Offices (${peo.subOffices.length})</h3></div>
        <div class="section__body">
          <button class="suboffice-toggle" aria-expanded="false" data-toggle="${soId}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
            SHOW ALL SUB-OFFICES
          </button>
          <div class="suboffice-content" id="${soId}">
            <table class="data-table"><thead><tr><th>OFFICE</th><th>NAME</th><th>DESCRIPTION</th></tr></thead><tbody>
            ${peo.subOffices.map(s => `<tr><td class="mono"><strong>${s.office}</strong></td><td>${s.name}</td><td>${s.desc}</td></tr>`).join("")}
            </tbody></table>
          </div>
        </div></div>`;
    }

    // Leadership
    if (peo.leadership.length) {
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Leadership</h3></div>
        <div class="section__body"><div class="leadership-list">
        ${peo.leadership.map(l => `<div class="leadership-item"><span class="leadership-item__name">${l.name}</span> <span class="leadership-item__title">${l.title}</span></div>`).join("")}
        </div></div></div>`;
    }

    // Budget Links
    if (peo.budgetLinks.length) {
      html += `<div class="section"><div class="section__header"><h3 class="section__title">Budget Documents</h3></div>
        <div class="section__body"><div class="budget-links">
        ${peo.budgetLinks.map(l => `<a class="budget-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>`).join("")}
        </div></div></div>`;
    }

    contentEl.innerHTML = html;

    // Sub-office toggles
    $$(".suboffice-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggle;
        const target = $(`#${id}`);
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        target.classList.toggle("suboffice-content--open", !expanded);
        btn.lastChild.textContent = expanded ? " SHOW ALL SUB-OFFICES" : " HIDE SUB-OFFICES";
      });
    });
  }

  // ============================================================
  // SEARCH
  // ============================================================
  let searchTimeout;
  function buildSearchIndex() {
    const index = [];
    for (const [branch, peos] of Object.entries(DATA)) {
      for (const peo of peos) {
        index.push({ type: "peo", branch, peo, text: `${peo.name} ${peo.fullName} ${peo.categories.join(" ")}`.toLowerCase() });
        for (const prog of peo.keyPrograms) {
          index.push({ type: "program", branch, peo, program: prog, text: `${prog.name} ${prog.status}`.toLowerCase() });
        }
        for (const so of peo.subOffices) {
          index.push({ type: "suboffice", branch, peo, suboffice: so, text: `${so.office} ${so.name} ${so.desc}`.toLowerCase() });
        }
      }
    }
    return index;
  }
  const searchIndex = buildSearchIndex();

  function doSearch(query) {
    if (!query || query.length < 2) { searchResults.hidden = true; return; }
    const q = query.toLowerCase();
    const results = searchIndex.filter(item => item.text.includes(q)).slice(0, 20);
    if (!results.length) { searchResults.hidden = true; return; }

    searchResultsInner.innerHTML = results.map(r => {
      let label = "", match = "";
      if (r.type === "peo") { label = `${r.peo.name} — ${r.peo.fullName}`; match = r.peo.categories.slice(0, 3).join(", "); }
      else if (r.type === "program") { label = r.program.name; match = `Program under ${r.peo.name}`; }
      else { label = `${r.suboffice.office} — ${r.suboffice.name}`; match = `Sub-office of ${r.peo.name}`; }
      return `<button class="search-result-item" data-branch="${r.branch}" data-peo="${r.peo.id}">
        <span class="search-result-item__peo">${highlightMatch(label, query)}</span>
        <span class="search-result-item__branch">${SERVICE_LABELS[r.branch] || r.branch}</span>
        <span class="search-result-item__match">${match}</span>
      </button>`;
    }).join("");
    searchResults.hidden = false;

    $$(".search-result-item", searchResultsInner).forEach(btn => {
      btn.addEventListener("click", () => {
        selectPeo(btn.dataset.branch, btn.dataset.peo);
        searchInput.value = "";
        searchResults.hidden = true;
      });
    });
  }

  function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) + `<mark>${text.slice(idx, idx + query.length)}</mark>` + text.slice(idx + query.length);
  }

  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => doSearch(searchInput.value.trim()), 150);
  });
  searchInput.addEventListener("focus", () => { if (searchInput.value.trim().length >= 2) doSearch(searchInput.value.trim()); });
  document.addEventListener("click", e => { if (!searchResults.contains(e.target) && e.target !== searchInput) searchResults.hidden = true; });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== searchInput) { e.preventDefault(); searchInput.focus(); }
    if (e.key === "Escape") { searchResults.hidden = true; searchInput.blur(); }
  });

  // ============================================================
  // MOBILE SIDEBAR
  // ============================================================
  function closeMobileSidebar() {
    sidebar.classList.remove("sidebar--open");
    sidebarOverlay.classList.remove("sidebar-overlay--open");
  }
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--open");
    sidebarOverlay.classList.toggle("sidebar-overlay--open");
  });
  sidebarOverlay.addEventListener("click", closeMobileSidebar);

  // ============================================================
  // DENSITY TOGGLE
  // ============================================================
  if (densityToggle) {
    densityToggle.addEventListener("click", () => {
      isCompact = !isCompact;
      document.body.classList.toggle("compact", isCompact);
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  initTicker();
  initPeoBadges();
  populateSidebar();
  setupBranchToggles();
  showOverview();

})();
