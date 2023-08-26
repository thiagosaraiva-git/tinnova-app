import Navbar from "@/components/Navbar";
import "./globals.scss";

export const metadata = {
  title: "Tinnova",
  description: "Tinnova tech test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
