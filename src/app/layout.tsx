import NavBar from "../components/NavBar/NavBar";
import './globals.css'

export const metadata = {
  title: "D&D Collection Br",
  description:
    "Todas as regras de dungeons and dragons 5e totalmente traduzidos."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
