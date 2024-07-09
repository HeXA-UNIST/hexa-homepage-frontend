


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function NotFound() {
  return (
    <>
        <Header/>
        <div className=" pt-80 min-h-[50rem]">
            <h1 className=" text-5xl font-bold text-red-700">Not Found!</h1>
        </div>
        <Footer/>
    </>
  );
}

export default NotFound;
