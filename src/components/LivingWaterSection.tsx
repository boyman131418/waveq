import { motion } from "framer-motion";
import { Check } from "lucide-react";

const criteria = [
  "具有生命力的水",
  "無污染物的乾淨水",
  "天然礦物質的水",
  "鹼性水",
  "能消除自由基的水",
  "六角水分子結構豐富的水",
  "充滿能量的活水",
];

const LivingWaterSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">活水六大標準</h2>
          <p className="text-muted-foreground text-lg">
            水是生命之源，選擇合適的飲用水至關重要
          </p>
        </motion.div>

        <div className="space-y-4">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-water transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-foreground font-medium">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivingWaterSection;
