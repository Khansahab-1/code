"use client"

import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">{t("aboutUs")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">{t("whoWeAre")}</h3>
            <p className="text-primary-foreground/90 leading-relaxed">{t("whoWeAreDesc")}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">{t("ourMission")}</h3>
            <p className="text-primary-foreground/90 leading-relaxed">{t("ourMissionDesc")}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">{t("qualityPromise")}</h3>
            <p className="text-primary-foreground/90 leading-relaxed">{t("qualityPromiseDesc")}</p>
          </div>
        </div>
      </div>

      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border/50">
        <h2 className="text-3xl font-bold mb-12">{t("getInTouch")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">{t("businessName")}</h3>
              <p className="text-primary-foreground/90 text-lg font-medium">{t("businessNameValue")}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">{t("address")}</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {t("addressValue")
                  .split("\n")
                  .map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < 2 && <br />}
                    </span>
                  ))}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">{t("phone")}</h3>
              <div className="space-y-2">
                <a
                  href="tel:+918793219145"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  <span>+91 87932 19145</span>
                </a>
                <a
                  href="tel:+918793219145"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  <span>+91 97676 19134</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">{t("connectWithUs")}</h3>
              <a
                href="https://wa.me/918793219145"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/50 rounded-lg text-accent hover:bg-accent/30 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.938 1.495 9.842 9.842 0 10 13.936 3.485 9.838 9.838 0 00-9.005-4.98M1 11.5C1 5.925 5.925 1 11.5 1S22 5.925 22 11.5 17.075 22 11.5 22 1 17.075 1 11.5z" />
                </svg>
                {t("chatOnWhatsapp")}
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden border border-border/50 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5673856506944!2d79.08247!3d21.14606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ea7c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sNaik%20Road%2C%20Mahal%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-primary-foreground/80 text-sm">
          <p>
            &copy; {currentYear} {t("copyright")}
          </p>
          <p className="mt-2">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  )
}
