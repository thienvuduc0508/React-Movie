import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useHeader = () => {
    const [show, setShow] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState('');
    const [showSearch, setShowSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    }

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    }
    const navigationHandler = (type) => {
        navigate(`/explore/${type}`);
        setMobileMenu(false);
    }

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return {
        show,
        lastScrollY,
        mobileMenu,
        query,
        showSearch,
        navigate,
        location,
        setMobileMenu,
        setQuery,
        setShowSearch,
        openSearch,
        openMobileMenu,
        navigationHandler,
        searchQueryHandler
    }
}