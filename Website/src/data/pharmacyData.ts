import { MedicineProduct, VaranasiZone, Testimonial, DiscountTier } from '../types';

export const PHARMACY_CONFIG = {
  name: 'Cure Cart',
  tagline: 'Meds To Your Door Under 24 Hours',
  phoneDisplay: '+91 91940 01440',
  phoneNumber: '+919194001440',
  registrationNumber: 'REG/210324/0105233',
  pharmacistName: 'Drx. Faisal Iqbal',
  pharmacistTitle: 'Pharmacist & Founder',
  email: 'salescurecart@gmail.com',
  instagramUsername: '@curecart_vns',
  instagramUrl: 'https://www.instagram.com/curecart_vns?stkn=MTM5aml5YWY4YXlqMA==',
  facebookName: 'Cure Cart Varanasi',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61589320876955',
  whatsappUrl: 'https://wa.me/919194001440?text=Hello%20Cure%20Cart%2C%20I%20would%20like%20to%20order%20medicines.',
  operatingHours: '24 Hours · 7 Days a Week · 365 Days Guaranteed',
  address: 'Cure Cart Fulfilment Pharmacy Center, Express Medical Logistics Hub, Varanasi, UP - 221002',
  statutoryNotice: 'Medicines dispensed only against a valid prescription issued by a Registered Medical Practitioner (RMP). Compliance with Drugs and Cosmetics Act, 1940.'
};

export const DISCOUNT_TIERS: DiscountTier[] = [
  {
    title: 'Chronic Illness Care',
    discount: 'Up to 25%',
    description: 'Diabetes, Cardiac, Hypertension, Thyroid & Cholesterol long-term maintenance therapies.',
    eligibility: 'All monthly subscription refills and bulk 60/90-day supplies.',
    highlight: true
  },
  {
    title: 'Branded Ethical Medicines',
    discount: 'Up to 20%',
    description: 'Leading pharmaceutical manufacturers: Sun Pharma, Cipla, Torrent, Alkem, Lupin & Abbott.',
    eligibility: 'Valid doctor prescription with doctor RMP number required.'
  },
  {
    title: 'Cold-Chain Biologics & Insulin',
    discount: 'Up to 20%',
    description: 'Insulin pens, vials, vaccines & specialized biologics in temperature-controlled 2°C–8°C packs.',
    eligibility: 'Insulated packaging with phase-change cold packs included free.'
  },
  {
    title: 'OTC Essentials & Baby Care',
    discount: 'Up to 25%',
    description: 'Pediatric care formulas, nutritional supplements, glucose test strips and first aid.',
    eligibility: 'No doctor prescription required for standard OTC category.'
  }
];

export const SAMPLE_PRODUCTS: MedicineProduct[] = [
  {
    id: 'med-01',
    name: 'Glycomet-GP 2/850 Forte Tablet',
    genericName: 'Glimepiride (2mg) + Metformin (850mg)',
    category: 'Prescription & Chronic',
    indication: 'Type 2 Diabetes Blood Sugar Control',
    mrp: 295.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-02',
    name: 'Telma 40mg Tablet',
    genericName: 'Telmisartan (40mg)',
    category: 'Prescription & Chronic',
    indication: 'Hypertension & Cardiovascular Protection',
    mrp: 220.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 30 Tablets',
    inStock: true
  },
  {
    id: 'med-03',
    name: 'Ecosprin-AV 75/20 Capsule',
    genericName: 'Aspirin (75mg) + Atorvastatin (20mg)',
    category: 'Prescription & Chronic',
    indication: 'High Cholesterol & Heart Attack Prevention',
    mrp: 98.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Capsules',
    inStock: true
  },
  {
    id: 'med-04',
    name: 'Thyronorm 50mcg Tablet',
    genericName: 'Thyroxine Sodium (50mcg)',
    category: 'Prescription & Chronic',
    indication: 'Hypothyroidism Hormone Replacement',
    mrp: 184.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Bottle of 120 Tablets',
    inStock: true
  },
  {
    id: 'med-05',
    name: 'Lantus Solostar Insulin 100IU/ml',
    genericName: 'Insulin Glargine (rDNA origin) Pen (Cold-Chain 2-8°C)',
    category: 'Prescription & Chronic',
    indication: 'Long-acting basal diabetes care (Insulated delivery)',
    mrp: 725.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: '1 Pre-filled Pen 3ml',
    inStock: true
  },
  {
    id: 'med-06',
    name: 'Pan-D Capsule',
    genericName: 'Pantoprazole (40mg) + Domperidone (30mg SR)',
    category: 'Prescription & Chronic',
    indication: 'GERD, Acidity & Acid Reflux Relief',
    mrp: 199.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Capsules',
    inStock: true
  },
  {
    id: 'med-07',
    name: 'Augmentin 625 Duo Tablet',
    genericName: 'Amoxycillin (500mg) + Potassium Clavulanate (125mg)',
    category: 'Prescription & Chronic',
    indication: 'Bacterial infections (Respiratory, Skin, Dental)',
    mrp: 204.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 10 Tablets',
    inStock: true
  },
  {
    id: 'med-08',
    name: 'Dolo 650mg Tablet',
    genericName: 'Paracetamol (650mg)',
    category: 'OTC & First Aid',
    indication: 'Fever, Body Ache & Mild to Moderate Pain',
    mrp: 34.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-09',
    name: 'Shelcal 500 Tablet',
    genericName: 'Calcium (500mg) + Vitamin D3 (250 IU)',
    category: 'Health & Supplements',
    indication: 'Bone Health, Joint Care & Calcium Deficiency',
    mrp: 135.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-10',
    name: 'Becadexamin Softgel Capsule',
    genericName: 'Multivitamins + Minerals Antioxidant Formula',
    category: 'Health & Supplements',
    indication: 'Immunity Boost, Nutritional Supplementation & Vitality',
    mrp: 52.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Bottle of 30 Softgels',
    inStock: true
  },
  {
    id: 'med-11',
    name: 'Similac Advance Infant Formula Stage 1 (400g)',
    genericName: 'Spray Dried Infant Formula with DHA & Lutein',
    category: 'Mother & Baby',
    indication: 'Nutritional Infant Growth (0-6 months)',
    mrp: 460.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '400g Tin',
    inStock: true
  },
  {
    id: 'med-12',
    name: 'Sebamed Baby Gentle Wash (200ml)',
    genericName: 'pH 5.5 Tear-Free Pediatric Body Cleanser',
    category: 'Mother & Baby',
    indication: 'Sensitive Baby Skin Care & Dermatological Cleansing',
    mrp: 480.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '200ml Bottle',
    inStock: true
  },
  {
    id: 'med-13',
    name: 'Accu-Chek Active 50 Test Strips',
    genericName: 'Blood Glucose Test Strips (Code-Free)',
    category: 'Medical Devices',
    indication: 'Accurate Blood Sugar Self-Monitoring at Home',
    mrp: 1149.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Vial of 50 Strips',
    inStock: true
  },
  {
    id: 'med-14',
    name: 'Omron HEM-7120 Digital BP Monitor',
    genericName: 'Automated Arm Cuff Blood Pressure Monitor',
    category: 'Medical Devices',
    indication: 'Clinically Validated Oscillometric BP & Pulse Measurement',
    mrp: 2340.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '1 Device with Medium Cuff',
    inStock: true
  },
  {
    id: 'med-15',
    name: 'Volini Pain Relief Gel (50g)',
    genericName: 'Diclofenac + Linseed Oil + Methyl Salicylate + Menthol',
    category: 'OTC & First Aid',
    indication: 'Instant Relief for Backache, Neck, Joint & Muscle Strain',
    mrp: 165.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '50g Tube',
    inStock: true
  },
  {
    id: 'med-16',
    name: 'Betadine 10% Antiseptic Solution (100ml)',
    genericName: 'Povidone Iodine IP 10% w/v',
    category: 'OTC & First Aid',
    indication: 'Wound Disinfection, Cuts, Burns & Minor Infection Care',
    mrp: 142.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '100ml Bottle',
    inStock: true
  },
  {
    id: 'med-17',
    name: 'Pantocid 40mg Tablet',
    genericName: 'Pantoprazole Sodium Gastro-resistant IP (40mg)',
    category: 'Prescription & Chronic',
    indication: 'Gastric Acidity, GERD & Peptic Ulcer Healing',
    mrp: 178.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-18',
    name: 'Rozavel 10mg Tablet',
    genericName: 'Rosuvastatin Calcium (10mg)',
    category: 'Prescription & Chronic',
    indication: 'Cholesterol Reduction & Cardiovascular Risk Management',
    mrp: 245.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-19',
    name: 'Janumet 50mg/500mg Tablet',
    genericName: 'Sitagliptin Phosphate (50mg) + Metformin HCl (500mg)',
    category: 'Prescription & Chronic',
    indication: 'Dual Mechanism Type 2 Diabetes Glycemic Control',
    mrp: 410.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-20',
    name: 'Montair-LC Tablet',
    genericName: 'Montelukast Sodium (10mg) + Levocetirizine HCl (5mg)',
    category: 'Prescription & Chronic',
    indication: 'Allergic Rhinitis, Chronic Bronchial Spasms & Dust Allergies',
    mrp: 224.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-21',
    name: 'Foracort 200 Inhaler (120 MDI Doses)',
    genericName: 'Budesonide (200mcg) + Formoterol Fumarate (6mcg)',
    category: 'Prescription & Chronic',
    indication: 'Asthma Maintenance & COPD Pulmonary Management',
    mrp: 385.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: '1 Inhaler Canister (120 Doses)',
    inStock: true
  },
  {
    id: 'med-22',
    name: 'Azithral 500mg Tablet',
    genericName: 'Azithromycin Dihydrate (500mg)',
    category: 'Prescription & Chronic',
    indication: 'Broad Spectrum Upper & Lower Respiratory Bacterial Care',
    mrp: 132.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 5 Tablets',
    inStock: true
  },
  {
    id: 'med-23',
    name: 'Pan 40 Tablet',
    genericName: 'Pantoprazole Gastro-resistant (40mg)',
    category: 'Prescription & Chronic',
    indication: 'Chronic Acid Reflux, Esophagitis & Heartburn',
    mrp: 155.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-24',
    name: 'Clavam 625 Duo Tablet',
    genericName: 'Amoxicillin (500mg) + Potassium Clavulanate (125mg)',
    category: 'Prescription & Chronic',
    indication: 'Potent Beta-Lactamase Resistant Bacterial Infection Therapy',
    mrp: 205.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 10 Tablets',
    inStock: true
  },
  {
    id: 'med-25',
    name: 'Glycomet Trio 2 Tablet',
    genericName: 'Glimepiride (2mg) + Metformin (500mg) + Voglibose (0.2mg)',
    category: 'Prescription & Chronic',
    indication: 'Triple Combination Resistant Type 2 Diabetes Management',
    mrp: 285.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-26',
    name: 'Concor 5mg Tablet',
    genericName: 'Bisoprolol Fumarate (5mg)',
    category: 'Prescription & Chronic',
    indication: 'Angina Pectoris, Hypertension & Cardiac Rhythm Normalization',
    mrp: 145.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 10 Tablets',
    inStock: true
  },
  {
    id: 'med-27',
    name: 'Duphaston 10mg Tablet',
    genericName: 'Dydrogesterone (10mg)',
    category: 'Prescription & Chronic',
    indication: 'Gynecological Progesterone Support & Pregnancy Maintenance',
    mrp: 820.00,
    discountPercentage: 15,
    prescriptionRequired: true,
    packageSize: 'Strip of 10 Tablets',
    inStock: true
  },
  {
    id: 'med-28',
    name: 'Calpol 650mg Tablet',
    genericName: 'Paracetamol Micronized (650mg)',
    category: 'OTC & First Aid',
    indication: 'High Fever Reduction, Severe Headache & Body Pain',
    mrp: 33.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-29',
    name: 'Allegra 120mg Tablet',
    genericName: 'Fexofenadine HCl (120mg)',
    category: 'OTC & First Aid',
    indication: 'Non-Drowsy 24-Hour Antihistamine Allergy Relief',
    mrp: 218.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 10 Tablets',
    inStock: true
  },
  {
    id: 'med-30',
    name: 'Digene Gel Mint Flavour (200ml)',
    genericName: 'Magnesium Hydroxide + Aluminium Hydroxide + Simethicone',
    category: 'OTC & First Aid',
    indication: 'Instant Relief from Acid Indigestion, Gas & Heartburn',
    mrp: 158.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '200ml Bottle',
    inStock: true
  },
  {
    id: 'med-31',
    name: 'Cremaffin Fresh Liquid Syrup (200ml)',
    genericName: 'Liquid Paraffin + Milk of Magnesia Gentle Laxative',
    category: 'OTC & First Aid',
    indication: 'Gentle Overnight Relief from Acute & Chronic Constipation',
    mrp: 280.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '200ml Bottle',
    inStock: true
  },
  {
    id: 'med-32',
    name: 'Otrivin Oxy Fast Relief Nasal Spray (10ml)',
    genericName: 'Oxymetazoline HCl (0.05% w/v)',
    category: 'OTC & First Aid',
    indication: 'Opens Blocked Nose in 25 Seconds for up to 12 Hours',
    mrp: 115.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '10ml Spray Bottle',
    inStock: true
  },
  {
    id: 'med-33',
    name: 'Neurobion Forte Tablet',
    genericName: 'Vitamin B1 + B2 + B3 + B5 + B6 + B12 (Cobalamin)',
    category: 'Health & Supplements',
    indication: 'Nerve Health, Tingling/Numbness Relief & Cellular Energy',
    mrp: 42.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 30 Tablets',
    inStock: true
  },
  {
    id: 'med-34',
    name: 'Shelcal HD Tablet',
    genericName: 'Calcium Carbonate (1250mg) + Vitamin D3 (500 IU)',
    category: 'Health & Supplements',
    indication: 'Advanced Bone Density Support & Osteoporosis Prevention',
    mrp: 142.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-35',
    name: 'Supradyn Daily Multivitamin Tablet',
    genericName: '11 Vitamins + 5 Minerals + 4 Trace Elements Complex',
    category: 'Health & Supplements',
    indication: 'Daily Stamina, Immunity Shield & Fatigue Elimination',
    mrp: 60.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Strip of 15 Tablets',
    inStock: true
  },
  {
    id: 'med-36',
    name: 'Liv.52 DS Herbal Tablets (60s)',
    genericName: 'Himsra + Kasani Standardized Ayurvedic Hepato-protectant',
    category: 'Health & Supplements',
    indication: 'Liver Detoxification, Appetite Restoration & Enzyme Balance',
    mrp: 195.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Bottle of 60 Tablets',
    inStock: true
  },
  {
    id: 'med-37',
    name: 'Revital H Daily Health Supplement (30 Capsules)',
    genericName: 'Standardized Korean Ginseng + Multivitamins + Zinc',
    category: 'Health & Supplements',
    indication: 'Physical Energy, Mental Alertness & Daily Vitality',
    mrp: 340.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Pack of 30 Softgels',
    inStock: true
  },
  {
    id: 'med-38',
    name: 'Dexorange Syrup (200ml)',
    genericName: 'Ferric Ammonium Citrate + Vitamin B12 + Folic Acid',
    category: 'Mother & Baby',
    indication: 'Hemoglobin Restoration & Iron Deficiency Anemia Support',
    mrp: 175.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '200ml Bottle',
    inStock: true
  },
  {
    id: 'med-39',
    name: 'Cetaphil Baby Daily Lotion with Shea Butter (400ml)',
    genericName: 'Hypoallergenic Pediatric Mineral Moisturizer with Organic Calendula',
    category: 'Mother & Baby',
    indication: '24h Moisture Barrier Protection for Sensitive Infant Skin',
    mrp: 799.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: '400ml Pump Bottle',
    inStock: true
  },
  {
    id: 'med-40',
    name: 'Dr. Morepen GlucoOne BG-03 with 25 Strips',
    genericName: 'Biosensor Blood Glucose Monitoring System with 25 Strips',
    category: 'Medical Devices',
    indication: '5-Second Rapid Blood Sugar Self-Test Kit with 300 Memory',
    mrp: 990.00,
    discountPercentage: 15,
    prescriptionRequired: false,
    packageSize: 'Glucometer + 25 Test Strips + Lancing Device',
    inStock: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Anand Upadhyay',
    locality: 'Doctor & Clinic Head',
    review: 'Timely availability of cold-chain insulin for my elderly patients is paramount. Cure Cart delivered Lantus in an insulated cold bag in under 45 minutes with 25% discount on the prescription. Bohot hi professional service hai!',
    rating: 5,
    orderType: 'Insulin & Cardiac Care',
    date: '3 days ago'
  },
  {
    id: 't-2',
    name: 'Pooja Srivastava',
    locality: 'Caregiver & Homemaker',
    review: 'Papa ki BP aur Sugar ki branded dawai har mahine chahiye hoti hai. Local chemist se 4000+ lagte the, yahan directly WhatsApp par parchi send karke 25% off mil gaya. Delivery bhi time pe aa gayi, best pharmacy experience!',
    rating: 4.5,
    orderType: 'Monthly Chronic Refill',
    date: '5 days ago'
  },
  {
    id: 't-3',
    name: 'Amitabh Jaiswal',
    locality: 'Verified Customer, Sigra',
    review: 'Midnight emergency me bachhe ki pediatric syrup chahiye thi. WhatsApp pe instantly response mila aur pharmacist ne dosage bhi clearly explain kiya. Package pure tamper-proof seal ke saath deliver hua. Super fast!',
    rating: 5,
    orderType: 'Pediatric & Emergency Care',
    date: '1 week ago'
  },
  {
    id: 't-4',
    name: 'Sunita Mishra',
    locality: 'Chronic Care Patient',
    review: 'WhatsApp par prescription upload karna super easy hai. Pharmacist confirms the order immediately and explains generic vs branded options. Genuine sealed medicine aur honest price.',
    rating: 4.5,
    orderType: 'Thyroid & BP Care',
    date: '1 week ago'
  },
  {
    id: 't-5',
    name: 'Rajeshwar Pandey',
    locality: 'Senior Citizen, Assi Ghat',
    review: 'Dawa ki dukan par lambi line me lagne se mukti mil gayi. Bas WhatsApp pe parchi bheja aur sham ko ghar par medicine deliver ho gayi with cash on delivery. 22% flat saving hua bill par.',
    rating: 5,
    orderType: 'Cardiac Maintenance',
    date: '2 weeks ago'
  },
  {
    id: 't-6',
    name: 'Neha Chaurasia',
    locality: 'Working Professional, Lanka',
    review: 'Great customer support! Ek medicine stock me nahi thi toh unhone within 3 hours arrange karwaya aur direct wholesale discount diya. Reliable delivery service in Varanasi.',
    rating: 4.5,
    orderType: 'Dermatology & Vitamins',
    date: '2 weeks ago'
  },
  {
    id: 't-7',
    name: 'Vikramaditya Singh',
    locality: 'Customer, Cantt Area',
    review: 'Ekdum genuine branded medicines with genuine batch code verification. Packaging bhot solid thi cold pack ke saath. Ek baar order kiya, ab monthly refill yahin se mangwaunga.',
    rating: 5,
    orderType: 'Injectables & Ortho Care',
    date: '3 weeks ago'
  },
  {
    id: 't-8',
    name: 'Sushma Tripathi',
    locality: 'Caregiver, Bhelupur',
    review: 'Customer support team bhot polite hai. WhatsApp par order submit karne ke 5 minute me discounted bill quote aa gaya. Hassle free payment options through UPI on delivery.',
    rating: 4.5,
    orderType: 'Diabetic & OTC Care',
    date: '1 month ago'
  },
  {
    id: 't-9',
    name: 'Rohan Mukherjee',
    locality: 'Healthcare Consultant, Mahmoorganj',
    review: 'Ordering monthly prescriptions for my parents has never been smoother. Uploading the doctor slip via WhatsApp took less than thirty seconds, and Cure Cart delivered sealed blister packs with complete batch details at an unbeatable 24% discount. Top-tier service in Varanasi!',
    rating: 5,
    orderType: 'Chronic Prescription Care',
    date: 'Just recently'
  },
  {
    id: 't-10',
    name: 'Ananya Sengupta',
    locality: 'Research Scholar, BHU Campus',
    review: 'Super fast response time and exceptionally courteous pharmacist assistance. They verified my prescription thoroughly and arranged cold-pack insulated delivery for specialized eye drops the very same afternoon. Truly dependable healthcare delivery.',
    rating: 4.5,
    orderType: 'Ophthalmic & Specialty Care',
    date: '4 days ago'
  }
];
