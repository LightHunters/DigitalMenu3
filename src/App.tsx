import { useContext } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import ListMenu from "./components/ListMenu";
import Category from "./components/Category";
import { languageProduct } from "./components/ContextManagement";

function App() {

const LaProduct = useContext(languageProduct);

const {filter, language}=LaProduct

  return (
    <div className="bg_mobail md:bg_desktop min-h-screen flex justify-center items-center h-screen">
      <div className={`${language==="Fa"&&"rt1"} grid  md:grid-cols-[100px_max(500px)] gap-4 px-5`}>
        <div className="hidden md:block h-[90vh]  bg-light-beige/90 rounded-lg">
          <Filter
            classFilter={
              "hidden md:flex flex-col flex-wrap justify-center gap-4 p-2"
            }
          />
        </div>
        <div className="h-[90vh] max-w-[500px] bg-light-beige/90 rounded-lg overflow-auto">
          <Header />
          <Filter
            classFilter={"md:hidden flex flex-wrap justify-center gap-2 px-2"}
          />
          {filter == "All"||filter=="همه" ? <ListMenu /> : <Category category={filter} />}
        </div>
      </div>
    </div>
  );
}

export default App;
