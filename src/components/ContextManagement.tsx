import React, { createContext, useState } from "react";
import { productEn, productFa } from "../../public/assets";

interface dateProductType {
  name: string;
  image: any;
  price: number;
  category: string;
  taste: string;
  customer_satisfaction_percentage: number;
  id: string;
}

interface stateContextType {
  language: "Fa" | "En";
  setLanguage: React.Dispatch<React.SetStateAction<"Fa" | "En">>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  dataProduct: dateProductType[];
}

interface propsChildern {
  children: React.ReactNode;
}

export const languageProduct = createContext<stateContextType>({
  language: "Fa",
  setLanguage: () => {},
  filter: "همه",
  setFilter: () => {},
  dataProduct: productFa,
});

function ContextManagement({ children }: propsChildern) {
  const [language, setLanguage] = useState<"Fa" | "En">("Fa");
  const [filter, setFilter] = useState("همه");

  let dataProduct = productFa;

  if (language === "En") {
    dataProduct = productEn;
  }

  const values: stateContextType = {
    language,
    setLanguage,
    filter,
    setFilter,
    dataProduct,
  };
  return (
    <languageProduct.Provider value={values}>
      {children}
    </languageProduct.Provider>
  );
}

export default ContextManagement;
