import './AboutUs.scss'

const Content = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/logo_teapot.svg`} alt=""/></div>
          <div className="logo">Concafemap for stamp rally</div>
        </div>
        
        <h2>アプリについて</h2>
        <p><b>Concafemap for stamp rally</b> （以下「本アプリ」）はとあるスタンプラリー企画をより楽しむお手伝いをする地図アプリです</p>

        <h3>特徴</h3>
        <ul>
          <li>スタンプラリー参加店舗の場所とSNSアカウントなどがわかる</li>
          <li>店舗までの道順とだいたいの距離がわかる</li>
          <li>スマホのホーム画面に追加すると通常のアプリの感覚で使える</li>
        </ul>

        <h2>機能について</h2>
        <h3>一覧</h3>
        <p>スタンプラリー参加店舗の一覧です。スマホの位置情報をONにしておくと近い順に表示されます。</p>
        
        <h3>エリア</h3>
        <p>大須・名駅・栄・その他のエリアにしぼって一覧表示します</p>

        <h3>写真から探す</h3>
        <p>店舗のロゴおよび写真をタップすると店舗詳細が表示されます</p>

        <h3>店舗詳細</h3>
        <p>住所と公式サイトやSNSアカウントへのリンクなどがあります。また、「店舗までの道順」をタップするとGoogleマップで道順を調べられます。</p>
        
        <h2>画像の提供について</h2>
        <p>基本的に店舗のロゴおよび写真は掲載しておりません。提供してくださるお店がありましたら問合せ先までロゴや写真などをお送りください（横幅350px以上）。</p>
        
        <h2>プライバシーポリシー</h2>
        <h3>個人情報の利用目的</h3>
        <p>本アプリではアプリ利用者からご提供いただいた情報を以下の目的で利用します</p>
        <ul>
          <li>お問い合わせ対応のため</li>
          <li>アプリの分析と改善のため</li>
          <li>その他個別に承諾していただいた目的</li>
        </ul>

        <h3>データ収集</h3>
        <p>本アプリではアプリの分析と改善のために「Googleアナリティクス」を導入しており、データ収集のためにCookieを使用しています。
          データは匿名で収集されており個人を特定するものではありません。
          データが収集・処理される仕組みは<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">ポリシーと規約</a>をご覧ください。</p>

        <h3>免責事項</h3>
        <p>本アプリでは可能な範囲で正確な情報を掲載するように努めておりますが正確性や安全性を保証しておりません。
          ご利用によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>

        <h3>著作権</h3>
        <p>本アプリに掲載しているコンテンツの著作権は本アプリ開発者または権利を有する第三者に帰属します</p>

        <h3>プライバシーポリシーの変更</h3>
        <p>本ポリシーは内容を適宜見直します。また、事前の予告なく変更することがあります。</p>
        
        <h2>お問い合わせ</h2>  
        <p>情報の訂正やご意見などがありましたら<address>potatician@gmail.com</address>までお知らせください</p>

        <h2>Powered by Geolonia</h2>
        <p>本アプリの開発には株式会社Geolonia様提供の Geolonia PWAマップ を利用しています</p>
      
      </div>
    </div>
  );
};

export default Content;
