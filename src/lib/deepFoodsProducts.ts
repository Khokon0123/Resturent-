import type { Product } from "@/types";

const CDN = "https://images.grocerybabu.com/cdn-cgi/image/height=299,quality=100,fit=contain,format=webp/gbabu-img/original/";
const img = (hash: string) => CDN + hash + ".jpg";

function p(
  id: string,
  name: string,
  subcategory: string,
  price: number,
  unit: string,
  image: string,
  category: "grocery" | "frozen-food" = "grocery",
  badge?: "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT"
): Product {
  const slug = `deep-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    slug,
    name,
    category,
    subcategory,
    price,
    unit,
    badge,
    description: `Deep Foods ${name}. Authentic quality, trusted by South Asian households.`,
    image,
    featured: false,
    inStock: true,
    brand: "Deep",
  };
}

export const deepFoodsGroceryProducts: Product[] = [
  // ── SPICES ──────────────────────────────────────────────────────────────
  p("deep-001", "Deep Cumin Seeds 7oz", "spices", 3.09, "pack", img("36373730364132453546354633353335373336433639")),
  p("deep-002", "Deep Cumin Seeds 14oz", "spices", 5.39, "pack", img("36373730364132453546354633353331373336433639")),
  p("deep-003", "Deep Coriander Powder 7oz", "spices", 2.19, "pack", img("36373730364132453546354633343335373336433639")),
  p("deep-004", "Deep Coriander Powder 14oz", "spices", 3.99, "pack", img("36373730364132453546354633343331373336433639")),
  p("deep-005", "Deep Turmeric Powder 7oz", "spices", 2.69, "pack", img("36373730364132453546354633323335373336433639")),
  p("deep-006", "Deep Turmeric Powder 14oz", "spices", 4.09, "pack", img("36373730364132453546333633323331373336433639")),
  p("deep-007", "Deep Garam Masala 7oz", "spices", 2.79, "pack", img("36373730364132453546354633353336373336433639")),
  p("deep-008", "Deep Garam Masala 14oz", "spices", 5.19, "pack", img("36373730364132453546354633353332373336433639")),
  p("deep-009", "Deep Red Chilli Powder 7oz", "spices", 2.69, "pack", img("36373730364132453546354633313331373336433639")),
  p("deep-010", "Deep Red Chilli Powder 14oz", "spices", 4.39, "pack", img("36373730364132453546354633313331373336433639")),
  p("deep-011", "Deep Red Chili Powder Kashmiri 7oz", "spices", 3.19, "pack", img("36373730364132453546333833343331373336433639")),
  p("deep-012", "Deep Red Chilli Powder X-Hot 7oz", "spices", 2.99, "pack", img("36373730364132453546354633303333373336433639")),
  p("deep-013", "Deep Ginger Powder 7oz", "spices", 2.59, "pack", img("36373730364132453546354633343337373336433639")),
  p("deep-014", "Deep Coriander Cumin Powder 7oz", "spices", 2.59, "pack", img("36373730364132453546354633383335373336433639")),
  p("deep-015", "Deep Coriander Cumin Powder 14oz", "spices", 4.49, "pack", img("36373730364132453546354633383331373336433639")),
  p("deep-016", "Deep Fenugreek Seeds 7oz", "spices", 1.89, "pack", img("36373730364132453546354633393335373336433639")),
  p("deep-017", "Deep Fennel Seeds Raw 7oz", "spices", 2.99, "pack", img("36373730364132453546354633373335373336433639")),
  p("deep-018", "Deep Dill Seeds 7oz", "spices", 1.79, "pack", img("36373730364132453546354633313338373336433639")),
  p("deep-019", "Deep Mustard Seeds 7oz", "spices", 2.19, "pack", img("36373730364132453546364533363337373336433639")),
  p("deep-020", "Deep Mustard Seeds Small 7oz", "spices", 1.99, "pack", img("36373730364132453546333833353331373336433639")),
  p("deep-021", "Deep Curry Powder 7oz", "spices", 2.79, "pack", img("36373730364132453546354633383336373336433639")),
  p("deep-022", "Deep Cumin Powder 7oz", "spices", 3.59, "pack", img("36373730364132453546354633363335373336433639")),
  p("deep-023", "Deep Black Pepper Powder 7oz", "spices", 3.99, "pack", img("36373730364132453546354633343339373336433639")),
  p("deep-024", "Deep Sesame Seeds Hulled 28.2oz", "spices", 7.29, "pack", img("36373730364132453546333033383331373336433639")),
  p("deep-025", "Deep Coriander Seeds 7oz", "spices", 2.29, "pack", img("36373730364132453546354633333335373336433639")),
  p("deep-026", "Deep Red Chilli Crushed 7oz", "spices", 2.69, "pack", img("36373730364132453546354633323333373336433639")),
  p("deep-027", "Deep Amchur Powder 7oz", "spices", 2.79, "pack", img("36373730364132453546354633303336373336433639")),
  p("deep-028", "Deep Methi Powder 7oz", "spices", 2.19, "pack", img("36373730364132453546354633323338373336433639")),
  p("deep-029", "Deep Kala Jeera 3.5oz", "spices", 2.69, "pack", img("39366336333731333033313366356532613630373736")),
  p("deep-030", "Deep Cinnamon Stick 7oz", "spices", 4.09, "pack", img("36373730364132453643333733353331373336433639")),

  // ── MASALA MIXES ────────────────────────────────────────────────────────
  p("deep-031", "Deep Biryani Masala 2.8oz", "masala", 1.89, "pack", img("39366336333732333133373366356532613630373736")),
  p("deep-032", "Deep Butter Chicken Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333133323366356532613630373736")),
  p("deep-033", "Deep Kadai Chicken Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333133333366356532613630373736")),
  p("deep-034", "Deep Channa Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333133393366356532613630373736")),
  p("deep-035", "Deep Paneer Makhani Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333233303366356532613630373736")),
  p("deep-036", "Deep Mutton Kheema Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333133343366356532613630373736")),
  p("deep-037", "Deep Kolhapuri Mutton Masala 2.8oz", "masala", 1.99, "pack", img("39366336333732333133353366356532613630373736")),
  p("deep-038", "Deep Chicken Masala Spice Paste 2.8oz", "masala", 1.89, "pack", img("39366336333732333133313366356532613630373736")),
  p("deep-039", "Deep Rasam Powder 3.5oz", "masala", 1.89, "pack", img("39366336333732333033343366356532613630373736")),
  p("deep-040", "Deep Pickle Masala 3.5oz", "masala", 3.29, "pack", img("39366336303737333533663566356532613630373736")),

  // ── BOTTLE SPICES ───────────────────────────────────────────────────────
  p("deep-041", "Deep Garam Masala Bottle 5.3oz", "bottle-spices", 3.59, "bottle", img("36373730364132453546333833333632373336433639")),
  p("deep-042", "Deep Turmeric Powder Bottle 14oz", "bottle-spices", 4.69, "bottle", img("36373730364132453546333233313632373336433639")),
  p("deep-043", "Deep Turmeric Powder Bottle 7oz", "bottle-spices", 2.89, "bottle", img("36373730364132453546333633333632373336433639")),
  p("deep-044", "Deep Coriander Cumin Powder Bottle 7oz", "bottle-spices", 3.19, "bottle", img("36373730364132453546333333343632373336433639")),
  p("deep-045", "Deep Cumin Powder Bottle 7oz", "bottle-spices", 3.19, "bottle", img("36373730364132453546333233343632373336433639")),
  p("deep-046", "Deep Red Chili Powder Bottle 7oz", "bottle-spices", 2.79, "bottle", img("36373730364132453546333733343632373336433639")),
  p("deep-047", "Deep Cumin Seeds Bottle 200gm", "bottle-spices", 4.09, "bottle", img("36373730364132453546333433333632373336433639")),
  p("deep-048", "Deep Garlic Powder Bottle 14oz", "bottle-spices", 3.99, "bottle", img("36373730364132453546333433343632373336433639")),

  // ── PICKLES ─────────────────────────────────────────────────────────────
  p("deep-049", "Deep Dry Garlic Chutney 5.3oz", "pickles", 2.89, "jar", img("39366336303739333433663566356532613630373736")),
  p("deep-050", "Deep Gor-Keri Mango Pickle 12oz", "pickles", 3.99, "jar", img("39366336303734333933663566356532613630373736")),
  p("deep-051", "Deep Green Chili Pickle 10oz", "pickles", 3.59, "jar", img("39366336303734333733663566356532613630373736")),
  p("deep-052", "Deep Hot Mango Pickle 10oz", "pickles", 3.59, "jar", img("39366336303733333933663566356532613630373736")),
  p("deep-053", "Deep Hot Mango Pickle 25.4oz", "pickles", 7.19, "jar", img("39366336303736333633663566356532613630373736")),
  p("deep-054", "Deep Sweet Lime Pickle 12oz", "pickles", 3.99, "jar", img("39366336303735333233663566356532613630373736")),
  p("deep-055", "Deep Sweet Lime Pickle 30oz", "pickles", 7.49, "jar", img("39366336303733333833663566356532613630373736")),
  p("deep-056", "Deep Mixed Pickle 10oz", "pickles", 3.59, "jar", img("39366336303734333533663566356532613630373736")),
  p("deep-057", "Deep Mixed Pickle 25.4oz", "pickles", 7.19, "jar", img("39366336303733333333663566356532613630373736")),
  p("deep-058", "Deep Khaman Gunda Pickle 25.5oz", "pickles", 6.29, "jar", img("39366336303732333733663566356532613630373736")),
  p("deep-059", "Deep Gondal Red Chili Pickle 24.7oz", "pickles", 7.19, "jar", img("39366336303733333233663566356532613630373736")),
  p("deep-060", "Deep Hot Lime Pickle 25.4oz", "pickles", 6.79, "jar", img("36373730364132453546354633353333373036433639")),
  p("deep-061", "Deep Carrot Pickle 25.5oz", "pickles", 6.79, "jar", img("39366336303735333433663566356532613630373736")),
  p("deep-062", "Deep Chana Methi Mango Pickle 25.4oz", "pickles", 7.19, "jar", img("39366336303735333633663566356532613630373736")),
  p("deep-063", "Deep Haldar Turmeric Root Pickle 10oz", "pickles", 3.59, "jar", img("39366336303736333733663566356532613630373736")),
  p("deep-064", "Deep Methia Mango Pickle 25.4oz", "pickles", 6.79, "jar", img("39366336303733333133663566356532613630373736")),

  // ── SNACK MIXES ─────────────────────────────────────────────────────────
  p("deep-065", "Deep Total Bhel 3.5oz", "snacks-mixes", 2.59, "pack", img("39366336343634373236663566356532613630373736")),
  p("deep-066", "Deep Total Bhel 14.1oz", "snacks-mixes", 5.29, "pack", img("39366336343634373236313334336532613630373736")),
  p("deep-067", "Deep Navratan Mix 12oz", "snacks-mixes", 3.39, "pack", img("39366336303330333133303331336532613630373736")),
  p("deep-068", "Deep Hot Mix Original 12oz", "snacks-mixes", 4.39, "pack", img("39366336303330333033313331336532613630373736")),
  p("deep-069", "Deep Hot Mix Extra Hot 12oz", "snacks-mixes", 4.29, "pack", img("39366336303330333033353330336532613630373736")),
  p("deep-070", "Deep Suko Lilo Chevdo 12oz", "snacks-mixes", 3.79, "pack", img("39366336343637363733663566356532613630373736")),
  p("deep-071", "Deep Nadiadi Mix 12oz", "snacks-mixes", 3.39, "pack", img("39366336343637363233663566356532613630373736")),
  p("deep-072", "Deep Papad Makai Chevda 12oz", "snacks-mixes", 3.39, "pack", img("39366336343637363633663566356532613630373736")),

  // ── SEV, PAPDI & FAFDA ──────────────────────────────────────────────────
  p("deep-073", "Deep Sev 12oz", "snacks-sev", 4.09, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-074", "Deep Thin Sev 12oz", "snacks-sev", 4.09, "pack", img("39366336303330333033363331336532613630373736")),
  p("deep-075", "Deep Nylon Thin Sev 24oz", "snacks-sev", 5.89, "pack", img("39366336373338336436663566356532613630373736")),
  p("deep-076", "Deep Fafda 12.3oz", "snacks-sev", 7.09, "pack", img("39366336303330333133363331336532613630373736")),
  p("deep-077", "Deep Papadi 12.3oz", "snacks-sev", 6.39, "pack", img("39366336303330333133363332336532613630373736")),
  p("deep-078", "Deep Fulvadi 12oz", "snacks-sev", 3.79, "pack", img("39366336303330333133363334336532613630373736")),
  p("deep-079", "Deep Sandwich Bhakarwadi 10oz", "snacks-sev", 2.79, "pack", img("39366336373336336436663566356532613630373736")),
  p("deep-080", "Deep Punjabi Tadka 10oz", "snacks-sev", 2.79, "pack", img("39366336303330333033363333336532613630373736")),
  p("deep-081", "Deep Sakkar Para 10oz", "snacks-sev", 4.29, "pack", img("39366336323633373233393366356532613630373736")),
  p("deep-082", "Deep Crunchy Chor 14.1oz", "snacks-sev", 4.39, "pack", img("39366336303330333033363334336532613630373736")),
  p("deep-083", "Deep Round Plantain Chips 12oz", "snacks-sev", 4.79, "pack", img("39366336303330333133373336336532613630373736")),
  p("deep-084", "Deep Smashed Channa 6.3oz", "snacks-sev", 2.19, "pack", img("39366336303330333233313331336532613630373736")),
  p("deep-085", "Deep Indori Masala Makhana 3.2oz", "snacks-sev", 5.19, "pack", img("39366336343664363033323366356532613630373736")),
  p("deep-086", "Deep Pudina Makhana 3.2oz", "snacks-sev", 5.19, "pack", img("39366336343664363033313366356532613630373736")),

  // ── CHIPS & POPCORN ─────────────────────────────────────────────────────
  p("deep-087", "Deep Masala Round Banana Chips 12oz", "snacks-chips", 3.79, "pack", img("39366336303330333133373339336532613630373736")),
  p("deep-088", "Deep Chip Away Sour Cream Onion 4.6oz", "snacks-chips", 2.09, "pack", img("39366336303330333233313334336532613630373736")),
  p("deep-089", "Deep Chip Away Thai Sweet Chili 4.6oz", "snacks-chips", 2.09, "pack", img("39366336303330333233313336336532613630373736")),
  p("deep-090", "Deep Chip Away Bloody Mary Tomato 4.6oz", "snacks-chips", 2.09, "pack", img("39366336303330333233313335336532613630373736")),
  p("deep-091", "Deep Masala Popcorn 5oz", "snacks-chips", 2.09, "pack", img("39366336303733363133323366356532613630373736")),
  p("deep-092", "Deep Turmeric Popcorn 5oz", "snacks-chips", 2.09, "pack", img("39366336303733363133313366356532613630373736")),
  p("deep-093", "Deep Masala Pops Barbeque 2.8oz", "snacks-chips", 1.59, "pack", img("39366336343664363037313366356532613630373736")),

  // ── SOUTH INDIAN SNACKS ─────────────────────────────────────────────────
  p("deep-094", "Deep Janthikalu 7oz", "snacks-south-indian", 2.69, "pack", img("39366336383331333537333766356532613630373736")),
  p("deep-095", "Deep Banana Chips 7oz", "snacks-south-indian", 3.69, "pack", img("39366336333331333537333766356532613630373736")),
  p("deep-096", "Deep Thatai Murukku 7oz", "snacks-south-indian", 2.79, "pack", img("39366336373338333537333766356532613630373736")),
  p("deep-097", "Deep Bitter Gourd Chip 7oz", "snacks-south-indian", 3.69, "pack", img("39366336373335333537333766356532613630373736")),
  p("deep-098", "Deep Ribbon Pakodi 7oz", "snacks-south-indian", 2.69, "pack", img("39366336313338333537333766356532613630373736")),
  p("deep-099", "Deep Tapioca Chips 7oz", "snacks-south-indian", 2.79, "pack", img("39366336323337333537333766356532613630373736")),
  p("deep-100", "Deep Garlic Mix 7oz", "snacks-south-indian", 2.69, "pack", img("39366336333337333537333766356532613630373736")),
  p("deep-101", "Deep Masala Murukku 7oz", "snacks-south-indian", 2.79, "pack", img("39366336383332333537333766356532613630373736")),
  p("deep-102", "Deep Nippat 7oz", "snacks-south-indian", 2.79, "pack", img("39366336313335333537333766356532613630373736")),
  p("deep-103", "Deep Chegodi 7oz", "snacks-south-indian", 2.69, "pack", img("39366336333335333537333766356532613630373736")),
  p("deep-104", "Deep Rice Murruku 7oz", "snacks-south-indian", 2.79, "pack", img("39366336313331333537333766356532613630373736")),
  p("deep-105", "Deep Tapioca Slices 7oz", "snacks-south-indian", 2.79, "pack", img("39366336313336333537333766356532613630373736")),

  // ── KHAKHRA ─────────────────────────────────────────────────────────────
  p("deep-106", "Deep Pizza Khakhara 6.3oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133333338336532613630373736")),
  p("deep-107", "Deep Chorafali Khakhara 6.3oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133333337336532613630373736")),
  p("deep-108", "Deep Moong Masala Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133383337336532613630373736")),
  p("deep-109", "Deep Double Methi Masala Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133323332336532613630373736")),
  p("deep-110", "Deep Oats Khakhara 7oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133363337336532613630373736")),
  p("deep-111", "Deep Methi Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133313331336532613630373736")),
  p("deep-112", "Deep Mathia Khakhara 6.3oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133333335336532613630373736")),
  p("deep-113", "Deep Original Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133313332336532613630373736")),
  p("deep-114", "Deep Ragi Coriander-Chili Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133313335336532613630373736")),
  p("deep-115", "Deep Bajri Dhebra Khakhara 6.3oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133333339336532613630373736")),
  p("deep-116", "Deep Farali Khakhara 6.3oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133383339336532613630373736")),
  p("deep-117", "Deep Jeera Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133313334336532613630373736")),
  p("deep-118", "Deep Math Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133323335336532613630373736")),
  p("deep-119", "Deep Oats Ginger-Chili Khakhara 7oz", "snacks-khakhra", 2.19, "pack", img("39366336303330333133363338336532613630373736")),
  p("deep-120", "Deep Bajri Khakhara 7oz", "snacks-khakhra", 2.29, "pack", img("39366336303330333133323334336532613630373736")),

  // ── BHAKRI ──────────────────────────────────────────────────────────────
  p("deep-121", "Deep Jeera Bhakri 7oz", "snacks-bhakri", 2.29, "pack", img("39366336303330333133393332336532613630373736")),
  p("deep-122", "Deep Plain Bhakri 7oz", "snacks-bhakri", 2.29, "pack", img("39366336303330333133393331336532613630373736")),
  p("deep-123", "Deep Bajri-Methi Garlic Bhakri 7oz", "snacks-bhakri", 2.29, "pack", img("39366336303330333133393336336532613630373736")),
  p("deep-124", "Deep Coriander-Chili Bhakri 7oz", "snacks-bhakri", 2.29, "pack", img("39366336303330333133393335336532613630373736")),
  p("deep-125", "Deep Methi Bhakri 7oz", "snacks-bhakri", 2.29, "pack", img("39366336303330333133393334336532613630373736")),

  // ── NUTS & MASALA PEAS ──────────────────────────────────────────────────
  p("deep-126", "Deep Peanut Bhujia 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536313332336532613630373736")),
  p("deep-127", "Deep Masala Peanuts 8oz", "snacks-nuts", 3.59, "pack", img("39366336303330333133393337336532613630373736")),
  p("deep-128", "Deep Masala Nuts Chili & Garlic 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536303332336532613630373736")),
  p("deep-129", "Deep Masala Nuts Peri Peri 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536303333336532613630373736")),
  p("deep-130", "Deep Masala Nuts Black Pepper 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536303331336532613630373736")),
  p("deep-131", "Deep Masala Peas Spicy Chickpeas 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536303339336532613630373736")),
  p("deep-132", "Deep Masala Peas Pudina Nimboo 8oz", "snacks-nuts", 2.79, "pack", img("39366336343664366536303338336532613630373736")),
  p("deep-133", "Deep Jumbo Peanuts 2lb", "snacks-nuts", 5.79, "bag", img("39366336343664366536313332336532613630373736")),

  // ── DAL & LENTILS ───────────────────────────────────────────────────────
  p("deep-134", "Deep Masoor Dal 2lb", "lentils", 5.29, "bag", img("36373730364132453546354633383331364336433639")),
  p("deep-135", "Deep Masoor Dal 4lb", "lentils", 9.59, "bag", img("36373730364132453546354633383331364336433639")),
  p("deep-136", "Deep Chana Dal 2lb", "lentils", 5.29, "bag", img("36373730364132453546354633333337364336433639")),
  p("deep-137", "Deep Chana Dal 4lb", "lentils", 9.59, "bag", img("36373730364132453546354633333337364336433639")),
  p("deep-138", "Deep Moong Dal 2lb", "lentils", 5.79, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-139", "Deep Moong Dal 4lb", "lentils", 9.99, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-140", "Deep Moong Dal Chilka 2lb", "lentils", 5.29, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-141", "Deep Moong Dal Chilka 4lb", "lentils", 9.99, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-142", "Deep Moong Whole 2lb", "lentils", 5.69, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-143", "Deep Moong Whole 4lb", "lentils", 9.99, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-144", "Deep Toor Dal Dry 2lb", "lentils", 5.69, "bag", img("36373730364132453546354633333337364336433639")),
  p("deep-145", "Deep Toor Dal Dry 4lb", "lentils", 10.49, "bag", img("36373730364132453546354633333337364336433639")),
  p("deep-146", "Deep Toor Dal Oily 4lb", "lentils", 10.99, "bag", img("36373730364132453546354633333337364336433639")),
  p("deep-147", "Deep Udad Dal 2lb", "lentils", 5.29, "bag", img("36373730364132453546354633383331364336433639")),
  p("deep-148", "Deep Udad Dal 4lb", "lentils", 9.99, "bag", img("36373730364132453546354633383331364336433639")),
  p("deep-149", "Deep Udad Dal Chilka 2lb", "lentils", 5.29, "bag", img("36373730364132453546354633383331364336433639")),
  p("deep-150", "Deep Kala Chana 2lb", "lentils", 5.59, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-151", "Deep Kala Chana 4lb", "lentils", 9.99, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-152", "Deep Kabuli Chana 2lb", "lentils", 6.59, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-153", "Deep Kabuli Chana 4lb", "lentils", 11.39, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-154", "Deep Yellow Split Peas 2lb", "lentils", 3.99, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-155", "Deep Chora Black Eyed Peas 4lb", "lentils", 10.69, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-156", "Deep Horse Gram 2lb", "lentils", 4.89, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-157", "Deep Green Chana 2lb", "lentils", 4.89, "bag", img("39366336633636333233663566356532613630373736")),
  p("deep-158", "Deep Val Dal 2lb", "lentils", 5.29, "bag", img("39366336633632333033663566356532613630373736")),

  // ── FLOUR & GRAINS ──────────────────────────────────────────────────────
  p("deep-159", "Deep Besan 4lb", "flour", 9.59, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-160", "Deep Besan Flour 2lb", "flour", 5.29, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-161", "Deep Chapati Flour 4lb", "flour", 7.79, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-162", "Deep 5 Star Premium Atta 4lb", "flour", 7.79, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-163", "Deep 5 Star Premium Atta 10lb", "flour", 16.99, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-164", "Deep Sooji Flour 2lb", "flour", 4.39, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-165", "Deep Idli Rava Flour 2lb", "flour", 3.89, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-166", "Deep Ragi Flour 4lb", "flour", 8.09, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-167", "Deep Bajri Flour 2lb", "flour", 4.19, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-168", "Deep Juwar Flour 2lb", "flour", 4.19, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-169", "Deep Bhakri Flour 2lb", "flour", 5.29, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-170", "Deep Sharbati Atta 4lb", "flour", 7.69, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-171", "Deep Moong Flour 2lb", "flour", 5.29, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-172", "Deep Dhokla Flour 2lb", "flour", 4.39, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-173", "Deep Handva Flour 2lb", "flour", 4.39, "bag", img("36373730364132453546354633353333363636433639")),
  p("deep-174", "Deep Cracked Wheat Kansar 2lb", "flour", 4.39, "bag", img("36373730364132453546354633353333363636433639")),

  // ── RICE ────────────────────────────────────────────────────────────────
  p("deep-175", "Deep Extra Long Grain Basmati Rice 2lb", "rice", 4.89, "bag", img("39366336633632333033663566356532613630373736")),
  p("deep-176", "Deep Brown Basmati Rice 2lb", "rice", 4.29, "bag", img("39366336633632333033663566356532613630373736")),

  // ── COOKING OILS ────────────────────────────────────────────────────────
  p("deep-177", "Deep Mustard Oil 16.9oz", "oil", 3.69, "bottle", img("36373730364132453546364533363337373336433639")),
  p("deep-178", "Deep Mustard Oil 33.8oz", "oil", 6.79, "bottle", img("36373730364132453546364533363337373336433639")),
  p("deep-179", "Deep Sesame Oil 16.9oz", "oil", 6.39, "bottle", img("36373730364132453546333033383331373336433639")),
  p("deep-180", "Deep Sesame Oil 33.8oz", "oil", 11.79, "bottle", img("36373730364132453546333033383331373336433639")),
  p("deep-181", "Deep Organic Virgin Coconut Oil 32oz", "oil", 9.89, "bottle", img("39366336373631333133313366356532613630373736")),

  // ── GHEE & DAIRY ────────────────────────────────────────────────────────
  p("deep-182", "Deep Makhan Ghee 8oz", "ghee", 5.99, "jar", img("39366336373639336635663566356532613630373736")),
  p("deep-183", "Deep Makhan Ghee 15oz", "ghee", 9.89, "jar", img("39366336373631333233663566356532613630373736")),
  p("deep-184", "Deep Cow Ghee 32oz", "ghee", 14.49, "jar", img("39366336323637363133343366356532613630373736")),
  p("deep-185", "Deep Cow Ghee 33.82oz", "ghee", 19.99, "jar", img("36373730364132453546333133363644363136433639")),

  // ── MUKHWAS & DIGESTIVES ────────────────────────────────────────────────
  p("deep-186", "Deep Fennel Seeds 28oz", "mukhwas", 8.79, "pack", img("36373730364132453546364333373335373336433639")),
  p("deep-187", "Deep Fennel Seeds Raw 14oz", "mukhwas", 5.59, "pack", img("36373730364132453546354633373331373336433639")),
  p("deep-188", "Deep Fennel Seeds Salted 14oz", "mukhwas", 5.39, "pack", img("36373730364132453546354633363332373336433639")),
  p("deep-189", "Deep Sweet Fennel Seeds 2.2lb", "mukhwas", 7.09, "pack", img("36373730364132453546333033373737364436433639")),
  p("deep-190", "Deep Red Mukhwas 2.2lb", "mukhwas", 8.49, "pack", img("36373730364132453546333133373737364436433639")),
  p("deep-191", "Deep Calcutta Mukhwas 5.64oz", "mukhwas", 3.09, "pack", img("36373730364132453546333433363737364436433639")),
  p("deep-192", "Deep Paan Mukhwas 5.64oz", "mukhwas", 3.39, "pack", img("36373730364132453546333833363737364436433639")),
  p("deep-193", "Deep Rajwadi Mukhwas 5.6oz", "mukhwas", 3.09, "pack", img("36373730364132453546333333363737364436433639")),
  p("deep-194", "Deep Cocktail Thunder 5.29oz", "mukhwas", 3.09, "pack", img("36373730364132453546333633363737364436433639")),
  p("deep-195", "Deep Gulab Mix 3.9oz", "mukhwas", 1.59, "pack", img("36373730364132453546333533373737364436433639")),

  // ── JAGGERY & SWEETENERS ────────────────────────────────────────────────
  p("deep-196", "Deep Coconut Jaggery Powder 1lb", "jaggery", 6.79, "pack", img("39366336373631333133313366356532613630373736")),
  p("deep-197", "Deep Karupatti Palm Jaggery Powder 1lb", "jaggery", 15.39, "pack", img("39366336373631333133323366356532613630373736")),

  // ── DRY FRUITS ──────────────────────────────────────────────────────────
  p("deep-269", "Deep Aloo Bukhara Dried Plums 7oz", "dry-fruits", 3.99, "pack", img("36373730364132453546354633313632363136433639")),
  p("deep-270", "Deep Dry Apricots 7oz", "dry-fruits", 4.49, "pack", img("39366336303733373133383366356532613630373736")),
  p("deep-271", "Deep Dry Dates 7oz", "dry-fruits", 4.49, "pack", img("39366336303733373133383366356532613630373736")),
  p("deep-272", "Deep Dry Figs 14oz", "dry-fruits", 6.99, "pack", img("39366336303733373133383366356532613630373736")),
  p("deep-273", "Deep Pumpkin Seeds 7oz", "dry-fruits", 3.99, "pack", img("39366336303733373133383366356532613630373736")),
  p("deep-274", "Deep Green Raisins 7oz", "dry-fruits", 3.49, "pack", img("39366336323731363233353366356532613630373736")),
  p("deep-275", "Deep Jumbo Peanuts 4lb", "dry-fruits", 9.99, "bag", img("39366336343664366536313332336532613630373736")),

  // ── FRUIT BITES (AAMPAPAD) ───────────────────────────────────────────────
  p("deep-276", "Deep Mango Bites Aampapad 7.8oz", "fruit-bites", 3.49, "pack", "https://img06.weeecdn.com/product/image/853/611/60CD9493B79B7942.png"),
  p("deep-277", "Deep Green Mango Bites 7.8oz", "fruit-bites", 3.49, "pack", "https://freshcentralgrocery.com/cdn/shop/files/DeepGreenMangoBites_7.8OZ-220GM.webp?v=1739263628&width=1445"),
  p("deep-278", "Deep Guava Bites 7.8oz", "fruit-bites", 3.49, "pack", "https://www.kesargrocery.com/images/P/Deep%20Guava%20Bites%20%287.8%20OZ%20-%20220%20GM%29.jpg"),
  p("deep-279", "Deep Mix Fruit Bites 7.8oz", "fruit-bites", 3.49, "pack", "https://img06.weeecdn.com/product/image/853/611/60CD9493B79B7942.png"),

  // ── BEVERAGES ────────────────────────────────────────────────────────────
  p("deep-280", "Deep Mango Fruit Drink 250ml", "beverages", 1.49, "can", "https://cdn.powered-by-nitrosell.com/product_images/32/7966/deep%20mango%20drink%20250ml.jpeg"),
  p("deep-281", "Deep Mango Fruit Drink 1.5L", "beverages", 3.99, "bottle", "https://cdn.powered-by-nitrosell.com/product_images/32/7966/deep%20mango%20drink%20250ml.jpeg"),

  // ── LASSI & DAIRY ────────────────────────────────────────────────────────
  p("deep-282", "Deep Mango Lassi 11oz", "dairy", 2.79, "bottle", "https://cdn.powered-by-nitrosell.com/product_images/33/8122/deep-mango-lassi-11oz.jpg"),
  p("deep-283", "Deep Mango Lassi 32oz", "dairy", 5.99, "bottle", "https://www.kesargrocery.com/images/P/Deep%20India%20Style%20LASSI%20-%20MANGO%20%28945%20ML%20-%2032%20FL%20OZ%29.jpg"),

  // ── CANNED GOODS & GROCERY ──────────────────────────────────────────────
  p("deep-284", "Deep Coconut Milk 400ml", "canned-goods", 2.49, "can", img("39366336373631333133313366356532613630373736")),
  p("deep-285", "Deep Alphonso Mango Pulp 30oz", "canned-goods", 4.49, "can", img("39366336373631333133323366356532613630373736")),
  p("deep-286", "Deep Kesar Mango Pulp 30oz", "canned-goods", 4.49, "can", img("39366336373631333133323366356532613630373736")),

  // ── SPICES (ADDITIONAL) ──────────────────────────────────────────────────
  p("deep-287", "Deep Original Hing 1.58oz", "spices", 2.99, "pack", img("36373730364132453546354633353335373336433639")),
  p("deep-288", "Deep Original Hing 3.17oz", "spices", 4.99, "pack", img("36373730364132453546354633353335373336433639")),
  p("deep-289", "Deep Black Salt 3.5oz", "spices", 2.49, "pack", img("36373730364132453546354633353335373336433639")),
  p("deep-290", "Deep Shah Jeera 7oz", "spices", 3.49, "pack", img("36373730364132453546354633373335373336433639")),
  p("deep-291", "Deep Bay Leaves 1oz", "spices", 1.99, "pack", img("36373730364132453546354633353335373336433639")),
  p("deep-292", "Deep Whole Turmeric 7oz", "spices", 2.99, "pack", img("36373730364132453546354633323335373336433639")),
  p("deep-293", "Deep Citric Acid 4oz", "spices", 2.99, "pack", img("36373730364132453546354633353335373336433639")),

  // ── PICKLES (ADDITIONAL) ─────────────────────────────────────────────────
  p("deep-294", "Deep Garlic Pickle 10oz", "pickles", 3.59, "jar", img("39366336303734333733663566356532613630373736")),

  // ── SNACKS (ADDITIONAL) ──────────────────────────────────────────────────
  p("deep-295", "Deep Boondi 14.1oz", "snacks-mixes", 4.99, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-296", "Deep Masala Boondi 10oz", "snacks-mixes", 3.49, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-297", "Deep Plain Boondi 10oz", "snacks-mixes", 3.49, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-298", "Deep Panipuri Shells 3.5oz", "snacks-mixes", 2.49, "pack", img("39366336303330333133363332336532613630373736")),
  p("deep-299", "Deep Bombay Mix 12oz", "snacks-south-indian", 4.49, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-300", "Deep Kerala Mixture 12oz", "snacks-south-indian", 4.49, "pack", img("39366336303330333033363330336532613630373736")),
  p("deep-301", "Deep Madras Mix 12oz", "snacks-south-indian", 4.49, "pack", img("39366336303330333033363330336532613630373736")),

  // ── SPECIAL FASTING FOODS (UPVAS) ───────────────────────────────────────
  p("deep-302", "Deep Upvas Moraiyo 14oz", "special-foods", 3.49, "pack", img("36373730364132453546354633353333363636433639")),
  p("deep-303", "Deep Upvas Moraiyo 28oz", "special-foods", 5.99, "pack", img("36373730364132453546354633353333363636433639")),
  p("deep-304", "Deep Upvas Sabudana 2lb", "special-foods", 4.99, "bag", img("36373730364132453546354633353333363636433639")),

  // ── CHUTNEYS (SHELF-STABLE 7.7oz) ───────────────────────────────────────
  p("deep-305", "Deep Coriander Chutney 7.7oz", "chutneys", 3.49, "jar", img("39366336303739333433663566356532613630373736")),
  p("deep-306", "Deep Mint Chutney 7.7oz", "chutneys", 3.49, "jar", img("39366336303739333433663566356532613630373736")),
  p("deep-307", "Deep Green Chili Chutney 7.7oz", "chutneys", 3.49, "jar", img("39366336303739333433663566356532613630373736")),
  p("deep-308", "Deep Red Chili Chutney 7.7oz", "chutneys", 3.49, "jar", img("39366336303739333433663566356532613630373736")),

  // ── YOGURT (DAHI) ────────────────────────────────────────────────────────
  p("deep-349", "Deep Dahi Whole Milk Yogurt 2lb", "dairy", 3.99, "tub", "https://www.kesargrocery.com/images/P/DDW5.JPG"),
  p("deep-350", "Deep Dahi Whole Milk Yogurt 4lb", "dairy", 6.99, "tub", "https://www.kesargrocery.com/images/P/DDW5.JPG"),
];

export const deepFoodsFrozenProducts: Product[] = [
  // ── SAMOSAS, KACHORIS & BITES ────────────────────────────────────────────
  p("deep-198", "Deep Potato & Pea Samosas 8pc", "appetizers", 5.49, "pack", img("36373730364132453546354636443733363836433639"), "frozen-food"),
  p("deep-199", "Deep Potato & Pea Samosas 36pc", "appetizers", 19.19, "pack", img("36373730364132453734373636443733363936433639"), "frozen-food"),
  p("deep-200", "Deep Jalapeno Cheese Samosas 8pc", "appetizers", 6.29, "pack", img("36373730364132453546364136443733363836433639"), "frozen-food"),
  p("deep-201", "Deep Delhi Samosas 12pc", "appetizers", 10.39, "pack", img("36373730364132453546363337333634363436433639"), "frozen-food"),
  p("deep-202", "Deep Jumbo Punjabi Samosa 8pc", "appetizers", 9.79, "pack", img("36373730364132453546354637333730364136433639"), "frozen-food"),
  p("deep-203", "Deep Moong Dal Kachori 25pc", "appetizers", 11.19, "pack", img("36373730364132453546364236343644363936433639"), "frozen-food"),
  p("deep-204", "Deep Lilva Kachori 25pc", "appetizers", 11.99, "pack", img("36373730364132453546354636423643363936433639"), "frozen-food"),
  p("deep-205", "Deep Lilva Kachori 8pc", "appetizers", 4.69, "pack", img("36373730364132453546364236433639333836433639"), "frozen-food"),
  p("deep-206", "Deep Spicy Veggie Burgers 4pc", "appetizers", 5.69, "pack", img("36373730364132453546333336313632363436433639"), "frozen-food"),
  p("deep-207", "Deep Spicy Veggie Zingy Burgers 4pc", "appetizers", 5.69, "pack", img("39366336343632363136313330336532613630373736"), "frozen-food"),
  p("deep-208", "Deep Veggie Masala Patties 7pc", "appetizers", 5.69, "pack", img("39366336343632363136343366356532613630373736"), "frozen-food"),
  p("deep-209", "Deep Falafel Burgers 4pc", "appetizers", 5.39, "pack", img("36373730364132453332333136313632363436433639"), "frozen-food"),
  p("deep-210", "Deep Falafel Nuggets 12.7oz", "appetizers", 5.49, "pack", img("39366336343632363136313331336532613630373736"), "frozen-food"),
  p("deep-211", "Deep Spicy Paneer Bites 12.7oz", "appetizers", 7.99, "pack", img("39366336343632363136313337336532613630373736"), "frozen-food"),
  p("deep-212", "Deep Aloo Tikki 14.1oz", "appetizers", 5.89, "pack", img("39366336343632363136313366356532613630373736"), "frozen-food"),
  p("deep-213", "Deep Batata Vada 12pc", "appetizers", 9.99, "pack", img("39366336343632363637663566356532613630373736"), "frozen-food"),
  p("deep-214", "Deep Vegetable Cutlets 4pc", "appetizers", 5.09, "pack", img("39366336383633363537663566356532613630373736"), "frozen-food"),
  p("deep-215", "Deep Onion Pakora 10oz", "appetizers", 4.49, "pack", img("36373730364132453546333333313636363436433639"), "frozen-food"),
  p("deep-216", "Deep Spinach Pakora 10oz", "appetizers", 4.49, "pack", img("36373730364132453546333233313636363436433639"), "frozen-food"),
  p("deep-217", "Deep Tandoori Paneer Nuggets 10.6oz", "appetizers", 5.59, "pack", img("36373730364132453546333636313632363436433639"), "frozen-food"),
  p("deep-218", "Deep Masala Tofu Bites 12.7oz", "appetizers", 5.59, "pack", img("39366336343632363136313335336532613630373736"), "frozen-food"),
  p("deep-219", "Deep Masala Cauliflower Bites 12oz", "appetizers", 5.59, "pack", img("39366336343632363136313338336532613630373736"), "frozen-food"),
  p("deep-220", "Deep Vada for Dahi Vada 10pc", "appetizers", 4.09, "pack", img("39366336383634363637663566356532613630373736"), "frozen-food"),
  p("deep-221", "Deep Muthia 12oz", "appetizers", 4.09, "pack", img("39366336323664363437663566356532613630373736"), "frozen-food"),
  p("deep-222", "Deep Methi Muthia 12oz", "appetizers", 4.29, "pack", img("39366336323664366436663566356532613630373736"), "frozen-food"),
  p("deep-223", "Deep Jalapeno Cheese Samosas 36pc", "appetizers", 20.29, "pack", img("36373730364132453734364136443733363936433639"), "frozen-food"),
  p("deep-224", "Deep Jumbo Punjabi Style Samosas 15pc", "appetizers", 14.79, "pack", img("36373730364132453546373337303641363936433639"), "frozen-food"),

  // ── NAAN, KULCHA & PARATHA ───────────────────────────────────────────────
  p("deep-225", "Deep Bhatura 5pc", "bread", 4.79, "pack", img("39366336323632373233363366356532613630373736"), "frozen-food"),
  p("deep-226", "Deep Garlic Naan 4pc", "bread", 4.79, "pack", img("39366336323632373133383366356532613630373736"), "frozen-food"),
  p("deep-227", "Deep Paneer Kulcha 4pc", "bread", 4.29, "pack", img("39366336323632373333333366356532613630373736"), "frozen-food"),
  p("deep-228", "Deep Roghni Naan 4pc", "bread", 4.99, "pack", img("39366336323632373633323366356532613630373736"), "frozen-food"),
  p("deep-229", "Deep Tandoori Naan 5pc", "bread", 4.89, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-230", "Deep Tandoori Roti 5pc", "bread", 4.09, "pack", img("36373730364132453546333133323732363236433639"), "frozen-food"),
  p("deep-231", "Deep Rice Roti 10pc", "bread", 5.49, "pack", img("39366336323632373533313366356532613630373736"), "frozen-food"),
  p("deep-232", "Deep Cheese & Spinach Stuffed Naan 2pc", "bread", 3.69, "pack", img("39366336323632373333323366356532613630373736"), "frozen-food"),
  p("deep-233", "Deep Bhatura Family Pack 20pc", "bread", 15.29, "pack", img("36373730364132453546333633333732363236433639"), "frozen-food"),
  p("deep-234", "Deep Homestyle Paratha Family Pack 20pc", "bread", 15.49, "pack", img("39366336323632373333313366356532613630373736"), "frozen-food"),
  p("deep-235", "Deep Lachcha Paratha Family Pack 20pc", "bread", 15.89, "pack", img("39366336323632373233303366356532613630373736"), "frozen-food"),
  p("deep-236", "Deep Aloo Paratha 4pc", "bread", 4.49, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-237", "Deep Paneer Paratha 4pc", "bread", 5.19, "pack", img("39366336323632373233343366356532613630373736"), "frozen-food"),
  p("deep-238", "Deep Mixed Vegetable Paratha 4pc", "bread", 5.69, "pack", img("39366336323632373433393366356532613630373736"), "frozen-food"),
  p("deep-239", "Deep Malaysian Style Whole Wheat Paratha 5pc", "bread", 4.69, "pack", img("39366336323632373533333366356532613630373736"), "frozen-food"),

  // ── SOUTH INDIAN ────────────────────────────────────────────────────────
  p("deep-240", "Deep Onion Rava Masala Dosa 4pc", "south-indian", 5.19, "pack", img("36373730364132453546354636443732373536433639"), "frozen-food"),
  p("deep-241", "Deep Mysore Masala Dosa 4pc", "south-indian", 5.19, "pack", img("36373730364132453546354636443644373536433639"), "frozen-food"),
  p("deep-242", "Deep Masala Dosa 4pc", "south-indian", 5.19, "pack", img("36373730364132453546354636343644373536433639"), "frozen-food"),
  p("deep-243", "Deep Plain Dosa 8pc", "south-indian", 4.59, "pack", img("36373730364132453546363437303733363436433639"), "frozen-food"),
  p("deep-244", "Deep Idli 6pc", "south-indian", 4.49, "pack", img("36373730364132453546354636343639373536433639"), "frozen-food"),
  p("deep-245", "Deep Upma 10oz", "south-indian", 4.59, "pack", img("39366336353735373037663566356532613630373736"), "frozen-food"),
  p("deep-246", "Deep Mendu Vada 8pc", "south-indian", 4.29, "pack", img("39366336353735373037663566356532613630373736"), "frozen-food"),

  // ── VEGETARIAN ENTREES ──────────────────────────────────────────────────
  p("deep-247", "Deep Paneer Tikka Masala 9oz", "frozen-entrees", 6.09, "pack", img("36373730364132453644373437303639363736433639"), "frozen-food"),
  p("deep-248", "Deep Spinach Paneer 9oz", "frozen-entrees", 6.29, "pack", img("36373730364132453546373037303639363736433639"), "frozen-food"),
  p("deep-249", "Deep Palak Paneer 10oz", "frozen-entrees", 6.99, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),

  // ── NON-VEGETARIAN ENTREES ──────────────────────────────────────────────
  p("deep-250", "Deep Coconut Chicken Korma 9oz", "frozen-non-veg", 6.19, "pack", img("36373730364132453546364236333642363436433639"), "frozen-food", "HALAL"),
  p("deep-251", "Deep Butter Chicken 9oz", "frozen-non-veg", 6.19, "pack", img("36373730364132453546363336323642363436433639"), "frozen-food", "HALAL"),
  p("deep-252", "Deep Chicken Tandoori with Spinach 9oz", "frozen-non-veg", 6.49, "pack", img("36373730364132453546373237333734373436433639"), "frozen-food", "HALAL"),
  p("deep-253", "Deep Chicken Curry with Rice 9oz", "frozen-non-veg", 6.49, "pack", img("36373730364132453546373236333633373436433639"), "frozen-food", "HALAL"),
  p("deep-254", "Deep Chicken Biryani 9oz", "frozen-non-veg", 18.29, "pack", img("36373730364132453546363236333642363436433639"), "frozen-food", "HALAL"),

  // ── SWEETS & MITHAI ─────────────────────────────────────────────────────
  p("deep-255", "Deep Kala Kand 14.1oz", "frozen-sweets", 14.69, "pack", img("36373730364132453546333233343644363236433639"), "frozen-food"),
  p("deep-256", "Deep Kesar Rasmalai 2.2lb", "frozen-sweets", 17.89, "pack", img("36373730364132453546364237323733363436433639"), "frozen-food"),
  p("deep-257", "Deep Rasmalai 2.2lb", "frozen-sweets", 17.59, "pack", img("36373730364132453546364437323733363436433639"), "frozen-food"),
  p("deep-258", "Deep Kandoi Milk Cake 12oz", "frozen-sweets", 9.19, "pack", img("36373730364132453546333633313733363436433639"), "frozen-food"),
  p("deep-259", "Deep Kandoi Mysore Pak 12oz", "frozen-sweets", 9.19, "pack", img("36373730364132453546333433313733363436433639"), "frozen-food"),
  p("deep-260", "Deep Kaju Katli 14.1oz", "frozen-sweets", 14.69, "pack", img("36373730364132453546333433343644363236433639"), "frozen-food"),

  // ── FROZEN CHUTNEYS ─────────────────────────────────────────────────────
  p("deep-261", "Deep Mint Chutney Quick Cups 10oz", "frozen-chutneys", 4.49, "pack", img("36373730364132453546333333313633363636433639"), "frozen-food"),
  p("deep-262", "Deep Pani Puri Concentrate 10oz", "frozen-chutneys", 4.49, "pack", img("36373730364132453546333533313633363636433639"), "frozen-food"),
  p("deep-263", "Deep Coriander Chutney Quick Cups 10oz", "frozen-chutneys", 4.49, "pack", img("36373730364132453546333233313633363636433639"), "frozen-food"),
  p("deep-264", "Deep Coconut Chutney Quick Cups 10oz", "frozen-chutneys", 4.49, "pack", img("36373730364132453546333133313633363636433639"), "frozen-food"),
  p("deep-265", "Deep Falafel Chutney Quick Cups 10oz", "frozen-chutneys", 4.59, "pack", img("36373730364132453546333833313633363636433639"), "frozen-food"),
  p("deep-266", "Deep Spicy Pesto Quick Cups 10oz", "frozen-chutneys", 6.39, "pack", img("36373730364132453546333933313633363636433639"), "frozen-food"),

  // ── KATI ROLLS ──────────────────────────────────────────────────────────
  p("deep-267", "Deep Kati Roll Paneer Tikka 7oz", "kati-rolls", 4.39, "pack", img("36373730364132453546373437303732364236433639"), "frozen-food"),
  p("deep-268", "Deep Kati Roll Aloo Tikki 7oz", "kati-rolls", 4.39, "pack", img("36373730364132453546373436313732364236433639"), "frozen-food"),

  // ── IQF FROZEN VEGETABLES ────────────────────────────────────────────────
  p("deep-309", "Deep Baby Bhindi 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/3b4f7f8b0c7710b72f96b348d678d77432aadee3_533x.png", "frozen-food"),
  p("deep-310", "Deep Bhindi Cut Okra 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/42f8284903bd17bddc90539c8e5c79c891416bda_533x.jpg", "frozen-food"),
  p("deep-311", "Deep Carrots Sliced 12oz", "frozen-vegetables", 3.49, "pack", img("39366336303733373133383366356532613630373736"), "frozen-food"),
  p("deep-312", "Deep Drumsticks Moringa 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/23c9efd280ea577b70607ecf2fc6903d4979e340_533x.png", "frozen-food"),
  p("deep-313", "Deep Green Chilli 12oz", "frozen-vegetables", 3.49, "pack", "https://talesofindia.com.au/cdn/shop/files/Deep-Frozen-Green-Chillies-Hot-340g.jpg", "frozen-food"),
  p("deep-314", "Deep Guvar 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/ba3dc26c5f40320e4a7861638f042d7ce2f10012_533x.png", "frozen-food"),
  p("deep-315", "Deep Kantola 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/0a57e7174df86bf3648102d37ca87110515171c4_533x.png", "frozen-food"),
  p("deep-316", "Deep Karela Ring Cut 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/f927131b4da0d0f8f23277e9aaea3cb2be7cfe31_533x.jpg", "frozen-food"),
  p("deep-317", "Deep Palak Spinach 12oz", "frozen-vegetables", 3.99, "pack", "https://www.indusbasket.com/cdn/shop/products/vegetables-deep-frozen-spinach-palak-340-gm-20082921242790_1024x.jpg?v=1601845768", "frozen-food"),
  p("deep-318", "Deep Parval Pointed Gourd 12oz", "frozen-vegetables", 3.99, "pack", img("39366336303330333033363330336532613630373736"), "frozen-food"),
  p("deep-319", "Deep Punjabi Tinda 12oz", "frozen-vegetables", 3.99, "pack", "https://talesofindia.com.au/cdn/shop/files/b5347b4947ae9ef5403cd3870b9e558fe4814415_533x.jpg", "frozen-food"),
  p("deep-320", "Deep Shredded Coconut 12oz", "frozen-vegetables", 3.49, "pack", "https://talesofindia.com.au/cdn/shop/files/798a7a717e489a62e13c7f55b7dda90ce492889d_533x.jpg", "frozen-food"),
  p("deep-321", "Deep Amla Whole 12oz", "frozen-vegetables", 4.49, "pack", "https://shopatcloves.com/wp-content/uploads/2021/04/Amla-Whole-Deep-12oz.jpg", "frozen-food"),
  p("deep-322", "Deep Green Peas 2lb", "frozen-vegetables", 5.99, "bag", "https://talesofindia.com.au/cdn/shop/files/dc8196e1b7ca7ecfcd71735556b5aecfcfb1d165_533x.jpg", "frozen-food"),
  p("deep-323", "Deep Mix Vegetables 4-Way 2lb", "frozen-vegetables", 5.99, "bag", "https://talesofindia.com.au/cdn/shop/files/Deep-Mixed-Vegetables-907g-download.jpg", "frozen-food"),
  p("deep-324", "Deep Green Mango Diced 12oz", "frozen-vegetables", 3.99, "pack", img("39366336373631333133313366356532613630373736"), "frozen-food"),
  p("deep-325", "Deep Falsa 12oz", "frozen-vegetables", 3.99, "pack", "https://grosury.com/wp-content/uploads/2023/04/IMG_20230427_155843.jpg", "frozen-food"),
  p("deep-326", "Deep Jamun 12oz", "frozen-vegetables", 3.99, "pack", "https://gandhifood.com/cdn/shop/files/image_1024x1024_2x_b61d7ee1-aafe-42d2-9f6f-4bc8b8abb563_1024x.jpg?v=1691513034", "frozen-food"),

  // ── FROZEN VEG ENTREES (ADDITIONAL) ─────────────────────────────────────
  p("deep-327", "Deep Dal Tadka 10oz", "frozen-entrees", 6.49, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-328", "Deep Eggplant Bharta 10oz", "frozen-entrees", 6.49, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-329", "Deep Punjabi Kadhi 10oz", "frozen-entrees", 6.49, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-330", "Deep Dal Makhani 10oz", "frozen-entrees", 7.29, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-331", "Deep Malai Kofta 10oz", "frozen-entrees", 7.49, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-332", "Deep Methi Malai Mutter 10oz", "frozen-entrees", 7.49, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-333", "Deep Navrattan Korma 10oz", "frozen-entrees", 7.99, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),
  p("deep-334", "Deep Paneer Makhani 10oz", "frozen-entrees", 7.99, "pack", img("36373730364132453546354637303730363536433639"), "frozen-food"),

  // ── FROZEN BREADS (ADDITIONAL) ──────────────────────────────────────────
  p("deep-335", "Deep Lachcha Naan 5pc", "bread", 4.49, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-336", "Deep Whole Wheat Naan 5pc", "bread", 4.49, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-337", "Deep Garlic Naan Family Pack 12pc", "bread", 10.99, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-338", "Deep Tandoori Naan Family Pack 16pc", "bread", 13.49, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-339", "Deep Onion Kulcha 4pc", "bread", 4.49, "pack", img("39366336323632373333333366356532613630373736"), "frozen-food"),
  p("deep-340", "Deep Makki Ki Roti 5pc", "bread", 4.29, "pack", img("39366336323632373133373366356532613630373736"), "frozen-food"),
  p("deep-341", "Deep Lachcha Paratha 5pc", "bread", 4.79, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-342", "Deep Ajwain Paratha 5pc", "bread", 4.79, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-343", "Deep Homestyle Paratha 5pc", "bread", 4.79, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-344", "Deep Masala Paratha 5pc", "bread", 4.99, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-345", "Deep Methi Paratha 5pc", "bread", 4.99, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-346", "Deep Aloo Paratha Family Pack 16pc", "bread", 13.49, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-347", "Deep Gobi Paratha 4pc", "bread", 5.19, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
  p("deep-348", "Deep Mooli Paratha 4pc", "bread", 5.19, "pack", img("39366336323632373133313366356532613630373736"), "frozen-food"),
];
