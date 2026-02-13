import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const certs = ["US Patent", "Water Quality Association", "CE", "CB", "Russia GOST", "KFDA", "GMP", "ISO 9001", "ISO 14001"];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gradient-water">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">國際認證</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Globe className="w-5 h-5" />
            <p>WaveQ 在美國、加拿大、澳洲、日本以及歐洲14個國家和世界35個國家深受喜愛</p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="px-6 py-3 rounded-xl bg-background border border-border shadow-water text-sm font-semibold text-foreground"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
