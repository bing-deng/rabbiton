import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜RABBIT",
  description:
    "オンライン結婚相談所 RABBIT のプライバシーポリシー (個人情報保護方針) です。",
  robots: { index: true, follow: false },
};

type Section = { title: string; body: React.ReactNode };

const TODO = (note: string) => (
  <span className="text-stone-400">{`{{TODO: ${note}}}`}</span>
);

const sections: Section[] = [
  {
    title: "1. 事業者情報",
    body: (
      <ul className="space-y-1">
        <li>事業者名：オンライン結婚相談所 RABBIT</li>
        <li>運営統括責任者：SHIN</li>
        <li>所在地：沖縄県 {TODO("市区町村以下の詳細住所")}</li>
        <li>お問い合わせ窓口：本ポリシー末尾の窓口情報を参照</li>
      </ul>
    ),
  },
  {
    title: "2. 個人情報の定義",
    body: (
      <p>
        本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律
        (個人情報保護法) 第2条第1項に定める個人情報をいいます。具体的には、
        氏名、生年月日、住所、電話番号、メールアドレス、SNS アカウント、
        LINE ID、顔写真などの情報を指します。
      </p>
    ),
  },
  {
    title: "3. 個人情報の取得方法",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>お申し込みフォーム (Google Form) にご入力いただく情報</li>
        <li>LINE 公式アカウントでのメッセージ送受信に伴い取得する情報</li>
        <li>お見合い・カウンセリング・占い鑑定の過程でご提供いただく情報</li>
        <li>当サイト閲覧時に自動取得されるアクセスログ・Cookie 等</li>
      </ul>
    ),
  },
  {
    title: "4. 利用目的",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>結婚相談・お見合い・カウンセリング等のサービス提供のため</li>
        <li>語学レッスンおよび占い鑑定サービスの提供のため</li>
        <li>パワーストーン等商品の販売および配送のため</li>
        <li>ご連絡・お問い合わせへの回答のため</li>
        <li>料金のご請求および入出金管理のため</li>
        <li>サービス改善・新サービス開発の分析のため (統計的に処理)</li>
      </ul>
    ),
  },
  {
    title: "5. 第三者への提供",
    body: (
      <>
        <p>
          当社は法令に定める場合を除き、ご本人の同意を得ずに個人情報を第三者に提供することはありません。
          ただし、サービス提供のため必要な範囲で、以下の委託先に対して個人情報を取り扱わせる場合があります。
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            会員同士のお見合いを目的とした、相手方会員へのプロフィール情報
            (氏名の一部・年齢・居住地域・自己紹介文・顔写真等) の開示
          </li>
          <li>決済代行事業者・配送事業者 (商品販売に関する範囲のみ)</li>
          <li>{TODO("必要に応じて利用する外部ツール名／業務委託先")}</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cookie および外部サービス",
    body: (
      <>
        <p>
          本サイトではアクセス解析・サービス改善のため、Cookie 等の技術を使用する場合があります。
          また、以下の外部サービスを利用しています。
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>お申込み受付：Google Forms</li>
          <li>問い合わせ：LINE (LINE 株式会社)</li>
          <li>SNS 連携：Instagram、TikTok</li>
          <li>{TODO("Google Analytics / Meta Pixel 等を使用する場合はここに明記")}</li>
        </ul>
        <p className="mt-2">
          これらのサービスの個人情報の取り扱いについては、各社のプライバシーポリシーをご参照ください。
        </p>
      </>
    ),
  },
  {
    title: "7. 開示・訂正・削除等のご請求",
    body: (
      <p>
        ご本人から保有個人データの開示・訂正・追加・削除・利用停止等のご請求をいただいた場合、
        法令に基づき合理的な期間・範囲で対応いたします。ご請求は下記お問い合わせ窓口までご連絡ください。
      </p>
    ),
  },
  {
    title: "8. 個人情報の安全管理",
    body: (
      <p>
        当社は個人情報への不正アクセス、紛失、改ざん、漏えい等を防止するため、
        必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う担当者に対して
        必要な教育・管理を行います。
      </p>
    ),
  },
  {
    title: "9. お問い合わせ窓口",
    body: (
      <ul className="space-y-1">
        <li>
          LINE:{" "}
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
        <li>メール：{TODO("問い合わせ用メールアドレス")}</li>
      </ul>
    ),
  },
  {
    title: "10. 改定について",
    body: (
      <p>
        本ポリシーの内容は、法令の変更またはサービス内容の変更に伴い、
        予告なく変更されることがあります。変更後のポリシーは本ページに掲載された時点から効力を生じるものとします。
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header>
        <p className="text-xs tracking-[0.3em] text-rose-primary uppercase">Legal</p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-ink">プライバシーポリシー</h1>
        <p className="mt-4 text-sm text-stone-600 leading-relaxed">
          オンライン結婚相談所 RABBIT (以下「当社」) は、お客様の個人情報の保護を重要な責務と認識し、
          個人情報の保護に関する法律その他関係法令を遵守のうえ、以下のとおり取り扱います。
        </p>
      </header>

      <div className="mt-10 space-y-8 text-sm leading-relaxed">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-lg text-ink">{s.title}</h2>
            <div className="mt-3 text-stone-700 space-y-2">{s.body}</div>
          </section>
        ))}
      </div>

      <footer className="mt-10 text-xs text-stone-500 leading-relaxed">
        <p>
          制定日：{TODO("YYYY年MM月DD日")} / 最終更新日：{TODO("YYYY年MM月DD日")}
        </p>
        <p className="mt-2">
          ※ 本ポリシーに含まれる TODO 項目は、正式公開前に確定情報をご記入ください。
        </p>
      </footer>
    </>
  );
}
