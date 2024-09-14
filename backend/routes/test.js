import express from 'express'
const app = express()

const PORT = 3000
app.get("/api/products",(req,res)=>{
    const product=[
        {
            "id": 1,
            "username": "jfawks0",
            "title": "Budget/Accounting Analyst II"
        },
        {
            "id": 2,
            "username": "gpratton1",
            "title": "Chemical Engineer"
        },
        {
            "id": 3,
            "username": "bbirchenough2",
            "title": "Professor"
        },
        {
            "id": 4,
            "username": "kbirtwell3",
            "title": "Occupational Therapist"
        },
        {
            "id": 5,
            "username": "ewollard4",
            "title": "Associate Professor"
        },
        {
            "id": 6,
            "username": "dotowey5",
            "title": "Developer IV"
        },
        {
            "id": 7,
            "username": "kohallihane6",
            "title": "Biostatistician III"
        },
        {
            "id": 8,
            "username": "mwontner7",
            "title": "Programmer II"
        },
        {
            "id": 9,
            "username": "pbockh8",
            "title": "Information Systems Manager"
        },
        {
            "id": 10,
            "username": "bkenset9",
            "title": "Compensation Analyst"
        },
        {
            "id": 11,
            "username": "frobynsa",
            "title": "Analog Circuit Design manager"
        },
        {
            "id": 12,
            "username": "pcorreab",
            "title": "VP Accounting"
        },
        {
            "id": 13,
            "username": "tdettmarc",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 14,
            "username": "csaggsd",
            "title": "VP Marketing"
        },
        {
            "id": 15,
            "username": "zmanselle",
            "title": "Quality Control Specialist"
        },
        {
            "id": 16,
            "username": "lmaccheynef",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 17,
            "username": "lbirthg",
            "title": "Geologist II"
        },
        {
            "id": 18,
            "username": "gbonarh",
            "title": "Quality Control Specialist"
        },
        {
            "id": 19,
            "username": "koatsi",
            "title": "Human Resources Manager"
        },
        {
            "id": 20,
            "username": "bruslinj",
            "title": "Research Associate"
        },
        {
            "id": 21,
            "username": "kbrayshawk",
            "title": "Web Designer III"
        },
        {
            "id": 22,
            "username": "gvandendaell",
            "title": "GIS Technical Architect"
        },
        {
            "id": 23,
            "username": "aconnellym",
            "title": "Marketing Assistant"
        },
        {
            "id": 24,
            "username": "membletonn",
            "title": "Payment Adjustment Coordinator"
        },
        {
            "id": 25,
            "username": "amarksono",
            "title": "Software Test Engineer I"
        },
        {
            "id": 26,
            "username": "jludmanp",
            "title": "Food Chemist"
        },
        {
            "id": 27,
            "username": "dchurnq",
            "title": "VP Marketing"
        },
        {
            "id": 28,
            "username": "vmattionir",
            "title": "Analyst Programmer"
        },
        {
            "id": 29,
            "username": "nflaritys",
            "title": "Research Assistant IV"
        },
        {
            "id": 30,
            "username": "swillimontt",
            "title": "Senior Developer"
        },
        {
            "id": 31,
            "username": "gcoolu",
            "title": "Desktop Support Technician"
        },
        {
            "id": 32,
            "username": "rtruslerv",
            "title": "Software Engineer II"
        },
        {
            "id": 33,
            "username": "aclemontw",
            "title": "Accounting Assistant I"
        },
        {
            "id": 34,
            "username": "tjeandeaux",
            "title": "Statistician I"
        },
        {
            "id": 35,
            "username": "aborrelly",
            "title": "Quality Control Specialist"
        },
        {
            "id": 36,
            "username": "sflohardz",
            "title": "Programmer Analyst III"
        },
        {
            "id": 37,
            "username": "aslaten10",
            "title": "Senior Quality Engineer"
        },
        {
            "id": 38,
            "username": "slancashire11",
            "title": "Food Chemist"
        },
        {
            "id": 39,
            "username": "targue12",
            "title": "Quality Engineer"
        },
        {
            "id": 40,
            "username": "ajuorio13",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 41,
            "username": "hculwen14",
            "title": "Office Assistant III"
        },
        {
            "id": 42,
            "username": "svanderbeek15",
            "title": "VP Marketing"
        },
        {
            "id": 43,
            "username": "cthurner16",
            "title": "Desktop Support Technician"
        },
        {
            "id": 44,
            "username": "fbenley17",
            "title": "Programmer II"
        },
        {
            "id": 45,
            "username": "iwickman18",
            "title": "Administrative Assistant III"
        },
        {
            "id": 46,
            "username": "ocana19",
            "title": "Operator"
        },
        {
            "id": 47,
            "username": "kroos1a",
            "title": "Technical Writer"
        },
        {
            "id": 48,
            "username": "fheaseman1b",
            "title": "Mechanical Systems Engineer"
        },
        {
            "id": 49,
            "username": "hvivians1c",
            "title": "Graphic Designer"
        },
        {
            "id": 50,
            "username": "ltampion1d",
            "title": "Internal Auditor"
        },
        {
            "id": 51,
            "username": "mgatrell1e",
            "title": "Web Developer II"
        },
        {
            "id": 52,
            "username": "tjannaway1f",
            "title": "Product Engineer"
        },
        {
            "id": 53,
            "username": "jbakhrushkin1g",
            "title": "Automation Specialist III"
        },
        {
            "id": 54,
            "username": "ptregien1h",
            "title": "VP Product Management"
        },
        {
            "id": 55,
            "username": "tcran1i",
            "title": "Senior Sales Associate"
        },
        {
            "id": 56,
            "username": "diacovielli1j",
            "title": "Food Chemist"
        },
        {
            "id": 57,
            "username": "jodonohue1k",
            "title": "Accounting Assistant II"
        },
        {
            "id": 58,
            "username": "randrichuk1l",
            "title": "VP Quality Control"
        },
        {
            "id": 59,
            "username": "ksaundercock1m",
            "title": "Developer III"
        },
        {
            "id": 60,
            "username": "pocarmody1n",
            "title": "Database Administrator III"
        },
        {
            "id": 61,
            "username": "cbrisson1o",
            "title": "Assistant Professor"
        },
        {
            "id": 62,
            "username": "jpetersen1p",
            "title": "Chief Design Engineer"
        },
        {
            "id": 63,
            "username": "misitt1q",
            "title": "Food Chemist"
        },
        {
            "id": 64,
            "username": "dmacguigan1r",
            "title": "Environmental Tech"
        },
        {
            "id": 65,
            "username": "iharborow1s",
            "title": "Legal Assistant"
        },
        {
            "id": 66,
            "username": "ceddowes1t",
            "title": "Physical Therapy Assistant"
        },
        {
            "id": 67,
            "username": "skynett1u",
            "title": "VP Marketing"
        },
        {
            "id": 68,
            "username": "ndade1v",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 69,
            "username": "rilive1w",
            "title": "Recruiting Manager"
        },
        {
            "id": 70,
            "username": "cgutcher1x",
            "title": "Desktop Support Technician"
        },
        {
            "id": 71,
            "username": "crolland1y",
            "title": "Administrative Officer"
        },
        {
            "id": 72,
            "username": "conge1z",
            "title": "Financial Advisor"
        },
        {
            "id": 73,
            "username": "srenad20",
            "title": "Physical Therapy Assistant"
        },
        {
            "id": 74,
            "username": "mgent21",
            "title": "Office Assistant II"
        },
        {
            "id": 75,
            "username": "ccauthra22",
            "title": "Operator"
        },
        {
            "id": 76,
            "username": "epointon23",
            "title": "Structural Engineer"
        },
        {
            "id": 77,
            "username": "sringham24",
            "title": "Dental Hygienist"
        },
        {
            "id": 78,
            "username": "erockwill25",
            "title": "Administrative Assistant II"
        },
        {
            "id": 79,
            "username": "hkullmann26",
            "title": "Electrical Engineer"
        },
        {
            "id": 80,
            "username": "askeemer27",
            "title": "Mechanical Systems Engineer"
        },
        {
            "id": 81,
            "username": "hmurch28",
            "title": "Systems Administrator IV"
        },
        {
            "id": 82,
            "username": "zdandison29",
            "title": "Occupational Therapist"
        },
        {
            "id": 83,
            "username": "ihumphrey2a",
            "title": "VP Marketing"
        },
        {
            "id": 84,
            "username": "grivilis2b",
            "title": "Programmer Analyst II"
        },
        {
            "id": 85,
            "username": "fcalderon2c",
            "title": "Engineer I"
        },
        {
            "id": 86,
            "username": "wdinehart2d",
            "title": "Actuary"
        },
        {
            "id": 87,
            "username": "eryam2e",
            "title": "Software Test Engineer I"
        },
        {
            "id": 88,
            "username": "aarkle2f",
            "title": "Staff Accountant II"
        },
        {
            "id": 89,
            "username": "mtingey2g",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 90,
            "username": "nhaukey2h",
            "title": "Dental Hygienist"
        },
        {
            "id": 91,
            "username": "sallingham2i",
            "title": "Paralegal"
        },
        {
            "id": 92,
            "username": "lsabbins2j",
            "title": "Graphic Designer"
        },
        {
            "id": 93,
            "username": "nmccloy2k",
            "title": "Database Administrator III"
        },
        {
            "id": 94,
            "username": "drimmington2l",
            "title": "Sales Representative"
        },
        {
            "id": 95,
            "username": "kstrangeway2m",
            "title": "Environmental Tech"
        },
        {
            "id": 96,
            "username": "fvazquez2n",
            "title": "Director of Sales"
        },
        {
            "id": 97,
            "username": "cjerdein2o",
            "title": "Safety Technician IV"
        },
        {
            "id": 98,
            "username": "ekovalski2p",
            "title": "Senior Developer"
        },
        {
            "id": 99,
            "username": "vmallord2q",
            "title": "Geologist III"
        },
        {
            "id": 100,
            "username": "spaniman2r",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 101,
            "username": "ssaltmarshe2s",
            "title": "Assistant Media Planner"
        },
        {
            "id": 102,
            "username": "aflather2t",
            "title": "Nurse Practicioner"
        },
        {
            "id": 103,
            "username": "gmcclinton2u",
            "title": "Internal Auditor"
        },
        {
            "id": 104,
            "username": "hholdin2v",
            "title": "Research Associate"
        },
        {
            "id": 105,
            "username": "lzieme2w",
            "title": "Assistant Professor"
        },
        {
            "id": 106,
            "username": "apilley2x",
            "title": "Computer Systems Analyst II"
        },
        {
            "id": 107,
            "username": "lmatticci2y",
            "title": "Web Developer III"
        },
        {
            "id": 108,
            "username": "rskeffington2z",
            "title": "Payment Adjustment Coordinator"
        },
        {
            "id": 109,
            "username": "gungerecht30",
            "title": "Professor"
        },
        {
            "id": 110,
            "username": "rlantiffe31",
            "title": "Safety Technician I"
        },
        {
            "id": 111,
            "username": "btatterton32",
            "title": "Staff Scientist"
        },
        {
            "id": 112,
            "username": "bprovest33",
            "title": "Software Engineer IV"
        },
        {
            "id": 113,
            "username": "jcapun34",
            "title": "Internal Auditor"
        },
        {
            "id": 114,
            "username": "lblankau35",
            "title": "Legal Assistant"
        },
        {
            "id": 115,
            "username": "dnaughton36",
            "title": "Financial Advisor"
        },
        {
            "id": 116,
            "username": "hkoenen37",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 117,
            "username": "rbruckshaw38",
            "title": "Information Systems Manager"
        },
        {
            "id": 118,
            "username": "gpoulsen39",
            "title": "Staff Scientist"
        },
        {
            "id": 119,
            "username": "gmenicomb3a",
            "title": "Senior Sales Associate"
        },
        {
            "id": 120,
            "username": "mstrang3b",
            "title": "Accounting Assistant I"
        },
        {
            "id": 121,
            "username": "ndowrey3c",
            "title": "Assistant Media Planner"
        },
        {
            "id": 122,
            "username": "ekift3d",
            "title": "Food Chemist"
        },
        {
            "id": 123,
            "username": "qdestoop3e",
            "title": "VP Accounting"
        },
        {
            "id": 124,
            "username": "utwidle3f",
            "title": "Information Systems Manager"
        },
        {
            "id": 125,
            "username": "losherin3g",
            "title": "Director of Sales"
        },
        {
            "id": 126,
            "username": "srive3h",
            "title": "Web Designer I"
        },
        {
            "id": 127,
            "username": "jliell3i",
            "title": "Associate Professor"
        },
        {
            "id": 128,
            "username": "velward3j",
            "title": "Executive Secretary"
        },
        {
            "id": 129,
            "username": "afantham3k",
            "title": "Nurse"
        },
        {
            "id": 130,
            "username": "lcopcote3l",
            "title": "Software Test Engineer I"
        },
        {
            "id": 131,
            "username": "sbullin3m",
            "title": "Sales Representative"
        },
        {
            "id": 132,
            "username": "kmeasham3n",
            "title": "Analog Circuit Design manager"
        },
        {
            "id": 133,
            "username": "mluten3o",
            "title": "Social Worker"
        },
        {
            "id": 134,
            "username": "ghughson3p",
            "title": "Director of Sales"
        },
        {
            "id": 135,
            "username": "rpaddon3q",
            "title": "Automation Specialist I"
        },
        {
            "id": 136,
            "username": "gjeckell3r",
            "title": "Community Outreach Specialist"
        },
        {
            "id": 137,
            "username": "glosseljong3s",
            "title": "Budget/Accounting Analyst III"
        },
        {
            "id": 138,
            "username": "dgoretti3t",
            "title": "Financial Advisor"
        },
        {
            "id": 139,
            "username": "bpaine3u",
            "title": "Community Outreach Specialist"
        },
        {
            "id": 140,
            "username": "srunge3v",
            "title": "Internal Auditor"
        },
        {
            "id": 141,
            "username": "jgynni3w",
            "title": "VP Quality Control"
        },
        {
            "id": 142,
            "username": "malden3x",
            "title": "Human Resources Manager"
        },
        {
            "id": 143,
            "username": "cwainscoat3y",
            "title": "Sales Representative"
        },
        {
            "id": 144,
            "username": "hbeagles3z",
            "title": "Research Nurse"
        },
        {
            "id": 145,
            "username": "rkermit40",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 146,
            "username": "hrosewarne41",
            "title": "Computer Systems Analyst III"
        },
        {
            "id": 147,
            "username": "jmorriss42",
            "title": "Marketing Manager"
        },
        {
            "id": 148,
            "username": "egiabuzzi43",
            "title": "Programmer Analyst II"
        },
        {
            "id": 149,
            "username": "jvallens44",
            "title": "Programmer III"
        },
        {
            "id": 150,
            "username": "mmacgahey45",
            "title": "Geologist III"
        },
        {
            "id": 151,
            "username": "fbirkmyr46",
            "title": "Computer Systems Analyst IV"
        },
        {
            "id": 152,
            "username": "cbanstead47",
            "title": "Accountant IV"
        },
        {
            "id": 153,
            "username": "nslyford48",
            "title": "Director of Sales"
        },
        {
            "id": 154,
            "username": "gbach49",
            "title": "Database Administrator IV"
        },
        {
            "id": 155,
            "username": "uchoulerton4a",
            "title": "Software Engineer IV"
        },
        {
            "id": 156,
            "username": "vjanodet4b",
            "title": "Accounting Assistant II"
        },
        {
            "id": 157,
            "username": "lshire4c",
            "title": "Automation Specialist I"
        },
        {
            "id": 158,
            "username": "aswallow4d",
            "title": "Senior Sales Associate"
        },
        {
            "id": 159,
            "username": "kricco4e",
            "title": "General Manager"
        },
        {
            "id": 160,
            "username": "echuter4f",
            "title": "Technical Writer"
        },
        {
            "id": 161,
            "username": "sbranchflower4g",
            "title": "Accounting Assistant II"
        },
        {
            "id": 162,
            "username": "tmalamore4h",
            "title": "Technical Writer"
        },
        {
            "id": 163,
            "username": "bdefrancisci4i",
            "title": "Professor"
        },
        {
            "id": 164,
            "username": "lplaide4j",
            "title": "VP Product Management"
        },
        {
            "id": 165,
            "username": "tdurkin4k",
            "title": "Help Desk Technician"
        },
        {
            "id": 166,
            "username": "tcatherick4l",
            "title": "Business Systems Development Analyst"
        },
        {
            "id": 167,
            "username": "cmangeon4m",
            "title": "Marketing Assistant"
        },
        {
            "id": 168,
            "username": "mdullard4n",
            "title": "Administrative Assistant IV"
        },
        {
            "id": 169,
            "username": "nthursfield4o",
            "title": "Cost Accountant"
        },
        {
            "id": 170,
            "username": "amassinger4p",
            "title": "Nurse Practicioner"
        },
        {
            "id": 171,
            "username": "ccragoe4q",
            "title": "Web Developer IV"
        },
        {
            "id": 172,
            "username": "csliman4r",
            "title": "Marketing Assistant"
        },
        {
            "id": 173,
            "username": "btessier4s",
            "title": "Marketing Assistant"
        },
        {
            "id": 174,
            "username": "rgomer4t",
            "title": "Analyst Programmer"
        },
        {
            "id": 175,
            "username": "wlewis4u",
            "title": "Account Coordinator"
        },
        {
            "id": 176,
            "username": "lpotte4v",
            "title": "GIS Technical Architect"
        },
        {
            "id": 177,
            "username": "hdarwent4w",
            "title": "Librarian"
        },
        {
            "id": 178,
            "username": "jlittlejohn4x",
            "title": "Project Manager"
        },
        {
            "id": 179,
            "username": "rgilberthorpe4y",
            "title": "Help Desk Technician"
        },
        {
            "id": 180,
            "username": "psatterfitt4z",
            "title": "Associate Professor"
        },
        {
            "id": 181,
            "username": "alednor50",
            "title": "Food Chemist"
        },
        {
            "id": 182,
            "username": "lblevin51",
            "title": "Chief Design Engineer"
        },
        {
            "id": 183,
            "username": "dbengall52",
            "title": "Professor"
        },
        {
            "id": 184,
            "username": "mlisett53",
            "title": "Actuary"
        },
        {
            "id": 185,
            "username": "ldeplacido54",
            "title": "Help Desk Operator"
        },
        {
            "id": 186,
            "username": "dmilliere55",
            "title": "Geologist I"
        },
        {
            "id": 187,
            "username": "ailliston56",
            "title": "Analyst Programmer"
        },
        {
            "id": 188,
            "username": "mferrarone57",
            "title": "Speech Pathologist"
        },
        {
            "id": 189,
            "username": "qdaily58",
            "title": "Accountant I"
        },
        {
            "id": 190,
            "username": "awestraw59",
            "title": "Web Designer III"
        },
        {
            "id": 191,
            "username": "lladds5a",
            "title": "Senior Sales Associate"
        },
        {
            "id": 192,
            "username": "shazelden5b",
            "title": "Project Manager"
        },
        {
            "id": 193,
            "username": "cedwards5c",
            "title": "Budget/Accounting Analyst II"
        },
        {
            "id": 194,
            "username": "yhadlington5d",
            "title": "Sales Associate"
        },
        {
            "id": 195,
            "username": "bphinnessy5e",
            "title": "VP Product Management"
        },
        {
            "id": 196,
            "username": "maustwick5f",
            "title": "Biostatistician I"
        },
        {
            "id": 197,
            "username": "obursnall5g",
            "title": "Developer IV"
        },
        {
            "id": 198,
            "username": "prosenbloom5h",
            "title": "Help Desk Operator"
        },
        {
            "id": 199,
            "username": "ssherrard5i",
            "title": "Media Manager III"
        },
        {
            "id": 200,
            "username": "mtrask5j",
            "title": "Accounting Assistant I"
        },
        {
            "id": 201,
            "username": "tdowdell5k",
            "title": "Financial Analyst"
        },
        {
            "id": 202,
            "username": "brawlins5l",
            "title": "Director of Sales"
        },
        {
            "id": 203,
            "username": "cdiamond5m",
            "title": "Librarian"
        },
        {
            "id": 204,
            "username": "twilflinger5n",
            "title": "Account Coordinator"
        },
        {
            "id": 205,
            "username": "lcreany5o",
            "title": "Assistant Manager"
        },
        {
            "id": 206,
            "username": "dbastard5p",
            "title": "Legal Assistant"
        },
        {
            "id": 207,
            "username": "rheinicke5q",
            "title": "VP Accounting"
        },
        {
            "id": 208,
            "username": "lkleeborn5r",
            "title": "Engineer II"
        },
        {
            "id": 209,
            "username": "lgamwell5s",
            "title": "Quality Engineer"
        },
        {
            "id": 210,
            "username": "egolden5t",
            "title": "Human Resources Assistant I"
        },
        {
            "id": 211,
            "username": "rsaxton5u",
            "title": "Geologist II"
        },
        {
            "id": 212,
            "username": "slush5v",
            "title": "Web Developer III"
        },
        {
            "id": 213,
            "username": "blanktree5w",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 214,
            "username": "tcarlon5x",
            "title": "Senior Sales Associate"
        },
        {
            "id": 215,
            "username": "lrayner5y",
            "title": "Senior Editor"
        },
        {
            "id": 216,
            "username": "aswoffer5z",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 217,
            "username": "abaddow60",
            "title": "Automation Specialist I"
        },
        {
            "id": 218,
            "username": "rmacdonagh61",
            "title": "Safety Technician III"
        },
        {
            "id": 219,
            "username": "gblew62",
            "title": "Senior Financial Analyst"
        },
        {
            "id": 220,
            "username": "dhardwell63",
            "title": "Senior Developer"
        },
        {
            "id": 221,
            "username": "ldelort64",
            "title": "Systems Administrator III"
        },
        {
            "id": 222,
            "username": "mbernetti65",
            "title": "GIS Technical Architect"
        },
        {
            "id": 223,
            "username": "imulford66",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 224,
            "username": "mclear67",
            "title": "Registered Nurse"
        },
        {
            "id": 225,
            "username": "ajekyll68",
            "title": "Programmer Analyst II"
        },
        {
            "id": 226,
            "username": "dsesser69",
            "title": "Recruiter"
        },
        {
            "id": 227,
            "username": "hdobson6a",
            "title": "Senior Financial Analyst"
        },
        {
            "id": 228,
            "username": "mchang6b",
            "title": "Food Chemist"
        },
        {
            "id": 229,
            "username": "obrechin6c",
            "title": "Computer Systems Analyst II"
        },
        {
            "id": 230,
            "username": "eabrahamian6d",
            "title": "Systems Administrator IV"
        },
        {
            "id": 231,
            "username": "rmontrose6e",
            "title": "Environmental Tech"
        },
        {
            "id": 232,
            "username": "acreasy6f",
            "title": "VP Quality Control"
        },
        {
            "id": 233,
            "username": "msproson6g",
            "title": "Junior Executive"
        },
        {
            "id": 234,
            "username": "dbrislen6h",
            "title": "Speech Pathologist"
        },
        {
            "id": 235,
            "username": "geliyahu6i",
            "title": "Nurse"
        },
        {
            "id": 236,
            "username": "iphillips6j",
            "title": "Product Engineer"
        },
        {
            "id": 237,
            "username": "eleathlay6k",
            "title": "Food Chemist"
        },
        {
            "id": 238,
            "username": "jbotterill6l",
            "title": "Information Systems Manager"
        },
        {
            "id": 239,
            "username": "fbrignall6m",
            "title": "Marketing Assistant"
        },
        {
            "id": 240,
            "username": "cmorgan6n",
            "title": "Systems Administrator II"
        },
        {
            "id": 241,
            "username": "dgulston6o",
            "title": "Statistician I"
        },
        {
            "id": 242,
            "username": "atoulson6p",
            "title": "Staff Scientist"
        },
        {
            "id": 243,
            "username": "dgareisr6q",
            "title": "Environmental Tech"
        },
        {
            "id": 244,
            "username": "cmcgilbon6r",
            "title": "Administrative Assistant I"
        },
        {
            "id": 245,
            "username": "lmckinnon6s",
            "title": "Marketing Assistant"
        },
        {
            "id": 246,
            "username": "saccum6t",
            "title": "Human Resources Assistant II"
        },
        {
            "id": 247,
            "username": "tszubert6u",
            "title": "Executive Secretary"
        },
        {
            "id": 248,
            "username": "aschneidar6v",
            "title": "Safety Technician II"
        },
        {
            "id": 249,
            "username": "ahugle6w",
            "title": "Accountant I"
        },
        {
            "id": 250,
            "username": "dhackly6x",
            "title": "Actuary"
        },
        {
            "id": 251,
            "username": "gburdikin6y",
            "title": "Programmer III"
        },
        {
            "id": 252,
            "username": "cwitherop6z",
            "title": "Programmer III"
        },
        {
            "id": 253,
            "username": "rfleisch70",
            "title": "Senior Developer"
        },
        {
            "id": 254,
            "username": "mkernar71",
            "title": "Accountant IV"
        },
        {
            "id": 255,
            "username": "tbarus72",
            "title": "Geologist III"
        },
        {
            "id": 256,
            "username": "gfawdrie73",
            "title": "Teacher"
        },
        {
            "id": 257,
            "username": "yboxill74",
            "title": "Senior Financial Analyst"
        },
        {
            "id": 258,
            "username": "gjosovich75",
            "title": "Web Designer III"
        },
        {
            "id": 259,
            "username": "ndunan76",
            "title": "Senior Developer"
        },
        {
            "id": 260,
            "username": "clowy77",
            "title": "Civil Engineer"
        },
        {
            "id": 261,
            "username": "iroycroft78",
            "title": "Staff Accountant III"
        },
        {
            "id": 262,
            "username": "ykippling79",
            "title": "General Manager"
        },
        {
            "id": 263,
            "username": "vgeldert7a",
            "title": "Project Manager"
        },
        {
            "id": 264,
            "username": "fsmails7b",
            "title": "Help Desk Technician"
        },
        {
            "id": 265,
            "username": "cshewry7c",
            "title": "Recruiting Manager"
        },
        {
            "id": 266,
            "username": "lantonacci7d",
            "title": "Web Developer III"
        },
        {
            "id": 267,
            "username": "gcordelle7e",
            "title": "Engineer III"
        },
        {
            "id": 268,
            "username": "theadland7f",
            "title": "Quality Engineer"
        },
        {
            "id": 269,
            "username": "svedenyakin7g",
            "title": "Desktop Support Technician"
        },
        {
            "id": 270,
            "username": "rhaws7h",
            "title": "Assistant Professor"
        },
        {
            "id": 271,
            "username": "ltollerton7i",
            "title": "VP Product Management"
        },
        {
            "id": 272,
            "username": "vforri7j",
            "title": "Desktop Support Technician"
        },
        {
            "id": 273,
            "username": "elees7k",
            "title": "Product Engineer"
        },
        {
            "id": 274,
            "username": "okarleman7l",
            "title": "Product Engineer"
        },
        {
            "id": 275,
            "username": "cmatyasik7m",
            "title": "Structural Engineer"
        },
        {
            "id": 276,
            "username": "tnelane7n",
            "title": "Computer Systems Analyst IV"
        },
        {
            "id": 277,
            "username": "dhayne7o",
            "title": "Tax Accountant"
        },
        {
            "id": 278,
            "username": "jharm7p",
            "title": "Account Representative IV"
        },
        {
            "id": 279,
            "username": "ayourell7q",
            "title": "VP Sales"
        },
        {
            "id": 280,
            "username": "bcortin7r",
            "title": "Quality Engineer"
        },
        {
            "id": 281,
            "username": "nllewellen7s",
            "title": "Data Coordinator"
        },
        {
            "id": 282,
            "username": "mscriven7t",
            "title": "Operator"
        },
        {
            "id": 283,
            "username": "apudner7u",
            "title": "Administrative Assistant III"
        },
        {
            "id": 284,
            "username": "cjellard7v",
            "title": "Librarian"
        },
        {
            "id": 285,
            "username": "fetridge7w",
            "title": "Health Coach II"
        },
        {
            "id": 286,
            "username": "ycohan7x",
            "title": "Marketing Manager"
        },
        {
            "id": 287,
            "username": "rgreenleaf7y",
            "title": "Junior Executive"
        },
        {
            "id": 288,
            "username": "rrosoni7z",
            "title": "Marketing Manager"
        },
        {
            "id": 289,
            "username": "charbidge80",
            "title": "Paralegal"
        },
        {
            "id": 290,
            "username": "gmuro81",
            "title": "Analyst Programmer"
        },
        {
            "id": 291,
            "username": "bpopland82",
            "title": "Operator"
        },
        {
            "id": 292,
            "username": "sfransson83",
            "title": "Environmental Tech"
        },
        {
            "id": 293,
            "username": "jdensell84",
            "title": "Financial Advisor"
        },
        {
            "id": 294,
            "username": "aclaeskens85",
            "title": "Financial Analyst"
        },
        {
            "id": 295,
            "username": "eeddie86",
            "title": "Environmental Specialist"
        },
        {
            "id": 296,
            "username": "scoils87",
            "title": "Administrative Officer"
        },
        {
            "id": 297,
            "username": "ahubatsch88",
            "title": "Junior Executive"
        },
        {
            "id": 298,
            "username": "gbampforth89",
            "title": "Marketing Assistant"
        },
        {
            "id": 299,
            "username": "aobradane8a",
            "title": "Developer II"
        },
        {
            "id": 300,
            "username": "cwelling8b",
            "title": "Help Desk Technician"
        },
        {
            "id": 301,
            "username": "emcglashan8c",
            "title": "Marketing Manager"
        },
        {
            "id": 302,
            "username": "alegat8d",
            "title": "Senior Editor"
        },
        {
            "id": 303,
            "username": "estanyan8e",
            "title": "Business Systems Development Analyst"
        },
        {
            "id": 304,
            "username": "charbidge8f",
            "title": "Teacher"
        },
        {
            "id": 305,
            "username": "wiaduccelli8g",
            "title": "Accountant I"
        },
        {
            "id": 306,
            "username": "esteynor8h",
            "title": "Budget/Accounting Analyst II"
        },
        {
            "id": 307,
            "username": "rstribling8i",
            "title": "Librarian"
        },
        {
            "id": 308,
            "username": "gdelort8j",
            "title": "Senior Quality Engineer"
        },
        {
            "id": 309,
            "username": "lbangle8k",
            "title": "Software Test Engineer III"
        },
        {
            "id": 310,
            "username": "sfiney8l",
            "title": "Financial Advisor"
        },
        {
            "id": 311,
            "username": "kpankhurst8m",
            "title": "Structural Engineer"
        },
        {
            "id": 312,
            "username": "wgwinnell8n",
            "title": "Pharmacist"
        },
        {
            "id": 313,
            "username": "rdulin8o",
            "title": "Senior Developer"
        },
        {
            "id": 314,
            "username": "sjenno8p",
            "title": "Research Associate"
        },
        {
            "id": 315,
            "username": "jharbour8q",
            "title": "Research Associate"
        },
        {
            "id": 316,
            "username": "rmacmanus8r",
            "title": "Structural Analysis Engineer"
        },
        {
            "id": 317,
            "username": "vducham8s",
            "title": "Senior Cost Accountant"
        },
        {
            "id": 318,
            "username": "nblachford8t",
            "title": "Environmental Tech"
        },
        {
            "id": 319,
            "username": "jbeckitt8u",
            "title": "Assistant Manager"
        },
        {
            "id": 320,
            "username": "lweed8v",
            "title": "Assistant Manager"
        },
        {
            "id": 321,
            "username": "amacgowing8w",
            "title": "Nurse"
        },
        {
            "id": 322,
            "username": "esangwin8x",
            "title": "Account Coordinator"
        },
        {
            "id": 323,
            "username": "kschwaiger8y",
            "title": "Environmental Specialist"
        },
        {
            "id": 324,
            "username": "mbeilby8z",
            "title": "Physical Therapy Assistant"
        },
        {
            "id": 325,
            "username": "kpursehouse90",
            "title": "Sales Associate"
        },
        {
            "id": 326,
            "username": "ldepke91",
            "title": "Engineer II"
        },
        {
            "id": 327,
            "username": "eknevett92",
            "title": "Geologist II"
        },
        {
            "id": 328,
            "username": "sguys93",
            "title": "Chemical Engineer"
        },
        {
            "id": 329,
            "username": "wkipping94",
            "title": "Internal Auditor"
        },
        {
            "id": 330,
            "username": "kpoulston95",
            "title": "Operator"
        },
        {
            "id": 331,
            "username": "etyght96",
            "title": "Chemical Engineer"
        },
        {
            "id": 332,
            "username": "gdunhill97",
            "title": "Research Associate"
        },
        {
            "id": 333,
            "username": "vgeffen98",
            "title": "Developer II"
        },
        {
            "id": 334,
            "username": "mgauntley99",
            "title": "Sales Associate"
        },
        {
            "id": 335,
            "username": "jleyman9a",
            "title": "Automation Specialist IV"
        },
        {
            "id": 336,
            "username": "mdinjes9b",
            "title": "Assistant Manager"
        },
        {
            "id": 337,
            "username": "rsherr9c",
            "title": "Occupational Therapist"
        },
        {
            "id": 338,
            "username": "naleksahkin9d",
            "title": "Professor"
        },
        {
            "id": 339,
            "username": "wledwich9e",
            "title": "Software Test Engineer II"
        },
        {
            "id": 340,
            "username": "ssterte9f",
            "title": "Legal Assistant"
        },
        {
            "id": 341,
            "username": "ebertolaccini9g",
            "title": "Developer IV"
        },
        {
            "id": 342,
            "username": "mduetschens9h",
            "title": "Civil Engineer"
        },
        {
            "id": 343,
            "username": "ijakoubek9i",
            "title": "Quality Engineer"
        },
        {
            "id": 344,
            "username": "jupex9j",
            "title": "Geological Engineer"
        },
        {
            "id": 345,
            "username": "smckeran9k",
            "title": "Electrical Engineer"
        },
        {
            "id": 346,
            "username": "jeagers9l",
            "title": "Legal Assistant"
        },
        {
            "id": 347,
            "username": "atrahearn9m",
            "title": "Operator"
        },
        {
            "id": 348,
            "username": "wdainton9n",
            "title": "Marketing Assistant"
        },
        {
            "id": 349,
            "username": "mbruhke9o",
            "title": "Speech Pathologist"
        },
        {
            "id": 350,
            "username": "jnewcome9p",
            "title": "VP Product Management"
        },
        {
            "id": 351,
            "username": "cperillo9q",
            "title": "Mechanical Systems Engineer"
        },
        {
            "id": 352,
            "username": "gsaunt9r",
            "title": "Social Worker"
        },
        {
            "id": 353,
            "username": "hmaxworthy9s",
            "title": "Sales Associate"
        },
        {
            "id": 354,
            "username": "jjerzak9t",
            "title": "Account Executive"
        },
        {
            "id": 355,
            "username": "acavie9u",
            "title": "Administrative Officer"
        },
        {
            "id": 356,
            "username": "tgenthner9v",
            "title": "Chemical Engineer"
        },
        {
            "id": 357,
            "username": "swherrit9w",
            "title": "Analyst Programmer"
        },
        {
            "id": 358,
            "username": "tchipp9x",
            "title": "Geological Engineer"
        },
        {
            "id": 359,
            "username": "ctwyford9y",
            "title": "Environmental Tech"
        },
        {
            "id": 360,
            "username": "grillett9z",
            "title": "Chief Design Engineer"
        },
        {
            "id": 361,
            "username": "adrainsa0",
            "title": "Research Assistant IV"
        },
        {
            "id": 362,
            "username": "elorraina1",
            "title": "Account Coordinator"
        },
        {
            "id": 363,
            "username": "cmaciluricka2",
            "title": "Senior Sales Associate"
        },
        {
            "id": 364,
            "username": "eciobotarua3",
            "title": "General Manager"
        },
        {
            "id": 365,
            "username": "sflippinia4",
            "title": "Senior Editor"
        },
        {
            "id": 366,
            "username": "opigdena5",
            "title": "Geological Engineer"
        },
        {
            "id": 367,
            "username": "kragsdalea6",
            "title": "Quality Engineer"
        },
        {
            "id": 368,
            "username": "ksimmansa7",
            "title": "Senior Sales Associate"
        },
        {
            "id": 369,
            "username": "gcostara8",
            "title": "Structural Engineer"
        },
        {
            "id": 370,
            "username": "cgrabera9",
            "title": "Administrative Assistant III"
        },
        {
            "id": 371,
            "username": "esturzakeraa",
            "title": "Web Designer IV"
        },
        {
            "id": 372,
            "username": "myakubowiczab",
            "title": "Internal Auditor"
        },
        {
            "id": 373,
            "username": "tehratac",
            "title": "Senior Quality Engineer"
        },
        {
            "id": 374,
            "username": "cdurandad",
            "title": "Statistician II"
        },
        {
            "id": 375,
            "username": "ppasslerae",
            "title": "Payment Adjustment Coordinator"
        },
        {
            "id": 376,
            "username": "ehallbordaf",
            "title": "Assistant Media Planner"
        },
        {
            "id": 377,
            "username": "ckonerdingag",
            "title": "Accountant IV"
        },
        {
            "id": 378,
            "username": "nisabellah",
            "title": "Nurse Practicioner"
        },
        {
            "id": 379,
            "username": "fbriskeyai",
            "title": "Financial Advisor"
        },
        {
            "id": 380,
            "username": "nissacovaj",
            "title": "Design Engineer"
        },
        {
            "id": 381,
            "username": "ctrevallionak",
            "title": "Administrative Assistant IV"
        },
        {
            "id": 382,
            "username": "vhartzogal",
            "title": "Design Engineer"
        },
        {
            "id": 383,
            "username": "cmessieram",
            "title": "Help Desk Operator"
        },
        {
            "id": 384,
            "username": "zsilsonan",
            "title": "Clinical Specialist"
        },
        {
            "id": 385,
            "username": "gsmethurstao",
            "title": "Analog Circuit Design manager"
        },
        {
            "id": 386,
            "username": "xstorchap",
            "title": "VP Product Management"
        },
        {
            "id": 387,
            "username": "hdoumicaq",
            "title": "Senior Financial Analyst"
        },
        {
            "id": 388,
            "username": "mclaxtonar",
            "title": "VP Product Management"
        },
        {
            "id": 389,
            "username": "vluesleyas",
            "title": "Staff Scientist"
        },
        {
            "id": 390,
            "username": "jpiroliniat",
            "title": "Staff Scientist"
        },
        {
            "id": 391,
            "username": "pstevensonau",
            "title": "Design Engineer"
        },
        {
            "id": 392,
            "username": "jioriav",
            "title": "Information Systems Manager"
        },
        {
            "id": 393,
            "username": "vtrangmaraw",
            "title": "Marketing Assistant"
        },
        {
            "id": 394,
            "username": "meastcottax",
            "title": "VP Quality Control"
        },
        {
            "id": 395,
            "username": "mjennaroyay",
            "title": "Paralegal"
        },
        {
            "id": 396,
            "username": "whoofeaz",
            "title": "Legal Assistant"
        },
        {
            "id": 397,
            "username": "gkenneyb0",
            "title": "General Manager"
        },
        {
            "id": 398,
            "username": "twittletonb1",
            "title": "Geological Engineer"
        },
        {
            "id": 399,
            "username": "paldersleyb2",
            "title": "Community Outreach Specialist"
        },
        {
            "id": 400,
            "username": "ddybaldb3",
            "title": "Research Associate"
        },
        {
            "id": 401,
            "username": "selcouxb4",
            "title": "Office Assistant II"
        },
        {
            "id": 402,
            "username": "erayntonb5",
            "title": "Occupational Therapist"
        },
        {
            "id": 403,
            "username": "mduellb6",
            "title": "Associate Professor"
        },
        {
            "id": 404,
            "username": "mcurtonb7",
            "title": "Junior Executive"
        },
        {
            "id": 405,
            "username": "cbudgenb8",
            "title": "Analog Circuit Design manager"
        },
        {
            "id": 406,
            "username": "lcrowthb9",
            "title": "Executive Secretary"
        },
        {
            "id": 407,
            "username": "llewsamba",
            "title": "Budget/Accounting Analyst III"
        },
        {
            "id": 408,
            "username": "vcramebb",
            "title": "Compensation Analyst"
        },
        {
            "id": 409,
            "username": "jwriterbc",
            "title": "Senior Developer"
        },
        {
            "id": 410,
            "username": "tagronbd",
            "title": "Dental Hygienist"
        },
        {
            "id": 411,
            "username": "dkreutzerbe",
            "title": "Account Representative III"
        },
        {
            "id": 412,
            "username": "mfrowdebf",
            "title": "Senior Developer"
        },
        {
            "id": 413,
            "username": "giannuzzibg",
            "title": "Marketing Manager"
        },
        {
            "id": 414,
            "username": "obeedlebh",
            "title": "Operator"
        },
        {
            "id": 415,
            "username": "rpoynerbi",
            "title": "Professor"
        },
        {
            "id": 416,
            "username": "cfleckneybj",
            "title": "Registered Nurse"
        },
        {
            "id": 417,
            "username": "klangabeerbk",
            "title": "Cost Accountant"
        },
        {
            "id": 418,
            "username": "oborgbl",
            "title": "Operator"
        },
        {
            "id": 419,
            "username": "jpoatbm",
            "title": "Sales Representative"
        },
        {
            "id": 420,
            "username": "bduhigbn",
            "title": "Electrical Engineer"
        },
        {
            "id": 421,
            "username": "yhedgemanbo",
            "title": "Research Associate"
        },
        {
            "id": 422,
            "username": "wcardenbp",
            "title": "Structural Engineer"
        },
        {
            "id": 423,
            "username": "twindousbq",
            "title": "Product Engineer"
        },
        {
            "id": 424,
            "username": "adolanbr",
            "title": "Business Systems Development Analyst"
        },
        {
            "id": 425,
            "username": "sdunleabs",
            "title": "Health Coach I"
        },
        {
            "id": 426,
            "username": "ztomaskovbt",
            "title": "Assistant Manager"
        },
        {
            "id": 427,
            "username": "fcourtneybu",
            "title": "Statistician IV"
        },
        {
            "id": 428,
            "username": "dworwoodbv",
            "title": "Programmer Analyst IV"
        },
        {
            "id": 429,
            "username": "egherardescibw",
            "title": "Safety Technician II"
        },
        {
            "id": 430,
            "username": "karmatagebx",
            "title": "Director of Sales"
        },
        {
            "id": 431,
            "username": "wkingsby",
            "title": "Payment Adjustment Coordinator"
        },
        {
            "id": 432,
            "username": "nsmallmanbz",
            "title": "Analog Circuit Design manager"
        },
        {
            "id": 433,
            "username": "alocklessc0",
            "title": "Computer Systems Analyst III"
        },
        {
            "id": 434,
            "username": "lcamiesc1",
            "title": "Media Manager II"
        },
        {
            "id": 435,
            "username": "jcannavanc2",
            "title": "Biostatistician II"
        },
        {
            "id": 436,
            "username": "lhabblec3",
            "title": "Marketing Manager"
        },
        {
            "id": 437,
            "username": "mdungatec4",
            "title": "Internal Auditor"
        },
        {
            "id": 438,
            "username": "ecliffc5",
            "title": "Teacher"
        },
        {
            "id": 439,
            "username": "sspurdlec6",
            "title": "Speech Pathologist"
        },
        {
            "id": 440,
            "username": "pgellc7",
            "title": "Data Coordinator"
        },
        {
            "id": 441,
            "username": "amccoughanc8",
            "title": "Research Nurse"
        },
        {
            "id": 442,
            "username": "bstetlyec9",
            "title": "Speech Pathologist"
        },
        {
            "id": 443,
            "username": "dtaffarelloca",
            "title": "Human Resources Manager"
        },
        {
            "id": 444,
            "username": "cblandcb",
            "title": "Developer I"
        },
        {
            "id": 445,
            "username": "gseegercc",
            "title": "Executive Secretary"
        },
        {
            "id": 446,
            "username": "cyesinincd",
            "title": "Financial Analyst"
        },
        {
            "id": 447,
            "username": "ndansiece",
            "title": "General Manager"
        },
        {
            "id": 448,
            "username": "tcantlecf",
            "title": "Electrical Engineer"
        },
        {
            "id": 449,
            "username": "vlacrouxcg",
            "title": "Technical Writer"
        },
        {
            "id": 450,
            "username": "mcolliberch",
            "title": "Programmer Analyst III"
        },
        {
            "id": 451,
            "username": "hbeverageci",
            "title": "Web Developer IV"
        },
        {
            "id": 452,
            "username": "dconlaundcj",
            "title": "Tax Accountant"
        },
        {
            "id": 453,
            "username": "nstaningck",
            "title": "Executive Secretary"
        },
        {
            "id": 454,
            "username": "sduvalcl",
            "title": "Nurse"
        },
        {
            "id": 455,
            "username": "jbracegirdlecm",
            "title": "Web Developer I"
        },
        {
            "id": 456,
            "username": "kbumfreycn",
            "title": "Legal Assistant"
        },
        {
            "id": 457,
            "username": "pkenerco",
            "title": "Nurse Practicioner"
        },
        {
            "id": 458,
            "username": "kdeeslycp",
            "title": "Legal Assistant"
        },
        {
            "id": 459,
            "username": "wabernethycq",
            "title": "Nuclear Power Engineer"
        },
        {
            "id": 460,
            "username": "jmarshamcr",
            "title": "Senior Sales Associate"
        },
        {
            "id": 461,
            "username": "slegertoncs",
            "title": "Software Test Engineer IV"
        },
        {
            "id": 462,
            "username": "lmathevetct",
            "title": "Web Designer IV"
        },
        {
            "id": 463,
            "username": "hricoaldcu",
            "title": "Assistant Manager"
        },
        {
            "id": 464,
            "username": "mdarwincv",
            "title": "Dental Hygienist"
        },
        {
            "id": 465,
            "username": "gmacqueencw",
            "title": "Teacher"
        },
        {
            "id": 466,
            "username": "jpunchcx",
            "title": "Programmer Analyst II"
        },
        {
            "id": 467,
            "username": "slovelacecy",
            "title": "Senior Cost Accountant"
        },
        {
            "id": 468,
            "username": "cwaltercz",
            "title": "Software Consultant"
        },
        {
            "id": 469,
            "username": "sparysiakd0",
            "title": "Budget/Accounting Analyst IV"
        },
        {
            "id": 470,
            "username": "rgwilymd1",
            "title": "Community Outreach Specialist"
        },
        {
            "id": 471,
            "username": "odarreed2",
            "title": "VP Product Management"
        },
        {
            "id": 472,
            "username": "rmcclintond3",
            "title": "Office Assistant IV"
        },
        {
            "id": 473,
            "username": "cbittlestoned4",
            "title": "Chief Design Engineer"
        },
        {
            "id": 474,
            "username": "rmibourned5",
            "title": "Actuary"
        },
        {
            "id": 475,
            "username": "srisend6",
            "title": "Senior Quality Engineer"
        },
        {
            "id": 476,
            "username": "rmarcumd7",
            "title": "Geologist I"
        },
        {
            "id": 477,
            "username": "afairbankd8",
            "title": "Quality Engineer"
        },
        {
            "id": 478,
            "username": "mfinnickd9",
            "title": "Budget/Accounting Analyst III"
        },
        {
            "id": 479,
            "username": "hmaddicksda",
            "title": "Marketing Manager"
        },
        {
            "id": 480,
            "username": "sbolderoedb",
            "title": "Research Assistant IV"
        },
        {
            "id": 481,
            "username": "mlillicrapdc",
            "title": "Assistant Professor"
        },
        {
            "id": 482,
            "username": "gsavidgedd",
            "title": "Systems Administrator I"
        },
        {
            "id": 483,
            "username": "rstroobantde",
            "title": "Executive Secretary"
        },
        {
            "id": 484,
            "username": "lloseldf",
            "title": "Chief Design Engineer"
        },
        {
            "id": 485,
            "username": "segginsondg",
            "title": "Mechanical Systems Engineer"
        },
        {
            "id": 486,
            "username": "fbernardodh",
            "title": "Recruiter"
        },
        {
            "id": 487,
            "username": "tthiolierdi",
            "title": "Software Consultant"
        },
        {
            "id": 488,
            "username": "dbastiedj",
            "title": "Financial Advisor"
        },
        {
            "id": 489,
            "username": "aschustldk",
            "title": "Civil Engineer"
        },
        {
            "id": 490,
            "username": "cmanesdl",
            "title": "Developer III"
        },
        {
            "id": 491,
            "username": "mfoulstonedm",
            "title": "Research Assistant I"
        },
        {
            "id": 492,
            "username": "eberkleydn",
            "title": "Actuary"
        },
        {
            "id": 493,
            "username": "owadsworthdo",
            "title": "VP Sales"
        },
        {
            "id": 494,
            "username": "cshinefielddp",
            "title": "Senior Financial Analyst"
        },
        {
            "id": 495,
            "username": "carstalldq",
            "title": "Actuary"
        },
        {
            "id": 496,
            "username": "asterndr",
            "title": "Accounting Assistant II"
        },
        {
            "id": 497,
            "username": "dshinglerds",
            "title": "Data Coordinator"
        },
        {
            "id": 498,
            "username": "mcaraherdt",
            "title": "Administrative Officer"
        },
        {
            "id": 499,
            "username": "hgrisleydu",
            "title": "Speech Pathologist"
        },
        {
            "id": 500,
            "username": "fphilippeauxdv",
            "title": "Marketing Manager"
        }
    ]


    if(req.query.search){
      const filterProducts=  product.filter(product=>product.title.includes(
            req.query.search
        ))
      res.send(filterProducts);
      return;
    }
      setTimeout(()=>{
        res.send(product)
      },1000);
})
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
