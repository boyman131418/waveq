const FooterSection = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-black text-gradient-water mb-2">WaveQ</p>
        <p className="text-sm text-muted-foreground mb-4">韓國原裝 · 天然礦物質鹼性六角水生成機 · 關注糖尿及痛風人士的日常飲水</p>
        <p className="text-xs text-muted-foreground/60">
          查詢熱線 / 專業示範：9090 8393 (Edwin)
        </p>
        <p className="text-xs text-muted-foreground/50 mt-4 max-w-2xl mx-auto leading-relaxed">
          本產品為家用飲水設備，並非醫療儀器或藥物，不能預防、治療或治癒任何疾病。內容僅供參考，不能取代醫生的診斷及治療。
        </p>
        <p className="text-xs text-muted-foreground/40 mt-4">© {new Date().getFullYear()} WaveQ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
