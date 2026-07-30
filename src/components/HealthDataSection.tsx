import { motion } from "framer-motion";
import { TrendingDown, Activity, ShieldCheck, Beaker } from "lucide-react";

const dataCards = [
  {
    icon: Activity,
    title: "血糖相關數據",
    stat: "203 → 131 mg/dl",
    desc: "以 OLETF 老鼠為對象進行 10 週試驗，飲用鹼性還原水 (ARW) 一組的血糖值與對照組相比出現顯著下降。此為動物實驗結果，並非人體療效證明。",
    source: "OLETF 大鼠實驗",
  },
  {
    icon: Beaker,
    title: "自由基與代謝",
    stat: "活性氧顯著減少",
    desc: "飲用 ARW 後肝臟、肺、腎臟等處的活性氧數量顯著減少，顯示鹼性還原水有效對抗自由基，並支援身體代謝功能——這正是痛風人士日常關注的方向。",
    source: "DAFH-DA 檢測實驗",
  },
  {
    icon: TrendingDown,
    title: "血脂相關數據",
    stat: "LDL↓ HDL↑",
    desc: "實驗中膽固醇總濃度降低，壞膽固醇 (LDL) 減少而好膽固醇 (HDL) 增加，三酸甘油脂由 285 降至 120 mg/dl。糖尿人士普遍同時關注血脂管理。",
    source: "第三方實驗數據",
  },
  {
    icon: ShieldCheck,
    title: "吸收與補水效率",
    stat: "吸收快 3 倍",
    desc: "六角水分子結構完整、細小，滲透力高、溶解力快，身體吸收快 3 倍，令糖尿及痛風人士更容易達到每日所需飲水量。",
    source: "產品技術資料",
  },
];

const HealthDataSection = () => {
  return (
    <section id="research" className="py-24 bg-gradient-water">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">糖尿・痛風相關實驗數據</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            以下為天然礦物質鹼性還原水 (ARW) 的第三方公開實驗資料，僅供參考，不代表個人使用效果
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dataCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background rounded-2xl p-8 shadow-water border border-border/50 hover:shadow-water-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{card.title}</h3>
                  <span className="text-sm font-semibold text-accent">{card.stat}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{card.desc}</p>
              <p className="text-xs text-muted-foreground/70 italic">數據來源：{card.source}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto mt-10 leading-relaxed">
          數據引述自第三方公開研究（部分為動物實驗），並非本產品之臨床療效證明。本產品不能預防、治療或治癒糖尿病、痛風或任何疾病。
        </p>
      </div>
    </section>
  );
};

export default HealthDataSection;
