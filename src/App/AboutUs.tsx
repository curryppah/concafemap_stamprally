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
        <p><b>Concafemap for stamp rally</b> はとあるスタンプラリー企画をより楽しめるようにお手伝いをする地図アプリです（非公式）</p>
        <ul>
          <li>スタンプラリー参加店舗の場所がわかる</li>
          <li>店舗までの道順と距離がわかる</li>
        </ul>

        <h3>一覧</h3>
        <p>スタンプラリー参加店舗の一覧です。スマホの位置情報をONにしておけば近い順に表示されます。</p>
        
        <h3>エリア</h3>
        <p>大須・名駅・栄・その他のエリアにしぼって一覧表示します</p>

        <h3>写真から探す</h3>
        <p>店舗のロゴおよび写真をタップすると店舗詳細が表示されます</p>

        <h3>店舗詳細</h3>
        <p>住所と公式サイトやSNSアカウントへのリンクがあります。<br />
        また、「店舗までの道順」をタップするとGoogleマップで道順を調べられます。</p>
        
        <h2>お問い合わせ</h2>
        <p>情報の訂正やご意見などがありましたら<address>potatician@gmail.com</address>までお知らせください。<br />
          現状では位置ずれが多いため随時調整します。</p>
        <p>基本的に店舗のロゴおよび写真は掲載しておりません。
          もし提供してくださるお店がありましたらロゴや写真などをお送りください（横幅350px以上）。</p>

        <h2>Powered by Geolonia</h2>
        <p>本アプリの開発には株式会社Geolonia様提供の Geolonia PWAマップ を利用しています。</p>
      </div>
    </div>
  );
};

export default Content;
