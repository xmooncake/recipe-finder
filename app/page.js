import CustomAppBar from "./components/custom-app-bar";
import { SearchWidget } from "./components/search";
import RecipeCard from "./components/recipe-card";
import { ApiClient } from "./provider/api-client";

export default function Home() {
  new ApiClient().getRecipes();

  return (
    <main>
      <CustomAppBar />
      <SearchWidget />
      <RecipeCard />
    </main> 
  );
}
