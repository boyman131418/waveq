import { motion } from "framer-motion";

const benefits = [
  "改善糖尿",
  "改善痛風",
  "有助酸鹼平衡",
  "有效對抗自由基",
  "排毒消脂",
  "改善血壓",
  "改善血脂",
  "改善便秘",
  "增強抵抗力",
  "抗衰老",
  "強健骨骼",
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
          <h2 className="text-4xl font-bold mb-4">以糖尿・痛風為先的十二項關注</h2>
          <p className="text-primary-foreground/80 text-lg">
            使用者最常關注的日常保健方向，由每天一壺六角水開始
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

        <p className="text-xs text-primary-foreground/60 text-center max-w-2xl mx-auto mt-10 leading-relaxed">
          以上為使用者關注的保健方向及一般資料，並非醫療或療效聲稱，效果因人而異。
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
