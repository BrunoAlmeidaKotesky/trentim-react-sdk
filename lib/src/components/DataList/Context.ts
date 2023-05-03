import type { DataListStore } from "@models/interfaces/DataListStore";
import { createContext } from "react";

export const DataListCtx = createContext<DataListStore | null>(null);