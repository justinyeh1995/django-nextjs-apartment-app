"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CreateApartment from '@/components/CreateApartment';
import ApartmentList from '@/components/ApartmentList';
import Pagination from '@/components/Pagination';
import { Apartment, PaginatedResponse } from './Shared/interfaces';

const ApartmentManagement = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchApartments = async (page: number, search: string = '') => {
    setIsLoading(true);
    try {
      const response = await mockApiCall(page, search);
      setApartments(response.apartments);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
      
      if (response.firstMatchPage && response.firstMatchPage !== response.currentPage) {
        const newPageResponse = await mockApiCall(response.firstMatchPage, search);
        setApartments(newPageResponse.apartments);
        setCurrentPage(newPageResponse.currentPage);
      }
    } catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    fetchApartments(1, term);
  };

  const handleCreate = async (name: string) => {
    try {
      await mockCreateApartment(name);
      fetchApartments(currentPage, searchTerm);
    } catch (error) {
      console.error('Error creating apartment:', error);
    }
  };

  const handleEdit = async (id: number, newName: string) => {
    try {
      await mockEditApartment(id, newName);
      fetchApartments(currentPage, searchTerm);
    } catch (error) {
      console.error('Error updating apartment:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await mockDeleteApartment(id);
      fetchApartments(currentPage, searchTerm);
    } catch (error) {
      console.error('Error deleting apartment:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Apartment Management</h1>
      <SearchBar onSearch={handleSearch} />
      <CreateApartment onCreate={handleCreate} />
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <>
          <ApartmentList 
            apartments={apartments} 
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

// Mock API functions remain the same as in the previous example
// Mock API functions (replace these with real API calls in a production app)
const mockApiCall = (page: number, search: string): Promise<PaginatedResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const totalApartments = 50;
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const apartments = Array.from({ length: pageSize }, (_, i) => ({
          id: startIndex + i + 1,
          name: `Apartment ${startIndex + i + 1}`
        })).filter(apt => apt.name.toLowerCase().includes(search.toLowerCase()));
        resolve({
          apartments,
          totalPages: Math.ceil(totalApartments / pageSize),
          currentPage: page
        });
      }, 500); // Simulate network delay
    });
  };
  
  const mockCreateApartment = (name: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Created apartment: ${name}`);
        resolve();
      }, 500);
    });
  };
  
  const mockEditApartment = (id: number, newName: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Updated apartment ${id} to: ${newName}`);
        resolve();
      }, 500);
    });
  };
  
  const mockDeleteApartment = (id: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Deleted apartment: ${id}`);
        resolve();
      }, 500);
    });
  };
  
export default ApartmentManagement;