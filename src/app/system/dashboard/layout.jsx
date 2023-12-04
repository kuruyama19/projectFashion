import SubHeaderDashboard from "../../../../components/System/Dashboard/SubHeaderDashboard/SubHeaderDashboard";

export const metadata = {
  title: "Sistema",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
     <>
      <SubHeaderDashboard />
      {children}
      </>
  );
}