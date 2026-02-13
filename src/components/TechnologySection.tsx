import { motion } from "framer-motion";

const techItems = [
  { label: "Ocher 處理", desc: "催化作用和放射遠紅外線，生成六角水" },
  { label: "鎂合金", desc: "改善形成鹼性水和活性氫氣的性質" },
  { label: "Silver Ceramic", desc: "特殊製造，具有強力抗菌作用" },
  { label: "Coral Calcium", desc: "使鈣質順利放出，活性氫氣更加安全" },
  { label: "活性磁場", desc: "將 Cluster 結構化成六角水，使水更具活性" },
  { label: "遠紅外線波長", desc: "使分子活動更加活躍，密度和表面張力變大" },
  { label: "飽和溶解氧", desc: "氧氣含量豐富，鮮活的水" },
  { label: "Torsion 處理", desc: "給身體注入活力，對身體有利的特殊處理" },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Wave Q 核心技術</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            八大核心技術系統，通過向心螺旋旋轉運動，讓水形成強有力的自然能量
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {techItems.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:shadow-water transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-water-deep flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{t.label}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
