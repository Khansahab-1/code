"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      {/* Top Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">
              {t("aboutUs")}
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("whoWeAreDesc")}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">
              {t("ourMission")}
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("ourMissionDesc")}
            </p>
          </div>

          {/* Quality */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">
              {t("qualityPromise")}
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("qualityPromiseDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-accent font-semibold">
                {t("businessNameValue")}
              </p>
            </div>

            <div className="text-primary-foreground/80 leading-relaxed">
              {t("addressValue")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </div>

            <div className="space-y-1">
              <a href="tel:+918793219145" className="block hover:text-accent">
                +91 87932 19145
              </a>
              <a href="tel:+919767619134" className="block hover:text-accent">
                +91 97676 19134
              </a>
            </div>

            <a
              href="https://wa.me/918793219145"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent/40 bg-accent/20 text-accent hover:bg-accent/30 transition w-fit"
            >
              {t("chatOnWhatsapp")}
            </a>
          </div>

          {/* Map */}
          <div className="rounded-md overflow-hidden border border-border/40 h-56">
            <iframe
              src="https://www.google.com/maps?q=Naik%20Road%20Mahal%20Nagpur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/40 py-5">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-primary-foreground/70">
          <p>
            © {year} {t("copyright")}
          </p>
          <p className="mt-1">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
