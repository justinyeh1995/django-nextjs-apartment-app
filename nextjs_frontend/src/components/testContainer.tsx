"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CreateApartment from '@/components/CreateApartment';
import ApartmentList from '@/components/ApartmentList';
import Pagination from '@/components/Pagination';
import { Apartment, PaginatedResponse } from './Shared/interfaces';

const API_BASE_URL = 'http://localhost:8000/v1/apartment/';

const ApartmentManagement = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [displayedApartments, setDisplayedApartments] = useState<Apartment[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 10;

  const fetchAllApartments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllApartments();
  }, []);

  useEffect(() => {
    const filteredApartments = apartments.filter(apt =>
      apt.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedApartments(filteredApartments.slice(startIndex, endIndex));
  }, [apartments, currentPage, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCreate = async (name: string) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error('Failed to create apartment');
      }
      fetchAllApartments();
    } catch (error) {
      console.error('Error creating apartment:', error);
    }
  };

  const handleEdit = async (id: number, newName: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });
      if (!response.ok) {
        throw new Error('Failed to update apartment');
      }
      fetchAllApartments();
    } catch (error) {
      console.error('Error updating apartment:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete apartment');
      }
      fetchAllApartments();
    } catch (error) {
      console.error('Error deleting apartment:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-400">Apartment Management Demo</h1>
      <SearchBar onSearch={handleSearch} />
      <CreateApartment onCreate={handleCreate} />
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <>
          <ApartmentList 
            apartments={displayedApartments} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
    </div>
  );
};

export default ApartmentManagement;