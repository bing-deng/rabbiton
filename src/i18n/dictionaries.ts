export const SUPPORTED_LANGS = ["ja", "en", "zh"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = "ja";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    service: string;
    pricing: string;
    team: string;
    faq: string;
    contact: string;
    consult: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { num: string; label: string }[];
    coupleBadge: string;
    coupleTag: string;
    fortuneBadge: string;
    fortuneTag: string;
  };
  audience: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    list: { tag: string; title: string; lead: string; points: string[] }[];
  };
  pricing: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    monthSuffix: string;
    perMonth: string;
    requestLabel: string;
    badge: string;
    note: string;
    plans: {
      name: string;
      caption: string;
      monthly: string;
      perMatch: string;
      features: string[];
      cta: string;
      highlight: boolean;
    }[];
  };
  staff: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleAccent: string;
    titleC: string;
    lead: string;
    members: {
      role: string;
      name: string;
      initials: string;
      bio: string;
      tags: string[];
      image: string;
    }[];
  };
  voices: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    lead: string;
    monitorNote: string;
    monitorTag: string;
    items: { name: string; meta: string; body: string; monitor?: boolean }[];
  };
  faq: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    line: { small: string; big: string };
    form: { small: string; big: string };
  };
  footer: {
    tagline: string;
    companyHeading: string;
    guideHeading: string;
    info: { label: string; value: string }[];
    links: { key: string; label: string }[];
    conduct: string;
    rights: string;
    privacy: string;
    tos: string;
  };
};

const ja: Dictionary = {
  meta: {
    title: "RABBIT｜オンライン結婚相談所 — 国際結婚・語学・占いまで寄り添う",
    description:
      "夫婦で運営するオンライン結婚相談所 RABBIT。国内・国際結婚のお見合いから、語学レッスン、占い鑑定まで。あなたの一歩をあたたかくサポートします。",
  },
  nav: {
    home: "ホーム",
    about: "私たちについて",
    service: "サービス",
    pricing: "料金プラン",
    team: "講師紹介",
    faq: "よくある質問",
    contact: "お問い合わせ",
    consult: "無料相談",
  },
  hero: {
    badge: "オンライン結婚相談所 RABBIT",
    titleA: "あなたの一歩に、",
    titleAccent: "夫婦で寄り添う",
    titleB: "結婚相談所。",
    lead:
      "国内結婚はもちろん、国際結婚・語学・占いまで。「結婚したいけれど、どうすればいいかわからない」——そんなあなたの想いを、丁寧にかたちにしていく伴走型サービスです。",
    ctaPrimary: "無料相談を申し込む",
    ctaSecondary: "サービスを見る",
    stats: [
      { num: "月3名〜", label: "ご紹介人数" },
      { num: "夫婦", label: "二人体制で伴走" },
      { num: "国際", label: "結婚にも対応" },
    ],
    coupleBadge: "Couple Support",
    coupleTag: "夫婦で運営",
    fortuneBadge: "Fortune Telling",
    fortuneTag: "しん先生 在籍",
  },
  audience: {
    eyebrow: "For You",
    titleA: "こんな方に",
    titleAccent: "寄り添います",
    lead:
      "結婚も、語学も、占いも——「一歩が踏み出せない」気持ちに、わたしたちは真剣に向き合います。",
    items: [
      { title: "結婚したいけれど、出会いがない", body: "お仕事や生活の中で出会いが広がらない方へ。ひとりに合うお相手を月3名〜ご紹介。" },
      { title: "外国の方と話してみたい", body: "国際結婚・異文化恋愛に関心のある方を、文化の違いも踏まえて丁寧にサポート。" },
      { title: "恋愛・人生の悩みを相談したい", body: "経験豊富な占い師しん先生が、現実的な視点から人生の選択に寄り添います。" },
      { title: "趣味として語学を楽しみたい", body: "英語・日本語レッスンを週1/週2プランで。日常会話から国際恋愛まで。" },
      { title: "海外の友達を作りたい", body: "外国人会員との交流機会をご用意。結婚前提でない交流にも対応しています。" },
      { title: "一人で婚活するのが不安", body: "夫婦で運営しているから、男女どちらの目線でも安心してご相談いただけます。" },
    ],
  },
  services: {
    eyebrow: "Our Services",
    titleA: "三つの柱で、",
    titleAccent: "あなたの毎日",
    titleB: "を豊かに",
    lead: "結婚相談だけでなく、語学レッスンや占い鑑定まで。多角的に、あなたの人生に寄り添います。",
    list: [
      {
        tag: "Marriage",
        title: "結婚相談・お見合いサポート",
        lead: "日本人・外国人、どちらの会員にも対応。一人ひとりの出会いを大切に。",
        points: ["月3名〜のお相手紹介", "お見合い・カウンセリング", "国際結婚にも対応", "夫婦二人体制で安心"],
      },
      {
        tag: "Language",
        title: "語学レッスン",
        lead: "元看護師としての経験を活かした講師が、実践的に使える語学力へ導きます。",
        points: [
          "英語レッスン / 日本語レッスン",
          "週1プラン・週2プラン (50分)",
          "独学で日常会話を習得した講師による指導",
          "国際恋愛・異文化コミュニケーション対応",
        ],
      },
      {
        tag: "Fortune",
        title: "占い鑑定・パワーストーン",
        lead: "経験豊富な占い師「しん先生」が、現実的なアドバイスで未来を照らします。",
        points: [
          "恋愛・人生・結婚のお悩み相談",
          "的中だけでなく現実的なアドバイス",
          "パワーストーンの販売",
          "スーパーファン限定鑑定も",
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    titleA: "シンプルで、",
    titleAccent: "分かりやすい",
    titleB: "料金",
    lead: "入会金・成婚料を抑えた、オンライン結婚相談所ならではの料金体系。すべて税込表記です。",
    monthSuffix: "/月",
    perMonth: "¥",
    requestLabel: "要相談",
    badge: "Most Recommended",
    note: "※ 価格は変更になる場合がございます。最新の詳細は無料相談にてご確認ください。",
    plans: [
      {
        name: "日本人会員",
        caption: "国内結婚を目指す方に",
        monthly: "8,800",
        perMatch: "月3名ご紹介",
        features: [
          "月額会員費",
          "お見合い1回ごとのセッティング",
          "カウンセリング（オンライン）",
          "相性分析・プロフィール添削",
        ],
        cta: "このプランを相談する",
        highlight: false,
      },
      {
        name: "外国人会員",
        caption: "国際結婚を希望する方に",
        monthly: "27,500",
        perMatch: "お見合い 8,800円/回",
        features: [
          "国際結婚向けカウンセリング",
          "異文化コミュニケーション支援",
          "外国人会員との出会い",
          "語学サポートとの連携",
        ],
        cta: "国際プランの詳細",
        highlight: true,
      },
      {
        name: "語学レッスン",
        caption: "英語・日本語に触れたい方に",
        monthly: "要相談",
        perMatch: "週1 / 週2 (50分)",
        features: ["英語レッスン", "日本語レッスン", "初心者向けコースあり", "しん先生以外の講師も在籍"],
        cta: "レッスンを体験する",
        highlight: false,
      },
    ],
  },
  staff: {
    eyebrow: "Our Team",
    titleA: "夫婦で運営する、",
    titleB: "",
    titleAccent: "温かな",
    titleC: "結婚相談所",
    lead:
      "私たちは夫婦で運営する結婚相談所です。国内結婚だけでなく、国際結婚を希望する方にも一人ひとりに寄り添ったサポートを提供しています。",
    members: [
      {
        role: "代表 / 占い鑑定士",
        name: "SHIN",
        initials: "S",
        bio:
          "15年以上にわたり経営に携わり、東京で複数の飲食事業を運営。過去には歌舞伎町のホストクラブにて「柊凪沙」として活動し、グループ会長も務める。現在は沖縄に拠点を移し、占いの的中だけでなく経験と知識に基づく現実的なアドバイスでお悩み解決をサポート。パワーストーンの販売も行う。",
        tags: ["占い", "人生相談", "事業経営"],
        image: "/rabbit/shin.png",
      },
      {
        role: "語学講師 / カウンセラー",
        name: "YUKA",
        initials: "Y",
        bio:
          "元看護師として寄り添う力を活かし、安心して話せる環境づくりを大切にする講師。独学約半年で英語の日常会話を習得した経験を活かし、実際に使える語学力の育成にこだわる。語学・国際恋愛・異文化コミュニケーションのサポートも担当。家事や育児と両立しながら活動中。",
        tags: ["英語", "日本語", "国際恋愛"],
        image: "/rabbit/yuka.png",
      },
    ],
  },
  voices: {
    eyebrow: "Voices",
    titleA: "ご利用者の",
    titleAccent: "声",
    lead:
      "結婚・語学・占い——RABBITをご利用いただいた方々の、ありのままの声をご紹介します。",
    monitorNote:
      "※ 結婚相談所は現在、本格始動に向けて準備中です。下記の一部は「サービス開始前のモニター様の声」としていただいたご感想です。",
    monitorTag: "モニター様",
    items: [
      {
        name: "A.K. さん",
        meta: "30代女性",
        monitor: true,
        body:
          "最初は何から始めればいいか分からず不安でしたが、丁寧に寄り添ってもらえそうで安心しました。男女両方の視点からアドバイスがもらえるのも魅力的です。",
      },
      {
        name: "R.S. さん",
        meta: "40代男性",
        monitor: true,
        body:
          "海外の方とのお付き合いに不安がありましたが、文化や考え方の違いまでサポートしてもらえる点に安心感を感じました。語学面も含めてサポートしてもらえるのがありがたいです。",
      },
      {
        name: "M.T. さん",
        meta: "20代女性 / 占い鑑定",
        body:
          "しん先生の鑑定は当たるだけでなく、現実的にどう動くかまで教えてくれるのが本当にありがたいです。毎月の楽しみになっています。",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleA: "よくある",
    titleAccent: "ご質問",
    items: [
      { q: "オンライン結婚相談所とは何ですか？", a: "店舗に足を運ばずに、オンラインでお見合いやカウンセリングを受けられる結婚相談所です。RABBITでは、Zoom等を活用して、全国・海外からでもご利用いただけます。" },
      { q: "日本人会員と外国人会員のちがいは？", a: "日本人会員プランは国内結婚を希望される方向け、外国人会員プランは国際結婚・異文化パートナーを希望される方向けです。ご希望に合わせてご案内します。" },
      { q: "語学レッスンは結婚相談と一緒に受けられますか？", a: "はい、可能です。国際結婚を視野に入れた方が語学レッスンを併用されるケースも多く、割引のご相談も承ります。" },
      { q: "占いだけ利用することもできますか？", a: "もちろん可能です。しん先生による鑑定のみのご利用、パワーストーンの購入のみのご利用も歓迎しています。" },
      { q: "まずは話だけ聞いてみたいのですが？", a: "初回の無料相談をご用意しています。入会を決めていない段階でも遠慮なくお問い合わせください。" },
    ],
  },
  cta: {
    eyebrow: "Free Consultation",
    titleA: "ふたりの",
    titleAccent: "はじめの一歩",
    titleB: "を、今日、踏み出してみませんか。",
    lead:
      "「自分に合うかわからない」「まずは話を聞くだけ」——大歓迎です。夫婦でじっくりお話をうかがいます。",
    line: { small: "LINE で相談", big: "友だち追加" },
    form: { small: "オンライン相談", big: "予約フォームへ" },
  },
  footer: {
    tagline:
      "夫婦で運営する、オンライン結婚相談所。国内・国際結婚から語学、占いまで、あなたの一歩にそっと寄り添います。",
    companyHeading: "会社概要",
    guideHeading: "ご案内",
    info: [
      { label: "サービス名", value: "オンライン結婚相談所 RABBIT" },
      { label: "事業内容", value: "結婚相談・語学レッスン・占い鑑定・パワーストーン販売" },
      { label: "拠点", value: "沖縄 / オンライン全国対応" },
      { label: "運営", value: "夫婦による共同運営" },
    ],
    links: [
      { key: "service", label: "サービス一覧" },
      { key: "pricing", label: "料金プラン" },
      { key: "team", label: "講師・スタッフ紹介" },
      { key: "faq", label: "よくある質問" },
      { key: "contact", label: "お問い合わせ" },
    ],
    conduct:
      "当サービスでは、他のお客様や運営に対する誹謗中傷・迷惑行為はご遠慮いただいております。悪質な場合には、利用制限や法的対応を含め適切に対処いたします。",
    rights: "© {{year}} RABBIT Online Marriage. All rights reserved.",
    privacy: "プライバシーポリシー",
    tos: "特定商取引法に基づく表記",
  },
};

const en: Dictionary = {
  meta: {
    title: "RABBIT | Online Marriage Agency — Matchmaking, Languages & Fortune",
    description:
      "A couple-run online marriage agency. From domestic and international matchmaking to language lessons and fortune-telling, we walk the first step with you.",
  },
  nav: {
    home: "Home",
    about: "About",
    service: "Services",
    pricing: "Pricing",
    team: "Team",
    faq: "FAQ",
    contact: "Contact",
    consult: "Free consult",
  },
  hero: {
    badge: "RABBIT — Online Marriage Agency",
    titleA: "A marriage agency",
    titleAccent: "run by a couple",
    titleB: "who walk beside you.",
    lead:
      "From domestic to international marriage, language lessons to fortune-telling. When \"I want to marry, but I don't know how\" feels overwhelming — we turn that feeling into a plan, step by step.",
    ctaPrimary: "Book a free consult",
    ctaSecondary: "See services",
    stats: [
      { num: "3+/mo", label: "Introductions" },
      { num: "Couple", label: "Dual-perspective support" },
      { num: "Global", label: "Intl. marriage ready" },
    ],
    coupleBadge: "Couple Support",
    coupleTag: "Run by a couple",
    fortuneBadge: "Fortune Telling",
    fortuneTag: "Shin-sensei on team",
  },
  audience: {
    eyebrow: "For You",
    titleA: "We stand",
    titleAccent: "close to you",
    lead:
      "Marriage, languages, or fortune — when you can't take that first step, we take it seriously alongside you.",
    items: [
      { title: "I want to marry but have no opportunities", body: "For those whose daily life rarely leads to meeting new people. We introduce 3+ matches a month, chosen carefully for you." },
      { title: "I'd love to talk with someone from abroad", body: "We warmly support those drawn to intercultural relationships and international marriage." },
      { title: "I need someone to hear my worries", body: "Our seasoned fortune-teller Shin-sensei offers grounded, practical advice for love and life." },
      { title: "I want to enjoy languages as a hobby", body: "English and Japanese lessons in weekly or twice-weekly plans — from small talk to intercultural love." },
      { title: "I want to make friends overseas", body: "We also offer casual exchanges with our international members, not only for marriage purposes." },
      { title: "I'm anxious doing this alone", body: "Because we run this as a couple, both men and women can feel safe asking anything." },
    ],
  },
  services: {
    eyebrow: "Our Services",
    titleA: "Three pillars,",
    titleAccent: "enriching",
    titleB: "your days",
    lead: "Beyond matchmaking — language lessons and fortune-telling too. We support your whole life, from every angle.",
    list: [
      {
        tag: "Marriage",
        title: "Matchmaking & introductions",
        lead: "For Japanese and international members alike. Every encounter is treated with care.",
        points: ["3+ matches per month", "Meetings & counseling", "International marriage ready", "Two-person couple support"],
      },
      {
        tag: "Language",
        title: "Language lessons",
        lead: "Our teachers, drawing on their nursing background, lead you to language you can actually use.",
        points: [
          "English / Japanese lessons",
          "Weekly or twice-weekly (50 min)",
          "Taught by someone who learned conversational English in ~6 months",
          "Supports intercultural dating too",
        ],
      },
      {
        tag: "Fortune",
        title: "Fortune telling & power stones",
        lead: "Shin-sensei lights the path ahead with seasoned, down-to-earth advice.",
        points: [
          "Love, life and marriage consultations",
          "Practical advice, not only predictions",
          "Power stone sales",
          "Super-fan exclusive readings",
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    titleA: "Simple,",
    titleAccent: "easy-to-read",
    titleB: "plans",
    lead: "Lower entry and success fees, thanks to being online-first. All prices include tax.",
    monthSuffix: "/mo",
    perMonth: "¥",
    requestLabel: "On request",
    badge: "Most Recommended",
    note: "* Prices may change. Please confirm the latest details in your free consultation.",
    plans: [
      {
        name: "Japan Member",
        caption: "For those seeking domestic marriage",
        monthly: "8,800",
        perMatch: "3 intros / month",
        features: [
          "Monthly membership fee",
          "Setup for each meeting",
          "Online counseling",
          "Compatibility analysis & profile review",
        ],
        cta: "Ask about this plan",
        highlight: false,
      },
      {
        name: "International Member",
        caption: "For those seeking international marriage",
        monthly: "27,500",
        perMatch: "Meetings ¥8,800 each",
        features: [
          "Intercultural marriage counseling",
          "Cross-cultural communication help",
          "Meet international members",
          "Language-support integration",
        ],
        cta: "Intl. plan details",
        highlight: true,
      },
      {
        name: "Language Lessons",
        caption: "For those who love languages",
        monthly: "On request",
        perMatch: "Weekly / twice-weekly (50 min)",
        features: ["English lessons", "Japanese lessons", "Beginner course available", "Multiple teachers besides Shin-sensei"],
        cta: "Try a lesson",
        highlight: false,
      },
    ],
  },
  staff: {
    eyebrow: "Our Team",
    titleA: "A ",
    titleAccent: "warm",
    titleB: "marriage agency ",
    titleC: "run by a couple",
    lead:
      "We are a couple-run marriage agency. Whether domestic or international, we provide support tailored to each individual.",
    members: [
      {
        role: "Owner / Fortune-teller",
        name: "SHIN",
        initials: "S",
        bio:
          "Over 15 years of business experience, including running multiple restaurants in Tokyo. Formerly active in Kabukichō as 'Hiiragi Nagisa', also serving as group chairwoman. Now based in Okinawa, providing not only accurate readings but practical advice grounded in experience. Also sells power stones.",
        tags: ["Fortune", "Life advice", "Business"],
        image: "/rabbit/shin.png",
      },
      {
        role: "Language teacher / Counselor",
        name: "YUKA",
        initials: "Y",
        bio:
          "A former nurse who uses her gift for listening to build a safe space. Having learned conversational English in about six months, she focuses on language you can actually use — and supports intercultural relationships too. Working while raising a family.",
        tags: ["English", "Japanese", "Intl. dating"],
        image: "/rabbit/yuka.png",
      },
    ],
  },
  voices: {
    eyebrow: "Voices",
    titleA: "Voices of our",
    titleAccent: "members",
    lead: "Real voices from those who chose RABBIT for marriage, languages, and fortune.",
    monitorNote:
      "* Our marriage agency is currently preparing for full launch. Some of the voices below are from pre-launch monitor members.",
    monitorTag: "Monitor",
    items: [
      {
        name: "A.K.",
        meta: "Woman, 30s",
        monitor: true,
        body:
          "At first I was anxious, not knowing where to start. It was reassuring to sense they would walk beside me carefully. Getting advice from both the husband's and the wife's perspectives is also a big plus.",
      },
      {
        name: "R.S.",
        meta: "Man, 40s",
        monitor: true,
        body:
          "I had some worries about dating someone from overseas, but I was reassured that their support reaches into cultural and mindset differences. Having language support bundled in is really valuable.",
      },
      {
        name: "M.T.",
        meta: "Woman, 20s / Fortune",
        body: "Shin-sensei's readings are not only accurate — they tell you what to actually do. It's become my monthly highlight.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleA: "Frequently asked",
    titleAccent: "questions",
    items: [
      { q: "What is an online marriage agency?", a: "A marriage agency you can use without visiting a physical location. RABBIT uses Zoom and similar tools so you can join from anywhere in Japan or overseas." },
      { q: "What's the difference between Japan and International membership?", a: "Japan membership is for domestic marriage; International is for cross-border / intercultural partnerships. We'll recommend whichever suits you." },
      { q: "Can I take language lessons alongside matchmaking?", a: "Yes. Many members considering international marriage pair the two, and bundle discounts are available on request." },
      { q: "Can I use only fortune-telling?", a: "Absolutely. Reading-only and power-stone-only use are both welcome." },
      { q: "Can I just ask questions first?", a: "Yes — the first consultation is free. Please feel free even if you haven't decided to join yet." },
    ],
  },
  cta: {
    eyebrow: "Free Consultation",
    titleA: "Why not take",
    titleAccent: "the first step",
    titleB: "together, today?",
    lead:
      "\"Not sure if I fit\" or \"Just want to hear about it\" — both are very welcome. As a couple, we'll take the time to listen.",
    line: { small: "Chat on LINE", big: "Add as friend" },
    form: { small: "Online consult", big: "Booking form" },
  },
  footer: {
    tagline:
      "A couple-run online marriage agency. From domestic and international matchmaking to languages and fortune-telling — here for your first step.",
    companyHeading: "About us",
    guideHeading: "Links",
    info: [
      { label: "Service", value: "RABBIT — Online Marriage Agency" },
      { label: "Business", value: "Matchmaking, language lessons, fortune-telling, power stones" },
      { label: "Based in", value: "Okinawa / Online nationwide" },
      { label: "Run by", value: "A married couple" },
    ],
    links: [
      { key: "service", label: "Services" },
      { key: "pricing", label: "Pricing" },
      { key: "team", label: "Team" },
      { key: "faq", label: "FAQ" },
      { key: "contact", label: "Contact" },
    ],
    conduct:
      "We kindly ask all members to refrain from defamation or harassment directed at other members or our team. In serious cases, we will take appropriate action, including restricting access and pursuing legal measures.",
    rights: "© {{year}} RABBIT Online Marriage. All rights reserved.",
    privacy: "Privacy Policy",
    tos: "Commerce Disclosure",
  },
};

const zh: Dictionary = {
  meta: {
    title: "RABBIT｜线上婚姻介绍所 — 国际婚姻・语言・占卜一路陪伴",
    description:
      "由夫妻共同经营的线上婚姻介绍所 RABBIT。从国内及国际婚姻介绍，到语言课程与占卜鉴定，温柔陪伴您迈出第一步。",
  },
  nav: {
    home: "首页",
    about: "关于我们",
    service: "服务",
    pricing: "价格方案",
    team: "顾问介绍",
    faq: "常见问题",
    contact: "联系我们",
    consult: "免费咨询",
  },
  hero: {
    badge: "线上婚姻介绍所 RABBIT",
    titleA: "为您的每一步，",
    titleAccent: "夫妻二人",
    titleB: "一路陪伴的婚介所。",
    lead:
      "国内婚姻，国际婚姻，语言学习，占卜鉴定。「当想结婚却不知从何开始」——我们把您的心愿，一步一步、温柔地变成现实。",
    ctaPrimary: "预约免费咨询",
    ctaSecondary: "查看服务",
    stats: [
      { num: "每月3位+", label: "会员介绍" },
      { num: "夫妻", label: "双视角陪伴" },
      { num: "国际", label: "国际婚姻可" },
    ],
    coupleBadge: "Couple Support",
    coupleTag: "夫妻共同经营",
    fortuneBadge: "Fortune Telling",
    fortuneTag: "有 Shin 老师坐镇",
  },
  audience: {
    eyebrow: "For You",
    titleA: "我们",
    titleAccent: "静静地陪在您身边",
    lead:
      "无论是婚姻、语言，还是占卜——「迈不出第一步」的心情，我们愿意认真对待。",
    items: [
      { title: "想结婚，却缺少相遇的机会", body: "为在日常生活中难以拓展人脉的您，每月精心挑选3位以上合适人选。" },
      { title: "想和外国朋友聊聊天", body: "对国际婚姻或跨文化恋爱感兴趣？我们会考虑到文化差异，细心地陪伴您。" },
      { title: "想找人聊聊人生或恋爱的烦恼", body: "资深占卜师 Shin 老师以务实的视角，为您的人生选择一同思考。" },
      { title: "想把语言当成兴趣来学", body: "英语/日语课程，每周1次或2次（每次50分钟），从日常对话到跨国恋爱都能照顾到。" },
      { title: "想在海外交朋友", body: "我们也提供与外国会员的交流机会，不以结婚为前提的交流同样欢迎。" },
      { title: "一个人婚活感到不安", body: "由夫妻二人共同经营，无论男女都可以安心咨询不同视角的意见。" },
    ],
  },
  services: {
    eyebrow: "Our Services",
    titleA: "三大支柱，",
    titleAccent: "让您的每一天",
    titleB: "更加丰盈",
    lead: "不只是婚姻介绍，还有语言课程与占卜鉴定。我们从多个角度，陪伴您的人生。",
    list: [
      {
        tag: "Marriage",
        title: "婚姻介绍・相亲支持",
        lead: "日本会员与外国会员都能对应。用心对待每一次相遇。",
        points: ["每月3位以上会员介绍", "相亲与一对一咨询", "支持国际婚姻", "夫妻二人共同陪伴"],
      },
      {
        tag: "Language",
        title: "语言课程",
        lead: "由曾任护士的老师，引导您学会真正能用的语言。",
        points: [
          "英语课程 / 日语课程",
          "每周1次或2次（50分钟）",
          "老师本人约半年自学出日常英语",
          "支持跨国恋爱与跨文化沟通",
        ],
      },
      {
        tag: "Fortune",
        title: "占卜鉴定・能量石",
        lead: "Shin 老师以经验与务实的建议，为您照亮前路。",
        points: [
          "恋爱・人生・婚姻咨询",
          "不仅是预言，更是可执行的建议",
          "能量石贩售",
          "超级粉丝专属鉴定",
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    titleA: "简单、",
    titleAccent: "清楚易懂",
    titleB: "的价格",
    lead: "降低入会费与成婚费，正是线上婚介所独有的方案。价格均已含税。",
    monthSuffix: "/月",
    perMonth: "¥",
    requestLabel: "洽询",
    badge: "Most Recommended",
    note: "※ 价格可能调整，最新详情请于免费咨询时确认。",
    plans: [
      {
        name: "日本会员",
        caption: "希望在国内结婚的您",
        monthly: "8,800",
        perMatch: "每月介绍3位",
        features: ["月度会员费", "每次相亲安排", "线上咨询", "契合度分析与资料修订"],
        cta: "咨询此方案",
        highlight: false,
      },
      {
        name: "国际会员",
        caption: "希望国际婚姻的您",
        monthly: "27,500",
        perMatch: "相亲 ¥8,800/次",
        features: ["国际婚姻专属咨询", "跨文化沟通支援", "结识外国会员", "联动语言课程"],
        cta: "国际方案详情",
        highlight: true,
      },
      {
        name: "语言课程",
        caption: "想接触英语・日语的您",
        monthly: "洽询",
        perMatch: "每周1 / 每周2 (50分钟)",
        features: ["英语课程", "日语课程", "初学者课程", "除 Shin 老师外还有其他讲师"],
        cta: "预约体验课程",
        highlight: false,
      },
    ],
  },
  staff: {
    eyebrow: "Our Team",
    titleA: "由夫妻共同经营的",
    titleB: "",
    titleAccent: "温暖",
    titleC: "婚姻介绍所",
    lead:
      "我们是一家由夫妻共同经营的婚姻介绍所。不论国内或国际婚姻，都为每一位量身陪伴。",
    members: [
      {
        role: "代表 / 占卜鉴定士",
        name: "SHIN",
        initials: "S",
        bio:
          "15年以上经营经验，曾在东京经营多家餐饮。过去以「柊凪沙」之名在歌舞伎町 Host Club 活动，担任过集团会长。目前以冲绳为据点，以占卜之精准为基础，以经验与知识为血肉，提供可执行的现实建议，也贩售能量石。",
        tags: ["占卜", "人生咨询", "事业经营"],
        image: "/rabbit/shin.png",
      },
      {
        role: "语言老师 / 咨询师",
        name: "YUKA",
        initials: "Y",
        bio:
          "曾任护士，善于倾听，重视营造让您放心说话的氛围。约半年自学出英语日常会话，重视「真正用得上」的语言力。同时负责语言、国际恋爱与跨文化沟通支持，一边育儿一边活跃在教学一线。",
        tags: ["英语", "日语", "国际恋爱"],
        image: "/rabbit/yuka.png",
      },
    ],
  },
  voices: {
    eyebrow: "Voices",
    titleA: "来自",
    titleAccent: "会员的声音",
    lead: "选择了 RABBIT 的会员们，如实分享他们的故事。",
    monitorNote:
      "※ 本婚姻介绍所目前正在为正式启动做准备。以下部分内容为「服务正式启动前」试用会员分享的使用体验。",
    monitorTag: "试用会员",
    items: [
      {
        name: "A.K. 女士",
        meta: "30多岁",
        monitor: true,
        body:
          "一开始完全不知道该从哪里开始，有些不安；但能感受到他们会细心陪伴，让人放心。能同时听到男女双方视角的建议，对我来说也是很大的加分。",
      },
      {
        name: "R.S. 先生",
        meta: "40多岁",
        monitor: true,
        body:
          "原本对与外国人交往感到不安，但知道他们连文化与思维方式的差异都会提供支援，就觉得安心很多。加上能同时得到语言方面的支持，真的很难得。",
      },
      {
        name: "M.T. 女士",
        meta: "20多岁 / 占卜",
        body: "Shin 老师的占卜不只是「准」，更会告诉我具体要怎么做。成为我每个月最期待的事。",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    titleA: "常见",
    titleAccent: "问题",
    items: [
      { q: "什么是线上婚姻介绍所？", a: "无需到店，线上即可相亲与咨询的婚介所。RABBIT 使用 Zoom 等工具，全国与海外都可以参与。" },
      { q: "日本会员与国际会员有什么差别？", a: "日本会员针对国内婚姻，国际会员针对跨国婚姻与跨文化伴侣。我们会按您的情况推荐。" },
      { q: "可以同时上语言课吗？", a: "可以。考虑国际婚姻的会员经常同时选择，联合方案也可以咨询优惠。" },
      { q: "只用占卜服务可以吗？", a: "当然可以。仅使用 Shin 老师鉴定，或仅购买能量石都没问题。" },
      { q: "想先了解看看可以吗？", a: "首次咨询免费，尚未决定入会时也欢迎随时联系我们。" },
    ],
  },
  cta: {
    eyebrow: "Free Consultation",
    titleA: "两个人的",
    titleAccent: "第一步",
    titleB: "，就在今天迈出看看吧？",
    lead:
      "「不确定适不适合」、「只想先听听看」——都非常欢迎。我们夫妻会用心倾听您的故事。",
    line: { small: "LINE 咨询", big: "加为好友" },
    form: { small: "线上咨询", big: "前往预约表单" },
  },
  footer: {
    tagline: "由夫妻共同经营的线上婚姻介绍所。从国内到国际婚姻，从语言到占卜，陪伴您的第一步。",
    companyHeading: "公司概要",
    guideHeading: "导航",
    info: [
      { label: "服务名称", value: "线上婚姻介绍所 RABBIT" },
      { label: "业务内容", value: "婚姻介绍・语言课程・占卜鉴定・能量石贩售" },
      { label: "据点", value: "冲绳 / 线上全国对应" },
      { label: "运营", value: "夫妻共同经营" },
    ],
    links: [
      { key: "service", label: "服务" },
      { key: "pricing", label: "价格方案" },
      { key: "team", label: "顾问介绍" },
      { key: "faq", label: "常见问题" },
      { key: "contact", label: "联系我们" },
    ],
    conduct:
      "本服务恕不接受对其他会员及运营团队的诽谤中伤或骚扰等迷惑行为。情节严重者，我们将采取包括限制使用、法律追究在内的适当措施。",
    rights: "© {{year}} RABBIT Online Marriage. All rights reserved.",
    privacy: "隐私政策",
    tos: "商业交易条款",
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { ja, en, zh };

export function detectBrowserLang(input: string | undefined | null): Lang {
  if (!input) return DEFAULT_LANG;
  const tag = input.toLowerCase();
  if (tag.startsWith("ja")) return "ja";
  if (tag.startsWith("zh")) return "zh";
  if (tag.startsWith("en")) return "en";
  return DEFAULT_LANG;
}
