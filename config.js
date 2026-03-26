// ========================================
// 鎌田の理論化学 SRS - config.js
// 作成日時: 2026-03-26T21:00:00+09:00
// テンプレート: ネクステタイプ v2.0
// ========================================
// ★ index.html は編集不要。教材固有設定はここに集約。
// ========================================

var APP_CONFIG = {

  // ========================================
  // 1. アプリ識別（★最重要: 他教材と重複するとデータ破壊）
  // ========================================
  APP_NAME: "鎌田の理論化学 SRS",              // ホーム画面タイトル
  STORAGE_KEY: "kamata-theory-srs-v1",         // localStorageキー（一意必須）
  EXPORT_PREFIX: "kamata-theory-srs",          // JSONエクスポートファイル名
  SW_CACHE_NAME: "kamata-theory-srs-v1",       // sw.jsのCACHE_NAMEと一致させる

  // ========================================
  // 2. クラウド同期
  // ========================================
  GAS_URL: "https://script.google.com/macros/s/AKfycbzhqYC6mYrjm3FSThxjUdvgqcpGjaR5Z_fju3krmthWbWpJAIgtUB75Lj5mEER5DNtzIg/exec",  // GASデプロイURL（空文字ならローカルのみ）

  // ========================================
  // 3. 配色（表紙のラベンダー〜薄紫系から抽出、目に優しいトーンに）
  //    鎌田の理論化学の表紙: ラベンダー / 薄紫ベース
  //    → ソフトラベンダー〜モーヴに変換
  // ========================================
  COLORS: {
    // ページ背景・カード
    pageBg:       "#F5F3F7",      // ほんのりラベンダーがかったライトグレー
    cardBorder:   "#D3CDD9",      // カード枠線（薄いモーヴグレー）
    cardBg:       "#FFFFFF",      // カード背景（白）

    // テキスト
    textPrimary:  "#2A2133",      // 主テキスト（ダークパープル寄り）
    textSecondary:"#5E4E6B",      // 補足テキスト（中間パープルグレー）
    textMuted:    "#8D7F99",      // 薄いテキスト（ライトモーヴ）

    // ボタン
    btnPrimaryBg:    "#6B4D82",   // プライマリボタン背景（落ち着いたパープル）
    btnPrimaryFg:    "#FFFFFF",   // プライマリボタン文字（白）
    btnSecondaryBg:  "#F0ECF3",   // セカンダリボタン背景（薄いラベンダー）
    btnSecondaryFg:  "#6B4D82",   // セカンダリボタン文字（パープル）
    btnSecondaryBorder: "#C9BFCF",// セカンダリボタン枠線

    // 入力フィールド
    inputBorder:  "#C9BFCF",      // 入力枠線
    inputBg:      "#FBFAFC",      // 入力背景

    // ステータス
    statusOk:     "#4A8B4A",      // 正常（緑）
    statusError:  "#C53030",      // エラー（赤）
    statusMuted:  "#8D7F99",      // 無効（モーヴグレー）

    // 判定ボタン（○わかった / ◎余裕）※全教材で緑系統を維持
    judgeCorrectBg:     "#D4EDDA",
    judgeCorrectFg:     "#155724",
    judgeCorrectBorder: "#A3D9A3",
    judgeEasyBg:        "#C3E6CB",
    judgeEasyFg:        "#0B4F1A",
    judgeEasyBorder:    "#82C891",

    // バッジ
    badgeNewBg:     "#EDE8F2",    // 新規（薄いラベンダー）
    badgeNewFg:     "#6B4D82",    // 新規文字
    badgeGradBg:    "#D4EDDA",    // 卒業（緑）
    badgeGradFg:    "#1B5E20",    // 卒業文字
    badgeNeutralBg: "#E8E8E8",    // 中立
    badgeNeutralFg: "#666666",
    badgePendingBg: "#FFF3E0",    // 未復習
    badgePendingFg: "#E65100",

    // GAS接続状態
    gasOkBg:   "#E8F5E9",
    gasOkFg:   "#2E7D32",
    gasWarnBg: "#FFF3E0",
    gasWarnFg: "#E65100",

    // コード表示・診断
    codeBg:    "#F0EDF3",
    diagBg:    "#F5F5F5",
    diagFg:    "#333333",
    diagBorder:"#CCCCCC"
  },

  // ========================================
  // 4. UI文言（化学・鎌田の理論化学に最適化）
  // ========================================
  LABELS: {
    unitName:          "問題",
    registerBtn:       "問題を登録する",
    registerTitle:     "問題登録",
    idLabel:           "問題番号",
    idPlaceholder:     "例: 15, 例題8, P72-3",
    idHint:            "鎌田の理論化学の問題番号や例題番号を入力（50文字以内）",
    listTitle:         "登録一覧",
    listUnit:          "問",
    csvTitle:          "まとめて取り込み",
    reviewUnit:        "問",
    cardHint:          "鎌田の理論化学で該当の問題を解いてください",
    searchPlaceholder: "問題番号で検索..."
  }
};
