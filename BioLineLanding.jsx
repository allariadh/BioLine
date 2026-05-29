import React, { useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  HandCoins,
  LockKeyhole,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Syringe,
  TestTube2,
  XCircle,
} from "lucide-react";

const images = {
  logo: "/images/bioline-logo.png",
  hero: "/images/page-1jpeg.jpeg",
  seal: "/images/page-3.jpeg",
  insert: "/images/page-2.jpeg",
  sequence: "/images/page-4.jpeg",
};

const navLinks = [
  { ar: "المشكلة والحل", fr: "Problème & solution", href: "#solution" },
  { ar: "المزايا", fr: "Avantages", href: "#features" },
  { ar: "كيف يعمل", fr: "Comment ça marche", href: "#process" },
  { ar: "تواصل معنا", fr: "Contact", href: "#contact" },
];

const features = [
  {
    icon: ShieldCheck,
    ar: "أمان مخبري أعلى",
    fr: "Sécurité renforcée",
    bodyAr:
      "نظام مغلق يقلل التعرض المباشر للعينات البيولوجية ويحد من الروائح وانتشار الملوثات.",
    bodyFr:
      "Un système fermé qui réduit l’exposition directe aux échantillons biologiques.",
  },
  {
    icon: Sparkles,
    ar: "صمام ذاتي الإغلاق",
    fr: "Valve auto-obturante",
    bodyAr:
      "صمام TPE مرن يسمح بمرور الماصة ثم يغلق تلقائيا بعد السحب دون فتح الغطاء.",
    bodyFr:
      "La valve TPE se referme automatiquement après le passage de la pipette.",
  },
  {
    icon: TestTube2,
    ar: "توافق عملي واسع",
    fr: "Compatibilité universelle",
    bodyAr:
      "مصمم ليتلاءم مع سير العمل اليومي في المخابر والعيادات ومراكز التحاليل.",
    bodyFr:
      "Pensé pour s’intégrer aux routines des laboratoires et cliniques.",
  },
  {
    icon: HandCoins,
    ar: "كفاءة اقتصادية",
    fr: "Rentabilité maîtrisée",
    bodyAr:
      "حل بسيط يقلل خطوات المناولة، ويحسن سرعة العمل، ويساعد على خفض مخاطر الهدر.",
    bodyFr:
      "Moins de manipulations, plus de fluidité et une meilleure maîtrise des risques.",
  },
];

const steps = [
  {
    number: "01",
    icon: Syringe,
    ar: "إدخال الماصة مباشرة",
    fr: "Insérer la pipette",
    bodyAr:
      "يتم إدخال الماصة عبر الصمام الرمادي دون الحاجة إلى فتح الكوب أو لمس العينة.",
    bodyFr:
      "La pipette traverse la valve sans ouvrir le récipient ni exposer l’échantillon.",
    image: images.insert,
    alt: "إدخال الماصة عبر صمام BioLine",
  },
  {
    number: "02",
    icon: FlaskConical,
    ar: "سحب العينة بأمان",
    fr: "Extraire l’échantillon",
    bodyAr:
      "تتم عملية السحب داخل نظام مغلق يحافظ على نظافة بيئة العمل وسلامة الطاقم.",
    bodyFr:
      "Le prélèvement se fait dans un environnement fermé, propre et sécurisé.",
    image: images.sequence,
    alt: "تسلسل استخراج العينة من كوب BioLine",
  },
  {
    number: "03",
    icon: LockKeyhole,
    ar: "إغلاق تلقائي بعد السحب",
    fr: "Fermeture automatique",
    bodyAr:
      "بعد إخراج الماصة، يعود الصمام إلى وضعه المغلق تلقائيا للحفاظ على العينة.",
    bodyFr:
      "Après retrait, la valve reprend sa position fermée et protège le contenu.",
    image: images.hero,
    alt: "كوب BioLine بعد الإغلاق الذاتي",
  },
];

function BilingualLabel({ ar, fr, className = "" }) {
  return (
    <span className={className}>
      <span className="block">{ar}</span>
      <span className="block text-sm font-normal text-blue-100/85">{fr}</span>
    </span>
  );
}

function SectionHeading({ eyebrowAr, eyebrowFr, titleAr, titleFr, bodyAr, bodyFr }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
        <BadgeCheck className="h-4 w-4" />
        <span>{eyebrowAr}</span>
        <span className="text-gray-400">/ {eyebrowFr}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-normal text-gray-950 md:text-4xl">
        {titleAr}
      </h2>
      <p className="mt-2 text-lg text-gray-500">{titleFr}</p>
      {bodyAr && (
        <div className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          <p>{bodyAr}</p>
          <p className="mt-1 text-sm leading-7 text-gray-500">{bodyFr}</p>
        </div>
      )}
    </div>
  );
}

export default function BioLineLanding() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main dir="rtl" className="min-h-screen bg-white font-sans text-gray-900">
      <nav className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="BioLine"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 transition hover:text-blue-700"
              >
                <span>{link.ar}</span>
                <span className="mr-1 text-xs font-medium text-gray-400">/ {link.fr}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 md:inline-flex"
          >
            طلب عرض تجريبي
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-blue-100 text-blue-800 lg:hidden"
            aria-label="فتح القائمة"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <section id="top" className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              نظام مغلق 100%
              <span className="text-gray-400">/ Système fermé</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-gray-950 sm:text-5xl lg:text-6xl">
              ثورة الأمان في المخابر الطبية
            </h1>
            <p className="mt-4 text-2xl font-semibold text-blue-700">
              La révolution de la sécurité en laboratoire
            </p>
            <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-gray-700">
              <p>
                BioLine كوب عينات بيولوجية مبتكر مزود بصمام TPE ذاتي الإغلاق،
                يسمح بسحب العينة دون فتح الغطاء ودون تعريض الطاقم أو البيئة
                المخبرية للروائح أو التلوث المتبادل.
              </p>
              <p className="text-base leading-7 text-gray-500">
                BioLine est un récipient biologique innovant avec valve TPE
                auto-obturante, conçu pour prélever sans ouverture manuelle et
                réduire les risques de contamination croisée.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-700/20 transition hover:bg-blue-800"
              >
                اطلب عينة تجريبية
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-7 py-4 text-base font-bold text-blue-800 transition hover:bg-blue-50"
              >
                شاهد طريقة العمل
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-6 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-900/10">
                <img
                  src={images.hero}
                  alt="كوب BioLine بغطاء أصفر وصمام رمادي ذاتي الإغلاق"
                  className="h-[360px] w-full rounded-xl object-cover sm:h-[480px]"
                />
              </div>
              <div className="absolute bottom-5 right-5 rounded-xl bg-white/95 p-4 shadow-xl ring-1 ring-blue-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-blue-700" />
                  <div>
                    <p className="font-bold text-gray-950">تعقيم مستمر</p>
                    <p className="text-sm text-gray-500">Stérilité maintenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowAr="التحدي الطبي"
          eyebrowFr="Enjeu médical"
          titleAr="من كوب مفتوح إلى نظام آمن ومغلق"
          titleFr="Du récipient ouvert au système fermé sécurisé"
          bodyAr="المناولة التقليدية للعينات تفرض فتح الغطاء يدويا، مما يزيد الروائح، احتمالات الرذاذ، والتلوث المتبادل. BioLine يعيد تصميم هذه الخطوة لتصبح أكثر أمانا ووضوحا."
          bodyFr="La manipulation classique impose l’ouverture manuelle, avec plus d’odeurs, d’aérosols et de risques de contamination. BioLine transforme cette étape critique."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-100 bg-red-50/70 p-7">
            <div className="mb-5 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-950">الأكواب التقليدية</h3>
                <p className="text-sm text-gray-500">Récipients traditionnels</p>
              </div>
            </div>
            <ul className="space-y-4 leading-7 text-gray-700">
              <li>فتح يدوي متكرر للغطاء أثناء التحليل.</li>
              <li>روائح مزعجة واحتمال تعرض مباشر للعينة.</li>
              <li>مخاطر تلوث متبادل بين الأدوات والأسطح.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-blue-700" />
              <div>
                <h3 className="text-2xl font-bold text-gray-950">حل BioLine المغلق</h3>
                <p className="text-sm text-gray-500">Solution fermée BioLine</p>
              </div>
            </div>
            <ul className="space-y-4 leading-7 text-gray-700">
              <li>سحب مباشر عبر صمام TPE دون فتح الغطاء.</li>
              <li>تقليل الروائح والتعرض للعينة أثناء العمل.</li>
              <li>حماية أفضل للطاقم، العينة، وبيئة المختبر.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowAr="المزايا الأساسية"
          eyebrowFr="Avantages clés"
          titleAr="مصمم للسلامة، السرعة، والثقة"
          titleFr="Conçu pour la sécurité, la rapidité et la confiance"
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.ar}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950">{feature.ar}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">{feature.fr}</p>
                  <p className="mt-4 leading-7 text-gray-700">{feature.bodyAr}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{feature.bodyFr}</p>
                </article>
              );
            })}
          </div>

          <aside className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5">
            <img
              src={images.seal}
              alt="ختم ألمنيوم مضاد للعبث يحافظ على التعقيم"
              className="h-72 w-full object-cover"
            />
            <div className="p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950">
                تعقيم محفوظ بنسبة 100%
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Stérilité maintenue à 100%
              </p>
              <p className="mt-4 leading-7 text-gray-700">
                ختم الألمنيوم المضاد للعبث يمنح طبقة حماية إضافية قبل الاستخدام
                ويؤكد أن الكوب لم يتعرض للفتح أو التلوث.
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Le scellage aluminium inviolable protège le récipient avant
                utilisation et renforce la traçabilité de la stérilité.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="process" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrowAr="كيف يعمل"
          eyebrowFr="Comment ça marche"
          titleAr="ثلاث خطوات بسيطة دون فتح الغطاء"
          titleFr="Trois étapes simples sans ouverture du couvercle"
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg shadow-blue-900/5"
              >
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="h-72 w-full object-cover"
                  />
                  <div className="absolute right-4 top-4 rounded-lg bg-blue-700 px-4 py-2 text-lg font-black text-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-950">{step.ar}</h3>
                      <p className="text-sm text-gray-500">{step.fr}</p>
                    </div>
                  </div>
                  <p className="leading-7 text-gray-700">{step.bodyAr}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{step.bodyFr}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-blue-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
              <Mail className="h-4 w-4" />
              تواصل تجاري وطبي
              <span className="text-blue-100">/ Demande professionnelle</span>
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-normal md:text-5xl">
              هل ترغب في تجربة BioLine داخل مخبرك؟
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              اترك بياناتك وسيتواصل معك فريقنا لترتيب عرض تجريبي، تفاصيل
              التوريد، أو ملف المواصفات التقنية.
            </p>
            <p className="mt-2 text-base leading-7 text-blue-200">
              Laissez vos coordonnées pour organiser une démonstration, recevoir
              les détails d’approvisionnement ou la fiche technique.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="text-3xl font-black">100%</p>
                <p className="text-sm text-blue-100">نظام مغلق / Système fermé</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="text-3xl font-black">TPE</p>
                <p className="text-sm text-blue-100">صمام ذكي / Valve intelligente</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-2xl shadow-blue-950/30 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-800">
                  الاسم الكامل
                  <span className="mr-1 font-medium text-gray-400">/ Nom complet</span>
                </span>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="د. أحمد بن علي"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-800">
                  العيادة أو المخبر
                  <span className="mr-1 font-medium text-gray-400">/ Clinique ou labo</span>
                </span>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="مخبر التحاليل الطبية"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-800">
                  رقم الهاتف
                  <span className="mr-1 font-medium text-gray-400">/ Téléphone</span>
                </span>
                <div className="relative">
                  <Phone className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    required
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 py-3 pl-4 pr-12 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="+213 ..."
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-800">
                  البريد الإلكتروني
                  <span className="mr-1 font-medium text-gray-400">/ Email</span>
                </span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-gray-200 py-3 pl-4 pr-12 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    placeholder="contact@laboratoire.com"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              إرسال الطلب
              <ArrowLeft className="h-5 w-5" />
            </button>

            {submitted && (
              <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                <p className="font-bold">تم إرسال طلبك بنجاح.</p>
                <p className="mt-1 text-sm text-green-700">
                  Votre demande a bien été enregistrée. Notre équipe vous
                  contactera prochainement.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-blue-100 pt-8 text-center md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="BioLine"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-500">
            © 2026 BioLine. جميع الحقوق محفوظة / Tous droits réservés.
          </p>
          <div className="flex gap-5 text-sm font-semibold text-gray-600">
            <a href="#features" className="hover:text-blue-700">المزايا</a>
            <a href="#process" className="hover:text-blue-700">طريقة العمل</a>
            <a href="#contact" className="hover:text-blue-700">التواصل</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
