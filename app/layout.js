
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "SouthCrew",
  description: "Websites made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
