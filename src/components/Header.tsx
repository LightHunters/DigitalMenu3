import { useContext } from "react";
import { languageProduct } from "./ContextManagement";

function Header() {

const LaProduct = useContext(languageProduct)

const {language,setLanguage,setFilter}=LaProduct

function handleLanguage() {
  setLanguage(prevLanguage=>prevLanguage==="Fa"?"En":"Fa")
  setFilter(language==="Fa"?"All":"همه")
}

  return (
    <div className="w-full rounded-lg text-cream-sand flex justify-between items-center mb-3 p-3 bg-brown-chestnut/80 shadow-[0_7px_5px] shadow-Dark-Mocha">
      <div className="flex gap-2">
        <p className="text-2xl md:text-4xl text-right font-vazir">{language==='Fa'?"کافه شهر":'Cufe Shar'}</p>
        <button className="border rounded h-fit px-1 shadow-[-2px_2px]" onClick={handleLanguage}>{language==="Fa"?'En':"Fa"}</button>
      </div>
      <img src="./logoCafe.png" alt="logo" className="size-12 rounded-full" />
    </div>
  );
}

export default Header