"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
    setTheme: () => {},
});

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Handle theme changes
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newTheme);
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as Theme;
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light";
            const initialTheme = savedTheme || systemTheme;

            setThemeState(initialTheme);
            document.documentElement.classList.add(initialTheme);
            setMounted(true);
        }
    }, []);

    // Listen for system theme changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            const handleChange = (e: MediaQueryListEvent) => {
                if (!localStorage.getItem("theme")) {
                    setTheme(e.matches ? "dark" : "light");
                }
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
