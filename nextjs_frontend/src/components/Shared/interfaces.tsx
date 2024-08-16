export interface Apartment {
    id: number;
    name: string;
  }
  
export interface PaginatedResponse {
apartments: Apartment[];
totalPages: number;
currentPage: number;
firstMatchPage?: number;
}