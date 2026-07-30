import { motion } from "framer-motion";
import { Stethoscope, CalendarDays, ClipboardList } from "lucide-react";
import caseABefore from "@/assets/case-a-before.jpg";
import caseAAfter from "@/assets/case-a-after.jpg";
import caseBBefore from "@/assets/case-b-before.jpg";
import caseBAfter from "@/assets/case-b-after.jpg";

const cases = [
  {
    tag: "糖尿關注 · 個人分享",
    name: "陳先生．58歲．荃灣",
    before: caseABefore,
    after: caseAAfter,
    beforeNote: "分享前：每日飲水不足 800ml，經常口乾、容易疲倦，睡眠質素一般。",
    afterNote: "六個月後：每日飲用 1.5–2L 六角水，自覺精神較好、口乾情況減少，覆診時繼續依足醫生指示服藥。",
    metrics: [
      { label: "每日飲水量", from: "約 800ml", to: "約 1.8L" },
      { label: "自覺精神狀態（自評 1-10）", from: "4", to: "7" },
      { label: "覆診及用藥", from: "依醫生指示", to: "依醫生指示" },
    ],
  },
  {
    tag: "痛風關注 · 個人分享",
    name: "李女士．63歲．元朗",
    before: caseBBefore,
    after: caseBAfter,
    beforeNote: "分享前：飲水量少、水腫感明顯，關節不適時活動較少，日常飲食偏重。",
    afterNote: "六個月後：養成定時飲水習慣，配合低嘌呤飲食及醫生建議，自覺身體較輕鬆、皮膚素質有改善。",
    metrics: [
      { label: "每日飲水量", from: "約 1L", to: "約 2L" },
      { label: "每週步行日數", from: "1 日", to: "5 日" },
      { label: "飲食配合", from: "無特別控制", to: "低嘌呤飲食" },
    ],
  },
];

const CaseStudySection = () => {
  return (
    <section id="cases" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold mb-4">
            <Stethoscope className="w-4 h-4" />
            六個月飲水習慣紀錄
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">使用者個人分享（飲用前 / 六個月後）</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            以下為使用者自願提供的生活紀錄與自我感受分享，非臨床病例，亦非療效證明
          </p>
        </motion.div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-water"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-border bg-gradient-water">
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">{c.name}</span>
                </div>
                <span className="text-xs font-semibold text-accent">{c.tag}</span>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-border">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-muted-foreground">
                    <CalendarDays className="w-4 h-4" /> 飲用前
                  </div>
                  <img
                    src={c.before}
                    alt={`${c.name} 開始飲用 WaveQ 六角水前的生活紀錄照片`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-64 object-cover rounded-xl mb-4 grayscale-[0.35]"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.beforeNote}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-accent">
                    <CalendarDays className="w-4 h-4" /> 六個月後
                  </div>
                  <img
                    src={c.after}
                    alt={`${c.name} 持續飲用 WaveQ 六角水六個月後的生活紀錄照片`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.afterNote}</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-3 bg-secondary/60 px-4 py-2 text-xs font-semibold text-foreground">
                    <span>生活紀錄項目</span>
                    <span className="text-center">飲用前</span>
                    <span className="text-center">六個月後</span>
                  </div>
                  {c.metrics.map((m, j) => (
                    <div
                      key={j}
                      className={`grid grid-cols-3 px-4 py-3 text-sm ${j % 2 === 0 ? "bg-background" : "bg-card"}`}
                    >
                      <span className="text-muted-foreground">{m.label}</span>
                      <span className="text-center text-muted-foreground">{m.from}</span>
                      <span className="text-center font-semibold text-accent">{m.to}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto mt-10 leading-relaxed">
          以上為個別使用者的自願分享及生活習慣紀錄，並非醫療診斷、臨床病例或療效證明；相片為情境示意。效果因人而異，本產品不能預防、治療或治癒糖尿病、痛風或任何疾病，使用期間請繼續依從醫生指示。
        </p>
      </div>
    </section>
  );
};

export default CaseStudySection;