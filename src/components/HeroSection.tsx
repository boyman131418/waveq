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
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">韓國原裝製造 · 專為關注糖尿及痛風人士</p>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-foreground">關注糖尿・痛風</span>
              <br />
              <span className="text-foreground">由每日飲水開始</span>
              <br />
              <span className="text-gradient-water">WaveQ 六角水生成機</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              糖尿及痛風人士，日常最需要的就是「飲得夠、飲得啱」。
              WaveQ 每天7分鐘，生成分子結構完整、細小的天然礦物質鹼性六角水，
              有助酸鹼平衡、促進新陳代謝，讓每一杯水都成為日常健康管理的一部分。
            </p>
            <p className="text-xs text-muted-foreground/70 mb-6 max-w-lg leading-relaxed">
              WaveQ 為家用飲水設備，並非醫療器械，不能診斷、治療或治癒任何疾病，亦不可取代醫生處方及藥物。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#focus"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-water-deep text-primary-foreground font-semibold shadow-water hover:shadow-water-lg transition-all duration-300 hover:scale-105"
              >
                了解糖尿・痛風飲水方案
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
