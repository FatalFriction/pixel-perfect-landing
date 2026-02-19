export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1b1a17] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
