import { motion } from "framer-motion";

const SkinCareSection = () => {
  return (
    <section className="py-24 bg-gradient-water">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">六角水美肌秘密</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-background rounded-2xl p-8 border border-border shadow-water">
            <h3 className="text-xl font-bold text-accent mb-4">✓ 六角水優勢</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent">•</span>六角水分子結構與人體肌膚水分子相近，容易被肌膚吸收</li>
              <li className="flex gap-2"><span className="text-accent">•</span>水分和養分迅速注入肌膚，令細胞營潤飽滿</li>
              <li className="flex gap-2"><span className="text-accent">•</span>有效活化細胞能量傳遞，加速新陳代謝及肌膚更生</li>
            </ul>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-border shadow-water">
            <h3 className="text-xl font-bold text-muted-foreground mb-4">✗ 一般水分子</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>•</span>水分子結構不穩定，不容易被吸收</li>
              <li className="flex gap-2"><span>•</span>水分和養分未能完全注入肌膚細胞</li>
              <li className="flex gap-2"><span>•</span>細胞脆弱，更生功能下降</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkinCareSection;
