
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ padding: 40, maxWidth: 1100, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>US WIRELESS | SIM & eSIM, Phone Repair, Luggage Storage | Fort Lauderdale</title>
        <meta name="description" content="SIM & eSIM activation for AT&T, Verizon, Simple Mobile, Ultra Mobile, Lyca, Gen Mobile. Same-day phone, tablet & laptop repair in 10 minutes. Luggage storage hourly or daily near Port Everglades & FLL." />
      </Head>

      <h1 style={{ color: '#1e40af' }}>US WIRELESS</h1>
      <h2>Travel Tech Store Near Port Everglades & Fort Lauderdale Airport</h2>

      <p><strong>📍 Address:</strong> 1499 SE 17th St Suite A, Fort Lauderdale, FL 33316</p>
      <p><strong>📞 Call:</strong> <a href="tel:8084045075">808-404-5075</a></p>
      <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/18084045075" target="_blank">Chat Now</a></p>

      <hr/>

      <h2>SIM & eSIM Activation</h2>
      <p>We activate <strong>physical SIM & eSIM</strong> for major carriers:</p>
      <ul>
        <li>AT&T</li>
        <li>Verizon</li>
        <li>Simple Mobile</li>
        <li>Ultra Mobile</li>
        <li>Lyca Mobile</li>
        <li>Gen Mobile</li>
      </ul>

      <h2>Fast Phone & Device Repair</h2>
      <p><strong>Same-day repairs — many fixed in as little as 10 minutes.</strong></p>
      <ul>
        <li>iPhone & Android repair</li>
        <li>iPads & tablets</li>
        <li>Laptops</li>
        <li>Charging ports, screens, batteries</li>
      </ul>

      <h2>Luggage Storage</h2>
      <p>Secure luggage storage available hourly, daily, or multiple days.</p>

      <h2>Gifts & Souvenirs</h2>
      <p>We also sell small gifts, travel accessories, and souvenirs.</p>

      <div style={{ marginTop: 30 }}>
        <Image src="/images/5star.png" width={120} height={120} alt="5 Star Reviews" />
        <p><strong>Award-Winning 5★ Customer Service</strong></p>
      </div>
    </div>
  );
}
