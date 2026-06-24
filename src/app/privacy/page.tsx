import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { PaymentProvider } from '../components/PaymentProvider'
import { PRIVACY_POLICY_PATH, SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_URL } from '../site'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${SITE_NAME}: how we collect, use, and protect your personal data.`,
  alternates: { canonical: `${SITE_URL}${PRIVACY_POLICY_PATH}` },
  robots: { index: true, follow: true },
}

const UPDATED = '15 червня 2026'

export default function PrivacyPage() {
  return (
    <PaymentProvider>
      <div className="marathon-page">
        <Navbar />

        <main className={styles.page}>
          <article className={styles.inner}>
            <header className={styles.header}>
              <h1 className={styles.title}>Політика конфіденційності</h1>
              <p className={styles.updated}>Останнє оновлення: {UPDATED}</p>
            </header>

            <div className={styles.content}>
              <section className={styles.section}>
                <p>
                  Ця Політика конфіденційності описує, як {SITE_NAME} («ми», «школа») збирає,
                  використовує та захищає персональні дані користувачів сайту {SITE_URL} під час
                  реєстрації на марафон англійської, оформлення оплати та надсилання заявок.
                </p>
              </section>

              <section className={styles.section}>
                <h2>1. Які дані ми збираємо</h2>
                <p>Ми можемо отримувати такі персональні дані:</p>
                <ul>
                  <li>ім&apos;я;</li>
                  <li>номер телефону або Telegram-контакт;</li>
                  <li>коментар до заявки (за бажанням);</li>
                  <li>дані про оплату: номер рахунку, сума, статус транзакції (без збереження даних банківської картки на нашому сайті).</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>2. Мета обробки даних</h2>
                <p>Персональні дані використовуються для:</p>
                <ul>
                  <li>оформлення доступу до марафону та проведення оплати;</li>
                  <li>зв&apos;язку з вами щодо участі в марафоні;</li>
                  <li>надання доступу до матеріалів і Telegram-бота;</li>
                  <li>обробки заявок і відповідей на ваші запитання;</li>
                  <li>виконання вимог законодавства України.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Правова підстава</h2>
                <p>
                  Ми обробляємо ваші дані на підставі вашої згоди, яку ви надаєте під час
                  заповнення форми або оформлення оплати, а також для виконання договору
                  про надання освітніх послуг.
                </p>
              </section>

              <section className={styles.section}>
                <h2>4. Передача даних третім сторонам</h2>
                <p>Для роботи сервісу дані можуть передаватися:</p>
                <ul>
                  <li><strong>Monobank</strong> — для проведення онлайн-оплати;</li>
                  <li><strong>Telegram</strong> — для сповіщень команди школи та надання доступу до бота;</li>
                  <li><strong>Vercel</strong> — для хостингу сайту.</li>
                </ul>
                <p>
                  Ми не продаємо і не передаємо ваші персональні дані третім особам у
                  маркетингових цілях.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Зберігання даних</h2>
                <p>
                  Дані з форм і підтвердження оплат обробляються лише стільки, скільки
                  потрібно для надання послуги, супроводу марафону та вирішення можливих
                  питань. Платіжна інформація обробляється платіжним провайдером Monobank
                  відповідно до його політики безпеки.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Ваші права</h2>
                <p>Ви маєте право:</p>
                <ul>
                  <li>дізнатися, які дані про вас обробляються;</li>
                  <li>вимагати виправлення або видалення даних;</li>
                  <li>відкликати згоду на обробку персональних даних;</li>
                  <li>звернутися зі скаргою до Уповноваженого ВРУ з прав людини.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>7. Захист даних</h2>
                <p>
                  Ми застосовуємо організаційні та технічні заходи для захисту персональних
                  даних від несанкціонованого доступу, втрати або розголошення.
                </p>
              </section>

              <section className={styles.section}>
                <h2>8. Контакти</h2>
                <p>
                  З питань щодо персональних даних звертайтесь:
                </p>
                <ul>
                  <li>Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
                  <li>Телефон: {SITE_PHONE_DISPLAY}</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>9. Зміни до політики</h2>
                <p>
                  Ми можемо оновлювати цю Політику конфіденційності. Актуальна версія
                  завжди доступна на цій сторінці з указанням дати останнього оновлення.
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </PaymentProvider>
  )
}
