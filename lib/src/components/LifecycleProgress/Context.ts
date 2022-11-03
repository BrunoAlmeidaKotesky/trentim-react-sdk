import { LifecycleCallout } from "@models/interfaces/ILifecycleProgressProps";
import { createContext, Dispatch, SetStateAction } from "react";

export const CalloutCtx = createContext<{ setCallout: Dispatch<SetStateAction<LifecycleCallout>>, alwaysShowCallout: boolean, showCalloutOnlyOnActive: boolean, calloutIdx: number }>
({calloutIdx: null, setCallout: undefined, alwaysShowCallout: false, showCalloutOnlyOnActive: false});