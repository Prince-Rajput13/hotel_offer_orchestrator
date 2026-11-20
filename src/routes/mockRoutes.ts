import { Router } from 'express';
import type { Request, Response } from 'express';
import type { SupplierHotel } from '../types/index.js';

const router = Router();

// ─── Supplier A data ──────────────────────────────────────────────────────────
const SUPPLIER_A_HOTELS: SupplierHotel[] = [
  { hotelId: 'a1', name: 'Holtin',         price: 120,  city: 'delhi', commissionPct: 10 },
  { hotelId: 'a2', name: 'Radison',         price: 250,  city: 'delhi', commissionPct: 12 },
  { hotelId: 'a3', name: 'The Grand',       price: 450,  city: 'delhi', commissionPct: 15 },
  { hotelId: 'a4', name: 'Blue Lotus',      price: 95,   city: 'delhi', commissionPct: 8  },
  { hotelId: 'a5', name: 'Marina Bay',      price: 310,  city: 'mumbai', commissionPct: 11 },
  { hotelId: 'a6', name: 'Leela Palace',    price: 580,  city: 'mumbai', commissionPct: 14 },
];

// ─── Supplier B data ──────────────────────────────────────────────────────────
const SUPPLIER_B_HOTELS: SupplierHotel[] = [
  { hotelId: 'b1', name: 'Holtin',         price: 110,  city: 'delhi', commissionPct: 9  },  // overlaps with A, cheaper
  { hotelId: 'b2', name: 'Radison',         price: 270,  city: 'delhi', commissionPct: 13 },  // overlaps with A, more expensive
  { hotelId: 'b3', name: 'Park Regency',   price: 185,  city: 'delhi', commissionPct: 10 },
  { hotelId: 'b4', name: 'Sunrise Inn',    price: 75,   city: 'delhi', commissionPct: 7  },
  { hotelId: 'b5', name: 'Marina Bay',     price: 295,  city: 'mumbai', commissionPct: 10 },  // overlaps with A, cheaper
  { hotelId: 'b6', name: 'Sea Pearl',      price: 420,  city: 'mumbai', commissionPct: 13 },
];

/**
 * GET /supplierA/hotels?city=delhi
 * Returns static list; optionally filtered by city query param.
 */
router.get('/hotels', (req: Request, res: Response) => {
  const city = (req.query['city'] as string | undefined)?.toLowerCase().trim();
  const result = city
    ? SUPPLIER_A_HOTELS.filter((h) => h.city === city)
    : SUPPLIER_A_HOTELS;
  res.json(result);
});

export { router as supplierARouter };
export const supplierBRouter = (() => {
  const r = Router();
  r.get('/hotels', (req: Request, res: Response) => {
    const city = (req.query['city'] as string | undefined)?.toLowerCase().trim();
    const result = city
      ? SUPPLIER_B_HOTELS.filter((h) => h.city === city)
      : SUPPLIER_B_HOTELS;
    res.json(result);
  });
  return r;
})();
