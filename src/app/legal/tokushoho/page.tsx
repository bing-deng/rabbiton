import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜RABBIT",
  description:
    "結婚相談所 RABBIT における特定商取引法に基づく表記です。",
  alternates: { canonical: "/legal/tokushoho/" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "特定商取引法に基づく表記｜RABBIT",
    description: "結婚相談所 RABBIT の特商法表記。",
    type: "article",
  },
};

type Row = { label: string; value: React.ReactNode };

const rows: Row[] = [
  { label: "販売業者", value: "結婚相談所 RABBIT" },
  { label: "運営統括責任者", value: "SHIN" },
  {
    label: "所在地",
    value: (
      <>
        沖縄県 <span className="text-stone-400">{"{{TODO: 市区町村以下の詳細住所}}"}</span>
        <br />
        <span className="text-xs text-stone-500">
          ※ ご請求があれば遅滞なく開示いたします。
        </span>
      </>
    ),
  },
  { label: "電話番号", value: <span className="text-stone-400">{"{{TODO: 電話番号}}"}</span> },
  { label: "メールアドレス", value: <span className="text-stone-400">{"{{TODO: お問い合わせメールアドレス}}"}</span> },
  {
    label: "お問い合わせ窓口",
    value: (
      <ul className="space-y-1">
        <li>
          LINE 公式アカウント:{" "}
          <a
            href="https://lin.ee/iEGXG1Y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-deep underline"
          >
            https://lin.ee/iEGXG1Y
          </a>
        </li>
        <li>
          お申込みフォーム:{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQTTO4CxEZHEovLkRj1snWCR6pDr9Q60tj2jqLtURZp3jqaA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-deep underline"
          >
            Google Form
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: "販売価格",
    value: (
      <ul className="space-y-1">
        <li>日本人会員：月額 11,000円（税込）／お見合い・カウンセリング 1回 3,300円（税込）</li>
        <li>外国人会員：月額 11,000円（税込）／お見合い・カウンセリング 1回 5,500円（税込）</li>
        <li>語学レッスン（英語・日本語）：要相談（週1・週2／50分プラン）</li>
        <li>占い鑑定・パワーストーン販売：鑑定内容・商品により異なる</li>
      </ul>
    ),
  },
  {
    label: "商品代金以外の必要料金",
    value: "オンラインツール利用に伴う通信費はお客様のご負担となります。",
  },
  {
    label: "支払方法",
    value: <span className="text-stone-400">{"{{TODO: 銀行振込 / クレジットカード / 各種決済サービス など取扱方法を明記}}"}</span>,
  },
  {
    label: "支払時期",
    value: <span className="text-stone-400">{"{{TODO: 例：月額会員費は毎月○日までに当月分をお支払いください}}"}</span>,
  },
  {
    label: "役務・サービスの提供時期",
    value:
      "ご入会手続き完了後、原則として当日〜翌営業日よりサービス提供を開始いたします。",
  },
  {
    label: "返品・キャンセル",
    value: (
      <>
        役務提供の性質上、ご入会後のサービス料金につきましては原則として返金いたしかねます。
        パワーストーン等の物販は、商品到着後 <span className="text-stone-400">{"{{TODO: 返品受付日数}}"}</span> 以内かつ未使用・未開封に限り返品を承ります（お客様都合の場合、送料はお客様負担）。
      </>
    ),
  },
  {
    label: "動作環境",
    value:
      "Zoom などのオンラインミーティングツールが利用可能なインターネット環境。最新版のブラウザを推奨します。",
  },
];

export default function TokushohoPage() {
  return (
    <>
      <header>
        <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">Legal</p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-ink">
          特定商取引法に基づく表記
        </h1>
        <p className="mt-4 text-sm text-stone-600 leading-relaxed">
          特定商取引法第11条に基づき、以下のとおり表示いたします。
          料金やサービス内容の詳細についてご不明な点がございましたら、
          無料相談にてお気軽にお問い合わせください。
        </p>
      </header>

      <dl className="mt-10 divide-y divide-stone-100 border-y border-stone-100">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5 text-sm"
          >
            <dt className="text-stone-500 font-medium sm:pt-0.5">{r.label}</dt>
            <dd className="text-ink leading-relaxed">{r.value}</dd>
          </div>
        ))}
      </dl>

      <footer className="mt-10 text-xs text-stone-500 leading-relaxed">
        <p>
          最終更新日：<span className="text-stone-400">{"{{TODO: YYYY年MM月DD日}}"}</span>
        </p>
        <p className="mt-2">
          ※
          本表記に含まれる TODO 項目は、正式公開前に事業者情報を確定のうえご記入ください。
        </p>
      </footer>
    </>
  );
}
