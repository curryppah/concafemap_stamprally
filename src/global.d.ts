declare namespace Pwamap {
  type ShopData = {
    index: number;
    distance?: number;
    'タイムスタンプ': string;
    '緯度': string;
    '経度': string;
    '店名': string;
    'エリア': string;
    '紹介文': string;
    '画像': string;
    'URL': string;
    'Instagram': string;
    'Twitter': string;
    '公式サイト': string
  }

  type LngLat = [number, number]
}
