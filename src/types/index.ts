// ─── Domain Types ────────────────────────────────────────────────────────────

export interface SupplierHotel {
  hotelId: string;
  name: string;
  price: number;
  city: string;
  commissionPct: number;
}

export interface Hotel {
  hotelId: string;
  name: string;
  price: number;
  city: string;
  supplier: string;
  commissionPct: number;
}

export interface SupplierResponse {
  hotels: SupplierHotel[];
  supplier: string;
}

// ─── Workflow Input / Output ──────────────────────────────────────────────────

export interface HotelSearchInput {
  city: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface HotelSearchOutput {
  hotels: Hotel[];
  fromCache: boolean;
}

// ─── Health ───────────────────────────────────────────────────────────────────

export interface SupplierHealthStatus {
  name: string;
  healthy: boolean;
  latencyMs?: number;
  error?: string;
}

export interface HealthResponse {
  status: 'ok' | 'degraded' | 'down';
  timestamp: string;
  redis: boolean;
  suppliers: SupplierHealthStatus[];
}
