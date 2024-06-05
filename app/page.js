"use client";

import CustomAppBar from "./components/custom-app-bar";
import RecipesGrid from "./components/recipes-grid";
import { useState, useEffect } from "react";
import { ApiClient } from "./provider/api-client";
import { Box, CircularProgress} from "@mui/material";
import PaginationWidget from "./components/pagination-widget";

const apiClient = new ApiClient();

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  apiClient.getRecipes();

  const fetchRecipes = async (term) => {
    try {
      const fetchedRecipes = await apiClient.getRecipes(term);
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        const initialRecipes = await apiClient.getRecipes();
        setRecipes(initialRecipes);
      } catch (error) {
        console.error('Error fetching initial recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialRecipes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setPage(1);
      setRecipes([]);
      fetchRecipes(searchTerm);
    }
  }, [searchTerm]);

  const handlePageChange = async (newPage) => {
    setPage(newPage);
    try {
      const nextPageRecipes = await apiClient.getNextPage();
      setRecipes((prevRecipes) => nextPageRecipes);
    } catch (error) {
      console.error('Error fetching next page of recipes:', error);
    }
  };

  return (
<main className="body" style={{ backgroundColor: '#ffffff', margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  
        <CustomAppBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Search the recipes"  />
      if(!loading && recipes.length === 0) {
        <div style={{  }}>
          <h2>No recipes found</h2>
        </div>
      }
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </div>
      ) : (
        <RecipesGrid
          recipes={recipes}
          page={page}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
      {
        loading ? <Box /> : PaginationWidget({ page, maxPage: apiClient.finalPage, onPageChange: handlePageChange })
      }

    </main>
  );
}