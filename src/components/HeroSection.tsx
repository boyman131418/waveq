import { motion } from "framer-motion";
import heroBg from "@/assets/hero-water-bg.jpg";
import productImg from "@/assets/waveq-product.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-water" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">韓國原裝製造</p>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gradient-water">WaveQ</span>
              <br />
              <span className="text-foreground">天然礦物質鹼性</span>
              <br />
              <span className="text-foreground">六角水生成機</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              每天只花7分鐘，為您和家人生成富含天然礦物質的鹼性六角水。
              操作簡單，毋須接駁水喉，毋須每年更換配件。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-water-deep text-primary-foreground font-semibold shadow-water hover:shadow-water-lg transition-all duration-300 hover:scale-105"
              >
                了解更多
              </a>
              <a
                href="https://wa.link/uuzzvl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                立即查詢
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-water-light opacity-60 blur-3xl" />
              <img
                src={productImg}
                alt="WaveQ 六角水生成機"
                className="relative z-10 w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-water-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
