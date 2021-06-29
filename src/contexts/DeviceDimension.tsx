import { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface DeviceDimensionsProviderProps {
    children: ReactNode
}
interface Dimensions {
    width: number;
    height: number;
}
interface DeviceDimensions {
    isMobile: boolean;
    isDesktop: boolean;
    dimensions: Dimensions;
}

const DeviceDimensionsContext = createContext({} as DeviceDimensions);

export function DeviceDimensionsProvider({ children }: DeviceDimensionsProviderProps) {
    const [dimensions, setDimensions] = useState<Dimensions>({} as Dimensions);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        })
        return () => window.removeEventListener('resize', () => { });
    }, []);


    return (
        <DeviceDimensionsContext.Provider value={{
            isDesktop: dimensions.width >= 768, // ipad width 
            isMobile: dimensions.width < 768,
            dimensions: dimensions
        }}>
            {children}
        </DeviceDimensionsContext.Provider>
    )
}

export const useDeviceDimension = () => useContext(DeviceDimensionsContext)