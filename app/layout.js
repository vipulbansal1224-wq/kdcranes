import "./globals.css";

export const metadata = {
  title: "KD Enterprises - K.D. Crane Spare Parts & Accessories | Ludhiana",
  description: "Pioneer & leading manufacturer of DSL Busbar Systems, EOT Crane Current Collectors, Wireless Radio Remote Controls, Lever Limit Switches & Hoists in Ludhiana, Punjab.",
  keywords: "KD Cranes, KD Enterprises, EOT Crane Spare Parts, DSL Busbar System 125A, Current Collector Ludhiana, Wireless Radio Remote Control 8D, Lever Limit Switch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
