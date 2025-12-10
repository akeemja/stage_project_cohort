import pandas as pd

cols = [
    "Program", "Language", "Campus", "Theory", "Internship/Stage",
    "Days", "Schedule", "Hours/Week", "Start Date", "Integration"
]

data = [
["ECE Early Childhood Education","English","Laval","825 hrs (11 mths)","375 hrs (3 mths)","Monday–Friday","8:00–12:00",20,"April 2026 (TBC)","No"],
["ECE Early Childhood Education","English","Pointe-Claire","825 hrs (11 mths)","375 hrs (3 mths)","Monday–Friday","13:00–17:00",20,"TBC","No"],
["ECE Early Childhood Education","English","Pointe-Claire (Remote)","15 months","3 months","Monday–Thursday","18:30–22:30",16,"TBC","No"],
["ECE Early Childhood Education","French","Longueuil","15 months","3 months","Lundi–Jeudi","18h30–22h30",16,"26 Jan 2026","No"],
["ECE Early Childhood Education","English","Montreal","15 months","3 months","Fri–Sun","Fri 18:30–22:30; Sat/Sun 8:00–14:00",16,"TBC","No"],

["SPECIAL CARE COUNSELLING (SCC)","English","Pointe-Claire (Remote)","1095 hrs (14 mths)","990 hrs (8 mths)","Monday–Friday","8:00–12:00",20,"29 Sept 2025","Oct 16, Nov 6"],
["SPECIAL CARE COUNSELLING (SCC)","French","St-Léonard","1095 hrs (14 mths)","990 hrs (8 mths)","Lundi–Jeudi","9h00–13h00",20,"27 Oct 2025","Oct 16, Nov 6"],
["SPECIAL CARE COUNSELLING (SCC)","English","Montreal","1095 hrs (14 mths)","990 hrs (8 mths)","Monday–Friday","13:00–17:00",20,"TBC","No"],
["SPECIAL CARE COUNSELLING (SCC)","English","St-Léonard","1095 hrs (14 mths)","990 hrs (8 mths)","Monday–Friday","18:30–22:30",20,"March 2026 (TBC)","No"],
["SPECIAL CARE COUNSELLING (SCC)","English","Longueuil","1095 hrs (14 mths)","990 hrs (8 mths)","Fri–Sun","Fri 18:30–22:30; Sat/Sun 8:00–17:00",20,"TBC","No"],

["Techniques d’Éducation Spécialisée JNC.1U","French","Montreal","TBC","TBC","Lundi–Vendredi","18h30–22h30","20","TBC","No"],
["Techniques d’Éducation Spécialisée JNC.1U","French","St-Léonard","TBC","TBC","Lundi–Vendredi","8h00–12h00","20","TBC","No"],

["GFI Financial Management","English","Longueuil","11 months","3 months","Monday–Friday","8:00–12:00",20,"3 Nov 2025","Continuous"],
["GFI Financial Management","English","Laval","14 months","3 months","Monday–Thursday","18:30–22:30",16,"3 Nov 2025","Continuous"],
["GFI Financial Management","French","Montreal","14 months","3 months","Lundi–Jeudi","13h00–17h00",16,"TBC","Continuous"],
["GFI Financial Management","French","St-Léonard","14 months","3 months","Lundi–Jeudi","18h30–22h30",16,"29 Sept","16 Oct"],

["PL – Paralegal Technology","English","Laval","1200 hrs (15 mths)","510 hrs (4 mths)","Monday–Friday","8:00–12:00",20,"23 Feb 2026","No"],
["PL – Paralegal Technology","English","Pointe-Claire","1200 hrs","510 hrs","Monday–Friday","13:00–17:00",20,"TBC","No"],
["PL – Paralegal Technology","English","Pointe-Claire (Remote)","1200 hrs","510 hrs","Monday–Friday","18:30–22:30",20,"TBC","No"],
["PL – Paralegal Technology","French","Longueuil","1200 hrs","510 hrs","Lundi–Vendredi","18h00–22h00",20,"26 Jan 2026","Regional"],
["PL – Paralegal Technology","French","Montreal","1200 hrs","510 hrs","Lundi–Vendredi","8h00–13h00",20,"1 Oct 2025","Regional"],

["MOA – Medical Office Administrator","English","Pointe-Claire (Remote)","840 hrs (10 mths)","240 hrs","Monday–Thursday","13:00–17:00",16,"5 Jan 2026","Continuous"],
["MOA – Medical Office Administrator","English","St-Léonard","840 hrs","240 hrs","Monday–Thursday","18:30–22:30",20,"TBC","Continuous"],
["MOA – Medical Office Administrator","English","Montreal","840 hrs (13 mths)","240 hrs","Fri–Sun","Fri 18:30–22:30; Sat/Sun 8:00–14:00",16,"Continuous","Continuous"],
["MOA – Medical Office Administrator","French","St-Léonard","840 hrs","240 hrs","Lundi–Jeudi","9h00–13h00",20,"TBC","Continuous"],

["WEB DESIGN","English","Longueuil","1200 hrs (18 mths)","None","Monday–Thursday","8:00–12:00",16,"TBC","Continuous"],
["WEB DESIGN","English","Montreal","1200 hrs","None","Monday–Thursday","18:30–22:30",16,"27 Apr 2026","Continuous"],
["WEB DESIGN","French","St-Léonard","1200 hrs","None","Samedi–Dimanche","8h00–17h00",16,"TBC","Continuous"],
["WEB DESIGN","French","Longueuil","1200 hrs","None","Lundi–Jeudi","8h00–12h00",16,"TBC","Continuous"],

["Social Media Management","English","Laval","1080 hrs (17 mths)","240 hrs (12 weeks)","Monday–Thursday","8:00–12:00",16,"27 Nov","Continuous"],
["Social Media Management","English","Montreal","1080 hrs","240 hrs","Fri–Sun","Fri 18:30–22:30; Sat/Sun 8:00–14:00",16,"TBC","Continuous"],

["Cybersecurity Specialist","English","St-Léonard","1185 hrs (18.5 mths)","240 hrs (3 mths)","Monday–Thursday","8:00–12:30",16,"TBC","No"],
["Cybersecurity Specialist","English","Laval","1185 hrs","240 hrs","Monday–Thursday","18:30–22:30",16,"TBC","No"],
["Cybersecurity Specialist","English","Pointe-Claire","1185 hrs","240 hrs","Sat–Sun","8:00–17:00",16,"24 Jan 2026","No"],
["Cybersecurity Specialist","French","Pointe-Claire (Remote)","1185 hrs","240 hrs","Lundi–Jeudi","18h30–22h30",16,"TBC","No"],

["NTIS – Computer Network Management","English","Longueuil","1170 hrs (18 mths)","240 hrs (3 mths)","Monday–Thursday","8:00–12:00",16,"Weekly Intakes","Continuous"],
["NTIS – Computer Network Management","English","Montreal","1170 hrs","240 hrs","Monday–Thursday","13:00–17:00",16,"Weekly Intakes","Continuous"],
["NTIS – Computer Network Management","English","Pointe-Claire (Remote)","1170 hrs","240 hrs","Monday–Thursday","18:30–22:30",16,"Weekly Intakes","Continuous"],

["PAIS – Programmer Analyst","English","St-Léonard","1140 hrs (18 mths)","270 hrs (3 mths)","Monday–Thursday","8:00–12:00",16,"Weekly Intakes","Continuous"],
["PAIS – Programmer Analyst","English","Montreal","1140 hrs","270 hrs","Monday–Thursday","13:00–17:00",16,"Weekly Intakes","Continuous"],
["PAIS – Programmer Analyst","English","St-Léonard","1140 hrs","270 hrs","Monday–Thursday","18:30–22:30",16,"Weekly Intakes","Continuous"],

["AI – Artificial Intelligence Specialist (LEA.E3)","English","Longueuil","1140 hrs (17 mths)","240 hrs (3 mths)","Monday–Thursday","8:00–12:00",16,"23 Feb 2026","No"],
["AI – Artificial Intelligence Specialist (LEA.E3)","English","Montreal","1140 hrs","240 hrs","Monday–Thursday","18:30–22:30",16,"TBC","No"],
["AI – Artificial Intelligence Specialist (LEA.E3)","French","St-Léonard","1140 hrs","240 hrs","Lundi–Jeudi","18:30–22:30",16,"TBC","No"],

["3D Animation – NTL.0Z","English","Longueuil","1440 hrs (19 mths)","270 hrs (12 weeks)","Monday–Friday","8:00–12:00",20,"TBC","No"],
["3D Animation – NTL.0Z","English","Laval","1440 hrs","270 hrs","Monday–Friday","13:00–17:00",20,"TBC","No"],
["3D Animation – NTL.0Z","English","Montreal","1440 hrs","270 hrs","Monday–Friday","18:30–22:30",20,"29 Sept 2025","Multiple"],
["3D Animation – NTL.0Z","French","St-Léonard","1440 hrs","270 hrs","Lundi–Vendredi","8:00–12h00",20,"30 Mar","No"],

["Supply Chain Management","English","Laval","1080 hrs (17 mths)","240 hrs (3 mths)","Fri–Sun","Fri 17:00–22:00; Sat/Sun 8:00–13:30",16,"23 Feb 2026","Yes"]
]

df = pd.DataFrame(data, columns=cols)

df.to_excel("programs.xlsx", index=False)
print("Excel file saved as programs.xlsx")
