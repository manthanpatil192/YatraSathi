// TODO: ML-based suggestions from trip history
export const packingCategories = ['Essentials', 'Clothing', 'Toiletries', 'Electronics', 'Documents', 'First Aid'];

export const packingByDestType = {
  beach: {
    Essentials: ['Sunglasses', 'Sunscreen (SPF 50+)', 'Hat/Cap', 'Reusable Water Bottle', 'Beach Towel'],
    Clothing: ['Swimwear', 'Light Cotton T-shirts', 'Shorts', 'Flip Flops', 'Evening Dress/Shirt'],
    Toiletries: ['Aloe Vera Gel', 'Shampoo', 'Body Wash', 'Deodorant', 'Mosquito Repellent'],
    Electronics: ['Waterproof Phone Case', 'Power Bank', 'Camera', 'Earphones'],
    Documents: ['ID Proof', 'Hotel Booking', 'Flight Tickets', 'Travel Insurance'],
    'First Aid': ['Band-aids', 'Antiseptic Cream', 'Motion Sickness Pills', 'Pain Relievers']
  },
  mountain: {
    Essentials: ['UV Sunglasses', 'Warm Gloves', 'Woolen Cap', 'Thermal Flask', 'Trekking Poles'],
    Clothing: ['Thermal Wear', 'Fleece Jacket', 'Windproof/Waterproof Jacket', 'Trekking Pants', 'Hiking Boots'],
    Toiletries: ['Lip Balm', 'Moisturizer', 'Sunscreen', 'Tissue Paper', 'Wet Wipes'],
    Electronics: ['Power Bank (batteries drain faster in cold)', 'Headlamp', 'Extra Camera Batteries'],
    Documents: ['ID Proof', 'Permits (if required)', 'Cash (ATMs are rare)'],
    'First Aid': ['Diamox (Altitude Sickness)', 'Crepe Bandage', 'Painkillers', 'Cold Medication']
  },
  heritage: {
    Essentials: ['Comfortable Walking Shoes', 'Cotton Scarf (for temples)', 'Umbrella', 'Water Bottle'],
    Clothing: ['Modest Clothing (covering shoulders and knees)', 'Cotton Kurtas/Shirts', 'Comfortable Trousers', 'Sandals'],
    Toiletries: ['Hand Sanitizer', 'Sunscreen', 'Wet Wipes', 'Deodorant'],
    Electronics: ['Camera with good zoom', 'Power Bank', 'Smartphone with Audio Guide app'],
    Documents: ['Student/Senior Citizen ID (for discounts)', 'Guidebook', 'ID Proof'],
    'First Aid': ['Band-aids (for blisters)', 'ORS Packets', 'Digestive Pills', 'Pain Relievers']
  },
  nature: {
    Essentials: ['Binoculars', 'Insect Repellent', 'Hat', 'Reusable Water Bottle', 'Rain Poncho'],
    Clothing: ['Earth-toned Clothing (camouflage)', 'Long-sleeve Shirts', 'Cargo Pants', 'Sturdy Walking Shoes'],
    Toiletries: ['Eco-friendly Soap', 'Sunscreen', 'Hand Sanitizer', 'Wet Wipes'],
    Electronics: ['Camera with telephoto lens', 'Power Bank', 'Flashlight'],
    Documents: ['ID Proof', 'Forest Entry Permits', 'Binocular License (if applicable)'],
    'First Aid': ['Anti-allergy Pills', 'Antiseptic Cream', 'Band-aids', 'Mosquito Repellent Cream']
  },
  adventure: {
    Essentials: ['Daypack', 'Hydration Bladder', 'Swiss Army Knife', 'Quick-dry Towel', 'Headlamp'],
    Clothing: ['Moisture-wicking T-shirts', 'Trek Pants', 'Sturdy Trekking Shoes', 'Windcheater'],
    Toiletries: ['Biodegradable Soap', 'Sunscreen', 'Lip Balm', 'Toilet Paper'],
    Electronics: ['Action Camera (GoPro)', 'Power Bank', 'GPS Device or Offline Maps'],
    Documents: ['ID Proof', 'Medical Insurance with Adventure Cover', 'Emergency Contacts'],
    'First Aid': ['Comprehensive First Aid Kit', 'Pain Spray', 'Crepe Bandage', 'ORS Packets']
  },
  default: {
    Essentials: ['Water Bottle', 'Umbrella', 'Sunglasses', 'Daypack'],
    Clothing: ['Comfortable T-shirts', 'Jeans/Trousers', 'Comfortable Shoes', 'Light Jacket'],
    Toiletries: ['Toothbrush & Paste', 'Soap/Body Wash', 'Shampoo', 'Deodorant', 'Comb'],
    Electronics: ['Smartphone', 'Charger', 'Power Bank', 'Earphones'],
    Documents: ['ID Proof (Aadhar/Passport)', 'Tickets', 'Hotel Confirmations', 'Emergency Cash'],
    'First Aid': ['Band-aids', 'Paracetamol', 'Antacid', 'Personal Medications']
  }
};
