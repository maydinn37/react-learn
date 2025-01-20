import Header from "./Header";
import Footer from "./Footerr";
import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {user && (
        <div
          style={{
            padding: 10,
            border: "1px solid red",
            width: "500px",
            marginLeft: "50px",
          }}
        >
          Bu Alan Sadece Giriş Yapılınca Gözükür.
        </div>
      )}
      APP
      <Footer />
    </>
  );
}
