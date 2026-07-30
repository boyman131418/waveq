import { motion } from "framer-motion";
import { Activity, Droplet } from "lucide-react";

const groups = [
  {
    icon: Activity,
    tag: "糖尿關注人士",
    title: "改善糖尿人士的日常飲水質素",
    points: [
      "糖尿人士普遍需要充足水分，六角水分子結構完整、細小，身體吸收快 3 倍，補水更有效率",
      "韓國 OLETF 大鼠 10 週實驗中，飲用鹼性還原水一組血糖值由 203 降至 131 mg/dl（動物實驗數據）",
      "天然礦物質的水補充鈣、鎂，配合均衡飲食與醫生指示的日常管理",
    ],
  },
  {
    icon: Droplet,
    tag: "痛風關注人士",
    title: "痛風人士飲水，質與量同樣重要",
    points: [
      "痛風人士需要大量飲水以助身體代謝，六角水口感順滑，容易飲得多、飲得夠",
      "鹼性六角水有助酸鹼平衡，配合低嘌呤飲食成為日常保健習慣",
      "活性氫有效對抗自由基，支援排毒消脂與整體新陳代謝",
    ],
  },
];

const FocusSection = () => {
  return (
    <section id="focus" className="py-24 bg-gradient-water">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">兩大關注：糖尿・痛風</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            WaveQ 不是藥物，而是幫助糖尿及痛風人士建立更好飲水習慣的工具
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background rounded-2xl p-8 shadow-water border border-border/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-accent">{g.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-3">
                {g.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto mt-10 leading-relaxed">
          以上為產品技術特性及公開實驗數據的資料性描述，並非療效聲稱。糖尿及痛風人士請繼續依從醫生指示服藥及覆診，並在調整飲食或飲水習慣前諮詢註冊醫護人員。
        </p>
      </div>
    </section>
  );
};

export default FocusSection;