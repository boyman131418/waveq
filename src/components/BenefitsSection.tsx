import { motion } from "framer-motion";

const benefits = [
  "抗氧化",
  "排毒美顏",
  "改善便秘",
  "增強抵抗力",
  "有助酸鹼平衡",
  "降血壓",
  "降血糖",
  "降血脂",
  "排脂減肥",
  "改善痛風",
  "預防骨質疏鬆",
  "抗衰老",
  "令皮膚素質更好",
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-water-deep text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">十三大健康功效</h2>
          <p className="text-primary-foreground/80 text-lg">
            WaveQ 天然礦物質鹼性六角水生成機全方位改善人體質素
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {benefits.map((b, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 text-sm font-medium"
            >
              {b}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
