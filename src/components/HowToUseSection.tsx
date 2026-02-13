import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "倒入食水", desc: "將自來水或過濾水倒入 WaveQ 水壺中，容量最多2公升" },
  { step: "2", title: "按下按鈕", desc: "只需按下「Q」按鈕，機器自動開始運作" },
  { step: "3", title: "等待7分鐘", desc: "通過磁場渦旋運動和遠紅外線處理，自動生成六角水" },
  { step: "4", title: "享用健康水", desc: "天然礦物質鹼性還原水即刻完成，可直接飲用" },
];

const HowToUseSection = () => {
  return (
    <section id="howto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">使用方法</h2>
          <p className="text-muted-foreground text-lg">簡單四步，即可享用健康好水</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-water-deep text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-water">
                {s.step}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
