
// ========================================
// FLASHHELPER - MAIN SCRIPT
// ========================================


// ========================================
// 1. LANGUAGE TRANSLATIONS
// ========================================

const translations = {
  vi: {
    "meta.description":
      "FlashHelper kết nối sinh viên cần hỗ trợ với những sinh viên ở gần thông qua GPS và dữ liệu vị trí.",
    "meta.title": "FlashHelper — Sự giúp đỡ luôn gần hơn bạn nghĩ",

    "nav.about": "Giới thiệu",
    "nav.features": "Tính năng",
    "nav.how": "Cách hoạt động",
    "nav.preview": "Giao diện",
    "nav.cta": "Khám phá ngay",

    "hero.eyebrow": "Dành cho cộng đồng sinh viên HCMUT",
    "hero.title": "Nhất cự ly,<br><span>nhì tốc độ.</span>",
    "hero.description":
      "Một nhấp là xong. Kết nối với những người ở gần và nhận được sự giúp đỡ khi cần.",
    "hero.primary": "Khám phá cách hoạt động",
    "hero.secondary": "Xem giao diện",
    "hero.note": "Một cộng đồng sinh viên sẵn sàng hỗ trợ lẫn nhau.",
    "hero.float1.title": "Hỗ trợ nhanh",
    "hero.float1.description": "Kết nối trong khuôn viên trường",
    "hero.float2.description": "Sự giúp đỡ luôn gần hơn bạn nghĩ",

    "about.kicker": "VẤN ĐỀ &amp; Ý TƯỞNG",
    "about.title":
      "Khi cần giúp đỡ,<br><span>người ở gần có thể là câu trả lời.</span>",
    "about.description1":
      "Trong khuôn viên trường, sinh viên đôi khi cần hỗ trợ cho những tình huống bất ngờ như mượn dụng cụ học tập, tìm đường hoặc giải quyết một vấn đề phát sinh. Tuy nhiên, việc tìm người giúp đỡ thường phải thông qua các hội nhóm hoặc liên hệ thủ công, khiến quá trình này mất thời gian và khó tiếp cận người ở gần.",
    "about.description2":
      "FlashHelper kết nối sinh viên cần hỗ trợ với những sinh viên ở khu vực lân cận. Ứng dụng sử dụng GPS và dữ liệu vị trí để chia sẻ yêu cầu, giúp người ở gần có thể nhận thông báo hoặc chủ động tìm kiếm yêu cầu phù hợp.",
    "about.card1.title": "Khi bạn cần giúp đỡ",
    "about.card1.description":
      "Tạo yêu cầu, mô tả nhu cầu và chia sẻ địa điểm để những người ở gần có thể tiếp cận.",
    "about.card2.title": "Khi bạn có thể giúp",
    "about.card2.description":
      "Nhận thông báo về yêu cầu gần bạn hoặc chủ động khám phá danh sách yêu cầu trong khu vực.",
    "about.card3.title": "Kết nối cộng đồng",
    "about.card3.description":
      "Trao đổi, theo dõi quá trình hỗ trợ và ghi nhận những đóng góp cho cộng đồng sinh viên.",

    "value.kicker": "VÌ SAO CHỌN FLASHHELPER",
    "value.title": "Sự giúp đỡ luôn gần<br><span>hơn bạn nghĩ.</span>",
    "value.description":
      "Thay vì tìm kiếm sự giúp đỡ một cách thủ công, FlashHelper tận dụng thông tin vị trí để đưa các yêu cầu hỗ trợ đến gần hơn với cộng đồng sinh viên xung quanh. Chỉ với một vài thao tác, người cần giúp đỡ có thể chia sẻ nhu cầu và kết nối với những người có khả năng hỗ trợ.",
    "value.highlight":
      "Không cần tìm kiếm khắp nơi. Sự giúp đỡ có thể bắt đầu ngay từ những người ở gần bạn.",

    "features.kicker": "BẠN CÓ THỂ LÀM GÌ",
    "features.title":
      "Mọi kết nối cần thiết<br><span>trong một ứng dụng.</span>",
    "features.description":
      "Từ lúc tạo yêu cầu đến khi hoàn thành hỗ trợ, FlashHelper mang đến các thao tác rõ ràng và dễ theo dõi.",
    "features.card1.title": "Tạo yêu cầu hỗ trợ",
    "features.card1.description":
      "Mô tả nhu cầu, chọn địa điểm và gửi yêu cầu chỉ với một vài thao tác.",
    "features.card2.title": "Kết nối theo vị trí",
    "features.card2.description":
      "Nhận thông báo về yêu cầu gần bạn hoặc chủ động khám phá danh sách hỗ trợ trong khu vực lân cận.",
    "features.card3.title": "Chat và cập nhật",
    "features.card3.description":
      "Trao đổi trực tiếp, nhận thông báo và theo dõi trạng thái của yêu cầu.",
    "features.card4.title": "Điểm thưởng",
    "features.card4.description":
      "Ghi nhận những đóng góp thông qua hệ thống điểm thưởng của FlashHelper.",

    "how.kicker": "CÁCH HOẠT ĐỘNG",
    "how.title": "Bạn cần giúp,<br>hay muốn giúp?",
    "how.description":
      "FlashHelper kết nối hai vai trò trong cùng một cộng đồng: người cần hỗ trợ và người sẵn sàng giúp đỡ.",

    "how.requester.label": "REQUESTER · NGƯỜI CẦN HỖ TRỢ",
    "how.requester.title": "Gửi yêu cầu<br>chỉ với vài bước.",
    "how.requester.step1": "Mô tả điều bạn đang cần.",
    "how.requester.step2": "Chọn và xác nhận địa điểm.",
    "how.requester.step3":
      "Theo dõi người nhận hỗ trợ và trạng thái yêu cầu.",

    "how.helper.label": "HELPER · NGƯỜI HỖ TRỢ",
    "how.helper.title": "Nhìn thấy nhu cầu,<br>trao đi sự giúp đỡ.",
    "how.helper.step1": "Nhận thông báo về yêu cầu gần bạn.",
    "how.helper.step2":
      "Khám phá danh sách và chọn yêu cầu phù hợp.",
    "how.helper.step3":
      "Hoàn thành hoạt động hỗ trợ và nhận điểm thưởng.",

    "preview.kicker": "GIAO DIỆN ỨNG DỤNG",
    "preview.title":
      "Từng thao tác<br><span>đều được thiết kế đơn giản.</span>",
    "preview.description":
      "Khám phá một số màn hình tiêu biểu trong bản thiết kế UI/UX của FlashHelper.",
    "preview.home": "Trang chủ",
    "preview.create": "Tạo yêu cầu",
    "preview.location": "Chọn địa điểm",
    "preview.detail": "Chi tiết yêu cầu",
    "preview.chat": "Trò chuyện",
    "preview.points": "Điểm thưởng",
    "preview.note":
      "Một số màn hình từ bản thiết kế UI/UX của FlashHelper.",

    "cta.kicker": "KHÁM PHÁ FLASHHELPER",
    "cta.title":
      "Một lời đề nghị.<br>Một sự giúp đỡ.<br><span>Một cộng đồng.</span>",
    "cta.description":
      "Tìm hiểu thêm về ý tưởng, quá trình thiết kế và trải nghiệm prototype của FlashHelper.",
    "cta.status": "Trạng thái dự án: Đang phát triển",
    "cta.statusDescription":
      "FlashHelper hiện đang trong quá trình phát triển. Bạn có thể khám phá bản thiết kế UI/UX và prototype tương tác.",
    "cta.figma": "Khám phá prototype trên Figma",
    "cta.behance": "Xem case study trên Behance",

    "footer.tagline":
      "Gắn kết sinh viên qua những hành động tử tế nhỏ bé.",
    "footer.backToTop": "Về đầu trang ↑",
    "footer.copyright": "Dự án sinh viên.",

    "images.home": "Giao diện trang chủ FlashHelper",
    "images.createRequest": "Màn hình tạo yêu cầu hỗ trợ trên FlashHelper",
    "images.location": "Màn hình chọn địa điểm",
    "images.helperDetail": "Màn hình chi tiết yêu cầu dành cho người hỗ trợ",
    "images.chat": "Màn hình trò chuyện",
    "images.points": "Màn hình điểm thưởng",
    "images.banner": "Banner dự án FlashHelper"
  },

  en: {
    "meta.description":
      "FlashHelper connects students who need help with nearby students through GPS and location-based services.",
    "meta.title": "FlashHelper — Help is closer than you think",

    "nav.about": "About",
    "nav.features": "Features",
    "nav.how": "How It Works",
    "nav.preview": "App Preview",
    "nav.cta": "Explore Now",

    "hero.eyebrow": "Made for the HCMUT student community",
    "hero.title": "Stay close,<br><span>help comes fast.</span>",
    "hero.description":
      "Just one tap to connect with nearby students and get the help you need.",
    "hero.primary": "Discover How It Works",
    "hero.secondary": "Explore the App",
    "hero.note": "A student community ready to support one another.",
    "hero.float1.title": "Quick Support",
    "hero.float1.description": "Connect across campus",
    "hero.float2.description": "Help is closer than you think",

    "about.kicker": "THE PROBLEM &amp; THE IDEA",
    "about.title":
      "When you need help,<br><span>someone nearby may have the answer.</span>",
    "about.description1":
      "On campus, students sometimes encounter unexpected situations that require assistance, such as borrowing study materials, finding their way, or dealing with sudden problems. However, finding help often means relying on social groups or contacting people individually, which can take time and make it difficult to reach someone nearby.",
    "about.description2":
      "FlashHelper connects students who need assistance with others in nearby areas. Using GPS and location data, the app allows users to share requests so nearby students can receive notifications or actively discover relevant requests.",
    "about.card1.title": "When You Need Help",
    "about.card1.description":
      "Create a request, describe what you need, and share your location so nearby students can find you.",
    "about.card2.title": "When You Can Help",
    "about.card2.description":
      "Receive notifications about nearby requests or explore available requests in your area.",
    "about.card3.title": "Build a Community",
    "about.card3.description":
      "Communicate, follow the support process, and recognize contributions to the student community.",

    "value.kicker": "WHY FLASHHELPER",
    "value.title": "Help is closer<br><span>than you think.</span>",
    "value.description":
      "Instead of searching for help manually, FlashHelper uses location information to bring support requests closer to the surrounding student community. With just a few steps, students can share what they need and connect with people who are able to help.",
    "value.highlight":
      "No need to search everywhere. Help can start with the people closest to you.",

    "features.kicker": "WHAT YOU CAN DO",
    "features.title":
      "Everything you need<br><span>in one application.</span>",
    "features.description":
      "From creating a request to completing a support activity, FlashHelper provides clear and easy-to-follow interactions.",
    "features.card1.title": "Create Support Requests",
    "features.card1.description":
      "Describe your needs, select a location, and submit a request in just a few steps.",
    "features.card2.title": "Location-Based Connections",
    "features.card2.description":
      "Receive notifications about nearby requests or actively explore available support requests in your area.",
    "features.card3.title": "Chat and Updates",
    "features.card3.description":
      "Communicate directly, receive notifications, and track request statuses.",
    "features.card4.title": "Reward Points",
    "features.card4.description":
      "Recognize contributions through FlashHelper's reward points system.",

    "how.kicker": "HOW IT WORKS",
    "how.title": "Need some help,<br>or ready to help?",
    "how.description":
      "FlashHelper connects two roles within the same community: students who need assistance and students who are ready to help.",

    "how.requester.label": "REQUESTER · NEEDS HELP",
    "how.requester.title": "Send a request<br>in just a few steps.",
    "how.requester.step1": "Describe what you need.",
    "how.requester.step2": "Select and confirm your location.",
    "how.requester.step3":
      "Track the person helping you and the request status.",

    "how.helper.label": "HELPER · READY TO HELP",
    "how.helper.title": "See a need,<br>make a difference.",
    "how.helper.step1": "Receive notifications about nearby requests.",
    "how.helper.step2":
      "Explore the list and choose a suitable request.",
    "how.helper.step3":
      "Complete the support activity and earn reward points.",

    "preview.kicker": "APP PREVIEW",
    "preview.title":
      "Every interaction<br><span>designed to be simple.</span>",
    "preview.description":
      "Explore selected screens from FlashHelper's UI/UX design.",
    "preview.home": "Home",
    "preview.create": "Create Request",
    "preview.location": "Select Location",
    "preview.detail": "Request Details",
    "preview.chat": "Chat",
    "preview.points": "Reward Points",
    "preview.note":
      "Selected screens from FlashHelper's UI/UX design.",

    "cta.kicker": "EXPLORE FLASHHELPER",
    "cta.title":
      "One request.<br>One helping hand.<br><span>One community.</span>",
    "cta.description":
      "Learn more about FlashHelper's idea, design process, and interactive prototype.",
    "cta.status": "Project Status: In Development",
    "cta.statusDescription":
      "FlashHelper is currently under development. Explore the UI/UX design and interactive prototype.",
    "cta.figma": "Explore Figma Prototype",
    "cta.behance": "View Behance Case Study",

    "footer.tagline":
      "Bringing students closer through small acts of kindness.",
    "footer.backToTop": "Back to top ↑",
    "footer.copyright": "Student project.",

    "images.home": "FlashHelper home screen",
    "images.createRequest": "FlashHelper support request creation screen",
    "images.location": "Location selection screen",
    "images.helperDetail": "Request details screen for helpers",
    "images.chat": "Chat screen",
    "images.points": "Reward points screen",
    "images.banner": "FlashHelper project banner"
  }
};


// ========================================
// 2. LANGUAGE SWITCHING
// ========================================

const languageButtons = document.querySelectorAll(".language-btn");

const getSavedLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem("flashhelper-language");

    return savedLanguage === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
};


function setLanguage(language) {
  const selectedLanguage = translations[language]
    ? language
    : "vi";

  const dictionary = translations[selectedLanguage];

  // Update document language
  document.documentElement.lang = selectedLanguage;

  // Update translated text
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  // Update image alt text
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;

    if (dictionary[key] !== undefined) {
      element.alt = dictionary[key];
    }
  });

  // Update meta description
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;

    if (dictionary[key] !== undefined) {
      element.setAttribute("content", dictionary[key]);
    }
  });

  // Update language buttons
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  // Save selected language
  try {
    localStorage.setItem("flashhelper-language", selectedLanguage);
  } catch {
    // The page still works if localStorage is unavailable.
  }
}


// Language button events
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});


// Apply saved language when page loads
setLanguage(getSavedLanguage());


// ========================================
// 3. MOBILE NAVIGATION
// ========================================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");


function closeMenu() {
  nav.classList.remove("open");

  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Mở menu");

  toggle.innerHTML = '<span aria-hidden="true">☰</span>';
}


function openMenu() {
  nav.classList.add("open");

  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Đóng menu");

  toggle.innerHTML = '<span aria-hidden="true">×</span>';
}


if (toggle && nav) {

  // Open or close menu
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });


  // Close menu after selecting a navigation link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });


  // Close menu with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });


  // Close mobile menu when switching to desktop layout
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

}


// ========================================
// 4. SCROLL REVEAL ANIMATION
// ========================================
document.documentElement.classList.add("js-reveal");
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}


// ========================================
// 5. FOOTER YEAR
// ========================================

const copyrightYear = document.querySelector(".copyright-year");

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
