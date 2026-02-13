import { motion } from "framer-motion";
import { TrendingDown, Activity, ShieldCheck, Beaker } from "lucide-react";

const dataCards = [
  {
    icon: ShieldCheck,
    title: "抗癌效果",
    stat: "減慢擴散速度",
    desc: "實驗顯示飲用ARW的白鼠癌細胞擴散及生長速度明顯減慢，癌轉移數量由 350 降至 147。",
    source: "韓國高麗院研究數據",
  },
  {
    icon: Activity,
    title: "糖尿病改善",
    stat: "血糖值顯著下降",
    desc: "以OLETF老鼠為對象進行10周試驗，飲用ARW一組的血糖值與對照組相比出現顯著下降，由 203 降至 131 mg/dl。",
    source: "OLETF大鼠實驗",
  },
  {
    icon: TrendingDown,
    title: "膽固醇改善",
    stat: "LDL↓ HDL↑",
    desc: "膽固醇總濃度不但降低，壞膽固醇(LDL)減少，而好膽固醇(HDL)反而增加。三酸甘油脂由 285 降至 120 mg/dl。",
    source: "臨床實驗數據",
  },
  {
    icon: Beaker,
    title: "抗氧化及免疫",
    stat: "自由基顯著減少",
    desc: "飲用ARW後肝臟、肺、腎臟等處的活性氧數量顯著減少，脾臟的活性氧數量強而多，證明ARW不僅具有抗氧化作用，更能提高免疫功能。",
    source: "DAFH-DA檢測實驗",
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
          <h2 className="text-4xl font-bold text-foreground mb-4">科學實證數據</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            天然礦物質鹼性還原水 (ARW) 的實驗數據顯示令人驚異的健康功效
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
      </div>
    </section>
  );
};

export default HealthDataSection;
