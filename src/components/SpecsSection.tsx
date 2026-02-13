import { motion } from "framer-motion";

const specs = [
  { label: "型號", value: "WQ 2000" },
  { label: "尺寸", value: "W260 x L270 x H370 mm" },
  { label: "額定電壓", value: "220V / 50Hz" },
  { label: "功率", value: "14.0W/h" },
  { label: "容量", value: "2.0L" },
  { label: "重量", value: "2.7Kg" },
  { label: "材料", value: "ABS / PET" },
  { label: "濾芯", value: "mineQ Cartridge" },
  { label: "美國專利號", value: "US 6,171,490 B1" },
  { label: "生成方式", value: "磁場渦旋運動 + 遠紅外線 + 波能量" },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">產品規格</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-border overflow-hidden shadow-water"
        >
          {specs.map((s, i) => (
            <div
              key={i}
              className={`flex items-center px-6 py-4 ${
                i % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <span className="w-32 flex-shrink-0 font-semibold text-sm text-foreground">{s.label}</span>
              <span className="text-sm text-muted-foreground">{s.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsSection;
