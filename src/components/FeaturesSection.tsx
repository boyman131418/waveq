import { motion } from "framer-motion";
import { Droplets, Shield, Zap, Heart, Leaf, Award, Timer, Wrench } from "lucide-react";

const features = [
  { icon: Droplets, title: "天然礦物質", desc: "含豐富天然鈣、鎂等礦物質，為身體補充必需元素" },
  { icon: Shield, title: "活性氫抗自由基", desc: "活性氫有效對抗自由基，延緩衰老，增強免疫力" },
  { icon: Zap, title: "操作簡單", desc: "毋須接駁水喉，只需按下按鈕，7分鐘即可生成健康好水" },
  { icon: Heart, title: "改善體質", desc: "有助排毒美顏、改善便秘、平衡體內酸鹼度" },
  { icon: Leaf, title: "毋須更換配件", desc: "無需每年更換濾芯等配件，經濟實惠又環保" },
  { icon: Award, title: "多國認證", desc: "擁有美國專利及CE、CB、KFDA、GMP等國際認證" },
  { icon: Timer, title: "耐用性高", desc: "採用優質ABS/PET材料，韓國原裝製造，品質保證" },
  { icon: Wrench, title: "十三個功效", desc: "抗氧化、排毒、降三高、減肥、改善痛風等多達十三個功效" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-water">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">產品特點</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            WaveQ 結合韓國水權威金吉昊博士研發的 Actimo 技術與 mineQ 天然礦物質濾芯
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gradient-water-card rounded-2xl p-6 shadow-water hover:shadow-water-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
