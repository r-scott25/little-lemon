import CustomerInfoPageStyles from "./CustomerInfoPageStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import dinnerTable from  "../assets/dinnerTable.jpg";

const CustomerInfoPage = () => {
  return (
    <>
    <Header />
    <main className="contactInfo-main-container">
    <HeroSection
        heroImage= {dinnerTable}
        imageAlt= "birds-eye-view of diners at a table with dishes of Italian food"
        title= "Contact Information"
        subtitle="We’ll keep you updated on your reservation!"
      />
    </main>
    <Footer />
    </>
  );
}

export default CustomerInfoPage;