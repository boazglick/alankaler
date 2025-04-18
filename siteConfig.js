module.exports = {
  siteUrl: "https://alankaler.co.il", // Site domain. Do not include a trailing slash!

  postsPerPage: 80, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "קהילת רשלנות רפואית בישראל", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "רשלנות רפואית בישראל זו מגפה וכולם צריכים להיות ערניים לגביה. הקהילה שלנו עוזרת לאלפי משפחות בישראל לקבל את הפיצוי המגיע להן", // This allows an alternative site description for meta data for pages.
  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "קהילת רשלנות רפואית בישראל", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://wordpress.theasdfghjkl.com",
  subscribeWidget: {
    visible: false,
    title: "קהילת רשלנות רפואית בישראל",
    helpText: "הישארו מעודכנים",
    successMessage: "תודה ההודעה נשלחה בהצלחה",
  },
  header: {
    navigation: [
      {
        label: "דף הבית",
        url: "https://alankaler.co.il/",
      },
      {
        label: "יצירת קשר",
        url: "https://alankaler.co.il/contact",
      },
    ],
  },
  footer: {
    copyright: "כל הזכויות שמורות ל-קהילת רשלנות רפואית בישראל ",
    navigation: [
      {
        label: "דף הבית",
        url: "https://alankaler.co.il/",
      },
      {
        label: "Sitemap",
        url: "https://alankaler.co.il/sitemap.xml",
      },
      
      {
        label: "יצירת קשר",
        url: "https://alankaler.co.il/contact",
      },
      
    ],
  },
  socialLinks: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "קהילת רשלנות רפואית בישראל",
    successMessage: "נהיה עמך בקשר בהקדם",
  },
  metadata: {
    title: "קהילת רשלנות רפואית בישראל",
    description:"רשלנות רפואית בישראל זו מגפה וכולם צריכים להיות ערניים לגביה. הקהילה שלנו עוזרת לאלפי משפחות בישראל לקבל את הפיצוי המגיע להן",
    googleAdsenseAccount: "ca-pub-8148276210846697",    
  },
  twitterCard: {
    title: "",
    description:
      "",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "קהילת רשלנות רפואית בישראל",
    description:
      "רשלנות רפואית בישראל זו מגפה וכולם צריכים להיות ערניים לגביה. הקהילה שלנו עוזרת לאלפי משפחות בישראל לקבל את הפיצוי המגיע להן.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "קהילת רשלנות רפואית בישראל",
  siteDescription:
    "רשלנות רפואית בישראל זו מגפה וכולם צריכים להיות ערניים לגביה. הקהילה שלנו עוזרת לאלפי משפחות בישראל לקבל את הפיצוי המגיע להן",
  language: "he",
  logoUrl: "",
  iconUrl: "",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#2b6cb0`,
      },
      {
        varName: "--primary-color-active",
        value: `#2a4365`,
      },
      {
        varName: "--primary-color-light",
        value: `#bee3f8`,
      },
      {
        varName: "--sans-font",
        value: `"Assistant"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Assistant`,
      },
      { varName: "--serif-font-light", value: `400` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-medium", value: `400` },
      { varName: "--serif-font-bold", value: `700` },
    ],
    fonts: [
      {
        family: "Assistant",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
            {
        family: "Assistant",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        //fontDisplay: "swap",
        //strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Assistant",
        variants: ["300", "400", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
