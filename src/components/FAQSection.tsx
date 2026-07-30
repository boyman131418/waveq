import { motion } from "framer-motion";

export const faqs = [
  {
    q: "糖尿人士適合飲用 WaveQ 六角水嗎？",
    a: "WaveQ 為家用飲水設備，並非醫療儀器，不能治療糖尿病。糖尿人士日常需要充足水分，六角水分子結構完整、細小，身體吸收快 3 倍，有助更容易達到每日飲水量。用藥及飲食請繼續依從醫生指示。",
  },
  {
    q: "痛風人士飲鹼性六角水有咩幫助？",
    a: "痛風人士需要大量飲水以助身體代謝。鹼性六角水口感順滑，容易飲得多、飲得夠，並有助酸鹼平衡，配合低嘌呤飲食成為日常保健習慣。本產品不能預防或治療痛風。",
  },
  {
    q: "六角水同一般水有咩分別？",
    a: "六角水的水分子以六角環狀結構排列，分子團細小、滲透力高、溶解力快，身體吸收快 3 倍，同時保留天然鈣、鎂等礦物質。",
  },
  {
    q: "WaveQ WQ 2000 需要更換濾芯嗎？",
    a: "無須每年更換濾芯等配件，亦無須接駁水喉，長期使用經濟實惠又環保。",
  },
  {
    q: "生成一壺六角水需要幾耐？",
    a: "只需按下按鈕，約 7 分鐘即可生成一壺天然礦物質鹼性六角水。",
  },
  {
    q: "WaveQ 有咩國際認證？",
    a: "WaveQ 擁有美國專利、Water Quality Association、CE、CB、Russia GOST、KFDA、GMP、ISO 9001、ISO 14001 等國際認證，韓國原裝製造。",
  },
  {
    q: "香港邊度可以查詢或睇示範？",
    a: "可透過 WhatsApp 或致電 9090 8393 (Edwin) 查詢，提供專業示範及送貨安排。",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">常見問題：糖尿・痛風飲水</h2>
          <p className="text-muted-foreground text-lg">香港用家最常問關於 WaveQ 六角水生成機的問題</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border/60 bg-gradient-water-card p-6 shadow-water"
            >
              <summary className="cursor-pointer list-none font-semibold text-foreground flex justify-between gap-4">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;