const DisclaimerSection = () => {
  return (
    <section className="py-14 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-lg font-bold text-foreground mb-4 text-center">重要聲明</h2>
        <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
          <li>• WaveQ WQ 2000 為家用飲水設備，並非醫療儀器、藥物或健康聲稱產品。</li>
          <li>• 本網站所有內容僅供資料參考，不構成醫療建議，亦不聲稱能預防、診斷、治療或治癒糖尿病、痛風或任何疾病。</li>
          <li>• 引述之研究及實驗數據來自第三方公開資料（部分為動物實驗），並不代表個別使用者會獲得相同結果。</li>
          <li>• 糖尿及痛風人士請按醫生指示服藥、覆診及控制飲食；切勿因使用本產品而自行停藥或延誤求醫。</li>
          <li>• 腎病、心臟病、需要限制水分或礦物質攝取的人士，飲用前請先諮詢醫生。</li>
        </ul>
      </div>
    </section>
  );
};

export default DisclaimerSection;